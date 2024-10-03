import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
//configure the dotenv
dotenv.config();
//datbasdse connect
connectDb();
const app = express();
app.use(cors());
//middle ware

app.use(express.json());
app.use(morgan("dev"));
//rest object
const PORT = 8080;
app.listen(PORT, () =>
  console.log(`app listening on port ${PORT}!`.bgCyan.blue)
);
//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.get("/", (req, res) => {
  res.send("<h1>Welcome to MERN stack project</h1>");
});
