export const apiViaCep = async (cep: string) => {
    try {
      const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
      
      if (!response.ok) {
        throw new Error('CEP inválido');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Erro na consulta do CEP:', error);
      throw error;
    }
  };
  