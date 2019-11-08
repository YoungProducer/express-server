// import logMessage from './js/logger'
// import './css/style.css'
// Log message to console
console.log('A very warm welcome to Expack!');
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept(); // eslint-disable-line no-undef  
}