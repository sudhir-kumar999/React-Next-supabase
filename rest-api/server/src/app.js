import express from "express";
import cors from "cors";
import route from "./routes/auth.routes.js";
const app = express();
import cookieParser from "cookie-parser";
import router from "./routes/todo.route.js";
import routers from "./routes/admin.route.js";

app.use(cookieParser());

// app.use(cors())
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true, // 🔥 cookies allow
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    statuscode: 200,
    success: true,
    message: "hello from node",
  });
});

app.use("/auth", route);
app.use("/todo", router);
app.use("/admin", routers);

export default app;
