import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search" component={Search} exact />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
