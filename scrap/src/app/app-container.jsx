import {ExternalServiceProvider} from 'components/common/external-service-context';
import Layout from 'components/common/layout';
import {Provider as LayoutProvider} from '@udacity/ureact-app-layout';
import {Provider} from 'react-redux';
import Routes from 'routes';
import {i18n} from 'services/localization-service';
import store from 'store';

export default class AppContainer extends React.Component {
  state = {
    locale: null,
    loading: true
  };

  componentDidMount() {
    i18n
      .activate()
      .then((locale) => {
        this.setState({
          locale,
          loading: false
        });
      })
      .catch(() => this.setState({loading: false}));
  }

  render() {
    const {locale, loading} = this.state;

    return (
      <Provider store={store}>
        <ExternalServiceProvider>
          <LayoutProvider>
            {loading ? (
              <Layout navVariant="none" busy={true} />
            ) : locale ? (
              <Routes />
            ) : null}
          </LayoutProvider>
        </ExternalServiceProvider>
      </Provider>
    );
  }
}
