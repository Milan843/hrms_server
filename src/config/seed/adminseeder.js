var user = require("../../api/users/user.model");
var designation = require("../../api/designation/designation.model");

async function func() {
    const number = await user.countDocuments();
    if (number < 1) {
        const des = await designation.findOne({ name: "Admin" });
        const des_id = await des._id;
        const obj = {
             _id:  { type: Number,
            default: 100},
            name: "Admin",
            email: "admin@gmail.com",
            designation_id: des_id,
            gender:"Female",
            reportingManager:"Self"
        };
        const e = new user(obj);
        e.save();
    }
}
func();
module.exports = func;