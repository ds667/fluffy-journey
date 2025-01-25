let qrcode = new QRCode(document.querySelector(".qrcode"), { colorDark: "#ff0000", colorLight: "#ffffff" });

function generateQr() {
    const input = document.querySelector("#qr-input").value.trim();
    if (input) qrcode.makeCode(input);
}

function clearQr() {
    document.querySelector("#qr-input").value = "";
    document.querySelector(".qrcode").innerHTML = "";
    qrcode.clear();
}

function updateColor() {
    const color = document.querySelector("#color-picker").value;
    qrcode._htOption.colorDark = color;
    const input = document.querySelector("#qr-input").value.trim();
    if (input) qrcode.makeCode(input);
}

function downloadQr() {
    const qrCanvas = document.querySelector(".qrcode canvas");
    if (qrCanvas) {
        const link = document.createElement("a");
        link.download = "qrcode.png";
        link.href = qrCanvas.toDataURL();
        link.click();
    }
}
