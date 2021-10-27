const stateDefault = {
    banChon: true, //true: tài, false: xỉu
    soBanThang: 0,
    tongSoTran: 0,
    arrXucXac: [
        { hinhAnh: './img/game_xuc_xac/1.png', diem: 1 },
        { hinhAnh: './img/game_xuc_xac/1.png', diem: 1 },
        { hinhAnh: './img/game_xuc_xac/1.png', diem: 1 }
    ],
    // tongDiem:0,
    // ketQua: true
}

export const BTGameReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return {...state}
        }
        case 'PLAY' : {
            // xử lí random
            let randomArr = [];
            for (let index = 0; index < 3; index++) {
                let randomNum = Math.floor(Math.random() * 6)+1;
                // từ số ngẫu nhiên => xúc xắc ngẫU nhiên
                let randomDice = {hinhAnh: `./img/game_xuc_xac/${randomNum}.png`,diem: randomNum};
                randomArr.push(randomDice);
            }
            state.arrXucXac = randomArr;
            // xử lí tính điểm
            let diem = randomArr.reduce((tD,dice,index) => {
                return tD += dice.diem
            }, 0);
            state.tongDiem = diem;
            // console.log(tongDiem);

            // kiểm tra điểm và thông báo kq

            if ((diem > 11 && state.banChon) || (diem < 11 && state.banChon === false)) {
                state.soBanThang += 1;
            }
            // cập nhật tổng số trận 
            state.tongSoTran += 1;

    
            return {...state};
        }

        default: {
            return state
        }
    }
}