'use strict';

import singleton from './OpenstackSingleton'
import Request from '../request'
import { R_OK } from 'constants';

class OpenstackApi {
  static async get(params) {
    params.method = 'GET'
    params.headers = getAuthHeader()
    return new Request(params).execute()
  }

  static async post(params) {
    params.method = 'POST'
    params.headers = getAuthHeader()
    return new Request(params).execute()
  }
}

export default OpenstackApi;

const getAuthHeader = () => ({
  'X-Auth-Token': singleton._getToken()
})