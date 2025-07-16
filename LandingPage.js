import React, { useState } from 'react';
import './LandingPage.css';
import { ReactTyped } from 'react-typed';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the email submission logic
    setSubmitted(true);
  };

  const [bottomEmail, setBottomEmail] = useState('');
  const [bottomSubmitted, setBottomSubmitted] = useState(false);
  const handleBottomSubmit = (e) => {
    e.preventDefault();
    setBottomSubmitted(true);
  };

  const [starterKitSubmitted, setStarterKitSubmitted] = useState(false);

  const ideaList = [
    { icon: "🛠️", text: "Sell a Notion tracker", tags: ["Low effort", "Fast to launch"] },
    { icon: "🧠", text: "Teach ChatGPT via email course", tags: ["Passive income", "Low effort"] },
    { icon: "🖼️", text: "Curate digital art as a weekly drop", tags: ["Fast to launch"] },
    { icon: "📈", text: "Launch a micro-SaaS on Gumroad", tags: ["Passive income"] },
    { icon: "📚", text: "Publish a paid newsletter", tags: ["Low effort", "Passive income"] },
  ];
  const ideaFilters = ["All", "Low effort", "Passive income", "Fast to launch"];
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filteredIdeas = selectedFilter === "All"
    ? ideaList
    : ideaList.filter(idea => idea.tags.includes(selectedFilter));

  return (
    <>
      <div className="announcement-bar">
        🚀 Get your FREE AI-powered Pitch Audit Bot 🤖 <strong>– Limited time only!</strong>
      </div>
      <nav className="main-navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <span className="navbar-site-name">FirstK</span>
          </div>
          <ul className="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <form className="navbar-search" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Search..." />
            <button type="submit" aria-label="Search">
              <span role="img" aria-label="search">🔍</span>
            </button>
          </form>
          <a href="#" className="navbar-cta">Join Now</a>
        </div>
      </nav>
      <span className="site-title">
        <ReactTyped
          strings={['FirstK', 'FirstK Project', 'FirstK Newsletter']}
          typeSpeed={120}
          backSpeed={60}
          loop={true}
          showCursor={true}
        />
      </span>
      <section className="hero-section">
        <div className="hero-img">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Hero" />
        </div>
        <div className="hero-content">
          <h1>
            <ReactTyped
              strings={["Don’t start a company. Start earning your first $1000 online."]}
              typeSpeed={50}
              backSpeed={30}
              loop={false}
              showCursor={false}
            />
          </h1>
          <div className="hero-divider"></div>
          <p className="subheadline">
            Learn how to build small, profitable internet projects with zero fluff — guides, tools, playbooks, and real income reports.
          </p>
          {!submitted ? (
            <form className="cta-form" onSubmit={handleSubmit}>
              <button type="submit">Subscribe for free</button>
              <button type="button" className="secondary-cta">Get the $1K Starter Kit</button>
            </form>
          ) : (
            <div className="thank-you">Thank you! Check your inbox for the playbook.</div>
          )}
        </div>
      </section>
      <section className="starterkit-section">
        <div className="starterkit-content">
          <h2>🎁 The $1K Starter Kit</h2>
          <p className="starterkit-sub">
            Get a bundle of free resources to kickstart your first $1,000 online.
          </p>
          <ul className="starterkit-list">
            <li>✅ Checklist: <strong>Validate Your Idea in 30 Minutes</strong></li>
            <li>✅ Mini playbook: <strong>How I Made $1K With a Notion Template</strong></li>
            <li>✅ Tool list: <strong>Free tools for launching your MVP</strong></li>
            <li>✅ Income report: <strong>First $1K breakdown</strong></li>
          </ul>
          {!starterKitSubmitted ? (
            <form className="starterkit-form" onSubmit={e => { e.preventDefault(); setStarterKitSubmitted(true); }}>
              <input type="email" placeholder="Enter your email to get the kit" required />
              <button type="submit">Get the Starter Kit</button>
            </form>
          ) : (
            <div className="thank-you">Thank you! Check your inbox for your Starter Kit.</div>
          )}
        </div>
      </section>
      <section className="ideasparks-section">
        <h2>💡 Idea Sparks</h2>
        <div className="ideasparks-filters">
          {ideaFilters.map(filter => (
            <button
              key={filter}
              className={selectedFilter === filter ? "active" : ""}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <ul className="ideasparks-list">
          {filteredIdeas.map((idea, idx) => (
            <li key={idx}>
              <span className="ideasparks-icon">{idea.icon}</span>
              {idea.text}
            </li>
          ))}
        </ul>
      </section>
      <section className="featured-spotlight-section">
        <div className="featured-spotlight-card">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Featured Playbook" className="featured-spotlight-img" />
          <div className="featured-spotlight-content">
            <h2>🔥 Featured This Week</h2>
            <h3>Ultimate $1K Project Playbook</h3>
            <p>Our most valuable, step-by-step guide to help you launch and grow your first $1,000 project. Packed with proven strategies, templates, and real-world examples.</p>
            <a href="#" className="featured-spotlight-btn">Grab it now</a>
          </div>
        </div>
      </section>
      <section className="featured-section">
        <h2>Featured Playbooks</h2>
        <div className="featured-list">
          <div className="featured-card">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Launch Playbook" className="card-img" />
            <h3>🚀 Launch Your First $1K Project</h3>
            <p>Step-by-step guide to go from idea to your first $1,000 online.</p>
            <a href="#" className="featured-link">View Playbook</a>
          </div>
          <div className="featured-card">
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80" alt="Tools Vault" className="card-img" />
            <h3>🛠️ Tools & Templates Vault</h3>
            <p>Access ready-to-use templates and tools to save time and boost results.</p>
            <a href="#" className="featured-link">Explore Tools</a>
          </div>
          <div className="featured-card">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Income Reports" className="card-img" />
            <h3>📈 Real Income Reports</h3>
            <p>See real numbers, breakdowns, and strategies from successful projects.</p>
            <a href="#" className="featured-link">See Reports</a>
          </div>
        </div>
      </section>
      <section className="tools-section">
        <h2>🧰 Ready-to-Use Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="Notion Template" className="card-img" />
            <div className="tool-icon">🗂️</div>
            <h3>Notion Startup OS</h3>
            <p>All-in-one Notion workspace to plan, launch, and track your first $1K project.</p>
            <a href="#" className="tool-btn">Use Template</a>
          </div>
          <div className="tool-card">
            <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80" alt="Google Sheets" className="card-img" />
            <div className="tool-icon">📊</div>
            <h3>Google Sheets Tracker</h3>
            <p>Track your progress, revenue, and growth with this easy-to-use Google Sheet.</p>
            <a href="#" className="tool-btn">Download Free</a>
          </div>
          <div className="tool-card">
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80" alt="Checklist" className="card-img" />
            <div className="tool-icon">✅</div>
            <h3>Launch Checklist</h3>
            <p>Never miss a step! Use this checklist to launch your project with confidence.</p>
            <a href="#" className="tool-btn">Try Now</a>
          </div>
          <div className="tool-card">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="AI Prompt Pack" className="card-img" />
            <div className="tool-icon">🤖</div>
            <h3>AI Prompt Pack</h3>
            <p>Get a collection of proven AI prompts to help you brainstorm, write, and market faster.</p>
            <a href="#" className="tool-btn">Download Free</a>
          </div>
        </div>
      </section>
      <section className="playbooks-section">
        <h2>📘 Actionable Playbooks to Earn Your First $1000</h2>
        <div className="playbooks-grid">
          <div className="playbook-card">
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80" alt="Freelance Gig" className="card-img" />
            <h3>First Freelance Gig</h3>
            <p>Land your first client and get paid for your skills, even with zero experience.</p>
            <a href="#" className="playbook-btn">Start this playbook</a>
          </div>
          <div className="playbook-card">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Notion Template" className="card-img" />
            <h3>Selling a Notion Template</h3>
            <p>Create, market, and sell your own Notion template to a global audience.</p>
            <a href="#" className="playbook-btn">View steps</a>
          </div>
          <div className="playbook-card">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Monetize Newsletter" className="card-img" />
            <h3>Monetize Your Newsletter</h3>
            <p>Turn your newsletter into a revenue stream with sponsorships and products.</p>
            <a href="#" className="playbook-btn">Start this playbook</a>
          </div>
          <div className="playbook-card">
            <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80" alt="Digital Product" className="card-img" />
            <h3>Create a Digital Product</h3>
            <p>Go from idea to launch with a digital product that sells while you sleep.</p>
            <a href="#" className="playbook-btn">View steps</a>
          </div>
        </div>
      </section>
      <section className="latest-section">
        <h2>🆕 What’s New</h2>
        <div className="latest-list">
          <div className="latest-card">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="New Playbook" className="card-img" />
            <div className="latest-info">
              <h3>New Playbook: Build & Sell Your First Digital Product</h3>
              <p>Learn how to create, launch, and profit from your first digital product step-by-step.</p>
              <a href="#" className="latest-btn">View</a>
            </div>
          </div>
          <div className="latest-card">
            <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80" alt="Blog Post" className="card-img" />
            <div className="latest-info">
              <h3>Blog: 5 Mistakes First-Time Founders Make</h3>
              <p>Discover the most common pitfalls and how to avoid them on your journey.</p>
              <a href="#" className="latest-btn">Read</a>
            </div>
          </div>
          <div className="latest-card">
            <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="Income Report" className="card-img" />
            <div className="latest-info">
              <h3>Income Report: June 2025</h3>
              <p>See the latest numbers, growth, and lessons learned from this month’s report.</p>
              <a href="#" className="latest-btn">See Report</a>
            </div>
          </div>
          <div className="latest-card">
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80" alt="New Tool" className="card-img" />
            <div className="latest-info">
              <h3>New Tool: Email List Builder</h3>
              <p>Grow your audience with our easy-to-use, free email list building tool.</p>
              <a href="#" className="latest-btn">Download</a>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits-section">
        <div className="benefits-content">
          <h2>What You’ll Get</h2>
          <ul className="benefits-list">
            <li><span className="check">✔️</span> Step-by-step guides (playbooks)</li>
            <li><span className="check">✔️</span> Tools & templates</li>
            <li><span className="check">✔️</span> Real strategies and insights</li>
            <li><span className="check">✔️</span> Income reports and breakdowns</li>
            <li><span className="check">✔️</span> No fluff — just what works</li>
          </ul>
        </div>
      </section>
      <section className="who-section">
        <div className="who-content">
          <h2>Who This is For</h2>
          <ul className="who-list">
            <li>People who are tired of “startup” noise</li>
            <li>Beginners looking for clear direction</li>
            <li>Freelancers, students, side-hustlers</li>
          </ul>
        </div>
      </section>
      <section className="journey-section">
        <div className="journey-content">
          <h2>The Journey We Cover</h2>
          <div className="journey-timeline">
            <div className="journey-step"><span className="journey-icon">💡</span><span>Ideas</span></div>
            <div className="journey-arrow">→</div>
            <div className="journey-step"><span className="journey-icon">🚀</span><span>Start</span></div>
            <div className="journey-arrow">→</div>
            <div className="journey-step"><span className="journey-icon">🌱</span><span>Grow</span></div>
            <div className="journey-arrow">→</div>
            <div className="journey-step"><span className="journey-icon">💰</span><span>Monetize</span></div>
            <div className="journey-arrow">→</div>
            <div className="journey-step"><span className="journey-icon">📈</span><span>Scale</span></div>
            <div className="journey-arrow">→</div>
            <div className="journey-step"><span className="journey-icon">🏁</span><span>Exit</span></div>
            <div className="journey-arrow">→</div>
            <div className="journey-step"><span className="journey-icon">🏆</span><span>Legacy</span></div>
          </div>
        </div>
      </section>
      <section className="social-proof-section">
        <div className="social-proof-content">
          <h2>What Others Are Saying</h2>
          <div className="testimonial-placeholder">
            {/* Replace this with real testimonials or numbers when available */}
            <p>⭐️⭐️⭐️⭐️⭐️<br />
            “Join 2,000+ subscribers who are building their first $1000 project!”</p>
          </div>
        </div>
      </section>
      <section className="cta-bottom-section">
        <div className="cta-bottom-content">
          <h2>Get the tools, guides, and playbooks to start your first $1000 project. Join now.</h2>
          {!bottomSubmitted ? (
            <form className="cta-form" onSubmit={handleBottomSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={bottomEmail}
                onChange={(e) => setBottomEmail(e.target.value)}
                required
              />
              <button type="submit">Join Now</button>
            </form>
          ) : (
            <div className="thank-you">Thank you for joining! Check your inbox for your first steps.</div>
          )}
        </div>
      </section>
      <footer className="footer-bar">
        <div className="footer-content">
          <div className="footer-col">
            <h4>PRODUCTS</h4>
            <a href="#">Wallet-Opening Words</a>
            <a href="#">Clarity Call Cheatsheets</a>
            <a href="#">PAINKILLER Messaging System</a>
          </div>
          <div className="footer-col">
            <h4>ADVERTISE</h4>
            <a href="#">Sponsor newsletter</a>
          </div>
          <div className="footer-col">
            <h4>PAST NEWSIES</h4>
            <a href="#">For Marketers</a>
            <a href="#">For Founders</a>
            <a href="#">For Copywriters</a>
            <a href="#">For Creators</a>
            <a href="#">Full Archive</a>
          </div>
          <div className="footer-col social">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="footer-icon" /></a>
              <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" className="footer-icon" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright ©2025 FirstK. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default LandingPage; 