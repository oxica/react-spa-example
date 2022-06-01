import { Route, Switch, Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomeView from '../views/HomeView';
import BooksView from '../views/BooksView';
import AuthorsView from '../views/AuthorsView';
import NotFoundView from '../views/NotFoundView';

export default function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/books">
          <BooksView />
        </Route>
        <Route exact path="/authors">
          <AuthorsView />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
}
