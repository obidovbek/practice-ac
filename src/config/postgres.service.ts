import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    database: 'test_database',
    username: 'test_user',
    password: '123456',
    host: '192.168.20.115',
    port:8498,
    dialect: 'postgres',
});
