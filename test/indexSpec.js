/**
 * Created by Davip on 07/01/2015.
 */

'use strict';
var _ = require('underscore');
var assert  = require('chai').assert;
var include   = require('..');

var paths;
var modules;

  
describe('There are not files nested', function(){

    before(function(){

        // relative path of a empty folder
        paths = {
            'empty':'./examples/empty'
        }
        
        modules = include.modules(paths, __dirname);
    });

    describe('should be a object', function(){    
        it('should be a object', function(){
            assert.isObject(modules, 'is an object');
        });
    });

    describe('should be a null object', function(){
        it('should be a null object', function(){
            assert.equal(_.size(modules), 0);
        });
    });
    
    
});

describe('There are files nested', function(){

    before(function(){

        // relative path of a empty folder
        paths = {
            'development':'./examples/development',
            'default':'./examples/default'
        }
        
        modules = include.modules(paths, __dirname);
    });

    describe('should be the same name the name property defined in paths variable and result object', function(){

        it('should be the same name', function(){
            assert.equal(Object.getOwnPropertyNames(paths)[0], Object.getOwnPropertyNames(modules)[0]);
            assert.equal(Object.getOwnPropertyNames(paths)[1], Object.getOwnPropertyNames(modules)[1]);
        });
    });

});