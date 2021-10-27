import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {item, themGioHang} = this.props;
        return (
            <div className="col-4">
                <div className="card">
                    <img src={item.hinhAnh} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.tenSP}</h5>
                        <p className="card-text">{item.giaBan.toLocaleString()}</p>
                        <a className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            themGioHang(item);
                        }}>Thêm vào giỏ</a>
                    </div>
                </div>
            </div>
        )
    }
}
