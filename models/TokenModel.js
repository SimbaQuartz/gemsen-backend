const { Schema, model } = require("mongoose");

const TokenSchema = new Schema({
    token: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

});

module.exports = model("Token", TokenSchema, "tokens");
