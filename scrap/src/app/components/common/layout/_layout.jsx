import ClassroomNav from './_nav';
import {Helmet} from 'react-helmet';
import {Layout} from '@udacity/ureact-app-layout';
import {Loading} from '@udacity/veritas-components';
import PropTypes from 'prop-types';
import {__} from 'services/localization-service';
import styles from './_layout.scss';

export default class AppLayout extends React.Component {
  static displayName = 'components/app-layout';
  static propTypes = {
    busy: PropTypes.bool,
    children: PropTypes.node,
    documentTitle: PropTypes.string,
    navVariant: PropTypes.oneOf(['small', 'large', 'none'])
  };

  static defaultProps = {
    busy: false,
    navVariant: 'small'
  };

  render() {
    const {busy, children, navVariant, documentTitle, ...rest} = this.props;

    return (
      <Layout
        {...rest}
        backgroundColor="#FAFBFC"
        nav={
          navVariant === 'none' ? null : <ClassroomNav variant={navVariant} />
        }
      >
        <Helmet>
          <title>
            {__('<%= documentTitle %> - Udacity', {
              documentTitle: busy ? __('Loading') : documentTitle
            })}
          </title>
        </Helmet>
        {busy ? (
          <div className={styles['loading-wrapper']}>
            <Loading size="lg" busy />
          </div>
        ) : (
          children
        )}
      </Layout>
    );
  }
}
