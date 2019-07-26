import {IconCaretLeft, IconSearch} from '@udacity/veritas-icons';
import Actions from 'actions';
import ClassroomPropTypes from 'components/prop-types';
import NanodegreeHelper from 'helpers/nanodegree-helper';
import PropTypes from 'prop-types';
import Section from './_section';
import ServiceLinks from './_service-links';
import ServiceLinksContainer from 'components/common/service-links-container';

import TrackingLink from 'components/common/tracking-link';
import {__} from 'services/localization-service';
import {connect} from 'react-redux';
import styles from './_sidebar.scss';

@cssModule(styles)
export class Sidebar extends React.Component {
  static displayName = 'common/lesson-sidebar/_sidebar';

  static contextTypes = {
    root: ClassroomPropTypes.node
  };

  static propTypes = {
    headerPath: PropTypes.string,
    onStartSearch: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.string,
        content: PropTypes.node.isRequired
      })
    ),
    titleParts: PropTypes.shape({
      prefix: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  };

  onStartSearchNoDefault() {
    const {onStartSearch} = this.props;

    onStartSearch();
  }

  _renderItems() {
    const {items} = this.props;
    return _.concat(
      [
        {
          icon: <IconSearch title={__('Search')} size="sm" color="silver" />,
          title: __('Search'),
          defaultExpanded: false,
          content: null,
          onClick: () => this.onStartSearchNoDefault()
        }
      ],
      items
    ).map((itemProps) => <Section key={itemProps.title} {...itemProps} />);
  }

  render() {
    const {
      titleParts: {prefix, text},
      headerPath
    } = this.props;
    const {root} = this.context;
    const ndKey = _.get(root, 'key');

    const isPaidEnrollment = !NanodegreeHelper.isFreePreviewEnrollment(root);

    return (
      <div styleName="sidebar">
        <h3 styleName="header">
          <TrackingLink
            to={headerPath}
            trackingEventName="Learning Nav Clicked"
          >
            <span styleName="title-content">
              <span styleName="arrow">
                <IconCaretLeft size="lg" />
              </span>
              <span styleName="title">
                <span>{prefix}</span>
                <span styleName="title-text"> {text}</span>
              </span>
            </span>
          </TrackingLink>
        </h3>
        <div styleName="sections">{this._renderItems()}</div>
        {isPaidEnrollment && (
          <div styleName="footer">
            <ServiceLinksContainer
              DisplayComponent={ServiceLinks}
              ndKey={ndKey}
            />
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  {
    onStartSearch: Actions.showSearch
  }
)(Sidebar);
