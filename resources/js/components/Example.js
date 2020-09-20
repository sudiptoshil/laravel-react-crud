import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Addcontact from './AddContact'
// import Contact from './Contact'
import Nav from './Nav'
import ManageContact from "./ManageContact";
import EditContact from './EditContact';
import ManageWareHouse from './WareHouse/ManageWareHouse'
import AddWareHouse from './WareHouse/addWareHouse';
import EditWareHouse from './WareHouse/EditWareHouse';


function Example() {
    return (
        <Router>
            <>
                <Nav></Nav>
                <Switch>
                    <Route path="/home">
                        <Nav />
                    </Route>
                    <Route path="/add-contact">
                        <Addcontact />
                    </Route>
                    <Route path="/manage-contact">
                        <ManageContact />
                    </Route>

                    {/* <Route path="/edit-contact/:id">
                        <EditContact />
                    </Route> */}
                    <Route
                        path="/edit-contact/:id"
                        render={props => <EditContact {...props} />}
                    />
                    <Router path="/add-warehouse">
                        <AddWareHouse></AddWareHouse>
                    </Router>

                    <Router path="/manage-warehouse">
                        <ManageWareHouse></ManageWareHouse>
                    </Router>
                    <Router
                        path="/edit-warehouse/:id"
                        render={props => <EditWareHouse {...props} />}
                    >
                    </Router>
                </Switch>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
