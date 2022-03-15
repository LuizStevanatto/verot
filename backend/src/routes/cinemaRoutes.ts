import { Router } from "express";
import CinemaController from "../controllers/CinemaController";

const cinemaRouter = Router();

cinemaRouter.get("/", CinemaController.findAll);
cinemaRouter.get("/:id", CinemaController.findOne);
cinemaRouter.post("/", CinemaController.create);
cinemaRouter.put("/:id", CinemaController.update);
cinemaRouter.delete("/:id", CinemaController.delete);

export { cinemaRouter };
