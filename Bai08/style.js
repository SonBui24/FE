let hetSale = new Date(2021, 11, 11, 0, 0, 0).getTime();

function saleDocThan() {
    let ngayHienTai = new Date().getTime();
    thoiGianConLai = hetSale - saleDocThan

    let giay = 1000;
    let phut = giay * 60;
    let gio = phut * 60;

    let h = Math.floor(thoiGianConLai / (gio));
    let m = Math.floor((thoiGianConLai % (gio)) / (phut));
    let s = Math.floor((thoiGianConLai % (phut)) / (giay));

    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}


setInterval(function() {
    saleDocThan()
}, 1000)