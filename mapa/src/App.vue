<script>
export default {
  name: 'App',
};
</script>

<template>
  <div id="app">
    <header class="navbar">
      <nav>
        <div class="logo">
          <span>Mapa de riscos Brasil</span>
        </div>
        <ul class="nav-links">
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/sobre">Sobre</router-link></li>
          <li><router-link to="/mapa">Mapa de Risco</router-link></li>
        </ul>
      </nav>
    </header>

    <main class="content">
      <router-view></router-view>
    </main>

    <footer class="footer">
    </footer>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}

*, *::before, *::after {
  box-sizing: inherit;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
}

.navbar {
  background: linear-gradient(to right, #008000, #4682B4, #FFFFFF);
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  flex-shrink: 0;
}

.navbar nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.navbar .logo span {
  font-size: 1.8rem;
  font-weight: bold;
  color: #f0f0f0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.navbar .nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.5rem;
}

.navbar .nav-links li {
  margin: 0;
}

.navbar .nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
}

.navbar .nav-links a:hover {
  color: #e0e0e0;
  transform: translateY(-2px);
  background-color: rgba(255, 255, 255, 0.1);
}

.navbar .nav-links a.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom: 2px solid #e0e0e0;
}
.content {
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9f9f9;
  padding: 0;
}

.footer {
  background: linear-gradient(to right, #008000, #4682B4, #FFFFFF);
  color: white;
  padding: 1.5rem 1rem;
  font-size: 0.9rem;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

.footer p {
  margin: 0;
}

@media (min-width: 769px) and (max-width: 1200px) {
  .navbar {
    padding: 0.8rem 1.5rem;
  }
  .navbar .logo span {
    font-size: 1.6rem;
  }
  .navbar .nav-links {
    gap: 1.2rem;
  }
  .navbar .nav-links a {
    padding: 0.4rem 0.7rem;
  }
  .footer {
    padding: 1.2rem 1rem;
  }
}
@media (min-width: 1201px) {
  .navbar {
    padding: 1rem 3rem;
  }
  .footer {
    padding: 1.5rem 2rem;
  }
}
</style>