import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Square label="This is a big square" cssClass="bigSquare" />
        <Square label="This is a middle square" cssClass="middleSquare" />
        <Square label="This is a little square" cssClass="miniSquare" />
      </div>
    );
  }
}

class Square extends Component {
  render() {
    return <div className={this.props.cssClass}>{this.props.label}</div>;
  }
}
export default App;
