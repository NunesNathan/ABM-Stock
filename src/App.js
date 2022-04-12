import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemForm from './pages/ItemForm';
import StockHome from './pages/StockHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  const routes = () => (
    <Switch>
      <Route path="/item/:id" component={ItemForm} />
      <Route path="/item" component={ItemForm} />
      <Route exact path="/" component={StockHome} />
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
