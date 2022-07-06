import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, ManyToOne, Generated } from 'typeorm'
import { Users } from './Users'

@Entity()

export class Messages extends BaseEntity{
    @PrimaryColumn({type:"uuid"})
    @Generated("uuid") id: string;
    @Column()
    title:string
    @Column()
    observation:string
    @Column()
    response:boolean
    @Column()
    observationResponse:string
    @Column()
    type:number
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
    @ManyToOne(() => Users, (user) => user.name)
    user_patient: Users
    @ManyToOne(() => Users, (user) => user.name)
    user_delivery: Users
    @ManyToOne(() => Users, (user) => user.name)
    user_logistics: Users
}