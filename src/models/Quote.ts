import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db";
// const sequelize = new Sequelize("sqlite::memory:");

export default class Quote extends Model {}
Quote.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true
        },
        phrase: DataTypes.STRING,
        quotee: DataTypes.STRING
    },
    { sequelize, modelName: "quote" }
);
