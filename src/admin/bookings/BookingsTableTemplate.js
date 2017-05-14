import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Link from "next/link";
import Table, {TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import moment from "moment";

import {TextFilter} from "../FilterComponents";

export default ({data, onOrder, onFilter, loadMore}) => (
    <div>
        <Table
            height="70vh"
            fixedHeader={true}
            showCheckboxes={false}
            selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>
                        <span onClick={() => onOrder("id")}>Id</span>
                        <TextFilter onFilter={onFilter} field="id"/>
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        First Name
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        Last Name
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        Pickup Date
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        Pickup Address
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        Destination Address
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        Price
                    </TableHeaderColumn>
                    <TableHeaderColumn/>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {data.map(booking => (
                    <TableRow key={booking.id}>
                        <TableRowColumn>{booking.id}</TableRowColumn>
                        <TableRowColumn>{booking.firstName}</TableRowColumn>
                        <TableRowColumn>{booking.lastName}</TableRowColumn>
                        <TableRowColumn>{moment(booking.pickupDate, "X").format("DD/MM/YY")}</TableRowColumn>
                        <TableRowColumn>{booking.pickupAddress}</TableRowColumn>
                        <TableRowColumn>{booking.destinationAddress}</TableRowColumn>
                        <TableRowColumn>£{booking.price/100}</TableRowColumn>
                        <TableRowColumn>
                            <Link href={`/admin/bookings/edit?id=${booking.id}`}>
                                <a>
                                    <RaisedButton>
                                        Edit
                                    </RaisedButton>
                                </a>
                            </Link>
                        </TableRowColumn>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <div>
            <button onClick={() => loadMore()} className="btn btn-primary">
                Load More
            </button>
        </div>
    </div>
);
