// Copyright (c) 2018 Uber Technologies, Inc.
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
import { Popover } from 'antd';
import cx from 'classnames';

import CopyIcon from '../../common/CopyIcon';
import { DiffCounts } from '../../../model/trace-dag/types';
import TDagVertex from '../../../model/trace-dag/types/TDagVertex';

import './drawNode.css';

type Props = {
  a: number;
  b: number;
  isUiFindMatch: boolean;
  operation: string;
  service: string;
};

const abs = Math.abs;
const max = Math.max;

export class DiffNode extends React.PureComponent<Props> {
  render() {
    const { a, b, isUiFindMatch, operation, service } = this.props;
    const isSame = a === b;
    const className = cx({
      'is-same': isSame,
      'is-changed': !isSame,
      'is-more': b > a && a > 0,
      'is-added': a === 0,
      'is-less': a > b && b > 0,
      'is-removed': b === 0,
      'is-ui-find-match': isUiFindMatch,
    });
    const chgSign = a < b ? '+' : '-';
    const table = (
      <table className={`DiffNode ${className}`}>
        <tbody className="DiffNode--body">
          <tr>
            <td className={`DiffNode--metricCell ${className}`} rowSpan={isSame ? 2 : 1}>
              {isSame ? null : <span className="DiffNode--metricSymbol">{chgSign}</span>}
              {isSame ? a : abs(b - a)}
            </td>
            <td className={`DiffNode--labelCell ${className}`}>
              <strong>{service}</strong>
              <CopyIcon
                className="DiffNode--copyIcon"
                copyText={`${service} ${operation}`}
                tooltipTitle="Copy label"
              />
            </td>
          </tr>
          <tr>
            {isSame ? null : (
              <td className={`DiffNode--metricCell ${className}`}>
                <span className="DiffNode--metricSymbol">{chgSign}</span>
                {a === 0 || b === 0 ? 100 : abs((a - b) / max(a, b) * 100).toFixed(0)}
                <span className="DiffNode--metricSymbol">%</span>
              </td>
            )}
            <td className={`DiffNode--labelCell ${className}`}>{operation}</td>
          </tr>
        </tbody>
      </table>
    );

    return (
      <Popover overlayClassName={`DiffNode--popover ${className}`} mouseEnterDelay={0.25} content={table}>
        {table}
      </Popover>
    );
  }
}

function drawNode(vertex: TDagVertex<DiffCounts>, keys: Set<number | string>) {
  const { data, operation, service } = vertex.data;
  return <DiffNode {...data} isUiFindMatch={keys.has(vertex.key)} operation={operation} service={service} />;
}

export default function drawNodeGenerator(keys: Set<number | string>) {
  return function drawVertex(vertex: TDagVertex<DiffCounts>) {
    return drawNode(vertex, keys);
  };
}
