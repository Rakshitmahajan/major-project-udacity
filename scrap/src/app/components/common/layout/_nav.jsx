import {
  IconCareers,
  IconCatalog,
  IconHome,
  IconLogout,
  IconSettings
} from '@udacity/veritas-icons';
import {Nav, NavGroup, NavItem} from '@udacity/ureact-app-layout';

import AuthenticationService from 'services/authentication-service';
import {ExternalServiceConsumer} from 'components/common/external-service-context';
import PropTypes from 'prop-types';
import ServiceLinks from 'components/common/global-nav/service-links';
import ServiceLinksContainer from 'components/common/service-links-container';
import {__} from 'services/localization-service';
import {browserHistory} from 'react-router';

const ClassroomNav = ({variant}, {root}) => {
  const ndKey = _.get(root, 'key');

  return (
    <ExternalServiceConsumer>
      {({isCareerPortalEnabled}) => {
        return (
          <Nav variant={variant}>
            <NavGroup>
              {/* TODO: (layout) add tracking to clicks */}
              <NavItem
                title={__('Home')}
                onClick={() => browserHistory.push('/me')}
              >
                <IconHome title={__('Home')} size="lg" />
              </NavItem>
              <NavItem
                href="https://www.udacity.com/courses/all"
                title={__('Catalog')}
                target="_blank"
              >
                <IconCatalog title={__('Catalog')} size="lg" />
              </NavItem>
              {isCareerPortalEnabled && (
                <NavItem
                  href={CONFIG.careerPortalUrl}
                  title={__('Career Portal')}
                >
                  <IconCareers title={__('Careers')} size="lg" />
                </NavItem>
              )}
            </NavGroup>
            <ServiceLinksContainer
              DisplayComponent={ServiceLinks}
              ndKey={ndKey}
            />
            <NavGroup>
              <NavItem
                title={__('Settings')}
                onClick={() => browserHistory.push('/settings')}
              >
                <IconSettings title={__('Settings')} size="lg" />
              </NavItem>
              <NavItem
                title={__('Logout')}
                onClick={() => AuthenticationService.signOut()}
              >
                <IconLogout title={__('Logout')} size="lg" />
              </NavItem>
            </NavGroup>
          </Nav>
        );
      }}
    </ExternalServiceConsumer>
  );
};

ClassroomNav.propTypes = {
  variant: PropTypes.oneOf(['small', 'large'])
};

ClassroomNav.contextTypes = {
  root: PropTypes.object
};

export default ClassroomNav;
