import { FormInputTipos } from "../types/index"

export const apiWeatherStack = async (dados: FormInputTipos) => {

    const localidade = dados.localidade.split(",")[0].trim();
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${localidade}`;
    const options = {
      method: 'GET'
    };
    
    try {
        const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error('CEP inválido');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro na consulta do CEP:', error);
      throw error;
    }
  };
  