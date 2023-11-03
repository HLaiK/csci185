const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";

function turnOnOff() {
    const elem = document.querySelector("#my_image");
    if (elem.src === imgOn) {
        elem.src = imgOff;
    } else {
        elem.src = imgOn;
    }
    // elem.src = "https://www.w3schools.com/js/pic_bulbon.gif";
}
