/**
 * Author: dev1
 * Function: Bài tập 1 : tính lương nhân viên
 * Release: 27/06/2022
 */

/**
 *? Khối 1: Dữ liệu đang có sẵn (Input)
 * workDays : số ngày làm
 * saLaryPD : Lương nhân viên mỗi ngày làm 
 * 
 *? Khối 2:Các bước xử lý code
 * B1: Tạo biến workDays, saLary
 * B2: Gan giá trị cho biến salary
 * B3: cho người dùng nhập biến workDays
 * B4: Lập công thức tính toán 
 * lương nhân viên = số ngày làm * lương nhân viên mỗi ngày làm
 * (lương nhân viên) salary = workDays * salaryPD
 * B5: in kết quả
 *? Khối 3:Kết quả (Output)
 * lương nhân viên : salary 
 */

//B1+ B2
var salaryPD = 100000 ;
var workDays;
workDays = prompt("nhập số ngày làm việc...");
var salary = 0;

 //B3: 
//tính lương nhân viên
// lương nhân viên = số ngày làm * lương nhân viên mỗi ngày


//Rút gọn
salary = Number(salaryPD) * Number(workDays);

// B4
console.log("Lương nhân viên", salary );

