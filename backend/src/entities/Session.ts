import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Cinema } from "./Cinema";

@Entity("session")
export class Movie {
    @PrimaryGeneratedColumn("uuid")
    public _id: string;

    @ManyToMany(() => Movie, (movie) => movie._id, {
        cascade: true,
    })
    @JoinTable()
    movieId: string;

    @ManyToMany(() => Cinema, (cinema) => cinema._id, {
        cascade: true,
    })
    @JoinTable()
    cinemaId: string;

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
