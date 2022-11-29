import React from "react";
import type { ApexOptions } from "apexcharts";
import { Chart } from "../ChartDynamicConfig";
import { IPokemon } from "../../../services/pokemon.types";
import { cardTypeColor } from '../../../utils/cardTypeColor';

interface IProps {
  pokemonInformation: IPokemon;
}

const RadarChart: React.FC<IProps> = ({ pokemonInformation }) => {
  const pokemondata = () => {
    return pokemonInformation?.stats.map((pokemonStat) => {
      return {
        x: pokemonStat.stat.name,
        y: pokemonStat.base_stat,
      };
    });
  };

  const chartOptions: ApexOptions = {
    series: [
      {
        name: "Base",
        color: cardTypeColor(pokemonInformation?.types[0].type.name).primary,
        data: pokemondata() || [0],
      },
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.9,
        opacityTo: 0.9,
        stops: [0, 50, 100],
        shade: 'dark',
        type: "horizontal",
        inverseColors: true,
        colorStops: []
      }
    },
    chart: {
      height: 350,
      type: "bar",
      background: "transparent",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    // colors: ["#00E396"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
      showForSingleSeries: true,
    },
    yaxis: {
      min: 0,
      max: 255,
    },
  };

  return (
    <div>
      <Chart
        height={400}
        width={"50%"}
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
      />
    </div>
  );
};

export default RadarChart;
