import React, { Component } from 'react'
import FunctionProduct from './FunctionProduct';
import Product from './Product'

export default class HomePage extends Component {
    productList = [
        { id: 1, name: 'black car', img: '/img/CarBasic/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'steel car', img: '/img/CarBasic/products/steel-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: '/img/CarBasic/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'red car', img: '/img/CarBasic/products/red-car.jpg', price: 4000 }
    ];
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {/* <Product nameCar="Honda Civic Black" price={1200}/> */}
                        {/* <Product product={this.productList[0]}/> */}
                        <FunctionProduct product={this.productList[0]}/>
                    </div>
                    <div className="col-4">
                        {/* <Product nameCar="Honda Civic Red" price={1300}/> */}
                        <Product product={this.productList[1]}/>
                    </div>
                    <div className="col-4">
                        {/* <Product nameCar="Honda Civic Silver" price={1400}/> */}
                        <Product product={this.productList[2]}/>
                    </div>
                </div>
            </div>
        )
    }
}
