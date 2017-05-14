import React from "react";

export const TextFilter = ({onFilter, field}) => (
    <input
        type="text"
        className="form-control"
        onChange={({target: {value}}) => onFilter({
            field,
            filter: `%${value}%`,
        })}
        />
)
