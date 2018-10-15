export const validateEmail = value =>
  !value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Adresse e-mail invalide"
    : undefined;

export const validateNotEmpty = value =>
  value ? undefined : "Le champ est requis";

export const validateEqual = (value1, value2) =>
  value1 && value2 && value1 === value2
    ? undefined
    : "Les champs ne sont pas identique";
