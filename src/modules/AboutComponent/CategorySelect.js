import React from 'react';
import { categories } from '../../assets/mocks/categories';

export class CategorySelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: ''
    };
  }

  handleSelectValue = e => {
    this.setState({
      selectedValue: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="htr-input-wrapper">
          <div className="htr-label-box">
            <div className="htr-label">
              CATEGORY
            </div>
          </div>
          <div className="htr-input-box">
            <select
              className="htr-select"
              value={this.state.selectedValue}
              onChange={this.handleSelectValue}
            >
              <option
                value=""
                defaultValue
                className="htr-default-select"
                disabled
              >
                Select your category
              </option>
              {categories.map((category) =>
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              )}
            </select>
          </div>
        </div>
        <div className="htr-input-wrapper">
          <div className="htr-label-box"></div>
          <div className="htr-input-box subsidiary-text-box">
            <div className="subsidiary-text">Describe topic and people who should be interested in this event</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CategorySelect;
