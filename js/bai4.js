/**
 * Input: chiều dài, chiều rộng
 * Step:
 * B1: lấy dữ liệu từ form
 * B2 Chu vi =( dài + rộng ) * 2 ; Diện tích = dài * rộng
 * B3 ktra Chiều dài hoặc Chiều rộng không thể nhỏ hơn hoặc bằng 0
 * Outputs: chu vi và diện tích
 */

function tinhHCN() {
    let CD = document.getElementById("chieuDai").value;
    let CR = document.getElementById("chieuRong").value;

    let DT = CD * CR
    let CV = (Number(CD) + Number(CR))*2
    if(CD <= 0 || CR <= 0){
        document.getElementById("result-msg4").innerHTML = 'Chiều dài hoặc Chiều rộng không thể nhỏ hơn hoặc bằng 0'
    }else
        document.getElementById("result-msg4").innerHTML = `Chu Vi = ${CV} <br> Diện Tích = ${DT}`
 }