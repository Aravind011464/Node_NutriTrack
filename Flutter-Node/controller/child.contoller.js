const ChildService = require('../services/child.services');

exports.child_entry = async(req,res,next) => {
  try{
    const {name,dob,age,weight,height,conditions,blood} = req.body;
    const successRes = await ChildService.registerChild(name,dob,age,weight,height,conditions,blood);
    res.json({status : true,success : "Child entry successfully"});
  }catch(err){
    throw new err;
  }
}