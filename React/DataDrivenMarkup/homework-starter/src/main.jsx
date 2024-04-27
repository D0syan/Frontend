import ReactDOM from 'react-dom';
import ProductList from './ProductList';
import { products } from './products';

import './main.css';


const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

// TODO: Реализовать компонент ProductList
reactRoot.render(<ProductList products={products} />);