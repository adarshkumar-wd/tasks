import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function App() {
  const data = [
    {
      name: "Adarsh",
      age: 20,
      y: 80,
    },

    {
      name: "Ajay",
      age: 22,
      y: 55,
    },

    {
      name: "Akash",
      age: 18,
      y: 87,
    },

    {
      name: "Rahul",
      age: 25,
      y: 63,
    },
  ];

  const options = (
    data: { name: string; age: number; y: number }[],
    title: string,
    type: "pie" | "donut"
  ) => ({
    chart: {
      type: "pie",
      backgroundColor: "yellow",
      height: "100%",
    },

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 640,
          },
          chartOptions: {
            chart: {
              height: 300,
            },
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  distance: 10,
                  style: {
                    fontSize: "12px",
                  },
                },
              },
            },
          },
        },
      ],
    },

    title: {
      text: title,
      style: {
        color: "orange",
        offsetX: 0,
        offsetY: 0,
        width: 5,
      },
    },

    tooltip: {
      pointFormat:
        "<b>{point.name}</b>: <span style='color: pink'>{point.y}</span>)",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderWidth: 1,
      borderRadius: 8,
      shadow: true,
      style: {
        padding: "10px",
        fontSize: "14px",
      },
    },

    credits: {
      enabled: false,
    },

    series: [
      {
        name: "marks",
        colorByPoint: true,
        data: data,
        innerSize: `${type.toLocaleLowerCase() === "donut" ? "70%" : ""}`,
        animation: {
          duration: 500,
        },
        showInLegend: true,
      },
    ],

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 35,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#fff",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.y} Marks",
          style: {
            fontSize: "14px",
            color: "#333",
            textOutline: "1px solid #fff",
          },
          distance: 20,
          connectorWidth: 2,
          connectorColor: "orange",
        },
      },
    },

    legend: {
      align: "center",
      horizontalAlign: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        fontSize: "13px",
        fontWeight: "normal",
        color: "#333",
      },
    },

    states: {
      hover: {
        brightness: 0.1,
        halo: {
          size: 50,
          opacity: 0.5,
        },
      },
    },
  });

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-400">
          Student Marks Visualization
        </h1>

        <div className="w-full max-w-7xl flex flex-col xl:flex-row gap-6 items-center">
          {/* Pie Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-2 w-full xl:w-[45%] h-fit">
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Pie Chart
            </h2>
            <HighchartsReact
              highcharts={Highcharts}
              options={options(data, "StudentMarks", "pie")}
            />
          </div>

          {/* Donut Chart */}
          <div className="bg-white rounded-2xl shadow-xl w-full p-6 xl:w-[45%] h-fit">
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Donut Chart
            </h2>
            <HighchartsReact
              highcharts={Highcharts}
              options={options(data, "StudentMarks", "donut")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
