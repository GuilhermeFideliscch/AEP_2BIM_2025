<script>
export default {
  name: 'HomePage',
};
</script>

<template>
  <div class="page-content home-page">
    <div class="home-hero">
      <h1>Conheça os Riscos, Proteja Vidas.</h1>
      <p>
        Esta plataforma é sua ferramenta para compreender e navegar pelas áreas de risco no nosso país.
        Informação é poder: prepare-se, previna-se e contribua para um futuro mais seguro.
      </p>
      <router-link to="/sobre" class="hero-button">
        Entenda Como Funciona
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 128, 0, 0.1), rgba(70, 130, 180, 0.1), rgba(255, 255, 255, 0.8));
  padding: 2rem;
  box-sizing: border-box;
}

.home-hero {
  max-width: 900px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.home-hero h1 {
  font-size: 3.5rem;
  color: #006400;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.home-hero p {
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.hero-button {
  background-color: #4682B4;
  color: white;
  padding: 1.2rem 2.8rem;
  border: none;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
}

.hero-button:hover {
  background-color: #366799;
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
@media (max-width: 1200px) {
  .home-hero {
    padding: 2.5rem;
  }
  .home-hero h1 {
    font-size: 3rem;
  }
  .home-hero p {
    font-size: 1.2rem;
  }
  .hero-button {
    padding: 1rem 2.2rem;
    font-size: 1.3rem;
  }
}
@media (max-width: 992px) {
  .home-hero {
    padding: 2rem;
  }
  .home-hero h1 {
    font-size: 2.5rem;
  }
  .home-hero p {
    font-size: 1.1rem;
  }
  .hero-button {
    padding: 0.9rem 1.8rem;
    font-size: 1.1rem;
  }
}
</style>