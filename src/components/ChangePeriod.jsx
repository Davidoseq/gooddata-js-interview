import React, { Component } from 'react';
import Select from './Select';

class ChangePeriod extends Component {
  render() {
    const periodOptions = {
      month: 'Month',
      year: 'Year'
    };

    return (
      <React.Fragment>
        {`Pick the period: `}

        <Select
          defaultValue='month'
          listOptions={periodOptions}
          onChange={(event) => this.props.onChange(event)}
        />
      </React.Fragment>
    )
  }
}

export default ChangePeriod;
