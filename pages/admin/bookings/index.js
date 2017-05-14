import React, {Component} from "react";
import Link from "next/link";

import MainTemplate from "../../../src/templates/MainTemplate";

import BookingsTable from "../../../src/admin/bookings/BookingsTable";

export default class BookingsPage extends Component {
    render() {
        return (
            <MainTemplate>
                <div className="container">
                    <Link prefetch href="/admin/bookings/add">
                        <a>
                            Add a Booking
                        </a>
                    </Link>
                    <BookingsTable/>
                </div>
            </MainTemplate>
        );
    }
}
