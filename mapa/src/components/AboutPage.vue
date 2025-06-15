<script>
export default {
  name: 'AboutPage',
};
</script>

<template>
  <div class="page-content about-page">
    <div class="content-wrapper">
      <h1>Entenda o Mapa de Risco do Brasil</h1>
      <p>
        O Mapa de Risco é uma ferramenta para você acessar informações cruciais sobre áreas vulneráveis a desastres naturais em todo o Brasil. Ele foi desenvolvido para ser uma fonte de conscientização e prevenção, ajudando você a tomar decisões mais seguras sobre moradia e planejamento.
      </p>
      <p>
        Como Funciona:
        Ao acessar o mapa, você verá o território brasileiro segmentado em diferentes áreas, cada uma codificada por cores. Essas cores representam o nível de risco de cada região, considerando:
      </p>
      <ul>
        <li><strong>Condições Climáticas:</strong> Padrões de chuva, temperatura e eventos extremos.</li>
        <li><strong>Histórico de Incidentes:</strong> Ocorrências passadas de enchentes, deslizamentos e outros desastres.</li>
        <li><strong>Características Geográficas:</strong> Topografia do solo, proximidade de rios ou encostas.</li>
      </ul>
      <p>
        Interação:
        Você poderá navegar pelo mapa e ver detalhadamente as áreas marcadas.
      </p>
      <p>
       **LER AVISO NO MAPA**
      </p>
      <router-link to="/mapa" class="call-to-action">Acessar o Mapa Agora</router-link>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 0;
  box-sizing: border-box;
  overflow-y: auto;
}

.content-wrapper {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: left;
}

.content-wrapper h1 {
  color: #006400;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  line-height: 1.2;
}

.content-wrapper p {
  color: #444;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.content-wrapper p strong {
  color: #008000;
}

.content-wrapper ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.content-wrapper ul li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: #555;
  font-size: 1rem;
}

.content-wrapper ul li::before {
  content: '✓';
  color: #008000;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}

.content-wrapper ul li strong {
  color: #2c3e50;
}

.call-to-action {
  background-color: #4682B4;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 2rem;
  display: inline-block;
  text-decoration: none;
}

.call-to-action:hover {
  background-color: #366799;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .page-content {
    padding: 1rem 0;
  }
  .content-wrapper {
    max-width: 100%;
    padding: 1.5rem;
    border-radius: 0;
    box-shadow: none;
  }
  .content-wrapper h1 {
    font-size: 2rem;
  }
  .content-wrapper p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    padding: 1rem;
  }
  .content-wrapper h1 {
    font-size: 1.8rem;
  }
  .call-to-action {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}
</style>