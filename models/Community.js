
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var communitySchema =  new Schema({
    communityName : {
        type: String,
        required: true,
        unique: true
    },

    // identifier: {
    //     type: Number,
    //     required: true
    // },

    admin: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },

    bannedList: {
     type: Array,
     required: true
    }
});



var Community = mongoose.model("Community", communitySchema);

module.exports = Community;