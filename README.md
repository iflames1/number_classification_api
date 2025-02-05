# Number Classification API

This API classifies a number and returns its mathematical properties along with a fun fact.

## API Documentation

**Endpoint**: `GET /api/classify-number?number=<number>`

**Example Request**:
GET /api/classify-number?number=371

**Example Response (200 OK)**:

```json
{
	"number": 371,
	"is_prime": false,
	"is_perfect": false,
	"properties": ["armstrong", "odd"],
	"digit_sum": 11,
	"fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

**Example Response (400 Bad Request):**

```json
{
	"number": "alphabet",
	"error": true
}
```

## Local Setup

### 1. Clone the repository:

```bash
git clone https://github.com/iflames1/number_classification_api
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the server:

```bash
npm run dev
```

## Deployment

Deployed on [Render.com](render.com) at:
https://your-api-url.onrender.com

[Looking for Node.js developers? Hire through HNG](https://hng.tech/hire/nodejs-developers)

---

### 5. Deployment

Deploy the API to a platform like:

-   **Render.com**
-   **Heroku**
-   **Vercel**
-   **AWS Elastic Beanstalk**

For Render.com, create a `render.yaml` file:

```yaml
services:
    - type: web
      name: number-classification-api
      env: node
      buildCommand: npm install && npm run build
      startCommand: npm start
```

### 6. Testing

Test the API locally:

```bash
npm run dev
```

Then use `curl` or Postman to test:

```bash
curl http://localhost:3000/api/classify-number?number=371
```

## Key Features

1. **Input Validation:** Handles invalid inputs gracefully.

2. **Dynamic Fun Fact:** Fetches fun facts from the Numbers API.

3. **Mathematical Properties:**

    - Checks for prime, perfect, and Armstrong numbers.

    - Calculates digit sum.

4. **CORS Handling:** Allows cross-origin requests.

5. **Error Handling:** Catches and logs errors.

### Example Responses

**Valid Input:**

```json
{
	"number": 28,
	"is_prime": false,
	"is_perfect": true,
	"properties": ["even"],
	"digit_sum": 10,
	"fun_fact": "28 is the second perfect number."
}
```

**Invalid Input:**

```json
{
	"number": "alphabet",
	"error": true
}
```
