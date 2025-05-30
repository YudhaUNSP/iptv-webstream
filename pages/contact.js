// pages/contact.js
import Layout from '../components/Layout';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim (Demo).');
    // Jika diinginkan, ganti dengan POST ke endpoint API
  };

  return (
    <Layout>
      <section id="contact-page" className="page">
        <div className="contact-page">
          <h2>Hubungi Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan, saran, atau masukan, silakan hubungi kami melalui formulir di bawah ini.
          </p>

          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subjek</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
