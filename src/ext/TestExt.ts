import { Test } from "../entity/Test";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class TestExt{
    static async query(){
        return await Test.query('select * from test')
    }
}