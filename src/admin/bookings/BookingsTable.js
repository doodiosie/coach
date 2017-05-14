import React from "react";
import {graphql} from "react-apollo";

import tableState from "../tableState";
import {allQuery} from "../graphqlHelpers";

import BookingsTableTemplate from "./BookingsTableTemplate";

const getBookingsQuery = allQuery({
    name: "bookings",
    fields: [
        "id",
        "firstName",
        "lastName",
        "pickupDate",
        "pickupAddress",
        "destinationAddress",
        "price",
    ],
    orderType: "[BookingOrder]",
    filterType: "[BookingFilter]",
});

export default tableState(
    graphql(getBookingsQuery, {
        options: ({order, filter}) => ({
            variables: {
                order,
                filter,
                skip: 0,
                first: 10,
            }
        }),
        props: ({data: {bookings=[], fetchMore}}) => ({
            data: bookings,
            loadMore: () => fetchMore({
                variables: {
                    skip: bookings.length
                },
                updateQuery: (previousResult, {fetchMoreResult}) => (
                    Object.assign({}, previousResult, {
                        bookings: [
                            ...previousResult.bookings,
                            ...fetchMoreResult.bookings,
                        ],
                    })
                ),
            }),
        })
    })(BookingsTableTemplate)
)
