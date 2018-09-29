const tshirtList = require('../data/tshirts').tshirtList

module.exports.getTshirts = (req,res) => {
  return res
    .status(200)
    .json(tshirtList)
}