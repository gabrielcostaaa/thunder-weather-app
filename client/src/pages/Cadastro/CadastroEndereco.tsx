import {
  Button,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  ErrorMessage,
  Logotipo,
  Sidebar,
  Card,
  MiniCard,
  Navbar
} from "../../components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormInputTiposEndereco } from "../../types/index"

const CadastroEndereco = () => {

  const [city, setCity] = useState<string>("");
  const [clime, setClime] = useState<string>("");
  const [isDay, setIsDay] = useState<string>();
  const [temperature, setTemperature] = useState<number>();
  const [pressure, setPressure] = useState<number>();
  const [humidity, setHumidity] = useState<number>();
  const [feelslike, setFeelslike] = useState<number>();
  const [windSpeed, setWindSpeed] = useState<number>();
  const [precip, setPrecip] = useState<number>();
  const [uv, setUv] = useState<number>();
  const [cloudcover, setCloudcover] = useState<number>();


  const {register, handleSubmit, formState: {errors}, setError, setValue, watch } = useForm<FormInputTiposEndereco>({
    mode:"all",
    defaultValues:{
      cep: "",
      localidade: "",
    }
  })

  const cepDigitado = watch("cep")

  const fetchEndereco = async (cep:string) => {
    if(!cep) {
      setError("cep", {
        type: "manual",
        message: "CEP inválido",
      })

      return
    }
      try {
        const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        console.log(data);

        if(response.ok){
          setValue("localidade", `${data.localidade}, ${data.uf}`)
        } else {
          throw new Error("Cep inválido")
        }
      } catch (error) {
        console.error(error)
      }
  }

  const aoSubmeter = async (dados: FormInputTiposEndereco) => {

    const localidade = dados.localidade.split(",")[0].trim();
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${localidade}`;
    const options = {
      method: 'GET'
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const climeWeather = data.current.weather_descriptions; 


      console.log(data);
      setCity(data.location.name);
      setTemperature(data.current.temperature);
      setClime(climeWeather);
      setIsDay(data.current.is_day);
      setPressure(data.current.pressure);
      setHumidity(data.current.humidity);
      setFeelslike(data.current.feelslike);
      setWindSpeed(data.current.wind_speed);
      setPrecip(data.current.precip);
      setUv(data.current.uv_index);
      setCloudcover(data.current.cloudcover);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <Form onSubmit={handleSubmit(aoSubmeter)}>
        <FormContainer>
        <Logotipo />
          <Fieldset>
            <Label htmlFor="campo-cep">CEP</Label>
            <Input 
            id="campo-cep" 
            placeholder="Insira o CEP" 
            type="text" 
            $error = {!!errors.cep}
            {...register("cep", {
              required: "O campo de CEP é obrigatório"
            })}
            onBlur={() => fetchEndereco(cepDigitado)}
            />
            {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
          </Fieldset>
          <Fieldset>
          <Label htmlFor="campo-localidade">Localidade</Label>
          <Input
            id="campo-localidade"
            placeholder="São Paulo, SP"
            type="text"
            $error={!!errors.localidade}
            {...register("localidade", {
              required: "O campo de localidade é obrigatório",
            })}
          />
          {errors.localidade && <ErrorMessage>{errors.localidade.message}</ErrorMessage>}
        </Fieldset>
        <Button type="submit">Consultar</Button>
        </FormContainer>
      </Form>
      <div style={{ display: "flex", gap: "35px" }}>
        
        <Sidebar />
        <div style={{ display: "flex", gap: "35px", flexDirection: "column" }}>
          
          <div style={{ display: "flex", gap: "35px", flexDirection: "column" }}>
          <div style={{display: "flex", gap: "35px"}}>
            <Card 
            city={city}
            clime={clime}
            temperature={temperature}
            isDay={isDay}
            />
            <div style={{ display: "flex", gap: "35px", flexDirection: "column" }}>
              <Navbar/>
              <MiniCard 
              info={windSpeed}
              cardType={"Velocidade Vento"}
              />
            </div>
            
          </div>
          <div style={{display: "flex", gap: "35px"}}>
          <div style={{ display: "flex", gap: "35px", flexDirection: "column" }}>
            <MiniCard 
            info={precip}
            cardType={"Precipitação"}
            />
            <MiniCard 
            info={pressure}
            cardType={"Pressão"}
            />
          </div>
          <div style={{ display: "flex", gap: "35px", flexDirection: "column" }}>
             <MiniCard 
            info={humidity}
            cardType={"Umidade"}
            />
            <MiniCard 
            info={cloudcover}
            cardType={"Cobertura de Nuvens"}
            />
          </div>
          <div style={{ display: "flex", gap: "35px", flexDirection: "column" }}>
            <MiniCard 
            info={feelslike}
            cardType={"Sensação Térmica"}
            />
             <MiniCard 
            info={uv}
            cardType={"Índice UV"}
            />
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CadastroEndereco;
