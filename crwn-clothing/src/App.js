import React from 'react';
import { Link, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
const TopicsList = (props) => (
  <div>
    <h1>TopicsList</h1>
  </div>
);
const TopicDetail = (props) => {
  console.log(props);
  return(
  <div>
    <h1>Topic Detail Page</h1>
  </div>);
}
const App = () => {
  return(
    <div>
        <Route exact path="/" component = {HomePage} />
        <Route exact path='/topics' component = {TopicsList}/>
        <Route path='/topics/:topicId' component ={TopicDetail} />
    </div>
  )
}

export default App;