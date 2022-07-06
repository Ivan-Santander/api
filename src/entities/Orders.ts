import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, ManyToOne, Generated } from 'typeorm'
import { Users } from './Users'

@Entity()

export class Orders extends BaseEntity{
    @PrimaryColumn({type:"uuid"})
    @Generated("uuid") id: string;
    @Column()
    streetAddress:string
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
    @Column()
    order:string
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