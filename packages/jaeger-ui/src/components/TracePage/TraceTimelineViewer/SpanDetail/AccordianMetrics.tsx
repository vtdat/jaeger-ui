// @flow

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

import * as React from 'react';
import cx from 'classnames';
import IoIosArrowDown from 'react-icons/lib/io/ios-arrow-down';
import IoIosArrowRight from 'react-icons/lib/io/ios-arrow-right';
import { Metric, Span } from '../../../../types/trace';
import './AccordianMetrics.css';
import AccordianMetricsDetail from './AccordianMetricsDetail';

type AccordianMetricsProps = {
  interactive?: boolean;
  isOpen: boolean;
  onItemToggle?: (metric: string) => void;
  onToggle?: () => void;
  openedItems?: Set<any>;
  span: Span;
};

export default function AccordianMetrics(props: AccordianMetricsProps) {
  const { interactive, isOpen, openedItems, onItemToggle, onToggle, span } = props;
  let arrow: React.ReactNode | null = null;
  let HeaderComponent: 'span' | 'a' = 'span';
  let headerProps: Object | null = null;
  const metricsNames= ['memory', 'cpu']
  if (interactive) {
    arrow = isOpen ? (
      <IoIosArrowDown className="u-align-icon" />
    ) : (
      <IoIosArrowRight className="u-align-icon" />
    );
    HeaderComponent = 'a';
    headerProps = {
      'aria-checked': isOpen,
      onClick: onToggle,
      role: 'switch',
    };
  }

  

  return (
    <div className="AccordianMetrics">
      <HeaderComponent className={cx('AccordianMetrics--header', { 'is-open': isOpen })} {...headerProps}>
        {arrow} <strong>Metrics</strong>
      </HeaderComponent>
      {isOpen && (
        <div className="AccordianMetrics--content">
        {metricsNames.map((metric, i) => (
        <AccordianMetricsDetail
          key={ i }
          interactive={interactive}
          isOpen={openedItems ? openedItems.has(metric) : false}
          onToggle={interactive && onItemToggle ? () => onItemToggle(metric) : undefined}
          title= {metric}
          span={span}
          />
        ))}
        </div>
      )}
    </div>
  );
}

AccordianMetrics.defaultProps = {
  interactive: true,
  onItemToggle: undefined,
  onToggle: undefined,
  openedItems: undefined,
};
