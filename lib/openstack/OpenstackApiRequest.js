'use strict'

import request from 'superagent'

class OpenstackApiRequest {
  constructor({version, url, path, method, data = {}, headers = {}}) {
    this._version = version;
    this._url = url;
    this._data = data;
    this._headers = headers;
  }

  async execute() {
    return request(this._method, `${this._url}/${this._version}/${this._path}`)
      .set(this._headers)
      .send(data)
  }
}

export default OpenstackApiRequest;

