
import React, { useMemo } from "react";
import data from "../../utils/data.json";
import {CustomTable} from "../../components";

const EmployeeReport = () => {
    const columns = useMemo(
        () => [
            {
                Header: 'Yahoo',
                columns: [
                    {
                        Header: 'Date',
                        accessor: 'Date',
                    },
                    {
                        Header: 'Open',
                        accessor: 'Open',
                    },
                    {
                        Header: 'High',
                        accessor: 'High',
                    },
                    {
                        Header: 'Low',
                        accessor: 'Low',
                    },
                    {
                        Header: 'Close',
                        accessor: 'Close',
                    },
                    {
                        Header: 'Volume',
                        accessor: 'Volume',
                    },
                ],
            },
        ],
        []
    )

    return (
        <div className="container-fluid bg-light">
            <div className="container min-vh-100">
            <div className="row">
            <div className="col-12 px-3 pt-3">
            <div className="btn-group btn-group-toggle" onChange={(event) => this.setState({ toggleValue: event.target.value })} data-toggle="buttons">
                                <label className={
                                    this.state.toggleValue === 'table' ?
                                        'btn btn-secondary active' :
                                        'btn btn-secondary'
                                }>
                                    <input type="radio" name="options" id="option1" value="table" checked={this.state.toggleValue === 'table'} />
                                    {'Table'}
                                </label>
                                <label className={
                                    this.state.toggleValue === 'cards' ?
                                        'btn btn-secondary active' :
                                        'btn btn-secondary'
                                }>
                                    <input type="radio" name="options" id="option2" value="cards" checked={this.state.toggleValue === 'cards'} />
                                    {'Cards'}
                                </label>
                            </div>
                <CustomTable columns={columns} data={data.data} />
            </div>
            </div>
            </div>
            
        </div>
    )
}

export default EmployeeReport;
