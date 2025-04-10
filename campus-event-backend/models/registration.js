import { DataTypes } from "sequelize";

const Registration = (sequelize) => {
    return sequelize.define("Registration", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        eventId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    });
};

export default Registration;
