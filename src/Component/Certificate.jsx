import certificates from "../assets/Json/Certificate.js";
import "../Sass/Certificate.scss";

const CertificateSection = () => {
  return (
    <section id="section-5">
    <div id="certificate-section " className="certificate-section">
      <div className="container-fluid">
        <div className="row gy-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="col-12 col-md-6 col-lg-4 col-xl-3 certificate">
             <div className="certificate-card">
  <div className="certificate-pdf-view">
    <iframe
      src={cert.pdf}
      title={cert.title}
      width="100%"
      height="300px"
      frameBorder="0"
    ></iframe>
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
    </section>
  );
};
export default CertificateSection;
