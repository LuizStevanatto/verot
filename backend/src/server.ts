import { app } from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

import "./database/connection";

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
