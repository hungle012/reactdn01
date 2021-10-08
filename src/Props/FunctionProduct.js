import React from 'react'

export default function FunctionProduct(props) {
    let {product} = props;
    return (
        <div className="py-5">
                <div className="card" style={{ width: '18rem' }}>
                    <img src="/img/CarBasic/products/red-car.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}$</p>
                    </div>
                </div>
            </div>
    )
}
