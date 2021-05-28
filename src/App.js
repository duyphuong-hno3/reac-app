import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React, { Suspense } from 'react';

const Product = React.lazy(() => import('./features/Product'));
const Category = React.lazy(() => import('./features/Category'));
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App container-fluid">
      <Suspense fallback={<div>Loading...</div>}>

        <BrowserRouter>
          <div className="row"> <Header /></div>

          <Switch>
            <Redirect exact from="/" to="/products"></Redirect>
            <Route path="/categories" component={Category} />
            <Route path="/products" >
              <Product />
            </Route>
          </Switch>

          <div className="row"> <Footer /></div>

        </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;
