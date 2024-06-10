import millify from "millify";
import { useNavigate } from "react-router-dom";

const Card = ({ coin }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/coin/${coin.id}`)}
      className="coin-card d-flex flex-column justify-content-between border p-3"
    >
      <div>
        <h3>{coin.name}</h3>
        <h5>{coin.symbol}</h5>
        <p>{millify(coin.priceUsd)} $</p>
      </div>
      <p className="d-flex gap-1">
        <span>Daily Change:</span>
        <span
          className={
            coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
          }
        >
          %{Number(coin.changePercent24Hr).toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default Card;
