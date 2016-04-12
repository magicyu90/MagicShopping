/**
 * Created by shen on 16/4/10.
 */

var images = ['shopping1.jpg', 'shopping2.jpg'];

Template.productsMain.onRendered(function () {

    //var i = 0;
    var i = Math.floor(Math.random() *2)
    $("#productsMain").css("background-image", "url(images/" + images[i] + ")");

    /* setInterval(function () {
     i++;
     if (i == images.length) {
     i = 0;
     }
     $("#productsMain").fadeOut("slow", function () {
     $(this).css("background-image", "url(images/" + images[i] + ")");
     $(this).fadeIn("slow");
     });
     }, 7000);*/
});


Template.productsMain.helpers({

    categories:function(){
        return [
            {
                title: 'Perfume',
                url: 'images/categories/perfume.jpg'
            },
            {
                title: 'Cosmeceutical',
                url: 'images/categories/cosmeceutical.jpg'
            },
            {
                title: 'Bag',
                url: 'images/categories/bag.jpg'
            }
        ];
    }
});