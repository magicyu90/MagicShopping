Meteor.startup(function () {

    if (Meteor.isServer) {

        console.log("is server...")
        /*        UploadServer.init({
         tmpDir: '/Users/shen/Documents/Uploads/tmp',
         uploadDir: '/Users/shen/Documents/Uploads/',
         checkCreateDirectories: true,
         getDirectory: function (fileInfo, formData) {
         // create a sub-directory in the uploadDir based on the content type (e.g. 'images')
         return formData.contentType;
         },
         finished: function (fileInfo, formFields) {


         },
         cacheTime: 100,
         mimeTypes: {
         "jpeg": "image/jpeg",
         "jpg": "image/jpeg",
         "png": "image/png",
         },
         validateFile: function (file, req) {
         if (file.type !== "image/jpeg" || file.type !== "image/png" || file.type !== "image/gif") {

         }
         return;
         }
         });*/
    }
});