import * as yup from 'yup';

export function formatPhoneNumber(phone: string) {
  const pattern = phone.length === 11 ? /(\d{2})(\d{5})(\d{4})/ : /(\d{2})(\d{4})(\d{4})/;
  return phone.replace(pattern, '($1) $2-$3');
}

export const formSchema = yup.object().shape({
  name: yup.string().min(2, 'Insira no mínimo 2 caracteres').required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: yup.string().matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido')
    .transform(value => formatPhoneNumber(value.replace(/\D/g, '')))
    .required('Telefone é obrigatório')
});

export interface FormFields {
  name: string;
  email: string;
  phone: string;
}

export interface RDBusinessCardParams {
  formData: FormFields;
  setFormData: any
}

export interface RDBusinessCardFormParams {
  setFormData: any
}