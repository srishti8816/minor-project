import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";

const app = express();
dotenv.config();

//middlewares
app.use(cors({
  origin: ["http://localhost:3000"]
}));
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

// connections
mongoose.set('strictQuery',true)

mongoose
  .connect(`mongodb+srv://adminn:Wl6TY1Nuf3zH1wNW@cluster0.qaraq4r.mongodb.net/?retryWrites=true&w=majority`
   )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));





//mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.lmtecrc.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://admin:<password>@cluster0.zoskfzh.mongodb.net/?retryWrites=true&w=majority
//${process.env.MONGODB_PASSWORD}
//43.35---vconnect ECONNREFUSED 127.0.0.1:5000
//1.05.00-post me error a rha h 