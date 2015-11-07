var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { // change ready and unpaid
  res.render('index', { title: 'Puzzle With Me', ready: true, unpaid: true});
});

router.get('/start', function(req, res, next) {
  res.redirect('/');
});

router.get('/wait', function(req, res, next) {
  res.redirect('/');
});

router.get('/rules', function(req, res, next) {
  res.render('rules');
});

router.get('/play', function(req, res, next) {
  res.redirect('/');
});

router.get('/result', function(req, res, next) {
  // PSUEDOCODE
  // if (req.session.winner === req.session.id) {
  //   res.render('winner', {pot: game.pot});
  // } else {
  //   res.render('loser', {winner: game.winner, bet: req.session.bet});
  // }
  res.redirect('/');
});

module.exports = router;
