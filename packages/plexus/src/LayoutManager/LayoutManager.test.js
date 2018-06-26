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

describe('LayoutManager', () => {
  describe('ctor', () => {
    it.skip('initializes a coordinator', () => {});
  });

  describe('getLayout()', () => {
    it.skip('cancels in-progress / pending layouts', () => {});
    it.skip('returns a PendingLayoutResult', () => {});
  });

  describe('stopAndRelease()', () => {
    it.skip('cancels any pending / in-progress layouts', () => {});
    it.skip('stops and releases Coordinator work', () => {});
  });

  describe('_cancelPending()', () => {
    it.skip('does nothing if there are no pending layouts', () => {});
    it.skip('cancels a pending positions result if there is one', () => {});
    it.skip('cancels a pending layout result if there is one', () => {});
  });

  describe('_handleUpdate', () => {
    it.skip('is passed into the Coordinator ctor', () => {});
    it.skip('does nothing if the update is irrelevant', () => {});

    describe('type === positions', () => {
      it.skip('warns if the update is a duplicate', () => {});
      it.skip('resolves the positions', () => {});
    });

    describe('type === edges', () => {
      it.skip('resolves the layout', () => {});
      it.skip('clears the pending result', () => {});
    });
  });
});
