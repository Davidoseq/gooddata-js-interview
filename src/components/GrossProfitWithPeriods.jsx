import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { Model } from '@gooddata/react-components';
import {
  DATE_ATTRIBUTE,
  DATE_ATTRIBUTE_IN_MONTHS,
  GROSS_PROFIT_MEASURE,
  PROJECT_ID,
} from '../config/config';

import GrossProfit from './GrossProfit';
import * as grossProfitMonth from '../utils/grossProfitMonth';
import * as grossProfitYear from '../utils/grossProfitYear';
import ChangePeriod from './ChangePeriod';

class GrossProfitWithPeriods extends Component {
  state = {
    period: 'month',
  };

  onChangePeriod = (event) => {
    this.setState({
      period: event.target.value,
    });
  };

  render() {
    const { state } = this;
    let data;

    if (state.period === 'month') {
      data = grossProfitMonth;
    } else if (state.period === 'year') {
      data = grossProfitYear;
    }

    return (
      <div className="App">
        <ChangePeriod onChange={this.onChangePeriod} />

        <GrossProfit
          projectId={PROJECT_ID}
          dateAttribute={DATE_ATTRIBUTE}
          measures={[
            Model.measure(GROSS_PROFIT_MEASURE)
              .localIdentifier('m1')
              .alias(data.measureAlias),
          ]}
          viewBy={Model.attribute(DATE_ATTRIBUTE_IN_MONTHS).localIdentifier(
            'a1',
          )}
          defaultDate={data.defaultDate}
          listOptions={data.listOptions}
          title={data.measureAlias}
          onChangeSelect={data.onChangeCallback}
          periodLabel={data.periodLabel}
          periodLabelPlural={data.periodLabelPlural}
          trailingText={data.trailingText}
          key={state.period}
        />
      </div>
    );
  }
}

export default GrossProfitWithPeriods;
