import { img } from "./imgB64";
window.addEventListener('load', (event) => {

    const canvas = document.getElementById("UPdateBanner")
    const ctx = canvas.getContext('2d');


    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let pw = (canvas.width / 1920) > 1 ? 1 : (canvas.width / 1920)
    let ph = (canvas.height / 947) > 1 ? 1 : (canvas.height / 947)

    let particleArray = new Array();
    let particleArrayTxt = new Array();

    let adjustX = -25
    let adjustY = 250

    const mouse = {
        x: null,
        y: null,
        radius: 80
    }


    window.addEventListener('mousemove', (event) => {
        mouse.x = event.layerX;
        mouse.y = event.layerY;
    });
    window.addEventListener('wheel', (event) => {

    })

    function drawImage(centerShift_x, centerShift_y, rw, rh) {
        const data = ctx.getImageData(centerShift_x, centerShift_y, rw, rh)

        class Particle {
            constructor(x, y, color, size) {
                this.x = x;
                this.y = y;
                this.color = color
                this.size = size;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 100) + 1;
            }

            draw() {

                ctx.fillStyle = this.color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

            }
            update() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;
                if (distance < mouse.radius) {
                    this.x -= directionX;
                    this.y -= directionY;

                } else {
                    if (this.x != this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 2;
                    }
                    if (this.y != this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 2
                    }

                }
            }

        }

        function init() {
            let ic = 2;
            let size = 1
            if (pw > 0.3) {
                ic = 4
                size = 2
            }

            if (pw > 0.8) {
                ic = 6
                size = 3
            }

            particleArray = []
            for (let y = 0, y2 = data.height; y < y2; y += ic) {
                for (let x = 0, x2 = data.width; x < x2; x += ic) {
                    if (data.data[
                            (y * 4 * data.width) +
                            (x * 4)
                        ] > 2) {
                        let positionX = x + adjustX;
                        let positionY = y + adjustY;
                        let color = `rgb(${data.data[y * 4 * data.width + (x * 4)]},${data.data[y * 4 * data.width + (x * 4) + 1]},${data.data[y * 4 * data.width + (x * 4) + 2]})`

                        particleArray.push(
                            new Particle(positionX, positionY, color, size)
                        )
                    }
                }
            }



        }
        init();

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (let p of particleArray) {
                p.draw();
                p.update();
            }
            for (let p of particleArrayTxt) {
                p.draw();
                p.update();
            }

            requestAnimationFrame(animate)

        }
        animate();


    }
    const png = new Image();
    png.src = img;
    console.log("canvas " + ctx.canvas)
    drawImageScaled(png, ctx).then((obj) => {
        drawImage(obj.centerShift_x, obj.centerShift_y, obj.rw, obj.rh);

    })



})



//https://stackoverflow.com/questions/23104582/scaling-an-image-to-fit-on-canvas
function drawImageScaled(img, ctx) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var canvas = ctx.canvas;
            var hRatio = (canvas.width + 50) / (img.width);
            var vRatio = (canvas.height + 50) / (img.height);
            var ratio = Math.min(hRatio, vRatio);
            var centerShift_x = (canvas.width - img.width * ratio) / 2;
            var centerShift_y = (canvas.height - img.height * ratio) / 2;
            ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);

            resolve({
                "centerShift_x": centerShift_x,
                "centerShift_y": centerShift_y,
                "rw": img.width * ratio,
                "rh": img.height * ratio
            });
        }, 100)

    })


}