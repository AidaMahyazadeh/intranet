const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const dotenv = require ('dotenv').config();
const User = require ('../models/user');

const signupController = async (req,res) =>{
   
    const {firstname,lastname,email,username,password} = req.body;
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound)
    const hashedPassword =await bcrypt.hash(password, salt);
    const emailRecord = await User.findOne ({email});
    const userNameRecord = await User.findOne ({username}); 
    if (emailRecord) {
        return res.status (400).json({
            message :'Email is already registered.'
        }) 
    }else if (userNameRecord){
        return res.status (400).json ({
            message :'This username already exists.'
        }) 
    }else if(req.body == null){
        return res.status(400).json({
             messege : 'you should fill all the fields.' 
        })
    }else{
        const user = new User({
            firstname,
            lastname,
            email, 
            username,
            password : hashedPassword,
           
          })
          const result = await user.save();
          const {_id} = await result.toJSON();
          const secret = process.env.JWT_KEY;
          const token = jwt.sign({_id},secret);
          res.cookie('jwt',token,{
            httpOnly :true,
            maxAge : 30 * 24* 60 * 60 * 1000 
          })

          res.json ({
            user :result,
            message : 'SUCCESS',
            token 
          })
         
    }
}
     module.exports = signupController;