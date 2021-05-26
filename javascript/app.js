var num, opr, array1; //pre define var
opr = 'DecimaltoBinary';
// functions
//decimal
function DecimaltoBinary(num1) {
    array1 = [];
    var result = "";
    x = num1;
    for (var i = 0; parseInt((x / 2)) + 1 != 1; i++) {
        array1[i] = x % 2;
        x = parseInt(x / 2);
    }
    array1.push(1);
    for (var j = array1.length - 1; j >= 0; j--) {
        result += array1[j] + "";
    }
    return result;
}

function DecimalToOctal(num1) {
    array1 = [];
    var result = "";
    x = num1;
    for (var i = 0; parseInt((x / 8)) + 1 != 1; i++) {
        array1[i] = x % 8;
        x = parseInt(x / 8);
    }
    array1.push(x % 8);
    for (var j = array1.length - 1; j >= 0; j--) {
        result += array1[j] + "";
    }
    return result;
}

function DecimalToHexa(num1) {
    array1 = [];
    var result = "";
    x = num1;
    for (var i = 0; parseInt((x / 16)) + 1 != 1; i++) {
        o = x % 16;
        switch (o) {
            case 10:
                array1[i] = "A";
                break;
            case 11:
                array1[i] = "B";
                break;
            case 12:
                array1[i] = "C";
                break;
            case 13:
                array1[i] = "D";
                break;
            case 14:
                array1[i] = "E";
                break;
            case 15:
                array1[i] = "F";
                break;
            default:
                array1[i] = o;
        }
        x = parseInt(x / 16);
    }
    z = x % 16;
    switch (z) {
        case 10:
            z = "A";
            break;
        case 11:
            z = "B";
            break;
        case 12:
            z = "C";
            break;
        case 13:
            z = "D";
            break;
        case 14:
            z = "E";
            break;
        case 15:
            z = "F";
            break;
        default:
            z = z;
    }
    array1.push(z);
    for (var j = array1.length - 1; j >= 0; j--) {
        result += array1[j] + "";
    }
    return result;
}
//binary
function BinaryToDecimal(num) {
    array1 = [];
    var i = 0;
    for (var j = num.length - 1; j >= 0; j--) {
        array1[i] = parseInt(num.charAt(j)) * (parseInt(Math.pow(2, i)));
        i++;
    }
    var result = 0;
    for (var i = 0; i < array1.length; i++) {
        result += array1[i];
    }
    return result;
}
//octal
function OctalToDecimal(num) {
    array1 = [];
    var i = 0;
    for (var j = num.length - 1; j >= 0; j--) {
        array1[i] = parseInt(num.charAt(j)) * (parseInt(Math.pow(8, i)));
        i++;
    }
    var result = 0;
    for (var i = 0; i < array1.length; i++) {
        result += array1[i];
    }
    return result;
}
//hexa
function HexaToDecimal(num) {
    array1 = [];
    var i = 0;
    for (var j = num.length - 1; j >= 0; j--) {
        var x;
        switch (num.charAt(j)) {
            case 'A':
                x = 10;
                break;
            case 'B':
                x = 11;
                break;
            case 'C':
                x = 12;
                break;
            case 'D':
                x = 13;
                break;
            case 'E':
                x = 14;
                break;
            case 'F':
                x = 15;
                break;
            default:
                x = parseInt(num.charAt(j));
                break;
        }
        array1[i] = x * (parseInt(Math.pow(16, i)));
        i++;
    }
    var result = 0;
    for (var i = 0; i < array1.length; i++) {
        result += array1[i];
    }
    return result;
}
var h = document.getElementsByClassName("hex");
var b = document.getElementsByClassName("bin");
var d = document.getElementsByClassName("dec");
//operation
function oprt(x) {
    switch (x) {
        case 1:
            opr = 'DecimaltoBinary';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "none";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "none";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "inline-block";
            }
            break;
        case 2:
            opr = 'DecimaltoOctal';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "none";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "none";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "inline-block";
            }
            break;
        case 3:
            opr = 'DecimaltoHexa';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "none";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "none";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "inline-block";
            }
            break;
        case 4:
            opr = 'BinaryToDecimal';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "none";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "inline-block";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "none";
            }
            break;
        case 5:
            opr = 'BinaryToOctal';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "none";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "inline-block";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "none";
            }
            break;
        case 6:
            opr = 'BinaryToHexa';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "none";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "inline-block";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "none";
            }
            break;
        case 7:
            opr = 'OctalToDecimal';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "none";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "none";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "inline-block";
            }
            break;
        case 8:
            opr = 'OctalToBinary';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "none";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "none";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "inline-block";
            }
            break;
        case 9:
            opr = 'OctalToHexa';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "none";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "none";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "inline-block";
            }
            break;
        case 10:
            opr = 'HexaToDecimal';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "inline-block";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "none";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "none";
            }
            break;
        case 11:
            opr = 'HexaToBinary';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "inline-block";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "none";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "none";
            }
            break;
        case 12:
            opr = 'HexaToOctal';
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "inline-block";
            }
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "none";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "none";
            }
            break;
    }
}
//for clearing all
function clearAll() {
    document.getElementById("textBox").value = "";
}
//for clearing last character
function clear1() {
    var t = document.getElementById("textBox").value;
    document.getElementById("textBox").value = "";
    ar = [];
    for (var i = 0; i < t.length; i++) {
        ar[i] = t.charAt(i);
    }
    ar.pop();
    for (var i = 0; i < ar.length; i++) {
        document.getElementById("textBox").value += ar[i];
    }
}
//to insert buttons value to text box
function insert(m) {
    document.getElementById("textBox").value += m;
}
//result
function resultl() {
    switch (opr) {
        case 'DecimaltoBinary':
            num = parseInt(document.getElementById("textBox").value);
            document.getElementById("textBox").value = DecimaltoBinary(num);
            break;
        case 'DecimaltoOctal':
            num = parseInt(document.getElementById("textBox").value);
            document.getElementById("textBox").value = DecimalToOctal(num);
            break;
        case 'DecimaltoHexa':
            num = parseInt(document.getElementById("textBox").value);
            document.getElementById("textBox").value = DecimalToHexa(num);
            break;
        case 'BinaryToDecimal':
            num = document.getElementById("textBox").value;
            document.getElementById("textBox").value = BinaryToDecimal(num);
            break;
        case 'BinaryToOctal':
            num = document.getElementById("textBox").value;
            document.getElementById("textBox").value = DecimalToOctal(BinaryToDecimal(num));
            break;
        case 'BinaryToHexa':
            num = document.getElementById("textBox").value;
            document.getElementById("textBox").value = DecimalToHexa(BinaryToDecimal(num));
            break;
        case 'OctalToDecimal':
            num = document.getElementById("textBox").value;
            document.getElementById("textBox").value = OctalToDecimal(num);
            break;
        case 'OctalToBinary':
            num = document.getElementById("textBox").value;
            document.getElementById("textBox").value = DecimaltoBinary(OctalToDecimal(num));
            break;
        case 'OctalToHexa':
            num = document.getElementById("textBox").value;
            document.getElementById("textBox").value = DecimalToHexa(OctalToDecimal(num));
            break;
        case 'HexaToDecimal':
            num = document.getElementById("textBox").value;
            document.getElementById("textBox").value = HexaToDecimal(num);
            break;
        case 'HexaToBinary':
            num = document.getElementById("textBox").value;
            document.getElementById("textBox").value = DecimaltoBinary(HexaToDecimal(num));
            break;
        case 'HexaToOctal':
            num = document.getElementById("textBox").value;
            document.getElementById("textBox").value = DecimalToOctal(HexaToDecimal(num));
            break;
    }
};
// about page textarea 

 function ClearE() {
            document.getElementById("textareaE").value='';
            alert('Thanks! We recived your message');  
 }
  function ClearP() {
            document.getElementById("textareaP").value='';
            alert('مننه ! ستاسو پیغام مونږ تر لاسه کړ.');  
 }
  function ClearD() {
            document.getElementById("textareaD").value='';
            alert('تشکر! ما مسج شما را دریافت نمودیم .');  
 }