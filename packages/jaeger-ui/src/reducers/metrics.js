import { handleActions } from 'redux-actions';
import { fetchMetrics, deleteMetrics } from '../actions/prom-api'

const initialState = {
  loading: false
}

function fetchMetricsStarted(state) {
  return {...state, loading: true };
}

function fetchMetricsDone(state, { payload, meta }) {
  // eslint-disable-next-line no-param-reassign
  state[`${meta.spanID}-${meta.metricsName}`] = payload.data;
  return {
    ...state,
    loading: false
  };
}

function deleteMetricsDone(state, { payload }) {
  return {
    ...payload
  }
}

export default handleActions(
  {
    [`${fetchMetrics}_PENDING`]: fetchMetricsStarted,
    [`${fetchMetrics}_FULFILLED`]: fetchMetricsDone,
    [`${deleteMetrics}`]: deleteMetricsDone,
  },
  initialState
);