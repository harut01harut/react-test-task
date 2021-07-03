import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import ShoppingList from "./pages/ShoppingList";
import Customers from "./pages/Customers";
import Sidebar from "./components/layouts/Sidebar/Sidebar";
import './styles/App.scss';

const App = () => {

  return (
      <BrowserRouter>
        <div>
            <Sidebar/>
            <div className={'content'}>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return (
                            <Redirect to="/dashboard" />
                        )
                    }}
                />
                <Route path={'/dashboard'} exact>
                    <Dashboard/>
                </Route>
                <Route path={'/shopping_list'} exact>
                    <ShoppingList/>
                </Route>
                <Route path={'/customers'} exact>
                    <Customers/>
                </Route>
            </div>
        </div>
      </BrowserRouter>

  );
};

export default App;
