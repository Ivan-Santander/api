import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, OneToOne, JoinColumn, Generated } from 'typeorm'
import { Users } from './Users'

@Entity()

export class Roles extends BaseEntity{
    @PrimaryColumn({type:"uuid"})
    @Generated("uuid") id: string
    @Column()
    role_user:boolean
    @Column()
    admin:boolean
    @Column()
    logistics:boolean
    @Column()
    patient:boolean
    @Column()
    delivery:boolean
    @Column()
    technical:boolean
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
    @OneToOne(() => Users)
    @JoinColumn()
    user: Users | null
}