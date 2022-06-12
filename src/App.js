import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import { TeamData } from "./Data";

function App() {
  const [teamData, setTeamData] = useState({
    labels: TeamData.map((data) => data.year),
    datasets: [
      {
        label: "Team Income",
        data: TeamData.map((data) => data.teamIncome),
        backgroundColor: ["rgb(119, 231, 73)"],
        borderColor: "gray",
        borderWidth: 1,
      },
      {
        label: "Team Expenditure",
        data: TeamData.map((data) => data.teamExpenditure),
        backgroundColor: ["rgb(212, 46, 46)"],
        borderColor: "gray",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="App">
      <div>
        <a href="https://www.fcporto.pt/en">
          <img
            src="https://upload.wikimedia.org/wikipedia/tr/5/52/FC.Porto.png"
            alt=""
            width="50"
            style={{ marginRight: 20 }}
          />
        </a>

        <h1 style={{ fontFamily: "monospace" }}>FC Porto Transfer Data</h1>
      </div>

      <div style={{ width: 800, margin: "auto", marginBottom: 40 }}>
        <BarChart chartData={teamData} />
      </div>
      <div style={{ width: 800, margin: "auto", marginBottom: 20 }}>
        <LineChart chartData={teamData} />
      </div>
      <p>
        <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Information
        </span>
        : Figures in the charts are expressed in million euros. Data were
        fetched from&nbsp;
        <a
          style={{ "text-decoration": "none" }}
          href="https://www.transfermarkt.com/"
        >
          transfermarket.com
        </a>
      </p>
    </div>
  );
}

export default App;
