import React, {Component} from "react";
import ReactDOM from "react-dom";

class Header extends Component {
  render() {
    const {logo, searchPlaceholder} = this.props;

    return (
      <header>
        <a href="#">{logo}</a>
        <form>
          <input placeholder={searchPlaceholder} name="s"/>
          <button>Search</button>
        </form>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return <Header logo="Your company!" searchPlaceholder="Type some words..."/>;
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));

