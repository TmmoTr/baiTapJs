/**
 * Input: USD
 * Step:
 * B1: lấy dữ liệu từ form
 * B2: VND = USD * 23500
 * B3:ktra số tiền không thể để trống hoặc nhỏ hơn 0
 * Outputs : VND
 */

function doiTien () {
    let USD = document.getElementById("inputUSD").value;

    let VND = USD * 23500;


    if(USD > 0){
        document.getElementById("result-msg3").innerHTML = `${VND.toLocaleString()} VND`;
    }else{
        document.getElementById("result-msg3").innerHTML = 'số tiền không thể để trống hoặc nhỏ hơn 0'
    } 
    
}