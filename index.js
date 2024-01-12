var product = [{
    id: 1,
    img: 'assets/ยางงงงงงง.jpg',
    name: 'สวนยาง ตรัง',
    price: 3000,
    description: 'เจ้าของ : นายฐากูร ชัยมังคลานนท์ / จำนวนต้นไม้ : 10,000 ต้น / ขนาดพื้นที่ : 100 ตร.ม. / ดูดคาร์บอนได้ : 100 ตันต่อเดือน / ติดต่อได้ที่ : 0929087766',
    type: 'ยาง'
}, {
    id: 2,
    img: 'assets/อ้อย.jpg',
    name: 'สวนอ้อย อุตรดิตถ์',
    price: 8000,
    description: 'เจ้าของ : นายศตพล ทองกัน / จำนวนต้นไม้ : 30,000 ต้น / ขนาดพื้นที่ : 1,000 ตร.ม. / ดูดคาร์บอนได้ : 1700 ตันต่อเดือน / ติดต่อได้ที่ : 0891294399',
    type: 'อ้อย'
}, {
    id: 3,
    img: 'assets/ยูคาลิบตัส.jpg',
    name: 'สวนยูคาลิบตัส ชลบุรี',
    price: 6500,
    description: 'เจ้าของ : นายภูเบศ พรบบ่อ / จำนวนต้นไม้ : 18,000 ต้น / ขนาดพื้นที่ : 130 ตร.ม. / ดูดคาร์บอนได้ : 160 ตันต่อเดือน / ติดต่อได้ที่ : 0894738971',
    type: 'ยูคาลิบตัส'
}, {
    id: 4,
    img: 'assets/ปาล์มน้ำมัน.jpg',
    name: 'สวนปาล์มน้ำมัน กระบี่',
    price: 7000,
    description: 'เจ้าของ : นายรัชภูมิ วัดวิเศษ / จำนวนต้นไม้ : 16,000 ต้น / ขนาดพื้นที่ : 115 ตร.ม. / ดูดคาร์บอนได้ : 92 ตันต่อเดือน / ติดต่อได้ที่ : 0815788107',
    type: 'ปาล์ม'
}, {
    id: 5,
    img: 'assets/ปาล์มน้ำมัน2.jpg',
    name: 'ปาล์มน้ำมัน',
    price: 3000,
    description: 'เจ้าของ : นายยิ่งยง คงกระพัน / จำนวนต้นไม้ : 10,000 ต้น / ขนาดพื้นที่ : 100 ตร.ม. / ดูดคาร์บอนได้ : 100 ตันต่อเดือน / ติดต่อได้ที่ : 0929087766',
    type: 'ปาล์ม'
}, {
    id: 6,
    img: 'assets/อ้อย.jpg',
    name: 'สวนอ้อย',
    price: 8000,
    description: 'เจ้าของ : นาย Tobe IT67 / จำนวนต้นไม้ : 30,000 ต้น / ขนาดพื้นที่ : 1,000 ตร.ม. / ดูดคาร์บอนได้ : 1700 ตันต่อเดือน / ติดต่อได้ที่ : 0891294399',
    type: 'ยาง'
}, {
    id: 7,
    img: 'assets/ยูคาลิบตัส.jpg',
    name: 'สวนยูคาลิบตัส',
    price: 6500,
    description: 'เจ้าของ : นายภูเบศ พรบบ่อ / จำนวนต้นไม้ : 18,000 ต้น / ขนาดพื้นที่ : 130 ตร.ม. / ดูดคาร์บอนได้ : 160 ตันต่อเดือน / ติดต่อได้ที่ : 0894738971',
    type: 'อ้อย'
}, {
    id: 8,
    img: 'assets/ปาล์มน้ำมัน.jpg',
    name: 'สวนปาล์มน้ำมัน',
    price: 7000,
    description: 'เจ้าของ : นายรัชภูมิ วัดวิเศษ / จำนวนต้นไม้ : 16,000 ต้น / ขนาดพื้นที่ : 115 ตร.ม. / ดูดคาร์บอนได้ : 92 ตันต่อเดือน / ติดต่อได้ที่ : 0815788107',
    type: 'ยูคาลิบตัส'
}];

// [{},{},{}] // length = 3

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } THB</p>
                </div>`;
    }
    $("#productlist").html(html);

})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(elem) {
    // console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if( product[i].name.includes(value) ) {
            html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } THB</p>
                </div>`;
        }
    }
    if(html == '') {
        $("#productlist").html(`<p>Not found product</p>`);
    } else {
        $("#productlist").html(html);
    }

}

function searchproduct(param) {
    console.log(param)
    $(".product-items").css('display', 'none')
    if(param == 'all') {
        $(".product-items").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display', 'flex')
    $("#mdd-img").attr('src', product[index].img);
    $("#mdd-name").text(product[index].name)
    $("#mdd-price").text( numberWithCommas(product[index].price) + ' THB')
    $("#mdd-desc").text(product[index].description)
}

function closeModal() {
    $(".modal").css('display','none')
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if( productindex == cart[i].index ) {
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        // console.log(obj)
        cart.push(obj)
    }
    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productindex].name + ' to cart !'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function openCart() {
    $('#modalCart').css('display','flex')
    rendercart();
}

function rendercart() {
    if(cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="">
                            <div class="cartlist-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${ numberWithCommas(cart[i].price * cart[i].count) } THB</p>
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html)
    }
    else {
        $("#mycart").html(`<p>Not found product list</p>`)
    }
}

function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) => {
                  if(res.isConfirmed) {
                     cart.splice(index, 1) 
                     console.log(cart)
                     rendercart();
                     $("#cartcount").css('display','flex').text(cart.length)
                     
                     if(cart.length <= 0) {
                        $("#cartcount").css('display','none')
                     }
                  }  
                  else {
                    cart[index].count++;
                    $("#countitems"+index).text(cart[index].count)
                    rendercart();
                  }
                })
            }
            rendercart();
        }
        
    }
    else if(action == '+') {
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
        rendercart();
    }
}