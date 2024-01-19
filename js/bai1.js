/**
 * Input: soNgay
 * Step :
 * B1: lấy dữ liệu từ form
 * B2: luong = soNgay * 100000
 * B3: Ktra input soNgay ko được nhỏ hơn 0
 * Outputs: luong
 */


function tinhLuong () {
    let soNgay = document.getElementById("inputSoNgay").value;

    let luong = soNgay * 100000

    console.log(luong)

    if(soNgay > 0){
        document.getElementById("result-msg1").innerHTML = `Tiền Lương Của Bạn là: ${luong.toLocaleString()}`;
    }else{
        document.getElementById("result-msg1").innerHTML = 'số ngày không thể để trống hoặc nhỏ hơn 0'
    } 
}