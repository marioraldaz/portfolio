import React from 'react';
import { useTranslation } from '../../hooks/useTranslations';

const LangSwitch: React.FC = () => {
  const { t, i18n } = useTranslation(); // Using the useTranslation hook from react-i18next

  const handleLangSwitch = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'; // Toggle between 'en' and 'es'
    i18n.changeLanguage(newLang); // Change the language using i18next's changeLanguage method
  };

  return <button onClick={handleLangSwitch}>{t('switchLanguage')}</button>;
};

export default LangSwitch;
