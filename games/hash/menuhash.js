let canvas = document.getElementById("buttonStartGame")
let ctx = canvas.getContext("2d")

let buttonSheet = new Image()
buttonSheet.src="../../data/button/start/start.png"

let posInitX = 0
let Limage = 0
let lengthSprite = 0
let numSprite = 2

buttonSheet.addEventListener('load', ()) => {
    Limage = buttonSheet.width
    lengthSprite = Limage / numSprite

    //image, Xinitcutout, Yinitcutout, Lcutout, Acutout, posX, posY, limage, Aimage
    ctx.drawImage(buttonSheet, posInitX, 0, lengthSprite, )
}

