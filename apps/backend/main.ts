/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { httpLogger, logger } from "./packages/logger";
import { createLogDir } from "./packages/scripts";

//TODO: Make @ aliase

const app = express();

export const prisma = new PrismaClient();

dotenv.config();

const PORT = process.env.BACKEND_PORT || 3005;

console.log(process.env.DATABASE_URL);

app.use(cors());
app.use(express.json());
app.use(httpLogger);

const startServer = () => {
	try {
		createLogDir();
		app.listen(PORT, () => {
			logger.info(`Server listening port:${PORT}`);
		});
	} catch (error) {
		logger.error(error);
	}
};

startServer();
