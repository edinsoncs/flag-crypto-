require("fs");const t=({flag:t})=>"https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/"+t.toLowerCase()+".svg",s=({blockchain:t,address:s})=>(s.toLowerCase(),{ethereum:{img:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/"+s+"/logo.png"},arbitrum:{img:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/"+s+"/logo.png"},tron:{img:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/tron/assets/"+s+"/logo.png"}}[t].img),e=({type:t,name:s})=>(s.toLowerCase(),{black:{img:"https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/"+t+"/"+s+".svg"},color:{img:"https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/"+t+"/"+s+".svg"},icon:{img:"https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/"+t+"/"+s+".svg"},white:{img:"https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/"+t+"/"+s+".svg"}}[t].img);export{t as Country,e as Currency,s as Token};
//# sourceMappingURL=index.modern.js.map
