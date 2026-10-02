const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

// --------------------------------------------------
// CORS
// --------------------------------------------------
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

// --------------------------------------------------
// Body Parsers
// --------------------------------------------------
app.use(
  express.json({
    limit: "10kb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  }),
);

// --------------------------------------------------
// Health Check
// --------------------------------------------------
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "WebQenzo API is running",
  });
});

// --------------------------------------------------
// Contact Routes
// --------------------------------------------------
app.use("/api/contact", contactRoutes);

// --------------------------------------------------
// Global Error Handler
// --------------------------------------------------
app.use(errorMiddleware);

module.exports = app;