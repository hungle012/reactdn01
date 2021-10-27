import React, { Component } from 'react'

export default class RenderWithArray extends Component {
    productList = [
        { id: 1, name: 'black car', img: '/img/CarBasic/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'steel car', img: '/img/CarBasic/products/steel-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: '/img/CarBasic/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'red car', img: '/img/CarBasic/products/red-car.jpg', price: 4000 }
    ];

    renderTable = () => {
        // // ! cách 1: dùng for
        // // content (chứa các tr)
        // let content = [];
        // // duyệt mảng (productList)
        // for (let i = 0; i < this.productList.length; i++) {
        //     let product = this.productList[i];
        //     // lúc duyệt mảng sẽ tạo từng các tr
        //     let objTR = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img className="w-25" src={product.img} alt="" /></td>
        //     </tr>

        //     content.push(objTR); 
        // }
        // // return
        // return content

        // ! cách 2: dùng map
        let content = this.productList.map((product, index) => {
            // trả về 1 mảng mới
            // return trong map sẽ không dùng vòng lặp chỉ dừng khi hết vòng lặp
            return <tr>
                <td className="w-25">{product.id}</td>
                <td className="w-25">{product.name}</td>
                <td className="w-25">{product.price}</td>
                <td className="w-25"><img className="w-75" src={product.img} alt="" /></td>
            </tr>
        });
        // return
        return content
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* tạo UI bằng code js */}
                        {this.renderTable()}
                    </tbody>
                </table>

            </div>
        )
    }
}
