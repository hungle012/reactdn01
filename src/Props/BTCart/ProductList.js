import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    
    renderPruductItem = () => {
        let {spArr, themGioHang} = this.props;
        return spArr.map((item,index) => {
            return <ProductItem key={index} item={item} themGioHang={themGioHang} />
        })
    }
    

    render() {
        return (
            <div className="row">
                {this.renderPruductItem()}
            </div>
        )
    }
}
