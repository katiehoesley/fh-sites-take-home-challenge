var assert = require('assert');
var PokerHand = require('../pokerHand.js');


describe('Rank a Royal Flush', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('As Ks Qs Js 10s');
    assert.equal(hand.getRank(), 'Royal Flush');
  });
});


describe('Rank a Straight Flush', function() {
  it('Return straight flush when hand given', function() {
    var hand = new PokerHand('3h, 4h, 5h, 6h, 7h');
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});


describe('Four of a Kind', function() {
  it('Return four of a kind when hand given', function() {
    var hand = new PokerHand('As As As As 10s');
    assert.equal(hand.getRank(), 'Four of a Kind');
  });
});


describe('Rank Full House', function() {
  var hand = new PokerHand('Kh Ks Kc Qh Qh');

  it('Return full house when hand given', function() {
    assert.equal(hand.getRank(), 'Full House');
  });
});



describe('Rank A Flush', function() {
  var hand = new PokerHand('Kh Qh 6h 2h 9h');

  it('Return flush when hand given', function() {
    assert.equal(hand.getRank(), 'Flush');
  });
});



describe('Rank A Straight', function() {
  var hand = new PokerHand('10h 9h 8h 7h 6h');

  it('Return straight when hand given', function() {
    assert.equal(hand.getRank(), 'Straight');
  });
});



describe('Rank A Three Of A Kind', function() {
  var hand = new PokerHand('Kh Ks Kc 2h 9h');

  it('Return Three of a Kind when hand given', function() {
    assert.equal(hand.getRank(), 'Three of a Kind');
  });
});


describe('Rank Two Pair', function() {
  it('Return two pair when hand given', function() {
    var hand = new PokerHand('Kh Kc 3s 3h 2d');
    
    assert.equal(hand.getRank(), 'Two Pair');
  });
});


describe('Rank a Pair', function() {
  it('Return one pair when hand given', function() {
    var hand = new PokerHand('Ah As 10c 7d 6s');

    assert.equal(hand.getRank(), 'One Pair');
  });
});


describe('Rank High Card', function() {
  var hand = new PokerHand('Kh Qs Jc 2h 9h');

  it('Return high card when hand given', function() {
    assert.equal(hand.getRank(), 'High Card');
  });
});

