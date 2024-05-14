import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

describe('Notification Action Creators', () => {
  test('markAsRead action creator', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index: index
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });

  test('setNotificationFilter action creator', () => {
    const filter = 'URGENT';
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: filter
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
