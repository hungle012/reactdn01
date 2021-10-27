import React, { Component } from 'react'
import DSNguoiDung from './DSNguoiDung'
import FormDangKi from './FormDangKi'

export default class BTQuanLiND extends Component {
    render() {
        return (
            <div className="container-fluid">
                <FormDangKi/>
                <DSNguoiDung/>
            </div>
        )
    }
}
