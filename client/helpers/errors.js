/**
 * Created by shen on 15/9/9.
 */
Errors = new Mongo.Collection(null);


throwError = function (message) {
    Errors.insert({message: message});
}