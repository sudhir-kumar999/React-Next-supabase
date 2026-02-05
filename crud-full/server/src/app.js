import express from "express";
const app = express();
import cors from "cors";
import router from "./routes/todoRoutes.js";

// app.use(cookieParser());

// app.use(cors())
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true, // 🔥 cookies allow
  })
);
app.use(express.json());

app.use("/todo",router)

export default app;
