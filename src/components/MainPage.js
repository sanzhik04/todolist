import React, {useState, useEffect} from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import axios from "axios"; 


function MainPage() {
    const [todos, setTodos] = useState([])
  
  
    useEffect(() => {
      axios.get("/api/todos/")
      .then((res)=>{
        setTodos(res.data)
      }).catch(()=>{
        //alert("Извините, у нас ошибка")
      })
  
    },[])
  
  
  
    return (
      <div>
        <Navbar bg="light" style={{marginBottom: "20px"}}>
          <Container>
              <Navbar.Brand href = "#">
                Todo Application sponsored by Jut.su
              </Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          <TodoForm />
          <TodoList  todos={todos}/>
        </Container>
        
      </div>
    );
  }
  
  export default MainPage;
