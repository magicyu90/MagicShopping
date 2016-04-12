Router.configure({

    layoutTemplate: "layout"

});

Router.route('/', function () {
    this.render("productsMain")
});

Router.route('/addProduct', {

    name: 'productSubmit',
    template: 'productSubmit'
});

Router.route('/products', {
    name: 'productsList',
    template: 'productsList'
});