'use strict'

import Request from '../request'
import openstack from '../../config'

class OpenstackSingleton {
  constructor(){
    if (!OpenstackSingleton.instance) {
      this._token = null;
      OpenstackSingleton.instance = this;
    }
  }
  init() {
    const { auth } = openstack;
    const response = await new Request(auth).execute();
    console.log(response);
  }
  _getToken() {
    return this._token;
  }
}

const instance = new OpenstackSingleton();
Object.freeze(instance)

export default instance;