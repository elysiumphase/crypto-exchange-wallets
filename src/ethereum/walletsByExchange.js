/**
 * Ethereum centralized and decentralized exchange wallets.
 *
 * from:
 * - https://etherscan.io/accounts/label/exchange
 * - https://etherscan.io/accounts/label/dex?subcatid=undefined&size=100&start=0&col=1&order=asc
 * - https://www.coincarp.com/currencies/ethereum/exchange-wallets/
 *
 * */
const walletsByExchange = {
  // 1inch
  '1inch': [
    '0x11111254369792b2ca5d084ab5eea397ca8fa48b', // 1inch.exchange
    '0xe069cb01d06ba617bcdf789bf2ff0d5e5ca20c71', // 1inch.exchange v2: Router
    '0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5', // 1inch.exchange v2: Old Router
    '0x111111125434b319222cdbf8c261674adb56f3ae', // Network v2
    '0x11111112542d85b3ef69ae05771c2dccff4faa26', // v3
    '0xdb38ae75c5f44276803345f7f02e95a0aeef5944', // v3: Router
    '0x1111111254fb6c44bac0bed2854e76f90643097d', // v4: Router
  ],

  // 8v Exchange
  '8v-exchange': [
    '0x09b1806df13062b5f653beda6998972cabcf7009', // No tag
  ],

  // AAX
  aax: [
    '0x1d1f5290ca8fa1cb1641f1795e3fd588b2dcfb79', // No tag
    '0xa4ee5581fdcbaaf52c5edb65c8fbb7d3de78b838', // No tag
    '0x8dc11398263fff36eb91602a18877112ead2ede4', // No tag
  ],

  // ABCC
  abcc: [
    '0x05f51aab068caa6ab7eeb672f88c180f67f17ec7', // ABCC
    '0xaa9133eec3ae5f9440c1a1e61e2d2cc571675527', // Exchange
  ],

  // AEX
  aex: [
    '0x4564bfe303900178578769b2d76b1a13533e5fd5', // No tag
    '0x6814b1fe0dbb34d006dc204a6b2ded962df1d684', // No tag
  ],

  // AfroDex
  afrodex: [
    '0xe8fff15bb5e14095bfdfa8bb85d83cc900c23c56', // AfroDex
    '0x6631625a68b08e0fdf605c354ff0e710a0176c84', // CrowdSend
    '0x617c69250f678215f39ab00328ea9d06d77ab778', // Genesis
  ],

  // AirSwap
  airswap: [
    '0x4572f2554421bd64bef1c22c8a81840e8d496bea', // AirSwap
    '0xc549a5c701cb6e6cbc091007a80c089c49595468', // Light
    '0x60b47716d3893b06cc43b66d7c8221e0cac63a9b', // DAO Multisig
    '0x072073f78a2d58610ee3d5e170ca7ac9cb58a345', // Delegate
    '0xba9ab9710bd461f30c247f4ca2cb7f453c22570e', // Indexer
    '0x8fd3121013a07c57f0d69646e86e7a4880b467b7', // Legacy
    '0xebbd58cd1c31c08ef7a17337c264ba502762e993', // MultiSig
    '0xa42d613d8b8b6cb9507f46a5dd3fd98276570fd7', // Types
    '0xfaf0708d1aed2566205d61f471d7e4aeb10910ea', // WBTC Merchant Deposit Address
    '0x28de5c5f56b6216441ee114e832808d5b9d4a775', // Wrapper
  ],

  // Alchemist Coin
  'alchemist-coin': [
    '0xa58f22e0766b3764376c92915ba545d583c19dbc', // MistX Router
    '0xfcadf926669e7cad0e50287ea7d563020289ed2c', // MistX Router 2
    '0xf0d415189949d913264a454f57f4279ad66cb24d', // Aludel v1
    '0x93c31fc68e613f9a89114f10b38f9fd2ea5de6bc', // Aludel v1.5
    '0x54e0395cfb4f39bef66dbcd5bd93cca4e9273d56', // Crucible NFT
    '0x89d2d92eace71977dd0b159062f8ec90ea64fc24', // Crucible NFT Template
    '0xf3e48a2b1b9808f66321fb1eb385c86d2486dd6a', // Multisig
    '0x18cc48140cfec90cef0035761d56d2d0ff3a110f', // Power Switch Factory
    '0xf016fa84d5f3a252409a63b5cb89b555a0d27ccf', // Reward Pool Factory
    '0x979e2fde487534be3f8a41cd57f11ef9e71cdc1a', // Stream V1
    '0x1c428a75181bc25509af3a5b7faee97b4b6d3562', // Token Manager
    '0xb772ce9f14fc7c7db0d4525adb9349fbd7ce456a', // Transmuter V1
  ],

  // Alcumex Exchange
  'alcumex-exchange': [
    '0x2ddd202174a72514ed522e77972b461b03155525', // Alcumex Exchange
  ],

  // Allbit
  allbit: [
    '0xdc1882f350b42ac9a23508996254b1915c78b204', // 1
    '0xff6b1cdfd2d3e37977d7938aa06b6d89d6675e27', // 2
  ],

  // AmadeusRelay
  amadeusrelay: [
    '0x0e8ba001a821f3ce0734763d008c9d7c957f5852', // No tag
  ],

  // APROBIT
  aprobit: [
    '0xaecbe94703df39b49ac440feb177c7f1f782c064', // APROBIT
  ],

  // Artis Turba Exchange
  'artis-turba-exchange': [
    '0xf0c80fb9fb22bef8269cb6feb9a51130288a671f', // 1
    '0x94597850916a49b3b152ee374e97260b99249f5b', // 2
  ],

  // ArzPaya.com
  'arzpaya.com': [
    '0x82a403c14483931b2ff6e4440c8373ccfee698b8', // ArzPaya.com
  ],

  // AscendEX
  ascendex: [
    '0x03bdf69b1322d623836afbd27679a1c0afa067e9', // 1
    '0x4b1a99467a284cc690e3237bc69105956816f762', // 2
    '0x986a2fca9eda0e06fbf7839b89bfc006ee2a23dd', // 3
  ],

  // ATAIX
  ataix: [
    '0x4df5f3610e2471095a130d7d934d551f3dde01ed', // ATAIX
  ],

  // Azbit
  azbit: [
    '0x92dbd8e0a46edd62aa42d1f7902d0e496bddc15a', // Azbit
  ],

  // Bamboo Relay
  'bamboo-relay': [
    '0xc898fbee1cc94c0ff077faa5449915a506eff384', // Bamboo Relay
    '0x5dd835a893734b8d556eccf87800b76dda5aedc5', // Old Address
  ],

  // Beaxy
  beaxy: [
    '0xadb72986ead16bdbc99208086bd431c1aa38938e', // Beaxy
  ],

  // Beldex
  beldex: [
    '0x258b7b9a1ba92f47f5f4f5e733293477620a82cb', // Beldex
  ],

  // Bgogo
  bgogo: [
    '0x7a10ec7d68a048bdae36a70e93532d31423170fa', // 1
    '0xce1bf8e51f8b39e51c6184e059786d1c0eaf360f', // 2
  ],

  // Bibox
  bibox: [
    '0xf73c3c65bde10bf26c2e1763104e609a41702efe', // Bibox
  ],

  // Bidesk
  bidesk: [
    '0x0bb5de248dbbd31ee6c402c3c4a70293024acf74', // 2
    '0xed5cdb0d02152046e6f234ad578613831b9184d4', // 3
  ],

  // BigONE
  bigone: [
    '0xa30d8157911ef23c46c0eb71889efe6a648a41f7', // 1
    '0x17bc58b788808dab201a9a90817ff3c168bf3d61', // No tag
  ],

  // BIKI.com
  'biki.com': [
    '0x6eff3372fa352b239bb24ff91b423a572347000d', // BIKI.com
    '0x6efb20f61b80f6a7ebe7a107bace58288a51fb34', // Old Address
    '0xe05e391c437fd065d2b288947a74d8df9dcfc300', // No tag
    '0xcb03bfdccb50c9f62ec1c728f264bf453e037132', // No tag
    '0xf71cbf6758aaaaf06ebcca5447019c31bb145782', // No tag
    '0x9d1ab8b4b7c072729bb61ca1ded379b51a12c047', // No tag
  ],

  // Bilaxy
  bilaxy: [
    '0xf7793d27a1b76cdf14db7c83e82c772cf7c92910', // 1
    '0xcce8d59affdd93be338fc77fa0a298c2cb65da59', // 2
  ],

  // Binance
  binance: [
    '0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be', // 1
    '0xd551234ae421e3bcba99a0da6d736074f22192ff', // 2
    '0x564286362092d8e7936f0549571a803b203aaced', // 3
    '0x0681d8db095565fe8a346fa0277bffde9c0edbbf', // 4
    '0xfe9e8709d3215310075d67e3ed32a380ccf451c8', // 5
    '0x4e9ce36e442e55ecd9025b9a6e0d88485d628a67', // 6
    '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8', // 7
    '0xf977814e90da44bfa03b6295a0616a897441acec', // 8
    '0x001866ae5b3de6caa5a51543fd9fb64f524f5478', // 9
    '0x85b931a32a0725be14285b66f1a22178c672d69b', // 10
    '0x708396f17127c42383e3b9014072679b2f60b82f', // 11
    '0xe0f0cfde7ee664943906f17f7f14342e76a5cec7', // 12
    '0x8f22f2063d253846b53609231ed80fa571bc0c8f', // 13
    '0x28c6c06298d514db089934071355e5743bf21d60', // 14
    '0x21a31ee1afc51d94c2efccaa2092ad1028285549', // 15
    '0xdfd5293d8e347dfe59e90efd55b2956a1343963d', // 16
    '0x56eddb7aa87536c09ccc2793473599fd21a8b17f', // 17
    '0x9696f59e4d72e237be84ffd425dcad154bf96976', // 18
    '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b', // 19
    '0x4976a4a02f38326660d17bf34b431dc6e2eb2327', // 20
    '0xd88b55467f58af508dbfdc597e8ebd2ad2de49b3', // 21
    '0x7dfe9a368b6cf0c0309b763bb8d16da326e8f46e', // 22
    '0x345d8e3a1f62ee6b1d483890976fd66168e390f2', // 23
    '0xc3c8e0a39769e2308869f7461364ca48155d1d9e', // 24
    '0x2e581a5ae722207aa59acd3939771e7c7052dd3d', // 25
    '0x44592b81c05b4c35efb8424eb9d62538b949ebbf', // 26
    '0x06a0048079ec6571cd1b537418869cde6191d42d', // 29
    '0x892e9e24aea3f27f4c6e9360e312cce93cc98ebe', // 30
    '0x00799bbc833d5b168f0410312d2a8fd9e0e3079c', // 31
    '0x141fef8cd8397a390afe94846c8bd6f4ab981c48', // 32
    '0x50d669f43b484166680ecc3670e4766cdb0945ce', // 33
    '0x2f7e209e0f5f645c7612d7610193fe268f118b28', // 34
    '0xee62cbab44113b3d72cdc94980953c0b1a4f4d47', // AE Token Swap
    '0xab83d182f3485cf1d6ccdd34c7cfef95b4c08da4', // Binance JEX
    '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503', // Binance-Peg Tokens
    '0x8b99f3660622e21f2910ecca7fbe51d654a1517d', // Charity
    '0xc365c3315cf926351ccaf13fa7d19c8c4058c8e1', // Pool
    '0x1a1918cb83ba146a1f4818bf34d92291ac9c0749', // Silverway: Binance Gateway
    '0x4fabb145d64652a948d72533023f6e7a623c7c53', // USD
    '0x3666019b9e801fa9c6f73fdbc952052ebe35c059', // No tag
    '0x8894e0a0c962cb723c1976a4421c95949be2d4e3', // No tag
    '0x8f12f14a09d80051de4315808df57af19d80cad4', // No tag
    '0x15ab2321d7e83d00c015048b567f4f6aadc1b022', // No tag
    '0x17bc58b788808dab201a9a90817ff3c168bf3d61', // No tag
  ],

  // Binance US
  'binance-us': [
    '0x61189da79177950a7272c88c6058b96d4bcd6be2', // 1
    '0x34ea4138580435b5a521e460035edb19df1938c1', // 2
    '0xf60c2ea62edbfe808163751dd0d8693dcb30019c', // 3
  ],

  // Bione
  bione: [
    '0x964e1477641ff543b382e58d0a9c751f3cf3858c', // No tag
    '0xc713184bc4eb0ff4a7cb8db75fa76e237343dbe3', // No tag
  ],

  // Bit-Z
  'bit-z': [
    '0x4b729cf402cfcffd057e254924b32241aedc1795', // Bit-Z
  ],

  // Bit2C
  bit2c: [
    '0x7c49e1c0e33f3efb57d64b7690fa287c8d15b90a', // Bit2C
  ],

  // BitBase
  bitbase: [
    '0x0d8824ca76e627e9cc8227faa3b3993986ce9e48', // 1
    '0x6dcd15a0dbefd0700063a4445382d3506391a41a', // 2
  ],

  // Bitbee
  bitbee: [
    '0x2b49ce21ad2004cfb3d0b51b2e8ec0406d632513', // Bitbee
  ],

  // BitBlinx
  bitblinx: [
    '0x5d375281582791a38e0348915fa9cbc6139e9c2a', // BitBlinx
  ],

  // Bitci
  bitci: [
    '0x7a91a362d4f2c9c4627688d5b7090bbb12e5715f', // Bitci
  ],

  // Bitcratic
  bitcratic: [
    '0x3c020e014069df790d4f4e63fd297ba4e1c8e51f', // Bitcratic
    '0x232ba9f3b3643ab28d28ed7ee18600708d60e5fe', // Old Contract
  ],

  // BiteBTC
  bitebtc: [
    '0x28ebe764b8f9a853509840645216d3c2c0fd774b', // BiteBTC
  ],

  // Bitexlive
  bitexlive: [
    '0x7217d64f77041ce320c356d1a2185bcb89798a0a', // 1
    '0x57a47cfe647306a406118b6cf36459a1756823d0', // 2
  ],

  // BitEye
  biteye: [
    '0x39fbd1140cd1fc298f00c3ea64b3591de94c67e7', // 1
    '0x9e2f2dd1e3641f389673f89dc316bb00b01cd83a', // 2
  ],

  // Bitfinex
  bitfinex: [
    '0xcafb10ee663f465f9d10588ac44ed20ed608c11e', // Old 1
    '0x7180eb39a6264938fdb3effd7341c4727c382153', // Old 2
    '0x1151314c646ce4e0efd76d1af4760ae66a9fe30f', // 1
    '0x742d35cc6634c0532925a3b844bc454e4438f44e', // 2
    '0x876eabf441b2ee5b5b0554fd502a8e0600950cfa', // 3
    '0xdcd0272462140d0a3ced6c4bf970c7641f08cd2c', // 4
    '0x4fdd5eb2fb260149a3903859043e962ab89d8ed4', // 5
    '0x1b29dd8ff0eb3240238bf97cafd6edea05d5ba82', // 6
    '0x30a2ebf10f34c6c4874b0bdd5740690fd2f3b70c', // 7
    '0x3f7e77b627676763997344a1ad71acb765fc8ac5', // 8
    '0x59448fe20378357f206880c58068f095ae63d5a5', // 9
    '0x36a85757645e8e8aec062a1dee289c7d615901ca', // 10
    '0xc56fefd1028b0534bfadcdb580d3519b5586246e', // 11
    '0x0b73f67a49273fc4b9a65dbd25d7d0918e734e63', // 12
    '0x482f02e8bc15b5eabc52c6497b425b3ca3c821e8', // 13
    '0x1b8766d041567eed306940c587e21c06ab968663', // 14
    '0x5a710a3cdf2af218740384c52a10852d8870626a', // 15
    '0x28140cb1ac771d4add91ee23788e50249c10263d', // 16
    '0x53b36141490c419fa27ecabfeb8be1ecadc82431', // 17
    '0x0cd76cd43992c665fdc2d8ac91b935ca3165e782', // 18
    '0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e', // MultiSig 1
    '0xc6cde7c39eb2f0f0095f41570af89efc2c1ea828', // MultiSig 2
    '0xc61b9bb3a7a0767e3179713f3a5c7a9aedce193c', // MultiSig 3
    '0x87a32492da96069115a12e27ff5e378f03a8edf7', // No tag
  ],

  // bitFlyer
  bitflyer: [
    '0x111cff45948819988857bbf1966a0399e0d1141e', // bitFlyer
  ],

  // BITFRONT
  bitfront: [
    '0xdf5021a4c1401f1125cd347e394d977630e17cf7', // No tag
  ],

  // Bitget
  bitget: [
    '0x0639556f03714a74a5feeaf5736a4a64ff70d206', // No tag
  ],

  // Bithumb
  bithumb: [
    '0x88d34944cf554e9cccf4a24292d891f620e9c94f', // 1
    '0x3052cd6bf951449a984fe4b5a38b46aef9455c8e', // 2
    '0x2140efd7ba31169c69dfff6cdc66c542f0211825', // 3
    '0xa0ff1e0f30b5dda2dc01e7e828290bc72b71e57d', // 4
    '0xc1da8f69e4881efe341600620268934ef01a3e63', // 5
    '0xb4460b75254ce0563bb68ec219208344c7ea838c', // 6
    '0x15878e87c685f866edfaf454be6dc06fa517b35b', // 7
    '0x31d03f07178bcd74f9099afebd23b0ae30184ab5', // 8
    '0xed48dc0628789c2956b1e41726d062a86ec45bff', // 9
    '0x186549a4ae594fc1f70ba4cffdac714b405be3f9', // 10
    '0xd273bd546b11bd60214a2f9d71f22a088aafe31b', // 11
    '0x558553d54183a8542f7832742e7b4ba9c33aa1e6', // 12
    '0x3fbe1f8fc5ddb27d428aa60f661eaaab0d2000ce', // Contract 1
    '0xbb5a0408fa54287b9074a2f47ab54c855e95ef82', // Old Address 1
    '0x5521a68d4f8253fc44bfb1490249369b3e299a4a', // Old Address 2
    '0x8fa8af91c675452200e49b4683a33ca2e1a34e42', // Old Address 3
    '0x3b83cd1a8e516b6eb9f1af992e9354b15a6f9672', // Old Address 4
  ],

  // BitKeep
  bitkeep: [
    '0x603d022611bfe6a101dcdab207d96c527f1d4d8e', // NFT Exchange
    '0x80c50231bbeaf678a950c4b9b7c68a6b62e69b0c', // Swap Router
  ],

  // Bitkub
  bitkub: [
    '0xdb044b8298e04d442fdbe5ce01b8cc8f77130e33', // Hot Wallet 1
    '0x3d1d8a1d418220fd53c18744d44c182c46f47468', // Hot Wallet 2
    '0x59e0cda5922efba00a57794faf09bf6252d64126', // Hot Wallet 3
    '0x1579b5f6582c7a04f5ffeec683c13008c4b0a520', // Hot Wallet 4
  ],

  // BitMart
  bitmart: [
    '0xe79eef9b9388a4ff70ed7ec5bccd5b928ebb8bd1', // 1
    '0x68b22215ff74e3606bd5e6c1de8c2d68180c85f7', // 2
  ],

  // BitMEX
  bitmex: [
    '0xeea81c4416d71cef071224611359f6f99a4c4294', // 1
    '0xfb8131c260749c7835a08ccbdb64728de432858e', // 2
  ],

  // Bitox.io
  'bitox.io': [
    '0xb5adb233f28c86cef693451b67e1f2d41da97d21', // Bitox.io
  ],

  // Bitrue
  bitrue: [
    '0x6cc8dcbca746a6e4fdefb98e1d0df903b107fd21', // Bitrue
  ],

  // Bitstamp
  bitstamp: [
    '0x00bdb5699745f5b860228c8f939abf1b9ae374ed', // 1
    '0x1522900b6dafac587d499a862861c0869be6e428', // 2
    '0x9a9bed3eb03e386d66f8a29dc67dc29bbb1ccb72', // 3
    '0x059799f2261d37b829c2850cee67b5b975432271', // 4
    '0x4c766def136f59f6494f0969b1355882080cf8e0', // 5
    '0xc5b611f502a0dcf6c3188fd494061ae29b2baa4f', // 6
    '0x964771f6df31eea2d927fa71d7bd78e81bcdce05', // Contract 1
    '0xfca70e67b3f93f679992cd36323eeb5a5370c8e4', // Old Address 1
  ],

  // BITStorage
  bitstorage: [
    '0x1b8a38ea02ceda9440e00c1aeba26ee2dc570423', // BITStorage
  ],

  // Bittrex
  bittrex: [
    '0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98', // 1
    '0xe94b04a0fed112f3664e45adb2b8915693dd5ff3', // 2
    '0x66f820a414680b5bcda5eeca5dea238543f42054', // 3
    '0xa3c1e324ca1ce40db73ed6026c4a177f099b5770', // Controller
  ],

  // BitUN.io
  'bitun.io': [
    '0xaa90b4aae74cee41e004bc45e45a427406c4dcae', // 1
    '0xf8d04a720520d0bcbc722b1d21ca194aa22699f2', // 2
  ],

  // Bity.com
  'bity.com': [
    '0xfb9f7f41319157ac5c5dccae308a63a4337ad5d9', // Bity.com
  ],

  // BitZ
  bitz: [
    '0x4b729cf402cfcffd057e254924b32241aedc1795', // 1
    '0xee8d8ababb63bcd41e70a30b187cbaaa4e5d7ec6', // No tag
    '0xa24f25a8545ee2ab81b2a5cc8f047d3567fcde0f', // No tag
    '0x3d5851c33b581a49998850a78d1865a1936dacb3', // No tag
  ],

  // Bitzlato
  bitzlato: [
    '0x00cdc153aa8894d08207719fe921fff964f28ba3', // Bitzlato
  ],

  // BJEX.com
  'bjex.com': [
    '0xda580f88a8c8978806e71625a2ce76d2473c6b77', // No tag
    '0xf0417e52ff62a4a831345ad8097878814c78c80c', // No tag
    '0x00a0e1cfc063fa2f30b43600faa43ad6770ca664', // No tag
    '0xb1628928135a6415ee17daf51327d04febe6116e', // No tag
  ],

  // BKEX
  bkex: [
    '0xd9811e8b7c42418c71dabfe63b9cc17f8db1a6eb', // No tag
  ],

  // Blockfolio
  blockfolio: [
    '0x25eaff5b179f209cf186b1cdcbfa463a69df4c45', // Blockfolio
  ],

  // BlockTrades Exchange
  'blocktrades-exchange': [
    '0x007174732705604bbbf77038332dc52fd5a5000c', // BlockTrades Exchange
  ],

  // Bololex.com
  'bololex.com': [
    '0xdf8752caa319668006580ddf48db25a23728b926', // Bololex.com
  ],

  // BTC-Alpha Exchange
  'btc-alpha-exchange': [
    '0x1c00d840ccaa67c494109f46e55cfeb2d8562f5c', // BTC-Alpha Exchange
    '0x287bf541959fb2079c1e095abe52e40bac040407', // Collection 2
    '0xb320bb040a47b2801227f1eca534a670764ccacb', // Collection 3
  ],

  // BTswap
  btswap: [
    '0xa4dc97a565e2364cdeb4efe38c0f153bccb62b01', // Router
  ],

  // Bw.com
  'bw.com': [
    '0x73957709695e73fd175582105c44743cf0fb6f2f', // Bw.com
    '0xbcdfc35b86bedf72f0cda046a3c16829a2ef41d1', // Old Address
  ],

  // Bybit
  // ?
  bybit: [],

  // C2CX
  c2cx: [
    '0xd7c866d0d536937bf9123e02f7c052446588189f', // Hot Wallet
  ],

  // CamboChanger
  cambochanger: [
    '0x88988d6ef12d7084e34814b9edafa01ae0d05082', // 2
  ],

  // Cashierest
  cashierest: [
    '0x72bcfa6932feacd91cb2ea44b0731ed8ae04d0d3', // Cashierest
  ],

  // Catex Exchange
  'catex-exchange': [
    '0x7a56f645dcb513d0326cbaa048e9106ff6d4cd5f', // Catex Exchange
  ],

  // ChainX
  chainx: [
    '0xfd648cc72f1b4e71cbdda7a0a91fe34d32abd656', // ChainX
  ],

  // Changelly
  changelly: [
    '0x96fc4553a00c117c5b0bed950dd625d1c16dc894', // Changelly
  ],

  // CEO Global
  'ceo-global': [
    '0xd6cb6744b7f2da784c5afd6b023d957188522198', // No tag
  ],

  // CITEX
  citex: [
    '0x7b897ab1e759028f14e1841ffc5449f11273e330', // No tag
    '0xe51a4316607772132f89b3483da698e4d682e191', // No tag
    '0x9e2e3649563e60926a7b5968bc3537fb58faf78b', // No tag
    '0x4d7291630651041358abe50532c1a20948559155', // No tag
    '0x691c5e2751ec615d2b49cb569fdf787720b0fd31', // No tag
  ],

  // Cobinhood
  cobinhood: [
    '0x8958618332df62af93053cb9c535e26462c959b0', // 1
    '0xb726da4fbdc3e4dbda97bb20998cf899b0e727e0', // 2
    '0x0bb9fc3ba7bcf6e5d6f6fc15123ff8d5f96cee00', // MultiSig
  ],

  // Coinbase
  coinbase: [
    '0x71660c4005ba85c37ccec55d0c4493e66fe775d3', // 1
    '0x503828976d22510aad0201ac7ec88293211d23da', // 2
    '0xddfabcdc4d8ffc6d5beaf154f18b778f892a0740', // 3
    '0x3cd751e6b0078be393132286c442345e5dc49699', // 4
    '0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511', // 5
    '0xeb2629a2734e272bcc07bda959863f316f4bd4cf', // 6
    '0xd688aea8f7d450909ade10c47faa95707b0682d9', // 7
    '0xf6874c88757721a02f47592140905c4336dfbc61', // Coinbase Commerce
    '0x881d4032abe4188e2237efcd27ab435e81fc6bb1', // Commerce
    '0xa090e606e30bd747d4e6245a1517ebe430f0057e', // Miscellaneous
  ],

  // Coinbene
  coinbene: [
    '0x9539e0b14021a43cde41d9d45dc34969be9c7cb0', // Coinbene
    '0x33683b94334eebc9bd3ea85ddbda4a86fb461405', // Cold Wallet
    '0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1', // No tag
    '0x3788539703c1e469fe0eb408095e97b0c247042a', // No tag
    '0x937f51a82f542f6b75baaf8c4f605aedef3cdbf0', // No tag
    '0x6a3eb79e1c4023f1610ff046c5dc30f9790d326f', // No tag
  ],

  // Coindelta
  coindelta: [
    '0xb6ba1931e4e74fd080587688f6db10e830f810d5', // Coindelta
  ],

  // CoinEgg
  coinegg: [
    '0x93f36930f94fbb5afc5fb506d3f7abb9179a4e4e', // No tag
  ],

  // CoinDhan
  coindhan: [
    '0xbf1a97d8d4229d61b031214d5bbe9a5cb1e737f9', // CoinDhan
  ],

  // Coinex
  coinex: [
    '0xb9ee1e551f538a464e8f8c41e9904498505b49b0', // Coinex
    '0x33ddd548fe3a082d753e5fe721a26e1ab43e3598', // 2
  ],

  // CoinExchange.io
  'coinexchange.io': [
    '0x4b01721f0244e7c5b5f63c20942850e447f5a5ee', // CoinExchange.io
    '0x226ce8219207e773c0768a699bf7982dbea754ad', // No tag
  ],

  // Coinhako
  coinhako: [
    '0xd4bddf5e3d0435d7a6214a0b949c7bb58621f37c', // Coinhako
    '0xa193c943980a9340f306b3d59deb183dc501b35f', // Old Address
    '0x1d1bd550197c7c0787b9ad0aea9c1cca66ee0e90', // Old Address 2
    '0xf2d4766ad705e3a5c9ba5b0436b473085f82f82f', // Warm Wallet
  ],

  // Coinka
  coinka: [
    '0x7f08821e4261cdb3fe0ea8208fa43cdc8d42bd67', // No tag
    '0x8eb36ed91c6c2424cc8b995b4e5ccac49654e8da', // No tag
    '0x2350e38d99b702d0b80a5512f7ad18a6cae8dd67', // No tag
    '0xdd5d3af3794121123314efd88a704b0e248ffbba', // No tag
  ],

  // CoinList
  coinlist: [
    '0xd1669ac6044269b59fa12c5822439f609ca54f41', // 1
    '0x8d1f2ebfaccf1136db76fdd1b86f1dede2d23852', // 2
    '0xd2c82f2e5fa236e114a81173e375a73664610998', // 3
    '0x0967aea99754974a4cc4dbf29009155a49588171', // WBTC Merchant Deposit Address
  ],

  // CoinMetro Exchange
  'coinmetro-exchange': [
    '0xa270f3ad1a7a82e6a3157f12a900f1e25bc4fbfd', // CoinMetro Exchange
    '0x7c1c73bf60feb40cbcf0f12324200238ee23bb54', // MultiSig Cold Wallet
    '0xbac7c449689a2d3c51c386d8e657338c41ab3030', // Treasury
    '0xf3e35734b7413f87c2054a16ce04230d803e4dc3', // Vault Aug 2020
    '0xfad672dc92c2d2db0aa093331bd1098e30249ab8', // Vault Feb 2020
    '0x165fe6a10812faa49515522d685a27c6bf12dba9', // Vault Feb 2021
    '0xdd06b66c76d9c6fdc41935a7b32566c646325005', // XCM Utility Vault
  ],

  // Coinone
  coinone: [
    '0x167a9333bf582556f35bd4d16a7e80e191aa6476', // Coinone
    '0x1e2fcfd26d36183f1a5d90f0e6296915b02bcb40', // 2
    '0x35da6abcb08f2b6164fe380bb6c47bd8f2304d55', // Old Address 1
  ],

  // Coinswitch
  coinswitch: [
    '0xd0808da05cc71a9f308d330bc9c5c81bbc26fc59', // Coinswitch
  ],

  // CoinW
  coinw: [
    '0x8705ccfd8a6df3785217c307cbebf9b793310b94', // 1
    '0xcb243bf48fb443082fae7db47ec96cb120cd6801', // 2
    '0x429bf8ec3330e02401d72beade86000d9a2e19eb', // 3
    '0x6f31d347457962c9811ff953742870ef5a755de3', // 4
    '0xa20f10289248717374e9b7776dc368aa526cb6f2', // No tag
    '0xed4e1ad0f899ef3954d05bafc502f50c8e6a6baf', // No tag
    '0x94961bb15bafe2d73b899b9a3fc209b3fcf899d6', // No tag
    '0x9f8646a35db0f466ac9322e2d194cc18f209fc75', // No tag
    '0xd115b7b6bea4819bfd1fe5397f5e7e01fa19d83d', // No tag
  ],

  // COSS.io
  'coss.io': [
    '0x0d6b5a54f940bf3d52e438cab785981aaefdf40c', // 1
    '0xd1560b3984b7481cd9a8f40435a53c860187174d', // Old Warm Wallet
    '0x43f07efe28e092a0fe4ec5b5662022b461ffac80', // Warm Wallet
  ],

  // CREX24
  crex24: [
    '0x521db06bf657ed1d6c98553a70319a8ddbac75a3', // CREX24
  ],

  // Crypto.com
  'crypto.com': [
    '0x6262998ced04146fa42253a5c0af90ca02dfd2a3', // Crypto.com
    '0x46340b20830761efd32832a74d7169b29feb9758', // 2
    '0xdc4c0fda463435d19962e8dd465d5eba86fd02ec', // MCO Wallet
    '0x51ca21ed46a9df3cb6f34624cbd482d312996730', // MultiSig
    '0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07', // MultiSig 2
    '0x22e4f709fd5e7fe246fbf7e714ae89bdab7e2a5d', // MultiSig 3
    '0xdda508f9f3c1b4ca39c8794df3a080298ebe9c55', // MultiSig 4
    '0x35f517cab9a37bc31091c2f155d965af84e0bc85', // MultiSig 5
    '0x67703f7d089f3ac7c8c13a18b2381cbd7ee3eded', // MultiSig 6
    '0x20a0bee429d6907e556205ef9d48ab6fe6a55531', // MultiSig 7
  ],

  // Cryptopia
  cryptopia: [
    '0x5baeac0a0417a05733884852aa068b706967e790', // 1
    '0x2984581ece53a4390d1f568673cf693139c97049', // 2
  ],

  // Curve.fi
  'curve.fi': [
    '0xc5424b857f758e906013f3555dad202e4bdb4567', // ETH/sETH Pool
    '0xa2b47e3d5c44877cca798226b7b8118f9bfb7a56', // Compound Swap
    '0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7', // DAI/USDC/USDT Pool
    '0xbbc81d23ea2c3ec7e56d39296f0cbb648873a5d3', // y Deposit
    '0x52ea46506b9cc5ef470c5bf89f17dc28bb35d85c', // USDT Swap
    '0x45f783cce6b7ff23b2ab2d70e416cdb7d6055f51', // y Swap
  ],

  // Dcoin
  dcoin: [
    '0x4003caeff9d6eb5af6927b0842c90f43f31d25d1', // Dcoin
  ],

  // DDEX
  ddex: [
    '0x49497a4d914ae91d34ce80030fe620687bf333fd', // 1.0
    '0xe269e891a2ec8585a378882ffa531141205e92e9', // Old Address
    '0x241e82c79452f51fbfc89fac6d912e021db1a3b7', // Margin
  ],

  // DeversiFi
  deversifi: [
    '0xaf8ae6955d07776ab690e565ba6fbc79b8de3a5d', // DeversiFi
    '0x5d22045daceab03b158031ecb7d9d06fad24609b', // Bridge
    '0xd924bdd6fa7fd3d0eb1337853a814a4263dcbfe8', // OTC
    '0x61b9898c9b60a159fc91ae8026563cd226b7a0c1', // Old Address
    '0xdcdb42c9a256690bd153a7b409751adfc8dd5851', // Old Contract
    '0xbaea5bc6568dcb1f1c5aa24223a47333a6b3a8f5', // Old Contract 2
    '0x93dc6a333a99c0ede1cd346ccf079ea8451013db', // Old Contract 3
  ],

  // DEX.AG
  'dex.ag': [
    '0xd3bed3a8e3e6b24b740ead108ba776e0ad298588', // Old Contract 1
    '0x932348df588923ba3f1fd50593b22c4e2a287919', // Old Contract 2
    '0xa540fb50288cc31639305b1675c70763c334953b', // Old Contract 3
    '0x745daa146934b27e3f0b6bff1a6e36b9b90fb131', // Proxy Contract
  ],

  // dex.blue
  'dex.blue': [
    '0x000000000000541e251335090ac5b47176af4f7e', // dex.blue
  ],

  // DEx.top
  'dex.top': [
    '0x7600977eb9effa627d6bd0da2e5be35e11566341', // DEx.top
  ],

  // DiBiGlobal
  dibiglobal: [
    '0x0332f5bef70a47f7e691407b542390b772cfdfae', // No tag
    '0xb6e1386e2a85d708c75639823d0bd7c09146e6b0', // No tag
    '0xeb8135cabb2409903a129638ead5eaa204b0456d', // No tag
    '0xce43f16b4ed18b2afcb289f68061797fdfd762c1', // No tag
    '0x397055aacad511225dac6dfca104fc6a7906d181', // No tag
    '0x4f84a6ad5ef69f558f9db4c797827082213461aa', // No tag
    '0x7d93963853b8f717f184814dccdf7e785211b29c', // No tag
    '0xff2809843e3720b28b3b19d6a44599f78c852664', // No tag
    '0x0622dc0bec03d4f9ac2509bae96ac0c8e276bf64', // No tag
    '0x2f68b0d8e2392f2411fe2967f4e101418922d12a', // No tag
    '0x8d6d4de6815b4fe8a55be059178552ac031e19b4', // No tag
  ],

  // DigiFinex
  digifinex: [
    '0xe17ee7b3c676701c66b395a35f0df4c2276a344e', // DigiFinex
    '0xb37640f5f7ef7b0fdcce2c0c053db4f976945647', // No tag
    '0x6693c388255f519497f0ca2854c31b72e605569b', // No tag
  ],

  // DINNGO
  dinngo: [
    '0x268be5667d4e5bd036bd608d0601ef1441604429', // Proxy
  ],

  // DMEX
  dmex: [
    '0x2101e480e22c953b37b9d0fe6551c1354fe705e6', // DMEX
  ],

  // DragonEx
  dragonex: [
    '0x5852c8973ac167267d3cd60361a0196ecb3913aa', // No tag
    '0x1b3970521955890c7caa0ac93470eaecceede93f', // No tag
    '0x0b078896a3d9166da5c37ae52a5809aca48630d4', // No tag
  ],

  // DXdao
  dxdao: [
    '0x6f400810b62df8e13fded51be75ff5393eaa841f', // Mesa
    '0x89023deb1d9a9a62ff3a5ca8f23be8d87a576220', // Omen
    '0xb9960d9bca016e9748be75dd52f02188b9d0829f', // Swapr Router
  ],

  // Eidoo
  eidoo: [
    '0xf1c525a488a848b58b95d79da48c21ce434290f7', // Eidoo
  ],

  // Eigen Fx
  'eigen-fx': [
    '0x608f94df1c1d89ea13e5984d7bf107df137a6541', // Eigen Fx
    '0xeb9ebf2c624ebee42e0853da6443ddc6c8020de7', // 2
    '0xfeaeb23983fadfd85ae7259538fac6b43afada5e', // Old Address
  ],

  // ERC dEX
  'erc-dex': [
    '0x58a5959a6c528c5d5e03f7b9e5102350e24005f1', // ERC dEX
  ],

  // Eterbase
  eterbase: [
    '0x8d76166c22658a144c0211d87abf152e6a2d9d95', // Eterbase
  ],

  // EtherDelta
  etherdelta: [
    '0x4aea7cf559f67cedcad07e12ae6bc00f07e8cf65', // 1
    '0x8d12a197cb00d4747a1fe03395095ce2a5cc6819', // 2
  ],

  // EtherMium
  ethermium: [
    '0xa5cc679a3528956e8032df4f03756c077c1ee3f4', // EtherMium
  ],

  // Exchange A
  'exchange-a': [
    '0xd3808c5d48903be1490989f3fce2a2b3890e8eb6', // Exchange A
  ],

  // Exmo
  exmo: [
    '0x1fd6267f0d86f62d88172b998390afee2a1f54b6', // 1
    '0xd7b9a9b2f665849c4071ad5af77d8c76aa30fb32', // 2
  ],

  // Faa.st
  'faa.st': [
    '0x94fe3ad91dacba8ec4b82f56ff7c122181f1535d', // Faa.st
  ],

  // FCoin
  fcoin: [
    '0x915d7915f2b469bb654a7d903a5d4417cb8ea7df', // FCoin
  ],

  // FixedFloat
  fixedfloat: [
    '0x4e5b2e1dc63f6b91cb6cd759936495434c7e972f', // FixedFloat
  ],

  // Flata.Exchange
  'flata.exchange': [
    '0x14301566b9669b672878d86ff0b1d18dd58054e9', // Flata.Exchange
  ],

  // Flybit
  flybit: [
    '0x91e18ee76483fa2ec5cfe2959df46673c2565be0', // Flybit
  ],

  // Folgory Exchange
  'folgory-exchange': [
    '0x0021845f4c2604c58f9ba5b7bff58d16a2ab372c', // Folgory Exchange
  ],

  // FTX Exchange
  'ftx-exchange': [
    '0x2faf487a4414fe77e2327f0bf4ae2a264a776ad2', // FTX Exchange
    '0xc098b2a3aa256d2140208c3de6543aaef5cd3a94', // 2
  ],

  // Gate.io
  'gate.io': [
    '0x0d0707963952f2fba59dd06f2b425ace40b492fe', // Gate.io
    '0x7793cd85c11a924478d358d49b05b37e91b5810f', // 2
    '0x1c4b70a3968436b9a0a9cf5205c787eb81bb558c', // 3
    '0xd793281182a0e3e023116004778f45c29fc14f19', // Contract
  ],

  // GBX
  gbx: [
    '0x9f5ca0012b9b72e8f3db57092a6f26bf4f13dc69', // GBX
  ],

  // Gemini
  gemini: [
    '0xd24400ae8bfebb18ca49be86258a3c749cf46853', // Gemini
    '0x6fc82a5fe25a5cdb58bc74600a40a69c065263f8', // 2
    '0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea', // 3
    '0x5f65f7b609678448494de4c87521cdf6cef1e932', // 4
    '0xb302bfe9c246c6e150af70b1caaa5e3df60dac05', // 5
    '0x8d6f396d210d385033b348bcae9e4f9ea4e045bd', // 6
    '0xd69b0089d9ca950640f5dc9931a41a5965f00303', // 7
    '0x07ee55aa48bb72dcc6e9d78256648910de513eca', // Contract 1
    '0xdec042a90de005b22754e94a8a979c4b8c67fde5', // Old Contract 1
  ],

  // GGBTC.com
  'ggbtc.com': [
    '0x9fb01a2584aac5aae3fab1ed25f86c5269b32999', // GGBTC.com
  ],

  // HitBTC
  hitbtc: [
    '0x9c67e141c0472115aa1b98bd0088418be68fd249', // 1
    '0x59a5208b32e627891c389ebafc644145224006e8', // 2
    '0xa12431d0b9db640034b0cdfceef9cce161e62be4', // 3
    '0xef58321032cf693fa7e39f31e45cbc32f2092cb3', // No tag
    '0x1c11ba15939e1c16ec7ca1678df6160ea2063bc5', // No tag
    '0xed0245c53f69ebccdab3e39cf0013161a67bf296', // No tag
    '0xb77bd9fc4830a801d42bcd3ffdf2f8c079ecbe28', // No tag
  ],

  // Hoo.com
  'hoo.com': [
    '0x980a4732c8855ffc8112e6746bd62095b4c2228f', // Hoo.com
    '0xd0ec209ad2134899148bec8aef905a6e9997456a', // 2
    '0x993b7fcba51d8f75c2dfaec0d17b6649ee0c9068', // 3
    '0xec293b9c56f06c8f71392269313d7e2da681d9ac', // 4
    '0x0093e5f2a850268c0ca3093c7ea53731296487eb', // 5
    '0x008932be50098089c6a075d35f4b5182ee549f8a', // 6
  ],

  // Hopex
  hopex: [
    '0xf766c2844b92a9a6268a1402cab374492454c15f', // No tag
  ],

  // Hotbit
  hotbit: [
    '0x274f3c32c90517975e29dfc209a23f315c1e5fc7', // Hotbit
    '0x8533a0bd9310eb63e7cc8e1116c18a3d67b1976a', // 2
    '0x562680a4dc50ed2f14d75bf31f494cfe0b8d10a1', // 3
  ],

  // HPX
  hpx: [
    '0x0b3fa61bec75f052cab0ade9d0d715502545cc7e', // No tag
  ],

  // Huobi
  huobi: [
    '0xab5c66752a9e8167967685f1450532fb96d5d24f', // 1
    '0x6748f50f686bfbca6fe8ad62b22228b87f31ff2b', // 2
    '0xfdb16996831753d5331ff813c29a93c76834a0ad', // 3
    '0xeee28d484628d41a82d01e21d12e2e78d69920da', // 4
    '0x5c985e89dde482efe97ea9f1950ad149eb73829b', // 5
    '0xdc76cd25977e0a5ae17155770273ad58648900d3', // 6
    '0xadb2b42f6bd96f5c65920b9ac88619dce4166f94', // 7
    '0xa8660c8ffd6d578f657b72c0c811284aef0b735e', // 8
    '0x1062a747393198f70f71ec65a582423dba7e5ab3', // 9
    '0xe93381fb4c4f14bda253907b18fad305d799241a', // 10
    '0xfa4b5be3f2f84f56703c42eb22142744e95a2c58', // 11
    '0x46705dfff24256421a05d056c29e81bdc09723b8', // 12
    '0x32598293906b5b17c27d657db3ad2c9b3f3e4265', // 13
    '0x5861b8446a2f6e19a067874c133f04c578928727', // 14
    '0x926fc576b7facf6ae2d08ee2d4734c134a743988', // 15
    '0xeec606a66edb6f497662ea31b5eb1610da87ab5f', // 16
    '0x7ef35bb398e0416b81b019fea395219b65c52164', // 17
    '0x229b5c097f9b35009ca1321ad2034d4b3d5070f6', // 18
    '0xd8a83b72377476d0a66683cde20a8aad0b628713', // 19
    '0x90e9ddd9d8d5ae4e3763d0cf856c97594dea7325', // 20
    '0x18916e1a2933cb349145a280473a5de8eb6630cb', // 21
    '0x6f48a3e70f0251d1e83a989e62aaa2281a6d5380', // 22
    '0xf056f435ba0cc4fcd2f1b17e3766549ffc404b94', // 23
    '0x137ad9c4777e1d36e4b605e745e8f37b2b62e9c5', // 24
    '0x5401dbf7da53e1c9dbf484e3d69505815f2f5e6e', // 25
    '0x034f854b44d28e26386c1bc37ff9b20c6380b00d', // 26
    '0x0577a79cfc63bbc0df38833ff4c4a3bf2095b404', // 27
    '0x0c6c34cdd915845376fb5407e0895196c9dd4eec', // 28
    '0x794d28ac31bcb136294761a556b68d2634094153', // 29
    '0xfd54078badd5653571726c3370afb127351a6f26', // 30
    '0xb4cd0386d2db86f30c1a11c2b8c4f4185c1dade9', // 31
    '0x4d77a1144dc74f26838b69391a6d3b1e403d0990', // 32
    '0x28ffe35688ffffd0659aee2e34778b0ae4e193ad', // 33
    '0xcac725bef4f114f728cbcfd744a731c2a463c3fc', // 34
    '0x73f8fc2e74302eb2efda125a326655acf0dc2d1b', // 35
    '0x0a98fb70939162725ae66e626fe4b52cff62c2e5', // 36
    '0xf66852bc122fd40bfecc63cd48217e88bda12109', // 37
    '0x49517ca7b7a50f592886d4c74175f4c07d460a70', // 38
    '0x58c2cb4a6bee98c309215d0d2a38d7f8aa71211c', // 39
    '0xa66daa57432024023db65477ba87d4e7f5f95213', // Pool Token
    '0x6f259637dcd74c767781e37bc6133cd6a68aa161', // Token
    '0xb2a48f542dc56b89b24c04076cbe565b3dc58e7b', // Old Address 9
    '0xe3314bbf3334228b257779e28228cfb86fa4261b', // Old Address 20
    '0xc837f51a0efa33f8eca03570e3d01a4b2cf97ffd', // Old Address 29
    '0x9a755332d874c893111207b0b220ce2615cd036f', // Old Address 32
  ],

  // Idax.global
  'idax.global': [
    '0x3c11c3025ce387d76c2eddf1493ec55a8cc2a0f7', // Idax.global
  ],

  // IDEX
  idex: [
    '0x2a0c0dbecc7e4d658f48e01e3fa353f44050c208', // 1
    '0xa7a7899d944fe658c4b0a1803bab2f490bd3849e', // 2
    '0x19cd9ce7e9bd7f56f69bcfb8ed63aeb46631a970', // No tag
  ],

  // IDT Exchange
  'idt-exchange': [
    '0x2cc42d1cd65af27cc999e41ef93d1a763dc821f8', // IDT Exchange
  ],

  // Indodax
  indodax: [
    '0x51836a753e344257b361519e948ffcaf5fb8d521', // 1
    '0x9cbadd5ce7e14742f70414a6dcbd4e7bb8712719', // 2
  ],

  // IndoEx LTD
  'indoex-ltd': [
    '0xb1a34309af7f29b4195a6b589737f86e14597ddc', // IndoEx LTD
  ],

  // JinGui
  jingui: [
    '0xf65c33c383a6996ffec2d00aa93df3ce2bdb7851', // No tag
  ],

  // Joyso
  joyso: [
    '0x04f062809b244e37e7fdc21d9409469c989c2342', // Joyso
    '0xc640b901a529c58fb6f6c53665768e2d5c835421', // MultiSig
  ],

  // Jubi
  jubi: [
    '0xad840a2b569188d49245fcd7bde71167d77df6c0', // No tag
  ],

  // KickEX
  kickex: [
    '0x352bdabe484499e4c25c3536cc3eda1edbc5ad29', // KickEX
    '0xc153121042832ac11587ebe361b8dc3ccd90e9e4', // Cold Wallet 10
    '0xaf4ff15c9809e246111802f04a6acc7160992fef', // Hot Wallet 2
    '0xefca9dda089517a7129b2b867d3d9c7645663d35', // Pool for HitBTC refunds
    '0xd66b2121744560ef45eae15899ed65730e6e5a82', // Reserve Pool
    '0x6551b3ff6440eaf42c31a26f794260bba9d17c77', // Reserve Pool 4
  ],

  // Klickl (IDCM)
  klickl: [
    '0x2a1dcbdf3fc17c7263529aa7fb1f90e3d4624ed2', // No tag
    '0xc5565200eb6a428451d53280b49c4488f74ac14d', // No tag
    '0xa8b4e06fa1a93211422d0f4f12747a832dbbd286', // No tag
    '0xc86f08c4f6aec029ece7e56d1d302dfdcf2ec41d', // No tag
  ],

  // Kraken
  kraken: [
    '0x2910543af39aba0cd09dbb2d50200b3e800a63d2', // 1
    '0x0a869d79a7052c7f1b55a8ebabbea3420f0d1e13', // 2
    '0xe853c56864a2ebe4576a807d26fdc4a0ada51919', // 3
    '0x267be1c1d684f78cb4f6a176c4911b741e4ffdc0', // 4
    '0xfa52274dd61e1643d2205169732f29114bc240b3', // 5
    '0x89e51fa8ca5d66cd220baed62ed01e8951aa7c40', // 7
    '0xc6bed363b30df7f35b601a5547fe56cd31ec63da', // 8
    '0x29728d0efd284d85187362faa2d4d76c2cfc2612', // 9
    '0xae2d4617c862309a3d75a0ffb358c7a5009c673f', // 10
    '0x43984d578803891dfa9706bdeee6078d80cfc79e', // 11
    '0x66c57bf505a85a74609d2c83e94aabb26d691e1f', // 12
    '0xda9dfa130df4de4673b89022ee50ff26f6ea73cf', // 13
    '0xa83b11093c858c86321fbc4c20fe82cdbd58e09e', // 14
    '0xe9f7ecae3a53d2a67105292894676b00d1fab785', // Hot Wallet
  ],

  // Kryptono
  kryptono: [
    '0xe8a0e282e6a3e8023465accd47fae39dd5db010b', // 1
    '0x629a7144235259336ea2694167f3c8b856edd7dc', // 2
    '0x30b71d015f60e2f959743038ce0aaec9b4c1ea44', // 3
  ],

  // KuCoin
  kucoin: [
    '0x2b5634c42055806a59e9107ed44d43c426e58258', // 1
    '0x689c56aef474df92d44a1b70850f808488f9769c', // 2
    '0xa1d8d972560c2f8144af871db508f0b0b10a3fbf', // 3
    '0x4ad64983349c49defe8d7a4686202d24b25d0ce8', // 4
    '0x1692e170361cefd1eb7240ec13d048fd9af6d667', // 5
    '0xd6216fc19db775df9774a6e33526131da7d19a2c', // 6
    '0xe59cd29be3be4461d79c0881d238cbe87d64595a', // 7
    '0x899b5d52671830f567bf43a14684eb14e1f945fe', // 8
    '0xf16e9b0d03470827a95cdfd0cb8a8a3b46969b91', // 9
    '0xcad621da75a66c7a8f4ff86d30a2bf981bfc8fdd', // 10
    '0xff651ead42b8eea0b9cb88edc92704ef6af372ce', // No tag
    '0xf43d7ebaad1efefb3e4df0c9d5766a112dce7dec', // No tag
  ],

  // Kuna.io
  'kuna.io': [
    '0xea81ce54a0afa10a027f65503bd52fba83d745b8', // Kuna.io
    '0x77ab999d1e9f152156b4411e1f3e2a42dab8cd6d', // 2
  ],

  // LAToken
  latoken: [
    '0x0861fca546225fbf8806986d211c8398f7457734', // LAToken
    '0x7891b20c690605f4e370d6944c8a5dbfac5a451c', // 2
    '0x1b6c1a0e20af81b922cb454c3e52408496ee7201', // 3
  ],

  // LedgerDex
  ledgerdex: [
    '0x4524baa98f9a3b9dec57caae7633936ef96bd708', // LedgerDex
  ],

  // Liqui.io
  'liqui.io': [
    '0x8271b2e8cbe29396e9563229030c89679b9470db', // 1
    '0x5e575279bf9f4acf0a130c186861454247394c06', // 2
  ],

  // Liquid
  liquid: [
    '0xedbb72e6b3cf66a792bff7faac5ea769fe810517', // 1
    '0xdf4b6fb700c428476bd3c02e6fa83e110741145b', // 2
    '0xdb2cad4f306b47c9b35541988c7656f1bb092e15', // 3
    '0x9cc2dce817093ceea82bb67a4cf43131fa354c06', // 4
  ],

  // Liquid Swap
  'liquid-swap': [
    '0xa94e72c89a6f56e0bd8683f71c3f9f57ec5f4220', // Emergency Fund
    '0x388b14bd1c98bf2464dee988db7eaa98efa54246', // Staking Rewards
    '0xc77a935044c77012a5b7fd109362d252a005cf53', // Vesting Contrac
  ],

  // Livecoin.net
  'livecoin.net': [
    '0x243bec9256c9a3469da22103891465b47583d9f1', // Livecoin.net
  ],

  // LocalCoin Dex
  'localcoin-dex': [
    '0xc692453625023c6e03fec04158ea31ab4de2650a', // 1
    '0x37c4bcaba4bcf3a605414236b8b108f160eb45a6', // 2
    '0x8d1c1571367a148e92d6ac83494b1bdf3b497d07', // 3
  ],

  // London Exchange
  'london-exchange': [
    '0xebd5f8561653fa3846a146952f196f8ff6301451', // No tag
  ],

  // LoopringDEX
  loopringdex: [
    '0x944644ea989ec64c2ab9ef341d383cef586a5777', // Beta 1
  ],

  // Luno
  luno: [
    '0xaf1931c20ee0c11bea17a41bfbbad299b2763bc0', // 1
    '0x416299aade6443e6f6e8ab67126e65a7f606eef5', // 2
  ],

  // MaiCoin
  maicoin: [
    '0x477b8d5ef7c2c42db84deb555419cd817c336b6f', // 1
  ],

  // Mercatox
  mercatox: [
    '0xe03c23519e18d64f144d2800e30e81b0065c48b5', // Mercatox
  ],

  // Metamask
  metamask: [
    '0xf326e4de8f66a0bdc0970b79e0924e33c79f1915', // DS Proxy
    '0x11ededebf63bef0ea2d2d071bdf88f71543ec6fb', // Fees
    '0x881d40237659c251811cec9c364ef91dc08d300c', // Swap Router
  ],

  // Mexc.com
  'mexc.com': [
    '0x75e89d5979e4f6fba9f97c104c2f0afb3f1dcb88', // Mexc.com
    '0x0211f3cedbef3143223d3acf0e589747933e8527', // 2
    '0x3cc936b795a188f0e246cbb2d74c5bd190aecf18', // 3
    '0xe70cde2c091569a09e7c1e335e20af302ab41339', // No tag
  ],

  // MinedTrade.com
  'minedtrade.com': [
    '0xac338d9faac562df26d702880c796e1024e2698a', // MinedTrade.com
  ],

  // nDEX Market
  'ndex-market': [
    '0x51a2b1a38ec83b56009d5e28e6222dbb56c23c22', // nDEX Market
  ],

  // NEXBIT Pro
  'nexbit-pro': [
    '0xae7006588d03bd15d6954e3084a7e644596bc251', // NEXBIT Pro
  ],

  // OasisDEX
  oasisdex: [
    '0x794e6e91555438afc3ccf1c5076a74f42133d08d', // OasisDEX
    '0x14fbca95be7e99c15cc2996c6c9d841e54b79425', // Old Contract 1
    '0xb7ac09c2c0217b07d7c103029b4918a2c401eecb', // Old Contract 2
  ],

  // OKEx
  okex: [
    '0x6cc5f688a315f3dc28a7781717a9a798a59fda7b', // OKEx
    '0x236f9f97e0e62388479bf9e5ba4889e46b0273c3', // 2
    '0xa7efae728d2936e78bda97dc267687568dd593f3', // 3
    '0x2c8fbb630289363ac80705a1a61273f76fd5a161', // 4
    '0x59fae149a8f8ec74d5bc038f8b76d25b136b9573', // 5
    '0x98ec059dc3adfbdd63429454aeb0c990fba4a128', // 6
    '0x5041ed759dd4afc3a72b8192c143f72f4724081a', // 7
  ],

  // OMGFIN Exchange
  'omgfin-exchange': [
    '0x03e3ff995863828554282e80870b489cc31dc8bc', // OMGFIN Exchange
  ],

  // OpenRelay
  openrelay: [
    '0xc22d5b2951db72b44cfb8089bb8cd374a3c354ea', // OpenRelay
  ],

  // OTCBTC
  otcbtc: [
    '0xaeec6f5aca72f3a005af1b3420ab8c8c7009bac8', // OTCBTC
    '0x8f7dee5cde6965481f0119bac9d5b2b142bcc94f', // No tag
  ],

  // Panda.Exchange
  'panda.exchange': [
    '0xcacc694840ecebadd9b4c419e5b7f1d73fedf999', // 1: Hot Wallet
    '0xb709d82f0706476457ae6bad7c3534fbf424382c', // 2: Hot Wallet
  ],

  // Paradex
  paradex: [
    '0xd2045edc40199019e221d71c0913343f7908d0d5', // Paradex
  ],

  // ParaSwap
  paraswap: [
    '0x1bd435f3c054b6e901b7b108a0ab7617c808677b', // P4
    '0x86969d29f5fd327e1009ba66072be22db6017cc6', // V1
    '0x9509665d015bfe3c77aa5ad6ca20c8afa1d98989', // V2
    '0xf90e98f3d8dce44632e5020abf2e122e0f99dfab', // V3
    '0x6b158039b9678b7452f311deb12dd08c579dad26', // Old Contract
    '0x72338b82800400f5488eca2b5a37270ba3b7a111', // Old Contract 2
    '0xf92c1ad75005e6436b4ee84e88cb23ed8a290988', // Old Contract 3
  ],

  // Paribu
  paribu: [
    '0xbd8ef191caa1571e8ad4619ae894e07a75de0c35', // 1
    '0x2bb97b6cf6ffe53576032c11711d59bd056830ee', // 2
    '0xfb90501083a3b6af766c8da35d3dde01eb0d2a68', // 3
    '0xabc74170f3cb8ab352820c39cc1d1e05ce9e41d3', // 4
    '0x9acbb72cf67103a30333a32cd203459c6a9c3311', // 5
    '0x595063172c85b1e8ac2fe74fcb6b7dc26844cc2d', // 6
    '0x9bc5a1d65cb56288c0d110ce2da3d0afb3f573cd', // 7
    '0x64440d8a6e6f949536646c363a4b734819eedbfd', // 8
  ],

  // Peatio
  peatio: [
    '0xd4dcd2459bb78d7a645aa7e196857d421b10d93f', // Peatio
  ],

  // Poloniex
  poloniex: [
    '0x32be343b94f860124dc4fee278fdcbd38c102d88', // Poloniex
    '0x209c4784ab1e8183cf58ca33cb740efbf3fc18ef', // 2
    '0xb794f5ea0ba39494ce839613fffba74279579268', // 3
    '0xa910f92acdaf488fa6ef02174fb86208ad7722ba', // 4
    '0xaa9fa73dfe17ecaa2c89b39f0bb2779613c5fc3b', // BAT
    '0x2fa2bc2ce6a4f92952921a4caa46b3727d24a1ec', // BNT
    '0x31a2feb9b5d3b5f4e76c71d6c92fc46ebb3cb1c1', // CVC
    '0x6b71834d65c5c4d8ed158d54b47e6ea4ff4e5437', // FOAM
    '0x48d466b7c0d32b61e8a82cd2bcf060f7c3f966df', // GNO
    '0x0536806df512d6cdde913cf95c9886f65b1d3462', // GNT
    '0x8d451ae5ee8f557a9ce7a9d7be8a8cb40002d5cb', // KNC
    '0xbd2ec7c608a06fe975dbdca729e84dedb34ecc21', // LOOM
    '0xc0e30823e5e628df8bc9bf2636a347e1512f0ecb', // MANA
    '0x65f9b2e4d7aaeb40ffea8c6f5844d5ad7da257e0', // NXC
    '0x36b01066b7fa4a0fdb2968ea0256c848e9135674', // OMG
    '0xab11204cfeaccffa63c2d23aef2ea9accdb0a0d5', // REP
    '0x6795cf8eb25585eadc356ae32ac6641016c550f2', // SNT
    '0xfbf2173154f7625713be22e0504404ebfe021eae', // STORJ
    '0x6f803466bcd17f44fa18975bf7c509ba64bf3825', // USDC
    '0xead6be34ce315940264519f250d8160f369fa5cd', // ZRX
  ],

  // PSEX
  psex: [
    '0xe242271f229e4a7e3f3d555d5b0f86a412f24123', // No tag
    '0xa7e1cf357e145645a123fff9fac32c988d96b905', // No tag
  ],

  // PXN
  pxn: [
    '0x88e343f4599292c2cffe683c1bb93cd3480bdbab', // Cold Wallet
  ],

  // QBTC
  qbtc: [
    '0xa5a3903fc3698c241b1385df4f80a5c665f47404', // No tag
  ],

  // QuadrigaCX
  quadrigacx: [
    '0x027beefcbad782faf69fad12dee97ed894c68549', // 1
    '0xb6aac3b56ff818496b747ea57fcbe42a9aae6218', // 2
    '0x0ee4e2d09aec35bdf08083b649033ac0a41aa75e', // 3
  ],

  // QuantaEx
  quantaex: [
    '0xd344539efe31f8b6de983a0cab4fb721fc69c547', // 1
    '0x5ca39c42f4dee3a5ba8fec3ad4902157d48700bf', // 2
    '0x2a048d9a8ffdd239f063b09854976c3049ae659c', // 3
  ],

  // Radar Relay
  'radar-relay': [
    '0xa258b39954cef5cb142fd567a46cddb31a670124', // Radar Relay
  ],

  // Remitano
  remitano: [
    '0xb8cf411b956b3f9013c1d0ac8c909b086218207c', // 1
    '0x2819c144d5946404c0516b6f817a960db37d4929', // 2
  ],

  // Rubic Exchange
  'rubic-exchange': [
    '0xd8b19613723215ef8cc80fc35a1428f8e8826940', // Rubic Exchange
  ],

  // Saturn Network
  'saturn-network': [
    '0x1f0d1de1558582ad6f13763f477119a1455502af', // 1
    '0xaa5bbd5a177a588b9f213505ca3740b444dbd586', // 2
    '0x13f64609bf1ef46f6515f8cd3115433a93a00dc6', // Old Contract
  ],

  // ShapeShift
  shapeshift: [
    '0x120a270bbc009644e35f0bb6ab13f95b8199c4ad', // 1
    '0x9e6316f44baeeee5d41a1070516cc5fa47baf227', // 2
    '0x70faa28a6b8d6829a4b1e649d26ec9a2a39ba413', // 3
    '0x563b377a956c80d77a7c613a9343699ad6123911', // 4
    '0xd3273eba07248020bf98a8b560ec1576a612102f', // 5
    '0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736', // 6
    '0xeed16856d551569d134530ee3967ec79995e2051', // 7
    '0xb36efd48c9912bd9fd58b67b65f7438f6364a256', // Binance Deposit
    '0xda1e5d4cc9873963f788562354b55a772253b92f', // Bitfinex Deposit
    '0xe9319eba87af7c2fc1f55ccde9d10ea8efbd592d', // Bittrex Deposit
    '0x90a48d5cf7343b08da12e067680b4c6dbfe551be', // DAO Treasury
    '0x4c20cdadbcae364edc03e2b90f09eb97d08ce3c8', // FOX Airdrop
    '0xe099e688d12dbc19ab46d128d1db297575474a0d', // FOX Distributor
    '0xdd80e21669a664bce83e3ad9a0d74f8dad5d9e72', // FOX Staking Rewards
    '0xe8ed915e208b28c617d20f3f8ca8e11455933adf', // Poloniex Deposit
  ],

  // Shark Relay
  'shark-relay': [
    '0x55890b06f0877a01bb5349d93b202961f8e27a9b', // Shark Relay
  ],

  // SingularX
  singularx: [
    '0x9a2d163ab40f88c625fd475e807bbc3556566f80', // SingularX
  ],

  // SJS.com
  'sjs.com': [
    '0xea674fdde714fd979de3edf0f56aa9716b898ec8', // No tag
  ],

  // Sorbet Finance
  'sorbet-finance': [
    '0x36049d479a97cde1fc6e2a5d2cae30b666ebf92b', // Limit Order
  ],

  // SouthXchange
  southxchange: [
    '0x324cc2c9fb379ea7a0d1c0862c3b48ca28d174a4', // SouthXchange
  ],

  // Sparrow Exchange
  'sparrow-exchange': [
    '0x91f6d99b232153cb655ad3e0d05e13ef505f6cd5', // 1
    '0xe855283086fbee485aecf2084345a91424c23954', // 2
  ],

  // Star Bit Ex
  'star-bit-ex': [
    '0x0681e844593a051e2882ec897ecd5444efe19ff2', // Star Bit Ex
  ],

  // StarLink
  starlink: [
    '0xfc95ab9dae04fe773c52427c0d0cd4c27771cd0b', // No tag
    '0x9c299aeccb400f24d11dd33deb0a8e2d9f20f971', // No tag
  ],

  // Streamity
  streamity: [
    '0x9bf25700727d10a857099d1033ce2cc493c3b61a', // StreamDesk
  ],

  // SushiSwap
  sushiswap: [
    '0xf73b31c07e3f8ea8f7c59ac58ed1f878708c8a76', // Dev Fund
    '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd', // MasterChef LP Staking Pool
    '0xcbe6b83e77cdc011cc18f6f0df8444e5783ed982', // Merkle Distributor
    '0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f', // Router
    '0x088ee5007c98a9677165d78dd2109ae4a3d04d0c', // YFI
  ],

  // Switchain
  switchain: [
    '0xa96b536eef496e21f5432fd258b6f78cf3673f74', // Switchain
  ],

  // Switcheo
  switcheo: [
    '0xba3ed686cc32ffa8664628b1e96d8022e40543de', // Switcheo Exchange
    '0x7ee7ca6e75de79e618e88bdf80d0b1db136b22d0', // V2
    '0x571037cc2748c340e3c6d9c7af589c6d65806618', // Coordinator
  ],

  // TAGZ
  tagz: [
    '0xea3a46bd1dbd0620d80037f70d0bf7c7dc5a837c', // 1
    '0xed8204345a0cf4639d2db61a4877128fe5cf7599', // 2
  ],

  // The Ocean
  'the-ocean': [
    '0x7219612be7036d1bfa933e16ca1246008f38c5fe', // The Ocean
  ],

  // THORSwap
  thorswap: [
    '0xc145990e84155416144c532e31f89b840ca8c2ce', // RouterV2
  ],

  // Tidex
  tidex: [
    '0x3613ef1125a078ef96ffc898c4ec28d73c5b8c52', // 1
    '0x0a73573cf2903d2d8305b1ecb9e9730186a312ae', // 2
  ],

  // Tokencan
  tokencan: [
    '0x475c4810c124873a58e1045428d1fa35634b6048', // No tag
  ],

  // Token.Store
  'token.store': [
    '0x1ce7ae555139c5ef5a57cc8d814a867ee6ee33d8', // Token.Store
  ],

  // TokenJar
  tokenjar: [
    '0x5e150a33ffa97a8d22f59c77ae5487b089ef62e9', // TokenJar
  ],

  // Tokenlon
  tokenlon: [
    '0x7839254cff8aafbdc2da66fe709eb8f17ce09fe5', // AMM Quoter
    '0x904144473fde753dc0729608cfeea6f4a8b275e6', // AMM Wrapper
    '0xdc6c91b569c98f9f6f74d90f9beff99fdaf4248b', // DEX 1
    '0x03f34be1bf910116595db1b11e9d1b2ca5d59659', // DEX 2
    '0x00000000d49a1772a9ed1533f0d6b7f54a4a814e', // Emergency Recipient
    '0xb9e29984fe50602e7a619662ebed4f90d93824c7', // Fee Recipient
    '0x0000000006a0403952389b70d8ee4e45479023db', // Merkle Redeem
    '0x292a6921efc261070a0d5c96911c102cbf1045e4', // Mining Treasury
    '0x74c3ca9431c009dc35587591dc90780078174f8a', // Multisig 1
    '0x9afc226dc049b99342ad6774eeb08bfa2f874465', // Multisig 2
    '0x0485c25a5e8d7d0c5676d0e6d3bfc4aa597ba0b0', // Permanent Storage
    '0x6d9cc14a1d36e6ff13fc6efa9e9326fcd12e7903', // Permanent Storage Proxy
    '0x8d90113a1e286a5ab3e496fbd1853f265e5913c6', // PMM
    '0xbf1c2c17cc77e7dec3466b96f46f93c09f02ab07', // Rewards Distributor
    '0x3c68dfc45dc92c9c605d92b49858073e10b857a6', // Spender
    '0x413ecce5d56204962090eef1dead4c0a247e289b', // Staking
    '0x929cf614c917944dd278bc2134714eaa4121bc6a', // Staking Rewards
    '0xba4f753781b1e7a9e2a46618b7721a4685206020', // Staking Rewards Factory
    '0x000000003a8dbf47cd362eda39b3a5f3fc6e99ce', // Treasury Vester Factory
    '0x89062f9dd198bcefb07417e488a6be71c1c9f1c3', // User Proxy
  ],

  // Tokocrypto
  tokocrypto: [
    '0x0068eb681ec52dbd9944517d785727310b494575', // Tokocrypto
  ],

  // TOKOK
  tokok: [
    '0xfe54cd0940b4ca761436c100ec987c190ffa030c', // No tag
    '0xfaa3166b0ac4eba275e6bfe4438db68f53709e98', // No tag
    '0x20c0df0042305e7fce05967550dbe9035a8e50f0', // No tag
    '0xd6038023888747865afc6ed7ee28a4888baaf002', // No tag
  ],

  // TopBTC
  topbtc: [
    '0xb2cc3cdd53fc9a1aeaf3a68edeba2736238ddc5d', // TopBTC
  ],

  // Totle
  totle: [
    '0x7113dd99c79aff93d54cfa4b2885576535a132de', // Exchange
    '0x77208a6000691e440026bed1b178ef4661d37426', // Primary
  ],

  // Trade.io
  'trade.io': [
    '0x1119aaefb02bf12b84d28a5d8ea48ec3c90ef1db', // Trade.io
    '0x58f75ddacffb183a30f69fe58a67a0d0985fce0f', // Wallet 1
    '0x5a2fad810f990c4535ada938400b6b67ef7646af', // Wallet 2
  ],

  // TTF.one
  'ttf.one': [
    '0xd44533bb963d59f9a30428026ce6967c5a01a19e', // No tag
  ],

  // Uex
  uex: [
    '0x2f1233ec3a4930fd95874291db7da9e90dfb2f03', // Uex
  ],

  // ULEI
  ulei: [
    '0xb27ac505bee7298b204b530b368b6191f4141c55', // No tag
    '0x412d18072b7809ab25d8b4b0e0167128e122ec37', // No tag
  ],

  // UniSwap V2
  'uniswap-v2': [
    '0x2fdbadf3c4d5a8666bc06645b8358ab803996e28', // YFI
  ],

  // Uniswap V3
  'uniswap-v3': [
    '0xe592427a0aece92de3edee1f18e0157c05861564', // Router
    '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45', // Router 2
  ],

  // UniswapEX
  uniswapex: [
    '0xbd2a43799b83d9d0ff56b85d4c140bce3d1d1c6c', // UniswapEX
  ],

  // Upbit
  upbit: [
    '0x390de26d772d2e2005c6d1d24afc902bae37a4bb', // Upbit
    '0xba826fec90cefdf6706858e5fbafcb27a290fbe0', // 2
    '0x5e032243d507c743b061ef021e2ec7fcc6d3ab89', // 3
    '0x03747f06215b44e498831da019b27f53e483599f', // No tag
  ],

  // Vinex
  vinex: [
    '0xb436c96c6de1f50a160ed307317c275424dbe4f2', // Vinex
  ],

  // WBFex
  wbfex: [
    '0x0427220720756e3050addc7ab1293216247077f4', // No tag
    '0x915e570019cccb061db94f3dbb0cc56d10077417', // No tag
    '0xd7583210d8bedd1234fe2bd79e86ec8852c45dd6', // No tag
  ],

  // WeDEX
  wedex: [
    '0x7d3d221a8d8abdd868e8e88811ffaf033e68e108', // Beta 1
    '0xd97d09f3bd931a14382ac60f156c1285a56bb51b', // Beta 2
  ],

  // WhaleEx
  whaleex: [
    '0x079ad85939135a5585117b11161d096893e16c4d', // No tag
  ],

  // WhiteBIT
  whitebit: [
    '0x39f6a6c85d39d5abad8a398310c52e7c374f2ba3', // WhiteBIT
  ],

  // Wintermute
  wintermute: [
    '0x0e5069514a3dd613350bab01b58fd850058e5ca4', // Wintermute
    '0x0000006daea1723962647b7e189d311d757fb793', // 1
    '0x000002cba8dfb0a86a47a415592835e17fac080a', // 2
    '0x4f3a120e72c76c22ae802d129f599bfdbc31cb81', // Multisig
  ],

  // XinBi Global
  'xinbi-global': [
    '0x499bc6b4b9e7da1fd8a775106a389f4c1d1d4b98', // No tag
    '0x373fe5f4d8936590b4463df22be4ce3f82ced806', // No tag
    '0xf8bc6604190a6279080e0fe24e15dc1d2927e10b', // No tag
  ],

  // XMEX
  xmex: [
    '0x96e9a06a22d4445a757dfe9b4ff2c77a12dd60f2', // No tag
  ],

  // xPollinate
  xpollinate: [
    '0x31efc4aeaa7c39e54a33fdc3c46ee2bd70ae0a09', // Transaction Manager
  ],

  // XT
  xt: [
    '0xefda0cb780a8564903285ed25df3cc024f3b2982', // Hot Wallet
    '0xe74638bff8e7e332c08c239407fa68324acf8dee', // No tag
    '0x659ba341542ed9c25eca5fd7dae3659385956360', // No tag
  ],

  // Yobit.net
  'Yobit.net': [
    '0xf5bec430576ff1b82e44ddb5a1c93f6f9d0884f3', // Yobit.net
  ],

  // Yunbi
  yunbi: [
    '0xd94c9ff168dc6aebf9b6cc86deff54f3fb0afc33', // 1
    '0x42da8a05cb7ed9a43572b5ba1b8f82a0a6e263dc', // 2
    '0x700f6912e5753e91ea3fae877a2374a2db1245d7', // 3
  ],

  // ZB.com
  'zb.com': [
    '0x60d0cc2ae15859f69bf74dadb8ae3bd58434976b', // ZB.com
    '0x6485fc77be2186fc60feea38d0ef4331d8404b60', // No tag
    '0xf98e7af638b015d15e1820852bf24900f074b38b', // No tag
  ],

  // ZG.com
  'zg.com': [
    '0x8baed8fd7fc228781a95e7d6e57c3e430d2be6f9', // No tag
  ],

  // ZigZag Exchange
  // ?
  'zigzag-exchange': [],

  // ZT
  zt: [
    '0x444a5e0d2515f322e7278f6ee95cb34d8de98f09', // No tag
    '0x5004a7aa3c430bc3e133ee29c28e391b16f8bf7d', // No tag
    '0x7aa12eef14db55884ab2fe0d097e0064ef7a8eca', // No tag
    '0x0179d232becf100cd1f0dd3e84a8afa9ca31aff3', // No tag
  ],

  // Unknown
  unknown: [
    '0x4dc98c79a52968a6c20ce9a7a08d5e8d1c2d5605', // No tag
    '0xbb3fd383d1c5540e52ef0a7bcb9433375793aeaf', // No tag
    '0x1ccbdff6336b1027995a27a77b41fa87eb6608a3', // No tag
  ],
};

module.exports = Object.freeze(walletsByExchange);
