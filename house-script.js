/* ----------------------------------------------------
   ส่วนที่ 1: ฐานข้อมูลบ้าน (Database)
   ---------------------------------------------------- */
var houses = {
    // --- ขาย (ID: 1-5) ---
    '1': { name: "บ้าน Cozy Cottage (โคซี่ คอทเทจ)", price: "2,590,000", priceShow: "฿2,590,000", img: "House1.jpg", spec: "2 นอน 1 น้ำ | เชียงใหม่", desc: "บ้านพักตากอากาศสไตล์มินิมอล วิวดอยสุเทพ" },
    '2': { name: "วิลล่า Blue Sky (บลูสกาย วิลล่า)", price: "5,800,000", priceShow: "฿5,800,000", img: "House2.jpg", spec: "3 นอน 3 น้ำ | นนทบุรี", desc: "บ้านเดี่ยวหลังใหญ่ ชานเมือง เดินทางสะดวก" },
    '3': { name: "เดอะ แกรนด์ โมเดิร์น", price: "8,900,000", priceShow: "฿8,900,000", img: "House3.jpg", spec: "4 นอน 4 น้ำ | บางนา", desc: "บ้านหรูสไตล์โมเดิร์น พร้อมสระว่ายน้ำส่วนตัว" },
    '4': { name: "ทาวน์โฮม สุขใจ", price: "1,990,000", priceShow: "฿1,990,000", img: "House4.jpg", spec: "2 นอน 2 น้ำ | รังสิต", desc: "ทาวน์โฮมราคาคุ้มค่า ใกล้รถไฟฟ้า" },
    '5': { name: "ซีวิว พาราไดซ์", price: "12,500,000", priceShow: "฿12,500,000", img: "House5.jpg", spec: "3 นอน 4 น้ำ | ภูเก็ต", desc: "พูลวิลล่าหรู เห็นวิวทะเล 180 องศา" },

    // --- เช่า (ID: 6-10) ---
    '6': { name: "คอนโด City View (เช่า)", price: "8,500", priceShow: "฿8,500 / เดือน", img: "House1.jpg", spec: "1 นอน | ใจกลางเมือง", desc: "คอนโดใกล้รถไฟฟ้า เฟอร์ฯ ครบ" },
    '7': { name: "ทาวน์โฮม สุขสบาย (เช่า)", price: "15,000", priceShow: "฿15,000 / เดือน", img: "House2.jpg", spec: "2 นอน | เลี้ยงสัตว์ได้", desc: "ทาวน์โฮมเงียบสงบ ชานเมือง" },
    '8': { name: "บ้านเดี่ยว The Grand (เช่า)", price: "35,000", priceShow: "฿35,000 / เดือน", img: "House3.jpg", spec: "3 นอน | ราชพฤกษ์", desc: "บ้านเดี่ยวหลังใหญ่ พร้อมสวน" },
    '9': { name: "อพาร์ทเมนท์ ร่มรื่น (เช่า)", price: "4,500", priceShow: "฿4,500 / เดือน", img: "House4.jpg", spec: "สตูดิโอ | ใกล้มหาลัย", desc: "ห้องพักราคาประหยัด มี Wifi ฟรี" },
    '10': { name: "พูลวิลล่า ริมหาด (เช่า)", price: "85,000", priceShow: "฿85,000 / เดือน", img: "House5.jpg", spec: "4 นอน | หัวหิน", desc: "พูลวิลล่าติดทะเล ปาร์ตี้ได้" },

    // --- ต่างประเทศ (ID: 11-16) ---
    // ญี่ปุ่น (Japan)
    '11': { name: "Tokyo Modern Loft", price: "11,000,000", priceShow: "¥45,000,000", img: "House6.jpg", spec: "1 นอน 1 น้ำ | ชินจูกุ, โตเกียว", desc: "ลอฟท์สไตล์โมเดิร์นใจกลางโตเกียว เดินทางสะดวก" },
    '12': { name: "Kyoto Traditional House", price: "15,500,000", priceShow: "¥60,000,000", img: "House7.jpg", spec: "3 นอน | เกียวโต", desc: "บ้านโบราณสไตล์ Machiya รีโนเวทใหม่ พร้อมสวนหิน" },

    // อังกฤษ (UK)
    '13': { name: "London Classic Flat", price: "22,000,000", priceShow: "£500,000", img: "House8.jpg", spec: "2 นอน 1 น้ำ | โซน 2 ลอนดอน", desc: "แฟลตสไตล์วิคตอเรียน เพดานสูง ใกล้สถานีรถไฟ" },
    '14': { name: "English Countryside Cottage", price: "18,500,000", priceShow: "£420,000", img: "House9.jpg", spec: "3 นอน | คอทส์วอลส์", desc: "บ้านกระท่อมในชนบท บรรยากาศเงียบสงบ พร้อมเตาผิง" },

    // อเมริกา (USA)
    '15': { name: "California Beach House", price: "29,000,000", priceShow: "$850,000", img: "House10.jpg", spec: "3 นอน 2 น้ำ | แอลเอ", desc: "บ้านพักตากอากาศริมชายหาด วิวทะเลแปซิฟิก" },
    '16': { name: "New York Apartment", price: "35,000,000", priceShow: "$1,000,000", img: "House11.jpg", spec: "1 นอน | แมนฮัตตัน", desc: "อพาร์ทเมนท์หรูใจกลางเมือง วิวตึกระฟ้า" }
};

/* ----------------------------------------------------
   ส่วนที่ 2: ระบบตะกร้าสินค้า
   ---------------------------------------------------- */
function addToCart(id) {
    var cart = JSON.parse(localStorage.getItem('myCart')) || [];
    cart.push(id);
    localStorage.setItem('myCart', JSON.stringify(cart));
    alert("เพิ่มลงตะกร้าเรียบร้อย!");
}

function renderBasket() {
    var cart = JSON.parse(localStorage.getItem('myCart')) || [];
    var tableBody = document.getElementById('cart-items');
    var totalEl = document.getElementById('total-price');
    var totalSummary = document.getElementById('summary-total');
    
    if (!tableBody) return;

    tableBody.innerHTML = ''; 
    var totalPrice = 0; // หมายเหตุ: การคำนวณราคารวมข้ามสกุลเงินอาจไม่แม่นยำในโค้ดตัวอย่างนี้

    if (cart.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="3" align="center">ยังไม่มีสินค้าในตะกร้า</td></tr>';
    } else {
        for (var i = 0; i < cart.length; i++) {
            var houseId = cart[i];
            var item = houses[houseId];
            
            if (item) {
                // พยายามแปลงราคาเป็นตัวเลข (เฉพาะเงินบาท) ถ้าเป็นต่างประเทศอาจจะต้องมีเรท
                // ในที่นี้ขออนุญาตใช้ราคา price ที่เก็บเป็นบาทมาคำนวณ
                var priceNum = parseInt(item.price.replace(/,/g, ''));
                totalPrice += priceNum;

                var row = `
                    <tr>
                        <td>
                            <div class="item-info">
                                <img src="${item.img}" alt="${item.name}">
                                <div class="item-details">
                                    <h4>${item.name}</h4>
                                    <p>${item.spec}</p>
                                </div>
                            </div>
                        </td>
                        <td><span style="color:#E74C3C; font-weight:bold;">${item.priceShow}</span></td>
                        <td align="center"><a href="#" onclick="removeFromCart(${i})" class="btn-remove">×</a></td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            }
        }
    }

    var formattedTotal = "฿" + totalPrice.toLocaleString();
    if(totalEl) totalEl.innerHTML = formattedTotal;
    if(totalSummary) totalSummary.innerHTML = formattedTotal;
    localStorage.setItem('totalPayment', formattedTotal);
}

function removeFromCart(index) {
    if(confirm('ต้องการลบรายการนี้ใช่ไหม?')) {
        var cart = JSON.parse(localStorage.getItem('myCart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('myCart', JSON.stringify(cart));
        renderBasket();
    }
}

function clearCart() {
    localStorage.removeItem('myCart');
}

/* ----------------------------------------------------
   ส่วนที่ 3: โหลดข้อมูลหน้ารายละเอียด
   ---------------------------------------------------- */
function getHouseId() {
    var query = window.location.search.substring(1); 
    var vars = query.split("&"); 
    for (var i=0; i<vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] == "id") { return pair[1]; }
    }
    return false;
}

function loadPage() {
    if (document.getElementById('cart-items')) {
        renderBasket();
        return;
    }

    var id = getHouseId();
    if (!id || houses[id] == undefined) return;

    var data = houses[id];
    if(document.getElementById('show-img')) document.getElementById('show-img').src = data.img;
    if(document.getElementById('show-name')) document.getElementById('show-name').innerHTML = data.name;
    if(document.getElementById('show-price')) document.getElementById('show-price').innerHTML = data.priceShow;
    if(document.getElementById('show-spec')) document.getElementById('show-spec').innerHTML = data.spec;
    if(document.getElementById('show-desc')) document.getElementById('show-desc').innerHTML = data.desc;
    
    var btn = document.getElementById('btn-reserve');
    if(btn) {
        btn.onclick = function() {
            addToCart(id);
        };
    }
}

window.onload = loadPage;