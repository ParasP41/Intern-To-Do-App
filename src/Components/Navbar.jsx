import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const fetchWeather = async () => {
        try {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
          );
          const data = await res.json();
          setWeatherData(data.current_weather);
        } catch (err) {
          console.error("Error fetching weather:", err);
        }
      };
      fetchWeather();
    }
  }, [latitude, longitude]);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="text-xl font-semibold">
          To-do-App
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 mx-4 md:mt-0">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Forecast</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
          </ul>

          {weatherData && (
            <div className="mt-4 md:mt-0 md:ml-auto flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded-lg shadow">
              <span className="text-sm">🌡️ {weatherData?.temperature}°C</span>
              <span className="text-sm">💨 {weatherData?.windspeed} km/h</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
