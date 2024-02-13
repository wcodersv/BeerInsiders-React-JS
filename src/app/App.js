import React from 'react';
import './global.scss';
import './media.css'
import { Header } from '../layout/Header/Header';
import Problems from '../components/Problems';
import Solution from '../components/Solution';
import ApplicationForm from '../components/ApplicationForm';

function App() {
  return (
    <>
      <Header />
      <main>
        <Problems />
        <Solution />
        <ApplicationForm />
      </main>
    </>
  );
}

export default App;
