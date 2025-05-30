// pages/index.js
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import VideoPlayer from '../components/VideoPlayer';
import ChannelList from '../components/ChannelList';
import { parseM3U } from '../lib/parse-m3u';
import { useRouter } from 'next/router';

export default function Home({ channels }) {
  const router = useRouter();
  const [selectedChannel, setSelectedChannel] = useState(null);

  // Effect untuk menangani pilihan channel dari URL query
  useEffect(() => {
    if (channels.length > 0) {
      if (router.query.channel) {
        const channel = channels.find(ch => ch.id === router.query.channel);
        if (channel) {
          setSelectedChannel(channel);
        } else {
          setSelectedChannel(channels[0]);
        }
      } else {
        setSelectedChannel(channels[0]);
      }
    }
  }, [router.query.channel, channels]);

  // Handler untuk pemilihan channel
  const handleSelect = (ch) => {
    setSelectedChannel(ch);
    // Update URL dengan ID channel yang dipilih (opsional)
    router.push(`/?channel=${ch.id}`, undefined, { shallow: true });
  };

  return (
    <Layout>
      <section id="home-page" className="page active">
        <div className="container">
          <div className="player-section">
            {/* Video Player di sebelah kiri */}
            <div style={{ flex: 3, minWidth: 0 }}>
              {selectedChannel ? (
                <VideoPlayer
                  src={selectedChannel.url}
                  poster={selectedChannel.logo}
                  channelName={selectedChannel.name}
                />
              ) : (
                <div className="player-container">
                  <div className="channel-info">
                    <h3>Memuat channel...</h3>
                  </div>
                  <div style={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f0f0" }}>
                    <p>Memuat channel...</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Daftar Channel di sebelah kanan */}
            <div style={{ flex: 2, minWidth: 300 }}>
              <h3 style={{ marginBottom: "15px", fontSize: "18px" }}>Daftar Channel</h3>
              <ChannelList
                channels={channels}
                onSelect={handleSelect}
                selectedId={selectedChannel?.id}
              />
            </div>
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
