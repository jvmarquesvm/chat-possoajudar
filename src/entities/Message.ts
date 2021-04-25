import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {

    constructor(){
        if (!this.id){
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    id: String;

    @Column()
    admin_id: String;

    @Column()
    text: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;
    @Column()
    user_id: string;
    
    @CreateDateColumn()
    created_at: Date;

}

export { Message }