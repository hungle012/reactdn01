const gioHang = [{ "maSP": 1, "tenSP": "VinSmart Live", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg", "soLuong": 0 }]

export const gioHangStore = (state = gioHang, action) => {
    // console.log(action)
    switch (action.type) {
        case "THEM_GIO_HANG": {
            // CODE xử lý thêm giỏ hàng
            let sanPhamAdd = { ...action.sanPham, "soLuong": 1 };
            let gioHangCapNhat = state;

            let spGioHang = gioHangCapNhat.find((sp) => {
                return sp.maSP === sanPhamAdd.maSP;
            });

            if (spGioHang) {
                spGioHang.soLuong += 1;
            } else {
                gioHangCapNhat.push(sanPhamAdd);
            }
            console.log(gioHangCapNhat);
            // imutable (tính bất biến của object và mảng)
            // gán theo kiểu object hoặc mảng là truyền theo tham chiếu
            return [...gioHangCapNhat];
            // return gioHangCapNhat;
        }
        case "XOA_SAN_PHAM": {
            // filter
            // lấy các sản phẩm có mã khác với sản phẩm cần xoá
            let gioHangCapNhat = [...state];
            const mangMoi = gioHangCapNhat.filter((sp) => {
                return sp.maSP !== action.idSP
            });

            return mangMoi
        }
        case "TANG_GIAM_SOLUONG" :{
            console.log("change SL");
            // dựa vào action đưa lên từ component gửi lên => tìm sản phẩm đó trong giỏ hàng
            let spGioHang = state.find((sp) => {
                return sp.maSP === action.idSP
            });
            if (spGioHang) {
                spGioHang.soLuong += action.soLuong;
                if (spGioHang.soLuong > 100 || spGioHang.soLuong < 1) {
                    alert("Số lượng tối thiểu 1, tối đa là 100!");
                    spGioHang.soLuong -= action.soLuong;
                }
            }
            return [...state];
        }
        default:
            return state;
    }
    return state;
}