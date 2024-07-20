import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from 'recharts';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';

// Przykładowe dane dotyczące wzrostu depozytów i odsetków
const data = [
  { name: 'Jan', deposits: 500, interest: 100 },
  { name: 'Feb', deposits: 600, interest: 120 },
  { name: 'Mar', deposits: 700, interest: 150 },
  { name: 'Apr', deposits: 800, interest: 180 },
  { name: 'May', deposits: 850, interest: 200 },
  { name: 'Jun', deposits: 900, interest: 220 },
  { name: 'Jul', deposits: 950, interest: 250 },
  { name: 'Aug', deposits: 1000, interest: 280 },
  { name: 'Sep', deposits: 1100, interest: 300 },
  { name: 'Oct', deposits: 1200, interest: 320 },
  { name: 'Nov', deposits: 1300, interest: 340 },
  { name: 'Dec', deposits: 1400, interest: 360 },
];

const TotalSpent = () => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const gridColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Card w="100%" p="20px">
      <Text fontSize="lg" fontWeight="bold" mb="20px" color={textColor}>
        Deposits and Interest Growth
      </Text>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="name" stroke={textColor} />
          <YAxis stroke={textColor} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="deposits" stroke="#8884d8" activeDot={{ r: 8 }} name="Deposits" />
          <Line type="monotone" dataKey="interest" stroke="#82ca9d" name="Interest" />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box p={3} bg="white" boxShadow="md" borderRadius="md">
        <Text fontSize="sm" fontWeight="bold">{`${payload[0].payload.name}`}</Text>
        <Text fontSize="sm">{`Deposits: ${payload[0].payload.deposits}`}</Text>
        <Text fontSize="sm">{`Interest: ${payload[0].payload.interest}`}</Text>
      </Box>
    );
  }

  return null;
};

export default TotalSpent;
