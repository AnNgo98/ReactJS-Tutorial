import React from 'react';
import logo from './logo.svg';
import './App.css'
import TodoItem from './components/TodoItem';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <TodoItem title="đi đá banh"></TodoItem>
//       </header>
//     </div>
//   );
// }
// function App() {
//   constructor(){
//     super();
//     this.TodoItem=[
//       "Đi đá banh",
//       "Đi đá bóng"
//     ]
//   }
//   return(
//     <div className="App">
//     {
//       this.TodoItem.map((item) => <TodoItem title={item}></TodoItem>)
//     }
//     </div>
//   )
// }
class App extends React.Component{
  constructor(){
    super();
    this.todoItem = [
      {title: "Đi đá banh", isComplete: true},
      {title: "Đi đá bóng"}
    ]
  }
  onItemClick(){
    this.setState({

    });
  }
  render(){
      return(
        <div className="App">
          {/* sử dụng biểu thứ && để conditional(điều kiện) */}
          {
            // mapp list todoItem -> item
            this.todoItem.length > 0 && this.todoItem.map((item,index)=> 
            <TodoItem key={index} item={item} onClick={this.onItemClick}></TodoItem>)
          }
          {
             this.todoItem.length === 0 && 'Nothing here'
          }
        </div>
      )
  }
}

export default App;
