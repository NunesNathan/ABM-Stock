import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import ItemForm from './pages/itemform';
import StockView from './pages/stockview';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const routes = () => (
    <Switch>
      <Route path="/item/:id" component={ItemForm} />
      <Route path="/item" component={ItemForm} />
      <Route exact path="/" component={StockView} />
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
