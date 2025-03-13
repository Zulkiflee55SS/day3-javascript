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

function copyColor() {
    let colorText = document.getElementById("colorCode").innerText.replace("สีปัจจุบัน: ", "");
    navigator.clipboard.writeText(colorText).then(() => {
        let message = document.getElementById("copyMessage");
        message.style.display = "block";
        
        // ทำให้ข้อความหายไปหลังจาก 2 วินาที
        setTimeout(() => {
            message.style.display = "none";
        }, 2000);
    });
}
