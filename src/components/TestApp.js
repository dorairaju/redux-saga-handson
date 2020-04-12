import React from 'react';

// const App = () => {
//   console.log('test render.');
//   return <div>Test app</div>;
// };

class App extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    console.log('test App from main container');
    return <div>Test app</div>;
  }
}

export default App;