const User = require('../models/User');
const Thought = require('../models/Thought');

// Constuct the Controller
const userController = {
    // Get all Users
    async getAllUsers(req, res) {
        try{
            const userData = await User.find()
                .select('-__v')

            res.json(userData);
        }
        catch(err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // Get a single User by ID
    async getSingleUser(req, res) {
        try{
            const userData = await User.findOne({ _id: req.params.id })
                .select('-__v')
                .populate('friends')
                // .populate('thoughts')

            if(!userData) {
                return res.status(404).json({ message: 'User not found.' });
            }
            res.json(userData);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    
    // Create a new User
    async createUser(req, res) {
        try{
            // Request body should look like this...
            // {
                // "username": "billyPilgrim",
                // "email": "pooteeweet@gmail.com"
            // }
            const userData = await User.create(req.body);
            res.json(userData);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },

    // Update a User by ID
    async updateUser(req, res) {
        try{
            const userData = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body, },
                { new: true, runValidators: true }
            );
            if(!userData) {
                return res.status(404).json({ message: 'User not found.' });
            }
            res.json(userData);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },

    // Delete a User by ID
    async deleteUser(req, res) {
        try{
            const userData = await User.findOneAndDelete({ _id: req.params.id });
            if(!userData) {
                return res.status(500).json({ message: 'User not found.' });
            }
            res.json('User deleted successfully.');
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },

    // Add a friend to a User's friend list
    async addFriend(req, res) {
        try{
            const userData = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $addToSet: { friends: req.params.friendId } },
                { new: true, runValidators: true });

            if(!userData) {
                return res.status(404).json({ message: 'User not found.' });
            }
            res.json(userData);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Remove a friend from a User's friend list
    async removeFriend(req, res) {
        try{
            const userData = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $pull: { friends: req.params.friendId } },
                { new: true, runValidators: true });
            if(!userData) {
                return res.status(404).json({ message: 'User not found.' });
            }
            res.json(userData);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}

module.exports = userController;


