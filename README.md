# Test Exports
[Live test](http://test-exports.rafrex.com)

A simple test to check exports.

- A function that is invoked on export is evaluated only once when imported. The very same function that is exported as a function, is invoked each time it is called in the imported file.

- An object exports a reference to itself. When that object is imported in multiple places in different components, they all reference the same object. When the state of the exported object changes, it changes in every place that imported it.
