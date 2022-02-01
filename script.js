$(document).ready(function() {

    var zoomImg = document.getElementById("zoom-img");
    var imgWidth = zoomImg.width;
    var imgHeight = zoomImg.height;

    $("#product-img").on("dblclick", function() {
        $("#zoom-img").add(".close-btn").add(".zoom-in").add(".zoom-out").fadeIn('2000');

    })
    $(".close-btn").on("click", function() {
        $("#zoom-img").add(".close-btn").add(".zoom-in").add(".zoom-out").fadeOut('2000');
    })


    //Image zoom-in-out

    $(".zoom-in").on("click", function() {
        if (imgWidth < 2000) {
            imgWidth += 100;
            zoomImg.width = imgWidth;
            imgHeight += 100;
            zoomImg.height = imgHeight;
        }

    })

    $(".zoom-out").on("click", function() {
        if (imgWidth > 500) {
            imgWidth -= 100;
            zoomImg.width = imgWidth;
            imgHeight -= 100;
            zoomImg.height = imgHeight;
        }
    })

})