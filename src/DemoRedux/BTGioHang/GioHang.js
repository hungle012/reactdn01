import React, { Component } from 'react'
// thư viện kết nối với Store
import { connect } from "react-redux";

class GioHang extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((item, index) => {
            return <tr key={index}>
                <td>{item.maSP}</td>
                <td>{item.tenSP}</td>
                <td style={{ width: "100px" }}>
                    <img className="img-fluid" src={item.hinhAnh} alt="" />
                </td>
                <td>
                    <button className="btn btn-info" onClick={() => {
                        
                        this.props.tangGiamSL(item.maSP,1)

                    }}>+</button>
                    <span>{item.soLuong}</span>
                    <button className="btn btn-info" onClick={() => {
                        
                        this.props.tangGiamSL(item.maSP,-1)

                    }}>-</button>
                </td>
                <td>{item.giaBan.toLocaleString()}</td>
                {/* Những giá trị có thể tính toán từ giá trị thì không cần lưu trữ */}
                <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        // C1 :chỉ dùng khi xoá mapDispatchToProps ở connect
                        // const action = {
                        //     type:"XOA_SAN_PHAM",
                        //     idSP:item.maSP
                        // }            
                        // this.props.dispatch(action);
                        // C2
                        this.props.xoaSP(item.maSP)
                    }}>Xoá</button>
                </td>
            </tr>
        })

    }
    render() {
        console.log(this.props)
        return (
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
                                    {this.renderGioHang()}
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// C2
//hàm giúp đưa data lên store redux
const mapDispatchToProps = (dispatch) => {
    return {
        xoaSP: (maSP) => {
            const action = {
                type: "XOA_SAN_PHAM",
                idSP: maSP
            }
            dispatch(action);
        },
        tangGiamSL: (maSP, soLuong) => {
            // Tạo action
            const action = {
                type: "TANG_GIAM_SOLUONG",
                idSP: maSP,
                soLuong: soLuong
            }
            // đưa action lên reducer
            dispatch(action);
        }
    }
}
// Hàm laaysa giá trị state từ store redux
const mapStateToProps = (rootReducer) => {
    return {
        gioHang: rootReducer.gioHangStore
    }
}

// Khai báo kết nối từ gioHang đến Store redux
const ComponentGioHangRedux = connect(mapStateToProps, mapDispatchToProps)(GioHang);
export default ComponentGioHangRedux;

// closure function
