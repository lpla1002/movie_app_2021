import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor입니다.");
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };
  componentDidMount() {
    console.log('componentDidMount입니다.');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate입니다.');
  }
  render() {
    console.log('render입니다.');
    return (
      <div>
        <h1> 현재 값: {this.state.count} </h1>
        <button onClick={this.add}>더하기</button>
        <button onClick={this.minus}>빼기</button>
      </div>
    );
  }
}

export default App;
