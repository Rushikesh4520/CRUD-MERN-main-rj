/**
 * This file will hold the schema for the User resource
 */

const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type : String,
        required : true
    },
    phoneNumber: {
        type : Number,
        required : true,
        maxlength : 10
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now();
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    },
    userType: {
        type: String,
        required: true,
        default: 'Teacher',
        enum: ['Principal', 'HOD']
    }
});

module.exports = mongoose.model("Student", studentSchema);