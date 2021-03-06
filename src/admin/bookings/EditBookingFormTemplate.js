import React from "react";
import Router from "next/router";

import {FormGroup, TextInput, CurInput, DateInput, SubmitButton, ReadOnly} from "../FormComponents";

export default ({data, onChange, onSubmit}) => (
    <form onSubmit={event => {
            event.preventDefault();
            onSubmit(data.filter((value, key) => [
                "firstName",
                "lastName",
                "pickupDate",
                "pickupAddress",
                "destinationAddress",
                "price",
            ].includes(key))).then(data => {
                Router.push("/admin/bookings");
            });
        }}>
        <FormGroup>
            <label>ID</label>
            <ReadOnly name="id" data={data}/>
        </FormGroup>
        <FormGroup>
            <label>First Name</label>
            <TextInput name="firstName" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <label>Last Name</label>
            <TextInput name="lastName" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <label>Pickup Date</label>
            <DateInput name="pickupDate" data={data} onChange={onChange} format="x"/>
        </FormGroup>
        <FormGroup>
            <label>Pickup Address</label>
            <TextInput name="pickupAddress" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <label>Destination Address</label>
            <TextInput name="destinationAddress" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <label>Price</label>
            <CurInput name="price" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <SubmitButton>
                Save Changes
            </SubmitButton>
        </FormGroup>
    </form>
)
