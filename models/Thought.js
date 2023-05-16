const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'Please enter a thought.',
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: 'Please enter a username.',
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thoughts', thoughtSchema);

module.exports = Thought;