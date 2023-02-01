import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js"; 
import postRoutes from "./routes/posts.js"; 
import {register} from "./controllers/auth.js"; 
import {createPost} from "./controllers/posts.js"; //게시글 올릴 떄 사진이 필요해서 index.js에서 처리하기 
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";
/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });

  //routes 
  app.use("/auth", authRoutes) ; 
  app.use("/users", userRoutes);
  app.use("/posts", postRoutes);
  
  app.post("/auth/register", upload.single("picture"), register);
  app.post("/posts", verifyToken,upload.single("picture"), createPost);

  /* MONGOOSE SETUP */
//   Mongoose: the `strictQuery` option will be switched back to `false` by default 
// in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    User.insertMany(users);
    Post.insertMany(posts);
   
  })
  .catch((error) => console.log(`${error} did not connect`));