import Cards from './cards'

if(Meteor.isClient){
  var numberOfCards = Math.floor(Math.random() * Cards.length) + 1;

  // client code goes here
  Template.cards.helpers({
    'card': function(){
      return Cards
    }
  })
}

if(Meteor.isServer){
  // server code goes here
}
