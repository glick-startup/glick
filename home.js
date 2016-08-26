SuggestionCards = new Mongo.Collection('suggestions_cards');


QuestionCards = new Mongo.Collection('questions_cards');

FeedbackCards = new Mongo.Collection('feedback_cards');

LocationCards = new Mongo.Collection('locations_cards');
const locationCards = [
  {
    location: 'Starbucks Belém',
    text: 'Do not buy anything! It is above your possibilities!'
  },
  {
    location: 'Pingo Doce - Vilar dos Chãos',
    text: 'Feel free to buy a chocolate, or 2!'
  }
]
LocationCards.insert(locationCards);


Cards = new Mongo.Collection('cards');


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
