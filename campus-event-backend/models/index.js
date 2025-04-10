import sequelize from "../database.js";
import User from "./user.js";
import Event from "./event.js";
import Registration from "./registration.js";

// Initialize models
const models = {
  User: User(sequelize),
  Event: Event(sequelize),
  Registration: Registration(sequelize),
};

// Define associations
models.Event.belongsTo(models.User, { foreignKey: "organizerId" });
models.Registration.belongsTo(models.User, { foreignKey: "userId" });
models.Registration.belongsTo(models.Event, { foreignKey: "eventId" });

export default models; // Export the models object
