import express from "express";
import cors from "cors";
import classifyNumber from "./routes/classify-number";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());

// API ENDPOINTS
app.use(classifyNumber);

// Start server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
