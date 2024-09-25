import { useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import InputMask from 'react-input-mask';

import { formSchema, FormFields, RDBusinessCardFormParams } from '../../utils/schema';

import RDLandingPageImg from '../../assets/lpimg.svg';

import './index.css';

export default function RDBusinessCardForm({ setFormData }: RDBusinessCardFormParams) {
  const HOME_PHONE_PATTERN = "(99) 9999-9999";
  const MOBILE_PHONE_PATTERN = "(99) 99999-9999";

  const [phoneFieldMask, setPhoneFieldMask] = useState(MOBILE_PHONE_PATTERN);

  function onSubmit(values: FormFields, actions: FormikHelpers<FormFields>) {
    actions.resetForm();
    setFormData(values);
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: formSchema,
    onSubmit,
  });

  const isThereNameFieldErrors = errors.name && touched.name;
  const isThereEmailFieldErrors = errors.email && touched.email;
  const isTherePhoneFieldErrors = errors.phone && touched.phone;

  return (
    <>
    <div className="form-title-container">
      <h1>Gerador de Cartão de Visita</h1>
      <p>Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais.</p>
    </div>
    <div id="form-page">
      <div className="form-img">
        <img src={RDLandingPageImg} alt="Landing Page Form Image" />
      </div>
      <div className="form-content">
        <form method="post" autoComplete="off" onSubmit={handleSubmit}>
          <div id="name-info" className="form-info">
            <label htmlFor="name">Nome*</label>
            <input
              type="text"
              name="name"
              value={values.name}
              placeholder="Seu Nome"
              onChange={handleChange}
              onBlur={handleBlur}
              className={isThereNameFieldErrors ? "input-error" : ""}
            />
            <span
              className="field-error-msg"
              style={{ visibility: isThereNameFieldErrors ? "visible" : "hidden" }}
            >
              {errors.name}
            </span>
          </div>
          <div className="inline-info">
            <div id="phone-info" className="form-info">
              <label htmlFor="phone">Telefone*</label>
              <InputMask
                type="text"
                name="phone"
                value={values.phone}
                mask={phoneFieldMask}
                maskChar=" "
                placeholder="(00) 0 0000-0000"
                onChange={handleChange("phone")}
                onFocus={() => setPhoneFieldMask(MOBILE_PHONE_PATTERN)}
                onBlur={(e) => {
                  if (e.target.value.replace(/\D/g, "").length === 10) {
                    setPhoneFieldMask(HOME_PHONE_PATTERN);
                  }
                }}
                className={isTherePhoneFieldErrors ? "input-error" : ""}
              />
              <span
                className="field-error-msg"
                style={{ visibility: isTherePhoneFieldErrors ? "visible" : "hidden" }}
              >
                {errors.phone}
              </span>
            </div>
            <div id="email-info" className="form-info">
              <label htmlFor="email">E-mail*</label>
              <input
                type="email"
                name="email"
                value={values.email}
                placeholder="nome@email.com"
                onChange={handleChange}
                onBlur={handleBlur}
                className={isThereEmailFieldErrors ? "input-error" : ""}
              />
              <span
                className="field-error-msg"
                style={{ visibility: isThereEmailFieldErrors ? "visible" : "hidden" }}
              >
                {errors.email}
              </span>
            </div>
          </div>
          <p>
            <ul>
              <li>Ao preencher o formulário, concordo * em receber comunicações de acordo com meus interesses</li>
              <li>
                Ao informar meus dados, eu concordo com a <a href="https://legal.rdstation.com/pt/privacy-policy/" target="_blank" rel="noopener noreferrer">Política de Privacidade.</a>
              </li>
            </ul>
            * Você pode alterar suas permissões de comunicação a qualquer tempo.
          </p>
          <button type="submit" disabled={isSubmitting}>Gerar Cartão Grátis &#129062;</button>
        </form>
      </div>
    </div>
    </>
  );
}
