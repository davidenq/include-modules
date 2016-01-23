
//Load modules dependences

const Fs = require('fs');
const Path = require('path');
const Hoek = require('hoek');

// Declare internals

const internals = {};

exports = module.exports = internals;

/*API public*/
internals.modules = function (paths, dirname) {

    const modules = {};

    for (let key in paths) {
        
        const result = requireModule(paths[key], dirname);
        
        if(result !== null ){
            modules[key] = result;
        }        
    }
    return modules;

};

/*API private*/
const requireModule = function (nameRelativePath, dirname) {

    const absolutePath;
    const fileName = [];
    const modules = {};

    Hoek.assert(typeof nameRelativePath === 'string', 'Error: name directory path must be a string');
    
    try {

        const resolvedPath = Path.join(dirname, nameRelativePath);
        const content = Fs.readdirSync(resolvedPath);

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
