import React  , { Component} from 'react';
import TodoItems from './component/Todoitems/Todoitem';
import  AddItem from './component/Additems/Additem';

class App extends Component { 

  state = { 
    items : [
      {id:1 , name : 'Mohamed' , age: 25},
      {id:2 , name : 'Ahmed' , age: 26},
      {id:3 , name : 'Abdelsalam' , age: 27}
    ]
  }
 
  handelDelete = (id) =>{ 
    let items  = this.state.items.filter(item => { 
      return item.id !== id ;
    })
    this.setState({items})
  }

  addItem = (item) => { 
    item.id = Math.random();
    let items = this.state.items ; 
    items.push(item) ; 
    this.setState({items})
  }

  render() { 
    return (
      <div className = 'App container'>
        <h1 className = 'text-center'>Todo List</h1>
          <TodoItems items ={this.state.items} handelDelete ={this.handelDelete}/>
          <AddItem  addItem ={this.addItem}/>
      </div>
    )
  }
}


export default App ;
