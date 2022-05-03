import { Header } from "../../components/Header";


import './styles.css'

export function Home() {
  return (
    <>
      <Header />
      <div className="container">
      <h1>Encontre-nos</h1>
        <section>          
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1044768.5036124631!2d-49.29871933248137!3d-23.320806034481315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1647305577182!5m2!1spt-BR!2sbr"/>
        </section>        
      </div>
    </>
  );
}

