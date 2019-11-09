import logMessage from './src/utils/logger'; // import './css/style.css'
// Log message to console

logMessage('A very warm welcome to Expack!');

if (typeof module.hot !== 'undefined') {
	module.hot.accept();
}
