/**
 * Input
 * Step
 * Outputs
 */

function TB(){
    let s1st = document.getElementById("so1st").value;
    let s2nd = document.getElementById("so2nd").value;
    let s3rd = document.getElementById("so3rd").value;
    let s4th = document.getElementById("so4th").value;
    let s5th = document.getElementById("so5th").value;
    let dtb = (Number(s1st)+Number(s2nd)+Number(s3rd)+Number(s4th)+Number(s5th))/5;
        
    document.getElementById("result-msg2").innerHTML = `Giá trị Trung Bình: ${dtb}`

}