// src/selectors/notificationSelector.js

// Selector for getting the filter type selected
export const filterTypeSelected = state => state.notifications.filter;

// Selector for getting all notifications in a Map format
export const getNotifications = state => state.notifications.byId;

// Selector for getting unread notifications in a Map format
export const getUnreadNotifications = state => {
  const allNotifications = state.notifications.byId;
  const unreadNotifications = {};

  // Filter unread notifications
  for (const id in allNotifications) {
    if (!allNotifications[id].read) {
      unreadNotifications[id] = allNotifications[id];
    }
  }

  return unreadNotifications;
};
