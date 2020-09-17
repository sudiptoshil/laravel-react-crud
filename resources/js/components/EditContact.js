import React, { Component } from 'react';
import { Link, Router } from "react-router-dom";
import axios from "axios"
class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        };
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    updateContact = async event => {
        event.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/update-contact/${id}`, this.state);
        if (res.data.status === 200) {
            this.props.history.push("/manage-contact");
        }
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(`/edit-contact/${id}`);
        console.log(res);

        this.setState({ title: res.data.contact.title });
        this.setState({ description: res.data.contact.description });
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <h4 className="page-title">Input Groups</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-box">
                                <h4 className="card-title">Basic Examples</h4>
                                <form
                                    className="form-horizontal"
                                    onSubmit={this.updateContact}
                                >
                                    <div className="form-group">
                                        <label className="control-label col-lg-2">
                                            title
                                        </label>
                                        <div className="col-md-10">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Title"
                                                    name="title"
                                                    value={this.state.title}
                                                    onChange={this.handleInput}
                                                ></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-2">
                                            description
                                        </label>
                                        <div className="col-md-10">
                                            <div className="input-group">
                                                <textarea
                                                    rows="5"
                                                    cols="5"
                                                    className="form-control"
                                                    placeholder="Enter text here"
                                                    name="description"
                                                    value={
                                                        this.state.description
                                                    }
                                                    onChange={this.handleInput}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-lg-2"></label>
                                        <div className="col-md-10">
                                            <div className="input-group">
                                                <button className="btn btn-primary text-center">
                                                    save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditContact;
