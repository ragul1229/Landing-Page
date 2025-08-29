import React, { useEffect, useState } from "react";
import "../styles/Home.css";

export const Home = () => {
  const [data, setData] = useState({
    hero: [],
    clients: [],
    community: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from backend
    fetch("http://localhost/landingapi/fetch_all.php")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((backendData) => {
        setData({
          hero: backendData.hero || [],
          clients: backendData.clients || [],
          community: backendData.community || [],
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading content...</p>;
  if (error) return <p>Error loading data: {error}</p>;

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <div className="hero-section">
        {data.hero.length > 0 ? (
          data.hero.map((hero) => (
            <div key={hero.id || hero.heading} className="hero-section-inner">
              <div className="hero-section-grid">
                <div className="hero-section-text">
                  <h1>
                    {hero.heading}{" "}
                    {hero.subheading && (
                      <span className="hero-section-green">{hero.subheading}</span>
                    )}
                  </h1>
                  {hero.description && <p>{hero.description}</p>}
                  <button className="register-button">Register</button>
                </div>
                <div className="hero-section-image">
                  {hero.image_url && (
                    <img
                      className="hero-image"
                      src={hero.image_url}
                      alt={hero.heading || "Hero image"}
                    />
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hero data available.</p>
        )}
      </div>

      {/* CLIENTS SECTION */}
      <div className="client-section">
        <div className="client-section-contents">
          <h4>Our Clients</h4>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="client-section-logos">
          {data.clients.length > 0 ? (
            data.clients.map((client) =>
              client.logo_url ? (
                <img
                  key={client.id || client.name}
                  src={client.logo_url}
                  alt={client.name || "Client logo"}
                />
              ) : null
            )
          ) : (
            <p>No clients available.</p>
          )}
        </div>
      </div>

      {/* COMMUNITY SECTION */}
      <div className="community-section">
        <div className="community-section-title">
          <h4>Manage your entire community in a single system</h4>
          <p>Who is Nextcent suitable for?</p>
        </div>
        <div className="community-section-frame">
          {data.community.length > 0 ? (
            data.community.map((member) => (
             <div className="frame" key={member.id}>
  <img
    src={
      member.icon_url ||
      "http://localhost/landingapi/images/default-member.png"
    }
    alt={member.title || "member-image"}
  />
  <h4>{member.title || "Member Name"}</h4>
  <p>{member.subtitle || member.description || "Default description..."}</p>
</div>

            ))
          ) : (
            <p>No community members available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
