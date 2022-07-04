/**
 * Author: dev1
 * Function: Bài tập 3 : tính chu vi , diện tích ình chữ nhật
 * Release: 27/06/2022
 */

/**
 *? Khối 1: Dữ liệu đang có sẵn (Input)
 *chieuDai
 chieuRong
 *? Khối 2:Các bước xử lý code
 * B1: Tạo biến chieuDai,chieuRong
 * B2:  gán giá trị cho biến chieuDai,chieuRong
 * B3:  lập công thức tính toán 
 *  chuVi = (chieuDai + chieuRong)*2
 *  dienTich = chieuDai * chieuRong
 * 
 * B4: in kết quả 
 *? Khối 3:Kết quả (Output)
 * chuVi
 * dienTich 
 */

//B1+ B2
var chieuDai = 5;
var chieuRong = 4; 
var chuVi = 0;
var dienTich =0;


//B3: 
//tính chu vi
//chu vi = (chiều dài + chiều rộng)*2


//Rút gọn
chuVi = (Number(chieuDai) + Number(chieuRong))*2;

//tính diện tích
// diện tích = chiều dài * chiều rộng
dienTich = chieuDai * chieuRong;

// B4
console.log("Chu vi = ", chuVi);
console.log("Diện tích =", dienTich);
