# Programming Challenges API

Welcome to the **Programming Challenges API**! This API provides a simple and efficient way to interact with a collection of programming challenges, designed for developers, students, and educators who want to test and enhance their coding skills.

## Overview

The Programming Challenges API allows you to perform operations related to programming challenges, including retrieving a list of all challenges and fetching details of a specific challenge by its ID. This API is ideal for integrating programming challenges into applications, creating coding practice platforms, or simply accessing a curated list of coding problems for practice.

## Features

- **Retrieve All Challenges**: Access a comprehensive list of all available programming challenges.
- **Retrieve Challenge by ID**: Fetch detailed information about a specific challenge using its unique ID.

## API Endpoints

### 1. Get All Challenges

- **Endpoint**: `/api/ziza/programming-challenges`
- **Method**: `GET`
- **Description**: Retrieves a list of all programming challenges.
- **Response**: A JSON array containing all challenges with their respective details.

**Example Response:**

```json
[
    {
        "id": "260",
        "Challenge": "Maximal Rectangle",
        "description": "Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
        "difficulty": "Expert",
        "testCases": [
            {"input": "[[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]", "output": "6"},
            {"input": "[[0,0,0,0],[0,0,0,0],[0,0,0,0]]", "output": "0"}
        ],
        "solution": {
            "javascript": "function maximalRectangle(matrix) { ... }",
            "python": "def maximalRectangle(matrix): ...",
            "java": "import java.util.Stack; ...",
            "c++": "#include <vector> ... "
        }
    },
    ...
]
```

### 2. Get Challenge by ID
- **Endpoint**: `/api/ziza/programming-challenges/single/:id`
- **Method**: `GET`
- **Description**: Retrieves the details of a specific challenge by its unique ID.
- **Parameters**:
    - **id (path parameter)**: The unique identifier of the challenge.
- **Response**: A JSON object containing the details of the challenge with the specified ID.
Example Response:
```json
{
    "id": "260",
    "Challenge": "Maximal Rectangle",
    "description": "Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
    "difficulty": "Expert",
    "testCases": [
        {"input": "[[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]", "output": "6"},
        {"input": "[[0,0,0,0],[0,0,0,0],[0,0,0,0]]", "output": "0"}
    ],
    "solution": {
        "javascript": "function maximalRectangle(matrix) { ... }",
        "python": "def maximalRectangle(matrix): ...",
        "java": "import java.util.Stack; ...",
        "c++": "#include <vector> ... "
    }
}
```
### 3. Route to Get Limited and Difficulty-Based Programming Challenges (Randomized)
- **Endpoint**: `/api/ziza/programming-challenges/get/limited-difficulties/:limit/:difficulties`
- **Method**: `Get`
- **Description**: Retrieves a random selection of programming challenges based on specified difficulty levels and limits the number of challenges returned.
- **Parameters**:
    - limit (path parameter): The maximum number of challenges to return.
    - difficulties (path parameter): A comma-separated list of difficulty levels (e.g., Beginner,Intermediate).
- **Response**: A JSON array of programming challenges filtered by the provided difficulty levels, randomized, and limited by the specified number.
- **Error Responses**:
    - `400 Bad Request`: If the limit is not a positive integer or if any difficulty levels are invalid.
    - `500 Internal Server Error`: For any unexpected errors during processing.
  
Example Request:
```bash
GET /api/ziza/programming-challenges/get/limited-difficulties/5/Beginner,Intermediate
```
Example Response:
```json
[
    {
        "id": "101",
        "Challenge": "Two Sum",
        "description": "Find two numbers that add up to a specific target.",
        "difficulty": "Beginner",
        "testCases": [...],
        "solution": {...}
    },
    ...
]
```
### 4. Route to Get All Challenges Based on Difficulties
- **Endpoint**: `/api/ziza/programming-challenges/get/difficulty/:difficulties`
- **Method**: `GET`
- **Description**: Retrieves all programming challenges that match the specified difficulty levels.
- **Parameters**:
    - difficulties (path parameter): A comma-separated list of difficulty levels (e.g., Beginner,Expert).
- **Response**: A JSON array of programming challenges filtered by the provided difficulty levels.
- **Error Responses**:
    - `400 Bad Request`: If any difficulty levels are invalid.
    - `500 Internal Server Error`: For any unexpected errors during processing.
      
Example Request:
```bash
GET /api/ziza/programming-challenges/get/difficulty/Beginner,Expert
```
Example Response:
```json
[
    {
        "id": "202",
        "Challenge": "Longest Substring Without Repeating Characters",
        "description": "Find the length of the longest substring without repeating characters.",
        "difficulty": "Expert",
        "testCases": [...],
        "solution": {...}
    },
    ...
]
```
### 5. Route to Get a Single Random Programming Challenge
- **Endpoint**: `/api/ziza/programming-challenges/get/single/random`
- **Method**: `GET`
- **Description**: Retrieves a single random programming challenge from the database.
- **Response**: A JSON object representing a single random programming challenge.
- **Error Responses**:
    - `404 Not Found`: If no challenges are available in the database.
    - `500 Internal Server Error`: For any unexpected errors during processing.
Example Request:
```bash
GET /api/ziza/programming-challenges/get/single/random
```
Example Response:
```json
{
    "id": "303",
    "Challenge": "Median of Two Sorted Arrays",
    "description": "Find the median of two sorted arrays.",
    "difficulty": "Intermediate",
    "testCases": [...],
    "solution": {...}
}
```
<hr>

### Contributing
Contributions to the Programming Challenges API are welcome! If you have suggestions for improvements or new features, please DM me directly. I look forward to collaborating with you!

### License
This project is licensed under the MIT License.
