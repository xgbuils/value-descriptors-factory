const test = require('tape')
const tapSpec = require('tap-spec')

const valueDescriptorsFactory = require('./')

test('valueDescriptorsFactory', function (t) {
    t.test('empty object', function (st) {
        const result = valueDescriptorsFactory({})
        st.deepEqual(result, {},
            'must return an empty object')
        st.end()
    })
    t.test('non-empty object', function (st) {
        const result = valueDescriptorsFactory({
            foo: 'bar',
            fizz: 'buzz'
        })
        st.deepEqual(result, {
            foo: {
                value: 'bar'
            },
            fizz: {
                value: 'buzz'
            }
        }, 'must return a correct collection of descriptors')
        st.end()
    })

    t.test('only own properties test', function (st) {
        function A () {
            this.fizz = 'buzz'
        }
        A.prototype.foo = 'bar'
        const result = valueDescriptorsFactory(new A())
        st.deepEqual(result, {
            fizz: {
                value: 'buzz'
            }
        }, 'must return only enumerable own keys')
        st.end()
    })

    t.end()
})

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout)
