import RDStation from '../../assets/logo.svg'

import './index.css'

export default function RDHeader () {
  return (
    <header>
      <img src={RDStation} alt="RD Header Station Logo" />
      <h1>Gerador de Cartão de Visita</h1>
    </header>
  );
}