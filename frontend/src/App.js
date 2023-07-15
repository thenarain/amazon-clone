import data from "./data";
import Product from "./components/Product";

const App = () => {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazon
          </a>
        </div>

        <div>
          <a href="/cart">Cart</a>
          <a href="/sign-in">Sign-in</a>
        </div>
      </header>

      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </main>

      <footer className="row center">All right reserved</footer>
    </div>
  );
};

export default App;
