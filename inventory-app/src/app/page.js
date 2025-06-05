'use client';
import { FaRupeeSign, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

const Home = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales (₹)',
        data: [50000, 60000, 40000, 70000, 65000],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="space-y-6 font-urbanist">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Total Sales',
            value: '₹1,50,000',
            color: 'emerald',
            icon: FaRupeeSign,
          },
          {
            title: 'Total Profit',
            value: '₹30,000',
            color: 'emerald',
            icon: FaChartLine,
          },
          {
            title: 'Total Loss',
            value: '₹5,000',
            color: 'red',
            icon: FaExclamationTriangle,
          },
        ].map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-4">
              <metric.icon className={`w-10 h-10 text-${metric.color}-600`} />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{metric.title}</h3>
                <p className={`text-2xl font-bold text-${metric.color}-600`}>{metric.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Sales Trend</h3>
        <Line data={chartData} options={chartOptions} className="w-full h-64" />
      </div>
    </div>
  );
};

export default Home;