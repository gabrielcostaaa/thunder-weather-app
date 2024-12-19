import { Button, Label, Fieldset, Input, Form, Titulo, ErrorMessage } from "../../components";
import { useForm, Controller } from "react-hook-form";
import { FormInputTiposPessoa } from "../../types/index"
import InputMask from "../../components/InputMask";
import { useEffect } from "react";

const CadastroPessoal = () => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, watch, control, reset } = useForm<FormInputTiposPessoa>({
    mode: 'all',
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      senha: "",
      senhaVerificada: ""
    },
  });

  useEffect(() => {
    reset()
  }, [isSubmitSuccessful])

  const aoSubmeter = (dados: FormInputTiposPessoa) => {
    console.log(dados);
  };

  const senha = watch("senha")
    
  function validarEmail(valor: string) {
    const formatoEmail = /^[^\s@]+@alura\.com\.br$/;
    if (!formatoEmail.test(valor)) {
      console.error("Endereço de email é inválido para este domínio");
      return false;
    }
    return true;
  }

  return (
    <>
      <Titulo>Insira alguns dados básicos:</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label htmlFor="campo-nome">Nome</Label>
          <Input
            id="campo-nome"
            placeholder="Digite seu nome completo"
            type="text"
            $error={!!errors.nome}
            {...register("nome", { 
              required: "Campo de nome é obrigatório", 
              minLength: {
                value: 5,
                message: "O nome deve ter pelo menos 5 caracteres"
              },
             })}
          />
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-email">E-mail</Label>
          <Input
            id="campo-email"
            placeholder="Insira seu endereço de email"
            type="email"
            $error={!!errors.email}
            {...register("email", { 
              required: "O campo de email é obrigatório", 
              validate: validarEmail })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Fieldset>
        <Controller
          control={control}
          name="telefone"
          rules={{
            pattern: {
              value: /^\(\d{2,3}\) \d{5}-\d{4}$/,
              message: "O telefone inserido está no formato incorreto"
            }
            ,
            required: "O campo de telefone é obrigatório",
          }}
          render={({field}) => (
            <Fieldset>
              <Label>Telefone</Label>
              <InputMask
                mask="(99) 99999-9999"
                placeholder="Ex: (DD) XXXXX-XXXX"
                $error={!!errors.telefone}
                onChange={field.onChange}
              />
              {errors.telefone &&<ErrorMessage>{errors.telefone.message}</ErrorMessage>}
            </Fieldset>
            
          )}  
        />

        <Fieldset>
          <Label htmlFor="campo-senha">Crie uma senha</Label>
          <Input
            id="campo-senha"
            placeholder="Crie uma senha"
            type="password"
            $error={!!errors.senha}
            {...register("senha", {
              minLength: {
                value: 6,
                message: "A senha deve conter no mínimo 6 caracteres"
              },
              required: "O campo de senha é obrigatório"
            })}
          />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-senha-confirmacao">Repita a senha</Label>
          <Input
            id="campo-senha-confirmacao"
            placeholder="Repita a senha anterior"
            type="password"
            $error = {!!errors.senhaVerificada}
            {...register("senhaVerificada", {
              required: "O campo de repetir a senha é obrigatório",
              validate: {
                obrigatorio: val => !!val || "Por favor, insira a senha novamente",
                tamanhoMinimo: val => val.length >= 6 || "A senha deve ter no mínimo 6 caracteres",
                caracteres: val => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(val) || "A senha deve incluir números e letras",
                senhaIgual: val => val === senha || "As senhas não correspondem",
              },
            })}
          />
          {errors.senhaVerificada && <ErrorMessage>{errors.senhaVerificada.message}</ErrorMessage>}
        </Fieldset>
        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default CadastroPessoal;
