import React from  'react'; 
import './Todoitem.css';


const TodoItems = (props) => { 
    const {items , handelDelete} = props ;
    const length = items.length ; 
    
    const theItems = length ? (
        items.map(item => { 
            return (
                <div key={item.id}>
                    <span className = 'name'>{item.name}</span>
                    <span className = 'age'>{item.age}</span>
                    <span className='action icon' onClick = { () => handelDelete(item.id)}>&times;</span>
                </div>
            )
        })
    ) : ( 
        <p>There Is No Items To Show</p>
    )

    return (
        <div className = 'ListItems'> 
            <div>
                <span className = 'name title'>Name</span>
                <span className = 'age title'>Age</span>
                <span className = 'action title'>Action</span>
            </div>
           {theItems}
        </div>
    )
}


export default TodoItems ;