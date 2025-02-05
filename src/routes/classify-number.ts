import { Request, Response, RequestHandler } from "express";
import { Router } from "express";
import axios from "axios";
import { isPrime, isArmstrong, isPerfect, getDigitSum } from "../utils/func";

const router = Router();

const classifyNumber: RequestHandler = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { number } = req.query;

	// Input validation
	if (!number || isNaN(Number(number))) {
		res.status(400).json({
			number: number || "null",
			error: true,
		});
		return;
	}

	const num = Number(number);

	try {
		// Fetch fun fact from Numbers API
		const response = await axios.get<{ text: string }>(
			`http://numbersapi.com/${num}/math?json`
		);
		const funFact = response.data.text;

		// Build response
		const responseData = {
			number: num,
			is_prime: isPrime(num),
			is_perfect: isPerfect(num),
			properties: [
				isArmstrong(num) ? "armstrong" : null,
				num % 2 === 0 ? "even" : "odd",
			].filter(Boolean) as string[], // Filter out null values
			digit_sum: getDigitSum(num),
			fun_fact: funFact,
		};

		res.status(200).json(responseData);
	} catch (error) {
		console.error("Error fetching fun fact:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

router.get("/api/classify-number", classifyNumber);

export default router;
