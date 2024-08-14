import "reflect-metadata";
import express  = require("express");
import { AppDataSource as DataSource} from "./data-source";
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

import userRoutes from "./routes/userRoutes";
import taskRoutes from "./routes/taskRoutes";

app.use("/api", userRoutes);
app.use("/api/tasks", taskRoutes);

DataSource.initialize().then(async () => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
}).catch((err) => console.log(err));



