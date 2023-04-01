import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://tlcwtqrl:eu8KnhIiv4pv-gUYYGeex4kIuZXBzLp4@raja.db.elephantsql.com/tlcwtqrl");

const connect = () => {
    try {
        sequelize.authenticate().then(() => {
            console.log("Postgres connection has been established successfully.");
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export { sequelize, connect };
