import DateHelper from 'helpers/date-helper';
import PropTypes from 'prop-types';
import {__} from 'services/localization-service';
import moment from 'moment';
import styles from './_assessment-due-date.scss';

@cssModule(styles)
export default class ProjectDueDate extends React.Component {
  static displayName = 'common/lesson-card/_assessment-due-date';

  static propTypes = {
    dueDate: PropTypes.string.isRequired
  };

  _getDueDateStyleName(dueDate) {
    if (DateHelper.pastToday(dueDate)) {
      return 'due-at-past-due';
    } else {
      return 'due-at';
    }
  }

  render() {
    const {dueDate} = this.props;
    const date = moment(dueDate).format('MMMM DD, YYYY');

    if (dueDate) {
      return (
        <time
          title={date}
          dateTime={dueDate}
          styleName={this._getDueDateStyleName(dueDate)}
        >
          {__('Due <%= date %>', {
            date: DateHelper.formatRelativeDueDate(dueDate)
          })}
        </time>
      );
    } else {
      return null;
    }
  }
}
