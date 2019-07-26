import Actions from 'actions';
import PaymentsHelper from 'helpers/payments-helper';
import {__} from 'services/localization-service';

function generateId() {
  return Math.random()
    .toString(36)
    .slice(-10);
}

function _addAlert(state, {type, message, persistent}) {
  var id = generateId();

  return [
    {
      id,
      type,
      message,
      persistent
    },
    ...state
  ];
}

function addNotification(state, message, persistent = false) {
  return _addAlert(state, {type: 'information', message, persistent});
}

function addSuccess(state, message, persistent = false) {
  return _addAlert(state, {type: 'success', message, persistent});
}
function addWarning(state, message, persistent = false) {
  return _addAlert(state, {type: 'warning', message, persistent});
}

function addError(state, message, persistent = false) {
  return _addAlert(state, {type: 'error', message, persistent});
}

function removeAlert(state, id) {
  return _.reject(state, (alert) => alert.id === id);
}

export default function(state = [], action) {
  switch (action.type) {
    case Actions.Types.CREATE_SUCCESS_ALERT:
      state = addSuccess(state, action.payload);
      break;

    case Actions.Types.CREATE_NOTIFICATION_ALERT:
      state = addNotification(state, action.payload);
      break;

    case Actions.Types.CREATE_WARNING_ALERT:
      state = addWarning(state, action.payload);
      break;

    case Actions.Types.CREATE_ERROR_ALERT:
      state = addError(state, action.payload);
      break;

    case Actions.Types.REMOVE_ALERT:
      state = removeAlert(state, action.payload);
      break;

    case Actions.Types.UPDATE_USER_COMPLETED:
      if (action.error) {
        state = addError(
          state,
          __('An error occurred while trying to save your info')
        );
      } else {
        state = addSuccess(state, __('Info changed successfully'));
      }
      break;

    case Actions.Types.UPDATE_LANGUAGE_COMPLETED:
      if (action.error) {
        state = addError(
          state,
          __('An error occurred while trying to save your language preference')
        );
      } else {
        state = addSuccess(
          state,
          __('Language preference changed successfully')
        );
      }
      break;

    case Actions.Types.UPDATE_DEFAULT_CARD_COMPLETED:
      if (action.error) {
        state = addError(
          state,
          __('An error occurred while trying to update your card')
        );
      } else {
        state = addSuccess(state, __('Card updated successfully'));
      }
      break;

    case Actions.Types.UPDATE_DEFAULT_SOURCE_COMPLETED:
      if (action.error) {
        state = addError(
          state,
          __('An error occurred while trying to update your SEPA direct-debit')
        );
      } else {
        state = addSuccess(state, __('SEPA direct-debit updated successfully'));
      }
      break;

    case Actions.Types.CANCEL_TERM_PURCHASE_COMPLETED:
      if (action.error) {
        state = addError(
          state,
          __('An error occurred while trying to cancel your purchase')
        );
      } else {
        state = addSuccess(
          state,
          __('Purchase canceled and refunded successfully')
        );
      }
      break;

    case Actions.Types.CANCEL_SUBSCRIPTION_COMPLETED:
      if (action.error) {
        state = addError(
          state,
          __('An error occurred while trying to cancel your subscription')
        );
      } else {
        state = addSuccess(state, __('Subscription canceled successfully'));
      }
      break;

    case Actions.Types.FETCH_ORDER_HISTORY_COMPLETED:
      const orderHistory = _.get(action, 'payload.order_history');
      const {hasUpcomingPayment, dueDate} = PaymentsHelper.getUpcomingPayment(
        orderHistory
      );
      const hasOverduePayment = PaymentsHelper.getOverduePayment(orderHistory);
      const hasFailedPayment = PaymentsHelper.getFailedPayment(orderHistory);

      if (hasUpcomingPayment) {
        state = addNotification(
          state,
          __(
            'You have an upcoming payment due on <%= date %>. See <a href="https://classroom.udacity.com/settings/subscriptions">Subscription and Billing</a> for more information.',
            {date: dueDate, renderHTML: true}
          )
        );
      }
      if (hasOverduePayment) {
        state = addWarning(
          state,
          __(
            'Your account is past due. <a href="https://classroom.udacity.com/settings/subscriptions">Pay now</a> to avoid losing access.',
            {renderHTML: true}
          ),
          true
        );
      }
      if (hasFailedPayment) {
        state = addError(
          state,
          __(
            'A failed payment has posted to your account. <a href="https://classroom.udacity.com/settings/subscriptions">Pay now</a> to avoid losing access.',
            {renderHTML: true}
          ),
          true
        );
      }
  }
  return state;
}
