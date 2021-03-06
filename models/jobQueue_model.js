var mongoose = require('mongoose');
var QueueSchema = mongoose.Schema({
  jobDate: {
    type: String
  },
  parent: {
    type: String
  },
  parentName: {
    first: String,
    last: String
  },
  parentNumber: {
    type: String
  },
  optionsList: [],
  recurring: {
    type: Boolean
  },
  pickedConcierge: {
    type: String
  }
});

module.exports = mongoose.model('jobQueue', QueueSchema);
