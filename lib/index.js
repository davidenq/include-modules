
//Load modules dependences

var Fs = require('fs');
var Path = require('path');
var Hoek = require('hoek');

// Declare internals

var internals = {};

exports = module.exports = internals;

/*API public*/
internals.modules = function (paths, dirname) {

    var modules = {};

    for (var key in paths) {
        
        var result = requireModule(paths[key], dirname);
        
        if(result !== null ){
            modules[key] = result;
        }        
    }
    return modules;

};

/*API private*/
requireModule = function (nameRelativePath, dirname) {

    var absolutePath;
    var fileName = [];
    var modules = {};

    Hoek.assert(typeof nameRelativePath === 'string', 'Error: name directory path must be a string');
    
    try {

        var resolvedPath = Path.join(dirname, nameRelativePath);
        var content = Fs.readdirSync(resolvedPath);

        if(content.length>0){

            content.forEach(function (file) {

                if (~file.indexOf('.js') || ~file.indexOf('.json')) {
                    fileName = file.split('.');
                    absolutePath = Path.join(resolvedPath, fileName[0]);
                    modules[fileName[0]] = require(absolutePath);
                }

            });

            return modules;
        }

        return null;

    } catch (e) {
        
        throw new Error(e);
    }   

};
