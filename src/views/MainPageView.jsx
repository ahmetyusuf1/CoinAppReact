import millify from "millify";
import { FaBitcoin } from "react-icons/fa";
import Card from "../components/Card";

const MainPageView = ({ coins, setPage, navigate }) => {
  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Welcome, Coin List</span>
      </h4>
      <p>
        Coin List lists cryptocurrencies from around the world and is an
        excellent resource for tracking digital assets.
      </p>
      <div className="d-flex gap-4 justify-content-around my-5">
        {coins.slice(0, 3).map((coin, index) => (
          <Card key={index} coin={coin} />
        ))}
      </div>
      <table className="table table-secondary table-hover table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Volume</th>
            <th>Transaction Volume</th>
            <th>% Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={index} onClick={() => navigate(`/coin/${coin.id}`)}>
              <td>{coin.rank}</td>
              <td className="d-flex gap-2">
                <span className="text-warning fw-bold">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>
              <td>
                <span>{millify(coin.priceUsd)}</span>
                <span className="text-success">$</span>
              </td>
              <td>{millify(coin.marketCapUsd)}</td>
              <td>{millify(coin.volumeUsd24Hr)}</td>
              <td
                className={
                  coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
                }
              >
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <button
          onClick={() => setPage((page) => page + 1)}
          className="btn btn-outline-primary mb-4"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default MainPageView;
