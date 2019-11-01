import React, { Component } from 'react';

class Select extends Component {
  renderListOptions = (listOptions) => {
    const options = [];

    for (const [key, value] of Object.entries(listOptions)) {
      options.push(
        <option key={key} value={key}>
          {value}
        </option>,
      );
    }

    return options;
  };

  render() {
    const { defaultValue, onChange, listOptions } = this.props;

    return (
      <select defaultValue={defaultValue} onChange={onChange}>
        {this.renderListOptions(listOptions)}
      </select>
    );
  }
}

export default Select;
