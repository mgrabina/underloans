> # UnderLoans
>
> Undercollateralized Lending Platform based on TradFi Risk assessment models and blockchain technology.

UnderLoans is a decentralized platform enabling undercollateralized loans on-chain. By bridging traditional finance (TradFi) risk assessment models with blockchain technology, it unlocks access to credit for individuals and businesses excluded by traditional systems.

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Problem](#problem)
- [Solution](#solution)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running Locally](#running-locally)
- [Scripts](#scripts)
  - [Contracts (Hardhat)](#contracts-hardhat)
  - [DApp (Next.js)](#dapp-nextjs)
- [Key Files](#key-files)
  - [Contracts](#contracts)
  - [Other important files](#other-important-files)
- [Future Work](#future-work)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

**UnderLoans** addresses the limitations of traditional lending systems by offering global, borderless, and undercollateralized loans. Using on-chain transparency and decentralized credit scoring, it connects borrowers and lenders directly, reducing barriers and enhancing financial inclusion.

---

## Problem

- **Barriers to Financial Inclusion**: High collateral requirements lock out most borrowers.
- **Exclusion of the Underbanked**: Credit-invisible individuals and censored users have no access to loans.
- **Capital Inefficiency**: Overcollateralized loans trap valuable capital, limiting growth.
- **Fragmented Liquidity**: Local lending markets miss out on global opportunities.

---

## Solution

UnderLoans combines the best of TradFi and DeFi:

- **Undercollateralized Loans**: Borrowers can access credit with minimal collateral.
- **Global Liquidity**: Lenders from anywhere can support borrowers worldwide.
- **Smart Risk Assessment**: Uses TradFi and on-chain data to evaluate creditworthiness.
- **Transparent Contracts**: Loans are governed by smart contracts ensuring security and automation.

---

## Features

- **KYC Integration**: Secure identity verification links borrowers to wallets.
- **TradFi Data Integration**: Leverages APIs from central banks and credit bureaus (e.g., BCRA in Argentina).
- **Decentralized Lending Pools**: Lenders provide liquidity and earn yields.

---

## Technologies

- **Hardhat**: Ethereum development framework for smart contracts.
- **Next.js**: Frontend framework for building scalable DApps.
- **Ethers.js**: Blockchain interaction library.
- **TypeScript**: Strongly-typed development for reliability and maintainability.
- **Yarn Workspaces**: Efficient dependency management for monorepos.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: `>= 18.17.0`
- **Yarn**: `3.2.3`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/mgrabina/underloans.git
cd underloans
yarn install
```

### Environment Setup

Create a `.env` file in the root of the project and add the required environment variables.

### Running Locally

1. **Start Local Blockchain**:  
   Run a local Ethereum network using Hardhat.

   ```bash
   yarn chain
   ```

2. **Deploy Contracts**:  
   Deploy the smart contracts to the local network.

   ```bash
   yarn deploy
   ```

3. **Start Frontend**:  
   Run the Next.js DApp locally.
   ```bash
   yarn start
   ```

Access the DApp at [http://localhost:3000](http://localhost:3000).

---

## Scripts

### Contracts (Hardhat)

- **Start Local Chain**: `yarn chain`
- **Deploy Contracts**: `yarn deploy`
- **Compile Contracts**: `yarn contracts:compile`
- **Run Tests**: `yarn contracts:test`
- **Verify Contracts**: `yarn verify`

### DApp (Next.js)

- **Start Development Server**: `yarn start`
- **Build for Production**: `yarn dapp:build`
- **Check Types**: `yarn next:check-types`

---

## Key Files

### Contracts
The UnderLoans protocol relies on three key contracts:
1. **LendingProtocol**: Handles borrowing, lending, and repayment. It verifies credit limits via signed messages and manages liquidity.
2. **USDC Contract**: An ERC20 token used for lending and borrowing, supporting minting, burning, and permit functionality.
3. **Verifier**: Validates signed credit limits using Ethereum signature recovery.
The contracts are deployed on **Optimism** and **zkSync** for fast and cost-efficient transactions. All functionality is rigorously tested to ensure reliability and security.

### Other important files
1. bcra.integration.ts
2. api/kyc/route.ts

---

## Future Work

- **Enhanced Risk Models**: Include data from multiple TradFi and on-chain sources.
- **Cross-Chain Lending**: Expand to support cross-chain loans.
- **Yield Optimization**: Advanced calculations for lender returns.
- **Integration with DeFi Protocols**: Broader utility for lending pools.

---

## Contributing

We welcome contributions! Please open an issue or submit a pull request to suggest improvements or add features.

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Contact

For questions or support, please contact the team:

- **Martin** ([Twitter](https://twitter.com/mgrabina))
- **0xTh0rOdinson** ([Twitter](https://twitter.com/0xTh0rOdinson))
- **Nicolas** ([Twitter](https://twitter.com/nicolaslebovits))
