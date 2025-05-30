// pages/channels.js
import { useState } from 'react';
import Layout from '../components/Layout';
import { parseM3U } from '../lib/parse-m3u';

export default function Channels({ channels }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Ambil kategori unik dari data channel
  const categories = Array.from(
    new Set(channels.map((ch) => ch.category).filter(Boolean))
  ).sort();

  const filteredChannels =
    activeFilter === 'all'
      ? channels
      : channels.filter((ch) => ch.category === activeFilter);

  const handleFilter = (category) => {
    setActiveFilter(category);
  };

  return (
    <Layout>
      <section id="channels-page" className="page">
        <div className="channels-page">
          <h1 className="page-title">Daftar Channel TV</h1>

          <div className="filters">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilter('all')}
            >
              Semua
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => handleFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="channels-grid" id="channels-grid">
            {filteredChannels.map((ch) => (
              <div key={ch.id} className="channel-card">
                <div className="channel-card-thumbnail">
                  {ch.logo ? (
                    <img
                      src={ch.logo}
                      alt={ch.name}
                      style={{ 
                        objectFit: 'contain', 
                        width: '100%', 
                        height: '100%',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        padding: '10%',
                        backgroundColor: 'white'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/default-channel.png";
                      }}
                    />
                  ) : (
                    <div className="channel-icon-placeholder">
                      <i className="fas fa-tv"></i>
                    </div>
                  )}
                </div>
                <div className="channel-card-body">
                  <h3>{ch.name}</h3>
                  <p>{ch.category || 'Lainnya'}</p>
                  <a
                    href={`/?channel=${ch.id}`}
                    className="watch-btn"
                  >
                    Tonton
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'yu.m3u');
    const m3uText = fs.readFileSync(filePath, 'utf-8');
    const channels = parseM3U(m3uText);

    return {
      props: { channels },
      revalidate: 60 * 10,
    };
  } catch (err) {
    console.error('Gagal baca M3U:', err);
    return {
      props: { channels: [] },
      revalidate: 60 * 10,
    };
  }
}
