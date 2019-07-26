import Actions from 'actions';
import {PartLockedReason} from 'constants/part';
import ReducerHelper from 'helpers/reducer-helper';
import update from 'immutability-helper';

function getPartAggregatedStates(nanodegree) {
  var aggregatedStates = ReducerHelper.getPartAggregatedStatesForNanodegree(
    nanodegree
  );
  return _.map(aggregatedStates, (as) =>
    _.omit(as, 'module_aggregated_states')
  );
}

function updateParts(state, parts) {
  if (!parts || parts.length === 0) {
    return state;
  }

  var update = _.reduce(
    parts,
    (memo, part) => {
      var reducedPart = ReducerHelper.mapPropertyCollectionToKeys(
        part,
        'modules'
      );
      reducedPart = ReducerHelper.mapPropertiesToKeys(reducedPart, 'project');
      memo[reducedPart.key] = reducedPart;
      return memo;
    },
    {}
  );

  return ReducerHelper.merge({}, state, update);
}

function updateFromNanodegree(state, nanodegree) {
  var parts = ReducerHelper.getPartsForNanodegree(nanodegree);
  state = updateParts(state, parts);
  state = ReducerHelper.mergeAggregatedStates(
    state,
    getPartAggregatedStates(nanodegree)
  );

  return state;
}

export default function(state = {}, action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case Actions.Types.CLEAR_CONTENT:
      state = {};
      break;

    case Actions.Types.FETCH_NANODEGREE_COMPLETED: {
      var nanodegree = action.payload;
      state = updateFromNanodegree(state, nanodegree);
      break;
    }

    case Actions.Types.FETCH_ME_COMPLETED: {
      const {nanodegrees} = action.payload;
      _.each(nanodegrees, (nanodegree) => {
        const parts = ReducerHelper.getPartsForNanodegree(nanodegree);
        state = updateParts(state, parts);
      });
      break;
    }

    case Actions.Types.UPDATE_CONCEPT_COUNTS: {
      const {partKey, moduleKey, lastViewedAt, increment} = action.payload;
      var part = state[partKey];
      if (part) {
        const updatedPart = ReducerHelper.updateAggregatedState(
          part,
          moduleKey,
          lastViewedAt,
          increment
        );
        state = {...state, [partKey]: updatedPart};
      }
      break;
    }

    case Actions.Types.CREATE_USER_SPECIALIZATION_COMPLETE: {
      const {part_key} = action.payload;
      state = update(state, {
        [part_key]: {locked_reason: {$set: PartLockedReason.NOT_LOCKED}}
      });
      break;
    }

    case Actions.Types.FETCH_SPECIALIZATION_PRICES_COMPLETE: {
      const updates = _.chain(action.payload)
        .keyBy(({items}) => {
          const partItem = _.find(items, {type: 'specialization-part-key'});
          return _.get(partItem, 'key', null);
        })
        .omit(null) // Didn't find a specialization-part-key URN
        .pickBy((value, key) => _.has(state, key)) // The part itself is not loaded
        .mapValues(({amount}) => ({specialization: {pricing: {$set: amount}}}))
        .value();

      state = update(state, updates);
      break;
    }
  }

  return state;
}
