import fetch from 'isomorphic-fetch';

// export for tests
export function getMessageFromError(errData, status) {
  if (errData.code != null && errData.msg != null) {
    if (errData.code === status) {
      return errData.msg;
    }
    return `${errData.code} - ${errData.msg}`;
  }
  try {
    return JSON.stringify(errData);
  } catch (_) {
    return String(errData);
  }
}

function getJSON(url) {
  return fetch(url, ).then(response => {
    if (response.status < 400) {
      return response.json();
    }
    return response.text().then(bodyText => {
      let data;
      let bodyTextFmt;
      let errorMessage;
      try {
        data = JSON.parse(bodyText);
        bodyTextFmt = JSON.stringify(data, null, 2);
      } catch (_) {
        data = null;
        bodyTextFmt = null;
      }
      if (data && Array.isArray(data.errors) && data.errors.length) {
        errorMessage = data.errors.map(err => getMessageFromError(err, response.status)).join('; ');
      } else {
        errorMessage = bodyText || `${response.status} - ${response.statusText}`;
      }
      if (typeof errorMessage === 'string') {
        errorMessage = errorMessage.trim();
      }
      const error = new Error(`HTTP Error: ${errorMessage}`);
      error.httpStatus = response.status;
      error.httpStatusText = response.statusText;
      error.httpBody = bodyTextFmt || bodyText;
      error.httpUrl = url;
      throw error;
    });
  });
}

function removeByKey(myObj, deleteKey) {
  return Object.assign(
    {},
    ...Object.entries(myObj)
       .filter(([k]) => k!== deleteKey)
       .map(([k, v]) => ({[k]: v})));
}

const PromAPI = {
  fetchMetrics(spanID, metricName) {
    return getJSON(`http://localhost:5002/prom/${spanID}/${metricName}`);
  },
  deleteMetrics(myObj, deleteKey) {
    return removeByKey(myObj, deleteKey);
  }
};

export default PromAPI;
