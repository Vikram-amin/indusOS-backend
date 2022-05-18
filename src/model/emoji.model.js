const mongoose = require("mongoose");

const EmojiTextSchema = new mongoose.Schema(
  {
    text: {
         type: String,
         required: true },
  },
  {
    timestamps: true,
  }
);

const EmojiText = mongoose.model("text", EmojiTextSchema);
module.exports = EmojiText;
