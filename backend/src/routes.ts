import { Router } from "express";
import { cinemaRouter } from "./routes/cinemaRoutes";
import { movieRouter } from "./routes/movieRoutes";
import { sessionrouter } from "./routes/sessionRoutes";

const router = Router();

router.use("/movie", movieRouter);
router.use("/cinema", cinemaRouter);
router.use("/session", sessionrouter);

router.get("/", (request, response) => {
    return response.status(200).json({
        message: "Main Route",
    });
});

export { router };
