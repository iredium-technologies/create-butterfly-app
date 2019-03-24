import Butterfly from '@iredium/butterfly'
import config from '~/src/config'
import request = require('supertest')

describe('GET /users', (): void => {
  it('should respond ok', async (): Promise<void> => {
    const butterfly = new Butterfly(config)
    butterfly.boot()
    await request(butterfly.app).get('/users').expect(200)
  })
})
