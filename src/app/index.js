import React from 'react'
import { BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';
import Layout from "./Layout";

import Home from "../containers/Home"; 

const routes = [
  {
    path: '/',
    component: Home,
  },
]

const App = () => (
  <Layout>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={`${route.component}-${index}`}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
        <Redirect from='*' to='/' />
      </Switch>
  </Layout>
)

export default App
