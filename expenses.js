import Expenses_groups from './expenses_groups.js'

if(Meteor.isClient){
  
  // client code goes here
  Template.expenses_list.helpers({
    'expense': function(){
      expenses_group = Math.floor(Math.random() * 3);
      return Expenses_groups[expenses_group]
    }
  })
}

if(Meteor.isServer){
  // server code goes here
}

//Expenses.remove({})
