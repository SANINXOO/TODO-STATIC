import mongoose from "mongoose";

const schema=new mongoose.Schema({
    task:{type:String},
})
export default mongoose.model.task||mongoose.model("task",schema)