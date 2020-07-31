import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://postgres:12345@localhost:5432/todo");

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
