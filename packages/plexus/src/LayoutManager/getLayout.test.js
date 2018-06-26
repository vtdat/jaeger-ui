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

describe('getVerticesValidity', () => {
  describe('validation failure scenarios', () => {
    it.skip('fails when an input vertex is unmatched', () => {});
    it.skip('fails when an output vertex is unmatched', () => {});
    it.skip('fails when the height is too different', () => {});
    it.skip('fails when the width is too different', () => {});
  });

  describe('validation warn scenarios', () => {
    it.skip('warns when the left is too different', () => {});
    it.skip('warns when the top is too different', () => {});
  });

  it.skip('validates as OK when sizes are fine and positions are omitted', () => {});
  it.skip('validates ok when sizes and positions are fine', () => {});
});

describe('getLayout', () => {
  describe('phase === positions', () => {
    it.skip('invokes viz with a dot string and specifies the dot engine ', () => {});
  });

  describe('phase === edges', () => {
    it.skip('invokes viz with a dot string and specifies the dot neato ', () => {});
  });

  it.skip('verifies the validity of the output', () => {});
  it.skip('forwards a validation error', () => {});
  it.skip('forwards a validation warning', () => {});
  it.skip('returns the successful layout', () => {});
});
