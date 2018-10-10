const img  = document.getElementById('image1');

img.addEventListener("mouseenter", function() {
    img.setAttribute('src', 'assets/img/image1_2.jpg');
});

img.addEventListener("mouseleave", function() {
    img.setAttribute('src', 'assets/img/image1.jpg');
});