import React, { useState } from "react";
import "./App.css";

const allWomenImages = import.meta.glob(
  "./images/women/winter/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const twoPieceImages = Object.entries(allWomenImages)
  .filter(([path]) => {
    const p = path.toLowerCase();

    return (
      (p.includes("/2pc/") && !p.includes("/3pc/") && !p.includes("fancy bridal")) ||
      p.includes("/winter/w2pc")
    );
  })
  .map(([, image]) => image);

const threePieceImages = Object.entries(allWomenImages)
  .filter(([path]) => path.toLowerCase().includes("/3pc/"))
  .map(([, image]) => image);

const fancyBridalImages = Object.entries(allWomenImages)
  .filter(([path]) => path.toLowerCase().includes("fancy bridal"))
  .map(([, image]) => image);

const facilityImages = Object.entries(allWomenImages)
  .filter(([path]) => path.toLowerCase().includes("/faculity/"))
  .slice(0, 3)
  .map(([path, image], index) => {
    const file = path.split("/").pop()?.toLowerCase() || "";

    let title = "Our Craftsmanship";

    if (file.includes("computerized")) {
      title = "Computerized Embroidery Unit";
    } else if (file.includes("factory")) {
      title = "Factory Showroom & Display";
    } else if (file.includes("premium")) {
      title = "Premium Embroidered Outfits";
    } else {
      title = [
        "Computerized Embroidery Unit",
        "Factory Showroom & Display",
        "Premium Embroidered Outfits",
      ][index];
    }

    return {
      image,
      title,
      text:
        title === "Computerized Embroidery Unit"
          ? "Our computerized embroidery unit combines modern technology with skilled craftsmanship to create fine and precise embroidery."
          : title === "Factory Showroom & Display"
          ? "Our factory showroom presents carefully crafted fashion designs with beautiful colors, fabrics and fine details."
          : "Our premium embroidered outfits are created with attention to detail, quality fabrics and elegant finishing.",
    };
  });

const whatsappNumber = "923075842566";

function openWhatsApp(message) {
  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

function productInquiry(name) {
  openWhatsApp(
    `Assalam o Alaikum

I am interested in:
${name}

Please share the catalog, price and product details.`
  );
}

function ProductCard({ image, title }) {
  return (
    <div className="product-card">
      <div className="product-image-box">
        <img src={image} alt={title} />
      </div>

      <div className="product-card-body">
        <h3>{title}</h3>
        <p>Premium Pakistani Fashion Collection</p>

        <button onClick={() => productInquiry(title)}>
          WhatsApp Inquiry
        </button>
      </div>
    </div>
  );
}

function CollectionSection({ id, title, description, images, productName }) {
  return (
    <section className="collection-section" id={id}>
      <div className="section-title">
        <span>OUR COLLECTION</span>
        <h2>{title}</h2>
        <div className="gold-line"></div>
        <p>{description}</p>
      </div>

      {images.length > 0 ? (
        <div className="products-grid">
          {images.map((image, index) => (
            <ProductCard
              key={`${productName}-${index}`}
              image={image}
              title={`${productName} ${index + 1}`}
            />
          ))}
        </div>
      ) : (
        <div className="empty-message">
          Collection images not found.
        </div>
      )}
    </section>
  );
}

function FacilitySection() {
  return (
    <section className="facility-section">
      <div className="section-title">
        <span>OUR FACILITY</span>
        <h2>Craftsmanship & Quality</h2>
        <div className="gold-line"></div>
        <p>
          Modern techniques, skilled workmanship and attention to detail
          in every design.
        </p>
      </div>

      {facilityImages.length > 0 && (
        <div className="facility-grid">
          {facilityImages.map((item, index) => (
            <div className="facility-card" key={index}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function CustomerInquiry() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    country: "",
    collection: "",
    quantity: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName.trim()) {
      alert("Please enter your Full Name.");
      return;
    }

    if (!form.country) {
      alert("Please select your Country.");
      return;
    }

    if (!form.phone.trim()) {
      alert("Please enter your WhatsApp / Phone number.");
      return;
    }

    const message = `Assalam o Alaikum

CUSTOMER INQUIRY

Full Name: ${form.fullName}
Company / Store: ${form.company || "Not provided"}
Country: ${form.country}
Collection Interest: ${form.collection || "Not provided"}
Order Quantity: ${form.quantity || "Not provided"}
WhatsApp / Phone: ${form.phone}
Email: ${form.email || "Not provided"}

Message:
${form.message || "No additional message"}

Please share catalog, pricing and sample information.`;

    openWhatsApp(message);
  };

  return (
    <section className="inquiry-section" id="inquiry">
      <div className="section-title">
        <span>GET IN TOUCH</span>
        <h2>Customer Inquiry</h2>
        <div className="gold-line"></div>
        <p>
          Please provide your details and requirements. Our team will
          review your inquiry and respond within 24 hours.
        </p>
      </div>

      <div className="inquiry-layout">
        <div className="inquiry-info">
          <h3>Catalog, Pricing & Sample Information</h3>

          <p>
            Tell us which collection you are interested in. You can
            request product details, catalog information, pricing and
            sample information.
          </p>

          <div className="info-item">
            <strong>01</strong>
            <div>
              <h4>Choose Collection</h4>
              <p>Lawn, Fancy, Cotton, 2 Piece, 3 Piece or Bridal.</p>
            </div>
          </div>

          <div className="info-item">
            <strong>02</strong>
            <div>
              <h4>Send Your Details</h4>
              <p>Complete the inquiry form with your contact details.</p>
            </div>
          </div>

          <div className="info-item">
            <strong>03</strong>
            <div>
              <h4>Quick Response</h4>
              <p>Our team will review your inquiry and respond.</p>
            </div>
          </div>
        </div>

        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>
                Full Name <span>*</span>
              </label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>Company / Store</label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company or store name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                Country <span>*</span>
              </label>

              <select
                name="country"
                value={form.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="Canada">Canada</option>
                <option value="United States">United States</option>
                <option value="Australia">Australia</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Qatar">Qatar</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Collection Interest</label>

              <select
                name="collection"
                value={form.collection}
                onChange={handleChange}
              >
                <option value="">Select Collection</option>
                <option value="Lawn">Lawn</option>
                <option value="Fancy">Fancy</option>
                <option value="Cotton">Cotton</option>
                <option value="2 Piece">2 Piece</option>
                <option value="3 Piece">3 Piece</option>
                <option value="Fancy Bridal">Fancy Bridal</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Order Quantity</label>
              <input
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="e.g. 50 pieces"
              />
            </div>

            <div className="form-group">
              <label>
                WhatsApp / Phone <span>*</span>
              </label>

              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+92..."
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>

          <button className="submit-button" type="submit">
            Send Inquiry on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "The MOQ can depend on the product, design, fabric and order requirements. Please contact us with your selected collection and we will provide the applicable MOQ.",
  },
  {
    question: "Do you ship internationally? Which countries?",
    answer:
      "Yes, we welcome overseas export inquiries. Please tell us your destination country so our team can provide the relevant shipping information.",
  },
  {
    question: "Can I request a sample before placing a bulk order?",
    answer:
      "Yes, sample options can be discussed depending on the selected product and collection. Contact us with the design you are interested in.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Payment terms can vary according to the order, quantity and customer requirements. Our team will confirm the applicable terms before the order is finalized.",
  },
  {
    question: "What is the production and delivery lead time?",
    answer:
      "Lead time depends on the design, quantity and destination. Once we receive your requirements, our team can provide an estimated production and delivery schedule.",
  },
  {
    question: "Do you offer private label or OEM manufacturing?",
    answer:
      "Private label and OEM requirements can be discussed according to the product and order quantity. Please send your requirements through the inquiry form.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply complete the Customer Inquiry form with your name, country, collection and contact details. You can also contact us directly on WhatsApp.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq-section" id="faq">
      <div className="section-title">
        <span>FAQ</span>
        <h2>Frequently Asked Questions</h2>
        <div className="gold-line"></div>
        <p>
          Answers to common questions about our products and orders.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${open === index ? "active" : ""}`}
            key={index}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <span>
                {index + 1}. {item.question}
              </span>

              <b>{open === index ? "−" : "+"}</b>
            </button>

            {open === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="logo">
            <strong>FASHION</strong>
            <span>& DESIGN</span>
          </a>

          <nav>
            <a href="#home">HOME</a>
            <a href="#collections">COLLECTIONS</a>
            <a href="#inquiry">INQUIRY</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a href="#inquiry" className="header-contact">
            CONTACT US
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span>PAKISTANI FASHION & DESIGN</span>

            <h1>
              Elegant Designs.
              <br />
              Exceptional Craftsmanship.
            </h1>

            <p>
              Discover premium Pakistani fashion collections with
              beautiful fabrics, detailed embroidery and sophisticated
              designs.
            </p>

            <div className="hero-buttons">
              <a href="#collections" className="primary-btn">
                Explore Collections
              </a>

              <a href="#inquiry" className="secondary-btn">
                Make an Inquiry
              </a>
            </div>
          </div>
        </section>

        <section className="welcome-section" id="collections">
          <div className="section-title">
            <span>WELCOME</span>
            <h2>Premium Fashion Collections</h2>
            <div className="gold-line"></div>

            <p>
              From premium Pakistani fashion to overseas export, we focus
              on quality, elegant designs and reliable customer service.
            </p>
          </div>

          <div className="features">
            <div className="feature">
              <strong>01</strong>
              <h3>Premium Quality</h3>
              <p>Quality fabrics, embroidery and finishing.</p>
            </div>

            <div className="feature">
              <strong>02</strong>
              <h3>Beautiful Designs</h3>
              <p>Elegant collections for modern customers.</p>
            </div>

            <div className="feature">
              <strong>03</strong>
              <h3>Overseas Export</h3>
              <p>International and overseas inquiries welcome.</p>
            </div>
          </div>
        </section>

        <FacilitySection />

        <CollectionSection
          id="two-piece"
          title="2 Piece Collection"
          description="Explore our elegant 2 Piece winter collection."
          images={twoPieceImages}
          productName="2 Piece"
        />

        <CollectionSection
          id="three-piece"
          title="3 Piece Collection"
          description="Discover our sophisticated 3 Piece collection."
          images={threePieceImages}
          productName="3 Piece"
        />

        <CollectionSection
          id="fancy-bridal"
          title="Fancy Bridal Collection"
          description="A refined selection of elegant fancy bridal designs."
          images={fancyBridalImages}
          productName="Fancy Bridal"
        />

        <CustomerInquiry />

        <FAQSection />

        <section className="whatsapp-cta">
          <span>DIRECT CONTACT</span>
          <h2>Need Product Details?</h2>
          <p>
            Contact us directly for catalog, pricing, samples and
            collection information.
          </p>

          <button
            onClick={() =>
              productInquiry("Fashion & Design Collection")
            }
          >
            Chat on WhatsApp
          </button>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div>
            <h3>FASHION & DESIGN</h3>
            <p>
              Premium Pakistani fashion collections with elegant
              designs and quality craftsmanship.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#collections">Collections</a>
            <a href="#inquiry">Inquiry</a>
            <a href="#faq">FAQ</a>
          </div>

          <div>
            <h4>Contact</h4>
            <p>WhatsApp: +92 307 5842566</p>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Fashion & Design. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;