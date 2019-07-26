import {Button} from '@udacity/veritas-components';
import {IconArrowRight} from '@udacity/veritas-icons';
import PropTypes from 'prop-types';
import ViewCertificateButton from 'components/common/view-certificate-button';
import {__} from 'services/localization-service';

export default class CardButton extends React.Component {
  static displayName = 'me/cards/card-button';

  static propTypes = {
    isLatest: PropTypes.bool,
    isGraduated: PropTypes.bool,
    handleClick: PropTypes.func,
    isReadyForGraduation: PropTypes.bool,
    nanodegreeKey: PropTypes.string,
    courseKey: PropTypes.string,
    isGraduationLegacy: PropTypes.bool,
    isFooterbutton: PropTypes.bool
  };

  static defaultProps = {
    isLatest: false,
    isGraduated: false,
    isReadyForGraduation: false,
    handleClick: _.noop,
    isFooterbutton: false
  };

  render() {
    const {
      handleClick,
      isLatest,
      isGraduated,
      isReadyForGraduation,
      nanodegreeKey,
      courseKey,
      isGraduationLegacy,
      isFooterbutton
    } = this.props;

    switch (true) {
      case isLatest && isReadyForGraduation:
        return (
          <Button
            label={__('Graduate')}
            variant="primary"
            icon={<IconArrowRight />}
            iconAlign="right"
            onClick={handleClick}
          />
        );

      case isLatest:
        return (
          <Button
            label={__('Continue')}
            variant="primary"
            icon={<IconArrowRight />}
            iconAlign="right"
            onClick={handleClick}
          />
        );

      case isGraduated:
        return isFooterbutton ? (
          <ViewCertificateButton
            nanodegreeKey={nanodegreeKey}
            courseKey={courseKey}
            isGraduationLegacy={isGraduationLegacy}
          />
        ) : (
          <Button
            label={__('Program Home')}
            variant="secondary"
            icon={<IconArrowRight />}
            iconAlign="right"
            onClick={handleClick}
          />
        );

      case isReadyForGraduation:
        return (
          <Button
            label={__('Graduate')}
            variant="secondary"
            onClick={handleClick}
          />
        );

      default:
        return (
          <Button
            label={__('Program Home')}
            variant="secondary"
            icon={<IconArrowRight />}
            iconAlign="right"
            onClick={handleClick}
          />
        );
    }
  }
}
