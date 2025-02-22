"""
This is a skeleton file that can serve as a starting point for a Python
console script. To run this script uncomment the following lines in the
``[options.entry_points]`` section in ``setup.cfg``::

    console_scripts =
         fibonacci = cli.skeleton:run

Then run ``pip install .`` (or ``pip install -e .`` for editable mode)
which will install the command ``fibonacci`` inside your current environment.

Besides console scripts, the header (i.e. until ``_logger``...) of this file can
also be used as template for Python modules.

Note:
    This file can be renamed depending on your needs or safely removed if not needed.

References:
    - https://setuptools.pypa.io/en/latest/userguide/entry_point.html
    - https://pip.pypa.io/en/stable/reference/pip_install
"""

import argparse
import logging
import sys
import requests

from cli import __version__

__author__ = "nathfavour"
__copyright__ = "nathfavour"
__license__ = "MIT"

_logger = logging.getLogger(__name__)


# ---- Python API ----
# The functions defined in this section can be imported by users in their
# Python scripts/interactive interpreter, e.g. via
# `from cli.skeleton import fib`,
# when using this Python module as a library.


def fib(n):
    """Fibonacci example function

    Args:
      n (int): integer

    Returns:
      int: n-th Fibonacci number
    """
    assert n > 0
    a, b = 1, 1
    for _i in range(n - 1):
        a, b = b, a + b
    return a


def deploy_contract(contract_type, contract_path, network, deployer_private_key):
    # Cardano Smart Contract Deployment Logic
    # ...existing code...
    # Call Next.js Proxy API to Register Contract
    response = requests.post('http://localhost:3000/api/proxy/contract/deploy', json={
        'contract_type': contract_type,
        'contract_path': contract_path,
        'network': network,
        'deployer_private_key': deployer_private_key
    })
    return response.json()

def create_escrow(freelancer_id, client_id, description, amount, currency):
    # Call Next.js Proxy API - Create Escrow
    response = requests.post('http://localhost:3000/api/proxy/escrow/create', json={
        'freelancer_id': freelancer_id,
        'client_id': client_id,
        'description': description,
        'amount': amount,
        'currency': currency
    })
    return response.json()

def get_escrow(escrow_id):
    # Call Next.js Proxy API - Get Escrow
    response = requests.get(f'http://localhost:3000/api/proxy/escrow/get?escrow_id={escrow_id}')
    return response.json()

def update_escrow_status(escrow_id, status):
    # Call Next.js Proxy API - Update Escrow Status
    response = requests.post('http://localhost:3000/api/proxy/escrow/update-status', json={
        'escrow_id': escrow_id,
        'status': status
    })
    return response.json()

def list_user_escrows(user_id):
    # Call Next.js Proxy API - List User Escrows
    response = requests.get(f'http://localhost:3000/api/proxy/escrow/list-user?user_id={user_id}')
    return response.json()


# ---- CLI ----
# The functions defined in this section are wrappers around the main Python
# API allowing them to be called directly from the terminal as a CLI
# executable/script.


def parse_args(args):
    """Parse command line parameters

    Args:
      args (List[str]): command line parameters as list of strings
          (for example  ``["--help"]``).

    Returns:
      :obj:`argparse.Namespace`: command line parameters namespace
    """
    parser = argparse.ArgumentParser(description="Just a Fibonacci demonstration")
    parser.add_argument(
        "--version",
        action="version",
        version=f"cli {__version__}",
    )
    parser.add_argument(dest="n", help="n-th Fibonacci number", type=int, metavar="INT")
    parser.add_argument(
        "-v",
        "--verbose",
        dest="loglevel",
        help="set loglevel to INFO",
        action="store_const",
        const=logging.INFO,
    )
    parser.add_argument(
        "-vv",
        "--very-verbose",
        dest="loglevel",
        help="set loglevel to DEBUG",
        action="store_const",
        const=logging.DEBUG,
    )
    return parser.parse_args(args)


def setup_logging(loglevel):
    """Setup basic logging

    Args:
      loglevel (int): minimum loglevel for emitting messages
    """
    logformat = "[%(asctime)s] %(levelname)s:%(name)s:%(message)s"
    logging.basicConfig(
        level=loglevel, stream=sys.stdout, format=logformat, datefmt="%Y-%m-%d %H:%M:%S"
    )


def main(args):
    """Wrapper allowing :func:`fib` to be called with string arguments in a CLI fashion

    Instead of returning the value from :func:`fib`, it prints the result to the
    ``stdout`` in a nicely formatted message.

    Args:
      args (List[str]): command line parameters as list of strings
          (for example  ``["--verbose", "42"]``).
    """
    args = parse_args(args)
    setup_logging(args.loglevel)
    _logger.debug("Starting crazy calculations...")
    print(f"The {args.n}-th Fibonacci number is {fib(args.n)}")
    _logger.info("Script ends here")

    if args.command == 'deploy-contract':
        result = deploy_contract(args.contract_type, args.contract_path, args.network, args.deployer_private_key)
        print(result)
    elif args.command == 'escrow':
        if args.subcommand == 'create':
            result = create_escrow(args.freelancer_id, args.client_id, args.description, args.amount, args.currency)
            print(result)
        elif args.subcommand == 'get':
            result = get_escrow(args.escrow_id)
            print(result)
        elif args.subcommand == 'update-status':
            result = update_escrow_status(args.escrow_id, args.status)
            print(result)
        elif args.subcommand == 'list-user':
            result = list_user_escrows(args.user_id)
            print(result)


def run():
    """Calls :func:`main` passing the CLI arguments extracted from :obj:`sys.argv`

    This function can be used as entry point to create console scripts with setuptools.
    """
    main(sys.argv[1:])


if __name__ == "__main__":
    # ^  This is a guard statement that will prevent the following code from
    #    being executed in the case someone imports this file instead of
    #    executing it as a script.
    #    https://docs.python.org/3/library/__main__.html

    # After installing your project with pip, users can also run your Python
    # modules as scripts via the ``-m`` flag, as defined in PEP 338::
    #
    #     python -m cli.skeleton 42
    #
    run()
