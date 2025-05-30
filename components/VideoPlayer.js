// components/VideoPlayer.js
import { useEffect, useRef, useState } from 'react';

export default function VideoPlayer({ src, poster, channelName }) {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!videoRef.current || !src) return;
    
    // Reset state
    setLoading(true);
    
    const videoEl = videoRef.current;
    
    // Jika ini adalah HLS stream (m3u8), gunakan HLS.js jika tersedia
    if (src.includes('.m3u8') && window.Hls) {
      try {
        const hls = new window.Hls({
          xhrSetup: function(xhr) {
            xhr.withCredentials = false; // Penting untuk mengatasi CORS
          }
        });
        
        hls.attachMedia(videoEl);
        hls.loadSource(src);
        
        hls.on(window.Hls.Events.MANIFEST_PARSED, function() {
          setLoading(false);
          videoEl.play().catch(e => {
            console.error("Autoplay error:", e);
          });
        });
        
        hls.on(window.Hls.Events.ERROR, function(event, data) {
          if (data.fatal) {
            console.error('Fatal HLS error:', data);
            // Error handling tetap ada tapi tidak menampilkan overlay error
          }
        });
        
        return () => {
          hls.destroy();
        };
      } catch (e) {
        console.error("HLS init error:", e);
        setLoading(false);
      }
    } 
    // Fallback untuk browser yang mendukung native HLS (Safari) atau video biasa
    else {
      videoEl.src = src;
      videoEl.load();
      
      videoEl.oncanplay = () => {
        setLoading(false);
      };
      
      videoEl.onerror = () => {
        console.error("Video error:", videoEl.error);
        setLoading(false);
      };
      
      videoEl.play().catch(e => {
        console.error("Play error:", e);
      });
    }
  }, [src]);

  return (
    <div className="player-container">
      <div className="channel-info">
        {poster && (
          <img
            src={poster}
            alt={channelName}
            width="30"
            height="30"
          />
        )}
        <h3>{channelName}</h3>
      </div>
      
      <div className="video-container">
        {loading && (
          <div className="player-overlay loading">
            <div className="spinner"></div>
            <p>Memuat stream...</p>
          </div>
        )}
        
        <video
          ref={videoRef}
          controls
          poster={poster || ''}
          preload="auto"
          playsInline
          style={{ width: '100%', height: '400px', backgroundColor: 'black' }}
        />
      </div>
      
      {/* Hapus opsi alternatif */}
    </div>
  );
}
