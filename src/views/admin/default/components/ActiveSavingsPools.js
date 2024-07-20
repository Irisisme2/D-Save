import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  Select,
  Button,
  Input,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import Property1 from "assets/img/nfts/btc1.jpg";
import Property2 from "assets/img/nfts/eth.png";
import Property3 from "assets/img/nfts/ada.png";
import Property4 from "assets/img/nfts/bnb.png";  
import Property5 from "assets/img/nfts/dot.png";  
import Property6 from "assets/img/nfts/sql.png";   
import { Chart, LineController, CategoryScale, LineElement, PointElement, LinearScale, Tooltip, Title } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Rejestracja skali kategorii i innych niezbędnych elementów
Chart.register(
  LineController,
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  Tooltip,
  Title
);

const ActiveSavingsPools = () => {
  const [activePools, setActivePools] = useState([
    {
      id: 1,
      poolName: 'ETH Savings Pool',
      depositAmount: 5,
      interestRate: '6% annually',
      lockPeriod: '1 month',
      earnedInterest: 0.5,
      status: 'Active',
      startDate: '2024-07-01',
      endDate: '2024-08-01',
      options: 'Weekly payouts',
      image: Property2,
      chartData: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'ETH Savings Pool',
            data: [52, 4, 116, 354],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      },
      details: {
        payoutHistory: [
          { week: 1, payout: 1.25 },
          { week: 2, payout: 2.0 },
          { week: 3, payout: 2.5 },
          { week: 4, payout: 4.5 },
        ],
        rewards: 2.5,
        earlyTermination: true,
        daysToPayout: 3,
      },
    },
    {
      id: 2,
      poolName: 'BTC Savings Pool',
      depositAmount: 8,
      interestRate: '8% annually',
      lockPeriod: '1 month',
      earnedInterest: 0.8,
      status: 'Active',
      startDate: '2024-07-02',
      endDate: '2024-08-02',
      options: 'Monthly payouts',
      image: Property1,
      chartData: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'BTC Savings Pool',
            data: [8, 71, 911, 226],
            fill: false,
            borderColor: 'rgba(255,99,132,1)',
          },
        ],
      },
      details: {
        payoutHistory: [
          { week: 1, payout: 2.0 },
          { week: 2, payout: 3.5 },
          { week: 3, payout: 4.5 },
          { week: 4, payout: 5.75 },
        ],
        rewards: 3.0,
        earlyTermination: false,
        daysToPayout: 7,
      },
    },
    {
      id: 3,
      poolName: 'ADA Savings Pool',
      depositAmount: 10,
      interestRate: '5% annually',
      lockPeriod: '1 month',
      earnedInterest: 0.9,
      status: 'Active',
      startDate: '2024-07-03',
      endDate: '2024-08-03',
      options: 'Weekly payouts',
      image: Property3,
      chartData: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'ADA Savings Pool',
            data: [102, 91, 11222, 82],
            fill: false,
            borderColor: 'rgba(153,102,255,1)',
          },
        ],
      },
      details: {
        payoutHistory: [
          { week: 1, payout: 1.5 },
          { week: 2, payout: 2.5 },
          { week: 3, payout: 3.0 },
          { week: 4, payout: 5.5 },
        ],
        rewards: 2.75,
        earlyTermination: true,
        daysToPayout: 5,
      },
    },
    // New Pools
    {
      id: 4,
      poolName: 'BNB Savings Pool',
      depositAmount: 6,
      interestRate: '7% annually',
      lockPeriod: '1 month',
      earnedInterest: 0.6,
      status: 'Active',
      startDate: '2024-07-04',
      endDate: '2024-08-04',
      options: 'Monthly payouts',
      image: Property4,
      chartData: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'BNB Savings Pool',
            data: [15, 30, 45, 60],
            fill: false,
            borderColor: 'rgba(255,205,86,1)',
          },
        ],
      },
      details: {
        payoutHistory: [
          { week: 1, payout: 1.5 },
          { week: 2, payout: 2.0 },
          { week: 3, payout: 2.5 },
          { week: 4, payout: 3.0 },
        ],
        rewards: 3.0,
        earlyTermination: false,
        daysToPayout: 7,
      },
    },
    {
      id: 5,
      poolName: 'DOT Savings Pool',
      depositAmount: 12,
      interestRate: '9% annually',
      lockPeriod: '2 months',
      earnedInterest: 1.0,
      status: 'Active',
      startDate: '2024-07-05',
      endDate: '2024-09-05',
      options: 'Weekly payouts',
      image: Property5,
      chartData: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'DOT Savings Pool',
            data: [25, 55, 80, 100],
            fill: false,
            borderColor: 'rgba(54,162,235,1)',
          },
        ],
      },
      details: {
        payoutHistory: [
          { week: 1, payout: 2.0 },
          { week: 2, payout: 3.0 },
          { week: 3, payout: 4.0 },
          { week: 4, payout: 5.0 },
        ],
        rewards: 4.0,
        earlyTermination: true,
        daysToPayout: 4,
      },
    },
    {
      id: 6,
      poolName: 'SOL Savings Pool',
      depositAmount: 7,
      interestRate: '7% annually',
      lockPeriod: '1 month',
      earnedInterest: 0.7,
      status: 'Active',
      startDate: '2024-07-06',
      endDate: '2024-08-06',
      options: 'Monthly payouts',
      image: Property6,
      chartData: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'SOL Savings Pool',
            data: [35, 40, 50, 60],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      },
      details: {
        payoutHistory: [
          { week: 1, payout: 1.0 },
          { week: 2, payout: 1.5 },
          { week: 3, payout: 2.0 },
          { week: 4, payout: 2.5 },
        ],
        rewards: 2.5,
        earlyTermination: false,
        daysToPayout: 6,
      },
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [depositAmount, setDepositAmount] = useState(1);
  const [withdrawAmount, setWithdrawAmount] = useState(1);

  const handleChange = (e) => {
    const { value } = e.target;
    let filteredPools = [];

    if (value === "weekly") {
      filteredPools = activePools.filter(pool => pool.options === "Weekly payouts");
    } else if (value === "monthly") {
      filteredPools = activePools.filter(pool => pool.options === "Monthly payouts");
    } else {
      filteredPools = activePools;
    }

    setActivePools(filteredPools);
  };

  const getImageForPool = (poolName) => {
    switch (poolName) {
      case "ETH Savings Pool":
        return Property2;
      case "BTC Savings Pool":
        return Property1;
      case "ADA Savings Pool":
        return Property3;
      case "BNB Savings Pool":
        return Property4;
      case "DOGE Savings Pool":
        return Property5;
      case "SOL Savings Pool":
        return Property6;
      default:
        return Property2;
    }
  };

  const handleDeposit = (id) => {
    setModalContent({
      type: "deposit",
      poolId: id,
    });
    setShowModal(true);
  };

  const handleWithdraw = (id) => {
    setModalContent({
      type: "withdraw",
      poolId: id,
    });
    setShowModal(true);
  };

  const handleFormSubmit = (amount) => {
    const poolId = modalContent.poolId;
    if (modalContent.type === "deposit") {
      console.log(`Deposit ${amount} into pool ID ${poolId}`);
      const updatedPools = activePools.map(pool =>
        pool.id === poolId ? { ...pool, depositAmount: pool.depositAmount + amount } : pool
      );
      setActivePools(updatedPools);
    } else {
      console.log(`Withdraw ${amount} from pool ID ${poolId}`);
      const updatedPools = activePools.map(pool =>
        pool.id === poolId ? { ...pool, depositAmount: pool.depositAmount - amount } : pool
      );
      setActivePools(updatedPools);
    }
    setShowModal(false);
  };

  const handleShowDetails = (pool) => {
    setModalContent({
      type: "details",
      pool,
    });
    setShowModal(true);
  };

  const handleEarlyTermination = () => {
    const poolId = modalContent.pool.id;
    const updatedPools = activePools.map(pool =>
      pool.id === poolId ? { ...pool, depositAmount: 0, earlyTermination: true } : pool
    );
    setActivePools(updatedPools);
    setShowModal(false);
  };

  const handlePayout = (poolId) => {
    console.log(`Payout rewards for pool ID ${poolId}`);
    const updatedPools = activePools.map(pool =>
      pool.id === poolId ? { ...pool, depositAmount: 0 } : pool
    );
    setActivePools(updatedPools);
    setShowModal(false);
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box>
      <Flex alignItems="center" mb="20px">
        <Text fontSize="xl" fontWeight="bold" mr="10px">
          Active Savings Pools
        </Text>
        <Select placeholder="Filter by options" onChange={handleChange} w="200px">
          <option value="all">All</option>
          <option value="weekly">Weekly payouts</option>
          <option value="monthly">Monthly payouts</option>
        </Select>
      </Flex>

      {activePools.map((pool) => (
        <Card key={pool.id} p="15px" mb="20px" boxShadow="lg">
          <Flex align="center" justify="space-between">
            <Flex align="center">
              <Image src={getImageForPool(pool.poolName)} alt={pool.poolName} boxSize="50px" borderRadius="full" mr="15px" />
              <Box>
                <Text fontSize="xl" fontWeight="bold" color={textColor} mb="3px">
                  {pool.poolName}
                </Text>
                <Text fontSize="sm" color={textColor} mb="3px">
                  Deposit Amount: {pool.depositAmount}
                </Text>
                <Text fontSize="sm" color={textColor} mb="3px">
                  Interest Rate: {pool.interestRate}
                </Text>
                <Text fontSize="sm" color={textColor} mb="3px">
                  Lock Period: {pool.lockPeriod}
                </Text>
                <Text fontSize="sm" color={textColor} mb="3px">
                  Earned Interest: {pool.earnedInterest}
                </Text>
                <Text fontSize="sm" color={textColor} mb="3px">
                  Status: {pool.status}
                </Text>
                {modalContent?.type === "details" && (
                  <Text fontSize="sm" color={textColor} mb="3px">
                    Days to Payout: {pool.details.daysToPayout}
                  </Text>
                )}
              </Box>
            </Flex>

            <Flex>
              <Button onClick={() => handleDeposit(pool.id)} colorScheme="blue" size="sm" mr="10px">
                Deposit
              </Button>
              <Button onClick={() => handleWithdraw(pool.id)} colorScheme="red" size="sm">
                Withdraw
              </Button>
              <Button onClick={() => handleShowDetails(pool)} colorScheme="purple" size="sm" ml="10px">
                More details
              </Button>
              {!pool.details.earlyTermination && (
                <Button onClick={() => handlePayout(pool.id)} colorScheme="green" size="sm" ml="10px">
                  Payout
                </Button>
              )}
            </Flex>
          </Flex>

          <Box mt="15px">
            <Line
              data={pool.chartData}
              options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`;
                      }
                    }
                  }
                },
                scales: {
                  x: {
                    type: 'category',
                    labels: pool.chartData.labels,
                    position: 'bottom'
                  },
                  y: {
                    beginAtZero: true
                  }
                },
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                  mode: 'index',
                  intersect: false
                },
                zoom: {
                  wheel: {
                    enabled: true,
                  },
                  pinch: {
                    enabled: true
                  },
                  mode: 'xy'
                }
              }}
            />
          </Box>
        </Card>
      ))}

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalContent?.type === "deposit" ? "Deposit Amount" : modalContent?.type === "withdraw" ? "Withdraw Amount" : "Pool Details"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalContent?.type === "deposit" || modalContent?.type === "withdraw" ? (
              <FormControl>
                <FormLabel>{modalContent?.type === "deposit" ? "Deposit amount:" : "Withdraw amount:"}</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  min="1"
                  value={modalContent?.type === "deposit" ? depositAmount : withdrawAmount}
                  onChange={(e) => {
                    if (modalContent?.type === "deposit") {
                      setDepositAmount(parseInt(e.target.value) || 0);
                    } else {
                      setWithdrawAmount(parseInt(e.target.value) || 0);
                    }
                  }}
                />
              </FormControl>
            ) : modalContent?.type === "details" && modalContent.pool ? (
              <>
                <Text fontSize="md" color={textColor} mb="5px">
                  Deposit Amount: {modalContent.pool.depositAmount}
                </Text>
                <Text fontSize="md" color={textColor} mb="5px">
                  Interest Rate: {modalContent.pool.interestRate}
                </Text>
                <Text fontSize="md" color={textColor} mb="5px">
                  Lock Period: {modalContent.pool.lockPeriod}
                </Text>
                <Text fontSize="md" color={textColor} mb="5px">
                  Earned Interest: {modalContent.pool.earnedInterest}
                </Text>
                <Text fontSize="md" color={textColor} mb="5px">
                  Status: {modalContent.pool.status}
                </Text>
                <Text fontSize="md" color={textColor} mb="5px">
                  Payout History:
                </Text>
                {modalContent.pool.details.payoutHistory.map((item) => (
                  <Text key={item.week} fontSize="sm" color={textColor} mb="3px">
                    Week {item.week}: ${item.payout}
                  </Text>
                ))}
                <Text fontSize="md" color={textColor} mb="5px">
                  Rewards: ${modalContent.pool.details.rewards}
                </Text>
                <Text fontSize="md" color={textColor} mb="5px">
                  Early Termination: {modalContent.pool.details.earlyTermination ? "Yes" : "No"}
                </Text>
                {modalContent.pool.details.earlyTermination ? (
                  <Text fontSize="md" color={textColor} mb="5px">
                    Early Termination Fee: ${modalContent.pool.details.rewards * 0.1}
                  </Text>
                ) : (
                  <Text fontSize="md" color={textColor} mb="5px">
                    Days to Payout: {modalContent.pool.details.daysToPayout}
                  </Text>
                )}
              </>
            ) : (
              <Text fontSize="md" color={textColor}>
                No details available.
              </Text>
            )}

            {modalContent?.type === "details" && modalContent.pool && !modalContent.pool.details.earlyTermination && (
              <Button colorScheme="orange" mt="10px" onClick={handleEarlyTermination}>
                Early Termination
              </Button>
            )}
          </ModalBody>
          <ModalFooter>
            {modalContent?.type === "deposit" || modalContent?.type === "withdraw" ? (
              <Button colorScheme="blue" onClick={() => handleFormSubmit(modalContent?.type === "deposit" ? depositAmount : withdrawAmount)}>
                Submit
              </Button>
            ) : (
              <Button colorScheme="blue" onClick={() => setShowModal(false)}>
                Close
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ActiveSavingsPools;
