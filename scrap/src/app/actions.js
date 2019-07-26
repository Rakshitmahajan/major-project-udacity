import * as ScheduleReminderService from 'services/schedule-reminder-service';

/* Following Flux Standard Actions: https://github.com/acdlite/flux-standard-action */
import {ratingLoader, submitRating} from '@udacity/ureact-rate-nanodegree';

import AdExperimentService from 'services/ad-experiment-service';
import AdmissionsApiService from 'services/admissions-api-service';
import BraavosService from 'services/braavos-service';
import CareersApiService from './services/careers-api-service';
import CohortsService from 'services/cohorts-service';
import CoursesService from 'services/courses-service';
import ExperimentsApi from 'services/experiments-api-service';
import FacebookApiService from 'services/facebook-api-service';
import GoogleApiService from 'services/google-api-service';
import HubBffService from 'services/hub-bff-service';
import LabsService from 'services/labs-service';
import LessonsService from 'services/lessons-service';
import NanodegreesService from 'services/nanodegrees-service';
import NotificationPreferencesApiService from 'services/notification-preferences-api-service';
import PartsService from 'services/parts-service';
import ReviewsApiService from 'services/reviews-api-service';
import SettingsHelper from 'helpers/settings-helper';
import UhomeService from 'services/uhome-service';
import UserService from 'services/user-service';
import UserStatesService from 'services/user-states-service';
import {i18n} from 'services/localization-service';

const Types = {
  CLEAR_CONTENT: 'CLEAR_CONTENT',
  AUTHENTICATION_COMPLETED: 'AUTHENTICATION_COMPLETED',
  CANCEL_COURSE: 'CANCEL_COURSE',
  CANCEL_COURSE_COMPLETED: 'CANCEL_COURSE_COMPLETED',
  CANCEL_PROJECT_SUBMISSION: 'CANCEL_PROJECT_SUBMISSION',
  CANCEL_PROJECT_SUBMISSION_COMPLETED: 'CANCEL_PROJECT_SUBMISSION_COMPLETED',
  CANCEL_SUBSCRIPTION: 'CANCEL_SUBSCRIPTION',
  CANCEL_SUBSCRIPTION_COMPLETED: 'CANCEL_SUBSCRIPTION_COMPLETED',
  CANCEL_TERM_PURCHASE: 'CANCEL_TERM_PURCHASE',
  CANCEL_TERM_PURCHASE_COMPLETED: 'CANCEL_TERM_PURCHASE_COMPLETED',
  CREATE_ERROR_ALERT: 'CREATE_ERROR_ALERT',
  CREATE_NOTIFICATION_ALERT: 'CREATE_NOTIFICATION_ALERT',
  CREATE_SUCCESS_ALERT: 'CREATE_SUCCESS_ALERT',
  CREATE_WARNING_ALERT: 'CREATE_WARNING_ALERT',
  CREATE_USER_SPECIALIZATION: 'CREATE_USER_SPECIALIZATION',
  CREATE_USER_SPECIALIZATION_COMPLETE: 'CREATE_USER_SPECIALIZATION_COMPLETE',
  DELETE_PAYMENT_METHOD: 'DELETE_PAYMENT_METHOD',
  DELETE_PAYMENT_METHOD_COMPLETED: 'DELETE_PAYMENT_METHOD_COMPLETED',
  DELETE_SOCIAL_LOGIN: 'DELETE_SOCIAL_LOGIN',
  DELETE_SOCIAL_LOGIN_COMPLETED: 'DELETE_SOCIAL_LOGIN_COMPLETED',
  DISMISS_CUSTOM_NOTIFICATION: 'DISMISS_CUSTOM_NOTIFICATION',
  DISPLAY_CUSTOM_NOTIFICATION: 'DISPLAY_CUSTOM_NOTIFICATION',
  FETCH_ACCOUNT_CREDIT_TOTAL: 'FETCH_ACCOUNT_CREDIT_TOTAL',
  FETCH_ACCOUNT_CREDIT_TOTAL_COMPLETED: 'FETCH_ACCOUNT_CREDIT_TOTAL_COMPLETED',
  FETCH_APPLICATIONS: 'FETCH_APPLICATIONS',
  FETCH_APPLICATIONS_COMPLETED: 'FETCH_APPLICATIONS_COMPLETED',
  FETCH_BILL: 'FETCH_BILL',
  FETCH_BILL_COMPLETED: 'FETCH_BILL_COMPLETED',
  FETCH_CONNECT_ENROLLMENT: 'FETCH_CONNECT_ENROLLMENT',
  FETCH_CONNECT_ENROLLMENT_COMPLETED: 'FETCH_CONNECT_ENROLLMENT_COMPLETED',
  FETCH_CONNECT_PROGRESS: 'FETCH_CONNECT_PROGRESS',
  FETCH_CONNECT_PROGRESS_COMPLETED: 'FETCH_CONNECT_PROGRESS_COMPLETED',
  FETCH_COURSE: 'FETCH_COURSE',
  FETCH_COURSE_COMPLETED: 'FETCH_COURSE_COMPLETED',
  FETCH_COURSE_NAME: 'FETCH_COURSE_NAME',
  FETCH_COURSE_NAME_COMPLETED: 'FETCH_COURSE_NAME_COMPLETED',
  FETCH_COURSE_PROJECT_STATES: 'FETCH_COURSE_PROJECT_STATES',
  FETCH_COURSE_PROJECT_STATES_COMPLETED:
    'FETCH_COURSE_PROJECT_STATES_COMPLETED',
  FETCH_CURRENT_NANODEGREES_AND_COURSES:
    'FETCH_CURRENT_NANODEGREES_AND_COURSES',
  FETCH_CURRENT_NANODEGREES_AND_COURSES_COMPLETED:
    'FETCH_CURRENT_NANODEGREES_AND_COURSES_COMPLETED',
  FETCH_FACEBOOK_NAME: 'FETCH_FACEBOOK_NAME',
  FETCH_FACEBOOK_NAME_COMPLETED: 'FETCH_FACEBOOK_NAME_COMPLETED',
  FETCH_GOOGLE_NAME: 'FETCH_GOOGLE_NAME',
  FETCH_GOOGLE_NAME_COMPLETED: 'FETCH_GOOGLE_NAME_COMPLETED',
  FETCH_GRADUATED_NANODEGREES_AND_COURSES:
    'FETCH_GRADUATED_NANODEGREES_AND_COURSES',
  FETCH_GRADUATED_NANODEGREES_AND_COURSES_COMPLETED:
    'FETCH_GRADUATED_NANODEGREES_AND_COURSES_COMPLETED',
  FETCH_LAB: 'FETCH_LAB',
  FETCH_LAB_COMPLETED: 'FETCH_LAB_COMPLETED',
  FETCH_LESSON: 'FETCH_LESSON',
  FETCH_LESSON_COMPLETED: 'FETCH_LESSON_COMPLETED',
  FETCH_ME: 'FETCH_ME',
  FETCH_ME_COMPLETED: 'FETCH_ME_COMPLETED',
  FETCH_NANODEGREE: 'FETCH_NANODEGREE',
  FETCH_NANODEGREE_COMPLETED: 'FETCH_NANODEGREE_COMPLETED',
  FETCH_DEFAULT_NANODEGREES: 'FETCH_DEFAULT_NANODEGREES',
  FETCH_DEFAULT_NANODEGREES_COMPLETED: 'FETCH_DEFAULT_NANODEGREES_COMPLETED',
  FETCH_NANODEGREES_BY_KEY: 'FETCH_NANODEGREES_BY_KEY',
  FETCH_NANODEGREES_BY_KEY_COMPLETED: 'FETCH_NANODEGREES_BY_KEY_COMPLETED',
  LOAD_NANODEGREE_RATING: 'LOAD_NANODEGREE_RATING',
  LOAD_NANODEGREE_RATING_COMPLETED: 'LOAD_NANODEGREE_RATING_COMPLETED',
  FETCH_NANODEGREE_PROJECT_STATES: 'FETCH_NANODEGREE_PROJECT_STATES',
  FETCH_NANODEGREE_PROJECT_STATES_COMPLETED:
    'FETCH_NANODEGREE_PROJECT_STATES_COMPLETED',
  FETCH_NANODEGREE_READY_FOR_GRADUATION:
    'FETCH_NANODEGREE_READY_FOR_GRADUATION',
  FETCH_NANODEGREE_READY_FOR_GRADUATION_COMPLETED:
    'FETCH_NANODEGREE_READY_FOR_GRADUATION_COMPLETED',
  FETCH_ORDER_HISTORY: 'FETCH_ORDER_HISTORY',
  FETCH_ORDER_HISTORY_COMPLETED: 'FETCH_ORDER_HISTORY_COMPLETED',
  FETCH_PART_CONCEPTS_USER_STATES: 'FETCH_PART_CONCEPTS_USER_STATES',
  FETCH_PART_CONCEPTS_USER_STATES_COMPLETED:
    'FETCH_PART_CONCEPTS_USER_STATES_COMPLETED',
  FETCH_SCHEDULES: 'FETCH_SCHEDULES',
  FETCH_SCHEDULES_COMPLETED: 'FETCH_SCHEDULES_COMPLETED',
  UPDATE_SCHEDULE: 'UPDATE_SCHEDULE',
  UPDATE_SCHEDULE_COMPLETED: 'UPDATE_SCHEDULE_COMPLETED',
  FETCH_SPECIALIZATION_PRICES: 'FETCH_SPECIALIZATION_PRICES',
  FETCH_SPECIALIZATION_PRICES_COMPLETE: 'FETCH_SPECIALIZATION_PRICES_COMPLETED',
  FETCH_SUBSCRIBED_COURSES: 'FETCH_SUBSCRIBED_COURSES',
  FETCH_SUBSCRIBED_COURSES_COMPLETED: 'FETCH_SUBSCRIBED_COURSES_COMPLETED',
  FETCH_SUBSCRIBED_NANODEGREES: 'FETCH_SUBSCRIBED_NANODEGREES',
  FETCH_SUBSCRIBED_NANODEGREES_COMPLETED:
    'FETCH_SUBSCRIBED_NANODEGREES_COMPLETED',
  FETCH_USER_BASE: 'FETCH_USER_BASE',
  FETCH_USER_BASE_COMPLETED: 'FETCH_USER_BASE_COMPLETED',
  FETCH_USER_CURRENCY: 'FETCH_USER_CURRENCY',
  FETCH_USER_CURRENCY_COMPLETED: 'FETCH_USER_CURRENCY_COMPLETED',
  FETCH_USER_GEO_LOCATION: 'FETCH_USER_GEO_LOCATION',
  FETCH_USER_GEO_LOCATION_COMPLETED: 'FETCH_USER_GEO_LOCATION_COMPLETED',
  HIDE_SEARCH: 'HIDE_SEARCH',
  HIDE_VERSION_PICKER: 'HIDE_VERSION_PICKER',
  NOTIFY_PHONE_VERIFICATION_COMPLETE: 'NOTIFY_PHONE_VERIFICATION_COMPLETE',
  PAUSE_NOTIFICATIONS: 'PAUSE_NOTIFICATIONS',
  REMOVE_ALERT: 'REMOVE_ALERT',
  RESUME_NOTIFICATIONS: 'RESUME_NOTIFICATIONS',
  SHOW_SEARCH: 'SHOW_SEARCH',
  SHOW_VERSION_PICKER: 'SHOW_VERSION_PICKER',
  SUBMIT_NANODEGREE_RATING: 'SUBMIT_NANODEGREE_RATING',
  SUBMIT_NANODEGREE_RATING_COMPLETED: 'SUBMIT_NANODEGREE_RATING_COMPLETED',
  TOGGLE_RESOURCES_SIDEBAR: 'TOGGLE_RESOURCES_SIDEBAR',
  TOGGLE_SEARCH: 'TOGGLE_SEARCH',
  CANCEL_ORDER: 'CANCEL_ORDER',
  CANCEL_ORDER_COMPLETED: 'CANCEL_ORDER_COMPLETED',
  UNCANCEL_ORDER: 'UNCANCEL_ORDER',
  UNCANCEL_ORDER_COMPLETED: 'UNCANCEL_ORDER_COMPLETED',
  UPDATE_AUTO_RENEW: 'UPDATE_AUTO_RENEW',
  UPDATE_AUTO_RENEW_COMPLETED: 'UPDATE_AUTO_RENEW_COMPLETED',
  UPDATE_BILLING_ADDRESS: 'UPDATE_BILLING_ADDRESS',
  UPDATE_BILLING_ADDRESS_COMPLETED: 'UPDATE_BILLING_ADDRESS_COMPLETED',
  UPDATE_LAB_RESULT: 'UPDATE_LAB_RESULT',
  UPDATE_LAB_RESULT_COMPLETED: 'UPDATE_LAB_RESULT_COMPLETED',
  UPDATE_CONCEPT_COUNTS: 'UPDATE_CONCEPT_COUNTS',
  UPDATE_CONCEPT_LAST_VIEWED_AT: 'UPDATE_CONCEPT_LAST_VIEWED_AT',
  UPDATE_CONCEPT_LAST_VIEWED_AT_COMPLETED:
    'UPDATE_CONCEPT_LAST_VIEWED_AT_COMPLETED',
  UPDATE_COURSE_LAST_VIEWED_AT: 'UPDATE_COURSE_LAST_VIEWED_AT',
  UPDATE_COURSE_LAST_VIEWED_AT_COMPLETED:
    'UPDATE_COURSE_LAST_VIEWED_AT_COMPLETED',
  UPDATE_DEFAULT_CARD: 'UPDATE_DEFAULT_CARD',
  UPDATE_DEFAULT_CARD_COMPLETED: 'UPDATE_DEFAULT_CARD_COMPLETED',
  UPDATE_DEFAULT_SOURCE: 'UPDATE_DEFAULT_SOURCE',
  UPDATE_DEFAULT_SOURCE_COMPLETED: 'UPDATE_DEFAULT_SOURCE_COMPLETED',
  UPDATE_LANGUAGE: 'UPDATE_LANGUAGE',
  UPDATE_LANGUAGE_COMPLETED: 'UPDATE_LANGUAGE_COMPLETED',
  UPDATE_NANODEGREE_LAST_VIEWED_AT: 'UPDATE_NANODEGREE_LAST_VIEWED_AT',
  UPDATE_NANODEGREE_LAST_VIEWED_AT_COMPLETED:
    'UPDATE_NANODEGREE_LAST_VIEWED_AT_COMPLETED',
  FETCH_NOTIFICATION_PREFERENCES: 'FETCH_NOTIFICATION_PREFERENCES',
  FETCH_NOTIFICATION_PREFERENCES_COMPLETED:
    'FETCH_NOTIFICATION_PREFERENCES_COMPLETED',
  UPDATE_NOTIFICATION_PREFERENCES: 'UPDATE_NOTIFICATION_PREFERENCES',
  UPDATE_NOTIFICATION_PREFERENCES_COMPLETED:
    'UPDATE_NOTIFICATION_PREFERENCES_COMPLETED',
  UPDATE_NOTIFICATION_PREFERENCES_UNSUBSCRIBE_ALL:
    'UPDATE_NOTIFICATION_PREFERENCES_UNSUBSCRIBE_ALL',
  UPDATE_NOTIFICATION_PREFERENCES_UNSUBSCRIBE_ALL_COMPLETED:
    'UPDATE_NOTIFICATION_PREFERENCES_UNSUBSCRIBE_ALL_COMPLETED',
  UPDATE_UNSTRUCTURED_DATA: 'UPDATE_UNSTRUCTURED_DATA',
  UPDATE_UNSTRUCTURED_DATA_COMPLETED: 'UPDATE_UNSTRUCTURED_DATA_COMPLETED',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_USER_COMPLETED: 'UPDATE_USER_COMPLETED',
  UPDATE_USER_SETTINGS: 'UPDATE_USER_SETTINGS',
  UPDATE_USER_SETTINGS_COMPLETED: 'UPDATE_USER_SETTINGS_COMPLETED',
  FETCH_AD_EXPERIMENTS: 'FETCH_AD_EXPERIMENTS',
  FETCH_AD_EXPERIMENTS_COMPLETED: 'FETCH_AD_EXPERIMENTS_COMPLETED',
  FETCH_CAREER_SERVICES: 'FETCH_CAREER_SERVICES',
  FETCH_CAREER_SERVICES_COMPLETED: 'FETCH_CAREER_SERVICES_COMPLETED',
  FETCH_COHORTS: 'FETCH_COHORTS',
  FETCH_COHORTS_COMPLETED: 'FETCH_COHORTS_COMPLETED',
  FETCH_FEATURE_ENABLED: 'FETCH_FEATURE_ENABLED',
  FETCH_FEATURE_ENABLED_COMPLETED: 'FETCH_FEATURE_ENABLED_COMPLETED',
  FETCH_STUDENT_HUB_LOBBY: 'FETCH_STUDENT_HUB_LOBBY',
  FETCH_STUDENT_HUB_LOBBY_COMPLETED: 'FETCH_STUDENT_HUB_LOBBY_COMPLETED',
  FETCH_STUDENT_HUB_UNREADS: 'FETCH_STUDENT_HUB_UNREADS',
  FETCH_STUDENT_HUB_UNREADS_COMPLETED: 'FETCH_STUDENT_HUB_UNREADS_COMPLETED',
  SET_STUDENT_HUB_TOOLTIP: 'SET_STUDENT_HUB_TOOLTIP',
  DISMISS_STUDENT_HUB_TOOLTIP: 'DISMISS_STUDENT_HUB_TOOLTIP',
  FETCH_MENTOR_CONVERSATIONS: 'FETCH_MENTOR_CONVERSATIONS',
  FETCH_MENTOR_CONVERSATIONS_COMPLETE: 'FETCH_MENTOR_CONVERSATIONS_COMPLETE'
};

export function createAction(type, payload) {
  const error = payload instanceof Error;
  return {
    type,
    payload: error
      ? {
          stack: payload.stack,
          message: payload.message
        }
      : payload,
    error
  };
}

/**
 *  This is a convenience method for creating asynchronous actions. It takes care of reducing common async
 *  code like this:
 *
 *  ```
 *   function update(key) {
 *     return (dispatch) => {
 *       dispatch({
 *         type: 'UPDATE'
 *       });
 *
 *       return doUpdate(key).then((response) => {
 *         dispatch({
 *           type: 'UPDATE_COMPLETED',
 *           payload: response
 *         });
 *       }).catch((error) => {
 *         dispatch({
 *           type: 'UPDATE_COMPLETED',
 *           payload: error,
 *           error: true
 *         });
 *       });
 *     };
 *    }
 *   ```
 *
 *   to
 *
 *
 *   ```
 *   function update(key) {
 *     return createAsyncAction('UPDATE', 'UPDATE_COMPLETED', () => {
 *       return doUpdate(key);
 *     });
 *   }
 *   ```
 *
 *   @param  {String} startType
 *   @param  {String} completeType
 *   @param  {Function} asyncFn
 *   @return {Function}
 */
function createAsyncAction(startType, completeType, asyncFn, options = {}) {
  return (dispatch) => {
    if (options['startPayload']) {
      dispatch(createAction(startType, options['startPayload']));
    } else {
      dispatch(createAction(startType));
    }

    const actionCompleted = _.curry(createAction)(completeType);
    return asyncFn(dispatch)
      .then((data) => {
        dispatch(actionCompleted(data));
        return data;
      })
      .catch((error) => {
        dispatch(actionCompleted(error));
        throw _.isError(error) ? error : new Error(error);
      });
  };
}

function updateLastViewedAt({rootKey, rootId, nodeKey, nodeId, lastViewedAt}) {
  return UserStatesService.update({
    rootKey,
    rootId,
    nodeKey,
    nodeId,
    data: {last_viewed_at: lastViewedAt ? lastViewedAt.toISOString() : null}
  });
}

export default {
  Types,

  /* Clear out all content state (ie: nanodegrees, courses, parts, modules, lessons, concepts, atoms) */
  clearContent() {
    return createAction(Types.CLEAR_CONTENT);
  },

  updateLabResult({
    labId,
    userId,
    skillConfidenceRatingAfter,
    skillConfidenceRatingBefore
  }) {
    return createAsyncAction(
      Types.UPDATE_LAB_RESULT,
      Types.UPDATE_LAB_RESULT_COMPLETED,
      () => {
        return LabsService.updateLabResult({
          labId,
          userId,
          skillConfidenceRatingAfter,
          skillConfidenceRatingBefore
        });
      }
    );
  },

  fetchMe() {
    return createAsyncAction(Types.FETCH_ME, Types.FETCH_ME_COMPLETED, () => {
      return UserService.fetchMe();
    });
  },

  fetchLab(labId) {
    return createAsyncAction(Types.FETCH_LAB, Types.FETCH_LAB_COMPLETED, () => {
      return LabsService.fetch(labId);
    });
  },

  fetchStudentHubLobby(ndKeys) {
    return createAsyncAction(
      Types.FETCH_STUDENT_HUB_LOBBY,
      Types.FETCH_STUDENT_HUB_LOBBY_COMPLETED,
      () => {
        return HubBffService.fetchLobby(ndKeys);
      }
    );
  },

  fetchStudentHubUnreads() {
    return createAsyncAction(
      Types.FETCH_STUDENT_HUB_UNREADS,
      Types.FETCH_STUDENT_HUB_UNREADS_COMPLETED,
      () => {
        return HubBffService.fetchUnreads();
      }
    );
  },

  fetchNanodegreesAndCourses({startIndex, count, isGraduated}) {
    const status = isGraduated ? 'GRADUATED' : 'CURRENT';

    return createAsyncAction(
      Types[`FETCH_${status}_NANODEGREES_AND_COURSES`],
      Types[`FETCH_${status}_NANODEGREES_AND_COURSES_COMPLETED`],
      () =>
        UserService.fetchNanodegreesAndCourses({startIndex, count, isGraduated})
    );
  },

  fetchSubscribedCourses(startIndex = 0, count = 10) {
    return createAsyncAction(
      Types.FETCH_SUBSCRIBED_COURSES,
      Types.FETCH_SUBSCRIBED_COURSES_COMPLETED,
      () => {
        startIndex = startIndex;
        count = count;

        return UserService.fetchSubscribedCourses(startIndex, count);
      }
    );
  },

  fetchSubscribedNanodegrees(startIndex = 0, count = 10) {
    return createAsyncAction(
      Types.FETCH_SUBSCRIBED_NANODEGREES,
      Types.FETCH_SUBSCRIBED_NANODEGREES_COMPLETED,
      () => {
        startIndex = startIndex;
        count = count;

        return UserService.fetchSubscribedNanodegrees(startIndex, count);
      }
    );
  },

  fetchNanodegree(nanodegreeKey, contentVersion, contentLocale) {
    return createAsyncAction(
      Types.FETCH_NANODEGREE,
      Types.FETCH_NANODEGREE_COMPLETED,
      () => {
        return NanodegreesService.fetch(
          nanodegreeKey,
          contentVersion,
          contentLocale
        );
      }
    );
  },

  fetchDefaultNanodegrees(nanodegrees) {
    return createAsyncAction(
      Types.FETCH_DEFAULT_NANODEGREES,
      Types.FETCH_DEFAULT_NANODEGREES_COMPLETED,
      () => {
        return NanodegreesService.fetchDefaultNanodegrees(nanodegrees);
      }
    );
  },

  fetchNanodegreesByKey(nanodegreeKey) {
    return createAsyncAction(
      Types.FETCH_NANODEGREES_BY_KEY,
      Types.FETCH_NANODEGREES_BY_KEY_COMPLETED,
      () => {
        return NanodegreesService.fetchByKey(nanodegreeKey);
      }
    );
  },

  loadNanodegreeRating({nanodegreeKey, userKey}) {
    return createAsyncAction(
      Types.LOAD_NANODEGREE_RATING,
      Types.LOAD_NANODEGREE_RATING_COMPLETED,
      () => ratingLoader(nanodegreeKey, userKey)
    );
  },

  submitNanodegreeRating({ndKey, userKey, userName, rating, review, locale}) {
    return createAsyncAction(
      Types.SUBMIT_NANODEGREE_RATING,
      Types.SUBMIT_NANODEGREE_RATING_COMPLETED,
      () => submitRating({ndKey, userKey, userName, rating, review, locale})
    );
  },

  fetchNanodegreeProjectStates(nanodegreeKey, contentVersion, contentLocale) {
    return createAsyncAction(
      Types.FETCH_NANODEGREE_PROJECT_STATES,
      Types.FETCH_NANODEGREE_PROJECT_STATES_COMPLETED,
      () =>
        NanodegreesService.fetchProjectStates(
          nanodegreeKey,
          contentVersion,
          contentLocale
        )
    );
  },

  fetchNanodegreeReadyForGraduation(
    nanodegreeKey,
    contentVersion,
    contentLocale
  ) {
    return createAsyncAction(
      Types.FETCH_NANODEGREE_READY_FOR_GRADUATION,
      Types.FETCH_NANODEGREE_READY_FOR_GRADUATION_COMPLETED,
      () =>
        NanodegreesService.fetchReadyForGraduation(
          nanodegreeKey,
          contentVersion,
          contentLocale
        )
    );
  },

  fetchPartConceptsUserStates(
    partId,
    nanodegreeKey,
    contentVersion,
    contentLocale
  ) {
    return createAsyncAction(
      Types.FETCH_PART_CONCEPTS_USER_STATES,
      Types.FETCH_PART_CONCEPTS_USER_STATES_COMPLETED,
      () =>
        PartsService.fetchConceptsUserStates(
          partId,
          nanodegreeKey,
          contentVersion,
          contentLocale
        )
    );
  },

  fetchCourseProjectStates(courseKey) {
    return createAsyncAction(
      Types.FETCH_COURSE_PROJECT_STATES,
      Types.FETCH_COURSE_PROJECT_STATES_COMPLETED,
      () => CoursesService.fetchProjectStates(courseKey)
    );
  },

  fetchCourse(courseKey, contentVersion, contentLocale) {
    return createAsyncAction(
      Types.FETCH_COURSE,
      Types.FETCH_COURSE_COMPLETED,
      () => {
        return CoursesService.fetch(courseKey, contentVersion, contentLocale);
      }
    );
  },

  fetchCourseName(courseKey) {
    return createAsyncAction(
      Types.FETCH_COURSE_NAME,
      Types.FETCH_COURSE_NAME_COMPLETED,
      () => {
        return CoursesService.fetchName(courseKey);
      }
    );
  },

  fetchLesson(id, root) {
    return createAsyncAction(
      Types.FETCH_LESSON,
      Types.FETCH_LESSON_COMPLETED,
      () => {
        return LessonsService.fetch(id, root);
      }
    );
  },

  updateNanodegreeLastViewedAt({nanodegreeKey, nanodegreeId, lastViewedAt}) {
    return createAsyncAction(
      Types.UPDATE_NANODEGREE_LAST_VIEWED_AT,
      Types.UPDATE_NANODEGREE_LAST_VIEWED_AT_COMPLETED,
      () =>
        updateLastViewedAt({
          rootKey: nanodegreeKey,
          rootId: nanodegreeId,
          nodeKey: nanodegreeKey,
          nodeId: nanodegreeId,
          lastViewedAt
        })
    );
  },

  updateCourseLastViewedAt({courseKey, courseId, lastViewedAt}) {
    return createAsyncAction(
      Types.UPDATE_COURSE_LAST_VIEWED_AT,
      Types.UPDATE_COURSE_LAST_VIEWED_AT_COMPLETED,
      () =>
        updateLastViewedAt({
          rootKey: courseKey,
          rootId: courseId,
          nodeKey: courseKey,
          nodeId: courseId,
          lastViewedAt
        })
    );
  },

  updateConceptCounts(hierarchyAtTime) {
    return createAction(Types.UPDATE_CONCEPT_COUNTS, hierarchyAtTime);
  },

  updateConceptLastViewedAt({
    rootKey,
    rootId,
    nodeKey,
    nodeId,
    lastViewedAt,
    hierarchy
  }) {
    return createAsyncAction(
      Types.UPDATE_CONCEPT_LAST_VIEWED_AT,
      Types.UPDATE_CONCEPT_LAST_VIEWED_AT_COMPLETED,
      (dispatch) => {
        return updateLastViewedAt({
          rootKey,
          rootId,
          nodeKey,
          nodeId,
          lastViewedAt
        }).tap((response) => {
          const hierarchyAtTime = {
            ...hierarchy,
            lastViewedAt: _.get(response, ['user_state', 'last_viewed_at'])
          };
          return dispatch(this.updateConceptCounts(hierarchyAtTime));
        });
      }
    );
  },

  fetchNotificationPreferences(userKey) {
    return createAsyncAction(
      Types.FETCH_NOTIFICATION_PREFERENCES,
      Types.FETCH_NOTIFICATION_PREFERENCES_COMPLETED,
      () => {
        return NotificationPreferencesApiService.getPreferences(userKey);
      }
    );
  },

  updateNotificationPreferencesUnsubscribeAll(userKey) {
    return createAsyncAction(
      Types.UPDATE_NOTIFICATION_PREFERENCES_UNSUBSCRIBE_ALL,
      Types.UPDATE_NOTIFICATION_PREFERENCES_UNSUBSCRIBE_ALL_COMPLETED,
      () => {
        return NotificationPreferencesApiService.unsubscribeAll(userKey);
      }
    );
  },

  updateNotificationPreferences(userKey, newPreferences) {
    return createAsyncAction(
      Types.UPDATE_NOTIFICATION_PREFERENCES,
      Types.UPDATE_NOTIFICATION_PREFERENCES_COMPLETED,
      () => {
        return NotificationPreferencesApiService.updatePreferences(
          userKey,
          newPreferences
        );
      },
      {startPayload: _.map(newPreferences, 'category')}
    );
  },

  updateUnstructuredUserStateData({rootKey, nodeKey, json}) {
    return createAsyncAction(
      Types.UPDATE_UNSTRUCTURED_DATA,
      Types.UPDATE_UNSTRUCTURED_DATA_COMPLETED,
      () =>
        UserStatesService.update({
          rootKey,
          nodeKey,
          data: {unstructured: JSON.stringify(json)}
        })
    );
  },

  fetchUserBase() {
    return createAsyncAction(
      Types.FETCH_USER_BASE,
      Types.FETCH_USER_BASE_COMPLETED,
      () => UserService.fetchUserBase()
    );
  },

  fetchUserGeoLocation() {
    return createAsyncAction(
      Types.FETCH_USER_GEO_LOCATION,
      Types.FETCH_USER_GEO_LOCATION_COMPLETED,
      () => i18n.fetchGeodeData()
    );
  },

  fetchConnectEnrollment() {
    return createAsyncAction(
      Types.FETCH_CONNECT_ENROLLMENT,
      Types.FETCH_CONNECT_ENROLLMENT_COMPLETED,
      () => UhomeService.fetchConnectEnrollment()
    );
  },

  fetchConnectNdProgress(degreeId) {
    return createAsyncAction(
      Types.FETCH_CONNECT_PROGRESS,
      Types.FETCH_CONNECT_PROGRESS_COMPLETED,
      () => UhomeService.fetchConnectNdProgress(degreeId)
    );
  },

  fetchApplications() {
    return createAsyncAction(
      Types.FETCH_APPLICATIONS,
      Types.FETCH_APPLICATIONS_COMPLETED,
      () => AdmissionsApiService.fetchApplications()
    );
  },

  fetchBill() {
    return createAsyncAction(Types.FETCH_BILL, Types.FETCH_BILL_COMPLETED, () =>
      UserService.fetchUserBill()
    );
  },

  fetchOrderHistory() {
    return createAsyncAction(
      Types.FETCH_ORDER_HISTORY,
      Types.FETCH_ORDER_HISTORY_COMPLETED,
      () => BraavosService.fetchOrderHistory()
    );
  },

  updateAutoRenew(urn, isAutoRenewOn) {
    return createAsyncAction(
      Types.UPDATE_AUTO_RENEW,
      Types.UPDATE_AUTO_RENEW_COMPLETED,
      () => BraavosService.updateAutoRenew(urn, isAutoRenewOn)
    );
  },

  cancelOrder(
    urn,
    isRefund,
    isAssistedCancel,
    cancelReason,
    acceptCancelCall,
    followUp
  ) {
    return createAsyncAction(
      Types.CANCEL_ORDER,
      Types.CANCEL_ORDER_COMPLETED,
      () =>
        BraavosService.cancelOrder(
          urn,
          isRefund,
          isAssistedCancel,
          cancelReason,
          acceptCancelCall,
          followUp
        )
    );
  },

  uncancelOrder(urn) {
    return createAsyncAction(
      Types.UNCANCEL_ORDER,
      Types.UNCANCEL_ORDER_COMPLETED,
      () => BraavosService.uncancelOrder(urn)
    );
  },

  // Convert address to snake case.
  // Pass the converted address to Braavos, then return it.
  updateBillingAddress(urn, addressCamelCase) {
    const addressSnakeCase = SettingsHelper.getAddressSnakeCase(
      addressCamelCase
    );
    return createAsyncAction(
      Types.UPDATE_BILLING_ADDRESS,
      Types.UPDATE_BILLING_ADDRESS_COMPLETED,
      async () => {
        await BraavosService.updateStripeBillingAddress(urn, addressSnakeCase);
        return addressSnakeCase;
      }
    );
  },

  authenticationCompleted() {
    return createAction(Types.AUTHENTICATION_COMPLETED);
  },

  updateUser({
    firstName,
    lastName,
    language,
    email,
    password,
    enrollmentUpdate
  }) {
    return createAsyncAction(
      Types.UPDATE_USER,
      Types.UPDATE_USER_COMPLETED,
      () =>
        UserService.updateUser({
          firstName,
          lastName,
          language,
          email,
          password,
          enrollmentUpdate
        })
    );
  },

  updateUserSettings({
    skipClassroomWelcome,
    dismissedUpgradeId,
    onboardingCompletedKey
  }) {
    return createAsyncAction(
      Types.UPDATE_USER_SETTINGS,
      Types.UPDATE_USER_SETTINGS_COMPLETED,
      () =>
        UserService.updateUserSettings({
          skipClassroomWelcome,
          dismissedUpgradeId,
          onboardingCompletedKey
        })
    );
  },

  fetchSchedules(userId, ndKeys) {
    return createAsyncAction(
      Types.FETCH_SCHEDULES,
      Types.FETCH_SCHEDULES_COMPLETED,
      () => ScheduleReminderService.getSchedules(userId, ndKeys)
    );
  },

  updateSchedule(userId, ndKey, timezone, wantsEmails, wantsSMS) {
    return createAsyncAction(
      Types.UPDATE_SCHEDULE,
      Types.UPDATE_SCHEDULE_COMPLETED,
      () =>
        ScheduleReminderService.updateSchedule(
          userId,
          ndKey,
          timezone,
          wantsEmails,
          wantsSMS
        )
    );
  },

  fetchUserCurrency() {
    return createAsyncAction(
      Types.FETCH_USER_CURRENCY,
      Types.FETCH_USER_CURRENCY_COMPLETED,
      () => UserService.fetchUserCurrencies()
    );
  },

  updateLanguage({language}) {
    return createAsyncAction(
      Types.UPDATE_LANGUAGE,
      Types.UPDATE_LANGUAGE_COMPLETED,
      () => UserService.updateLanguage({language})
    );
  },

  updateDefaultPaymentMethod(token, addressCamelCase) {
    const addressSnakeCase = SettingsHelper.getAddressSnakeCase(
      addressCamelCase
    );
    return createAsyncAction(
      Types.UPDATE_DEFAULT_CARD,
      Types.UPDATE_DEFAULT_CARD_COMPLETED,
      async () => {
        const cardResponse = await BraavosService.updateDefaultPaymentMethod(
          token
        );
        return {...cardResponse, address: addressSnakeCase};
      }
    );
  },

  updateDefaultSource(token) {
    return createAsyncAction(
      Types.UPDATE_DEFAULT_SOURCE,
      Types.UPDATE_DEFAULT_SOURCE_COMPLETED,
      () => UserService.updateDefaultSource(token)
    );
  },

  cancelCourse(courseId) {
    return createAsyncAction(
      Types.CANCEL_COURSE,
      Types.CANCEL_COURSE_COMPLETED,
      () => UserService.cancelCourse(courseId)
    );
  },

  cancelTermPurchase(termPurchase) {
    return createAsyncAction(
      Types.CANCEL_TERM_PURCHASE,
      Types.CANCEL_TERM_PURCHASE_COMPLETED,
      () => BraavosService.cancelPurchase(termPurchase.urn)
    );
  },

  cancelSubscription(subscription, immediately = false) {
    return createAsyncAction(
      Types.CANCEL_SUBSCRIPTION,
      Types.CANCEL_SUBSCRIPTION_COMPLETED,
      () => UserService.cancelSubscription(subscription.urn, immediately)
    );
  },

  deletePaymentMethod(urn) {
    return createAsyncAction(
      Types.DELETE_PAYMENT_METHOD,
      Types.DELETE_PAYMENT_METHOD_COMPLETED,
      () => BraavosService.deletePaymentMethod(urn)
    );
  },

  deleteSocialLogin(provider) {
    return createAsyncAction(
      Types.DELETE_SOCIAL_LOGIN,
      Types.DELETE_SOCIAL_LOGIN_COMPLETED,
      () => UserService.deleteSocialLogin(provider)
    );
  },

  showSearch() {
    return createAction(Types.SHOW_SEARCH);
  },

  hideSearch() {
    return createAction(Types.HIDE_SEARCH);
  },

  toggleSearch() {
    return createAction(Types.TOGGLE_SEARCH);
  },

  showVersionPicker() {
    return createAction(Types.SHOW_VERSION_PICKER);
  },

  hideVersionPicker() {
    return createAction(Types.HIDE_VERSION_PICKER);
  },

  toggleResourcesSidebar() {
    return createAction(Types.TOGGLE_RESOURCES_SIDEBAR);
  },

  createSuccessAlert(message) {
    return createAction(Types.CREATE_SUCCESS_ALERT, message);
  },

  createNotificationAlert(message) {
    return createAction(Types.CREATE_NOTIFICATION_ALERT, message);
  },

  createWarningAlert(message) {
    return createAction(Types.CREATE_WARNING_ALERT, message);
  },

  createErrorAlert(message) {
    return createAction(Types.CREATE_ERROR_ALERT, message);
  },

  removeAlert(alertId) {
    return createAction(Types.REMOVE_ALERT, alertId);
  },

  cancelChinaSubscriptionRechargeOrder() {
    return createAction(Types.CANCEL_CHINA_SUBSCRIPTION_RECHARGE_ORDER);
  },

  cancelNanodegreeProjectSubmission(submissionId, nanodegreeKey) {
    return createAsyncAction(
      Types.CANCEL_PROJECT_SUBMISSION,
      Types.CANCEL_PROJECT_SUBMISSION_COMPLETED,
      (dispatch) => {
        return ReviewsApiService.cancelProjectSubmission(submissionId).then(
          (cancelResponse) => {
            return dispatch(
              this.fetchNanodegreeProjectStates(nanodegreeKey)
            ).then(() => cancelResponse);
          }
        );
      }
    );
  },

  cancelCourseProjectSubmission(submissionId, courseKey) {
    return createAsyncAction(
      Types.CANCEL_PROJECT_SUBMISSION,
      Types.CANCEL_PROJECT_SUBMISSION_COMPLETED,
      (dispatch) => {
        return ReviewsApiService.cancelProjectSubmission(submissionId).then(
          (cancelResponse) => {
            return dispatch(this.fetchCourseProjectStates(courseKey)).then(
              () => cancelResponse
            );
          }
        );
      }
    );
  },

  fetchFacebookName() {
    return createAsyncAction(
      Types.FETCH_FACEBOOK_NAME,
      Types.FETCH_FACEBOOK_NAME_COMPLETED,
      () => {
        return FacebookApiService.fetchName();
      }
    );
  },

  fetchGoogleName() {
    return createAsyncAction(
      Types.FETCH_GOOGLE_NAME,
      Types.FETCH_GOOGLE_NAME_COMPLETED,
      () => {
        return GoogleApiService.fetchName();
      }
    );
  },

  displayCustomNotification(notificationId) {
    return createAction(Types.DISPLAY_CUSTOM_NOTIFICATION, {notificationId});
  },

  dismissCustomNotification(notificationId) {
    return createAction(Types.DISMISS_CUSTOM_NOTIFICATION, {notificationId});
  },

  pauseNotifications() {
    return createAction(Types.PAUSE_NOTIFICATIONS);
  },

  resumeNotifications() {
    return createAction(Types.RESUME_NOTIFICATIONS);
  },

  fetchAccountCreditTotal(currency) {
    return createAsyncAction(
      Types.FETCH_ACCOUNT_CREDIT_TOTAL,
      Types.FETCH_ACCOUNT_CREDIT_TOTAL_COMPLETED,
      () => BraavosService.fetchAccountCreditTotal(currency)
    );
  },

  saveUserSpecialization({
    nanodegree_id,
    part_key,
    specialization_key,
    status
  }) {
    return createAsyncAction(
      Types.CREATE_USER_SPECIALIZATION,
      Types.CREATE_USER_SPECIALIZATION_COMPLETE,
      () =>
        UserService.saveUserSpecialization({
          nanodegree_id,
          part_key,
          specialization_key,
          status
        })
    );
  },

  fetchSpecializationPrices(partKey, currency) {
    return createAsyncAction(
      Types.FETCH_SPECIALIZATION_PRICES,
      Types.FETCH_SPECIALIZATION_PRICES_COMPLETE,
      () => BraavosService.fetchSpecializationPrices(partKey, currency)
    );
  },

  fetchAdExperiments(userId, courseKeys, ndKeys, locale) {
    return createAsyncAction(
      Types.FETCH_AD_EXPERIMENTS,
      Types.FETCH_AD_EXPERIMENTS_COMPLETED,
      () =>
        AdExperimentService.fetchAdExperiments(
          userId,
          courseKeys,
          ndKeys,
          locale
        )
    );
  },

  fetchCohorts(ndKey, status) {
    return createAsyncAction(
      Types.FETCH_COHORTS,
      Types.FETCH_COHORTS_COMPLETED,
      () => CohortsService.fetchCohorts(ndKey, status)
    );
  },

  fetchFeatureEnabledOptimizely(key, userId, slug, attributes) {
    return createAsyncAction(
      Types.FETCH_FEATURE_ENABLED,
      Types.FETCH_FEATURE_ENABLED_COMPLETED,
      async () => {
        return userId
          ? ExperimentsApi.getFeature(userId, slug, attributes).then(
              (featureDetails) => ({
                key,
                featureDetails
              })
            )
          : {
              key,
              featureDetails: {
                isEnabled: false
              }
            };
      }
    );
  },

  fetchCareerServices(isTesting) {
    return createAsyncAction(
      Types.FETCH_CAREER_SERVICES,
      Types.FETCH_CAREER_SERVICES_COMPLETED,
      () => CareersApiService.fetchCareerServices(isTesting)
    );
  },

  notifyPhoneVerificationComplete(phoneNumber) {
    return createAction(Types.NOTIFY_PHONE_VERIFICATION_COMPLETE, {
      phoneNumber
    });
  },

  setStudentHubTooltip() {
    return createAction(Types.SET_STUDENT_HUB_TOOLTIP);
  },

  dismissStudentHubTooltip() {
    return createAction(Types.DISMISS_STUDENT_HUB_TOOLTIP);
  },

  fetchMentorConversations() {
    return createAsyncAction(
      Types.FETCH_MENTOR_CONVERSATIONS,
      Types.FETCH_MENTOR_CONVERSATIONS_COMPLETE,
      () => HubBffService.fetchMentorConversations()
    );
  }
};
