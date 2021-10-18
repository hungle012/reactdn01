import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DSSanPham extends Component {
    renderDSSP = () => {
        let {mangSP} = this.props;
        return mangSP.map((item,index) => {
            return <SanPham key={index} item={item}/>
        })
    }
    

    render() {
        return (
            <div className="row">
                {this.renderDSSP()}
                
            </div>
        )
    }
}
