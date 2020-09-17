import React, { Component } from "react";
import axios from "axios";
import Contact from "./Contact";

export default class ManageContact extends Component {
    state = {
        contacts: [],
        loading: true
    };
    fetchallContacts = async () => {
        const res = await axios.get("/all-contact");
        if (res.data.status === 200) {
            this.setState({ contacts: res.data.contacts });
            this.setState({ loading: false });
        }
        console.log(res);
    };
    componentDidMount = () => {
        this.fetchallContacts();
    };

    render() {
         if (this.state.loading) {
             return <h2>Loading</h2>;
         }

        return (
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <h4 className="page-title">Data Tables</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-box">
                                <div className="card-block">
                                    <h6 className="card-title text-bold">
                                        Default Datatable
                                    </h6>
                                    <p className="content-group"></p>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <td>SL</td>
                                                <td>Name</td>
                                                <td>Description</td>
                                                <td>Action</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <Contact
                                                contact={this.state.contacts}
                                            />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
