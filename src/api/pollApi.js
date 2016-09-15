//This file is mocking a web API by hitting hard coded data.
var polls = require('./pollData').polls;
var _ = require('lodash');

var _generateId = function (poll) {
	let maxid = 0;
	polls.map(poll => {     
		if (poll.id > maxid) {
			maxid = poll.id;    
		}
	});

    return maxid + 1;
};

var _clone = function (item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var PollApi = {
    generateId: function (poll) {
        return _generateId(poll);
    },

    getAllPolls: function () {
        return _clone(polls);
    },

    getPollById: function (id) {
		var poll = _.find(polls, { id: id });
		return _clone(poll);
	},

	getAllPollsByUsername: function (username) {
        return _.filter(polls, { createdBy: username });

    },

	updateVoteByPollIdAndOption: function (id, option) {
		var poll = _.find(polls, { id: id });

		var currentOption = _.find(poll.options, { option: option });
		var newNumberOfVote = currentOption.votes + 1;
		var newOption = {
			option: option,
			votes: newNumberOfVote
		};
		var existingOptionIndex = _.indexOf(poll.options, _.find(poll.options, { option: option  }));
		poll.options.splice(existingOptionIndex, 1, newOption);
		poll.pollOptions = option; //add a properties to hold selected poll option
		return poll;
	},

	savePoll: function (poll) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the user to the DB via AJAX call...');

		if (poll.id) {
            var existingPollIndex = _.indexOf(polls, _.find(polls, { id: poll.id }));
            polls.splice(existingPollIndex, 1, poll);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new users in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			poll.id = _generateId(poll);
			polls.push(_clone(poll));
		}

		return poll;
	},

	deletePoll: function (id) {
		console.log('Pretend this just deleted the user from the DB via an AJAX call...');
		_.remove(polls, { id: id });
	}
}

module.exports = PollApi