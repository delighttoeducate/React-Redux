let arr= [
    { id: 1, subject: "Welcome Task1", status: "active" },
    { id: 2, subject: "Welcome Task2", status: "completed" },
    { id: 3, subject: "Welcome Task3", status: "active" },
    { id: 4, subject: "Welcome Task4", status: "completed" },
    { id: 5, subject: "Welcome Task5", status: "active" }
  ]

  let indexVal= arr.findIndex(ea=>ea.id===4)
  console.log(indexVal);






  

  todoItems:this.state.todoItems.map(eItem=>{
    eItem.id===id?{...eItem,status:status}:eItem
  })