import MainPageView from "../views/MainPageView";
import MainPageModel from "../models/MainPageModel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    MainPageModel.getCoins(page).then((data) => setCoins(coins.concat(data)));
  }, [page]);

  return <MainPageView coins={coins} setPage={setPage} navigate={navigate} />;
};

export default MainPageController;
