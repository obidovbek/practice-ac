import { SequelizeStorage, Umzug } from "umzug";
import { sequelize } from "./config/postgres.service";
const umzug = new Umzug({
    migrations: { glob: './src/migrations/*.ts' },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ 
        sequelize,
        modelName: 'users'
    }),
    logger: console,
});
export default umzug;