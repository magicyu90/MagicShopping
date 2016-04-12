var Schemas = {};

Schemas.ProductSchema = new SimpleSchema({

    name: {
        type: String,
        label: "Name",
        max: 50,
        index: true,
        unique: true,
     /*   custom: function () {
            Meteor.call("checkProductIsExistByName", this.value, function (err, res) {

                if (res === true) {
                    //Products.simpleSchema().namedContext().addInvalidKeys([{name: "name", type: "notUnique"}]);
                    throw new Meteor.Error("error", "产品用户名重复.","");
                }
            });
        }*/
    },
    price: {
        type: Number,
        max: 2000,
        label: "Price"
    },
    category: {
        type: String,
        label: "Category",
        max: 10
    },
    imageUrl: {
        type: String,
        optional: true,
        label: "ImageUrl"
    },
    userId: {
        type: String,
        label: "UserId",
        optional: true
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();
            }
        },
        optional: true
    },
    updatedAt: {
        type: Date,
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        },
        optional: true,
        denyInsert: true
    },
});

Schemas.ProductSchema.messages({
    "notUnique": "产品名称重复"
});

Products.attachSchema(Schemas.ProductSchema);