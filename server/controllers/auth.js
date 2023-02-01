import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken"; 
import User from "../models/User.js"; 

//등록기능 (인증, 인가)
export const register = async(req,res)=>{
//req가 클라이언트가 보낸 회원 정보이고 이것을 갖고 
//이 함수에서 사용해야 한다 
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            visitedCountry,
            location,
            occupation,
          } = req.body;
      
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            visitedCountry, 
            location,
            occupation,
            // viewedProfile: Math.floor(Math.random() * 10000),
            // impressions: Math.floor(Math.random() * 10000),
          });
          const savedUser = await newUser.save();
          res.status(201).json(savedUser);
          //201은 어떤 것이 생성된 경우 사용하는 status이고 
          //생성된 계정을 다시 res로 담아서 보낸다 

    }catch(err){
        res.status(500).json({ error: err.message });
    }
}; 

//로그인 기능 
export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "User does not exist. " });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      delete user.password;//사용자에게는 전달되지 않도록 한다 
      res.status(200).json({ token, user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };