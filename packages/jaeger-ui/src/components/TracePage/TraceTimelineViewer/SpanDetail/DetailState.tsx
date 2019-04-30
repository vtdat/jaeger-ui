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

import { Log } from '../../../../types/trace';

/**
 * Which items of a {@link SpanDetail} component are expanded.
 */
export default class DetailState {
  isTagsOpen: boolean;
  isProcessOpen: boolean;
  logs: { isOpen: boolean, openedItems: Set<Log> };
  metrics: { isOpen: boolean, openedItems: Set<any> };

  constructor(oldState?: DetailState) {
    const { isTagsOpen, isProcessOpen, logs, metrics }: DetailState | Record<string, undefined> = oldState || {};
    this.isTagsOpen = Boolean(isTagsOpen);
    this.isProcessOpen = Boolean(isProcessOpen);
    this.logs = {
      isOpen: Boolean(logs && logs.isOpen),
      openedItems: logs && logs.openedItems ? new Set(logs.openedItems) : new Set(),
    };
    this.metrics = {
      isOpen: Boolean(metrics && metrics.isOpen),
      openedItems: metrics && metrics.openedItems ? new Set(metrics.openedItems) : new Set(),
    };
  }

  toggleTags() {
    const next = new DetailState(this);
    next.isTagsOpen = !this.isTagsOpen;
    return next;
  }

  toggleProcess() {
    const next = new DetailState(this);
    next.isProcessOpen = !this.isProcessOpen;
    return next;
  }

  toggleLogs() {
    const next = new DetailState(this);
    next.logs.isOpen = !this.logs.isOpen;
    return next;
  }

  toggleLogItem(logItem: Log) {
    const next = new DetailState(this);
    if (next.logs.openedItems.has(logItem)) {
      next.logs.openedItems.delete(logItem);
    } else {
      next.logs.openedItems.add(logItem);
    }
    return next;
  }

  toggleMetrics() {
    const next = new DetailState(this);
    next.metrics.isOpen = !this.metrics.isOpen;
    return next;
  }

  toggleMetricItem(metricItem: any) {
    const next = new DetailState(this);
    if (next.metrics.openedItems.has(metricItem)) {
      next.metrics.openedItems.delete(metricItem);
    } else {
      next.metrics.openedItems.add(metricItem);
    }
    return next;
  }
}
