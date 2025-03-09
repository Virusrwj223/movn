import type { Document } from "mongoose";
import { model, Schema } from "mongoose";

export interface IUser extends Document {
  userId: string;
  username: string;
  email: string;
  name: string;
  dob: Date;
  photo: string | null;
  country: string;
  isAdmin: boolean;
  deletedOn: Date | null;
  createdAt: Date;
}

const invalid = "INVALID";
const noInput = "NOINPUT";
const smallLength = "SMALLLENGTH";
const bigLength = "BIGLENGTH";
const invalidDate = "INVALIDDATE";

const userSchema = new Schema<IUser>({
  userId: {
    type: String,
  },
  username: {
    type: String,
    match: [/^[a-zA-Z0-9]+$/, invalid],
    required: [true, noInput],
    unique: true,
    minLength: [5, smallLength],
    maxLength: [20, bigLength],
    lowercase: true,
    index: true,
    text: true,
  },
  email: {
    type: String,
    required: [true, noInput],
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: [true, noInput],
    minLength: [5, smallLength],
    maxLength: [32, bigLength],
  },
  dob: {
    type: Date,
    max: [
      new Date(new Date().setFullYear(new Date().getFullYear() - 13)),
      invalidDate,
    ],
    required: [true, noInput],
  },
  photo: {
    type: String,
    required: false,
    default: null,
  },
  country: {
    type: String,
    required: [true, noInput],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  deletedOn: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

userSchema.pre("save", function (next) {
  this.userId = this._id as string;
  next();
});
export const User = model<IUser>("User", userSchema);
export default User;
