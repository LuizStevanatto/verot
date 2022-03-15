import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Cinema } from "./Cinema";
import { Movie } from "./Movie";

@Entity("session")
export class Session {
    @PrimaryGeneratedColumn("uuid")
    public _id: string;

    @Column()
    cinema_id: string;

    @Column()
    movie_id: string;

    @ManyToMany(() => Movie, (movie) => movie._id, {
        cascade: true,
    })
    @JoinColumn({ name: "movie_id" })
    movie: Movie;

    @ManyToMany(() => Cinema, (cinema) => cinema._id, {
        cascade: true,
    })
    @JoinColumn({ name: "cinema_id" })
    cinema: Cinema;

    @Column()
    weekDay: string;

    @Column()
    schedule: string;

    constructor() {
        if (!this._id) {
            this._id = uuidv4();
        }
    }
}
