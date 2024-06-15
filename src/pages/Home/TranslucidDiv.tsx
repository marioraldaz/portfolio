// TranslucidDiv.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

interface TranslucidDivProps {
  title: string;
  paragraphs: string[];
  children?: React.ReactNode;
}

const TranslucidDiv: React.FC<TranslucidDivProps> = ({
  title,
  paragraphs,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <div className="role mb-8 bg-neutral-200 bg-opacity-35 p-4 rounded-lg">
      <h3 className="text-2xl font-bold text-white mb-2">{t(title)}</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-base text-gray-800">
          {t(paragraph)}
        </p>
      ))}
    </div>
  );
};

export default TranslucidDiv;
