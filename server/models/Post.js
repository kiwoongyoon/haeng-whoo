import mongoose from "mongoose";
//나중에 추가할 것: 방문한 나라들(배열) 
const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
    
      type: Map,
      of: Boolean,
    },//누가 좋아요 눌렀는지 bolean으로 확인이 가능하게 해준다 
    comments: {
      type: Array,
      default: [],
    },//따로 댓글 모델을 만들어도 되고 아니면 게시글 안에 만들어도 된다 
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;