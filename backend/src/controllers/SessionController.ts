import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Cinema } from "../entities/Cinema";
import { Movie } from "../entities/Movie";
import { Session } from "../entities/Session";

interface ISessionRequest {
    cinema_id: string;
    movie_id: string;
    weekDay: string;
    schedule: string;
}

export class SessionController {
    async create(request: Request, response: Response) {
        const sessionRepository = getRepository(Session);
        const movieRepository = getRepository(Movie);
        const cinemaRepository = getRepository(Cinema);

        const { cinema_id, movie_id, weekDay, schedule }: ISessionRequest =
            request.body;

        const movieExists = await movieRepository.findOne({
            where: { _id: movie_id },
        });

        if (!movieExists)
            return response.json({ message: "Movie does not exists" });

        const cinemaExists = await cinemaRepository.findOne({
            where: { _id: cinema_id },
        });

        if (!cinemaExists)
            return response.json({ message: "Cinema does not exists" });

        const sessionExists = await sessionRepository.findOne({
            where: {
                cinema_id: cinema_id,
                movie_id: movie_id,
                weekDay: weekDay,
                schedule: schedule,
            },
        });

        if (sessionExists)
            return response.json({ message: "Session already exists" });

        const session = await sessionRepository.save({
            cinema_id: cinema_id,
            movie_id: movie_id,
            weekDay,
            schedule,
        });

        return response.json(session);
    }
    async findOne(request: Request, response: Response) {
        const sessionRepository = getRepository(Session);

        const { id } = request.params;

        const session = await sessionRepository.findOne({ where: { _id: id } });

        if (session) {
            return response.json(session);
        } else {
            return response.json({ message: "Session not found!" });
        }
    }
    async findAll(request: Request, response: Response) {
        const sessionRepository = getRepository(Session);

        const sessions = await sessionRepository.find();

        return response.json({ sessions });
    }
    async update(request: Request, response: Response) {
        const sessionRepository = getRepository(Session);

        const { cinema_id, movie_id, weekDay, schedule }: ISessionRequest =
            request.body;

        const { id } = request.params;

        const session = await sessionRepository.update(id, {
            cinema_id,
            movie_id,
            weekDay,
            schedule,
        });

        if (session.affected === 1) {
            const sessionUpdated = await sessionRepository.findOne({
                where: { _id: id },
            });

            return response.json(sessionUpdated);
        } else {
            return response.json({ message: "Session not found" });
        }
    }
    async delete(request: Request, response: Response) {
        const sessionRepository = getRepository(Session);

        const { id } = request.params;

        const session = await sessionRepository.delete(id);

        if (session.affected === 1) {
            return response.json({ message: "Session removed successfully" });
        } else {
            return response.json({ message: "Session not found" });
        }
    }
}

export default new SessionController();
