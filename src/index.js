const fs = require("fs");

export const Country = ({ flag }) => {
  return (
    "https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/" +
    flag.toLowerCase() +
    ".svg"
  );
};

export const Token = ({ blockchain, address }) => {
  address.toLowerCase();
  let format = {
    ethereum: {
      img:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/" +
        address +
        "/logo.png",
    },

    arbitrum: {
      img:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/" +
        address +
        "/logo.png",
    },

    tron: {
      img:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/tron/assets/" +
        address +
        "/logo.png",
    },
  };
  return format[blockchain].img;
};

export const Currency = ({ type, name }) => {
  name.toLowerCase();

  let format = {
    black: {
      img:
        "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/" +
        type +
        "/" +
        name +
        ".svg",
    },

    color: {
      img:
        "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/" +
        type +
        "/" +
        name +
        ".svg",
    },

    icon: {
      img:
        "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/" +
        type +
        "/" +
        name +
        ".svg",
    },

    white: {
      img:
        "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/" +
        type +
        "/" +
        name +
        ".svg",
    },
  };

  return format[type].img;
};
