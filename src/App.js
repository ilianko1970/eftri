import { Route, Switch} from 'react-router-dom';
import './App.css';
import Main     from './components/main/main';
import AddEdit from './components/addEdit/addEdit';
import AboutMe from './components/aboutMe/aboutMe';
import t from './tools/getLabel';

function App() {
  const lang = 'en'; //Get from cookie
  

  console.log(window.language);

  return (
    <div>
      <Switch>    
          <Route path="/:lang/addEdit" exact component={AddEdit} />
          <Route path="/:lang/aboutMe" exact component={AboutMe} />
          <Route path="/:lang" component={Main} />
      </Switch>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
