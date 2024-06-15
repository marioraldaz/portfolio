import React from 'react';
import { useTranslation } from 'react-i18next';

const Description: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="description w-4/5 self-center text-center">
      <h2 className="text-4xl font-bold text-white mb-4">{t('greeting')}</h2>
      <p className="text-lg text-gray-700 mb-6">{t('intro')}</p>
      <div className="role mb-8 bg-neutral-200 bg-opacity-25 p-4 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-2">Role:</h3>
        <p className="text-base text-gray-800">{t('role')}</p>
      </div>
      <div className="technologies">
        <h3 className="text-2xl font-bold text-white mb-2">Technologies:</h3>
        <p className="text-base text-gray-800">{t('technologies.software')}</p>
        <p className="text-base text-gray-800">{t('technologies.ai_tools')}</p>
      </div>
    </div>
  );
};

export default Description;
