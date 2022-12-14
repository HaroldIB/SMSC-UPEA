import express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import newRoutes from "./routes/news.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
//Permite procesar las respuestas en formato JSON
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);
app.use(newRoutes);
app.use(userRoutes);
app.use(express.static(join(__dirname, "../client/dist")));

app.listen(PORT);
console.log(`Servidor escuchando en el puerto: ${PORT}`);