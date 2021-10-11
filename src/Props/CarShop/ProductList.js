import React, { Component } from 'react'
import CarProduct from './CarProduct'

export default class ProductList extends Component {
    renderCarList() {
        let {arrCar,xemChiTiet} = this.props;
        return arrCar.map((item, index) => {
            return <div className="col-3" key={index}>
                <CarProduct sp={item} xem={xemChiTiet} />
            </div>
        })
    }

    render() {
        return (
            <div className="row py-3">
                {this.renderCarList()}

            </div>
        )
    }
}
