import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

let WidgetContainer = withRouter(App);

ReactDOM.render(<Router><WidgetContainer /></Router>, document.getElementById('root'));

serviceWorker.unregister();
