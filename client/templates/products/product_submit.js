Template.productSubmit.helpers({
    myCallbacks: function () {
        return {
            validateFile: function (file) {

                alert();
                sAlert.info("test....");

                console.log("validate", file.type);
                if (file.type !== "image/jpeg" || file.type !== "image/png") {
                    sAlert.error("请输入正确的图片格式!");
                }
            },
            finished: function (index, fileInfo) {

                console.log("finished...");
                sAlert.success("上传图片成功!");
            }
        }
    },
    errorMessage: function (field) {
        return Session.get("productSubmitErrors")[field];
    },
    errorClass: function (field) {
        return Session.get("productSubmitErrors")[field] ? "has-error" : ""
    }

});

Template.productSubmit.events({
    'submit form': function (e) {

        e.preventDefault();

        console.log("submit...");
        //check product value in client
        var product = {
            name: $(e.target).find('[name=inputName]').val(),
            price: Number($(e.target).find('[name=inputPrice]').val())
        };

        console.log(product);

        var errors = validateProduct(product);

        if (errors.name || errors.price) {
            return Session.set('productSubmitErrors', errors);
        }


        Meteor.call("productInsert", product, function (error, res) {

            if (error) {
                sAlert.error(error.reason);
                console.log(error);
            }
            else {
                sAlert.success("添加成功!");
            }
        });
    }
});

Template.productSubmit.onCreated(function () {

    Session.set("productSubmitErrors", {});
});


