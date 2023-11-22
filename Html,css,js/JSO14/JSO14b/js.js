window.onload = function () {
   
    var images = [
        'img/wulkan1.jpg',
        'img/wulkan2.jpg',
        'img/wulkan3.jpg',
        'img/wulkan4.jpg',
        'img/wulkan5.jpg',
        'img/wulkan6.jpg',
    ];

    var slider = document.getElementById('slider');
    var currentIndex = 0;


    function changeImage() {

        if (currentIndex > 0) {
            document.getElementById('img' + (currentIndex - 1)).style.display = 'none';
        }

        document.getElementById('img' + currentIndex).style.display = 'block';


        currentIndex = (currentIndex + 1) % images.length;

        setTimeout(changeImage, 3000);
    }

    for (var i = 0; i < images.length; i++) {
        var img = document.createElement('img');
        img.src = images[i];
        img.id = 'img' + i;
        slider.appendChild(img);
    }

    changeImage();
};