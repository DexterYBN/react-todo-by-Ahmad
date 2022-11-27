import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Todos from './components/Todos';

const App = () => {

  const [todos, setTodos] = useState([
    // { text: "Купить бананы", done: false },
    // { text: "Продать бананы", done: false },
    // { text: "Выучить бананы", done: false }
  ])

  const [text, setText] = useState("")

  const deleteTodo = (i) => { // функция для удаления дела из списка. Далее привязываем эту функцию на кнопку
    setTodos(todos.filter((item, index) => {
      if (index === i) {
        return false
      } return true
    }))
  }

  const makeDone = (i) => { // функция отметки звездочки. Далее привязываем эту функцию на кнопку
    const newTodos = todos.map((item, index) => {
      if (i === index) {
        return {
          ...item, // копируем todos
          done: !item.done // ставим значение done на противоположное
        }
      }
      return item // возвращаем массив
    })
    setTodos(newTodos)
  }

  const addTodo = () => { // функция для добавления дел в список. Нужно доделать
    setTodos([
      {
        text: text,
        done: false
      },
      ...todos]) // тут сделали так чтобы добавляемые дела были в начале тудушки

    setText('') // устанавливаем пустое значение

  }



  return (
    <>
      <div className='app'>
        <Header />
        <Form text={text} setText={setText} addTodo={addTodo} />
        <Todos todos={todos} makeDone={makeDone} deleteTodo={deleteTodo} />
      </div>
    </>
  );
};

export default App;