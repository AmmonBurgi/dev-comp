import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <h1>I'm in a section</h1>
        <p>Sections are used to group together related elements</p>
      </section>
      <script type='module' src='JS file'>I point to javascript</script>
      <div className='box-model'>I am a Box Model</div>
      <div className='box-rel'>Relative
      <div className='box-absolute'>absolute-bottom 0px</div></div>
      <div className='box-fix'>fixed</div>
      <div className='box-sticky'>sticky</div>
    </div>
  );
}

export default App;
