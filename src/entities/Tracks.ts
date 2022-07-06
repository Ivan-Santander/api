import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, ManyToOne, Generated } from 'typeorm'
import { Users } from './Users'

@Entity()

export class Tracks extends BaseEntity{
    @PrimaryColumn({type:"uuid"})
    @Generated("uuid") id: string;
    @Column()
    namestreetAddress:string
    @Column()
    latitude:number
    @Column()
    longitude:number
    @Column()
    accuracy:number
    @Column()
    altitudeAccuracy:number
    @Column()
    altitude:number
    @Column()
    speed:number
    @Column()
    heading:number
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