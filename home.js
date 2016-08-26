Cards = new Mongo.Collection('cards')

if(Meteor.isClient){
  // client code goes here
  Template.cards.helpers({
    'card': function(){
      return Cards.find()
    }
  })
}

if(Meteor.isServer){
  // server code goes here
}
