/**
 * Created by shen on 16/4/12.
 */


Template.productsList.helpers({
    products: function () {
        /*all = Products.find({}).fetch();
         chunks = [];
         size = 4;
         while (all.length > size) {
         chunks.push({ row: all.slice(0, size)});
         all = all.slice(size);
         }
         chunks.push({row: all});
         return chunks;*/

        return Products.find({}).fetch();
    }
});