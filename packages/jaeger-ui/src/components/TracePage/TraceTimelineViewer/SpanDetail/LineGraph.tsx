import React from 'react';
// import Highcharts from 'highcharts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as promApiActions from '../../../../actions/prom-api';
import { LineGraphDetail } from './LineGraphDetail';
import { Span } from '../../../../types/trace';

type LineGraphProps = {
  title: string;
  fetchMetrics: (spanID: string, title: string) => void;
  span: Span;
  metrics: any;
  chart: string;
  deleteMetrics: (metrics: any, key: string) => void;
};

export class LineGraphImpl extends React.PureComponent<LineGraphProps> {

  componentDidMount() {
    const { fetchMetrics, span, title } = this.props;
    fetchMetrics(span.spanID, title);
  }

  componentWillUnmount() {
    const { deleteMetrics, metrics, span, title } = this.props;
    deleteMetrics(metrics, `${span.spanID}-${title}`);
  }

  render() {
    const { metrics, title, span, chart } = this.props;
    return (
      <div>
      {(`${span.spanID}-${title}` in metrics) && (
        <LineGraphDetail
          metrics= {metrics[`${span.spanID}-${title}`]}
          title= {title}
          hostIP= {span.process.tags[1].value}
          chart={chart}
        />)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { metrics } = state
  return { 
    ...ownProps,
    metrics
   };
}

function mapDispatchToProps(dispatch) {
  const { fetchMetrics, deleteMetrics } = bindActionCreators(promApiActions, dispatch);
  return { fetchMetrics, deleteMetrics };
}

export default connect(mapStateToProps, mapDispatchToProps)(LineGraphImpl);
