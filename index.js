var txt = document.getElementById("txt");

txt.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        generate();
    }
});



function generate() {
    box = document.getElementById("qr");
    var text = txt.value;
    box.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}" alt="qr code"  />`;
}