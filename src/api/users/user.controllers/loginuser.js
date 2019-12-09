
const User = require('../user.model')
const KraSheet=require("../../kraSheets/krasheetmodel")

const login = async (req, res,next) => {
    try {
        console.log("in login");

       let user = await User.findByCredentials(req.body.email, req.body.password)
       if(!user){
           return res.status(404).json("first Register")
       }
       
        const token = await user.generateAuthToken()
        user=await User.findById(user._id).select("-password -__v").populate("kraAttributes designation_id department_id reportingManager",["name"])
        console.log(user);
        const kra=await KraSheet.findOne({userId:user._id})
        if(!kra){
            return res.json({user,status:"not applied "})
        }
        const  month=new Date().getMonth()
      const year=new Date().getFullYear()

         if(kra.kraSheet[0].date.getMonth()==month && kra.kraSheet[0].date.getFullYear()==year){
            const status=kra.kraSheet[0].Status
            return res.json( {user,status} )
         }
         res.json({user,status:"not applied 2"})

    } catch (e) {
        console.log(e.message);
        return res.status(500).send("server error")
    }
}


module.exports = { login }