import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, OneToMany, Generated, JoinColumn } from 'typeorm'
import { Locations } from './Locations'
import { Messages } from './Messages'
import { Orders } from './Orders'
import { Tracks } from './Tracks'

@Entity()

export class Users extends BaseEntity{
    @PrimaryColumn({type:"uuid"})
    @Generated("uuid") id: string;
    @Column()
    name:string
    @Column()
    lastname:string
    @Column()
    type_document:string
    @Column()
    document:number
    @Column()
    indicative:string
    @Column({type: "float", width: 200})
    phone:number
    @Column()
    status:number
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
    @OneToMany(() => Locations, (location) => location.id)
    location: Locations[]
    @OneToMany(() => Orders, (order) => order.id)
    order: Orders[]
    @OneToMany(() => Messages, (message) => message.id)
    message: Messages[]
    @OneToMany(() => Tracks, (track) => track.id)
    track: Messages[]
}