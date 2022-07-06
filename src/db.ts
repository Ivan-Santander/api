import {DataSource} from 'typeorm'
import {Users} from './entities/Users'
import {Locations} from './entities/Locations'
import {Messages} from './entities/Messages'
import {Orders} from './entities/Orders'
import {Roles} from './entities/Roles'
import {Tracks} from './entities/Tracks'


//////DATABASE CONFIGURATION
//////REMEMBER IT IS NECESSARY TO CREATE THE DATABASE BEFORE PERFORMING THE FOLLOWING CONFIGURATION
//////FILL IN THE CONSTANTS WITH YOUR DATABASE CONFIGURATION

const HOSTDB = "localhost"  
const PORTDB = 5432 
const USERDB = "postgres" ///USERNAME ASSIGNED TO THE DATABASE
const PWDB = "admin"  ///PASSWORD ASSIGNED TO THE DATABASE
const DB = "deliv"   ///DATABASE NAME



export const AppDataSource = new DataSource({
    type: "postgres",
    host: HOSTDB,
    port: PORTDB,
    username: USERDB,
    password: PWDB,
    database: DB,
    entities: [Users,Locations,Messages,Orders,Roles,Tracks],
    logging: true,
    synchronize: true,
    // subscribers: [],
    // migrations: [],
})