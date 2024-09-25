import RDImgLogo from '../../assets/lpimg.svg';
import RDBusinessCardLogo from '../../assets/rd-logo.svg';

import { RDBusinessCardParams, formatPhoneNumber } from '../../utils/schema';

import './index.css';

export default function RDBusinessCard ({ formData, setFormData }: RDBusinessCardParams) {
  return (
    <div id="rd-business-card-page">
      <div className="rd-business-card-logo-container">
        <img src={RDImgLogo} alt="RD Img Logo"/>
      </div>
      <div className="rd-business-card-container">
        <button id="back-btn" onClick={() => setFormData(null)}>&lt; Gerar outro cartão</button>
        <div id="rd-business-card">
          <div className="rd-business-card-img-container">
            <img src={RDBusinessCardLogo} alt="RD Business Card Logo" />
          </div>
          <div className="info-container">
            <span className="rd-business-card-info">{formData.name}</span>
            <span className="rd-business-card-info">{formatPhoneNumber(formData.phone)}</span>
            <span className="rd-business-card-info">{formData.email}</span>
          </div>
        </div>
        <button id="download-card-btn" disabled>&#x2B07; Baixar cartão</button>
        <a href="https://app.rdstation.com.br/signup/" target="_blank" rel="noopener noreferrer">Fazer um teste grátis do RD Station Marketing &#129062;</a>
      </div>
    </div>
  );
}