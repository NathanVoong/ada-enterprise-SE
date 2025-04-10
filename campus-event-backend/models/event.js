import { DataTypes } from "sequelize";

const Event = (sequelize) => {
    return sequelize.define("Event", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        organizerId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
    });
};

export default Event;
