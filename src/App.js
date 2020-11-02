import './App.css';
import Categories from './components/Categories';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Categories />
      <Products category="Carnes"/>
    </div>
  );
}

export default App;
