import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: true },
  allProperties: [{ type: mongoose.Schema.Types.ObjectID, ref: "Property" }],
  name: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

export default User;
