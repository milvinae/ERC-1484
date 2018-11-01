const { sign } = require('./common')

const addresses = [
  '0x8610b26ad5afde2dda1028ffd18e9876785fe3a4',
  '0x7bd68e22ef10d043643eccabed60c538800a70a0',
  '0xf507c82f89c69c176204d196c63ce1ed37387c3b',
  '0x1e80b390f0c7b43ebb1ac670908ba16cdc4caaf6',
  '0xe26fe94bada8dc00db4344875e02adb95e8502f2',
  '0x31ec3ddfb45f5f313e0a9d20e13e9add485e2123',
  '0x6449c917b7f60c08dccd32f7c1dcdd723310cc48',
  '0xd0f5bed140b7a22bff3a08765bab2e6e1863c6b2',
  '0x0cd6b3b919336800b62815530bdc80bb3e7167ac',
  '0x7bd7c319072c75c9449a2df9819f5e90769f3465',
  '0x9e819b568162bfb788703a2cf02e37d5be167c09',
  '0x0a572f6e5c71fb3aaca1efa26763507fa903aae8',
  '0xa672d58841a9a4c72c3503104e3359be79e7e30d',
  '0xf86f7e3a204cb0243898a27435bcb5877e6d6fd3',
  '0xcd9a6f13688cd18ea5f0baed9ecc659c0ae0f3b3',
  '0xf6d6611b0836e99f3c96bb5d901dbead009094b9',
  '0x9532d4ebb695898dbd0529a6a6221322fed5fc8a',
  '0x426f3083ffe3d93148ae527999a7ec3592db3255',
  '0xda1d8616811257ab779441c9cab190ab3043fc24',
  '0x0a0a86ef469bc9cbad19628ceca851740a259dea',
  '0xd90073bf7ab466e9695c69f940ac9a41241d4741',
  '0xb45d9c430454c8545a4b91d3a18fc0aaa02af4ff',
  '0x98f14c25c55c17a3305f892c74d04fc356a0d268',
  '0x04bbb858d982241e708f8fe309c48ed1c3b1cb22',
  '0xbca031b9b820ce6a1c149d3ab444fa80a7a523f7'
]

const privateKeys = [
  '0xa911eb36c3b457cfc00046ef98ff6b46800b56229d14bbafcb088507940f144b',
  '0xf11cff3cfb0d55554dfdf3169a417d5ed8e1b7214fa071ef3ab097512e12776d',
  '0xe6b638bcb4a5a5b60afc6b727bd20c02f6d31d3837c1b691c761e2cf1ea26137',
  '0xa2b2798f0c015461109e1999d027fe3b2db41810279adb7d3addceff7784fa1d',
  '0x3a2628e88a74c48c770c96720c3d021a0a2dab309fca12c82c31d3e41585cbde',
  '0xc0ad772be7d224bf846d31a64921adecbac3dd0165d134890a03b9e54c090724',
  '0x6e5c91ef395be2f5e89c0cf24b6f47c7c433ef8dd6f35ab7db6f7d3b7a451b5a',
  '0x1e41b3289fa059542860eae3c1c59cdd2433f4cfcb769241372dc58a1e305bc9',
  '0x6adcca737c5b857ea37398fcef20fc5b97dea15f83114958a19467b99e292565',
  '0xc7bdb029587b074ffebf7a6bbc20e5de00115d0a53b14c4cdd803870f1a51ae0',
  '0x6df13b3d509f9644eb3885499093d49611e00989b6ac4cc247bbb53a582263e1',
  '0x967641d9bf76a408da38b7237f4797621228e0e9f271df782e0e6b67e272a3c6',
  '0x7552a2cf9e64348d2515cb690bddbd442041586df173a4a76f3db5c7cbb480a8',
  '0xb6b7a6ce74533bf15fda82e2bdf36ec2dd2ab8bed6a77c202b42eee194f2e908',
  '0x62a432c8180716a032c080aed68c296367a283a2756e9866b3af8b1b85e52b9b',
  '0x6be7def89e73b09ad5dacdd296ca5f214005bb0f84f12ef3257d49b768c924e8',
  '0x1cd4ce22ac380d6c4e6797ba04e9a6e2b3bcf61039e27337c29d9962a98430e3',
  '0x63c89cd989f1cb1ab1cabebe2526354d74e4a08e9c92ce8f1b8432d2738629d8',
  '0x439e1c1ec33880f13aa0d2dd689793c08af5c5825c6b6786cecd07dd0cc52771',
  '0xb5160508759c00de66a2c6e2271fa5710ba9b52c8d788023bfc1b2bab430d912',
  '0xa3f647e676743f49f101c10060213fe01ee8e4e389836a4390efacb0d68a79d9',
  '0x5a0315f82ac6e2d9206b896bc45638f26895885ce365207d8f4278ea1f4b44ab',
  '0x7e773ebd37224a265d10216be8840b693d49b1d7f0af0b2518c6a56b2b59d9ef',
  '0xb64b74b57ba7cb8f5d1069b578782efac5a1fd70d9cc0c950b8116fb8f6abff7',
  '0x3d040afbd0994006bcff33733642033bc2b32a617d8cef6c83337cc0a45f407d'
]

function getAddress (index) {
  return addresses[index]
}

function getSignature (hash, index) {
  return sign(hash, addresses[index], privateKeys[index], 'unprefixed')
}

module.exports = { getAddress: getAddress, getSignature: getSignature }
