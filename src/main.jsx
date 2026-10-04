import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Phone,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Star,
  Instagram,
  CalendarDays,
  Check,
  Heart,
  LayoutDashboard,
  Users,
  Scissors,
  Image,
  Settings,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";
import "./style.css";
const photos = {
  hero: "https://5.imimg.com/data5/SELLER/Default/2024/9/454649464/HV/QA/VW/225202498/bridal-makeup-aliganj-lucknow-1000x1000.jpg",
  bride:
    "https://thumbs.dreamstime.com/b/stunning-indian-bride-dressed-traditional-red-bridal-lehenga-heavy-gold-jewellery-veil-sitting-chair-smiles-tenderly-310507653.jpg?w=576",
  makeup:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=85",
  hair: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=85",
  portrait:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=85",
};
const services = [
  [
    "Bridal Makeup",
    "The signature look for your most unforgettable day.",
    "From ₹18,000",
    photos.bride,
    "Bridal",
  ],
  [
    "Airbrush Makeup",
    "A weightless, camera-ready finish that lasts.",
    "From ₹12,000",
    photos.makeup,
    "Makeup",
  ],
  [
    "Hair Styling & Color",
    "Modern artistry, from polished updos to dimensional color.",
    "From ₹3,500",
    photos.hair,
    "Hair",
  ],
  [
    "Engagement & Party",
    "Effortless glamour for every celebration.",
    "From ₹6,000",
    photos.portrait,
    "Makeup",
  ],
];
const packages = [
  [
    "The Signature Bride",
    "₹24,000",
    [
      "HD bridal makeup",
      "Signature hairstyle",
      "Lashes & draping",
      "Personal consultation",
    ],
  ],
  [
    "The Royal Bride",
    "₹38,000",
    [
      "Airbrush bridal makeup",
      "Premium hair styling",
      "Luxury draping",
      "Skin-prep consultation",
      "Priority booking",
    ],
  ],
  [
    "The Grand Experience",
    "Custom",
    [
      "Multiple event looks",
      "Dedicated bridal artist",
      "Premium styling & draping",
      "Personalized beauty plan",
    ],
  ],
];
function App() {
  const [page, setPage] = useState("home"),
    [menu, setMenu] = useState(false),
    [filter, setFilter] = useState("All"),
    [modal, setModal] = useState(false),
    [bookings, setBookings] = useState([]),
    [status, setStatus] = useState("All"),
    [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Bridal Makeup",
    date: "",
    time: "",
    notes: "",
  });
  const go = (p) => {
    setPage(p);
    setMenu(false);
    window.scrollTo(0, 0);
  };
  const submit = (e) => {
    e.preventDefault();
    setBookings([
      { ...form, id: Date.now(), state: "New Request" },
      ...bookings,
    ]);
    setModal(false);
    setForm({
      name: "",
      phone: "",
      email: "",
      service: "Bridal Makeup",
      date: "",
      time: "",
      notes: "",
    });
    alert(
      "Request saved in this demo. The studio will need to confirm availability.",
    );
  };
  const nav = [
    ["Home", "home"],
    ["Services", "services"],
    ["Our Work", "gallery"],
    ["Packages", "packages"],
    ["About", "about"],
  ];
  return (
    <>
      <header className="header">
        <button className="brand" onClick={() => go("home")}>
          <span className="monogram">É</span>
          <span>
            ÉLORA<small>THE BRIDAL BEAUTY ATELIER</small>
          </span>
        </button>
        <nav>
          {nav.map(([n, p]) => (
            <button
              className={page === p ? "active" : ""}
              onClick={() => go(p)}
              key={p}
            >
              {n}
            </button>
          ))}
        </nav>
        <div className="head-actions">
          <button className="admin-link" onClick={() => go("admin")}>
            Studio Login <ArrowUpRight size={14} />
          </button>
          <button className="gold-btn" onClick={() => setModal(true)}>
            Book a Consultation <ArrowUpRight size={15} />
          </button>
        </div>
        <button className="mobile-menu" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      {menu && (
        <div className="mobile-nav">
          {nav.map(([n, p]) => (
            <button onClick={() => go(p)}>{n}</button>
          ))}
          <button onClick={() => go("admin")}>Studio Login</button>
        </div>
      )}
      {page === "home" && (
        <>
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow">
                <span /> THE ART OF BECOMING UNFORGETTABLE
              </div>
              <h1>
                Your most beautiful
                <br />
                <i>chapter</i> begins here.
              </h1>
              <p>
                Beauty that feels like you. Bridal artistry, thoughtful details,
                and a little ÉLORA magic for the moments that matter most.
              </p>
              <div className="hero-buttons">
                <button className="dark-btn" onClick={() => go("packages")}>
                  Explore Bridal Packages <ArrowUpRight size={16} />
                </button>
                <button className="text-btn" onClick={() => go("gallery")}>
                  Discover our work <ArrowRight size={16} />
                </button>
              </div>
              <div className="hero-proof">
                <div className="avatars">
                  <img src={photos.portrait} />
                  <img src={photos.bride} />
                  <img src={photos.makeup} />
                </div>
                <div>
                  <div className="stars">★★★★★</div>
                  <small>Personal artistry. Lasting confidence.</small>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <img src={photos.hero} alt="Bridal beauty editorial portrait" />
              <div className="image-note">
                <span>01 / 04</span>
                <b>THE BRIDAL EDIT</b>
                <span>Timeless, always.</span>
              </div>
              <div className="vertical-label">ÉLORA · BEAUTY ATELIER</div>
            </div>
            <div className="hero-index">
              01 <span /> 04
            </div>
          </section>
          <div className="marquee">
            <span>BRIDAL BEAUTY</span> ✳ <span>PERSONAL ARTISTRY</span> ✳{" "}
            <span>YOUR MOMENT</span> ✳ <span>BRIDAL BEAUTY</span>
          </div>
          <section className="intro section">
            <div className="section-tag">01 — THE EXPERIENCE</div>
            <div className="intro-grid">
              <h2>
                Not just makeup.
                <br />
                <i>A feeling.</i>
              </h2>
              <div>
                <p className="lead">
                  The best version of yourself, brought to life with intention.
                </p>
                <p>
                  Every face tells a story. We create considered, modern beauty
                  looks that honor your features, your style, and the feeling
                  you want to remember long after the celebration.
                </p>
                <button className="under-link" onClick={() => go("about")}>
                  Meet the atelier <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </section>
          <section className="services-section section">
            <div className="section-head">
              <div>
                <div className="section-tag">02 — OUR SIGNATURE SERVICES</div>
                <h2>
                  Artistry for every <i>occasion.</i>
                </h2>
              </div>
              <button className="under-link" onClick={() => go("services")}>
                View all services <ArrowUpRight size={15} />
              </button>
            </div>
            <div className="service-grid">
              {services.map((s, i) => (
                <article
                  className="service-card"
                  key={s[0]}
                  onClick={() => setModal(true)}
                >
                  <div className="service-img">
                    <img src={s[3]} />
                    <span>0{i + 1}</span>
                    <button aria-label="Book service">
                      <ArrowUpRight />
                    </button>
                  </div>
                  <div className="service-meta">
                    <div>
                      <h3>{s[0]}</h3>
                      <p>{s[1]}</p>
                    </div>
                    <b>{s[2]}</b>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="quote-band">
            <div className="quote-img">
              <img src={photos.makeup} />
            </div>
            <div className="quote-copy">
              <div className="section-tag">THE ÉLORA PROMISE</div>
              <h2>
                Every detail,
                <br />
                <i>beautifully considered.</i>
              </h2>
              <p>
                From your first consultation to the final touch, your experience
                is personal, calm, and entirely yours.
              </p>
              <button className="light-btn" onClick={() => setModal(true)}>
                Begin your bridal journey <ArrowUpRight size={15} />
              </button>
            </div>
          </section>
          <section className="packages-section section">
            <div className="center-head">
              <div className="section-tag">03 — THE BRIDAL COLLECTION</div>
              <h2>
                Made for your <i>moment.</i>
              </h2>
              <p>
                Thoughtfully curated experiences, with room for your own story.
              </p>
            </div>
            <div className="package-grid">
              {packages.map((p, i) => (
                <div className={"package-card " + (i === 1 ? "featured" : "")}>
                  <span className="package-label">
                    {i === 1 ? "MOST LOVED" : `COLLECTION 0${i + 1}`}
                  </span>
                  <h3>{p[0]}</h3>
                  <div className="price">{p[1]}</div>
                  <div className="package-rule" />
                  <ul>
                    {p[2].map((x) => (
                      <li>
                        <Check size={14} />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={i === 1 ? "dark-btn" : "outline-btn"}
                    onClick={() => setModal(true)}
                  >
                    Enquire about this look <ArrowUpRight size={15} />
                  </button>
                </div>
              ))}
            </div>
          </section>
          <section className="gallery-preview section">
            <div className="section-head">
              <div>
                <div className="section-tag">04 — THE PORTFOLIO</div>
                <h2>
                  Beauty in <i>every frame.</i>
                </h2>
              </div>
              <button className="under-link" onClick={() => go("gallery")}>
                Explore the gallery <ArrowUpRight size={15} />
              </button>
            </div>
            <div className="gallery-strip">
              <img src={photos.bride} />
              <img src={photos.makeup} />
              <img src={photos.portrait} />
            </div>
          </section>
          <section className="testimonial">
            <div className="section-tag">KIND WORDS</div>
            <div className="big-stars">★★★★★</div>
            <blockquote>
              “I felt like myself, only more radiant. The entire experience was
              so thoughtful and calm.”
            </blockquote>
            <p>— A BRIDE, ÉLORA CLIENT</p>
          </section>
        </>
      )}
      {page === "services" && (
        <main className="inner-page section">
          <div className="section-tag">THE SERVICE MENU</div>
          <h1>
            Our signature <i>services.</i>
          </h1>
          <p className="lead">
            Thoughtful artistry for every celebration and every version of you.
          </p>
          <div className="filters">
            {["All", "Bridal", "Makeup", "Hair"].map((f) => (
              <button
                className={filter === f ? "selected" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="service-grid">
            {services
              .filter((s) => filter === "All" || s[4] === filter)
              .map((s, i) => (
                <article className="service-card">
                  <div className="service-img">
                    <img src={s[3]} />
                    <button onClick={() => setModal(true)}>
                      <ArrowUpRight />
                    </button>
                  </div>
                  <div className="service-meta">
                    <div>
                      <h3>{s[0]}</h3>
                      <p>{s[1]}</p>
                    </div>
                    <b>{s[2]}</b>
                  </div>
                </article>
              ))}
          </div>
        </main>
      )}
      {page === "gallery" && (
        <main className="inner-page section">
          <div className="section-tag">THE PORTFOLIO</div>
          <h1>
            Looks that tell <i>a story.</i>
          </h1>
          <p className="lead">
            A glimpse into our world of modern bridal beauty.
          </p>
          <div className="gallery-grid">
            {[
              photos.bride,
              photos.makeup,
              photos.portrait,
              photos.hair,
              photos.hero,
              photos.bride,
            ].map((p, i) => (
              <div className="gallery-tile">
                <img src={p} />
                <span>
                  {
                    [
                      "The bridal edit",
                      "Soft glam",
                      "Modern romance",
                      "The finishing touch",
                      "Timeless beauty",
                      "Golden hour bride",
                    ][i]
                  }
                </span>
              </div>
            ))}
          </div>
          <p className="demo-note">
            Portfolio imagery is illustrative demo content. Replace with the
            studio’s own approved client photographs.
          </p>
        </main>
      )}
      {page === "packages" && (
        <main className="inner-page section">
          <div className="section-tag">THE BRIDAL COLLECTION</div>
          <h1>
            Your day, your <i>signature.</i>
          </h1>
          <p className="lead">
            Explore our curated bridal experiences. Every package can be
            tailored to your celebration.
          </p>
          <div className="package-grid">
            {packages.map((p, i) => (
              <div className={"package-card " + (i === 1 ? "featured" : "")}>
                <span className="package-label">
                  {i === 1 ? "MOST LOVED" : `COLLECTION 0${i + 1}`}
                </span>
                <h3>{p[0]}</h3>
                <div className="price">{p[1]}</div>
                <div className="package-rule" />
                <ul>
                  {p[2].map((x) => (
                    <li>
                      <Check size={14} />
                      {x}
                    </li>
                  ))}
                </ul>
                <button
                  className={i === 1 ? "dark-btn" : "outline-btn"}
                  onClick={() => setModal(true)}
                >
                  Enquire now <ArrowUpRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </main>
      )}
      {page === "about" && (
        <main className="inner-page section about-page">
          <div className="about-photo">
            <img src={photos.portrait} />
          </div>
          <div className="about-copy">
            <div className="section-tag">A NOTE FROM THE ATELIER</div>
            <h1>
              Beauty, with <i>intention.</i>
            </h1>
            <p className="lead">
              A personal approach to the art of getting ready.
            </p>
            <p>
              ÉLORA is imagined as a space where beauty feels considered, never
              complicated. Our approach begins with listening: understanding
              your features, your outfit, your event, and most importantly, how
              you want to feel.
            </p>
            <p>
              We believe the most memorable look is the one that still feels
              unmistakably yours.
            </p>
            <button className="dark-btn" onClick={() => setModal(true)}>
              Let's talk about your day <ArrowUpRight size={15} />
            </button>
          </div>
        </main>
      )}
      {page === "admin" && (
        <main className="admin">
          <aside className="sidebar">
            <div className="admin-brand">
              <span className="monogram">É</span>
              <b>
                ÉLORA<small>STUDIO MANAGER</small>
              </b>
            </div>
            <div className="side-label">WORKSPACE</div>
            {[
              ["Overview", LayoutDashboard],
              ["Appointments", CalendarDays],
              ["Clients", Users],
              ["Services", Scissors],
              ["Portfolio", Image],
              ["Settings", Settings],
            ].map(([n, I]) => (
              <button
                className={status === n ? "side-active" : ""}
                onClick={() => setStatus(n)}
              >
                <I size={17} />
                {n}
              </button>
            ))}
            <div className="sidebar-bottom">
              <div className="avatar">EA</div>
              <div>
                <b>Élora Admin</b>
                <small>Studio owner</small>
              </div>
              <ChevronDown size={14} />
            </div>
          </aside>
          <div className="admin-main">
            <div className="admin-top">
              <div>
                <span className="section-tag">MONDAY, OCTOBER 05, 2026</span>
                <h2>{status === "All" ? "Good morning, Élora" : status}</h2>
              </div>
              <div className="admin-tools">
                <button className="icon-btn">
                  <Bell size={18} />
                </button>
                <button className="admin-avatar">EA</button>
              </div>
            </div>
            {status === "Appointments" ? (
              <>
                <div className="admin-title">
                  <div>
                    <h3>Appointment requests</h3>
                    <p>Manage inquiries and upcoming bookings.</p>
                  </div>
                  <button className="dark-btn" onClick={() => setModal(true)}>
                    + New booking
                  </button>
                </div>
                <div className="table-card">
                  <div className="table-tools">
                    <div className="searchbox">
                      <Search size={15} />
                      <input
                        placeholder="Search clients..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <span>{bookings.length} requests</span>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>CLIENT</th>
                        <th>SERVICE</th>
                        <th>EVENT DATE</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings
                        .filter((b) =>
                          b.name.toLowerCase().includes(search.toLowerCase()),
                        )
                        .map((b) => (
                          <tr>
                            <td>
                              <b>{b.name}</b>
                              <small>{b.phone}</small>
                            </td>
                            <td>{b.service}</td>
                            <td>{b.date || "—"}</td>
                            <td>
                              <span className="status-pill">{b.state}</span>
                            </td>
                            <td>
                              <select
                                value={b.state}
                                onChange={(e) =>
                                  setBookings(
                                    bookings.map((x) =>
                                      x.id === b.id
                                        ? { ...x, state: e.target.value }
                                        : x,
                                    ),
                                  )
                                }
                              >
                                <option>New Request</option>
                                <option>Confirmed</option>
                                <option>Completed</option>
                                <option>Cancelled</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  {!bookings.length && (
                    <div className="empty">
                      No appointment requests yet. New website inquiries will
                      appear here in this demo.
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="stats">
                  {[
                    ["Total appointments", "128", "+12.8%"],
                    [
                      "Pending requests",
                      String(bookings.length + 8),
                      "+4 this week",
                    ],
                    ["Confirmed bookings", "42", "+8.2%"],
                    ["Monthly revenue", "₹4.82L", "+18.4%"],
                  ].map((x, i) => (
                    <div className="stat-card">
                      <span>{x[0]}</span>
                      <strong>{x[1]}</strong>
                      <small className="positive">{x[2]}</small>
                      <div className="stat-spark">↗</div>
                    </div>
                  ))}
                </div>
                <div className="chart-grid">
                  <div className="chart-card">
                    <div className="chart-head">
                      <div>
                        <h3>Revenue overview</h3>
                        <p>Monthly performance · Demo data</p>
                      </div>
                      <select>
                        <option>Last 6 months</option>
                        <option>This year</option>
                      </select>
                    </div>
                    <div className="chart">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={[
                            { m: "May", v: 280 },
                            { m: "Jun", v: 360 },
                            { m: "Jul", v: 320 },
                            { m: "Aug", v: 490 },
                            { m: "Sep", v: 430 },
                            { m: "Oct", v: 580 },
                          ]}
                        >
                          <defs>
                            <linearGradient
                              id="fill"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#b99b69"
                                stopOpacity={0.28}
                              />
                              <stop
                                offset="100%"
                                stopColor="#b99b69"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            dataKey="m"
                            axisLine={false}
                            tickLine={false}
                          />
                          <YAxis hide />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="v"
                            stroke="#a88955"
                            strokeWidth={2}
                            fill="url(#fill)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="chart-card">
                    <div className="chart-head">
                      <div>
                        <h3>Popular services</h3>
                        <p>Bookings by category · Demo</p>
                      </div>
                    </div>
                    <div className="chart">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { m: "Bridal", v: 48 },
                            { m: "Party", v: 26 },
                            { m: "Hair", v: 18 },
                            { m: "Other", v: 10 },
                          ]}
                        >
                          <XAxis
                            dataKey="m"
                            axisLine={false}
                            tickLine={false}
                          />
                          <YAxis hide />
                          <Tooltip />
                          <Bar
                            dataKey="v"
                            fill="#b99b69"
                            radius={[5, 5, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <div className="table-card recent">
                  <div className="chart-head">
                    <div>
                      <h3>Recent appointment requests</h3>
                      <p>Latest client inquiries</p>
                    </div>
                    <button
                      className="under-link"
                      onClick={() => setStatus("Appointments")}
                    >
                      View all <ArrowRight size={14} />
                    </button>
                  </div>
                  {bookings.slice(0, 3).map((b) => (
                    <div className="recent-row">
                      <div className="avatar">
                        {b.name.slice(0, 1).toUpperCase()}
                      </div>
                      <div>
                        <b>{b.name}</b>
                        <small>
                          {b.service} · {b.date || "Date not set"}
                        </small>
                      </div>
                      <span className="status-pill">{b.state}</span>
                    </div>
                  ))}
                  {!bookings.length && (
                    <div className="empty">
                      Demo dashboard preview. New requests submitted through the
                      booking form will appear here.
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </main>
      )}
      {page !== "admin" && (
        <footer>
          <div className="footer-top">
            <div>
              <div className="footer-brand">
                <span className="monogram">É</span>
                <span>
                  ÉLORA<small>THE BRIDAL BEAUTY ATELIER</small>
                </span>
              </div>
              <h2>
                Make it a moment
                <br />
                <i>to remember.</i>
              </h2>
              <button className="light-btn" onClick={() => setModal(true)}>
                Book your consultation <ArrowUpRight size={15} />
              </button>
            </div>
            <div className="footer-links">
              <div>
                <b>EXPLORE</b>
                {nav.map(([n, p]) => (
                  <button onClick={() => go(p)}>{n}</button>
                ))}
              </div>
              <div>
                <b>GET IN TOUCH</b>
                <span>By appointment only</span>
                <a href="tel:+910000000000">+91 00000 00000</a>
                <a href="mailto:hello@elora.example">hello@elora.example</a>
                <a href="https://instagram.com" target="_blank">
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Gentech Enterprises</span>
            <span>MADE FOR YOUR MOST BEAUTIFUL MOMENTS</span>
            <span>PRIVACY · TERMS</span>
          </div>
        </footer>
      )}
      {page !== "admin" && (
        <div className="float-contact">
          <a
            className="wa"
            href="https://wa.me/910000000000?text=Hello%20Elora%2C%20I%27d%20like%20to%20enquire%20about%20an%20appointment."
            target="_blank"
            aria-label="WhatsApp"
          >
            ✆
          </a>
          <a className="call" href="tel:+910000000000" aria-label="Call">
            <Phone size={19} />
          </a>
        </div>
      )}
      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(false)}>
          <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(false)}>
              <X />
            </button>
            <div className="section-tag">YOUR ÉLORA EXPERIENCE</div>
            <h2>
              Let's plan your <i>moment.</i>
            </h2>
            <p>
              Share a few details and our studio will be in touch to confirm
              availability.
            </p>
            <form onSubmit={submit}>
              <div className="form-row">
                <label>
                  Full name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  WhatsApp number
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91"
                  />
                </label>
              </div>
              <label>
                Email address
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
              <div className="form-row">
                <label>
                  Service
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                  >
                    {services.map((s) => (
                      <option>{s[0]}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Event date
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </label>
              </div>
              <label>
                Tell us about your event
                <textarea
                  rows="3"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Location, event details, preferred look..."
                />
              </label>
              <button className="dark-btn submit-btn">
                Send appointment request <ArrowUpRight size={15} />
              </button>
              <small className="form-privacy">
                Your request is not confirmed until availability is verified by
                the studio.
              </small>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
