const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a programming challenge
const programmingChallengeSchema = new Schema(
    {
        id: { 
            type: String, 
            required: true, 
        },
        Challenge: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        },
        difficulty: { 
            type: String, 
            required: true 
        },
        testCases: {
            type: Array, 
            required: true, 
        },
        solution: {
            type: Object, 
            required: true, 
        }
    }
);

// Create and export the model
module.exports = mongoose.model('ProgrammingChallenge', programmingChallengeSchema);
