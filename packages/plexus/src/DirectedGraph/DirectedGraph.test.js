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

describe('defaultGetEdgeLabel()', () => {
  describe('edge has a label', () => {
    it.skip('uses a string label', () => {});
    it.skip('uses a React element label', () => {});
    it.skip('converts values to a string when they not a string or React element', () => {});
  });

  describe('edge without label', () => {
    it.skip('returns a fragment with the node labels', () => {});
  });
});

describe('defaultGetNodeLabel()', () => {
  describe('vertex has a label', () => {
    it.skip('uses a string label', () => {});
    it.skip('uses a React element label', () => {});
    it.skip('converts values to a string when they not a string or React element', () => {});
  });

  describe('vertex without label', () => {
    it.skip('returns the key as a string', () => {});
  });
});

describe('<DirectedGraph>', () => {
  describe('static getDerivedStateFromProps()', () => {
    describe('edges and vertices have not changed', () => {
      it.skip('does nothing', () => {});
    });

    describe('edges or vertices have changed', () => {
      it.skip('resets the state to the initial phase and creates vertex refs', () => {});
    });
  });

  describe('ctor', () => {
    it.skip('sets the initial state when there are edges and vertices', () => {});
  });

  describe('componentDidMount', () => {
    it.skip('triggers _setSizeVertices', () => {});
  });

  describe('_setSizeVertices', () => {
    it.skip('measures the vertices', () => {});
    it.skip('kicks off a layout calculation', () => {});
    it.skip('sets the state as positions pending', () => {});
  });

  describe('layout updates from LayoutManager', () => {
    describe('positions', () => {
      it.skip('does nothing if the layout is cancelled', () => {});
      it.skip('updates the state with the position layout data', () => {});
    });

    describe('edges', () => {
      it.skip('does nothing if the layout is cancelled', () => {});
      it.skip('updates the state with the complete layout data', () => {});
    });
  });

  describe('_renderVertices', () => {
    it.skip('renders hidden nodes', () => {});
  });

  describe('_renderLayoutVertices', () => {
    it.skip('renders nodes with position data', () => {});
  });

  describe('_renderLayoutEdges', () => {
    it.skip('renders edges', () => {});
  });

  describe('render', () => {
    it.skip('sets props on the root node based on setOnRoot', () => {});
    it.skip('sets props on the nodes container based on setOnNodesContainer', () => {});

    describe('phase is positions are pending', () => {
      it.skip('renders vertices with _renderVertices when without position data', () => {});
      it.skip('skips rendering edges', () => {});
    });

    describe('phase is edges are pending', () => {
      it.skip('renders vertices with _renderLayoutVertices when with position data', () => {});
      it.skip('skips rendering edges', () => {});
    });

    describe('phase is layout is complete', () => {
      it.skip('renders vertices with _renderLayoutVertices when with position data', () => {});
      it.skip('sets props on the edges container based on setOnEdgesContainer', () => {});
      it.skip('adds the arrow defs', () => {});
      it.skip('renders the edges', () => {});
    });
  });
});
