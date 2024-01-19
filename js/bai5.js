/**
 * Input : số có 2 chữ số
 * Step:
 * B1: lấy dữ liệu từ form
 * B2: hàng chục = math.floor(input/10) ; hàng đơn vị = input%10
 * B3: ktra Số nhập phải là số có 2 chữ số từ 10-99
 * Outputs: tổng của số hàng chục và hàng đơn vị
 */

function tinh() {
    let num = document.getElementById("inputSo").value;
    let ten = Math.floor(num/10);
    let unit = num%10

    console.log(ten, unit)

    let total = Number(ten) + Number(unit)
    if(10 <= num && num <=99){
        document.getElementById("result-msg5").innerHTML = `${total}`
    }else{
        document.getElementById("result-msg5").innerHTML = 'Số nhập phải là số có 2 chữ số từ 10-99'
    }
}