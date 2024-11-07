const ChildService = require('../services/child.services');

exports.child_entry = async(req,res,next) => {
  try{
    const {userid,name,dob,age,weight,height,conditions,blood} = req.body;
    const successRes = await ChildService.registerChild(userid,name,dob,age,weight,height,conditions,blood);
    res.json({status : true,success : "Child entry successfully"});
  }catch(err){
    throw new err;
  }
}

exports.child_retrieve = async(req,res,next) => {
  try{
    const {userid} = req.body;
    const child_datas = await ChildService.retrieveChild(userid);
    res.json({tatus : true,success : "Child entry successfully",data:child_datas})
  }catch(err){
    throw new err;
  }
}