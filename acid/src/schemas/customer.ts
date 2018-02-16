import { Document, Schema, Model, model } from "mongoose";
import { MongooseUniqueValidator } from "mongoose-unique-validator";

import { ICustomer } from "../interfaces/customer";

export interface ICustomerModel extends ICustomer, Document {
    fullName(): string;
}

export var CustomerSchema: Schema = new Schema({
    cid: {
        type: Number,
        min: [1000, 'CID must be > 1000'],
        required: [true, 'CID required'],
        unique: [true, 'Customer with CID {VALUE} exists']
    },
    phone: {
        type: [Number],
        validate: {
            validator: (numbers) => {
                for (let value of numbers) {
                    if (!(/^\(?([0-9]{3})\)?[-.â]?([0-9]{3})[-.â]?([0-9]{4})$/).test(value)) return false; // Phone number regex
                }
                return true;
            },
            message: '{VALUE} is not a valid phone number!',
        },
        required: [true, 'Customer phone number required']
    },
    city: {
        type: String,
        enum: {
            values: ['BL', 'SC', 'SM', 'RWS', 'RWC', 'FC', 'HB', ''],
            message: '{VALUE} is not a valid option. Check app/models/Customer.js for correct options',
        }
    },
    address: {
        type: String,
        match: [/(^\d+\s[a-zA-Z]+\s.+)/, 'Input address does not pass regex']
    },
    cross: String,
    note: String,
    name: String,
    type: {
        type: String,
        enum: {
            values: ['Personal', 'Business'],
            message: '{VALUE} is not a valid option. Check app/models/Customer.js for correct options',
        }
    },
    email: {
        type: String,
        match: [/^.+@.+\..+$/, 'Input email address ({VALUE}) does not pass regex']
    },
    ordered: Number
}, { collection: 'Customers' });

/*
CustomerSchema.pre("save", function(next) {
let now = new Date();
if (!this.createdAt) {
this.createdAt = now;
}
next();
});
*/

// add comprehensive validation to 'unique' fields
CustomerSchema.plugin(MongooseUniqueValidator);

export const User: Model<ICustomerModel> = model<ICustomerModel>("Customer", CustomerSchema);