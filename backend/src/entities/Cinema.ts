import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
