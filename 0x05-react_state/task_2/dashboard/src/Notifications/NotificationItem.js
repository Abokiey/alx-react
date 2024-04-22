import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    // Define styles using Aphrodite
    const styles = StyleSheet.create({
      item: {
        width: "100%",
        borderBottom: "1px solid black",
        fontSize: "20px",
        padding: "10px 8px",
      },
      default: {
        color: "blue",
      },
      urgent: {
        color: "red",
      },
    });

    return (
      <>
        {type && value && (
          <li
            onClick={() => markAsRead(id)}
            className={css(styles.item, type === "urgent" ? styles.urgent : styles.default)}
          >
            {value}
          </li>
        )}
        {html && (
          <li
            onClick={() => markAsRead(id)}
            className={css(styles.item, styles.urgent)} // Assuming html notifications are always urgent
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        )}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};

export default NotificationItem;
