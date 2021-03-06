var User = require('../models/user_model');
var authController = require('../lib/auth');

module.exports = function(app, jwtauth) {
  app.post('/confirm', jwtauth, function(req, res) {
    var confirmation = req.body.confirmationCode;
    User.findOne({'_id': req.user._id, 'confirmationCode': confirmation}, function(err, user) {
      if (user === null) {
        return res.status(500).json({confirmed: false});
      }
      if (err) { return next(err); }
      user.confirmed = true;
      user.save(function(err) {
        if (err) { return next(err); }
        return res.status(202).json(user);
      });
    });
  });
  app.get('/confirm', jwtauth, function(req, res) {
    newJob.find({}, function(err, data) {
      if (err) return res.status(500).send(err);
      res.json(data);
    });
  });
};
