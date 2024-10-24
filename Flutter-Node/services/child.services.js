const childModel = require('../model/child_info.model');

class ChildService{
  static async registerChild(name,dob,age,weight,height,conditions,blood){
    try{
      const createUser = new childModel({name,dob,age,weight,height,conditions,blood});
      return await createUser.save();
    }catch(err){
      throw err;
    }
  }
}

module.exports = ChildService;