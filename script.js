function changeBgColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;

    // เปลี่ยนสีของ btx ให้ตรงกับสีพื้นหลัง
    document.querySelector(".btx").style.backgroundColor = randomColor;

    // แสดงรหัสสีที่เปลี่ยน
    document.getElementById("colorCode").innerText = "สีปัจจุบัน: " + randomColor;
}
function showMessage() {
    alert("สวัสดี ฉันชื่อซุล!");
}