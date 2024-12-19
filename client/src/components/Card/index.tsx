import styled from "styled-components";

const CardContainer = styled.div`
  width: 685px;
  height: 300px;
  background-color: #2B2D42;
  color: (--white);
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border-radius: 30px;
  top: 0;
  left: 0;
`;

const ImageWeather = styled.img`
  width: 144px;
  height: 144px;
`;

const CelciusWeather = styled.p`
  color: var(--amarelo-primary);
  font-size: 105px;
  font-weight: bold;
  padding-top: 20px;
`;

const CityWeather = styled.p`
  color: var(--white);
  font-size: 40px;
  font-weight: bold;
`;

const DetailsWeather = styled.p`
  color: var(--white);
  font-size: 16px;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 14px;
`;

const weatherDescriptions: Record<string, string> = {
  "Moderate or heavy snow in area with thunder": "Neve moderada ou forte com trovões",
  "Patchy light snow in area with thunder": "Neve leve isolada com trovões",
  "Moderate or heavy rain in area with thunder": "Chuva moderada ou forte com trovões",
  "Patchy light rain in area with thunder": "Chuva leve isolada com trovões",
  "Moderate or heavy showers of ice pellets": "Chuvas moderadas ou fortes de granizo",
  "Light showers of ice pellets": "Chuvas leves de granizo",
  "Moderate or heavy snow showers": "Nevascas moderadas ou fortes",
  "Light snow showers": "Nevascas leves",
  "Moderate or heavy sleet showers": "Chuvas moderadas ou fortes de granizo/neve",
  "Light sleet showers": "Chuvas leves de granizo/neve",
  "Torrential rain shower": "Chuva torrencial",
  "Moderate or heavy rain shower": "Chuvas moderadas ou fortes",
  "Light rain shower": "Chuvas leves",
  "Ice pellets": "Granizo",
  "Heavy snow": "Neve intensa",
  "Patchy heavy snow": "Neve intensa isolada",
  "Moderate snow": "Neve moderada",
  "Patchy moderate snow": "Neve moderada isolada",
  "Light snow": "Neve leve",
  "Patchy light snow": "Neve leve isolada",
  "Moderate or heavy sleet": "Granizo moderado ou forte",
  "Light sleet": "Granizo leve",
  "Moderate or Heavy freezing rain": "Chuva congelante moderada ou forte",
  "Light freezing rain": "Chuva congelante leve",
  "Heavy rain": "Chuva intensa",
  "Heavy rain at times": "Chuva intensa em intervalos",
  "Moderate rain": "Chuva moderada",
  "Moderate rain at times": "Chuva moderada em intervalos",
  "Light rain": "Chuva leve",
  "Patchy light rain": "Chuva leve isolada",
  "Heavy freezing drizzle": "Garoa congelante intensa",
  "Freezing drizzle": "Garoa congelante",
  "Light drizzle": "Garoa leve",
  "Patchy light drizzle": "Garoa leve isolada",
  "Freezing fog": "Névoa congelante",
  "Fog": "Névoa",
  "Blizzard": "Nevasca",
  "Blowing snow": "Vento com neve",
  "Thundery outbreaks in nearby": "Trovoadas nas proximidades",
  "Patchy freezing drizzle nearby": "Garoa congelante isolada nas proximidades",
  "Patchy sleet nearby": "Granizo isolado nas proximidades",
  "Patchy snow nearby": "Neve isolada nas proximidades",
  "Patchy rain nearby": "Chuva isolada nas proximidades",
  "Mist": "Neblina",
  "Overcast": "Nublado",
  "Cloudy": "Encoberto",
  "Partly Cloudy ": "Parcialmente nublado",
  "Clear ": "Céu limpo",
  "Sunny": "Ensolarado"
};

const weatherImages: Record<string, { day: string; night: string }> = {
  "Moderate or heavy snow in area with thunder": { day: "trovoadas-com-nuvens-e-chuva.png", night: "trovoadas-com-nuvens-e-chuva.png" },
  "Patchy light snow in area with thunder": { day: "trovoadas-com-nuvens-e-chuva.png", night: "trovoadas-com-nuvens-e-chuva.png" },
  "Moderate or heavy rain in area with thunder": { day: "trovoadas-com-nuvens-e-chuva.png", night: "trovoadas-com-nuvens-e-chuva.png" },
  "Patchy light rain in area with thunder": { day: "trovoadas-com-nuvens-e-chuva.png", night: "trovoadas-com-nuvens-e-chuva.png" },
  "Moderate or heavy showers of ice pellets": { day: "neve.png", night: "neve.png" },
  "Light showers of ice pellets": { day: "neve.png", night: "neve.png" },
  "Moderate or heavy snow showers": { day: "neve.png", night: "neve.png" },
  "Light snow showers": { day: "neve.png", night: "neve.png" },
  "Moderate or heavy sleet showers": { day: "neve.png", night: "neve.png" },
  "Light sleet showers": { day: "neve.png", night: "neve.png" },
  "Torrential rain shower": { day: "chuva-nuvem-com-sol.png", night: "chuva-nuvem-com-lua.png" },
  "Moderate or heavy rain shower": { day: "chuva-nuvem-com-sol.png", night: "chuva-nuvem-com-lua.png" },
  "Light rain shower": { day: "chuva-nuvem-com-sol.png", night: "chuva-nuvem-com-lua.png" },
  "Ice pellets": { day: "neve.png", night: "neve.png" },
  "Heavy snow": { day: "neve.png", night: "neve.png" },
  "Patchy heavy snow": { day: "neve.png", night: "neve.png" },
  "Moderate snow": { day: "neve.png", night: "neve.png" },
  "Patchy moderate snow": { day: "neve.png", night: "neve.png" },
  "Light snow": { day: "neve.png", night: "neve.png" },
  "Patchy light snow": { day: "neve.png", night: "neve.png" },
  "Moderate or heavy sleet": { day: "neve.png", night: "neve.png" },
  "Light sleet": { day: "neve.png", night: "neve.png" },
  "Moderate or Heavy freezing rain": { day: "nublado-com-nuvens-escuras-e-chuva.png", night: "nublado-com-nuvens-escuras-e-chuva.png" },
  "Light freezing rain": { day: "chuva-nuvem-com-sol.png", night: "chuva-nuvem-com-lua.png" },
  "Heavy rain": { day: "nublado-com-nuvens-escuras-e-chuva.png", night: "nublado-com-nuvens-escuras-e-chuva.png" },
  "Heavy rain at times": { day: "nublado-com-nuvens-escuras-e-chuva.png", night: "nublado-com-nuvens-escuras-e-chuva.png" },
  "Moderate rain": { day: "nublado-com-nuvens-escuras-e-chuva.png", night: "nublado-com-nuvens-escuras-e-chuva.png" },
  "Moderate rain at times": { day: "nublado-com-nuvens-escuras.png", night: "nublado-com-nuvens-escuras.png" },
  "Light rain": { day: "chuva-nuvem-com-sol.png", night: "chuva-nuvem-com-lua.png" },
  "Patchy light rain": { day: "chuva-nuvem-com-sol.png", night: "chuva-nuvem-com-lua.png" },
  "Heavy freezing drizzle": { day: "neblina-nevoa.png", night: "neblina-nevoa.png" },
  "Freezing drizzle": { day: "neblina-nevoa.png", night: "neblina-nevoa.png" },
  "Light drizzle": { day: "chuva-nuvem-com-sol.png", night: "chuva-nuvem-com-lua.png" },
  "Patchy light drizzle": { day: "chuva-nuvem-com-sol.png", night: "chuva-nuvem-com-lua.png" },
  "Freezing fog": { day: "neblina-nevoa.png", night: "neblina-nevoa.png" },
  "Fog": { day: "neblina-nevoa.png", night: "neblina-nevoa.png" },
  "Blizzard": { day: "neve.png", night: "neve.png" },
  "Blowing snow": { day: "neve.png", night: "neve.png" },
  "Thundery outbreaks in nearby": { day: "trovoadas-com-nuvens-e-chuva.png", night: "trovoadas-com-nuvens-e-chuva.png" },
  "Patchy freezing drizzle nearby": { day: "chuva-nuvem-com-sol.png", night: "chuva-nuvem-com-lua.png" },
  "Patchy sleet nearby": { day: "neve.png", night: "neve.png" },
  "Patchy snow nearby": { day: "neve.png", night: "neve.png" },
  "Patchy rain nearby": { day: "chuva-nuvem-com-sol.png", night: "chuva-nuvem-com-lua.png" },
  "Mist": { day: "neblina-nevoa.png", night: "neblina-nevoa.png" },
  "Overcast": { day: "nublado-com-nuvens-escuras.png", night: "nublado-com-nuvens-escuras.png" },
  "Cloudy": { day: "nublado.png", night: "nublado.png" },
  "Partly Cloudy ": { day: "sol-com-nuvens.png", night: "lua-com-nuvens.png" },
  "Clear ": { day: "sol.png", night: "lua.png" },
  "Sunny": { day: "sol.png", night: "lua.png" }
};


function getWeatherImage(condition: string, day: string): string {
  const defaultImage = "nublado.png";
  const weather = weatherImages[condition];
  return weather ? (day === "no" ? weather.night : weather.day) : defaultImage;
}

const Card = (props) => {
    return (
      <CardContainer>
          <WeatherContainer>
            <CityWeather>{props.city}</CityWeather>
              <DetailsWeather>{weatherDescriptions[props.clime]}</DetailsWeather>
            <CelciusWeather>{props.temperature}º</CelciusWeather>
          </WeatherContainer>
          <ImageWeather src={`/weather_icons/${getWeatherImage(props.clime, props.isDay)}`} alt="" />
      </CardContainer>
    )
}

export default Card;