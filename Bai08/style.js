let hetSale = new Date(2021, 11, 11, 0, 0, 0).getTime();

function saleDocThan() {
    let ngayHienTai = new Date().getTime();
    thoiGianConLai = hetSale - ngayHienTai

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
}, 1000);


let bought = 1;

function clickBuy() {
    document.getElementById("count-bought").innerHTML = bought++;

}

function removeBuy1() {
    let remove1 = document.getElementById("buy1");
    remove1.parentNode.removeChild(remove1);
}

function removeBuy2() {
    let remove2 = document.getElementById("buy2");
    remove2.parentNode.removeChild(remove2);
}

function removeBuy3() {
    let remove3 = document.getElementById("buy3");
    remove3.parentNode.removeChild(remove3);
}

function removeBuy4() {
    let remove4 = document.getElementById("buy4");
    remove4.parentNode.removeChild(remove4);
}

function inA() {
    let inn = document.getElementById("nguyen-van-a");
    inn.style.bottom = "100px";
    inn.style.opacity = "1";
    inn.style.transition = "1s";
}

setTimeout(inA,10000);

function outA() {
    let outt = document.getElementById("nguyen-van-a");
    outt.style.bottom = "-100px";
    outt.style.opacity = "0.1";
    outt.style.transition = "1s";
}

setTimeout(outA,15000);

function validateForm() {
    let name = document.getElementById("fullname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let age = document.getElementById("age");

    if (name.value == null || name.value == "") {
        name.style.border = "1px solid red";
    }

    if (email.value == null || email.value == "") {
        email.style.border = "1px solid red";
    }

    if (phone.value == null || phone.value == "") {
        phone.style.border = "1px solid red";
    }

    if (age.value == null || age.value == "") {
        age.style.border = "1px solid red";
    }
}

function input(id) {
    let input = document.getElementById(id);
    let inputValue = input.value

    if (!inputValue) {
        input.style.borderColor = "red"
    } else {
        input.style.borderColor = "rgb(206, 202, 202)"
    }
}
