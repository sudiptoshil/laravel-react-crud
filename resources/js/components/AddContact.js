import React, { Component } from "react";
import axios from "axios"
import SweetAlert from "sweetalert-react";

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            title: "",
            description:""
        };
    }

    handleInput = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    saveContact = async (event) => {
        event.preventDefault();

        const res = await axios.post("/save-contact", this.state);
        this.setState({
            title: '',
            description:''
        })
        if (res.data.status === 200) {
            this.props.history.push("/manage-contact")
        }
        // console.log(res)

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
                                <form className="form-horizontal" onSubmit={this.saveContact}>
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

export default AddContact;
