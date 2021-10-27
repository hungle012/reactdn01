import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            objectNumber: {number: 1},
            like: 1
        }
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(newProps, newState) {

        return true;
    }

    render() {
        console.log('render')
        return (
            <div className="container">

                {this.state.like > 2 ? '' : <Child objectNumber={this.state.objectNumber} />}

                
                <button className="btn btn-success" onClick={() => {
                    let newNumber = {...this.state.objectNumber};
                    newNumber.number += 1;
                    this.setState({
                        objectNumber: newNumber
                    })
                }}> + </button>

                <p> like: {this.state.like}</p>
                <br />
                <button className="btn btn-danger" onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}> Like </button>

                <p className="display-4 mt-2">{this.state.number}</p>
                <br />
                <br />

            </div>
        )
    }

    componentDidMount() {
        // gọi API hoặc thư viện trong didmount
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps,prevState) {
        // Hạn chế setState trong lifecycle này nếu có setState thì phải có điều kiện if
        console.log('componentDidUpdate')
    }
}

