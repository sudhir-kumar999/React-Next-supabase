import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import router from "./src/routes/userRoutes.js";
import routing from "./src/routes/prodRoutes.js";
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/auth", router);
app.use("/product", routing);

export default app;
