// Copyright (c) 2017 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import { Divider, Tooltip } from 'antd';

import AccordianKeyValues from './AccordianKeyValues';
import AccordianLogs from './AccordianLogs';
import AccordianMetrics from './AccordianMetrics';
import DetailState from './DetailState';
import { formatDuration } from '../utils';
import LabeledList from '../../../common/LabeledList';

import { TNil } from '../../../../types';
import { Log, Span, KeyValuePair, Link } from '../../../../types/trace';

import './index.css';

type SpanDetailProps = {
  addToUiFind: (spanID: string) => void;
  detailState: DetailState;
  linksGetter: ((links: KeyValuePair[], index: number) => Link[]) | TNil;
  logItemToggle: (spanID: string, log: Log) => void;
  logsToggle: (spanID: string) => void;
  processToggle: (spanID: string) => void;
  span: Span;
  tagsToggle: (spanID: string) => void;
  traceStartTime: number;
  metricsToggle: (spanID: string) => void;
  metricItemToggle: (spanID: string, metric: any) => void;
};

export default function SpanDetail(props: SpanDetailProps) {
  const {
    addToUiFind,
    detailState,
    linksGetter,
    logItemToggle,
    logsToggle,
    metricItemToggle,
    metricsToggle,
    processToggle,
    span,
    tagsToggle,
    traceStartTime,
  } = props;
  const { isTagsOpen, isProcessOpen, logs: logsState, metrics: metricsState } = detailState;
  const { operationName, process, duration, relativeStartTime, spanID, logs, tags } = span;
  const overviewItems = [
    {
      key: 'svc',
      label: 'Service:',
      value: process.serviceName,
    },
    {
      key: 'duration',
      label: 'Duration:',
      value: formatDuration(duration),
    },
    {
      key: 'start',
      label: 'Start Time:',
      value: formatDuration(relativeStartTime),
    },
  ];

  return (
    <div>
      <div className="ub-flex ub-items-center">
        <h2 className="ub-flex-auto ub-m0">{operationName}</h2>
        <LabeledList
          className="ub-tx-right-align"
          dividerClassName="SpanDetail--divider"
          items={overviewItems}
        />
      </div>
      <Divider className="SpanDetail--divider ub-my1" />
      <div>
        <div>
          <AccordianKeyValues
            data={tags}
            label="Tags"
            linksGetter={linksGetter}
            isOpen={isTagsOpen}
            onToggle={() => tagsToggle(spanID)}
          />
          {process.tags && (
            <AccordianKeyValues
              className="ub-mb1"
              data={process.tags}
              label="Process"
              linksGetter={linksGetter}
              isOpen={isProcessOpen}
              onToggle={() => processToggle(spanID)}
            />
          )}
        </div>
        {logs &&
          logs.length > 0 && (
            <AccordianLogs
              linksGetter={linksGetter}
              logs={logs}
              isOpen={logsState.isOpen}
              openedItems={logsState.openedItems}
              onToggle={() => logsToggle(spanID)}
              onItemToggle={logItem => logItemToggle(spanID, logItem)}
              timestamp={traceStartTime}
            />
          )}
        </div>
        <div>
          <AccordianMetrics
            isOpen={metricsState.isOpen}
            openedItems={metricsState.openedItems}
            onToggle={() => metricsToggle(spanID)}
            onItemToggle={metricItem => metricItemToggle(spanID, metricItem)}
            span={span}
          />
        </div>
      <div>
        <small className="SpanDetail--debugInfo">
          <Tooltip title="Click ID to add to filter">
            <span className="SpanDetail--debugLabel" data-label="SpanID:" />{' '}
            <button className="SpanDetail--debugValue" type="button" onClick={() => addToUiFind(spanID)}>
              {spanID}
            </button>
          </Tooltip>
        </small>
      </div>
    </div>
  );
}
