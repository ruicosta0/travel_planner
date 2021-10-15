const app = require('./index') // link to index js file
const supertest = require('supertest')
const request = supertest(app)

it('testing /all endpoint', async () => {
    //sends GET request to /all endpoint
    const response = await request.get('/all')
    expect(response.status).toBe(200)
    expect(response.body).toBeDefined();
})