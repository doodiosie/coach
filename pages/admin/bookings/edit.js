import React, {Component} from "react";
import Link from "next/link"

import MainTemplate from "../../../src/templates/MainTemplate";

import EditBookingForm from "../../../src/admin/bookings/EditBookingForm";

export default class EditBookingPage extends Component {
    render() {
        return (
            <MainTemplate>
                <div className="container">
                    <Link prefetch href="/admin/bookings">
                        <a>
                            Return to all bookings
                        </a>
                    </Link>
                    <EditBookingForm id={this.props.url.query.id}/>
                </div>
            </MainTemplate>
        );
    }
}
