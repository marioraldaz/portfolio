import Description from './Description';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col mt-12 justify-center w-full h-100vh">
      <div className="text-center flex flex-col">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Marios Portfolio
        </h1>
        <p className="text-lg text-white opacity-75">
          Welcome to my personal portfolio website
        </p>
      </div>
      <Description />
    </div>
  );
};

export default Home;
