import React, { Component } from 'react'

export default class Cart extends Component {
    renderCart = () => {
        let {gioHang, xoaGioHang, tangGiamSL} = this.props;
        return gioHang.map((item, index) => {
            return <tr key={index}>
                <td>{item.maSP}</td>
                <td>{item.tenSP}</td>
                <td style={{ width: "100px" }}>
                    <img className="img-fluid" src={item.hinhAnh} alt="" />
                </td>
                <td>
                    <button className="btn btn-info" onClick={() => {
                        tangGiamSL(item.maSP,1)
                    }}>+</button>
                    <span>{item.soLuong}</span>
                    <button className="btn btn-info" onClick={() => {
                        tangGiamSL(item.maSP,-1)
                    }}>-</button>
                </td>
                <td>{item.giaBan.toLocaleString()}</td>
                {/* Những giá trị có thể tính toán từ giá trị thì không cần lưu trữ */}
                <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        xoaGioHang(item);
                    }}>Xoá</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Mã SP</th>
                                            <th scope="col">Tên SP</th>
                                            <th scope="col">Hình ảnh</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Đơn giá</th>
                                            <th scope="col">Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderCart()}
                                    </tbody>
                                </table>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
