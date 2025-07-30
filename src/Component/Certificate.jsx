import certificates from "../assets/Json/Certificate.js";
import "../Sass/Certificate.scss";

const CertificateSection = () => {
  return (
    <section id="section-5">
      <h1 className="Project-heading">Certificates</h1>
      <div id="certificate-section" className="certificate-section">
        <div className="container-fluid">
          <div className="row gy-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="col-12 col-md-6 col-lg-4 col-xl-3 certificate"
              >
                <div className="certificate-card">
                  <div className="certificate-pdf-view">
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={cert.pdf} alt={cert.title} />
                    </a>
                  </div>
                  <div className="certificate-body">
                    <h3>{cert.title}</h3>
                    <p>{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1>Contact</h1>
    </section>
  );
};

export default CertificateSection;
