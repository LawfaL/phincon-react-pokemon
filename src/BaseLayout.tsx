import { Button } from "@app/components/button/Button";
import { useLocation, useNavigate } from "react-router-dom";

const BaseLayout: React.FC<any> = ({ children }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="lg:w-1/2 m-auto">
      <header className="flex gap-xl justify-between items-center">
        <Button
          className="font-bold"
          label="List"
          size="sm"
          variant="danger"
          onClick={() => navigate("/")}
          disabled={location.pathname == "/"}
        />
        <div>
          <p className="use-pokefont text-2xl lg:text-3xl">Pokemon</p>
          <p className="use-bitfont mt-lg text-xs lg:text-md">Gotta Catch 'Em All</p>
        </div>
        <Button
          className={`text-nowrap font-bold`}
          label="Inventory"
          size="sm"
          variant="primary"
          onClick={() => navigate("/player")}
          disabled={location.pathname.includes("player")}
        />
      </header>
      {children}
    </div>
  );
};

export default BaseLayout;
