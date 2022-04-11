import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          ABM
        </Link>
      </h1>
    </header>
  );
}
