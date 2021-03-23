import React, { useEffect } from "react";
import { useState } from "react";
import HistoryComponent from "./HistoryComponent";
import { urlHistory, headers } from "../../api/api";

const HistoryContainer = () => {
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      const res = await fetch(urlHistory, {
        method: "GET",
        orderBy: "DESC",
        headers,
      });
      const data = await res.json();
      setHistory(data);
      setLoading(false);
    };
    fetchHistory();
  }, []);

  return (
    <div>
      <HistoryComponent
        loading={loading}
        history={history}
        showHistory={true}
      />
    </div>
  );
};

export default HistoryContainer;
