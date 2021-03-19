import { Test } from "../entity/Test";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class TestExt{
    static async findWithUser(userId: number) {
        return await Test.query('select t1.*,u.age from test t1 join user u on t1.user_id=u.id where u.id=?',[userId])
    }
    
    static async query(){
        return await Test.query('select * from test')
    }
}