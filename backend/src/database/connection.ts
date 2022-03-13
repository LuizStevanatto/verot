import { createConnection } from "typeorm";

try {
    createConnection().then(() =>
        console.log("Successfully connect with database!"),
    );
} catch (err) {
    throw err;
}
