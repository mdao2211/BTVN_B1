//B3: XUAT TIEN

let soTienUSD = parseFloat(prompt("Nhap vao so USD: "));
var soTienQuyDoi = soTienUSD * 23500;

console.log("Tong tien quy doi : ", soTienQuyDoi, "VND");

//B4: HCN

let chieuDai = parseFloat(prompt("Nhap vao chieu dai: "));
let chieuRong = parseFloat(prompt("Nhap vao chieu rong: "));

var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;

console.log("Dien tich: ", dienTich);
console.log("Chu vi: ", chuVi);

//B5: TINH TONG 2 KI SO
let soCanNhap = parseFloat(prompt("Nhap vao: "));

var hangChuc = parseInt(soCanNhap / 10);
var hangDonVi = parseInt(soCanNhap % 10);

console.log("Tong cac chu so la: ", hangChuc + hangDonVi);
