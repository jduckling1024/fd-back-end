import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  idString: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String },
  user_type: { type: String },
});

export default userSchema;
