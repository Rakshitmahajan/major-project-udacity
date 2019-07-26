import {IconCourse, IconEdit, IconNanodegree} from '@udacity/veritas-icons';

import {ColorSchemeConstants} from 'constants/style';
import {Heading} from '@udacity/veritas-components';
import {OmacPlaceholder} from 'components/common/omac-placeholder';
import PropTypes from 'prop-types';
import RouteHelper from 'helpers/route-helper';
import RouteMixin from 'mixins/route-mixin';
import SemanticTypes from 'constants/semantic-types';
import StateHelper from 'helpers/state-helper';
import SubscriptionHelper from 'helpers/subscription-helper';
import {__} from 'services/localization-service';
import {connect} from 'react-redux';
import {routerShape} from 'react-router/lib/PropTypes';
import styles from './card.scss';

const mapStateToProps = (state, {nanodegreeKey}) => ({
  subscription:
    (nanodegreeKey &&
      StateHelper.getSubscriptionByNanodegreeKey(state, nanodegreeKey)) ||
    {}
});

@cssModule(styles)
class Card extends React.Component {
  static displayName = 'me/cards/card';

  static propTypes = {
    colorScheme: PropTypes.oneOf(_.values(ColorSchemeConstants)),
    courseKey: PropTypes.string,
    nanodegreeKey: PropTypes.string,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isLatest: PropTypes.bool,
    showColorScheme: PropTypes.bool,
    isGraduationLegacy: PropTypes.bool,
    isFreePreviewEnrollment: PropTypes.bool,
    renderFooter: PropTypes.func,
    renderButton: PropTypes.func,
    path: PropTypes.string,
    isReadyForGraduation: PropTypes.bool
  };

  static defaultProps = {
    colorScheme: '',
    courseKey: '000',
    nanodegreeKey: '000',
    isReadyForGraduation: false,
    isLatest: false,
    showColorScheme: false,
    isGraduationLegacy: false,
    isFreePreviewEnrollment: false,
    renderFooter: _.noop,
    renderButton: _.noop,
    path: null
  };

  static contextTypes = {
    router: routerShape
  };

  mixins: [RouteMixin];

  _getLinkPath() {
    const {subscription, nanodegreeKey, isFreePreviewEnrollment} = this.props;

    const isSuspended = SubscriptionHelper.isSuspended(subscription);
    const isChinaPayment = SubscriptionHelper.isChinaPayment(subscription);
    const isIndiaPayment = SubscriptionHelper.isIndiaPayment(subscription);

    if (isSuspended) {
      return isIndiaPayment || isChinaPayment
        ? RouteHelper.settingsPath('subscriptions')
        : RouteHelper.settingsPath('billing');
    } else if (isFreePreviewEnrollment) {
      return RouteHelper.freePreviewPath({
        nanodegreeKey
      });
    } else {
      return RouteHelper.nanodegreePath({
        nanodegreeKey
      });
    }
  }

  handleCardClick = (evt) => {
    const {
      type,
      courseKey,
      nanodegreeKey,
      path,
      isReadyForGraduation
    } = this.props;

    evt.preventDefault();

    switch (type) {
      case SemanticTypes.POPULARND:
        window.location.href = path;
        break;

      case SemanticTypes.NANODEGREE:
        isReadyForGraduation
          ? (window.location.href = `${CONFIG.graduationUrl}/${nanodegreeKey}`)
          : this.context.router.push(this._getLinkPath());
        break;

      case SemanticTypes.COURSE:
        this.context.router.push(RouteHelper.coursePath({courseKey}));
        break;
    }
  };

  render() {
    const {
      title,
      summary,
      type,
      colorScheme,
      isGraduated,
      isLatest,
      nanodegreeKey,
      renderButton,
      renderFooter,
      showColorScheme
    } = this.props;

    return (
      <li styleName="card">
        <button styleName="curtain" onClick={this.handleCardClick}>
          {title}
        </button>
        <div styleName={isLatest ? 'latest-content' : 'content'}>
          <div>
            <div styleName="header">
              {type === 'Application' && (
                <Heading size="h6" as="h3">
                  <IconEdit size="lg" /> {__('Enrollment Application')}
                </Heading>
              )}
              {type === SemanticTypes.POPULARND && (
                <Heading size="h6" as="h3">
                  <IconNanodegree color="cerulean" size="lg" />{' '}
                  <OmacPlaceholder
                    root={{key: nanodegreeKey}}
                    placeholder={__('Popular Nanodegree Program')}
                  >
                    {__('Popular Program')}
                  </OmacPlaceholder>
                </Heading>
              )}
              {type === SemanticTypes.NANODEGREE && (
                <Heading size="h6" as="h3">
                  <IconNanodegree
                    color={isGraduated ? 'silver' : 'cerulean'}
                    size="lg"
                  />{' '}
                  <OmacPlaceholder
                    root={{key: nanodegreeKey}}
                    placeholder={__('Nanodegree Program')}
                  >
                    {__('Program')}
                  </OmacPlaceholder>
                </Heading>
              )}
              {type === SemanticTypes.COURSE && (
                <Heading size="h6" as="h3">
                  <IconCourse
                    color={isGraduated ? 'silver' : 'green'}
                    size="lg"
                  />{' '}
                  {__('Course')}
                </Heading>
              )}
              <Heading size="h4">{title}</Heading>
            </div>

            <div styleName="summary">
              <p>{summary}</p>
            </div>
          </div>
          <div styleName="action">
            {showColorScheme && <span styleName={colorScheme} />}
            {renderButton(this.handleCardClick, this.props)}
          </div>
        </div>

        {renderFooter(this.props)}
      </li>
    );
  }
}

export default connect(mapStateToProps)(Card);
