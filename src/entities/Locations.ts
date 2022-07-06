import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, ManyToOne, Generated } from 'typeorm'
import { Users } from './Users'

@Entity()

export class Locations extends BaseEntity{
    @PrimaryColumn({type:"uuid"})
    @Generated("uuid") id: string;
    @Column()
    street_address:string
    @Column()
    latitude:number
    @Column()
    longitude:number
    @Column()
    accuracy:number
    @Column()
    altitude_accuracy:number
    @Column()
    speed:number
    @Column()
    heading:number
    @Column()
    altitude:number
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
    @ManyToOne(() => Users, (user) => user.name)
    user: Users
}