// JavaScript source
const GiftCard_Key = "cardkey1";
function getGiftCardOrdersFromLS() {
    let GiftCardOrders = [];
    if (localStorage.getItem(GiftCard_Key)) {
        GiftCardOrders = JSON.parse(localStorage.getItem(GiftCard_Key));
    }

    return GiftCardOrders;
}
function addItemToCart() {

    let GiftCardOrders = getGiftCardOrdersFromLS();

    let SNO = 1;
    let BuyerNameFirst = document.getElementById("fname").value;

    let BuyerNameLast = document.getElementById("lname").value;
    let BuyerName = BuyerNameFirst + BuyerNameLast;
    let ShippingAddress = document.getElementById("ShpAddrs").value;
    let City = document.getElementById("city").value;
    let GiftCardAmountINR = document.getElementById("GCAmountINR").value;
    let GiftCardAmountPAISE = document.getElementById("GCAmountPAISE").value;
    let GiftCardAmount = GiftCardAmountINR + GiftCardAmountPAISE;

    //let Ph = document.getElementById("ph").value;
    //let P1 = document.getElementById("p1").value;
    //let P2 = document.getElementById("p2").value;
    //let P3 = document.getElementById("p3").value;
    //let P4 = document.getElementById("p4").value;
    //let P5 = document.getElementById("p5").value;
    //let P6 = document.getElementById("p6").value;
    //let P7 = document.getElementById("p7").value;
    //let P8 = document.document.getElementById("p8").value;
    //let P9 = document.getElementById("p9").value;
    //let P10 = document.getElementById("p10").value;
    //let Phone = Ph + P1 + P2 + P3 + P4 + P5 + P6 + P7 + P8 + P9 + P10;

    let GiftCardSelected =
    {
        SNO: SNO,
        BuyerName: (BuyerName),
        ShippingAddress: (ShippingAddress),
        City: (City),
        GiftCardAmount: parseFloat(GiftCardAmount)


    };
    alert(JSON.stringify(GiftCardSelected))
    GiftCardOrders.push(GiftCardSelected);
    localStorage.setItem(GiftCard_Key, JSON.stringify(GiftCardOrders));

}
function loadItems() {

    let GiftCardOrders = getGiftCardOrdersFromLS();

    let ViewtableBody = document.getElementById("ViewTable");

    for (let Order of GiftCardOrders) {

        let Details = CreateOrdersRow(Order);
        ViewtableBody.append(Details);
    }

}

function CreateOrdersRow(Order) {

    let SNOColumn = document.createElement("td");
    SNOColumn.textContent = Order.SNO;
    let BuyerNameColumn = document.createElement("td");
    BuyerNameColumn.textContent = Order.BuyerName;
    let ShippingAddressColumn = document.createElement("td");
    ShippingAddressColumn.textContent = Order.ShippingAddress;
    let CityColumn = document.createElement("td");
    CityColumn.textContent = Order.City;
    let AmountColumn = document.createElement("td");
    AmountColumn.textContent = Order.Amount;
    let PhoneColumn = document.createElement("td");
    PhoneColumn.textContent = Order.Phone;
    let Details = document.createElement("tr");
    Details.append(SNOColumn);
    Details.append(BuyerNameColumn);
    Details.append(ShippingAddressColumn);
    Details.append(CityColumn);
    Details.append(AmountColumn);
    Details.append(PhoneColumn);
    //  alert("test");
    return Details;
}
function validation() {
    var a = document.form1.fname;
    var a = document.form1.lname;
    var a = document.form1.bfname;
    var a = document.form1.blname;
    var inputtext = document.form1.mail;
    var pin = document.form1.pin;

    if (allLetter(a)) {

        if (ValidateEmail(inputtext)) {
        }
    }
    return false;
}
    
        
  


function allLetter(a) {

    var letters = /^[A-Za-z]+$/;
    if (a == "") {
        alert("empty");
        a.focus();
        return false;
    }
    if (a.value.match(letters)) {
        return true;
    }
    else {
        alert("enter only alphabets");
        return false;
    }

}
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {

        return true;
    }
    else {
        alert("You have entered an invalid email address!");

        return false;
    }
}
function f() {
    
    let t11 = document.getElementById("ph1").value;
    if (t11 == "") {
        alert("Enter Mobile Number");
    }
    if (t11 != null)
        document.getElementById("ph2").focus();
}
function f1() {
    let t11 = document.getElementById("ph2").value;
    if (t11 != null)
        document.getElementById("ph3").focus();
}
function f2() {
    let t11 = document.getElementById("ph3").value;
    if (t11 != null)
        document.getElementById("ph4").focus();
}
function f3() {
    let t11 = document.getElementById("ph4").value;
    if (t11 != null)
        document.getElementById("ph5").focus();
}
function f4() {
    let t11 = document.getElementById("ph5").value;
    if (t11 != null)
        document.getElementById("ph6").focus();
}
function f5() {
    let t11 = document.getElementById("ph6").value;
    if (t11 != null)
        document.getElementById("ph7").focus();
}
function f6() {
    let t11 = document.getElementById("ph7").value;
    if (t11 != null)
        document.getElementById("ph8").focus();
}
function f7() {
    let t11 = document.getElementById("ph8").value;
    if (t11 != null)
        document.getElementById("ph9").focus();
}

function f8() {
    let t11 = document.getElementById("ph9").value;
    if (t11 != null)
        document.getElementById("ph10").focus();
}

function f9() {
    let t11 = document.getElementById("ph10").value;
    if (t11 != null)
        document.getElementById("email").focus();
}



