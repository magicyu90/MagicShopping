/**
 * Created by shen on 16/4/3.
 */
Products = new Mongo.Collection("products");

validateProduct = function (product) {
    var errors = {};
    if (!product.name)
        errors.name = "请填写产品名称";
    if (!product.price)
        errors.price = "请填写产品价格";
    return errors;
}


Meteor.methods({

    checkProductIsExistByName: function (name) {

        console.log("being called...");

        return Products.find({"name": name}).count() > 0;

    },
    productInsert: function (productAttributes) {

        var product = _.extend(productAttributes, {
            // userId: Random.id(),
            category: "perfume",
            createdAt: new Date()
        });

        check(product,Products.simpleSchema());
        if (Products.find({"name": product.name}).count() > 0) {

            throw new Meteor.Error("Error", "Product name is duplicated.");
        }

        Products.insert(product, function (err, res) {
           if(err){
               throw err;
           }
        });
    }
});