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
### Getting Started
To get started with the Programming Challenges API, follow these steps:
1. Clone the Repository
 ```bash
 git clone https://github.com/your-username/programming-challenges-api.git
 cd programming-challenges-api
 ```

2. Install Dependencies
   <br>
  Install the required Node.js packages:
  ```bash
  npm install
   ```
3. Set Up Environment Variables
   <br>
Create a .env file in the root directory and add the following configuration:
  ```bash
  npm install
   ```
4. Start the Server
   <br>
Run the server with:
  ```bash
  npm install
   ```
### Contributing
Contributions to the Programming Challenges API are welcome! If you have suggestions for improvements or new features, feel free to submit a pull request or open an issue.

### License
This project is licensed under the MIT License.
