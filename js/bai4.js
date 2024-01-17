/**
 * Input
 * Step
 * Outputs
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