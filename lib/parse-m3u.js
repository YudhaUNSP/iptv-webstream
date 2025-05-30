// lib/parse-m3u.js

/**
 * parseM3U: Mengubah string M3U menjadi array objek { id, name, logo, category, url }.
 * @param {string} m3uText - Isi file .m3u sebagai teks.
 * @returns {Array<{id: string, name: string, logo: string|null, category: string|null, url: string}>}
 */
export function parseM3U(m3uText) {
  // Split setiap baris dan trim whitespace
  const lines = m3uText.split('\n').map((l) => l.trim());
  const channels = [];
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Jika baris metadata (#EXTINF:)
    if (line.startsWith('#EXTINF:')) {
      // Ambil setelah "#EXTINF:"
      const infoLine = line.slice(8).trim(); 
      // Cari koma pertama => pemisah atribut dan nama channel
      const commaIndex = infoLine.indexOf(',');
      const attrsPart = commaIndex !== -1 ? infoLine.slice(0, commaIndex) : infoLine;
      const rawName = commaIndex !== -1 ? infoLine.slice(commaIndex + 1).trim() : '';

      const channel = {
        id: rawName
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9\-]/g, ''), // hanya a–z0–9 dan tanda minus
        name: rawName,
        logo: null,
        category: null,
        url: '',
      };

      // Extract atribut tvg-logo dan group-title
      const attrRegex = /(\w+?)="(.*?)"(?:\s|,|$)/g;
      let match;
      while ((match = attrRegex.exec(attrsPart)) !== null) {
        const key = match[1]; // misal: tvg-logo, group-title
        const val = match[2]; // misal: https://…/logo.png, General
        if (key === 'tvg-logo') {
          // Validasi URL gambar
          if (val && val.startsWith('http')) {
            channel.logo = val;
          } else {
            channel.logo = null; // Set null jika URL tidak valid
          }
        }
        if (key === 'group-title') {
          channel.category = val.toLowerCase();
        }
      }

      current = channel;
    }
    // Jika bukan komentar (#) dan ada objek current => ini baris URL
    else if (line && !line.startsWith('#') && current) {
      current.url = line;
      channels.push(current);
      current = null;
    }
    // Lainnya: skip
  }

  return channels;
}