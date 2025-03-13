
function changeBgColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}


function showMessage() {
    alert("สวัสดี ฉันชื่อซุล!");
}
