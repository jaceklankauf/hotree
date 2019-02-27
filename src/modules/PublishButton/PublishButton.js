import React from 'react';
import PropTypes from 'prop-types';

export class PublishButton extends React.Component {
  render() {
    const {onClick} = this.props;
    return (
      <div className="htr-submit container">
        <button className="htr-submit-btn" onClick={onClick}>
          PUBLISH EVENT
        </button>
      </div>
    );
  }
}

PublishButton.propTypes = {
  onClick: PropTypes.func,
};

export default PublishButton;
