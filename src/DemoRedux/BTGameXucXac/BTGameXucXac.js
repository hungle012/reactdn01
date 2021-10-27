import React, { Component } from 'react'
import KetQuaGame from './KetQuaGame'
import XucXac from './XucXac'
import './BTGameXucXac.css'

export default class BTGameXucXac extends Component {
    render() {
        return (
            <div className="bg-game container-fluid">
                <h3 className="text-center display-4 pb-5">Giải tài xỉu mở rộng</h3>
                <XucXac/>
                <KetQuaGame/>
            </div>
        )
    }
}
