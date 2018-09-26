import { model } from "mongoose";

const mongoose=require("mongoose");

let trade=mongoose.Schema({
    tradeDate:{type:String,required:true},
    commodity:{type:String,required:true},
    side: { type: String, required: true },
     quantity:{type:Number,required:true},

    counterparty: { type: String, required: true },
    location: { type: String, required: true },
})


module.exports=mongoose.model("Trade",trade);