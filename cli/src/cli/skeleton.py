import argparse
import logging
import sys
import requests

__author__ = "nathfavour"
__copyright__ = "nathfavour"
__license__ = "MIT"

_logger = logging.getLogger(__name__)

# Core SDK Functions
def deploy_contract(contract_type, contract_path, network, deployer_private_key):
    response = requests.post('http://localhost:3000/api/proxy/contract/deploy', json={
        'contract_type': contract_type,
        'contract_path': contract_path,
        'network': network,
        'deployer_private_key': deployer_private_key
    })
    return response.json()

def create_escrow(freelancer_id, client_id, description, amount, currency):
    response = requests.post('http://localhost:3000/api/proxy/escrow/create', json={
        'freelancer_id': freelancer_id,
        'client_id': client_id,
        'description': description,
        'amount': amount,
        'currency': currency
    })
    return response.json()

def get_escrow(escrow_id):
    response = requests.get(f'http://localhost:3000/api/proxy/escrow/get?escrow_id={escrow_id}')
    return response.json()

def update_escrow_status(escrow_id, status):
    response = requests.post('http://localhost:3000/api/proxy/escrow/update-status', json={
        'escrow_id': escrow_id,
        'status': status
    })
    return response.json()

def list_user_escrows(user_id):
    response = requests.get(f'http://localhost:3000/api/proxy/escrow/list-user?user_id={user_id}')
    return response.json()

# CLI Functions
def parse_args(args):
    parser = argparse.ArgumentParser(description="FreelanceSafe CLI")
    parser.add_argument("--version", action="version", version="FreelanceSafe CLI 1.0")
    subparsers = parser.add_subparsers(dest="command")

    # Deploy Contract Command
    deploy_parser = subparsers.add_parser("deploy-contract", help="Deploy a smart contract")
    deploy_parser.add_argument("contract_type", type=str, help="Type of the contract")
    deploy_parser.add_argument("contract_path", type=str, help="Path to the contract file")
    deploy_parser.add_argument("network", type=str, help="Blockchain network")
    deploy_parser.add_argument("deployer_private_key", type=str, help="Deployer's private key")

    # Escrow Commands
    escrow_parser = subparsers.add_parser("escrow", help="Escrow operations")
    escrow_subparsers = escrow_parser.add_subparsers(dest="subcommand")

    create_parser = escrow_subparsers.add_parser("create", help="Create a new escrow")
    create_parser.add_argument("freelancer_id", type=str, help="Freelancer ID")
    create_parser.add_argument("client_id", type=str, help="Client ID")
    create_parser.add_argument("description", type=str, help="Description of the escrow")
    create_parser.add_argument("amount", type=float, help="Amount in escrow")
    create_parser.add_argument("currency", type=str, help="Currency of the amount")

    get_parser = escrow_subparsers.add_parser("get", help="Get escrow details")
    get_parser.add_argument("escrow_id", type=str, help="Escrow ID")

    update_status_parser = escrow_subparsers.add_parser("update-status", help="Update escrow status")
    update_status_parser.add_argument("escrow_id", type=str, help="Escrow ID")
    update_status_parser.add_argument("status", type=str, help="New status of the escrow")

    list_user_parser = escrow_subparsers.add_parser("list-user", help="List user escrows")
    list_user_parser.add_argument("user_id", type=str, help="User ID")

    return parser.parse_args(args)

def setup_logging(loglevel):
    logformat = "[%(asctime)s] %(levelname)s:%(name)s:%(message)s"
    logging.basicConfig(level=loglevel, stream=sys.stdout, format=logformat, datefmt="%Y-%m-%d %H:%M:%S")

def main(args):
    args = parse_args(args)
    setup_logging(logging.INFO)
    _logger.debug("Starting FreelanceSafe CLI...")

    if args.command == "deploy-contract":
        result = deploy_contract(args.contract_type, args.contract_path, args.network, args.deployer_private_key)
        print(result)
    elif args.command == "escrow":
        if args.subcommand == "create":
            result = create_escrow(args.freelancer_id, args.client_id, args.description, args.amount, args.currency)
            print(result)
        elif args.subcommand == "get":
            result = get_escrow(args.escrow_id)
            print(result)
        elif args.subcommand == "update-status":
            result = update_escrow_status(args.escrow_id, args.status)
            print(result)
        elif args.subcommand == "list-user":
            result = list_user_escrows(args.user_id)
            print(result)

def run():
    main(sys.argv[1:])

if __name__ == "__main__":
    run()
