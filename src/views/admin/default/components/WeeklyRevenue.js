import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  List,
  ListItem,
  useColorModeValue,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Card from "components/card/Card";

// Przykładowe dane propozycji do głosowania
const proposalsData = [
  {
    id: 1,
    name: "Increase Staking Rewards",
    status: "Active",
    details: "Proposal to increase staking rewards by 5%.",
  },
  {
    id: 2,
    name: "Reduce Transaction Fees",
    status: "Active",
    details: "Proposal to reduce transaction fees by 2%.",
  },
  {
    id: 3,
    name: "Add New Staking Pools",
    status: "Closed",
    details: "Proposal to add new staking pools for ADA and DOT.",
  },
];

// Przykładowe dane historii głosowania
const votingHistoryData = [
  {
    id: 1,
    proposal: "Increase Staking Rewards",
    date: "12 Jul 2023",
    status: "Approved",
  },
  {
    id: 2,
    proposal: "Reduce Transaction Fees",
    date: "15 Jul 2023",
    status: "Rejected",
  },
  {
    id: 3,
    proposal: "Add New Staking Pools",
    date: "20 Jul 2023",
    status: "Pending",
  },
];

const VotingManagement = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const handleVote = (proposal, vote) => {
    setSelectedProposal({ ...proposal, vote });
    onOpen();
  };

  const confirmVote = () => {
    console.log(
      `User voted ${selectedProposal.vote} on proposal ID ${selectedProposal.id}`
    );
    // Tutaj można dodać logikę do obsługi głosowania, np. zapisać wynik głosowania w backendzie
    onClose();
  };

  return (
    <Box>
      {/* Propozycje do głosowania */}
      <Card p="15px" mb="20px" boxShadow="lg">
        <Text fontSize="xl" fontWeight="bold" color={textColor} mb="10px">
          Active Voting Proposals
        </Text>
        <List spacing={3}>
          {proposalsData
            .filter((proposal) => proposal.status === "Active")
            .map((proposal) => (
              <ListItem key={proposal.id} mb="10px">
                <Text fontSize="lg" fontWeight="bold" color={textColor}>
                  {proposal.name}
                </Text>
                <Text fontSize="sm" color={textColor} mb="3px">
                  {proposal.details}
                </Text>
                <Flex>
                  <Button
                    colorScheme="green"
                    size="sm"
                    mr="5px"
                    onClick={() => handleVote(proposal, "Yes")}
                  >
                    Vote Yes
                  </Button>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleVote(proposal, "No")}
                  >
                    Vote No
                  </Button>
                </Flex>
              </ListItem>
            ))}
        </List>
      </Card>

      {/* Historia głosowania */}
      <Card p="15px" mb="20px" boxShadow="lg">
        <Text fontSize="xl" fontWeight="bold" color={textColor} mb="10px">
          Voting History
        </Text>
        <List spacing={3}>
          {votingHistoryData.map((vote) => (
            <ListItem key={vote.id} mb="10px">
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={textColor}>
                    {vote.proposal}
                  </Text>
                  <Text fontSize="sm" color={textColor} mb="3px">
                    Date: {vote.date}
                  </Text>
                </Box>
                <Text fontSize="md" color={textColor}>
                  Status: {vote.status}
                </Text>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Card>

      {/* AlertDialog do potwierdzenia głosowania */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm Vote
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to vote "{selectedProposal?.vote}" for the
              proposal "{selectedProposal?.name}"?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                onClick={confirmVote}
                ml={3}
              >
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default VotingManagement;
