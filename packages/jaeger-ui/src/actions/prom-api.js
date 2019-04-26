import { createAction } from 'redux-actions';
import PromAPI from '../api/prom';

export const fetchMetrics = createAction(
  '@METRICS_API/FETCH_METRICS',
  (spanID, metricName) => PromAPI.fetchMetrics(spanID, metricName),
  (spanID, metricsName) => ({spanID, metricsName}),
);

export const deleteMetrics = createAction(
  '@METRICS_API/DELETE_METRICS',
  (state, stateKey) => PromAPI.deleteMetrics(state, stateKey),
);