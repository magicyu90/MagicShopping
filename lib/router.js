Router.configure({

    layoutTemplate: "layout",
    loadingTemplate: "loading"

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
    template: 'productsList',
    productsLimit: function () {
        return 20;
    },
    findOptions: function () {
        return {sort: {createdAt: -1}, limit: this.productsLimit()};
    },
    subscriptions: function () {
        this.productsSub = Meteor.subscribe("products");
    },
    products: function () {
        return Products.find({});
    },
    data: function () {
        return {
            products: Products.find({}),
            ready: this.productsSub.ready
        }
    }
});