import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {

    class ToDoList extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                tab: [],
                remains: 0,
                done: false,
            };
        }

        handleLogInBtnClick = () => {
            if (this.pwdInput.value !== "") {
                const newLi = this.pwdInput.value;

                this.setState({
                    tab: [...this.state.tab, newLi],
                    remains: this.state.remains + 1,
                })
            }
        };

        clickedLi = (event) => {
            if (event.target.classList.contains('is-done')) {
                event.target.classList.remove('is-done');
                this.setState({
                    remains: this.state.remains + 1,

                })
            } else {
                event.target.classList.add('is-done')
                this.setState({
                    remains: this.state.remains - 1,

                })
            }
        }

        render() {

            let newList = this.state.tab.map((elem, index) => {
                return <li onClick={this.clickedLi} key={index}>{elem}</li>
            });

            return <div>
                <div>
                    <h2>
                       {this.props.name}
                    </h2>
                </div>
                <input
                    type="text"
                    defaultValue=""
                    ref={elInput => this.pwdInput = elInput}
                />


                <button
                    onClick={this.handleLogInBtnClick}
                >
                    Add
                </button>
                <span
                    className="task-counter"> {this.state.remains} remaining out of {this.state.tab.length} tasks</span>
                <ul>

                    {newList}
                </ul>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>

            </div>;


        }

    }



    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
               toDoLists: [],

            };
        }


        handleAddNewList =()=>{
            if (this.someInput.value !== "") {
                const newLi = this.someInput.value;
                this.setState({
                    toDoLists: [...this.state.toDoLists, newLi],
                })

                this.someInput.value="";
            }
        }





        render() {

         let newList = this.state.toDoLists.map((elem, index) => {
                    return <ToDoList key={index} name={this.state.toDoLists[index]}/>
            });

            return <div>


                {newList}

                <input
                    type="text"
                    defaultValue=""
                    placeholder="name your list"
                    ref={elInput => this.someInput = elInput}
                />
                <button
                    onClick={this.handleAddNewList}
                >Add new to-do list</button>
            </div>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});