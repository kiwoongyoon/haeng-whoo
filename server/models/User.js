import mongoose from "mongoose";
//이메일은 중복이 안 되도록 unique속성을 true로 설정하기
//방문한 나라들 볼 수 있도록 하기, 좋아요, 프로필 조회수 x


const UserSchema = new mongoose.Schema(
  {
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
    visitedCountry:{
        type: Array, 
        default : [] , 
    },
    location: String,
    occupation: String,
 
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;