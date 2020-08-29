import { connect } from "react-redux";
import React, { Component } from "react";
import io from 'socket.io-client';
// import data from "../../utils/data.json";
import { CustomTable, Cards, Chart } from "../../components";
import {request as request_get_data} from "../../redux/actions/GETDATA";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
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

    UNSAFE_componentWillMount(){
        this.props.request_get_data({});
        this.socket = io('http://localhost:3000');
        this.socket.on('visualizeData', data => {
            this.setState({ChartData: data})
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if (nextProps.getData) {
            if (
              !nextProps.getData.failure &&
              !nextProps.getData.isFetching &&
              !nextProps.getData.errorMessage &&
              nextProps.getData.data
            ) {
             
              this.setState({ isloading: false, data: nextProps.getData.data});
            } else if (
              nextProps.getData.failure &&
              !nextProps.getData.isFetching &&
              nextProps.getData.errorMessage
            ) {
              this.setState({ isloading: false });
            }
          }
    }

    renderCustomTable = () => {
        const { columns, data } = this.state;
        return (
            <div className="col-12 px-3 pt-3">
                <CustomTable columns={columns} data={data.data} />
            </div>
        )
    }

    renderCards = () => {
        const {data} = this.state;
        return (
            <div className="col-12 px-3 pt-3">
                <Cards data={data.data} />
            </div>
        )
    }

    renderChart = () => {
        const {ChartData} = this.state;
        return (
            <div className="col-12 px-3 pt-3">
                <Chart ChartData = {ChartData}/>
            </div>
        )
    }

    render() {
        const { toggleValue, data } = this.state;
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
                                <label className={
                                    toggleValue === 'chart' ?
                                        'btn btn-secondary active' :
                                        'btn btn-secondary'
                                }>
                                    <input type="radio" name="options" id="option3" value="chart" checked={toggleValue === 'chart'} />
                                    {'Chart'}
                                </label>
                            </div>
                        </div>
                        { toggleValue === 'table' ? 
                            data && data.data.length > 0 &&
                            this.renderCustomTable() : 
                            toggleValue === 'cards' ? 
                           data && data.data.length > 0 &&
                            this.renderCards()
                        : this.renderChart()}
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({getData: state.getData});

const action = {request_get_data};

export default connect(mapStateToProps, action)(Home);


