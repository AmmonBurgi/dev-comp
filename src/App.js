import React, {Component} from 'react';
import './App.css';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
//example of link in public/index.html

class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
    this.hello = this.hello.bind(this)
    // ^^ binding 'this' allows us to correctly call the method in a child component
  }
componentDidMount(){
  this.hello()
  const q = 'I am a query'
  axios.get(`/api/query-test/?theQuery=${q}`)
}
 hello(){
  console.log('Hello There')
  // this.props.match.params
  console.log(this.props)
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
      <article>This is a article tag</article>
      
      <script type='module' src='JS file'>I point to javascript</script>
      <div id='box-model'>I am a Box Model</div>
      <div className='box-rel'>Relative
      <div className='box-absolute'><p className='text-effects'>asdfasdfasdfasf</p></div>
      </div>
      <div className='box-fix'>fixed</div>
      <div className='box-sticky'>sticky</div>
      <input value='disabled' disabled='disabled' />
      <input value='focus' className='focuss' />
      <span className='nth'>1</span>
      <span className='nth'>2</span>
      <span className='nth'>3</span>
      <span className='nth'>4</span>
      <footer>This is the footer tag</footer> 
    </div>
  );
}}

export default withRouter(App);
