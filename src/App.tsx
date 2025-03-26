import { useState } from 'react';
import './styles/App.css'
import ContactForm from './components/form-components/contact/ContactForm';
import EducationForm from './components/form-components/education/EducationForm';

function App() {
  return (
    <>
      <div className="bg-app">
        <nav className="header">
          CV BUILDER
        </nav>
      </div>

      <main className="main-container">
        <aside className="form-container">
          <ContactForm />
          <EducationForm />
        </aside>

        <section className="resume-container">

        </section>
      </main>
    </>
  )
}

export default App
