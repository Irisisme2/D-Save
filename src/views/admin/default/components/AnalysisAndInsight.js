import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Select,
  Button,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Tooltip,
  Checkbox,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import Card from "components/card/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend
);

const initialLineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Savings Balance",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      fill: true,
    },
    {
      label: "Market Trends",
      data: [50, 45, 60, 65, 55, 40, 35],
      borderColor: "rgba(153,102,255,1)",
      backgroundColor: "rgba(153,102,255,0.2)",
      fill: true,
    },
    {
      label: "User Contributions",
      data: [75, 80, 70, 90, 85, 65, 60],
      borderColor: "rgba(255,159,64,1)",
      backgroundColor: "rgba(255,159,64,0.2)",
      fill: true,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'User Savings and Market Trends',
    },
  },
};

const AnalysisAndInsight = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [lineChartData, setLineChartData] = useState(initialLineChartData);
  const [timeFrame, setTimeFrame] = useState("6M");
  const [showAlert, setShowAlert] = useState(false);
  const [personalizedRecommendations, setPersonalizedRecommendations] = useState([]);

  const handleTimeFrameChange = (event) => {
    const selectedTimeFrame = event.target.value;
    setTimeFrame(selectedTimeFrame);
    // Here you can add logic to fetch and update the data based on the selected time frame
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const fetchPersonalizedRecommendations = () => {
    // Example logic for fetching personalized recommendations
    const recommendations = [
      "Increase your monthly savings by 10% to reach your goal faster.",
      "Consider investing in diversified funds to minimize risk.",
      "Track market trends closely for better decision making."
    ];
    setPersonalizedRecommendations(recommendations);
    setShowAlert(true);
  };

  return (
    <Box>
      {/* Interaktywne filtry czasowe */}
      <Flex justify="space-between" align="center" mb="20px">
        <Text fontSize="xl" fontWeight="bold" color={textColor}>
          Analysis and Insight
        </Text>
        <Select
          width="150px"
          onChange={handleTimeFrameChange}
          value={timeFrame}
          placeholder="Select Time Frame"
        >
          <option value="1M">Last 1 Month</option>
          <option value="3M">Last 3 Months</option>
          <option value="6M">Last 6 Months</option>
          <option value="1Y">Last 1 Year</option>
        </Select>
      </Flex>

      {/* Alerty i Powiadomienia */}
      {showAlert && (
        <Alert status="info" mb="20px">
          <AlertIcon />
          Personalized recommendations are available. Check below!
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleAlertClose} />
        </Alert>
      )}

      {/* Wgląd Użytkownika */}
      <Card p="15px" mb="20px" boxShadow="lg">
        <Flex justify="space-between" align="center" mb="10px">
          <Text fontSize="xl" fontWeight="bold" color={textColor}>
            User Insight
          </Text>
          <Tooltip label="This chart shows the user's savings balance, market trends, and user contributions over time.">
            <Button size="sm">Info</Button>
          </Tooltip>
        </Flex>
        <Box>
          <Line data={lineChartData} options={lineChartOptions} />
        </Box>
      </Card>

      {/* Trendy Rynkowe */}
      <Card p="15px" mb="20px" boxShadow="lg">
        <Flex justify="space-between" align="center" mb="10px">
          <Text fontSize="xl" fontWeight="bold" color={textColor}>
            Market Trends
          </Text>
          <Tooltip label="This chart displays relevant market trends and their potential impact on the user's savings pools.">
            <Button size="sm">Info</Button>
          </Tooltip>
        </Flex>
        <Box>
          <Line data={lineChartData} options={lineChartOptions} />
        </Box>
      </Card>

      {/* Szczegółowe statystyki */}
      <Card p="15px" mb="20px" boxShadow="lg">
        <Text fontSize="xl" fontWeight="bold" color={textColor} mb="10px">
          Detailed Statistics
        </Text>
        <Stack direction="row" spacing="24px">
          <Stat>
            <StatLabel>Total Savings</StatLabel>
            <StatNumber>$15,000</StatNumber>
            <StatHelpText>20% increase from last month</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Monthly Contributions</StatLabel>
            <StatNumber>$2,500</StatNumber>
            <StatHelpText>15% increase from last month</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Market Performance</StatLabel>
            <StatNumber>8% growth</StatNumber>
            <StatHelpText>In the last 6 months</StatHelpText>
          </Stat>
        </Stack>
      </Card>

      {/* Historyczne dane porównawcze */}
      <Card p="15px" mb="20px" boxShadow="lg">
        <Text fontSize="xl" fontWeight="bold" color={textColor} mb="10px">
          Historical Data Comparison
        </Text>
        <Box>
          <Line
            data={{
              labels: ["2020", "2021", "2022"],
              datasets: [
                {
                  label: "Savings Balance",
                  data: [12000, 14000, 15000],
                  borderColor: "rgba(75,192,192,1)",
                  backgroundColor: "rgba(75,192,192,0.2)",
                  fill: true,
                },
                {
                  label: "Market Trends",
                  data: [5, 7, 8],
                  borderColor: "rgba(153,102,255,1)",
                  backgroundColor: "rgba(153,102,255,0.2)",
                  fill: true,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Historical Savings and Market Trends Comparison',
                },
              },
            }}
          />
        </Box>
      </Card>

      {/* Sugestie optymalizacji */}
      <Card p="15px" mb="20px" boxShadow="lg">
        <Flex justify="space-between" align="center" mb="10px">
          <Text fontSize="xl" fontWeight="bold" color={textColor}>
            Optimization Suggestions
          </Text>
          <Button size="sm" colorScheme="teal" onClick={fetchPersonalizedRecommendations}>
            Get Recommendations
          </Button>
        </Flex>
        <Box>
          {personalizedRecommendations.map((recommendation, index) => (
            <Text key={index} mb="10px">
              {recommendation}
            </Text>
          ))}
        </Box>
      </Card>

      {/* Dynamiczne analizy */}
      <Card p="15px" mb="20px" boxShadow="lg">
        <Text fontSize="xl" fontWeight="bold" color={textColor} mb="10px">
          Dynamic Analysis
        </Text>
        <Checkbox mb="10px" defaultChecked>
          Show Savings Balance
        </Checkbox>
        <Checkbox mb="10px" defaultChecked>
          Show Market Trends
        </Checkbox>
        <Checkbox mb="10px" defaultChecked>
          Show User Contributions
        </Checkbox>
      </Card>
    </Box>
  );
};

export default AnalysisAndInsight;
