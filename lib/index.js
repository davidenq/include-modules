'use strict'
//Load modules dependences

const Fs = require('fs')
const Path = require('path')
const Hoek = require('hoek')

// Declare internals

let internals = {}

exports = module.exports = internals

/*API public*/
internals.modules = (paths, dirname, filename) => {
    
    internals.dirname = dirname
    internals.content = {}
    internals.outcome = {}
    
    for (let key in paths) {

        if (filename === "") {
            multipleRequire(paths[key])
        } else {
            singleRequire(paths[key], filename)
        }

        if (internals.content !== null ) {
            internals.outcome[key] = internals.content
        }
    }
    
    return internals.outcome

}

const singleRequire = (nameRelativePath, file) => {

    const resolvedPath = Path.join(internals.dirname, nameRelativePath)
    requireModule(file, resolvedPath)
}

/*API private*/
const multipleRequire = (nameRelativePath) =>  {

    Hoek.assert(typeof nameRelativePath === 'string', 'Error: name directory path must be a string')
    
    try {
        const resolvedPath = Path.join(internals.dirname, nameRelativePath)
        const content = Fs.readdirSync(resolvedPath)

        if (content.length > 0) {

            content.forEach((file) => {

                if (~file.indexOf('.js') || ~file.indexOf('.json')) {
                    requireModule(file, resolvedPath)
                }

            })
        }

        return null

    } catch (e) {
        
        throw new Error(e)
    }   

}

const requireModule = (file, resolvedPath) => {
    
    let absolutePath = ""
    let fileName = []
    fileName = file.split('.')
    absolutePath = Path.join(resolvedPath, fileName[0])
    internals.content[fileName[0]] = require(absolutePath)
}
