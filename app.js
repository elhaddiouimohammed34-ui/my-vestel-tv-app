// تحديد العنصر الأول وتجهيز التركيز فور فتح الصفحة
window.addEventListener('DOMContentLoaded', function() {
    const firstButton = document.querySelector('.focusable');
    if (firstButton) {
        firstButton.focus();
    }
});

// التقاط أزرار الريموت كنترول
document.addEventListener('keydown', function(event) {
    const focusables = Array.from(document.querySelectorAll('.focusable'));
    const currentIndex = focusables.indexOf(document.activeElement);

    switch(event.keyCode) {
        case 37: // سهم اليسار
            if (currentIndex < focusables.length - 1) {
                focusables[currentIndex + 1].focus();
            }
            break;

        case 39: // سهم اليمين
            if (currentIndex > 0) {
                focusables[currentIndex - 1].focus();
            }
            break;

        case 13: // زر OK / Enter
            if (document.activeElement) {
                document.activeElement.click();
                alert("تم الضغط على: " + document.activeElement.innerText);
            }
            break;

        case 8:    // زر الرجوع في بعض أجهزة التلفاز (Back)
        case 461:  // زر الرجوع في أنظمة HbbTV / Vewd
        case 27:   // زر Escape
            console.log("طلب الخروج أو الرجوع");
            break;
    }
});
