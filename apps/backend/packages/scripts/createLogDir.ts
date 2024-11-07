import fs from "fs";
import { logger } from "../logger";

export const createLogDir = () => {
	const dir = `${__dirname}/../../logs`;

	fs.access(dir, (err) => {
		if (err) {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}

			logger.info("create Log File");
		}
	});
};
