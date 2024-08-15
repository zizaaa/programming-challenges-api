const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const programmingChallengesSchema = require('./programmingChallengesSchema');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const invalidDifficulties = (difficulties) =>{
    const validDifficulties = ['Beginner', 'Intermediate', 'Expert'];
    const invalidDifficulties = difficulties.filter(difficulty => !validDifficulties.includes(difficulty));

    return invalidDifficulties;
}

// Route to get limited and difficulty-based programming challenges, randomized
app.get('/api/ziza/programming-challenges/get/limited-difficulties/:limit/:difficulties', async (req, res) => {
    try {
        // Extract limit and difficulties from request parameters
        const limit = parseInt(req.params.limit, 10);
        const difficulties = req.params.difficulties.split(',');

        // Validate limit
        if (isNaN(limit) || limit <= 0) {
            return res.status(400).json({ error: 'Invalid limit value' });
        }

        //validate
        if (invalidDifficulties(difficulties).length > 0) {
            return res.status(400).json({ error: `Invalid difficulty values: ${invalidDifficulties(difficulties).join(', ')}` });
        }
        // Aggregate pipeline to filter by difficulty, randomize, and limit results
        const challenges = await programmingChallengesSchema.aggregate([
            {
                $match: { difficulty: { $in: difficulties } } // Filter by difficulty
            },
            {
                $sample: { size: limit } // Randomize and limit results
            }
        ]);

        // Send the result
        res.status(200).json(challenges);
    } catch (error) {
        console.error('Error fetching challenges:', error);
        res.status(500).json({ error: 'An error occurred while fetching challenges' });
    }
});

// Route to get all challenges based on difficulties
// random
app.get('/api/ziza/programming-challenges/get/difficulty/:difficulties', async (req, res) => {
    try {
        // Extract difficulties from the request parameters and split into an array
        const difficulties = req.params.difficulties.split(',');

        // Validate difficulty values
        if (invalidDifficulties(difficulties).length > 0) {
            return res.status(400).json({ error: `Invalid difficulty values: ${invalidDifficulties(difficulties).join(', ')}` });
        }

        // Aggregate pipeline to filter by difficulty
        const challenges = await programmingChallengesSchema.aggregate([
            {
                $match: { difficulty: { $in: difficulties } } // Filter by difficulty
            }
        ]);

        // Send the result
        res.status(200).json(challenges);
    } catch (error) {
        console.error('Error fetching challenges:', error);
        res.status(500).json({ error: 'An error occurred while fetching challenges' });
    }
});

// Route to get a single random programming challenge
app.get('/api/ziza/programming-challenges/get/single/random', async (req, res) => {
    try {
        // Aggregate pipeline to randomize and limit the results to one challenge
        const challenge = await programmingChallengesSchema.aggregate([
            {
                $sample: { size: 1 } // Randomize and limit results to one
            }
        ]);

        // Check if a challenge was found
        if (challenge.length === 0) {
            return res.status(404).json({ error: 'No challenges found' });
        }

        // Send the result
        res.status(200).json(challenge[0]);
    } catch (error) {
        console.error('Error fetching challenge:', error);
        res.status(500).json({ error: 'An error occurred while fetching the challenge' });
    }
});

// Route to get all programming challenges
app.get('/api/ziza/programming-challenges/get/all', async (req, res) => {
    try {
        const challenges = await programmingChallengesSchema.find();
        return res.status(201).json(challenges);
    } catch (error) {
        console.error('Error fetching challenges:', error);
        res.status(500).json({ error: 'An error occurred while fetching challenges' });
    }
});

// Route to get a programming challenge by ID
app.get('/api/ziza/programming-challenges/get/single/:id', async (req, res) => {
    try {
        const challengeId = req.params.id;
        const challenge = await programmingChallengesSchema.findOne({ id: challengeId });

        if (!challenge) {
            return res.status(404).json({ error: 'Challenge not found' });
        }

        return res.status(201).json(challenge);
    } catch (error) {
        console.error('Error fetching challenge:', error);
        res.status(500).json({ error: 'An error occurred while fetching the challenge' });
    }
});

const PORT = process.env.PORT || 5000;

// Define a function to connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URI, {
            maxPoolSize: 10 // Adjust based on your needs
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit the process if unable to connect
    }
};

// Call the function to connect to MongoDB
connectToDatabase();

// Start the server after successful database connection
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});