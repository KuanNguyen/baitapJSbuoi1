/**
 * Author: dev1
 * Function: Bài tập 3 : Quy đổi tiền
 * Release: 27/06/2022
 */

/**
 *? Khối 1: Dữ liệu đang có sẵn (Input)
 *USD
 *VND
 *? Khối 2:Các bước xử lý code
 * B1: Tạo biến USD,VND
 * B2: gán giá trị cho biến VND(VND trên 1 USD)
 * B3: cho người dùng nhập giá trị cho biến USD
 * B4: Lập công thức quy đổi 
 *  VND = USD * VND(trên 1 USD)
 * 
 * B5: in kết quả 
 *? Khối 3:Kết quả (Output)
 * số VND 
 */

//B1+ B2
var USD;
USD = prompt("USD");
// VND trên 1 USD
var VND = 23500;



//B3: 
//tính VND
// VND = USD * VND(trên 1 USD)


//Rút gọn
VND = Number(USD) * Number(VND);

// B4
console.log("VND = ", VND);