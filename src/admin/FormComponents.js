import React from "react";
import {Map} from "immutable";
import DatePicker from "react-datepicker";
import moment from "moment";

export const CurInput = ({name, data, onChange}) => (
    <input
        name={name}
        type="number"
        className="form-control"
        value={data.get(name)/100 || 0}
        onChange={event => onChange(Map({
            [name]: event.target.value<0
                ? 0
                : event.target.value*100
        }))}
        step={0.01}
        />
);

export const DateInput = ({name, data, onChange, format}) => (
    <DatePicker
        name={name}
        onChange={event => onChange(Map({
            [name]: event.format(format),
        }))}
        className="form-control"
        selected={data.get(name) ? moment(data.get(name), format) : moment()}
        />
);

export const FormGroup = ({children, ...props}) => (
    <div {...props} className="form-group">
        {children}
    </div>
);

export const NumInput = ({name, data, onChange, step}) => (
    <input
        name={name}
        type="number"
        className="form-control"
        value={data.get(name) || 0}
        onChange={event => onChange(Map({[name]: event.target.value}))}
        step={step}
        />
);

export const ReadOnly = ({name, data}) => (
    <input
        name={name}
        type="text"
        className="form-control"
        value={data.get(name) || ""}
        readOnly
        />
);

export const SubmitButton = ({children, ...props}) => (
    <button className="btn btn-primary" {...props}>
        {children}
    </button>
);

export const TextInput = ({name, data, onChange}) => (
    <input
        name={name}
        type="text"
        className="form-control"
        value={data.get(name) || ""}
        onChange={event => onChange(Map({[name]: event.target.value}))}
        />
);
