import Actions from 'actions';
import ReducerHelper from 'helpers/reducer-helper';
import VersioningHelper from 'helpers/versioning-helper';

function updateNanodegrees(state, nanodegrees) {
  var update = _.reduce(
    nanodegrees,
    (memo, nanodegree) => {
      var nanodegreeToMemoize;
      if (nanodegree.parts) {
        nanodegreeToMemoize = ReducerHelper.mapPropertyCollectionToKeys(
          nanodegree,
          'parts'
        );
      } else {
        nanodegreeToMemoize = nanodegree;
      }
      memo[nanodegree.key] = _.omit(nanodegreeToMemoize, 'aggregated_state');
      return memo;
    },
    {}
  );

  return ReducerHelper.merge({}, state, update);
}

function getAggregatedState(nanodegree) {
  var aggregatedState = ReducerHelper.getAggregatedStateForNanodegree(
    nanodegree
  );
  return _.omit(aggregatedState, 'part_aggregated_states');
}

export default function(state = {}, action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case Actions.Types.CLEAR_CONTENT:
      state = {};
      break;

    case Actions.Types.FETCH_NANODEGREE_COMPLETED:
      var nanodegree = action.payload;
      state = updateNanodegrees(state, [nanodegree]);
      state = ReducerHelper.mergeAggregatedStates(state, [
        getAggregatedState(nanodegree)
      ]);
      break;

    case Actions.Types.FETCH_NANODEGREE_PROJECT_STATES_COMPLETED:
      var nanodegree = action.payload;
      nanodegree = {
        key: nanodegree.key,
        projects: VersioningHelper.getProjectStates(nanodegree)
      };
      state = updateNanodegrees(state, [nanodegree]);
      break;

    case Actions.Types.FETCH_SUBSCRIBED_NANODEGREES_COMPLETED:
      var nanodegrees = action.payload;
      _.each(nanodegrees, (nanodegree) => {
        nanodegree.projects = VersioningHelper.getProjectStates(nanodegree);
      });
      state = updateNanodegrees(state, nanodegrees);

      break;

    case Actions.Types.FETCH_DEFAULT_NANODEGREES_COMPLETED:
      var defaultNanodegrees = action.payload;

      _.each(defaultNanodegrees, (defaultNanodegree) => {
        let nanodegree = state[defaultNanodegree.key];
        nanodegree.default_version = defaultNanodegree;
        nanodegree.default_version.projects = VersioningHelper.getProjects(
          nanodegree.default_version
        );
        nanodegree.default_version.projectsLostInNewVersion = VersioningHelper.findCompletedProjectsNotInList(
          nanodegree.projects,
          nanodegree.default_version.projects
        );
        state = updateNanodegrees(state, [nanodegree]);
      });
      return state;

    case Actions.Types.FETCH_NANODEGREE_READY_FOR_GRADUATION_COMPLETED:
      var nanodegree = action.payload;
      state = updateNanodegrees(state, [nanodegree]);
      break;

    case Actions.Types.FETCH_ME_COMPLETED:
      var {nanodegrees} = action.payload;
      var all = _.compact(nanodegrees);

      state = updateNanodegrees(state, all);
      break;

    case Actions.Types.UPDATE_NANODEGREE_LAST_VIEWED_AT_COMPLETED:
      var {user_state} = action.payload;
      if (user_state) {
        state = ReducerHelper.mergeUserState(state, user_state);
      }
      break;

    case Actions.Types.UPDATE_CONCEPT_COUNTS:
      const {nanodegreeKey, partKey, lastViewedAt, increment} = action.payload;
      var nanodegree = state[nanodegreeKey];
      if (nanodegree) {
        const updatedNanodegree = ReducerHelper.updateAggregatedState(
          nanodegree,
          partKey,
          lastViewedAt,
          increment
        );
        state = {...state, [nanodegreeKey]: updatedNanodegree};
      }
      break;
  }

  return state;
}
