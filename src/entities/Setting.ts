import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"
@Entity("settings")
class Setting {

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }

    @PrimaryColumn({name:"id"})
    id: string;
    @Column({name:"username"})
    username: string;
    @Column({name:"chat"})
    chat: boolean;
    @UpdateDateColumn({name:"updated_at"})
    updated_at: Date;
    @CreateDateColumn({name:"created_at"})
    created_at: Date;
}

export { Setting }