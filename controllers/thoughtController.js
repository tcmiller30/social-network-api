const Thought = require('../models/Thought');
const User = require('../models/User');

// Create the Controller
const thoughtController = {
    // get all thoughts
    async getAllThoughts(req, res) {
        try{
            const thoughtData = await Thought.find()
                .select('-__v')
                .sort({ _id: -1 });

            res.json(thoughtData);
        }
        catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // get a single thought by ID
    async getSingleThought(req, res) {
        try{
            const thoughtData = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');

            if(!thoughtData) {
                return res.status(404).json({ message: 'Thought not found.' });
            }
            res.json(thoughtData);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    // create a new thought
    // Request body should look like this...
    // {
    //     "thoughtText": "So it goes...",
    //     "username": "billyPilgrim",
    //     "userId": "5edff358a0fcb779aa7b118b"
    // }
    async createThought(req, res) {
        try{
            const thoughtData = await Thought.create(req.body);
            // add thought to User model's thoughts array field
            const userData = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thoughtData._id } },
                { new: true }
            );
            if(!userData) {
                return res.status(404).json({ message: 'User not found.' });
            }

            res.json(thoughtData);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    // update a thought by ID
    async updateThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { new: true, runValidators: true }
                );
            if(!thoughtData) {
                return res.status(404).json({ message: 'Thought not found.' });
            }
            res.json(thoughtData);
        }
        catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // delete a thought by ID
    async deleteThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndDelete({ _id: req.params.thoughtId })
            if(!thoughtData) {
                return res.status(404).json({ message: 'Thought not found.' });
            }
            // remove thought from User model's thoughts array field
            const userData = await User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: thoughtData._id } },
                { new: true }
            );
            if(!userData) {
                return res.status(404).json({ message: 'User not found.' });
            }
            res.json('Thought deleted successfully.');
        }
        catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Create a reaction
    // Request body should look like this...
    // {
    //     "reactionBody": "So it goes...",
    //     "username": "billyPilgrim"
    // }
    async createReaction(req, res) {
        try{
            const reactionData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body } },
                { new: true }
            );
            if(!reactionData) {
                return res.status(404).json({ message: 'Thought not found.' });
            }
            res.json(reactionData);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },

    // Delete a reaction
    async deleteReaction(req, res) {
        try{
            const reactionData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if(!reactionData) {
                return res.status(404).json({ message: 'Thought not found.' });
            }
            res.json(reactionData);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
};

module.exports = thoughtController;