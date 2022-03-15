import { Request, Response } from "express";
import { getRepository, Repository, Unique } from "typeorm";
import { v4 } from "uuid";
import { Cinema } from "../entities/Cinema";

interface ICinemaRequest {
    name: string;
    city: string;
    state: string;
}

export class CinemaController {
    async create(request: Request, response: Response) {
        const cinemaRepository = getRepository(Cinema);

        const { name, city, state }: ICinemaRequest = request.body;

        console.log("Entrou");

        const cinemaExists = await cinemaRepository.findOne({
            where: { name: name, city: city },
        });

        if (cinemaExists) {
            return response.json({
                message: "Cinema already Exists",
            });
        } else {
            const cinema = cinemaRepository.create({
                name,
                city,
                state,
            });

            await cinemaRepository.save(cinema);
            return response.json(cinema);
        }
    }
    async findOne(request: Request, response: Response) {
        const cinemaRepository = getRepository(Cinema);

        const { id } = request.params;

        const cinema = await cinemaRepository.findOne({ where: { _id: id } });

        if (cinema) {
            return response.json(cinema);
        } else {
            return response.json({ message: "Cinema not found" });
        }
    }
    async findAll(request: Request, response: Response) {
        const cinemaRepository = getRepository(Cinema);

        const cinemas = await cinemaRepository.find();

        return response.json(cinemas);
    }
    async update(request: Request, response: Response) {
        const cinemaRepository = getRepository(Cinema);

        const { name, city, state }: ICinemaRequest = request.body;

        const { id } = request.params;

        const cinema = await cinemaRepository.update(id, { name, city, state });

        if (cinema.affected === 1) {
            const cinemaUpdated = await cinemaRepository.findOne({
                where: { _id: id },
            });

            return response.json(cinemaUpdated);
        } else {
            return response.json({ message: "Cinema not found" });
        }
    }
    async delete(request: Request, response: Response) {
        const cinemaRepository = getRepository(Cinema);

        const { id } = request.params;

        const cinema = await cinemaRepository.delete(id);

        if (cinema.affected === 1) {
            return response.json({ message: "Cinema removed successfully" });
        } else {
            return response.json({ message: "Cinema not found" });
        }
    }
}

export default new CinemaController();
