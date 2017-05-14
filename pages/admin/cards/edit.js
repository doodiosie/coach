import React, {Component} from "react";
import Link from "next/link";

import MainTemplate from "../../../src/templates/MainTemplate";

import EditCardForm from "../../../src/admin/cards/EditCardForm";

export default class EditCardPage extends Component {
    render() {
        console.log(this.props);
        return (
            <MainTemplate>
                <div className="container">
                    <Link href="/admin/cards">
                        <a>Back to Cards Table</a>
                    </Link>
                    <EditCardForm id={this.props.url.query.id}/>
                </div>
            </MainTemplate>
        );
    }
}
