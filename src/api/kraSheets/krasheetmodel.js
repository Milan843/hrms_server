const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const kraSchema = new mongoose.Schema({

    userId: {
        type:  Number,
        required: true,
        ref:"User"
    },
    reportingManagerId: {
        type: Number,
        ref:"User",
        required:true
    },
    kraSheet:[{
        date:{
            type:Date,
            default:new Date()
        },
        Status:{
            type:String,
            default:"Not Approved"
        },

        kraAttributes:[{
            Attributesid:{
                type:mongoose.Types.ObjectId,
                ref:'kraAttributes'
            },
            name:{
                type:String
            },

            value:{
                type:Number
            }
        }],

    }]
});
module.exports=mongoose.model("KraSheetModel",kraSchema)
