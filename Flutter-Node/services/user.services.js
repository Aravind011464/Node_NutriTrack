const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

class UserService{
  static async registerUser(email,password){
    try{
      const createUser = new userModel({email,password});
      return await createUser.save();
    }catch(err){
      throw err;
    }
  }
  static async checkUser(email){
    try{
      var old_user =  await userModel.findOne({email});
      console.log(old_user);
      return old_user;
    }catch(err){
      throw err;
    }
  }
  static async generateToken(tokenData,secretKey,jwt_expiry){
    return jwt.sign(tokenData,secretKey,{expiresIn : jwt_expiry});
  }
}

module.exports = UserService;