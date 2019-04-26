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
import LineGraph from './LineGraph';
import { Span } from '../../../../types/trace';

import './AccordianMetrics.css';

type AccordianMetricsDetailProps = {
  interactive?: boolean;
  isOpen: boolean;
  onToggle?: () => void;
  span: Span;
  title: string;
};

export default function AccordianMetricsDetail(props: AccordianMetricsDetailProps) {
  const { interactive, isOpen, onToggle, span, title} = props;
  let arrow: React.ReactNode | null = null;
  let HeaderComponent: 'span' | 'a' = 'span';
  let headerProps: Object | null = null;
  const chart = `${span.spanID}-${title}`
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
        {arrow} <strong>{title}</strong>
      </HeaderComponent>
      {isOpen && (
        <div className="AccordianMetrics--content">
          <LineGraph
          title= {title}
          chart={chart}
          span={span}
          />        
        </div>
      )}
    </div>
  );
}

AccordianMetricsDetail.defaultProps = {
  interactive: true,
  onToggle: undefined,
};
