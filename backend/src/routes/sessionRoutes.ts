import { Router } from "express";
import SessionController from "../controllers/SessionController";

const sessionrouter = Router();

sessionrouter.get("/", SessionController.findAll);
sessionrouter.get("/:id", SessionController.findOne);
sessionrouter.post("/", SessionController.create);
sessionrouter.put("/:id", SessionController.update);
sessionrouter.delete("/:id", SessionController.delete);

export { sessionrouter };