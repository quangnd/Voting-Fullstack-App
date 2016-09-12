//This file is mocking a web API by hitting hard coded data.
var polls = require('./pollData').polls;
var _ = require('lodash');

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var PollApi = {
    getAllPolls: function() {
        return _clone(polls);
    }
}

module.exports = PollApi