<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'; 

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});
import riskData from '@/data/riskData.json';

export default {
  name: 'MapPage',
  data() {
    return {
      map: null,
      markers: [],
      FIXED_RISK_MARKER_DATA: riskData 
    };
  },
  async mounted() {
    const viewBounds = L.latLngBounds(
      [-37.0, -75.0], 
      [10.0, -30.0]
    );

    this.$nextTick(() => {
      this.map = L.map('map-container-leaflet', {
        maxBounds: viewBounds,
        minZoom: 4,
        maxZoom: 10,
        zoomControl: true,
        attributionControl: true
      }).setView([-13.5, -50], 4);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        minZoom: 1,
        bounds: viewBounds 
      }).addTo(this.map);

      this.loadFixedRiskMarkers();

      console.log("Mapa com marcadores de risco fixos inicializado.");
    });
  },
  methods: {
    getRiskColor(riskLevel) {
      if (riskLevel <= 20) return '#4CAF50';    
      if (riskLevel <= 40) return '#8BC34A';    
      if (riskLevel <= 60) return '#FFEB3B';   
      if (riskLevel <= 80) return '#FF9800';   
      return '#F44336';                        
    },

    getRiskLabel(riskLevel) {
      if (riskLevel <= 20) return 'Muito Baixo Risco';
      if (riskLevel <= 40) return 'Baixo Risco';
      if (riskLevel <= 60) return 'Risco Moderado';
      if (riskLevel <= 80) return 'Alto Risco';
      return 'Muito Alto Risco';
    },

    loadFixedRiskMarkers() {
      this.markers.forEach(marker => {
        if (this.map && this.map.hasLayer(marker)) {
          this.map.removeLayer(marker);
        }
      });
      this.markers = [];
      this.addMarkersToMap(this.FIXED_RISK_MARKER_DATA);
      
      console.log(`TOTAL: ${this.markers.length} marcadores fixos (dados de JSON) exibidos no mapa.`);
    },

    addMarkersToMap(dataList) {
      if (!this.map) {
          console.error("Mapa não inicializado ao tentar adicionar marcadores.");
          return;
      }
      dataList.forEach(pointData => {
        const { lat, lon, riskLevel, name, justification } = pointData;
        
        const fillColor = this.getRiskColor(riskLevel);

        const circleMarker = L.circleMarker([lat, lon], {
          radius: 8,
          fillColor: fillColor,
          color: 'white',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.9
        }).addTo(this.map);

        circleMarker.bindPopup(`
          <b>${name}</b><br>
          Latitude: ${lat.toFixed(3)}, Longitude: ${lon.toFixed(3)}<br>
          Nível de Risco: <b>${riskLevel}%</b><br>
          Categoria: ${this.getRiskLabel(riskLevel)}<br>
          <small>Justificativa: ${justification}</small><br>
          <small>Fonte: Simulação baseada em dados e metodologias de instituições renomadas. Não em tempo real.</small>
        `);

        this.markers.push(circleMarker);
      });
    },
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }
};
</script>

<template>
  <div class="page-content map-page">
    <div id="map-container-leaflet" class="map-view">
      </div>

    <div class="map-legend">
      <h3>AVISO: Este mapa apresenta dados de risco ambiental ilustrativos, elaborados para fins didáticos. As informações não são em tempo real e foram desenvolvidas com base em pesquisas e análises gerais, não refletindo dados oficiais para tomadas de decisão. Não confie cegamente nestas informações para propósitos críticos; sempre consulte fontes primárias e autoridades competentes para obter dados precisos e confiáveis.</h3>
      <p>Legenda dos Níveis de risco, baseados em indicadores como frequência de eventos climáticos extremos, índices de poluição e suscetibilidade a desastres naturais.</p>
      <div class="legend-items">
        <div class="legend-item">
          <span class="legend-color green"></span>
          <span class="legend-label">1 - Muito Baixo Risco</span>
        </div>
        <div class="legend-item">
          <span class="legend-color light-green"></span>
          <span class="legend-label">2 - Baixo Risco</span>
        </div>
        <div class="legend-item">
          <span class="legend-color yellow"></span>
          <span class="legend-label">3 - Risco Moderado</span>
        </div>
        <div class="legend-item">
          <span class="legend-color orange"></span>
          <span class="legend-label">4 - Alto Risco</span>
        </div>
        <div class="legend-item">
          <span class="legend-color red"></span>
          <span class="legend-label">5 - Muito Alto Risco</span>
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped>
.page-content {
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
}

.map-view {
  width: 100%;
  max-width: 1200px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  margin: 0 auto 1.5rem auto;
}

.map-legend {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-top: 1.5rem;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
}

.map-legend h3 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  color: #333;
  font-size: 1.4rem;
  text-align: center;
}

.map-legend p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: center;
}

.legend-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.legend-color.green { background-color: #4CAF50; }
.legend-color.light-green { background-color: #8BC34A; }
.legend-color.yellow { background-color: #FFEB3B; }
.legend-color.orange { background-color: #FF9800; }
.legend-color.red { background-color: #F44336; }

.legend-label {
  font-size: 0.9rem;
  color: #333;
  white-space: nowrap;
}

.legend-source {
  font-size: 0.8rem;
  color: #888;
  margin-top: 1.5rem;
  text-align: center;
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

@media (max-width: 1200px) {
  .map-view {
    height: 500px;
    max-width: 90%;
  }
  .map-legend {
    max-width: 90%;
  }
}

@media (max-width: 992px) {
  .map-view {
    height: 400px;
    max-width: 95%;
  }
  .map-legend {
    max-width: 95%;
    padding: 1rem;
  }
}

@media (max-width: 768px) {
  .map-view {
    height: 350px;
    max-width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
  .map-legend {
    max-width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
  .legend-items {
    flex-direction: column;
    gap: 0.8rem;
    align-items: flex-start;
  }
  .legend-item {
    margin-bottom: 0.5rem;
  }
}
</style>