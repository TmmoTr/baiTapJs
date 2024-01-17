/**
 * Input
 * Step
 * Outputs
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