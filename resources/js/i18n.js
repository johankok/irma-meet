import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// TODO: Move these to a separate file
const resources = {
  nl: {
    translation: {
      
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'nl',
    keySeparator: '.',

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;