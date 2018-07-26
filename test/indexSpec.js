'use strict';
/**
 * Created by Davip on 07/01/2015.
 */
const _ = require('underscore');
const assert  = require('chai').assert;
const include   = require('..');
  
describe('There are not files nested', () => {
    let modules;

    before(() => {

        // relative path of a empty folder
        const paths = {
            'empty':'./examples/empty'
        }
        
        modules = include.modules(paths, __dirname, "");
    });

    describe('should be an object', () => {    
        it('should be an object', () => {
            assert.isObject(modules, 'it is an object');
        });
    });

    describe('should be a null object', () => {
        it('should be a null object', () => {
            assert.equal(_.size(modules.empty), 0);
        });
    })
});

describe('There are files nested', () => {

    describe('should be the same name and the name property defined in paths variable and result object', () => {

        it('should be the same name', () => {
            const paths = {
                'development':'./examples/development',
                'default':'./examples/default'
            };
            const modules = include.modules(paths, __dirname, "");
            assert.equal(Object.getOwnPropertyNames(paths)[0], Object.getOwnPropertyNames(modules)[0]);
        });
    });
});

describe('Load just an unique file', () => {
    it('should find an specified file in an specified path', () => {
        const paths = {
            'single': './examples/single'
        };
        const modules = include.modules(paths,__dirname, 'example.json')
        assert.equal(Object.getOwnPropertyNames(paths)[0], Object.getOwnPropertyNames(modules)[0]);
        
    })
})