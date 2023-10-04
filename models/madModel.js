import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const madSchema = new Schema({
    fakename : {
        type: String,
        required: 'Enter a fake name'
    },
    fakeLastName: {
        type: String,
        required: 'Enter a fake last name'
    },
    fakeEmail: {
        type: String,
        required: 'Enter a fake email'
    },
    fakeCompany: {
        type: String,
        required: 'Enter a fake company'
    },
    fakePhone: {
        type: String,
        required: 'Enter a fake phone'
    },
    madStatus: {
        type: String
    },
    madCreatedDate: {
        type: Date,
        default: Date.now
    }
});