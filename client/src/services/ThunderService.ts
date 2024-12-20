const API_URL = "http://127.0.0.1:8000/api"; // URL da sua API Laravel

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) throw new Error('Falha ao buscar dados');
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição GET:', error);
    throw error;
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {

    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cid_nome: data.city,
        cid_hora: data.time,
        cid_clima: Array.isArray(data.clime) ? data.clime[0] : data.clime,
        cid_e_dia: data.isDay === "yes",
        cid_temperatura: data.temperature,
        cid_pressao: data.pressure,
        cid_umidade: data.humidity,
        cid_sensacao_termica: data.feelslike,
        cid_velocidade_vento: data.windSpeed,
        cid_precipitacao: data.precip,
        cid_indice_uv: data.uv,
        cid_cobertura_nuvens: data.cloudcover,
      }),
    });
    if (!response.ok) throw new Error('Falha ao enviar dados');
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição POST:', error);
    throw error;
  }
};

export const deleteData = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Falha ao excluir dados');
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição DELETE:', error);
    throw error;
  }
};
