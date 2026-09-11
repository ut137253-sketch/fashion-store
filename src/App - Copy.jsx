import React from "react";

// ==================================================
// IMAGES
// ==================================================

// ==================================================
// 2 PIECE - 17 PICTURES
// ==================================================

const twoPieceImages = [
  new URL("./images/women/winter/2pc/W2PC1.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC2.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC3.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC4.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC5.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC6.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC7.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC8.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC9.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC10.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC11.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC12.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC13.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC14.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC15.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC16.jpeg", import.meta.url).href,
  new URL("./images/women/winter/2pc/W2PC17.jpeg", import.meta.url).href,
];

// ==================================================
// 3 PIECE - 7 PICTURES
// ==================================================

const threePieceImages = import.meta.glob(
  "./images/women/winter/3pc/*.{jpg,jpeg,JPG,JPEG}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// ==================================================
// FANCY BRIDAL - 16 PICTURES
// ==================================================

const fancyBridalImages = import.meta.glob(
  "./images/women/winter/Fancy bridal/*.{jpg,jpeg,JPG,JPEG}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// ==================================================
// FACILITY - 3 PICTURES
// ==================================================

const facilityImages = [
  {
    image: new URL(
      "./images/women/winter/faculity/computerized-embroidery-unit.jpg.png",
      import.meta.url
    ).href,
    title: "Computerized Embroidery Unit",
    text: "Precision embroidery and refined detailing crafted with modern technology.",
  },
  {
    image: new URL(
      "./images/women/winter/faculity/factory-showroom-display.jpg.png",
      import.meta.url
    ).href,
    title: "Factory Showroom & Display",
    text: "Explore our carefully presented collection and discover the craftsmanship behind every design.",
  },
  {
    image: new URL(
      "./images/women/winter/faculity/premium-embroidered-outfit.jpg.jpg",
      import.meta.url
    ).href,
    title: "Premium Embroidered Outfits",
    text: "Elegant embroidered outfits designed to bring together timeless style, quality and sophistication.",
  },
];

// ==================================================
// WHATSAPP INQUIRY
// ==================================================

function inquiryOnWhatsApp(itemName) {
  const whatsappNumber = "923075842566";

  const message =
    "Assalam o Alaikum\n\n" +
    "I am interested in:\n" +
    itemName +
    "\n\n" +
    "Please share price and product details.";

  const whatsappUrl =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappUrl, "_blank");
}

// ==================================================
// PRODUCT CARD
// ==================================================

function ProductCard({ image, title, subtitle }) {
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
        src={image}
        alt={title}
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
            color: "#172a3a",
            fontFamily: "Georgia, serif",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: "0 0 16px",
            color: "#777",
          }}
        >
          {subtitle}
        </p>

        <button
          onClick={() => inquiryOnWhatsApp(title)}
          style={{
            width: "100%",
            padding: "13px",
            backgroundColor: "#25D366",
            color: "#ffffff",
            border: "none",
            borderRadius: "7px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          INQUIRY ON WHATSAPP
        </button>
      </div>
    </div>
  );
}

// ==================================================
// COLLECTION SECTION
// ==================================================

function CollectionSection({ title, subtitle, children }) {
  return (
    <section
      style={{
        padding: "35px 6% 70px",
        backgroundColor: "#f7f4f0",
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
            margin: "0 0 8px",
            color: "#172a3a",
            fontFamily: "Georgia, serif",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            color: "#777",
            margin: 0,
          }}
        >
          {subtitle}
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
        {children}
      </div>
    </section>
  );
}

// ==================================================
// FACILITY SECTION
// ==================================================

function FacilitySection() {
  return (
    <section
      style={{
        padding: "65px 6% 70px",
        backgroundColor: "#f7f4f0",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "750px",
          margin: "0 auto 40px",
        }}
      >
        <p
          style={{
            color: "#b18d45",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontSize: "12px",
            marginBottom: "10px",
          }}
        >
          CRAFTED WITH CARE
        </p>

        <h2
          style={{
            fontSize: "38px",
            margin: "10px 0",
            color: "#172a3a",
            fontFamily: "Georgia, serif",
            fontWeight: "400",
          }}
        >
          Our Craftsmanship
        </h2>

        <p
          style={{
            color: "#666",
            lineHeight: "1.8",
            margin: 0,
          }}
        >
          Discover the craftsmanship, attention to detail and
          premium finishing behind our fashion collections.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "28px",
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        {facilityImages.map(function (item) {
          return (
            <div
              key={item.image}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow:
                  "0 5px 20px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div
                style={{
                  padding: "22px 20px 24px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "21px",
                    color: "#172a3a",
                    fontFamily: "Georgia, serif",
                    fontWeight: "400",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#777",
                    lineHeight: "1.7",
                    fontSize: "14px",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ==================================================
// MAIN APP
// ==================================================

function App() {
  const threePiece = Object.values(threePieceImages);
  const fancyBridal = Object.values(fancyBridalImages);

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f4f0",
        color: "#222",
      }}
    >
      {/* ==================================================
          HEADER
      ================================================== */}

      <header
        style={{
          backgroundColor: "#172a3a",
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
          boxShadow: "0 3px 15px rgba(0,0,0,0.15)",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontFamily: "Georgia, serif",
              letterSpacing: "3px",
            }}
          >
            FASHION
          </h2>

          <span
            style={{
              color: "#d8b86a",
              fontSize: "13px",
            }}
          >
            فیشن اینڈ ڈیزائن
          </span>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={navButtonStyle}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            HOME
          </button>

          <button
            style={navButtonStyle}
            onClick={() =>
              document
                .getElementById("collections")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            COLLECTIONS
          </button>

          <button
            style={navButtonStyle}
            onClick={() =>
              inquiryOnWhatsApp(
                "Fashion & Design Collection"
              )
            }
          >
            WHATSAPP
          </button>
        </nav>
      </header>

      {/* ==================================================
          HERO
      ================================================== */}

      <section
        style={{
          minHeight: "560px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "70px 20px",
          background:
            "linear-gradient(135deg, #172a3a, #294355, #172a3a)",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
          }}
        >
          <p
            style={{
              color: "#d8b86a",
              fontSize: "14px",
              letterSpacing: "4px",
              marginBottom: "15px",
            }}
          >
            PREMIUM PAKISTANI FASHION
          </p>

          <p
            style={{
              color: "#e1c27a",
              fontSize: "21px",
              marginBottom: "15px",
            }}
          >
            فیشن اینڈ ڈیزائن
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: "400",
              fontSize: "clamp(42px, 7vw, 70px)",
              margin: "20px 0",
              lineHeight: "1.15",
            }}
          >
            Fashion Crafted
            <br />

            <span
              style={{
                color: "#e1c27a",
                fontStyle: "italic",
              }}
            >
              With Elegance
            </span>
          </h1>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto 30px",
              lineHeight: "1.8",
              color: "#d0d7dc",
              fontSize: "17px",
            }}
          >
            Discover elegant Pakistani fashion,
            beautiful designs and timeless styles
            for every special occasion.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("collections")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            style={{
              padding: "14px 30px",
              backgroundColor: "#c7a45d",
              color: "#172a3a",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              letterSpacing: "2px",
              borderRadius: "3px",
            }}
          >
            EXPLORE COLLECTION
          </button>
        </div>
      </section>

      {/* ==================================================
          WOMEN COLLECTION
      ================================================== */}

      <section
        style={{
          textAlign: "center",
          padding: "60px 20px 25px",
          backgroundColor: "#f7f4f0",
        }}
      >
        <p
          style={{
            color: "#b18d45",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          OUR COLLECTION
        </p>

        <h2
          style={{
            fontSize: "38px",
            margin: "10px 0",
            color: "#172a3a",
            fontFamily: "Georgia, serif",
            fontWeight: "400",
          }}
        >
          Women Collection
        </h2>

        <p style={{ color: "#666" }}>
          Explore our latest women's fashion collection
        </p>
      </section>

      {/* ==================================================
          FACILITY / CRAFTSMANSHIP
      ================================================== */}

      <FacilitySection />

      {/* ==================================================
          COLLECTIONS
      ================================================== */}

      <div id="collections">

        {/* ==================================================
            2 PIECE
        ================================================== */}

        <CollectionSection
          title="2 Piece Winter Collection"
          subtitle="Elegant styles for your winter wardrobe"
        >
          {twoPieceImages.map(function (image, index) {
            return (
              <ProductCard
                key={image}
                image={image}
                title={"Winter Elegance " + (index + 1)}
                subtitle="2 Piece Winter Collection"
              />
            );
          })}
        </CollectionSection>

        {/* ==================================================
            3 PIECE
        ================================================== */}

        <CollectionSection
          title="3 Piece Winter Collection"
          subtitle="Beautiful Pakistani designs"
        >
          {threePiece.map(function (image, index) {
            return (
              <ProductCard
                key={image}
                image={image}
                title={"Winter Signature " + (index + 1)}
                subtitle="3 Piece Winter Collection"
              />
            );
          })}
        </CollectionSection>

        {/* ==================================================
            FANCY BRIDAL
        ================================================== */}

        <CollectionSection
          title="Fancy Bridal Collection"
          subtitle="Elegant bridal fashion"
        >
          {fancyBridal.map(function (image, index) {
            return (
              <ProductCard
                key={image}
                image={image}
                title={"Bridal Elegance " + (index + 1)}
                subtitle="Fancy Bridal Collection"
              />
            );
          })}
        </CollectionSection>

      </div>

      {/* ==================================================
          WHATSAPP INQUIRY
      ================================================== */}

      <section
        style={{
          backgroundColor: "#172a3a",
          color: "white",
          textAlign: "center",
          padding: "70px 20px",
        }}
      >
        <p
          style={{
            color: "#c7a45d",
            letterSpacing: "4px",
            fontSize: "11px",
          }}
        >
          DIRECT INQUIRY
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: "400",
            fontSize: "38px",
            margin: "15px 0",
          }}
        >
          Inquiry on WhatsApp
        </h2>

        <p
          style={{
            color: "#c5cdd2",
            marginBottom: "25px",
          }}
        >
          Price and product details will be shared
          directly on WhatsApp.
        </p>

        <button
          onClick={() =>
            inquiryOnWhatsApp(
              "Fashion & Design Collection"
            )
          }
          style={{
            padding: "15px 30px",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "7px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          INQUIRY ON WHATSAPP
        </button>
      </section>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer
        style={{
          backgroundColor: "#101c27",
          color: "white",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h3
          style={{
            fontFamily: "Georgia, serif",
            letterSpacing: "4px",
          }}
        >
          FASHION & DESIGN
        </h3>

        <p
          style={{
            color: "#c7a45d",
          }}
        >
          فیشن اینڈ ڈیزائن
        </p>

        <p
          style={{
            color: "#9ca7af",
            lineHeight: "1.8",
          }}
        >
          Elegant fashion for every beautiful
          occasion.
        </p>

        <p
          style={{
            color: "#9ca7af",
          }}
        >
          WhatsApp: 0307 5842566
        </p>

        <p
          style={{
            color: "#777",
            fontSize: "13px",
          }}
        >
          © 2026 Fashion & Design. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
// NAVIGATION STYLE
// ==================================================

const navButtonStyle = {
  background: "transparent",
  color: "white",
  border: "none",
  padding: "10px 13px",
  cursor: "pointer",
  fontSize: "11px",
  letterSpacing: "1.5px",
};

export default App;
