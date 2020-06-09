import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Counter from './components/Counter';
import PageNotFound from './components/PageNotFound';

export default function router() {
    return (
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
    );
}
