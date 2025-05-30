// components/ChannelList.js
import ChannelCard from './ChannelCard';

export default function ChannelList({ channels, onSelect, selectedId }) {
  console.log('ChannelList:', channels); // debug
  
  if (!channels || channels.length === 0) {
    return (
      <div className="channel-list" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p>Tidak ada channel tersedia</p>
      </div>
    );
  }
  
  return (
    <div className="channel-list">
      {channels.map((ch) => (
        <ChannelCard
          key={ch.id}
          channel={ch}
          onClick={onSelect}
          isActive={ch.id === selectedId}
        />
      ))}
    </div>
  );
}
