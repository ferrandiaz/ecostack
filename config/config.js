'use strict'

const {
  USER,
  PASSWORD,
  PROJECT_ID
} = process.env

const config = {
  openstack: {
    auth: {
      identity: {
        methods: [
          'password'
        ],
        password: {
          user: {
            name: USER,
            password: PASSWORD
          }
        }
      },
      scope: {
        project: {
          id: PROJECT_ID
        }
      }
    }
  }
}