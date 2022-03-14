import { Router } from "express";
import { cinemaRouter } from "./routes/cinemaRoutes";
import { movieRouter } from "./routes/movieRoutes";

const router = Router();

router.use("/movie", movieRouter);
router.use("/cinema", cinemaRouter);

router.get("/", (request, response) => {
    return response.status(200).json({
        message: "Main Route",
    });
});

export { router };
