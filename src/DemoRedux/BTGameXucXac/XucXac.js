import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    renderKetQua () {
        let {arrXucXac,banChon} =  this.props.BTGameReducer;
        let tongDiem = arrXucXac.reduce((tD,dice,index) => {
            return tD += dice.diem;
        }, 0);

        let ketQua = 'Thua';
        if ((tongDiem > 11 && banChon) || (tongDiem < 11 && !banChon)) {
           ketQua = 'Thắng'; 
        }
        return <div>
            <p>Điểm : {tongDiem}</p>
            <p>Kết quả : {ketQua}</p>
        </div>
    }

    render() {
        let {arrXucXac,tongDiem,ketQua} = this.props.BTGameReducer
        return (
            <div className="row text-center">
                <div className="col-3">
                    <button className="btn btn-danger" onClick={() => {
                        // định nghĩa 1 action
                        const action = {
                            type:'DAT_CUOC',
                            banChon:true
                        }
                        // dựa vào this.props.dispatch => gửi lên redux
                        this.props.dispatch(action)
                    }}>
                        <div className="p-5 text-white display-4">
                            Tài
                        </div>
                    </button>
                </div>
                <div className="col-6">
                   {arrXucXac.map((item,index) => {
                       return <img width="50px" height="50px" src={item.hinhAnh} key={index} />
                   })}
                   <div className="text-primary text-center pt-3">
                        {/* <p>Điểm : {tongDiem}</p>
                        <p>Kết quả : {ketQua ? ' Thắng' : ' Thua'}</p> */}
                        {this.renderKetQua()}
                   </div>
                </div>
                <div className="col-3">
                    <button className="btn btn-dark" onClick={() => {
                        // định nghĩa 1 action
                        const action = {
                            type:'DAT_CUOC',
                            banChon:false
                        }
                        // dựa vào this.props.dispatch => gửi lên redux
                        this.props.dispatch(action)
                    }}>
                        <div className="p-5 text-white display-4">
                            Xỉu
                        </div>
                    </button>
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

export default connect(mapStateToProps)(XucXac)