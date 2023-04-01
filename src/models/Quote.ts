import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db";
// const sequelize = new Sequelize("sqlite::memory:");


export default class Quote extends Model {}
Quote.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        phrase: DataTypes.STRING,
        quotee: DataTypes.STRING
    },
    { sequelize, modelName: "quote" }
);

Quote.sync(); // Creates the table if it doesn't exist (and does nothing if it already exists)
