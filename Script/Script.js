let clcikableone = false;
const I_c = () => {
    clcikableone = false
    if (!clcikableone) {
        document.getElementById('img2').style.display = 'block'
        document.getElementById('img1').style.display = 'none'
    } else {
        document.getElementById('img2').style.display = 'none'
    }

}
const II_c = () => {
    clcikableone = true
    if (clcikableone) {
        document.getElementById('img1').style.display = 'block'
        document.getElementById('img2').style.display = 'none'
    } else {
        document.getElementById('img1').style.display = 'none'
    }

}