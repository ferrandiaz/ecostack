'use strict'

import { OpenstackClient } from './lib/openstack'

OpenstackClient.init()

const token = OpenstackClient._getToken()

console.log(token)