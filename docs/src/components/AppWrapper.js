import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class AppWrapper extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render () {
    const { children, ...otherProps } = this.props;
    return (
      <Fragment>
        { React.Children.map(children, child =>
          React.cloneElement(child, { ...otherProps }))
        }
      </Fragment>
    )
  }
}

AppWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.any
};

export default withRouter(AppWrapper);
