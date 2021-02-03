// Core
import React from 'react'

// Styles
import './style.scss'

const Home = () => {
  return (
    <article className="home">
      <div className="home__container">
        <h1 className="main__title">React Redux Typescript Webpack</h1>
        <p className="main__author">
          <strong>Author:</strong> Edgardo Ramírez León
        </p>
        <p className="description">
          <strong>Repo:</strong> <a href="https://github.com/SoldierCorp/arkus-react">https://github.com/SoldierCorp/arkus-react</a>
        </p>
      </div>
    </article>
  );
}

export default Home
