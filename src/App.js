import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  // Define a state object to hold our app's state
  // eslint-disable-next-line no-undef
  state = {
    // Boolean attribute allows us to toggle the switch and keep it on
    checked: localStorage.getItem("theme") === "dark" ? true : false,
    /**
     * When a user clicks to activate dark mode, the value will be stored
     * on local storage or default value to light if it is neither dark nor light
     * There you go! can use lifecyclevents without a component, I can hear you
      */
    theme: localStorage.getItem("theme")
  };

  // updating the data-theme of our html tag
  componentDidMount() {
    document
    .getElementsByTagName("HTML")[0]
    .setAttribute("data-theme", localStorage.getItem("theme"));
  }

  // class method of toggling theme change
  toggleThemeChange = () => {
    const { checked } = this.state;
    // If this theme is light then change to dark

    if (checked === false) {
      // update local storage 
      localStorage.setItem("theme", "dark");

      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
      // ensures that our switch is on if in dark mode.
      this.setState({
        checked: true
      });

    } 
    
    else {
      localStorage.setItem("theme", "light");
      /** The document .getElementsByTagName(...) set attribute (...)
       * will only update the value until the App is mounted and we change
       * the state of the switch so we will need to introduce a react lifecycle component coponentDidMount() */


      document
      .getElementsByTagName("HTML")[0]
      .getAttribute("data-theme", localStorage.getItem("theme"));

      // state updated
      this.setState({
        // switch is off to change to light mode
        checked: false
      });
    }
  };

 render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <label class="switch">
          {/* the checked attribute is used to determine the state of the checkbox and 
          the onCheck attribute willtoggle our theme change */}

          <input 
          type="checkbox"
          // checked={this.state.checked}
          
          defaultChecked={this.state.checked}
          onChange={() => this.toggleThemeChange()} 
          />

          <span class="slider round" />

        </label>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

    </div>
  );
      }

  newFunction() {
    document
      .getElementbyTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  };
}

export default App;