import { useNavigate } from "react-router-dom";

const BaseLayout: React.FC<any> = ({ children }: any) => {
  const navigate = useNavigate();
  return (
    <>
      <header className="flex gap-xl justify-center items-center">
        <button type="button" onClick={() => navigate('/')}>back to list</button>
        <div>
          <p className="use-pokefont text-3xl">Pokemon</p>
          <p className="use-bitfont mt-lg text-md">Gotta Catch 'Em All</p>
        </div>
        <button type="button">My Pokemon</button>
      </header>
      {children}
    </>
  );
};

export default BaseLayout;
