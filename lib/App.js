// import React, { Component } from 'react';
// import { icons } from './config';
// import './App.css';

// import Icon from './node_modules/components/Icon';
// import TextField from './components/TextField';


// class App extends Component {
//   state = {
//     size: "small",
//     color: "#666"
//   }

//   _handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value })
//   }

//   render() {
//     const iconsElements = icons.map( (icon, index) => {
//       return <div key={index} className="icon-box">
//         <Icon 
//           className="icon"
//           description={icon} 
//           name={icon} 
//           size={this.state.size} 
//           fill={this.state.color}
//         />
//       </div>
//     });
//     return (
//       <div className="App">
//         <div className="icon-container">
//           { iconsElements }
//         </div>
//         <div className="side-panel">
//           <TextField 
//             type="text"
//             label="change size"
//             name="size"
//             placeholder="small is the default"
//             value={this.state.size} 
//             onChange={this._handleChange}
//           />

//           <TextField 
//             type="text"
//             label="change color"
//             name="color"
//             value={this.state.color} 
//             onChange={this._handleChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }


// export default App;
"use strict";