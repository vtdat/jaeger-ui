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

describe('killWorker', () => {
  it.skip('resets the properties and terminates the worker', () => {});
});

describe('Coordinator', () => {
  describe('ctor ', () => {
    it.skip('saves the callback parameter for later use', () => {});
  });

  describe('getLayout', () => {
    it.skip('kills any busy workers', () => {});
    it.skip('starts the process by triggering _getPositions', () => {});
  });

  describe('stopAndRelease', () => {
    it.skip('kills busy workers', () => {});
    it.skip('kills idle workers', () => {});
    it.skip('clears pending layouts', () => {});
  });

  describe('_initWorker', () => {
    it.skip('creates a new worker with a unique ID and adds relevant listeners to it', () => {});
  });

  describe('_makeWorkerIdle', () => {
    it.skip('makes a busy worker idle', () => {});
    it.skip('keeps an idle worker idle', () => {});
    it.skip('kills an unrecognized worker', () => {});
  });

  describe('_getPositions', () => {
    it.skip('throws an error if there there isnt a pending layout', () => {});
    it.skip('updates the internal status to reflect the pending positions', () => {});
    it.skip('assigns the job to a worker', () => {});
  });

  describe('_getEdges', () => {
    it.skip('throws an error if there there isnt a pending layout', () => {});
    it.skip('throws an error if the positions are not yet known', () => {});
    it.skip('updates the internal status to reflect the pending edges', () => {});
    it.skip('assigns the job to a worker', () => {});
  });

  describe('_handleVizWorkerError', () => {
    it.skip('throws an error if the event originated with an unknown worker', () => {});
    it.skip('logs the error', () => {});
    it.skip('removes and kills the worker if it is an idleWorker', () => {});
    it.skip('removes and kills the worker if it is a busyWorker', () => {});
  });

  describe('_handleVizWorkerMessageError', () => {
    it.skip('logs error details', () => {});
  });

  describe('_handleVizWorkerMessage', () => {
    it.skip('renders the worker idle', () => {});

    describe('type === error', () => {
      it.skip('logs details about the error', () => {});
    });

    describe('type === layout-error', () => {
      it.skip('logs details about the error', () => {});
    });

    it.skip('does nothing if the layout ID in the message is stale', () => {});

    describe('type === positions', () => {
      it.skip('processes the positions result', () => {});
    });

    describe('type === edges', () => {
      it.skip('processes the edges result', () => {});
    });

    describe('unknown type', () => {
      it.skip('logs an error', () => {});
    });
  });

  describe('_processPositionsResult', () => {
    it.skip('does nothing if the layout is unknown', () => {});

    describe('invalid states', () => {
      it.skip('logs an error when not in phase positions', () => {});
      it.skip('logs an error when the worker is unknown', () => {});
      it.skip('logs an error when the message is from the wrong worker', () => {});
      it.skip('logs an error when received invalid result data', () => {});
    });

    it.skip('triggers the callback with an update', () => {});
    it.skip('triggers the edge phase', () => {});
  });

  describe('_processEdgesResult', () => {
    it.skip('does nothing if the layout is unknown', () => {});

    describe('invalid states', () => {
      it.skip('logs an error when not in phase edges', () => {});
      it.skip('logs an error when the worker is unknown', () => {});
      it.skip('logs an error when the message is from the wrong worker', () => {});
      it.skip('logs an error when received invalid result data', () => {});
    });

    it.skip('triggers the callback with an update', () => {});
    it.skip('clears the pending work', () => {});
  });
});
