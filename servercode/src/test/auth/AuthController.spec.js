'use strict';
const cookieParser = require('cookie');
const assert = require('chai').assert;
const request = require('supertest');
const app = require('../../main/server').app;

describe('AuthController', () => {

    let agent = request.agent(app);
    let cookiesToSet;
    it('POST /auth [should return cookies on login]', (done) => {
        agent
            .post('/auth')
            .send({
                "login": "admin",
                "password": "admin"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                let cookies = response.headers['set-cookie'];
                assert.isArray(cookies);
                let parsed = cookieParser.parse(cookies[0]);
                assert.isNotNull(parsed['x-secure-token']);
                assert.isNotNull(parsed['max-age']);
                assert.equal('/', parsed['path']);

                cookiesToSet = {'x-secure-token': parsed['x-secure-token']};
                done();
            })
    });

    it('DELETE /auth should check cookies on logout', (done) => {
        agent
            .delete('/auth')
            .expect(200)
            .then(response => {
                let cookies = response.headers['set-cookie'];
                assert.isArray(cookies);
                let parsed = cookieParser.parse(cookies[0]);
                assert.equal('deleted', parsed['x-secure-token']);
                assert.equal(new Date(1), parsed.expires);
                assert.equal('/', parsed.path);
                done();
            });
    });

    it('POST /auth [should fail on wrong login]', (done) => {
        agent
            .post('/auth')
            .send({
                "login": "bull",
                "password": "shit"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(401, done);
    });

    it('DELETE /auth should fail on empty cookies', (done) => {
        agent
            .delete('/auth')
            .expect(403, done)
    });

});