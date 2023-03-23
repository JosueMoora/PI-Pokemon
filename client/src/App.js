import "./App.css";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Home, Detail, Form, Landing } from "./views";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTypes } from "./redux/actions";
function App() {
  const dispatch = useDispatch()
  // const allTypes = useSelector(state => state.types)

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  return (
    <div className="App">
        {useLocation().pathname !== "/" && <NavBar /> }
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/create">
          <Form />
        </Route>
    </div>
  );
}

export default App;
