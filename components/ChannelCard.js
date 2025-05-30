// components/ChannelCard.js
export default function ChannelCard({ channel, onClick, isActive }) {
  // State untuk menangani error gambar
  const handleImageError = (e) => {
    e.target.onerror = null; 
    e.target.src = '/default-channel.png'; // Fallback ke default image
  };

  return (
    <div
      className={`channel-item ${isActive ? 'active' : ''}`}
      onClick={() => onClick(channel)}
    >
      <div style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
        <div style={{width: '65px', height: '65px', marginRight: '12px', flexShrink: 0, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px'}}>
          {channel.logo ? (
            <img
              src={channel.logo}
              alt={channel.name}
              onError={handleImageError}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
            />
          ) : (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: '#3B82F6', color: 'white', borderRadius: '4px'}}>
              <i className="fas fa-tv" style={{fontSize: '24px'}}></i>
            </div>
          )}
        </div>
        <div style={{flex: 1, minWidth: 0}}>
          <h3 style={{margin: 0, fontSize: '16px', fontWeight: '600', marginBottom: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {channel.name}
          </h3>
          <p style={{margin: 0, fontSize: '14px', color: '#64748b'}}>
            {channel.category || 'Lainnya'}
          </p>
        </div>
      </div>
    </div>
  );
}
