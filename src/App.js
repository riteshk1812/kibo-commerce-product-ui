import Header from "./Component/Header/Header";
import Product from "./Component/Product/Product";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <div>
      <Header />
      <ProductProvider>
        <Product />
      </ProductProvider>
    </div>
  );
}

export default App;
