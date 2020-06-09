import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './store/store';
import Counter from './components/Counter';
import PageNotFound from './components/PageNotFound';

function App() {
    return (
        <Provider store={ store }>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Counter />
                    </Route>

                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
