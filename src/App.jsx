import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import FormInput from './components/FormInput';
import PhoneBook from './components/PhoneBook';
import Filter from './components/Filter';
import TodoList from './components/TodoList/TodoList';
import TodoEditor from './components/TodoEditor';
import FormInputHook from './components/FormInputHook';
// import TodoEditor from './components/TodoEditor';
//Телефонная книга
// import Statistic from './components/Statistic';
// import Controls from './components/Controls';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
// import contactList from './components/contactList';
// import initialrises from './rises.json';
import Rises from './components/Rises';
import Searchbar from './components/Searchbar';
class App extends Component {
  state = {
    rises: [],

    filter: '',
    todos: [],
    filterTodos: '',
  };
  // contact.id = nanoid()
  deleteRise = riseId => {
    this.setState(prevState => ({
      rises: prevState.rises.filter(rise => rise.id !== riseId),
    }));
  };

  formSubmit = rise => {
    console.log(rise);
    this.setState(({ rises }) => ({
      rises: [rise, ...rises],
    }));

    // console.log(this.rises);
  };
  handleInputFilterChange = filter => {
    this.setState({ filter: filter.currentTarget.value });
    console.log(filter);
  };

  getVisiblerises = () => {
    const { filterTodos, rises } = this.state;
    const normalizedFilter = filterTodos.toLowerCase();

    return rises.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  // deleteRise = id => {
  //   this.setState(prevState => ({
  //     rises: prevState.rises.filter(contact => contact.id !== id),
  //   }));
  // };
  // componentDidMount() {
  //   const rises = localStorage.getItem('rises');
  //   const parcedrises = JSON.parse(rises);
  //   if (parcedrises) {
  //     this.setState({ rises: parcedrises });
  //   }
  getVisibleTodos = () => {
    const { filterTodos, todos } = this.state;
    const normalizedFilter = filterTodos.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  // }
  componentDidMount() {
    const rises = localStorage.getItem('rises');
    const parsedRises = JSON.parse(rises);
    if (parsedRises) {
      this.setState({ rises: parsedRises });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.rises !== prevState.rises) {
      localStorage.setItem('rises', JSON.stringify(this.state.rises));
    }
  }
  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };
  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };
  render() {
    const { todos, filterTodos } = this.state;

    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <h1>ant</h1>
        {/* <Searchbar onSubmit={this.formSubmit} /> */}
        <FormInput onSubmit={this.formSubmit} />
        <Rises risesList={this.state.rises} onDeleteRises={this.deleteRise} />
        <TodoEditor onSubmit={this.addTodo} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <FormInputHook />
      </>
    );
  }
}

export default App;
