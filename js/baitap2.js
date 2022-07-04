/**
 * Author: dev1
 * Function: Bài tập 2 : tính trung bình 5 số thực
 * Release: 27/06/2022
 */

/**
 *? Khối 1: Dữ liệu đang có sẵn (Input)
 *number1 
 number2
 number3
 number4
 number5 
 * 
 *? Khối 2:Các bước xử lý code
 * B1: Tạo biến cho 5 số thục 
 * B2: cho người dùng nhập giá trị cho biến cho 5 số thực
 * B3: Lập công thức tính toán 
 * (sô trung bình ) Anumber = (number1 + number2 + number3 + number4 + number5)/5
 * B4: in kết quả 
 *? Khối 3:Kết quả (Output)
 * số trung bình (Anumber)
 */

//B1+ B2
var number1;
number1 = prompt("nhập số thứ 1 ");
var number2;
number2 = prompt("nhập số thứ 2 ");
var number3;
number3 = prompt("nhập số thứ 3 ");
var number4;
number4 = prompt("nhập số thứ 4 ");
var number5;
number5 = prompt("nhập số thứ 5 ");
var Anumber = 0;


//B3: 
//tính số trung bình 
// số trung bình = (số thứ 1 + số thứ 2 + số thứ 3 + số thứ 4 + số thứ 5)/5


//Rút gọn
Anumber = (Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5))/5;

// B4
console.log("Số trung bình", Anumber);