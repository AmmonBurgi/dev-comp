import React, {Component} from 'react';
import './App.css';
//example of link in public/index.html

class App extends Component{
  constructor(){
    super()
    this.state = {

    }
    this.hello = this.hello.bind(this)
    // ^^ binding 'this' allows us to correctly call the method in a child component
  }

 hello(){
  console.log('Hello There')
  // this.props.match.params
  // ^^ This is an example of using the match object. The match object comes from using routes. The match object contains params, path, and url. 
  }

  render(){
  return (
    <div className="App">
      <div className='logo'></div>
      <section>
        <h1>I'm in a section</h1>
        <p>Sections are used to group together related elements</p>
      </section>
      <script type='module' src='JS file'>I point to javascript</script>
      <div id='box-model'>I am a Box Model</div>
      <div className='box-rel'>Relative
      <div className='box-absolute'>absolute-bottom 0px</div></div>
      <div className='box-fix'>fixed</div>
      <div className='box-sticky'>sticky</div>
    </div>
  );
}}

export default App;
