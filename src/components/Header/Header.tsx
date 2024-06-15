import LanSwitch from './LanSwitch';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center border-b-4 border-purple-500 h-20 bg-neutral-200">
      <h1 className="m-4 text-2xl">Mario Rodriguez Aldaz</h1>
      <LanSwitch />
    </div>
  );
};

export default Header;
