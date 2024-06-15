import Description from './Description';
import { useTranslation } from '../../hooks/useTranslations';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mt-12 justify-center w-full h-100vh">
      <div className="text-center flex flex-col">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Mario Rodríguez Aldaz
        </h1>
        <p className="text-lg text-white opacity-75 mb-8">{t('welcome')}</p>
      </div>
      <Description />
    </div>
  );
};

export default Home;
