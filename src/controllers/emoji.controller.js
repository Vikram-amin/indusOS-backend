const EmojiText = require("../model/emoji.model");

const addText = async (req, res, next) => {
  try {
    let text = await EmojiText.insertMany([req.body]);
    res.status(201).send(text);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getText = async (req, res, next) => {
  try {
    let text = await EmojiText.find();
     res.status(200).send(text);
  } catch (error) {
     res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addText,
  getText,
};
