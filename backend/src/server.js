const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Mount User Routes
app.use(userRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("🚀 Welcome to HireSphere AI Backend");
});

// About Route
app.get("/about", (req, res) => {
    res.send("About HireSphere AI");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});