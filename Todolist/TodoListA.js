// import React, { Component } from 'react'
// import "./Todolist.css"


// export default class TodoListA extends Component {


//     state = {
//         input:"",
//         items:[]
//     };

//     handleChange = Event => {

//         this.setState({
//             input:Event.target.value

//         }); 
//     }

//     storeItems = (Event) => {

//         Event.preventDefault();
//         const {input} = this.state;
//         const allitems = this.state.items;

//         allitems.push(input);
//         this.setState({
//             items:allitems,
//             input: ""
//         });
//     }

//     deleteItem = (index) => {
//       const updatedItems = [...this.state.items];
//       updatedItems.splice(index, 1);
//       this.setState({
//         items: updatedItems,
//       });
//     };
    

//     editItem = (index) => {
//       const { items } = this.state;
//       const itemToEdit = items[index];
  
//       this.setState({
//         input: itemToEdit,
//         editIndex: index,
//       });
//     }



//   render() {
//     const { input,items } = this.state;
    

//     return (
//       <div className='container'>
//         <h1>Todo App</h1>
//         <form onSubmit={this.storeItems}>
//         <input type="text" value={input} onChange={this.handleChange} placeholder='Type Here...'/>
//         </form>
        
//         <ul>
//           {items.map((data,index) => (

//             <li key={index}><p>{data}</p> <i className="fa-solid fa-trash" onClick={() => this.deleteItem(index)} role="button" tabIndex={0}></i><i className="fa-solid fa-edit" onClick={() => this.editItem(index)}></i></li>
            
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }




import React, { useState } from 'react';
import './Todolist.css';

const TodoListA = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const storeItems = (event) => {
    event.preventDefault();
    const allItems = [...items];

    if (editIndex !== null) {
      allItems[editIndex] = input;
      setEditIndex(null);
    } else {
      allItems.push(input);
    }

    setItems(allItems);
    setInput('');
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const editItem = (index) => {
    const itemToEdit = items[index];
    setInput(itemToEdit);
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={storeItems}>
        <input type="text" value={input} onChange={handleChange} placeholder="Type Here..." />
      </form>

      <ul>
        {items.map((data, index) => (
          <li key={index}>
            <p>{data}</p>
            <i className="fa-solid fa-trash" onClick={() => deleteItem(index)} role="button" tabIndex={0}></i>
            <i className="fa-solid fa-edit" onClick={() => editItem(index)}></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListA;
