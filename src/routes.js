import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdAccountBalanceWallet,
  MdAttachMoney,
  MdMoneyOff,
  MdOutlineHistoryEdu,
  MdGavel
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import Transactions from "views/admin/marketplace — kopia";
import Governance from "views/admin/marketplace — kopia (2)";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "My Pools",
    layout: "/admin",
    path: "/my-pools",
    icon: (
      <Icon
        as={MdAccountBalanceWallet}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Deposit Funds",
    layout: "/admin",
    icon: <Icon as={MdAttachMoney} width="20px" height="20px" color="inherit" />,
    path: "/deposit-funds",
    component: DataTables,
  },
  {
    name: "Withdraw Funds",
    layout: "/admin",
    path: "/withdraw-funds",
    icon: <Icon as={MdMoneyOff} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Transactions",
    layout: "/admin",
    path: "/transactions",
    icon: <Icon as={MdOutlineHistoryEdu} width="20px" height="20px" color="inherit" />,
    component: Transactions,
  },
  {
    name: "Governance",
    layout: "/admin",
    path: "/governance",
    icon: <Icon as={MdGavel} width="20px" height="20px" color="inherit" />,
    component: Governance,
  },
];

export default routes;
