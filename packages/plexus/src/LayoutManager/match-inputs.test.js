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

import { matchEdges, matchVertices } from './match-inputs';

describe('matchEdges()', () => {
  it('throws an error when there is an output edge without a corresponding input edge', () => {
    const doMatch = () => {
      matchEdges([{ from: 'a', to: 'c' }], [{ edge: { from: 'a', to: 'b' } }]);
    };
    expect(doMatch).toThrow(/Unable to find edge/i);
  });

  it('aligns edges on the from/to and merges back in the supplemental data', () => {
    const edge0 = {
      fromTo: { from: 'a', to: 'b' },
      extraData: { data: 'edge0 data', label: 'edge0 label' },
      pathPoints: [[0, 1], [0, 2]],
    };
    const edge1 = {
      fromTo: { from: 'a', to: 'c' },
      extraData: { data: 'edge1 data', label: 'edge1 label' },
      pathPoints: [[1, 1], [1, 2]],
    };
    const inputArg = [{ ...edge0.fromTo, ...edge0.extraData }, { ...edge1.fromTo, ...edge1.extraData }];
    const outputArg = [
      { edge: edge0.fromTo, pathPoints: edge0.pathPoints },
      { edge: edge1.fromTo, pathPoints: edge1.pathPoints },
    ];
    const merged = [
      { edge: { ...inputArg[0] }, pathPoints: edge0.pathPoints },
      { edge: { ...inputArg[1] }, pathPoints: edge1.pathPoints },
    ];
    expect(matchEdges(inputArg, outputArg)).toEqual(merged);
  });
});

describe('matchVertices()', () => {
  it('throws an error when there is an output vertex without a corresponding input vertex', () => {
    const doMatch = () => {
      matchVertices([{ vertex: { key: 'a' } }], [{ vertex: { key: 'b' } }]);
    };
    expect(doMatch).toThrow(/Unable to find vertex/i);
  });

  it('aligns vertices on the key and merges back in the supplemental data', () => {
    const v0 = {
      key: 'v0',
      innerExtraData: { data: 'data-v0', label: 'label v0' },
      outterExtraData: { height: 10, width: 20 },
      positionData: { left: 100, top: 200 },
    };
    const v1 = {
      key: 'v1',
      innerExtraData: { data: 'data-v1', label: 'label v1' },
      outterExtraData: { height: 100, width: 200 },
      positionData: { left: 1000, top: 2000 },
    };
    const inputArg = [
      { ...v0.outterExtraData, vertex: { ...v0.innerExtraData, key: v0.key } },
      { ...v1.outterExtraData, vertex: { ...v1.innerExtraData, key: v1.key } },
    ];
    const outputArg = [
      { ...v0.outterExtraData, ...v0.positionData, vertex: { key: v0.key } },
      { ...v1.outterExtraData, ...v1.positionData, vertex: { key: v1.key } },
    ];
    const merged = [
      { ...v0.outterExtraData, ...v0.positionData, vertex: { ...v0.innerExtraData, key: v0.key } },
      { ...v1.outterExtraData, ...v1.positionData, vertex: { ...v1.innerExtraData, key: v1.key } },
    ];
    expect(matchVertices(inputArg, outputArg)).toEqual(merged);
  });
});
