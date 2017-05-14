import React, {Component} from "react";
import Link from "next/link";

import MainTemplate from "../../../src/templates/MainTemplate";

import CardsTable from "../../../src/admin/cards/CardsTable";

export default class CardsTablePage extends Component {
    render() {
        return (
            <MainTemplate>
                <div className="container">
                    <Link href="/admin/cards/add">
                        <a>Add a Card</a>
                    </Link>
                    <CardsTable/>
                </div>
            </MainTemplate>
        );
    }
}
