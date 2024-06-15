// useTranslations.ts
import i18n from 'i18next';
import { useTranslation as useTranslationRaw } from 'react-i18next';

// Initialize i18n if not already initialized
if (!i18n.isInitialized) {
  i18n.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: 'en', // Default language
    resources: {
      en: {
        translation: require('../locales/en.json'),
      },
      es: {
        translation: require('../locales/es.json'),
      },
    },
  });
}

export const useTranslation = () => useTranslationRaw();
