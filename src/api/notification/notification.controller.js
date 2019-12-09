const Notification =require("./notification.model")
const getNotification = async (req, res) => {
try {
    
    const notification= await Notification.find({to:req._id}).populate("to from","name -_id").populate("typeId","-_id -__v").select("-__v")
    if(!notification){
        return res.status(400).send("No notification found")
    }

    res.send(notification)
} catch (error) {
    console.log(error.message);
    
    res.status(500).send("server error")
    
}




//   const user = await User.find({ name: { $nin: ["CEO"] } })
//     .select("name jobStatus")
//     .populate("designation_id department_id prefix ", [
//       "name"
//     ]);
//   console.log(user);
//   res.send(user);
};
module.exports = { getNotification };