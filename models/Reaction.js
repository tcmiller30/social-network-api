const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        username: {
            type: String,
            required: 'Please enter a username.'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => createdAtVal.toLocaleString()
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = reactionSchema;