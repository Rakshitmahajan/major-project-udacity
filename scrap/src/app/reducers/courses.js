import Actions from 'actions';
import ReducerHelper from 'helpers/reducer-helper';

function updateCourses(state, courses) {
  var update = _.reduce(
    courses,
    (memo, course) => {
      var reducedCourse = ReducerHelper.mapPropertyCollectionToKeys(
        course,
        'lessons'
      );
      var project = reducedCourse.project;
      reducedCourse = _.omit(reducedCourse, 'project');
      reducedCourse._project_key = (project || {}).key;
      memo[course.key] = _.omit(reducedCourse, 'aggregated_state');
      return memo;
    },
    {}
  );

  return ReducerHelper.merge({}, state, update);
}

function getAggregatedState(course) {
  var aggregatedState = ReducerHelper.getAggregatedStateForCourse(course);
  return _.omit(aggregatedState, 'lesson_aggregated_states');
}

export default function(state = {}, action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case Actions.Types.CLEAR_CONTENT:
      state = {};
      break;

    case Actions.Types.FETCH_COURSE_COMPLETED:
      var course = action.payload;
      state = updateCourses(state, [course]);
      state = ReducerHelper.mergeAggregatedStates(state, [
        getAggregatedState(course)
      ]);
      break;

    case Actions.Types.FETCH_SUBSCRIBED_COURSES_COMPLETED:
      var courses = action.payload;
      state = updateCourses(state, courses);

      break;

    case Actions.Types.FETCH_ME_COMPLETED:
      var {courses} = action.payload;
      state = updateCourses(state, courses);
      break;

    case Actions.Types.UPDATE_COURSE_LAST_VIEWED_AT_COMPLETED:
      var {user_state} = action.payload;
      if (user_state) {
        state = ReducerHelper.mergeUserState(state, user_state);
      }
      break;

    case Actions.Types.UPDATE_CONCEPT_COUNTS:
      const {courseKey, lessonKey, lastViewedAt, increment} = action.payload;
      var course = state[courseKey];
      if (course) {
        const updatedCourse = ReducerHelper.updateAggregatedState(
          course,
          lessonKey,
          lastViewedAt,
          increment
        );
        state = {...state, [courseKey]: updatedCourse};
      }
      break;
  }

  return state;
}
