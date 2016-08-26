if(Meteor.isClient){
  const shopaholic_expenses = [
    {
     type: "shopping",
     value: "1000€",
     date: "2016-08-24"
    },
    {
     type: "rent",
     value: "300€",
     date: "2016-08-25"
    }
  ]
  // client code goes here
  Template.expenses_list.helpers({
    'expense': function(){
      return shopaholic_expenses
    }
  })
}

if(Meteor.isServer){
  // server code goes here
}

//Expenses.remove({})
