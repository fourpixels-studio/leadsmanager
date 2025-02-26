import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import Header from './layout/Header';
import Dashboard from './Leads/Dashboard'

import { Provider } from 'react-redux';
import store from '../store';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
