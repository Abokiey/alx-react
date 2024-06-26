import React, { Component } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { logout } from "../actions/uiActionCreators"
import { connect } from "react-redux";
import PropTypes from "prop-types";


export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logout } = this.props;

    return (
      <div className={css(styles.header)}>
        <img src={holberton_logo} className={css(styles.headerImg)} />
        <h1>School dashboard</h1>

        {user && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logout} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}
      </div>
    );
  }
}

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: cssVars.mainColor,
    fontSize: "20px",
  },

  headerImg: {
    width: "200px",
  },
  logoutSection: {
    color: "black",
    position: "absolute",
    right: 0,
    paddingRight: "20px",
    alignSelf: "flex-end",
  },
  logoutSectionSpan: {
    fontStyle: "italic",
    cursor: "pointer",
  },
});

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    user: state.get("user")
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);