import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("cinema")
export class Cinema {
    @PrimaryGeneratedColumn("uuid")
    public _id: string;

    @Column()
    name: string;

    @Column()
    city: string;

    @Column()
    state: string;

    constructor() {
        if (!this._id) {
            this._id = uuidv4();
        }
    }
}
