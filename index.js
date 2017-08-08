const reduce = require('fn-reduce')

module.exports = function (props) {
    return reduce((descriptors, prop) => {
        descriptors[prop] = {
            value: props[prop]
        }
        return descriptors
    }, {}, Object.keys(props))
}
