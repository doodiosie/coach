import React, {Component} from "react";
import {List, Map, fromJS} from "immutable";

export default function (Table) {
    return class TableState extends Component {
        constructor(props) {
            super(props);
            
            this.state = {
                order: Map({
                    id: "ASC",
                }),
                filter: Map({
                    
                }),
            };
            
            this.handleOrder = this.handleOrder.bind(this);
            this.handleFilter = this.handleFilter.bind(this);
        }
        handleOrder(orderField) {
            console.log("ORDERED");
            this.setState({
                order: this.state.order.update(orderField, direction => (
                    direction==="ASC" ? "DESC" : "ASC"
                )).filter((value, key) => key===orderField),
            });
        }
        handleFilter({field, filter}) {
            this.setState({
                filter: this.state.filter.set(field, filter),
            });
        }
        render() {
            return (
                <Table
                    onOrder={this.handleOrder}
                    onFilter={this.handleFilter}
                    order={this.serializeOrder(this.state.order)}
                    filter={this.serializeFilter(this.state.filter)}
                    />
            );
        }
        serializeOrder(order) {
            return order.entrySeq().map(([key, value]) => ({
                field: key,
                direction: value,
            }));
        }
        serializeFilter(filter) {
            return filter.entrySeq().map(([key, value]) => ({
                field: key,
                filter: value,
            }));
        }
    }
}
