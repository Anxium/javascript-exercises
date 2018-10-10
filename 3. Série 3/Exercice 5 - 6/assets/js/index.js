for (let num = 1; num < 6; num++) {
    let image = `image${num}`
    let img  = document.getElementById(image);

    img.addEventListener("mouseenter", function() {
        img.setAttribute('src', `assets/img/${image}_2.jpg`);
    });

    img.addEventListener("mouseleave", function() {
        img.setAttribute('src', `assets/img/${image}.jpg`);
    });
}