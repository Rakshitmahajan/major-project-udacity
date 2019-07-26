import {IconCaretDown} from '@udacity/veritas-icons';
import PropTypes from 'prop-types';
import TrackingLink from 'components/common/tracking-link';
import {__} from 'services/localization-service';
import styles from './_section.scss';

@cssModule(styles)
export default class Section extends React.Component {
  static displayName = 'common/lesson-sidebar/_section';

  static propTypes = {
    content: PropTypes.node,
    icon: PropTypes.object,
    defaultExpanded: PropTypes.bool,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  static defaultProps = {
    content: null,
    icon: null,
    defaultExpanded: false,
    onClick: _.noop
  };

  state = {
    isExpanded: this.props.defaultExpanded
  };

  handleClick = () => {
    const {onClick} = this.props;

    this.setState(
      {
        isExpanded: !this.state.isExpanded
      },
      onClick
    );
  };

  _renderArrow() {
    if (!_.isEmpty(this.props.content)) {
      return (
        <span styleName={this.state.isExpanded ? 'collapse' : 'expand'}>
          <IconCaretDown
            title={this.state.isExpanded ? __('Close') : __('Open')}
            size="sm"
          />
        </span>
      );
    }
  }

  _renderIcon = () => {
    const {icon} = this.props;

    return icon ? icon : this._renderArrow();
  };

  render() {
    const {title, content} = this.props;
    const {isExpanded} = this.state;

    return (
      <div
        styleName={isExpanded ? 'section-selected' : 'section'}
        role="group"
        aria-expanded={isExpanded}
      >
        <TrackingLink
          href="#"
          onClick={this.handleClick}
          trackingEventName="Classroom Nav Clicked"
          trackingOptions={{title}}
          aria-owns={isExpanded ? _.kebabCase('tree-' + title) : null}
          styleName={isExpanded ? 'header-expanded' : 'header'}
        >
          <h2>{title}</h2>
          {this._renderIcon()}
        </TrackingLink>
        {isExpanded ? (
          <div id={_.kebabCase('tree-' + title)}>{content}</div>
        ) : null}
      </div>
    );
  }
}
