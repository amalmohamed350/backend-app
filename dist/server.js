"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const databases_1 = require("./config/databases");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Connect to DB
(0, databases_1.connectDB)();
// Sync models (creates tables automatically)
databases_1.sequelize.sync({ alter: true }).then(() => {
    console.log("✅ All models synchronized with DB");
});
// Routes
app.use("/api", user_routes_1.default);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
