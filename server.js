const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const programmingChallengesSchema = require('./programmingChallengesSchema');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Route to get all programming challenges
app.get('/api/ziza/programming-challenges', async (req, res) => {
    try {
        const challenges = await programmingChallengesSchema.find();
        return res.status(201).json(challenges);
    } catch (error) {
        console.error('Error fetching challenges:', error);
        res.status(500).json({ error: 'An error occurred while fetching challenges' });
    }
});

// Route to get a programming challenge by ID
app.get('/api/ziza/programming-challenges/single/:id', async (req, res) => {
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

mongoose.connect(process.env.MONGODB_CONNECT_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server running...');
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });