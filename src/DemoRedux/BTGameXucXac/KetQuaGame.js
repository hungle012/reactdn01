import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaGame extends Component {
    render() {
        let {banChon,soBanThang,tongSoTran} = this.props.BTGameReducer;
        return (
            <div className="container text-center">
                <div className="display-4">
                    BẠN CHỌN: 
                    <span className="text-danger">{banChon ? ' Tài' : ' Xỉu'}</span>
                </div>
                <div className="display-4">
                    SỐ TRẬN THẮNG:
                    <span className="text-success">{soBanThang}</span>
                </div>
                <div className="display-4">
                    TỔNG SỐ TRẬN:
                    <span className="">{tongSoTran}</span>
                </div>
                <div className="display-4">
                    <button onClick={() => {
                        const action = {
                            type: 'PLAY',
                        }
                        this.props.dispatch(action)
                    }} className="btn btn-success">Chơi</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        BTGameReducer:rootReducer.BTGameReducer
    }
}

export default connect(mapStateToProps)(KetQuaGame)
