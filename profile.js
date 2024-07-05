const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        user: {type: String, default: ""},
        name: {type: String, default: ""},
        hobby: {type: String, default: ""},
    },
    { //metadata
        timestamps: {
            createdAt: "createdOn",
            updatedAt: "updatedOn"
        },
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

const ProfileModel = mongoose.model('profiles', schema);

module.exports = ProfileModel;