import React, { Component } from "react";
import EditContact from "./EditContact";
import { Link } from "react-router-dom";
export default class Contact extends Component {
    render() {
         {
             props => <PageStart {...props} key={this.props.location.key} />;
         }
        const { contact } = this.props;
        return contact.map(contact => {
            return (
                <tr>
                    <td>{contact.id}</td>
                    <td>{contact.title}</td>
                    <td>{contact.description}</td>
                    <td>
                        <Link
                            to={`/edit-contact/${contact.id}`}
                            className="btn btn-primary"
                            type="button"
                        >
                            Edit
                        </Link>
                    </td>
                </tr>
            );
        });
    }
}
