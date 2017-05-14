import React, {Component} from "react";
import Link from "next/link";

import MainTemplate from "../../../src/templates/MainTemplate";

import AddCardForm from "../../../src/admin/cards/AddCardForm";

export default class AddCardPage extends Component {
    render() {
        return (
            <MainTemplate>
                <div className="container">
                    <Link href="/admin/cards">
                        <a>Back to Cards Table</a>
                    </Link>
                    <AddCardForm/>
                </div>
            </MainTemplate>
        );
    }
}
