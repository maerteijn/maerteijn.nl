// We load these polyfills to make all magic work with IE11. This is needed
// because parcel only transpile the local sources with babel. Packages
// from node_modules (vue.js etc) will not be transpiled when their
// browserslist configuration is not set explicitly.
import "core-js/stable/object/assign"
import "core-js/stable/object/to-string"
import "core-js/stable/array/iterator"
import "core-js/stable/promise"
