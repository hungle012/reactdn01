import React, { Component } from 'react'
import Modal from './Modal';
import ProductList from './ProductList';

export default class CarShop extends Component {
    products = [
        { id: 1, name: 'Black car', img: './img/CarBasic/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'Red car', img: './img/CarBasic/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'Silver car', img: './img/CarBasic/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './img/CarBasic/products/steel-car.jpg', price: 4000 }
    ];

    state={
        carDetail:{ id: 1, name: 'Black car', img: './img/CarBasic/products/black-car.jpg', price: 1000 }
    }
    // state đặt ở đâu thì setState đặt ở đó
    xemChiTiet = (car) => {
        this.setState({
            carDetail:car
        })
    }


    render() {
        return (
            <div className="container">
                <ProductList arrCar={this.products} xemChiTiet={this.xemChiTiet} />
                {/* Modal */}
                <Modal productDetail={this.state.carDetail} />
            </div>
        )
    }
}
