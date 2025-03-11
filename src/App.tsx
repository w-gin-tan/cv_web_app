import { useState } from 'react';
import './styles/App.css'
import ContactForm from './components/form-components/contact/ContactForm';

function App() {
  /*
    This should render all the main components on the screen
    - Header
    - Main background
      - Edit details
        - Edit button
        - Submit button
        - General
        - Education
        - Work Experience
      - Resume screen
  */

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
        </aside>

        <section className="resume-container">

        </section>
      </main>
    </>
  )
}

export default App
