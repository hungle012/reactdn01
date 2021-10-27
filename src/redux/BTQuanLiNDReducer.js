let arrNDValue = [
    { taiKhoan: 'hungle', matKhau: '123123', hoTen: 'Lê Hưng', email: 'Hung@gmail.com', sdt: '0000000000', maLoaiND: 'NguoiDung' },
    { taiKhoan: 'nucflower', matKhau: '123123', hoTen: 'Nục Fuk Boi', email: 'Fukboi@gmail.com', sdt: '0000000000', maLoaiND: 'NguoiDung' }
]
if (localStorage.getItem('DanhSachNguoiDung')) {
    // lấy dữ liệu từ storage có sẵn ra làm giá trị mắc định
    arrNDValue = JSON.parse(localStorage.getItem('DanhSachNguoiDung'));
}
const stateDefault = {
    arrND: arrNDValue,
    chinhSuaND: { taiKhoan: '', matKhau: '', hoTen: '', email: '', sdt: '', maLoaiND: '' }
}

export const BTQuanLiNDReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DANG_KI': {
            state.arrND = [...state.arrND, action.nguoiDung];
            // Lưu vào localStorage
            localStorage.setItem('DanhSachNguoiDung', JSON.stringify(state.arrND));
            return { ...state }
        }
        case 'CHINH_SUA': {
            state.chinhSuaND = action.chinhSuaND;
            return { ...state }
        }

        default: { return state }

    }
}