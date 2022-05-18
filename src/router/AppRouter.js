import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommingSoon from '../app/components/notices/CommingSoon';
import Loggin from '../app/pages/Loggin'
import UserPage from '../app/pages/UserPage';

const AppRouter = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Loggin} />
                <Layout>
                    <Route exact path="/users" component={UserPage} />
                    <Route exact path="/clients" component={CommingSoon} />
                </Layout>
            </Switch>
        </Router>
    )
}

export default AppRouter
