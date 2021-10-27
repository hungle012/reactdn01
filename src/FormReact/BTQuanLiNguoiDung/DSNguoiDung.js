import React, { Component } from 'react'
import { connect } from 'react-redux'

class DSNguoiDung extends Component {
    render() {
        let { arrND } = this.props.BTQuanLiNDReducer
        return (
            <div className="card">
                <div className="card-header bg-dark text-white font-weight-bold">
                    Danh sách người dùng
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>
                                <th>Mật khẩu</th>
                                <th>Họ tên</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Loại người dùng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrND.map((nguoiDung, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{nguoiDung.taiKhoan}</td>
                                    <td>{nguoiDung.matKhau}</td>
                                    <td>{nguoiDung.hoTen}</td>
                                    <td>{nguoiDung.email}</td>
                                    <td>{nguoiDung.sdt}</td>
                                    <td>{nguoiDung.maLoaiND}</td>
                                    <td>
                                        <button className="btn btn-danger">Xoá</button>
                                        <button className="btn btn-primary ml-2"  onClick={() => {
                                            const action = {
                                                type:'CHINH_SUA',
                                                chinhSuaND:nguoiDung
                                            };
                                            this.props.dispatch(action);
                                        }}>Sửa</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        BTQuanLiNDReducer: rootReducer.BTQuanLiNDReducer
    }
}

export default connect(mapStateToProps)(DSNguoiDung)