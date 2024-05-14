import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
  } from '../actions/notificationActionTypes';
import { Map } from "immutable"
  
  export const initialNotificationState = {
    notifications: [],
    filter: 'DEFAULT',
  };
  
  const notificationReducer = (state = Map(initialNotificationState), action) => {
    switch (action.type) {
  
      case MARK_AS_READ:
      return state.setIn(
        ['notifications', String(action.index), 'isRead'],
        true
      );
        case FETCH_NOTIFICATIONS_SUCCESS:
          const normalizedData = notificationsNormalizer(action.data);
    
          Object.keys(normalizedData.notifications).map((key) => {
            normalizedData.notifications[key].isRead = false;
          });
          return state.merge(normalizedData);
  
          case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
      
          default:
            break;
        }
    return state;
  };
  
  export default notificationReducer;