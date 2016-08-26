import Cards from './cards'

function getRandomSubarray(arr) {
    const size = Math.floor(Math.random() * arr.length) + 1;
    var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}


if(Meteor.isClient){
  // client code goes here
  Template.cards.helpers({
    'card': function(){
      return getRandomSubarray(Cards)
    }
  })
}

if(Meteor.isServer){
  // server code goes here
}
