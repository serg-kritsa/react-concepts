## config Redux Dev Tools

### install browser extention 
edit store config 
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

### start debug session (actions will be kept between page refreshes)
<domain>:<port>/?debug_session=<some-random-string-of-characters-as-sessionId> 
