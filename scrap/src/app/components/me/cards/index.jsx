import Applications from './applications';
import AsyncUconnectContainer from './_uconnect';
import CurrentEnrollments from './current-enrollments';
import Footer from 'components/common/footer';
import GraduatedEnrollments from './graduated-enrollments';
import {Heading} from '@udacity/veritas-components';
import LatestActivity from './latest-activity';
import NoEnrollments from './no-enrollments';
import PropTypes from 'prop-types';
import RouteMixin from 'mixins/route-mixin';
import SemanticTypes from 'constants/semantic-types';
import SettingsHelper from 'helpers/settings-helper';
import StateHelper from 'helpers/state-helper';
import {__} from 'services/localization-service';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import moment from 'moment';
import styles from './index.scss';
import {trackInitialPageLoad} from 'helpers/performance-helper';

/**
 * Show current user's enrolled nanodegrees and courses
 */
@cssModule(styles)
export class Cards extends React.Component {
  static displayName = 'me/cards';

  static propTypes = {
    /* Redux */
    user: PropTypes.object,
    lastViewedNanodegree: PropTypes.object,
    lastViewedCourse: PropTypes.object,
    subscribedNanodegreesCount: PropTypes.number,
    subscribedCoursesCount: PropTypes.number,
    graduatedNanodegreesCount: PropTypes.number,
    graduatedCoursesCount: PropTypes.number,
    applications: PropTypes.arrayOf(PropTypes.object),
    subscriptions: PropTypes.arrayOf(PropTypes.object),
    nanodegreesAndCourses: PropTypes.object
  };

  static defaultProps = {
    lastViewedNanodegree: {},
    lastViewedCourse: {}
  };

  static contextTypes = {
    router: PropTypes.object
  };

  mixins: [RouteMixin];

  componentDidMount() {
    trackInitialPageLoad('me');
  }

  render() {
    const {
      connectSession,
      lastViewedNanodegree,
      lastViewedCourse,
      subscribedNanodegreesCount,
      subscribedCoursesCount,
      graduatedNanodegreesCount,
      graduatedCoursesCount,
      user,
      applications
    } = this.props;

    const hasNoEnrollments =
      subscribedCoursesCount +
        graduatedCoursesCount +
        subscribedNanodegreesCount +
        graduatedNanodegreesCount ===
      0;

    const nanodegreeEnrollments = _.filter(user.nanodegreesAndCourses.current, {
      semantic_type: SemanticTypes.NANODEGREE
    });

    const courseEnrollments = _.filter(user.nanodegreesAndCourses.current, {
      semantic_type: SemanticTypes.COURSE
    });

    const activeApplications = _.filter(applications, (app) =>
      moment().isBefore(moment(app.cohort.start_at))
    );

    return (
      <div styleName="body">
        <nav styleName="navigation">
          <ul>
            {subscribedNanodegreesCount > 0 && (
              <li>
                <a href="#nanodegrees">{__('Nanodegree')}</a>
              </li>
            )}
            {subscribedCoursesCount > 0 && (
              <li>
                <a href="#courses">{__('Courses')}</a>
              </li>
            )}
            {graduatedNanodegreesCount + graduatedCoursesCount > 0 && (
              <li>
                <a href="#graduated">{__('Graduated')}</a>
              </li>
            )}
            {!_.isEmpty(activeApplications) && (
              <li>
                <a href="#applications">{__('Applications')}</a>
              </li>
            )}
          </ul>
        </nav>

        {hasNoEnrollments ? (
          <NoEnrollments />
        ) : (
          <div>
            {!_.isEmpty(connectSession) ? (
              <div styleName="section">
                <AsyncUconnectContainer session={connectSession} />
              </div>
            ) : null}
            <div styleName="section">
              <Heading size="h6" as="h3">
                {__('Latest Activity')}
              </Heading>
              <ol>
                <LatestActivity
                  lastViewedNanodegree={lastViewedNanodegree}
                  lastViewedCourse={lastViewedCourse}
                />
              </ol>
            </div>

            {subscribedNanodegreesCount > 0 ? (
              <div styleName="section" id="nanodegrees">
                <Heading size="h6" as="h3">
                  {__('Current Nanodegree Enrollments')}
                </Heading>
                <ol>
                  <CurrentEnrollments enrollments={nanodegreeEnrollments} />
                </ol>
              </div>
            ) : null}

            {subscribedCoursesCount > 0 ? (
              <div styleName="section" id="courses">
                <Heading size="h6" as="h3">
                  {__('Current Course Enrollments')}
                </Heading>
                <ol>
                  <CurrentEnrollments enrollments={courseEnrollments} />
                </ol>
              </div>
            ) : null}

            {graduatedNanodegreesCount + graduatedCoursesCount > 0 ? (
              <div styleName="section" id="graduated">
                <Heading size="h6" as="h3">
                  {__('Graduated')}
                </Heading>
                <ol>
                  <GraduatedEnrollments
                    enrollments={user.nanodegreesAndCourses.graduated}
                  />
                </ol>
              </div>
            ) : null}
          </div>
        )}
        {!_.isEmpty(activeApplications) ? (
          <div styleName="section" id="applications">
            <Heading size="h6" as="h3">
              {__('Applications')}
            </Heading>
            <ol>
              <Applications applications={activeApplications} />
            </ol>
          </div>
        ) : null}
        {
          // TODO: Preregistered ND Countdown
        }
        {hasNoEnrollments ? null : <Footer />}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  function _getLastViewedProgram(programs) {
    return _.chain(programs)
      .orderBy('user_state.last_viewed_at', 'desc') // Note: nulls sort first, which is what we want for new signups
      .head()
      .value();
  }

  return {
    user: SettingsHelper.State.getUser(state),
    lastViewedNanodegree: _getLastViewedProgram(
      StateHelper.getNanodegrees(state)
    ),
    lastViewedCourse: _getLastViewedProgram(StateHelper.getCourses(state)),
    subscribedNanodegreesCount: SettingsHelper.State.getSubscribedNanodegreesCount(
      state
    ),
    subscribedCoursesCount: SettingsHelper.State.getSubscribedCoursesCount(
      state
    ),
    graduatedNanodegreesCount: SettingsHelper.State.getGraduatedNanodegreesCount(
      state
    ),
    graduatedCoursesCount: SettingsHelper.State.getGraduatedCoursesCount(state),
    applications: StateHelper.getApplications(state),
    connectSession: SettingsHelper.State.getConnectSession(state),
    subscriptions: SettingsHelper.State.getSubscriptions(state),
    nanodegreesAndCourses: SettingsHelper.State.getNanodegreesAndCourses(state)
  };
};

export default compose(connect(mapStateToProps))(Cards);
