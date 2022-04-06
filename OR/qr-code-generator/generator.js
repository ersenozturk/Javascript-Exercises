
let qrcode = undefined;
function generateQRCode(value) {
    if(qrcode === undefined){
        
    qrcode = new QRCode(document.getElementById('qrcode'), value)
    }else{
        qrcode.clear();
        qrcode.makeCode(value)
    }
}
