// src/selectors/notificationSelector.test.js

import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  // Mock state for testing
  const state = {
    notifications: {
      filter: 'all',
      byId: {
        1: { id: 1, message: 'Notification 1', read: true },
        2: { id: 2, message: 'Notification 2', read: false },
        3: { id: 3, message: 'Notification 3', read: false },
      },
    },
  };

  test('filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(state)).toEqual('all');
  });

  test('getNotifications returns a list of the message entities within the reducer', () => {
    expect(getNotifications(state)).toEqual({
      1: { id: 1, message: 'Notification 1', read: true },
      2: { id: 2, message: 'Notification 2', read: false },
      3: { id: 3, message: 'Notification 3', read: false },
    });
  });

  test('getUnreadNotifications return a list of the message entities within the reducer', () => {
    expect(getUnreadNotifications(state)).toEqual({
      2: { id: 2, message: 'Notification 2', read: false },
      3: { id: 3, message: 'Notification 3', read: false },
    });
  });
});
