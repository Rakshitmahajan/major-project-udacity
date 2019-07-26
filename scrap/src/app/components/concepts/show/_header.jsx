import {IconEmail, IconQuizComplete} from '@udacity/veritas-icons';
import {Button} from '@udacity/veritas-components';
import ClassroomPropTypes from 'components/prop-types';
import CocoHelper from 'helpers/coco-helper';
import Edit from 'components/common/edit';
import EnrollButton from 'components/enrollment-ad/_enroll-button';
import Header from 'components/common/header';
import NanodegreeHelper from 'helpers/nanodegree-helper';
import NodeHelper from 'helpers/node-helper';
import PartHelper from 'helpers/part-helper';
import PropTypes from 'prop-types';
import Responsive from 'components/common/responsive';
import {__} from 'services/localization-service';
import {connect} from 'react-redux';
import styles from './_header.scss';
import withFeedbackContext from 'components/content-feedback/with-feedback-context';

const mapStateToProps = (state) => {
  return {
    hasUdacityEmail: CocoHelper.hasUdacityEmail(state)
  };
};

class ConceptHeader extends React.Component {
  static displayName = 'concepts/show/_header';

  static propTypes = {
    concept: ClassroomPropTypes.concept.isRequired,
    lesson: ClassroomPropTypes.lesson.isRequired,
    onToggleContentSelection: PropTypes.func,
    isSelectingContent: PropTypes.bool,

    // connect
    hasUdacityEmail: PropTypes.bool.isRequired
  };

  static contextTypes = {
    part: PropTypes.object,
    root: PropTypes.object
  };

  static defaultProps = {
    isPreviousDisabled: false
  };

  _renderEnrollButton() {
    const {part, root} = this.context;
    const isFreePreview = part && PartHelper.isFreePreview(part);
    const ndKey = _.get(root, 'key');
    return isFreePreview ? <EnrollButton ndKey={ndKey} /> : null;
  }

  _renderFeedbackButton() {
    const {
      isSelectingContent,
      onStartContentSelection,
      onCancelContentSelection
    } = this.props;

    return isSelectingContent ? (
      <div>
        <Responsive type="from-tablet">
          <Button
            onClick={onCancelContentSelection}
            small={true}
            variant="primary"
            label={__('Cancel')}
          />
        </Responsive>
        <Responsive type="until-tablet">
          <Button
            onClick={onCancelContentSelection}
            iconOnly={true}
            variant="minimal"
            icon={<IconQuizComplete color="cerulean" />}
          />
        </Responsive>
      </div>
    ) : (
      <div>
        <Responsive type="from-tablet">
          <Button
            onClick={onStartContentSelection}
            small={true}
            variant="minimal"
            label={__('Send Feedback')}
          />
        </Responsive>
        <Responsive type="until-tablet">
          <Button
            onClick={onStartContentSelection}
            variant="minimal"
            iconOnly={true}
            icon={<IconEmail color="cerulean" />}
          />
        </Responsive>
      </div>
    );
  }

  _renderRightNode() {
    const {hasUdacityEmail} = this.props;
    const {root} = this.context;

    switch (true) {
      case hasUdacityEmail:
        return <Edit />;
      case !NanodegreeHelper.isStatic(root):
        return this._renderFeedbackButton();
      default:
        return this._renderEnrollButton();
    }
  }

  render() {
    const {concept} = this.props;
    const title = NodeHelper.getTitle(concept) || '';

    return (
      <div data-test="concept-header">
        <Header
          justify="between"
          theme="dark"
          title={title}
          hamburgerAlwaysVisible={true}
        >
          {/* hack: CLAS-3444 Arabic translations missing - remove when received} */}
          {this._renderRightNode()}
        </Header>
      </div>
    );
  }
}

export default connect(mapStateToProps)(
  withFeedbackContext(cssModule(ConceptHeader, styles))
);
