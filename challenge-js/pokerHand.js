class PokerHand {
  constructor(hand) {
    this.hand = hand
  }

getRank(){
  // const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const storage = {}; 

  const cardTupels = this.hand.split(' ').map((el) => el.slice(0, 2)==='10'? el = [el.slice(0, 2), el.slice(2)] : el.split('')) 

  for(var i = 0; i < cardTupels.length; i++) {
    if(storage[cardTupels[i][0]] === undefined) {
      storage[cardTupels[i][0]] = 1
    } else {
      storage[cardTupels[i][0]]++
    }
  }

  const cardFrequency = Object.values(storage)
  const cardValue = Object.keys(storage)

  const isFlush = () => {
    const suits = this.hand.split(' ').map((el) => el.split('').pop())
    const compareItem = suits[0]
    return suits.filter((el) => el === compareItem).length === 5 ? true : false
  }

  const isStraight = () => {
    var values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
    const cards = this.hand.split(' ').map((el) => el = el.slice(0, 2)==='10'? el.slice(0, 2) : el.slice(0, 1)).sort((a, b) => values.indexOf(a) - values.indexOf(b)).map((el) => values.indexOf(el))
    // console.log(cards)

    var counter = 0; 
    for(var i = 1; i < cards.length; i++) {
      if(cards[i]-1 !== cards[i-1]) {
        counter++
      }
    }
    return counter === 0 ? true : false;
  }


  const allRoyal = () => {
     return cardValue.filter((el) => el === 'K' || el==='Q' || el==='A' || el==='J' || el==='10').length===5?true:false
  }

    if(isFlush() && allRoyal()) {
      return 'Royal Flush'
    } else if (isFlush() && isStraight()) {
      return 'Straight Flush'
    } else if (isFlush()) {
      return 'Flush'
    } else if (isStraight()) {
      return 'Straight'
    } else if(cardFrequency.includes(4)) {
      console.log(cardFrequency)
      return 'Four of a Kind'
    } else if (cardFrequency.includes(3) && !cardFrequency.includes(2)){
      return 'Three of a Kind'
    } else if (cardFrequency.toString() === '3,2' || cardFrequency.toString()==='2,3') {
      return 'Full House'
    } else if (cardFrequency.sort().toString() === '1,2,2') {
      return 'Two Pair'
    } else if (cardFrequency.sort().toString() === '1,1,1,2') {
      return 'One Pair'
    } else {
      return 'High Card'
     }
  }

}


module.exports = PokerHand;
