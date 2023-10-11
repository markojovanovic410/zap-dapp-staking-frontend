import Web3 from "web3";
import BigNumber from "bignumber.js";

// const DEFAULT_CONTRACT_PROVIDER = new Web3.providers.WebsocketProvider(getWSRpcUrl());
const DEFAULT_CONTRACT_PROVIDER = new Web3.providers.HttpProvider(
  getHttpsRpcUrl()
);
// export const web3 = new Web3(DEFAULT_CONTRACT_PROVIDER);

// @ts-ignore: Unreachable code error
export const web3 = new Web3(window.ethereum || DEFAULT_CONTRACT_PROVIDER);

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const MAX_UINT_256 = new BigNumber(2).pow(256).minus(1);
export const ZERO_BIG_NUMBER = new BigNumber(0);

export function getWSRpcUrl(
  chainId: number = Number(process.env.REACT_APP_WEB3_CHAIN_ID)
): string {
  const WEB3_RPC_ID = String(process.env.REACT_APP_WEB3_RPC_ID);
  switch (chainId) {
    case 1:
      return `wss://mainnet.infura.io/ws/v3/${WEB3_RPC_ID}`;
    case 3:
      return `wss://ropsten.infura.io/ws/v3/${WEB3_RPC_ID}`;
    case 4:
      return `wss://rinkeby.infura.io/ws/v3/${WEB3_RPC_ID}`;
    case 5:
      return `wss://goerli.infura.io/ws/v3/${WEB3_RPC_ID}`;
    case 42:
      return `wss://kovan.infura.io/ws/v3/${WEB3_RPC_ID}`;
    case 56:
      return `wss://bsc-dataseed.binance.org/`;
    case 137:
      return `wss://rpc-mainnet.matic.quiknode.pro`;
    default:
      throw new Error(`Not supported chainId=${chainId}.`);
  }
}

export function getHttpsRpcUrl(
  chainId: number = Number(process.env.REACT_APP_WEB3_CHAIN_ID)
): string {
  const WEB3_RPC_ID = String(process.env.REACT_APP_WEB3_RPC_ID);

  switch (chainId) {
    case 1:
      return `https://mainnet.infura.io/v3/${WEB3_RPC_ID}`;
    case 3:
      return `https://ropsten.infura.io/v3/${WEB3_RPC_ID}`;
    case 4:
      return `https://rinkeby.infura.io/v3/${WEB3_RPC_ID}`;
    case 5:
      return `https://goerli.infura.io/v3/${WEB3_RPC_ID}`;
    case 42:
      return `https://kovan.infura.io/v3/${WEB3_RPC_ID}`;
    case 56:
      return `https://bsc-dataseed.binance.org/`;
    case 137:
      return `https://rpc-mainnet.matic.quiknode.pro`;
    default:
      throw new Error(`Not supported chainId=${chainId}.`);
  }
}

export function getEtherscanTxUrl(
  txHash: string,
  chainId: number = Number(process.env.REACT_APP_WEB3_CHAIN_ID)
): string {
  switch (chainId) {
    case 1:
      return `https://etherscan.io/tx/${txHash}`;
    case 3:
      return `https://ropsten.etherscan.io/tx/${txHash}`;
    case 4:
      return `https://rinkeby.etherscan.io/tx/${txHash}`;
    case 5:
      return `https://goerli.etherscan.io/tx/${txHash}`;
    case 42:
      return `https://kovan.etherscan.io/tx/${txHash}`;
    case 56:
      return `https://bscscan.com/tx/${txHash}`;
    case 137:
      return `https://polygonscan.com/tx/${txHash}`;
    default:
      throw new Error(`Not supported chainId=${chainId}.`);
  }
}

export function getEtherscanAddressUrl(
  address: string,
  chainId: number = Number(process.env.REACT_APP_WEB3_CHAIN_ID)
): string {
  switch (chainId) {
    case 1:
      return `https://etherscan.io/address/${address}`;
    case 3:
      return `https://ropsten.etherscan.io/address/${address}`;
    case 4:
      return `https://rinkeby.etherscan.io/address/${address}`;
    case 5:
      return `https://goerli.etherscan.io/address/${address}`;
    case 42:
      return `https://kovan.etherscan.io/address/${address}`;
    case 56:
      return `https://bscscan.com/address/${address}`;
    case 137:
      return `https://polygonscan.com/address/${address}`;
    default:
      throw new Error(`Not supported chainId=${chainId}.`);
  }
}

export function getNetworkName(chainId: number | undefined): string {
  switch (chainId) {
    case 1:
      return "Ethereum Mainnet";
    case 3:
      return "Ropsten";
    case 4:
      return "Rinkeby";
    case 5:
      return "Goerli";
    case 42:
      return "kovan";
    case 56:
      return "BSC Mainnet";
    case 137:
      return "Polygon";
    default:
      return "-";
  }
}

export function getExponentValue(decimals: number = 0): BigNumber {
  return new BigNumber(10).pow(decimals);
}

export function getHumanValue(
  value?: BigNumber,
  decimals: number = 0
): BigNumber | undefined {
  return value?.div(getExponentValue(decimals));
}

const trauncateFractionAndFormat = (parts, digits) => {
  return parts
    .map(({ type, value }) => {
      if (type !== "fraction" || !value || value.length < digits) {
        return value;
      }

      let retVal = "";
      for (
        let idx = 0, counter = 0;
        idx < value.length && counter < digits;
        idx++
      ) {
        if (value[idx] !== "0") {
          counter++;
        }
        retVal += value[idx];
      }
      return retVal;
    })
    .reduce((string, part) => string + part);
};
const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 6,
});

export function formatBigNumberToString(
  value?: BigNumber,
  divDecimals: number = 18,
  defaultValue: string = "0.00",
  decimals: number = 2
): string {
  return value
    ? trauncateFractionAndFormat(
        formatter.formatToParts(
          Number(new BigNumber(value).div(getExponentValue(divDecimals)))
        ),
        decimals
      )
    : defaultValue;
}

export function formatNumberToString(
  value: number,
  decimals: number = 2
): string {
  return Intl.NumberFormat().format(Number(value.toFixed(decimals)));
}

export function getNonHumanValue(
  value: BigNumber | number,
  decimals: number = 0
): BigNumber {
  return new BigNumber(value).multipliedBy(getExponentValue(decimals));
}

export function formatBigValue(
  value?: BigNumber,
  decimals: number = 4,
  defaultValue: string = "-",
  minDecimals: number | undefined = undefined
): string {
  return value
    ? new BigNumber(value.toFixed(decimals)).toFormat(minDecimals)
    : defaultValue;
}

export function formatUSDValue(
  value?: BigNumber,
  decimals: number = 2,
  minDecimals: number = decimals
): string {
  if (value === undefined) {
    return "-";
  }

  const val = BigNumber.isBigNumber(value) ? value : new BigNumber(value);
  const formattedValue = formatBigValue(val.abs(), decimals, "-", minDecimals);

  return val.isPositive() ? `$${formattedValue}` : `-$${formattedValue}`;
}

export function defaultFormatValue(value?: BigNumber): string {
  return formatBigValue(value, 2);
}

export function shortenAddr(addr: string, first: number = 6, last: number = 4) {
  return [String(addr).slice(0, first), String(addr).slice(-last)].join("...");
}

export function convertToNumber(value: BigNumber | undefined) {
  if (value) {
    return parseFloat(value.toString());
  }

  return 0;
}

export function getLocalDate(date: string) {
  if (date === "N/A" || date === null) return "N/A";

  return new Date(date).toLocaleDateString("en-US");
}

export function isValidUsername(username: string) {
  var validRegex = /^[a-zA-Z0-9_-]+$/;
  if (username.match(validRegex)) {
    return true;
  }
  return false;
}

export function isValidEmail(email: string) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    return true;
  }
  return false;
}

export function isValidPassword(password: string) {
  if (password.length >= 8) return true;
  return false;
}

export function abbreviateNumber(value: number): string {
  let newValue = value.toString();
  if (value >= 1000) {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixNum = Math.floor(Math.floor(value).toString().length / 3);
    let shortValue;
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum !== 0 ? value / 1000 ** suffixNum : value).toPrecision(
          precision
        )
      );
      const dotLessShortValue = shortValue
        .toString()
        .replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  } else {
    newValue = Number(newValue).toFixed(2);
  }
  return newValue;
}
