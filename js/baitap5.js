
/**
 * Author: dev1
 * Function: Bài tập 3 : tính tổng 2 kí số
 * Release: 27/06/2022
 */

/**
 *? Khối 1: Dữ liệu đang có sẵn (Input)
 *number : chứa số có 2 chữ số
 soHangChuc, soDonVi
 *? Khối 2:Các bước xử lý code
 * B1: Tạo biến number = 12
 *              soHangChuc = 0
 *              soHangDonVi = 0
 * B2: tính toán 
 * soHangChuc = so/10
 * coHangDonVi = so%10    
 * tong = soHangchuc + soHangDonVi
 * 
 * B5: in kết quả 
 *? Khối 3:Kết quả (Output)
 * tong
 */

//B1
var number = 12;
var soHangChuc = 0;
var soHangDonVi = 0;
var tong = 0;



//B2: 
//tính số hàng chục
soHangChuc = number/10;


//tính số hàng đơn vị
soHangDonVi = number%10;

//tính tổng 
tong = parseInt(Number(soHangChuc)) + Number(soHangDonVi);

// B4
console.log("Tổng hai kí số : ", tong);