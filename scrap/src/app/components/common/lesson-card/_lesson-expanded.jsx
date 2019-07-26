import {IconArrowRight, IconProject} from '@udacity/veritas-icons';
import AssessmentDueDate from './_assessment-due-date';
import AssessmentHelper from 'helpers/assessment-helper';
import ButtonLink from 'components/common/button-link';
import {CLASSROOM_CTA_CLICKED} from 'constants/analytics';
import ClassroomPropTypes from 'components/prop-types';
import ImagePreview from 'components/common/image-preview';
import LessonDuration from 'components/common/lesson-duration';
import LessonHelper from 'helpers/lesson-helper';
import LessonStatus from './_lesson-status';
import {Link} from 'react-router';
import Markdown from '@udacity/ureact-components/dist/markdown';
import NodeHelper from 'helpers/node-helper';
import PropTypes from 'prop-types';
import {Text} from '@udacity/veritas-components';
import {__} from 'services/localization-service';
import {scrollTargetId} from './_helpers';
import styles from './_lesson-expanded.scss';
import withMembershipSubtitle from 'decorators/with-membership-subtitle';

const themes = {
  lab: {
    containerStyle: 'lesson-expanded-lab',
    titleStyle: 'lab-title',
    tagIcon: <IconProject size="sm" />
  },
  project: {
    containerStyle: 'lesson-expanded-project',
    titleStyle: 'project-title',
    tagIcon: <IconProject size="sm" />
  },
  default: {
    containerStyle: 'lesson-expanded'
  }
};

@cssModule(styles, {errorWhenNotFound: false})
export class LessonExpanded extends React.Component {
  static displayName = 'common/lesson-expanded';

  static propTypes = {
    disabled: PropTypes.bool,
    lesson: ClassroomPropTypes.lesson.isRequired,
    path: PropTypes.string.isRequired,
    onCollapse: PropTypes.func.isRequired,
    tag: PropTypes.string,
    isStatic: PropTypes.bool
  };

  static defaultProps = {
    isStatic: false
  };

  _getButtonActionLabel({hasStarted, isCompleted, isStatic}) {
    if (isCompleted || isStatic) {
      return __('View Lesson');
    } else {
      return hasStarted ? __('Continue') : __('Start');
    }
  }

  _getActionLabel() {
    const {lesson, isStatic} = this.props;
    const hasStarted = NodeHelper.hasStarted(lesson);
    return this._getButtonActionLabel({
      isCompleted: LessonHelper.isCompleted(lesson),
      hasStarted,
      isStatic
    });
  }

  _renderProgress() {
    const {disabled, lesson, onCollapse} = this.props;
    const assessment = lesson.lab || lesson.project;

    if (!disabled) {
      return (
        <div styleName="progress">
          <LessonStatus lesson={lesson} />
          {LessonHelper.isCompleted(lesson) ? (
            <Link to="#" styleName="collapse-card" onClick={onCollapse}>
              {__('Shrink Card')}
            </Link>
          ) : LessonHelper.isAssessmentLesson(lesson) &&
            !AssessmentHelper.isSubmitted(assessment) ? (
            <AssessmentDueDate dueDate={assessment.due_at} />
          ) : (
            <LessonDuration lesson={lesson} />
          )}
        </div>
      );
    }
  }

  _renderActions() {
    const {disabled, path, isStatic} = this.props;
    const actionLabel = this._getActionLabel();

    if (!disabled) {
      return (
        <div styleName="actions">
          <div styleName="action-info">
            <ButtonLink
              variant="secondary"
              small
              to={path}
              trackingOptions={{message: actionLabel}}
              trackingEventName={CLASSROOM_CTA_CLICKED}
              label={actionLabel}
              icon={<IconArrowRight />}
              iconAlign="right"
            />
          </div>
          {!isStatic ? this._renderProgress() : null}
        </div>
      );
    }
  }

  render() {
    const {lesson, tag, isStatic, disabled} = this.props;
    const theme = themes[LessonHelper.getLessonType(lesson)];

    return (
      <div styleName={theme.containerStyle}>
        <span id={scrollTargetId(lesson)} styleName="scroll-target" />
        <div styleName="details">
          <div styleName="text">
            <div styleName="header">
              {tag ? (
                <div styleName="tag-container">
                  {theme.tagIcon} <h5 styleName="tag">{tag}</h5>
                </div>
              ) : null}
              <h4>{lesson.title}</h4>
            </div>
            {lesson.summary ? (
              <div styleName="summary">
                <Markdown text={lesson.summary} />
              </div>
            ) : null}
            {lesson.project && disabled && (
              <div styleName="summary">
                <Text>
                  {__('You may only submit projects during an active term')}
                </Text>
              </div>
            )}
          </div>
          {this._renderActions()}
        </div>
        <ImagePreview
          imageUrl={_.get(lesson, 'image.url')}
          imageClassName={isStatic ? styles['static-image'] : styles['image']}
          placeholderClassName={styles['image-placeholder']}
        />
      </div>
    );
  }
}

export default withMembershipSubtitle(LessonExpanded);
