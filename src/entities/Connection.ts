import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn, UpdateQueryBuilder } from "typeorm";
import { User } from "./User";
import { v4 as uuid } from "uuid";

@Entity("connections")
class Connection {

    constructor(){
        if(!this.id ){
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    id: string;
    @Column()
    admin_id: string;
    @Column()
    socket_id: string;
    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;
    @Column()
    user_id: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}

export { Connection }