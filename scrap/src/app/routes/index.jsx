import {Redirect, Route, Router, browserHistory} from 'react-router';

import Actions from 'actions';
import AnalyticsService from 'services/analytics-service';
import Authenticated from 'components/authenticated';
import AuthenticationService from 'services/authentication-service';
import ErrorPage from 'components/error-page';
import Loading from 'components/loading';
import LocaleHelper from 'helpers/locale-helper';
import Main from 'components/main';
import MeCards from 'components/me/cards';
import MeContainer from 'components/me/me-container';
import SettingContainer from 'components/settings/setting-container';
import UserService from 'services/user-service';
import {makeIndexRoute} from './helpers';
import store from 'store';

export const routes = [
  <Redirect key="me-redirect" from="/" to="/me" />,

  <Route key="/" path="/" component={Main}>
    <Redirect from="settings" to="settings/personal-info" />
    <Redirect from="settings/account-credit" to="settings/referrals" />
    <Route
      path="settings"
      component={SettingContainer}
      getChildRoutes={(partialNextState, cb) => {
        import('./settings' /* webpackChunkName: "routes-settings" */).then(
          ({Routes}) => {
            UserService.fetchAppShell()
              .then((user) => {
                const prefLang = _.get(user, 'preferred_language');
                Routes = LocaleHelper.isENUS(prefLang)
                  ? Routes
                  : _.reject(Routes, ['path', 'referrals']);
                cb(null, Routes);
              })
              .catch(() => cb(null, Routes));
          }
        );
      }}
      onEnter={({location}, replaceWith) => {
        AnalyticsService.page('settings');
        AuthenticationService.authenticationRequired(location, replaceWith);
      }}
    />
    <Route
      path="me"
      component={MeContainer}
      indexRoute={makeIndexRoute(MeCards, {
        onEnter: () =>
          AnalyticsService.page('My Home', {
            category: 'Classroom'
          })
      })}
      onEnter={({location}, replaceWith) => {
        AuthenticationService.authenticationRequired(location, replaceWith);
      }}
    />
    <Route
      path="courses/:courseKey"
      getComponent={(nextState, cb) =>
        import(
          'components/courses/course-container' /* webpackChunkName: "routes-courses" */
        ).then(({default: CourseContainer}) => cb(null, CourseContainer))
      }
      getIndexRoute={(nextState, cb) =>
        import(
          'components/courses/show' /* webpackChunkName: "routes-courses" */
        ).then(({default: CourseShow}) => cb(null, makeIndexRoute(CourseShow)))
      }
      getChildRoutes={(partialNextState, cb) => {
        import('./courses' /* webpackChunkName: "routes-courses" */).then(
          ({Routes}) => cb(null, Routes)
        );
      }}
      onEnter={({location}, replaceWith) => {
        AuthenticationService.authenticationRequired(location, replaceWith);
        // Need to clear out any existing data so that our search results will be
        // limited to the current course
        store.dispatch(Actions.clearContent());
      }}
    />
    <Route
      path="nanodegrees/:nanodegreeKey"
      getComponent={(nextState, cb) =>
        import(
          'components/nanodegrees/nanodegree-container' /* webpackChunkName: "routes-nanodegrees" */
        ).then(({default: NanodegreeContainer}) =>
          cb(null, NanodegreeContainer)
        )
      }
      getChildRoutes={(partialNextState, cb) => {
        import(
          './nanodegrees' /* webpackChunkName: "routes-nanodegrees" */
        ).then(({Routes}) => cb(null, Routes));
      }}
      onEnter={({location}, replaceWith) => {
        AuthenticationService.authenticationRequired(location, replaceWith);
        // Need to clear out any existing data so that our search results will be
        // limited to the current nanodegree
        store.dispatch(Actions.clearContent());
      }}
    />

    <Route path="authenticated" component={Authenticated} />
    <Route path="loading" component={Loading} />
    <Route path="*" component={ErrorPage} />
  </Route>
];

export default function AppRoutes() {
  return <Router history={browserHistory} routes={routes} />;
}
