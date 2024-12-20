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
import { useState, useEffect } from "react";
import { FormInputTipos, WeatherData } from "../../types/index"
import { apiViaCep } from "../../services/viaCepService";
import { apiWeatherStack } from "../../services/WeatherStackService";
import { postData } from "../../services/ThunderService";

const Clima = () => {

  const [weatherData, setWeatherData] = useState<WeatherData>({
    city: '',
    time: '',
    clime: '',
    isDay: false,
    temperature: 0,
    pressure: 0,
    humidity: 0,
    feelslike: 0,
    windSpeed: 0,
    precip: 0,
    uv: 0,
    cloudcover: 0,
  });

  const {register, handleSubmit, formState: { errors, isSubmitSuccessful }, setError, setValue, watch, reset} = useForm<FormInputTipos>({
    mode:"all",
    defaultValues:{
      cep: "",
      localidade: "",
    }
  })

  useEffect(() => {
    reset()
  }, [isSubmitSuccessful])

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
        const data = await apiViaCep(cep)
        console.log(data);

        if(data.localidade && data.uf){
          setValue("localidade", `${data.localidade}, ${data.uf}`)
        }

      } catch (error) {
        console.error(error)
      }
  }

  const aoSubmeter = async (dados: FormInputTipos) => {

    try {
      const data = await apiWeatherStack(dados);

      console.log(data);

      setWeatherData({
        city: data.location.name,
        time: data.current.observation_time,
        clime: data.current.weather_descriptions,
        isDay: data.current.is_day,
        temperature: data.current.temperature,
        pressure: data.current.pressure,
        humidity: data.current.humidity,
        feelslike: data.current.feelslike,
        windSpeed: data.current.wind_speed,
        precip: data.current.precip,
        uv: data.current.uv_index,
        cloudcover: data.current.cloudcover,
      });

    } catch (error) {
      console.error(error);
    }
  }

  const Favoritar = async () => {
    try {
      const data = await postData('cidades', weatherData);
      console.log(data);
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
              required: "O campo de CEP é obrigatório",
              minLength: {
                value: 8,
                message: "O cep deve ter pelo menos 8 números"
              },
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
            city={weatherData.city}
            clime={weatherData.clime}
            temperature={weatherData.temperature}
            isDay={weatherData.isDay}
            />
            <div style={{ display: "flex", gap: "35px", flexDirection: "column" }}>
              <Navbar onFavoritar={Favoritar}/>
              <MiniCard 
              info={weatherData.windSpeed}
              cardType={"Velocidade Vento"}
              />
            </div>
            
          </div>
          <div style={{display: "flex", gap: "35px"}}>
          <div style={{ display: "flex", gap: "35px", flexDirection: "column" }}>
            <MiniCard 
            info={weatherData.precip}
            cardType={"Precipitação"}
            />
            <MiniCard 
            info={weatherData.pressure}
            cardType={"Pressão"}
            />
          </div>
          <div style={{ display: "flex", gap: "35px", flexDirection: "column" }}>
             <MiniCard 
            info={weatherData.humidity}
            cardType={"Umidade"}
            />
            <MiniCard 
            info={weatherData.cloudcover}
            cardType={"Cobertura de Nuvens"}
            />
          </div>
          <div style={{ display: "flex", gap: "35px", flexDirection: "column" }}>
            <MiniCard 
            info={weatherData.feelslike}
            cardType={"Sensação Térmica"}
            />
             <MiniCard 
            info={weatherData.uv}
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

export default Clima;
