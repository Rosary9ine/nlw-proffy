import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/37662353?s=460&u=f8a4e0baa47506b905791b7fefc4708ba58ec4d6&v=4" alt="Luiz Carlos" />
        <div>
          <strong>Luiz Carlos</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <br /><br />
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>

      <footer>
        <p>
          Preço/hora
            <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whastsapp" />
            Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;