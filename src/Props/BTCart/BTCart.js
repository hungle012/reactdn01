import React, { Component } from 'react'
import Cart from './Cart';
import ProductList from './ProductList';

export default class BTCart extends Component {
    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ];

    state = {
        gioHang:[]
    }

    themGioHang = (itemAdded) => {
        // console.log(itemAdded);
        // setState 
        // spread operater
        let itemCart = {...itemAdded,"soLuong":1};
        // console.log(itemCart);
        // copy mảng giỏ hàng cũ vào mảng mới
        let updateCart = [...this.state.gioHang];

        // Tìm sản phẩm được click đã xuất hiện trong mảng giỏ hàng chưa
        // find(): trả về giá trị của phần tử, findIndex(): trả về index của phần tử

        let search = updateCart.find((item) => {
            return item.maSP === itemCart.maSP
        });
        if (search) {
            // tìm thấy
            search.soLuong +=1;
        } else {
            updateCart.push(itemCart);
        }

        this.setState({
            gioHang:updateCart
        })
    }
    
    xoaGioHang = (itemDelete) => {
        // console.log(itemDelete);
        let {gioHang} = this.state;
        // tìm vị trí của sản phẩm cần xoá trong mảng giỏ hàng
        let index = gioHang.findIndex((item) => {
            return item.maSP === itemDelete.maSP
        });
        if (index !== -1) {
            // tìm thấy => xoá sp khỏi giỏ hàng
            gioHang.splice(index,1);
        }

        this.setState({
            gioHang:gioHang
        })
    }

    tangGiamSL = (maItemSL, soLuong) => {
        // console.log(maItemSL);
        let {gioHang} = this.state;
        // tìm sp cần đổi số lượng
        let search = gioHang.find((item) => {
            return maItemSL === item.maSP
        });
        if (search) {
            // tìm thấy => thay đổi số lượng
            search.soLuong += soLuong;
            if (search.soLuong < 1) {
                alert("số lượng không hợp lệ");
                search.soLuong -= soLuong;
            }
        }

        this.setState({
            gioHang:gioHang
        })
    }

    render() {
        let soLuong = this.state.gioHang.reduce((sL,spGH,index) => {
            return sL += spGH.soLuong;
        },0)
        return (
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-4 d-flex justify-content-end">
                        <p data-toggle="modal" data-target="#exampleModal">Giỏ hàng ({soLuong})</p>
                    </div>
                </div>
                <ProductList spArr={this.arrPhone} themGioHang={this.themGioHang}/>
                
                <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSL={this.tangGiamSL} />

            </div>
        )
    }
}
