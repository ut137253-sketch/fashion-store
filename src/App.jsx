import React, { useState } from "react";

// ===============================
// 2 PIECE IMAGES - 17 PICTURES
// ===============================
const twoPieceImages = import.meta.glob(
  "./images/women/winter/w2pc *.jpeg",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// ===============================
// 3 PIECE IMAGES - 7 PICTURES
// ===============================
const threePieceImages = import.meta.glob(
  "./images/women/winter/2pc/3pc/w3pc *.jpeg",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// ===============================
// FANCY BRIDAL - 16 PICTURES
// ===============================
const fancyBridalImages = import.meta.glob(
  "./images/women/winter/2pc/Fancy bridal/wbr 1 *.jpeg",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

function App() {
  const twoPiece = Object.values(twoPieceImages);
  const threePiece = Object.values(threePieceImages);
  const fancyBridal = Object.values(fancyBridalImages);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  // ===============================
  // ADD TO CART
  // ===============================
  function addToCart(image, name) {
    const product = {
      id: Date.now() + Math.random(),
      name: name,
      image: image,
    };

    setCart(function (oldCart) {
      return oldCart.concat(product);
    });
  }

  // ===============================
  // REMOVE FROM CART
  // ===============================
  function removeFromCart(index) {
    setCart(function (oldCart) {
      return oldCart.filter(function (item, itemIndex) {
        return itemIndex !== index;
      });
    });
  }

  // ===============================
  // WHATSAPP ORDER
  // ===============================
  function sendWhatsAppOrder() {
    if (
      customerName.trim() === "" ||
      customerPhone.trim() === "" ||
      customerAddress.trim() === ""
    ) {
      alert("Please fill all customer details.");
      return;
    }

    if (cart.length === 0) {
      alert("Please add a product to cart first.");
      return;
    }

    // Adeel Akram WhatsApp Number
    const whatsappNumber = "923075842566";

    const productNames = cart
      .map(function (item) {
        return item.name;
      })
      .join(", ");

    const message =
      "NEW ORDER - FASHION STORE\n\n" +
      "Customer Name: " +
      customerName +
      "\n" +
      "Customer Phone: " +
      customerPhone +
      "\n" +
      "Delivery Address: " +
      customerAddress +
      "\n\n" +
      "Products:\n" +
      productNames +
      "\n\n" +
      "Shop: Adeel Akram\n" +
      "Shop No. 78, First Floor, Rabia Centre\n" +
      "Near Rabia Masjid, Sitara Lal Plaza\n" +
      "Factory Area, Faisalabad";

    const whatsappUrl =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
  }

  // ===============================
  // PRODUCT CARD
  // ===============================
  function ProductCard(props) {
    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        }}
      >
        <img
          src={props.image}
          alt={props.title}
          style={{
            width: "100%",
            height: "320px",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div
          style={{
            padding: "18px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "5px 0 8px",
              fontSize: "20px",
            }}
          >
            {props.title}
          </h3>

          <p
            style={{
              margin: "0 0 16px",
              color: "#777",
            }}
          >
            {props.subtitle}
          </p>

          <button
            onClick={function () {
              addToCart(props.image, props.title);
            }}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#151515",
              color: "white",
              border: "none",
              borderRadius: "7px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f4f0",
        color: "#222",
      }}
    >
      {/* ================= HEADER ================= */}

      <header
        style={{
          backgroundColor: "#151515",
          color: "white",
          padding: "18px 6%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          position: "sticky",
          top: 0,
          zIndex: 500,
        }}
      >
        <h2 style={{ margin: 0 }}>
          Fashion Store
        </h2>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            flexWrap: "wrap",
          }}
        >
          <button style={navButtonStyle}>Home</button>

          <button style={navButtonStyle}>Men</button>

          <button style={navButtonStyle}>Women</button>

          <button style={navButtonStyle}>Contact</button>

          <button
            onClick={function () {
              setShowCart(true);
            }}
            style={{
              backgroundColor: "white",
              color: "#111",
              border: "none",
              borderRadius: "25px",
              padding: "10px 18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Cart ({cart.length})
          </button>
        </nav>
      </header>

      {/* ================= HERO ================= */}

      <section
        style={{
          minHeight: "430px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "50px 20px",
          background:
            "linear-gradient(135deg, #f1e5d8, #fffaf5)",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Welcome To
          </p>

          <h1
            style={{
              fontSize: "clamp(40px, 7vw, 70px)",
              margin: "0 0 20px",
            }}
          >
            Fashion Store
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              marginBottom: "30px",
              color: "#555",
            }}
          >
            Discover the latest fashion and stylish
            clothes for every beautiful occasion.
          </p>

          <button
            onClick={function () {
              window.scrollTo({
                top: 520,
                behavior: "smooth",
              });
            }}
            style={{
              padding: "14px 32px",
              fontSize: "16px",
              backgroundColor: "#151515",
              color: "white",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* ================= WOMEN COLLECTION ================= */}

      <section
        style={{
          textAlign: "center",
          padding: "55px 20px 20px",
        }}
      >
        <p
          style={{
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "13px",
          }}
        >
          Our Collection
        </p>

        <h2
          style={{
            fontSize: "38px",
            margin: "10px 0",
          }}
        >
          Women Collection
        </h2>

        <p style={{ color: "#666" }}>
          Explore our latest women's fashion collection
        </p>
      </section>

      {/* ================= 2 PIECE ================= */}

      <CollectionSection
        title="2 Piece Winter Collection"
        subtitle="Elegant styles for your winter wardrobe"
      >
        {twoPiece.map(function (image) {
          return (
            <ProductCard
              key={image}
              image={image}
              title="2 Piece"
              subtitle="Winter Collection"
            />
          );
        })}
      </CollectionSection>

      {/* ================= 3 PIECE ================= */}

      <CollectionSection
        title="3 Piece Winter Collection"
        subtitle="Beautiful 3 piece styles"
      >
        {threePiece.map(function (image) {
          return (
            <ProductCard
              key={image}
              image={image}
              title="3 Piece"
              subtitle="Winter Collection"
            />
          );
        })}
      </CollectionSection>

      {/* ================= FANCY BRIDAL ================= */}

      <CollectionSection
        title="Fancy Bridal Collection"
        subtitle="Elegant bridal fashion collection"
      >
        {fancyBridal.map(function (image) {
          return (
            <ProductCard
              key={image}
              image={image}
              title="Fancy Bridal"
              subtitle="Bridal Collection"
            />
          );
        })}
      </CollectionSection>

      {/* ================= CART ================= */}

      {showCart && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "420px",
              maxWidth: "92%",
              height: "100%",
              backgroundColor: "white",
              padding: "25px",
              boxSizing: "border-box",
              overflowY: "auto",
            }}
          >
            <button
              onClick={function () {
                setShowCart(false);
              }}
              style={{
                float: "right",
                cursor: "pointer",
                padding: "7px 12px",
              }}
            >
              X
            </button>

            <h2>Shopping Cart</h2>

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {/* CART ITEMS */}

                {cart.map(function (item, index) {
                  return (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginBottom: "15px",
                        paddingBottom: "15px",
                        borderBottom:
                          "1px solid #eee",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "75px",
                          height: "85px",
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                      />

                      <div
                        style={{
                          flex: 1,
                        }}
                      >
                        <strong>{item.name}</strong>
                      </div>

                      <button
                        onClick={function () {
                          removeFromCart(index);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}

                {/* CUSTOMER DETAILS */}

                <h2>Customer Details</h2>

                <input
                  type="text"
                  placeholder="Customer Name"
                  value={customerName}
                  onChange={function (event) {
                    setCustomerName(
                      event.target.value
                    );
                  }}
                  style={inputStyle}
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={customerPhone}
                  onChange={function (event) {
                    setCustomerPhone(
                      event.target.value
                    );
                  }}
                  style={inputStyle}
                />

                <textarea
                  placeholder="Delivery Address"
                  value={customerAddress}
                  onChange={function (event) {
                    setCustomerAddress(
                      event.target.value
                    );
                  }}
                  rows="4"
                  style={inputStyle}
                />

                <button
                  onClick={sendWhatsAppOrder}
                  style={{
                    width: "100%",
                    padding: "15px",
                    backgroundColor: "#25D366",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Order on WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}

      <footer
        style={{
          backgroundColor: "#151515",
          color: "white",
          textAlign: "center",
          padding: "35px 20px",
        }}
      >
        <h3>Fashion Store</h3>

        <p>
          Stylish fashion for every occasion
        </p>

        <p>
          Shop No. 78, First Floor, Rabia Centre,
          Near Rabia Masjid, Sitara Lal Plaza,
          Factory Area, Faisalabad
        </p>

        <p>
          WhatsApp: 0307 5842566
        </p>

        <p>
          © 2026 Fashion Store. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

// ===============================
// COLLECTION SECTION
// ===============================

function CollectionSection(props) {
  return (
    <section
      style={{
        padding: "30px 6% 70px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            marginBottom: "8px",
          }}
        >
          {props.title}
        </h2>

        <p style={{ color: "#777" }}>
          {props.subtitle}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "28px",
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        {props.children}
      </div>
    </section>
  );
}

// ===============================
// STYLES
// ===============================

const navButtonStyle = {
  background: "transparent",
  color: "white",
  border: "none",
  padding: "10px 12px",
  cursor: "pointer",
};

const inputStyle = {
  width: "100%",
  padding: "13px",
  marginBottom: "12px",
  boxSizing: "border-box",
  border: "1px solid #ddd",
  borderRadius: "7px",
  fontSize: "14px",
};

export default App;