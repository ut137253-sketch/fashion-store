import { useMemo, useState } from "react";
import "./App.css";

const allImages = import.meta.glob(
  "./images/*/.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const getImagesFromFolder = (folder) => {
  return Object.entries(allImages)
    .filter(([path]) =>
      path.toLowerCase().includes(folder.toLowerCase())
    )
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true })
    )
    .map(([, image]) => image);
};

const women2pcImages = getImagesFromFolder(
  "/women/winter/2pc/"
);

const women3pcImages = getImagesFromFolder(
  "/women/winter/3pc/"
);

const womenBridalImages = getImagesFromFolder(
  "/women/winter/fancy bridal/"
);

const createProducts = (
  images,
  category,
  prefix,
  startPrice
) => {
  return images.map((image, index) => ({
    id: ${prefix}-${index + 1},
    name: ${category} ${index + 1},
    category,
    price: startPrice + index * 250,
    image,
  }));
};

const products = [
  ...createProducts(
    women2pcImages,
    "Women 2PC Winter",
    "w2pc",
    3500
  ),

  ...createProducts(
    women3pcImages,
    "Women 3PC Winter",
    "w3pc",
    4500
  ),

  ...createProducts(
    womenBridalImages,
    "Fancy Bridal",
    "bridal",
    6500
  ),
];

function App() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const cartItemsCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const name = prompt("Enter your name:");

    if (!name) return;

    const phone = prompt("Enter your phone number:");

    if (!phone) return;

    const address = prompt(
      "Enter your delivery address:"
    );

    if (!address) return;

    alert(
      Thank you ${name}!\n\nYour order has been received.\n\nTotal: Rs. ${cartTotal.toLocaleString()}\n\nWe will contact you on ${phone}.
    );

    setCart([]);
    setShowCart(false);
  };

  const scrollToProducts = () => {
    const section =
      document.getElementById("products");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app">

      <header className="header">
        <div className="logo">
          Fashion Store
        </div>

        <nav className="nav">

          <button
            onClick={() => {
              setCategory("All");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Home
          </button>

          <button
            onClick={() => {
              setCategory("All");
              scrollToProducts();
            }}
          >
            Women
          </button>

          <button
            onClick={() => {
              setCategory("Women 2PC Winter");
              scrollToProducts();
            }}
          >
            2PC
          </button>

          <button
            onClick={() => {
              setCategory("Women 3PC Winter");
              scrollToProducts();
            }}
          >
            3PC
          </button>

          <button
            onClick={() => {
              setCategory("Fancy Bridal");
              scrollToProducts();
            }}
          >
            Bridal
          </button>

          <button
            onClick={() => setShowCart(true)}
          >
            Cart ({cartItemsCount})
          </button>

        </nav>
      </header>

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            NEW COLLECTION 2026
          </p>

          <h1>
            Welcome to
            <br />
            Fashion Store
          </h1>

          <p>
            Discover beautiful winter collections,
            elegant dresses and stylish fashion.
          </p>

          <button
            className="shop-button"
            onClick={scrollToProducts}
          >
            Shop Now
          </button>

        </div>

      </section>

      <section className="categories">

        <h2>Shop By Category</h2>

        <div className="category-buttons">

          <button
            className={
              category === "All"
                ? "active"
                : ""
            }
            onClick={() => setCategory("All")}
          >
            All
          </button>

          <button
            className={
              category === "Women 2PC Winter"
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory("Women 2PC Winter")
            }
          >
            Winter 2PC
          </button>

          <button
            className={
              category === "Women 3PC Winter"
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory("Women 3PC Winter")
            }
          >
            Winter 3PC
          </button>

          <button
            className={
              category === "Fancy Bridal"
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory("Fancy Bridal")
            }
          >
            Fancy Bridal
          </button>

        </div>

      </section>

      <section className="search-section">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

      </section>

      <section
        className="products-section"
        id="products"
      >

        <div className="section-heading">

          <h2>
            {category === "All"
              ? "Our Collection"
              : category}
          </h2>

          <p>
            {filteredProducts.length} products
          </p>

        </div>

        {filteredProducts.length === 0 ? (

          <div className="no-products">

            <h3>No products found</h3>

            <p>
              Please check your image folders.
            </p>

          </div>

        ) : (

          <div className="product-grid">

            {filteredProducts.map((product) => (

              <div
                className="product-card"
                key={product.id}
              >

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>

                <div className="product-info">

                  <p className="product-category">
                    {product.category}
                  </p>

                  <h3>
                    {product.name}
                  </h3>

                  <p className="price">
                    Rs.{" "}
                    {product.price.toLocaleString()}
                  </p>

                  <button
                    className="add-cart"
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

      {showCart && (

        <div
          className="cart-overlay"
          onClick={() => setShowCart(false)}
        >

          <div
            className="cart-box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="cart-header">

              <h2>Your Cart</h2>

              <button
                className="close-cart"
                onClick={() =>
                  setShowCart(false)
                }
              >
                ×
              </button>

            </div>

            {cart.length === 0 ? (

              <div className="empty-cart">

                <h3>Your cart is empty</h3>

                <p>
                  Add some products to your cart.
                </p>

              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">

                        <h3>
                          {item.name}
                        </h3>

                        <p>
                          Rs.{" "}
                          {item.price.toLocaleString()}
                        </p>

                        <div className="quantity">

                          <button
                            onClick={() =>
                              decreaseQuantity(
                                item.id
                              )
                            }
                          >
                            -
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                item.id
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                      </div>

                      <button
                        className="remove-button"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                      >
                        Remove
                      </button>

                    </div>

                  ))}

                </div>

                <div className="cart-total">

                  <h3>
                    Total: Rs.{" "}
                    {cartTotal.toLocaleString()}
                  </h3>

                  <button
                    className="checkout-button"
                    onClick={checkout}
                  >
                    Checkout
                  </button>

                </div>

              </>

            )}

          </div>

        </div>

      )}

      <footer className="footer">

        <h2>Fashion Store</h2>

        <p>
          Elegant fashion for every occasion.
        </p>

        <p>
          © 2026 Fashion Store. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;