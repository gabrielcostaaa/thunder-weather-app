import styled from "styled-components";
import { Waves, Droplet, Wind, Thermometer, SunMedium, Droplets, Cloudy } from 'lucide-react';

const MiniCardContainer = styled.div`
  width: 325px;
  height: 170px;
  background-color: #2B2D42;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border-radius: 30px;
  top: 0;
  left: 0;
`;

const MiniCardTitle = styled.p `
  color: var(--cinza-placeholder);
  font-size: 18px;
`;

const MiniCardDescription = styled.div `
  font-size: 30px;
  display: flex;
  align-items: baseline;
  gap: 7px;
`;

const MiniCardDescriptionUnity = styled.p `
  font-size: 20px;
`;

const weatherInfo: Record<string, string> = {
  "Pressão": "hPa",
  "Umidade": "%",
  "Sensação Térmica": "°",
  "Velocidade Vento": "km/h",
  "Precipitação": "mm",
  "Índice UV": "",
  "Cobertura de Nuvens": "%"
};

const weatherIcons: Record<string, React.ElementType> = {
  "Pressão": Waves,
  "Umidade": Droplet,
  "Sensação Térmica": Thermometer,
  "Velocidade Vento": Wind,
  "Precipitação": Droplets,
  "Índice UV": SunMedium,
  "Cobertura de Nuvens": Cloudy
};

const UVinfo: Record<number, string> = {
  0: "Baixo",
  1: "Baixo",
  2: "Baixo",
  3: "Moderado",
  4: "Moderado",
  5: "Moderado",
  6: "Alto",
  7: "Alto",
  8: "Muito Alto",
  9: "Muito Alto",
  10: "Muito Alto",
  11: "Extremo",
  12: "Extremo",
  13: "Extremo",
  14: "Extremo",
};


const MiniCard = (props) => {

  const Icon = weatherIcons[props.cardType];

    return (
        <MiniCardContainer>
          <div style={{ display: "flex", gap: "50px", flexDirection: "column" }}>
            <MiniCardTitle>{props.cardType}</MiniCardTitle>
            <div style={{ display: "flex", gap: "20px" }}>
              <Icon size={40}/>
              <MiniCardDescription>
                {props.info}
              <MiniCardDescriptionUnity>{weatherInfo[props.cardType]}</MiniCardDescriptionUnity>
                <MiniCardDescriptionUnity>{props.cardType === "Índice UV" ? UVinfo[props.info] : ""}</MiniCardDescriptionUnity>
              </MiniCardDescription>
            </div>
          </div>
        </MiniCardContainer>
    )
}

export default MiniCard;