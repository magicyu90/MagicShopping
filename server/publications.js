/**
 * Created by shen on 16/4/12.
 */

Meteor.publish('products', function () {

    return Products.find({});
});