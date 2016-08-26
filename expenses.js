if(Meteor.isClient){
  const expenses_groups = [
    [
      {
       type: "shopping",
       text: "Zara",
       value: "-80€",
       active: true,
       date: "2016-08-25"
      },
      {
       type: "rent",
       text: "House rent",
       value: "-300€",
       active: true,
       date: "2016-08-24"
      },
      {
       type: "restaurant",
       text: "Burger King",
       value: "-6.70€",
       active: true,
       date: "2016-08-23"
      },
      {
       type: "general",
       text: "Fitness Hut",
       value: "40€",
       active: true,
       date: "2016-08-25"
      }
    ],
    [
      {
       type: "deposit",
       text: "Salary",
       value: "+1200€",
       active: true,
       date: "2016-08-25"
      },
      {
       type: "health",
       text: "Doctor appointment",
       value: "-60€",
       active: true,
       date: "2016-08-25"
      },
      {
       type: "education",
       text: "Book",
       value: "-22€",
       active: true,
       date: "2016-08-24"
      },
      {
       type: "shopping",
       text: "Sport-zone",
       value: "-235€",
       active: true,
       date: "2016-08-23"
      }
    ],
    [
      {
       type: "restaurant",
       text: "Honorato",
       value: "-8€",
       active: true,
       date: "2016-08-25"
      },
      {
       type: "general",
       text: "EDP",
       value: "-28€",
       active: true,
       date: "2016-08-25"
      },
      {
       type: "restaurant",
       text: "Capri",
       value: "-9.20€",
       active: true,
       date: "2016-08-24"
      },
      {
       type: "deposit",
       text: "MB",
       value: "+150€",
       active: true,
       date: "2016-08-23"
      }
    ]
  ]
  // client code goes here
  Template.expenses_list.helpers({
    'expense': function(){
      expenses_group = Math.floor(Math.random() * 3);
      console.log(expenses_groups[expenses_group])
      return expenses_groups[expenses_group]
    }
  })
}

if(Meteor.isServer){
  // server code goes here
}

//Expenses.remove({})
