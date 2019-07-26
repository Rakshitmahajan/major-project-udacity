import {IconKnowledge, IconStudentHub} from '@udacity/veritas-icons';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {__} from 'services/localization-service';
import cx from 'classnames';
import styles from './_service-links.scss';

export default class ServiceLinks extends PureComponent {
  static displayName = 'lesson-sidebar/service-links';

  static propTypes = {
    isStudentHubEnabled: PropTypes.bool,
    isKnowledgeEnabled: PropTypes.bool
  };

  render() {
    const {isKnowledgeEnabled, isStudentHubEnabled} = this.props;

    const knowledgeGlyphClasses = cx(styles['glyph-wrapper'], styles.knowledge);
    const studentHubGlyphClasses = cx(
      styles['glyph-wrapper'],
      styles['student-hub']
    );

    if (!isKnowledgeEnabled && !isStudentHubEnabled) {
      return null;
    }

    return (
      <ul className={styles['service-links']}>
        {isKnowledgeEnabled && (
          <li>
            <a
              href={CONFIG.knowledgeWebUrl}
              className={styles['service-link-item']}
            >
              <span className={knowledgeGlyphClasses}>
                <IconKnowledge size="md" />
              </span>
              <span className={styles['service-title']}>{__('Knowledge')}</span>
              <span className={styles['service-description']}>
                {__('Search project Q&A')}
              </span>
            </a>
          </li>
        )}
        {isStudentHubEnabled && (
          <li>
            <a
              href={CONFIG.studentHubWebUrl}
              className={styles['service-link-item']}
            >
              <span className={studentHubGlyphClasses}>
                <IconStudentHub size="md" />
              </span>
              <span className={styles['service-title']}>
                {__('Student Hub')}
              </span>
              <span className={styles['service-description']}>
                {__('Chat with peers and mentors')}
              </span>
            </a>
          </li>
        )}
      </ul>
    );
  }
}
