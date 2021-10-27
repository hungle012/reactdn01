import React, { Component } from 'react'
import { connect } from 'react-redux'


class FormDangKi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            sdt: '',
            maLoaiND: 'NguoiDung'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault(); // hàm cản sự kiện reload trang khi submit form
        // tạo ra action chứa dữ liệu form từ người dùng nhập vào (this.state)
        const action = { type: 'DANG_KI', nguoiDung: this.state }
        // đưa dữ liệu người dùng nhập vào redux store
        this.props.dispatch(action)
        console.log('submit');
    }

    handleChangeInput = (event) => {
        // event.target => chính là thẻ đang xảy ra sự kiện
        // let value = event.target.value;
        // let name = event.target.name;
        let { name, value } = event.target;
        this.setState({ [name]: value }, () => {
            console.log('state: ', this.state)
        });

    }

    // static getDerivedStateFromProps(newProps, currentState) {
    //     // lifeCycle can thiệp khi State và Props thay đổi và trước khi component render lại
    //     if (newProps.chinhSuaND.taiKhoan !== currentState.taiKhoan) {
    //         // phân biệt hành động này là gõ phím vào ô input chứ không phải click nút chỉnh sửa
    //         let newState = {...newProps.chinhSuaND};
    //         return newState;
    //     }
    //     return currentState;
    // }

    //! lifecycle phiên bản cũ: chạy khi props thay đổi
    componentWillReceiveProps(newProps) {
        let newState = newProps.chinhSuaND;

        this.setState(newState);
    }

    render() {
        //! thống nhất dữ liệu lấy từ state => khi bấm nút sửa dùng componentWillReceiveProps => gán props redux vào state để form nhận giá trị mới
        let { taiKhoan, matKhau, hoTen, email, sdt, maLoaiND } = this.state;
        return (
            <form className="card" onSubmit={this.handleSubmit}>
                <div className="card-header bg-dark text-white">
                    Form đăng kí
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <p>Tài khoản</p>
                                <input className="form-control" name="taiKhoan" value={taiKhoan} onChange={this.handleChangeInput} />
                            </div>
                            <div className="form-group">
                                <p>Mật khẩu</p>
                                <input className="form-control" name="matKhau" value={matKhau} onChange={this.handleChangeInput} />
                            </div>
                            <div className="form-group">
                                <p>Họ tên</p>
                                <input className="form-control" name="hoTen" value={hoTen} onChange={this.handleChangeInput} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <p>Email</p>
                                <input className="form-control" name="email" value={email} onChange={this.handleChangeInput} />
                            </div>
                            <div className="form-group">
                                <p>Số điện thoại</p>
                                <input className="form-control" name="sdt" value={sdt} onChange={this.handleChangeInput} />
                            </div>
                            <div className="form-group">
                                <p>Mã loại người dùng</p>
                                <select className="form-control" name="maLoaiND" value={maLoaiND} onChange={this.handleChangeInput}>
                                    <option value="NguoiDung">Người dùng</option>
                                    <option value="QuanTri">Quản trị viên</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <button className="btn btn-outline-success" type="submit">Đăng kí</button>
                        <button className="btn btn-outline-primary ml-2" type="button">Cập nhật</button>
                    </div>

                </div>
            </form>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        chinhSuaND: rootReducer.BTQuanLiNDReducer.chinhSuaND
    }
}

export default connect(mapStateToProps)(FormDangKi)