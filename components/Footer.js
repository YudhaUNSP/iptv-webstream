// components/Footer.js
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <div className="footer-logo">
            <i className="fas fa-tv"></i>
            <span>YuuStream</span>
          </div>
          <p>Platform streaming TV online gratis untuk semua orang.</p>
        </div>

        <div className="footer-links">
          {/* <h3>Menu</h3> */}
          <ul>
            {/* Menu items removed */}
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2025 YuuStream.</p>
        <p>
          by <a href="https://www.facebook.com/yuddxd/" target="_blank" rel="noopener noreferrer" className="creator-link">Yuda</a>
        </p>
      </div>
    </footer>
  );
}
