import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
    return response.status(200).json({
        message: "Main Route",
    });
});

export { router };