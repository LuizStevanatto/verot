import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Movie } from "../entities/Movie";

interface IMovieRequest {
    name: string;
    gender: string;
    duration: string;
    classification: string;
    launch: string;
    synopsis: string;
}

class MovieController {
    async create(request: Request, response: Response) {
        const movieRepository = getRepository(Movie);

        const {
            name,
            gender,
            duration,
            classification,
            launch,
            synopsis,
        }: IMovieRequest = request.body;

        const movieExists = await movieRepository.findOne({
            where: { name: name, launch: launch },
        });

        if (movieExists) {
            return response.json({
                message: "Movie already Exists",
            });
        } else {
            const movie = await movieRepository.save({
                name,
                gender,
                duration,
                classification,
                launch,
                synopsis,
            });
            return response.json(movie);
        }
    }

    async findOne(request: Request, response: Response) {
        const movieRepository = getRepository(Movie);

        const { id } = request.params;

        const movie = await movieRepository.findOne({ where: { _id: id } });

        if (movie) {
            return response.json(movie);
        } else {
            return response.json({ message: "Movie not found!" });
        }
    }
    async findAll(request: Request, response: Response) {
        const movieRepository = getRepository(Movie);

        const movies = await movieRepository.find();

        return response.json({ movies });
    }
    async update(request: Request, response: Response) {
        const movieRepository = getRepository(Movie);

        const {
            name,
            gender,
            duration,
            classification,
            launch,
            synopsis,
        }: IMovieRequest = request.body;

        const { id } = request.params;

        const movie = await movieRepository.update(id, {
            name,
            gender,
            duration,
            classification,
            launch,
            synopsis,
        });

        if (movie.affected === 1) {
            const movieUpdated = await movieRepository.findOne({
                where: { _id: id },
            });

            return response.json(movieUpdated);
        } else {
            return response.json({ message: "Movie Not Found" });
        }
    }
    async delete(request: Request, response: Response) {
        const movieRepository = getRepository(Movie);

        const { id } = request.params;

        const movie = await movieRepository.delete(id);

        if (movie.affected === 1) {
            return response.json({ message: "Movie removed successfully" });
        } else {
            return response.json({ message: "Movie not found" });
        }
    }
}

export default new MovieController();
