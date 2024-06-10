import { useParams } from "react-router-dom";
import DetailPageView from "../views/DetailPageView";
import { useEffect, useState } from "react";
import DetailPageModel from "../models/DetalPageModel";

const DetailPageController = () => {
  const [coin, setCoin] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    DetailPageModel.getCoin(id).then((res) => setCoin(res));
  }, []);

  const model = new DetailPageModel(coin);

  return <DetailPageView model={model} />;
};

export default DetailPageController;
