import mongoose from "mongoose";
//mongodb에서 키 중복 에러가 나는 경우 몽고 사이트에 가서 indexes에서 중복키를 제거하기 
//이메일은 중복이 안 되도록 unique속성을 true로 설정하기
//방문한 나라들 볼 수 있도록 하기, 좋아요, 프로필 조회수 x
// visitedCountry:{
    //     type: Array, 
    //     default : [] , 
    // },

const UserSchema = new mongoose.Schema(
  {
    // username:{
    //   type:String, 
    // },
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    
    location: String,
    occupation: String,
 
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;