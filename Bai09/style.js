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

    $("#hour").html(h);
    $("#minute").html(m);
    $("#second").html(s);
}

setInterval(function() {
    saleDocThan()
}, 1000);


let bought = 0;

function addToCard(event) {
    event.target.style.display = "none";
    $("#count-bought").html(++bought)
}

setTimeout(function() {
    $("#nguyen-van-a").css("bottom", "100px")
    $("#nguyen-van-a").css("opacity", "1")
    $("#nguyen-van-a").css("transition", "1s")
},10000);
 
setTimeout(function() {
    $("#nguyen-van-a").css("bottom", "-100px")
    $("#nguyen-van-a").css("opacity", "0")
    $("#nguyen-van-a").css("transition", "1s")
},15000);

$(document).ready(function(){
    $('#button').click(function() {
        
        if (!$("#fullname").val()) {
        $("#fullname").css("borderColor", "red");
        }

        if (!$("#email").val()) {
        $("#email").css("borderColor", "red");
        }
    

        if (!$("#phone").val()) {
        $("#phone").css("borderColor", "red");
        }

        if (!$("#age").val()) {
        $("#age").css("borderColor", "red");
        }
    })
});

$(document).ready(function() {
    
})
function input(id) {
    let input = document.getElementById(id);
    let inputValue = input.value

    if (!inputValue) {
        input.style.borderColor = "red"
    } else {
        input.style.borderColor = "rgb(206, 202, 202)"
    }
}

let postsList = $(".post-list");
function createPostElement(postItem) {
    return (
        '<p class="title">' +
        postItem.title +
        '</p>'
    );
}



$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    type: "GET",
    success: function (result) {
    for (let i = 0; i < 4; i++) {

        let post = createPostElement(result[i]);

        postsList[i].prepend(post);
        }
    },
    error: function (error) {
    console.log(error);
    },
});