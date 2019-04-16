class PokerHand {
  constructor(hand) {
    this.hand = hand
  }

getRank(){
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const storage = {}; 
  
  // const suits = {
  //   'd' : 1, 
  //   's' : 2, 
  //   'c' : 3, 
  //   'h' : 4
  // } 
  
  const cardTupels = this.hand.split(' ').map((el) => el.slice(0, 2)==='10'? el = [el.slice(0, 2), el.slice(2)] : el.split('')) 
  // const ranks = cardTupels.map((el) => el = [values.indexOf(el[0]), suits[el[1]]]) //use this for straight & straight flush
  // return ranks


  for(var i = 0; i < cardTupels.length; i++) {
    if(storage[cardTupels[i][0]] === undefined) {
      storage[cardTupels[i][0]] = 1
    } else {
      storage[cardTupels[i][0]] ++
    }
  }

  const cardFrequency = Object.values(storage)
  const cardValue = Object.keys(storage)

  let isFlush = () => {
    const cardTupels = this.hand.split(' ').map((el) => el.slice(0, 2)==='10'? el = [el.slice(0, 2), el.slice(2)] : el.split('')) 
    const values = cardTupels.map((el) => el = el[1]); 

    for(var i = 0; i < values.length; i++) {
    let allSame = 0; 
      if(values[i][1] !== values[i+1][1]) {
        allSame++
      }
      allSame === 0 ? isFlush = true : isFlush = false
    }
  }

  const isStraight = () => {
    const cardValues = this.hand.map((el) => el = values.indexOf(el)); 
    var counter = 0; 
    for(var i = 0; i < cardValues.length; i++) {
      if(cardValues[i] +1 !== cardValues[i+1]) {
        counter +=1
      }
      return counter === 0 ? isStraight = true : isStraight = false;
    }
  }
  

  const allRoyal = () => {
    return cardValue.join('').sort() === '10AJKQ' ? allRoyal = true : allRoyal = false; 
    
  }


    if(isFlush && allRoyal && !isStraight) {
      return 'Royal Flush'
    } else if (isFlush && isStraight && !allRoyal) {
      return 'Straight Flush'
    } else if (isFlush && !isStraight && !allRoyal) {
      return 'Flush'
    } else if (isStraight && !allRoyal && !isFlush) {
      return 'Straight'
    } else if(cardFrequency.includes(4)) {
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
