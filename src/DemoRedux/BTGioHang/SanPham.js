import React, { Component } from 'react'

// kết nối store redux
import { connect } from "react-redux";

class SanPham extends Component {
    render() {
        console.log(this.props)
        let {item} = this.props;
        return (
            <div className="col-4">
                <div className="card">
                    <img src={item.hinhAnh} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.tenSP}</h5>
                        <p className="card-text">{item.giaBan.toLocaleString()}</p>
                        <button className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            const action = {
                                type:"THEM_GIO_HANG",
                                sanPham:item
                            }
                            this.props.dispatch(action);
                        }}>Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect ()(SanPham)