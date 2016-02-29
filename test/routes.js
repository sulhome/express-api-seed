var supertest = require('supertest');
var app = require('../app');
var assert = require('assert');

describe('routes',function(){
    it('should return notes',function(done){
        supertest(app)
        .get('/notes')
        .expect(200)
        .end(function(err,res){
            assert.equal(err,null);
            var notes = res.body;
            assert.ok(notes.length > 0);
            assert.equal(notes[0].description, 'this is a new note');
            done();
        });
    });
});