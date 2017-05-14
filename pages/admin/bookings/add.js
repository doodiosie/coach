import React, {Component} from "react";
import Link from "next/link";

import MainTemplate from "../../../src/templates/MainTemplate";

import AddBookingForm from "../../../src/admin/bookings/AddBookingForm";

export default class AddBookingPage extends Component {
    render() {
        return (
            <MainTemplate>
                <div className="container">
                    <Link prefetch href="/admin/bookings">
                        <a>
                            Return to all Bookings
                        </a>
                    </Link>
                    <AddBookingForm/>
                </div>
            </MainTemplate>
        );
    }
}
