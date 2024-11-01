const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema(
  {
    latitude:{
      type:String,
      required:true
    },
    longitude:{
      type:String,
      required:true
    },
  },
  
  { timestamps: true }

);

module.exports = mongoose.model("notification", NotificationSchema);