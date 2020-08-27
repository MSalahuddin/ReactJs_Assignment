
import React, { Component } from "react";
import data from "../../utils/data.json";
import { CustomTable, Cards } from "../../components";

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                { Header: 'Date', accessor: 'Date' },
                { Header: 'Open', accessor: 'Open' },
                { Header: 'High', accessor: 'High' },
                { Header: 'Low', accessor: 'Low' },
                { Header: 'Close', accessor: 'Close' },
                { Header: 'Volume', accessor: 'Volume' },
            ],
            toggleValue: 'table'
        }
    }

    renderCustomTable = () => {
        const { columns } = this.state;
        return (
            <div className="col-12 px-3 pt-3">
                <CustomTable columns={columns} data={data.data} />
            </div>
        )
    }

    renderCards = () => {
        return (
            <div className="col-12 px-0 pt-3">
                <Cards />
            </div>
        )
    }

    render() {
        const { toggleValue } = this.state;
        return (
            <div className="container-fluid bg-light">
                <div className="container min-vh-100">
                    <div className="row">
                        <div className="col-12 px-3 pt-3">
                            <div className="btn-group btn-group-toggle" onChange={(event) => this.setState({ toggleValue: event.target.value })} data-toggle="buttons">
                                <label className={
                                    toggleValue === 'table' ?
                                        'btn btn-secondary active' :
                                        'btn btn-secondary'
                                }>
                                    <input type="radio" name="options" id="option1" value="table" checked={toggleValue === 'table'} />
                                    {'Table'}
                                </label>
                                <label className={
                                    toggleValue === 'cards' ?
                                        'btn btn-secondary active' :
                                        'btn btn-secondary'
                                }>
                                    <input type="radio" name="options" id="option2" value="cards" checked={toggleValue === 'cards'} />
                                    {'Cards'}
                                </label>
                            </div>
                        </div>
                        {toggleValue === 'table' ? this.renderCustomTable() : this.renderCards()}
                    </div>
                </div>

            </div>
        )
    }
}