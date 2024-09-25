import { useState } from 'react';

import RDHeader from './components/RDHeader';
import RDFooter from './components/RDFooter';
import RDBusinessCardForm from './components/RDBusinessCardForm';
import RDBusinessCard from './components/RDBusinessCard';

import { FormFields } from './utils/schema';

import './App.css';

function App() {
  const [formData, setFormData] = useState<FormFields | null>(null);

  return (
    <>
    <RDHeader />
    <main>
      <section>
        { formData ?
          <RDBusinessCard {...{ formData, setFormData }} /> :
          <RDBusinessCardForm {...{ setFormData }} />}
      </section>
    </main>
    <RDFooter />
    </>
  )
}

export default App
