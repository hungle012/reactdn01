import React, { Component } from 'react'

export default class DataBinding extends Component {
    // thuộc tính
    age = 20;
    img = "https://i.imgur.com/e5Zxf5M.jpg";
    // phương thức
    renderProduct = () => {
        let product = {
            name: "Product1",
            moTa: "Sản phẩm ....",
            price: 100,
            imgProduct: "https://i.imgur.com/e5Zxf5M.jpg"
        }

        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={product.imgProduct} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                        {product.moTa}
                        <br/>
                        {product.price}
                    </p>
                    
                </div>
            </div>
        )

    }
    // phương thức chính
    render() {
        // biến thông thường
        let name = "Hưng Lê"
        return (
            <div className="container">
                <p>Tên học viên: {name}</p>
                <p>Tuổi học viên: {this.age}</p>
                <img className="w-25" src={this.img} alt="img" />
                {/* gọi phương thức */}
                {this.renderProduct()}
            </div>
        )
    }
}
