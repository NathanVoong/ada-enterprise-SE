import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Registration = sequelize.define("Registration", {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: "Users",
            key: "uuid",
        },
    },
    eventId: {
        type: DataTypes.UUID,
        references: {
            model: "Events",
            key: "uuid",
        },
    },
});

export default Registration;
