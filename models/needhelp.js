// A module is basically the structure of our collection, stores timestamp(records the date the user submitted the value)
import mongoose, { Schema } from "mongoose"

const needHelpSchema = new Schema(
    {
        fname: String,
        email: String,
        desc: String
    },{
        timestamps: true
    }
);

const NeedHelps = mongoose.models.NeedHelps || mongoose.model("NeedHelps", needHelpSchema);

export default NeedHelps;