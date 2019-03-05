import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../../base/common/components/Textarea/Textarea';

class TextAreaComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  handleTextArea = (e) => {
    this.setState({counter: e.target.value.length});
    this.props.onChange(e);
  };

  render() {
    return (
      <div>
        <TextArea
          required={this.props.required.indexOf('description') !== -1}
          type="text"
          onChange={this.handleTextArea}
          name="description"
          label="DESCRIPTION"
          placeholder="Write about your event, be creative"
          maxLength={140}
          wrap="soft"
        />
        <div className="htr-input-wrapper subsidiary">
          <div className="htr-label-box"></div>
          <div className="htr-input-box subsidiary-text-box">
            <div className="subsidiary-text">Max length 140 characters</div>
            <div className="subsidiary-text">{this.state.counter}/140</div>
          </div>
        </div>
      </div>
    );
  }
}

TextAreaComponent.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.array
};

export default TextAreaComponent;
