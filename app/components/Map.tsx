'use client';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  cities: Array<{
    name: string;
    coords: [number, number];
  }>;
  activeCityIdx: number;
  onCitySelect: (idx: number) => void;
}

export default function Map({ cities, activeCityIdx, onCitySelect }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    if (!mapRef.current) {
      // First-time map creation
      const map = L.map(mapContainer.current, {
        center: cities[activeCityIdx].coords,
        zoom: 12,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      const customIcon = L.divIcon({
        className: 'custom-gps-marker',
        html: '<div class="marker-pin"></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      cities.forEach((city, idx) => {
        const marker = L.marker(city.coords, { icon: customIcon }).addTo(map);
        marker.bindTooltip(city.name, {
          permanent: false,
          direction: 'top',
          className: 'custom-map-tooltip'
        });
        marker.on('click', () => {
          onCitySelect(idx);
        });
      });

      mapRef.current = map;

      // Use ResizeObserver for reliable sizing
      const resizeObserver = new ResizeObserver(() => {
        if (mapRef.current) {
          mapRef.current.invalidateSize();
        }
      });
      resizeObserver.observe(mapContainer.current);

      // Store observer on the map object so we can disconnect it later
      (map as any)._resizeObserver = resizeObserver;

    } else {
      // Update map center on city change
      mapRef.current.flyTo(cities[activeCityIdx].coords, 14, {
        animate: true,
        duration: 1.5
      });
    }
  }, [cities, activeCityIdx, onCitySelect]);

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        if ((mapRef.current as any)._resizeObserver) {
          (mapRef.current as any)._resizeObserver.disconnect();
        }
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapContainer} className="absolute inset-0 z-0">
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Tailwind img reset conflict fix */
        .leaflet-container img { max-width: none !important; max-height: none !important; }
        .custom-gps-marker { display: flex !important; align-items: center !important; justify-content: center !important; }
        .marker-pin { width: 12px; height: 12px; border-radius: 50%; background: #0a0862; border: 2px solid white; box-shadow: 0 0 0 4px rgba(252, 190, 3, 0.4), 0 0 10px rgba(252, 190, 3, 0.8); animation: pulse 2s infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0px rgba(252, 190, 3, 0.7), 0 0 10px rgba(252, 190, 3, 0.8); } 70% { box-shadow: 0 0 0 10px rgba(252, 190, 3, 0), 0 0 10px rgba(252, 190, 3, 0.8); } 100% { box-shadow: 0 0 0 0px rgba(252, 190, 3, 0), 0 0 10px rgba(252, 190, 3, 0.8); } }
        .custom-map-tooltip { background: black !important; color: white !important; border: none !important; font-family: inherit !important; font-size: 11px !important; font-weight: 600 !important; letter-spacing: 0.1em !important; text-transform: uppercase !important; padding: 4px 8px !important; box-shadow: 0 4px 6px rgba(0,0,0,0.1) !important; border-radius: 2px !important; }
        .leaflet-tooltip-top:before { border-top-color: black !important; }
      `}} />
    </div>
  );
}
