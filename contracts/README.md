# FreelanceSafe Contracts and Validators

Welcome to the **FreelanceSafe** repository! This project is part of **Web3Lancer**, an open-source decentralized freelancing and voting platform built on **Cardano** using **Aiken**. FreelanceSafe provides smart contracts and validators to enable secure escrow services for freelancers and clients.

## Overview

FreelanceSafe ensures trustless interactions between freelancers and clients by leveraging Cardano's blockchain. The system includes:

- **Escrow Contracts**: Securely hold funds until project milestones are met.
- **Dispute Resolution Validators**: Facilitate decentralized voting for resolving disputes.
- **Payment Release Validators**: Ensure funds are released only upon agreed conditions.

## Features

- **Decentralized Escrow**: Funds are locked in a smart contract until both parties agree on the release.
- **Dispute Voting**: Community-driven resolution for disputes between freelancers and clients.
- **Milestone Payments**: Support for incremental payments based on project progress.

## Contracts and Validators

1. **Escrow Contract**  
    - Locks funds from the client.  
    - Requires freelancer and client signatures for fund release.  

2. **Dispute Validator**  
    - Enables voting by the Web3Lancer community to resolve disputes.  
    - Implements fair and transparent decision-making.  

3. **Payment Validator**  
    - Ensures milestone-based payments are released only when conditions are met.  

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/web3lancer/freelancesafe.git
    cd freelancesafe/contracts
    ```

2. Install dependencies:
    ```bash
    aiken install
    ```

3. Compile the contracts:
    ```bash
    aiken build
    ```

4. Run tests:
    ```bash
    aiken test
    ```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or support, reach out to the Web3Lancer community or open an issue in this repository.
