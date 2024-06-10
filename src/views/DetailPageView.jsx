import millify from "millify";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const DetailPageView = ({ model }) => {
  return (
    <div>
      <h3 className="d-flex justify-content-center gap-2 mt-2">
        <span className="text-warning">{model.coin?.detail?.symbol}</span>
        <span>{model.coin?.detail?.name}</span>
      </h3>
      <div className="row">
        <section className="col-md-3 px-5 py-4 d-flex flex-column gap-5">
          {model?.infoFields?.map((data, index) => (
            <div
              key={index}
              className="text-bg-light d-flex flex-column align-items-center gap-2 py-2 rounded shadow-md"
            >
              <span>{data.icon}</span>
              <h4>{data.label}</h4>
              <p>{millify(data.value)}</p>
            </div>
          ))}
        </section>
        <section className="col-md-9 d-flex flex-column gap-4 p-md-5">
          <Line data={model.chartData} />
        </section>
      </div>
    </div>
  );
};

export default DetailPageView;
