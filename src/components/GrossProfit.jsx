import React, {Component} from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart } from '@gooddata/react-components';
import { Model } from '@gooddata/react-components';
import Select from './Select';

class GrossProfit extends Component {
  state = {
    dateFrom: this.props.defaultDate.from,
    dateTo: this.props.defaultDate.to,
  };

  getFilter(dateFrom, dateTo) {
    return Model.absoluteDateFilter(this.props.dateAttribute, dateFrom, dateTo);
  }

  onChange(event) {
    const dates = this.props.onChangeSelect(event);

    this.setState({
      dateFrom: dates.dateFrom(),
      dateTo: dates.dateTo()
    });
  }

  render() {
    const {measures, viewBy, projectId, listOptions, title, periodLabelPlural, periodLabel, trailingText} = this.props;
    const filters = [this.getFilter(this.state.dateFrom, this.state.dateTo)];

    return (
      <div className='App'>
        <h1>
          {`${title} in ${periodLabel} `}
          <Select
              defaultValue='1'
              listOptions={listOptions}
              onChange={(e) => this.onChange(e)}
          />
          {` ${trailingText}`}
        </h1>

        <div>
          <ColumnChart
              key={this.state.period}
              measures={measures}
              filters={filters}
              projectId={projectId}
          />
        </div>

        <h1>{title} - All {periodLabelPlural}</h1>
        
        <div>
          <ColumnChart
              key={this.state.period}
              measures={measures}
              viewBy={viewBy}
              projectId={projectId}
          />
        </div>
      </div>
    );
  }
}

export default GrossProfit;
