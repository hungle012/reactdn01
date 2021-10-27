import React, { Component } from 'react'

export default class HandleEvent extends Component {
    // phương thức(met)
    testHandleEvent = () => {
        alert("!!!!!");
    }
    
    showInfor = (name) => {
        alert(`Hello ${name}`);
    }
    

    render() {
        let tenHV = "Hưng";
        return (
            <div className="container py-5">
                <button className="btn btn-info" onClick={this.testHandleEvent}>Click me!</button>
                <button className="btn btn-info" onClick={()=>{
                    this.showInfor(tenHV)
                }}>Show infor</button>
            </div>
        )
    }
}
