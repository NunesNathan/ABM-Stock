import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import ItemForm from './pages/itemform';
import Stock from './pages/stock';

export default function App() {
  const routes = () => (
    <Switch>
      <Route exact path="/" component={Stock} />
      <Route path="/item" component={ItemForm} />
      <Route path="/item/:id" component={ItemForm} />
    </Switch>
  );

  return (
    <>
      <Header />
      {
        routes()
      }
      <Footer />
    </>
  );
}
