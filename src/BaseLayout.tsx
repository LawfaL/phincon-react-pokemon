import { Button } from "@app/components/button/Button";
import { useNavigate } from "react-router-dom";

const BaseLayout: React.FC<any> = ({ children }: any) => {
  const navigate = useNavigate();
  return (
    <div className="lg:w-1/2 m-auto">
      <header className="flex gap-xl justify-between items-center">
        <Button className="font-bold" label="List" size="sm" variant="danger" onClick={() => navigate('/')} />
        <div>
          <p className="use-pokefont text-3xl">Pokemon</p>
          <p className="use-bitfont mt-lg text-md">Gotta Catch 'Em All</p>
        </div>
        <Button className="text-nowrap font-bold" label="Inventory" size="sm" variant="primary" onClick={() => navigate('/player')} />
      </header>
      {children}
    </div>
  );
};

export default BaseLayout;
