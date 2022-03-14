import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("movie")
export class Movie {
    @PrimaryGeneratedColumn("uuid")
    public _id: string;

    @Column()
    name: string;

    @Column()
    gender: string;

    @Column()
    duration: string;

    @Column()
    classification: string;

    @Column()
    launch: string;

    @Column()
    synopsis: string;

    constructor() {
        if (!this._id) {
            this._id = uuidv4();
        }
    }
}
