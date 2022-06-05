import express from "express";
import cors from "cors";

const port: string = process.env.PORT || "3000";

const app = express();

app.use(cors());
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());

app.listen(port, ()=> {
    console.log(`Server running on port ${port} for localhost`);
})
