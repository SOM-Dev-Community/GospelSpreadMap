import React, { createContext, useEffect, useState, useContext } from "react";

const ReachContext = createContext();

export const ReachProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const initialData = [
    {
      country: "Nigeria",
      population: 223000000,
      states: [
        { state: "Lagos", population: 15000000, reachPercentage: 100 },
        { state: "Kano", population: 12000000, reachPercentage: 100 },
        { state: "Kaduna", population: 8500000, reachPercentage: 100 },
        { state: "Rivers", population: 7000000, reachPercentage: 100 },
        { state: "Oyo", population: 8000000, reachPercentage: 100 },
        { state: "Abuja (FCT)", population: 3200000, reachPercentage: 100 },
        { state: "Borno", population: 6500000, reachPercentage: 100 },
        { state: "Katsina", population: 5900000, reachPercentage: 100 },
        { state: "Anambra", population: 5100000, reachPercentage: 100 },
        { state: "Benue", population: 5400000, reachPercentage: 100 },
      ],
    },
    {
      country: "South Africa",
      population: 60000000,
      states: [
        { state: "Gauteng", population: 16000000, reachPercentage: 100 },
        { state: "KwaZulu-Natal", population: 11000000, reachPercentage: 100 },
        { state: "Eastern Cape", population: 6800000, reachPercentage: 100 },
        { state: "Western Cape", population: 7000000, reachPercentage: 100 },
        { state: "Mpumalanga", population: 4500000, reachPercentage: 100 },
      ],
    },
    {
      country: "Kenya",
      population: 54000000,
      states: [
        { state: "Nairobi", population: 4700000, reachPercentage: 100 },
        { state: "Kiambu", population: 2300000, reachPercentage: 100 },
        { state: "Nakuru", population: 2200000, reachPercentage: 100 },
        { state: "Machakos", population: 1500000, reachPercentage: 100 },
        { state: "Kisumu", population: 1200000, reachPercentage: 100 },
      ],
    },
    {
      country: "Ghana",
      population: 33000000,
      states: [
        { state: "Greater Accra", population: 5000000, reachPercentage: 100 },
        { state: "Ashanti", population: 5600000, reachPercentage: 100 },
        { state: "Western Region", population: 3200000, reachPercentage: 100 },
        { state: "Northern Region", population: 2900000, reachPercentage: 100 },
        { state: "Volta", population: 2200000, reachPercentage: 100 },
      ],
    },
    {
      country: "Egypt",
      population: 105000000,
      states: [
        { state: "Cairo", population: 10000000, reachPercentage: 90 },
        { state: "Alexandria", population: 5200000, reachPercentage: 100 },
        { state: "Giza", population: 8500000, reachPercentage: 70 },
        { state: "Aswan", population: 1500000, reachPercentage: 60 },
        { state: "Dakahlia", population: 6000000, reachPercentage: 80 },
      ],
    },
    {
      country: "India",
      population: 1400000000,
      states: [
        { state: "Uttar Pradesh", population: 231000000, reachPercentage: 60 },
        { state: "Maharashtra", population: 126000000, reachPercentage: 100 },
        { state: "Bihar", population: 127000000, reachPercentage: 50 },
        { state: "West Bengal", population: 100000000, reachPercentage: 70 },
        { state: "Tamil Nadu", population: 72000000, reachPercentage: 85 },
      ],
    },
    {
      country: "Brazil",
      population: 216000000,
      states: [
        { state: "São Paulo", population: 46700000, reachPercentage: 100 },
        { state: "Minas Gerais", population: 21100000, reachPercentage: 70 },
        { state: "Rio de Janeiro", population: 17400000, reachPercentage: 90 },
        { state: "Bahia", population: 15200000, reachPercentage: 65 },
        { state: "Paraná", population: 11500000, reachPercentage: 75 },
      ],
    },
    {
      country: "United States",
      population: 331000000,
      states: [
        { state: "California", population: 39500000, reachPercentage: 100 },
        { state: "Texas", population: 29000000, reachPercentage: 80 },
        { state: "Florida", population: 21500000, reachPercentage: 90 },
        { state: "New York", population: 19500000, reachPercentage: 75 },
        { state: "Illinois", population: 12600000, reachPercentage: 60 },
      ],
    },
    {
      country: "Australia",
      population: 26000000,
      states: [
        { state: "New South Wales", population: 8200000, reachPercentage: 90 },
        { state: "Victoria", population: 6700000, reachPercentage: 85 },
        { state: "Queensland", population: 5200000, reachPercentage: 75 },
        { state: "Western Australia", population: 2700000, reachPercentage: 100 },
      ],
    },
    {
      country: "Germany",
      population: 84000000,
      states: [
        { state: "North Rhine-Westphalia", population: 18000000, reachPercentage: 100 },
        { state: "Bavaria", population: 13000000, reachPercentage: 90 },
        { state: "Baden-Württemberg", population: 11200000, reachPercentage: 85 },
        { state: "Lower Saxony", population: 8000000, reachPercentage: 70 },
      ],
    },
    {
      country: "United Kingdom",
      population: 67000000,
      states: [
        { state: "England", population: 56000000, reachPercentage: 100 },
        { state: "Scotland", population: 5500000, reachPercentage: 100 },
        { state: "Wales", population: 3200000, reachPercentage: 100 },
        { state: "Northern Ireland", population: 1900000, reachPercentage: 100 },
      ],
    },
    {
      country: "Mexico",
      population: 127000000,
      states: [
        { state: "Mexico City", population: 9200000, reachPercentage: 80 },
        { state: "Jalisco", population: 8400000, reachPercentage: 60 },
        { state: "Nuevo León", population: 5500000, reachPercentage: 70 },
        { state: "Puebla", population: 6200000, reachPercentage: 85 },
        { state: "Guanajuato", population: 6200000, reachPercentage: 90 },
      ],
    },
    {
      country: "Japan",
      population: 125000000,
      states: [
        { state: "Tokyo", population: 14000000, reachPercentage: 100 },
        { state: "Osaka", population: 8800000, reachPercentage: 80 },
        { state: "Kanagawa", population: 9200000, reachPercentage: 90 },
        { state: "Hokkaido", population: 5300000, reachPercentage: 75 },
      ],
    },
  ];
  

  // Calculating reach data
  const calculateReach = (data) => {
    return data.map((country) => {
      const totalReachPopulation = country.states.reduce(
        (acc, state) =>
          acc + (state.reachPercentage / 100) * state.population,
        0
      );
  
      const totalReachPercentage = totalReachPopulation / country.population;
      const reached = totalReachPercentage >= 0.3;
  
      return {
        ...country,
        reached,
        totalReachPercentage,
      };
    });
  };
  

  useEffect(() => {
    try {
      const updatedCountries = calculateReach(initialData);
      setCountries(updatedCountries);
    } catch (error) {
      console.error("Error calculating reach data:", error);
      setCountries([]); // Fallback to an empty array
    }
  }, []);

  return (
    <ReachContext.Provider value={{ countries, setCountries }}>
      {children}
    </ReachContext.Provider>
  );
};

export const useReach = () => {
  return useContext(ReachContext);
};
