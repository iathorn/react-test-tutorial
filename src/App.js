import React, {Component} from 'react';

import Counter from './components/Counter';
import NameList from './components/NameList';
import NameForm from './components/NameForm';

class App extends Component {

  state = {
    names: ['벨로퍼트', '김민준']
  }
  onInsert = (name) => {
    this.setState(({names}) => ({
      names: names.concat(name)
    }));
  }
  render() {

    return (
      <div>
        <Counter/>
        <hr/>
        <NameForm onInsert={this.onInsert}/>
        <NameList names={this.state.names}/>
      </div>
    );
  }
}

export default App;
