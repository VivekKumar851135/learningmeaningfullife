'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1e781da3636b3a40ff8b6bd14067bf9e",
"index.html": "a8c8909d3b27fd92818ac06a32eeca5d",
"/": "a8c8909d3b27fd92818ac06a32eeca5d",
"main.dart.js": "533f19b09992ed806617318461a1b31c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8181094b133ade4747ca90e03631c612",
".git/ORIG_HEAD": "1ad70b639c6a97b9c6e28d4fed69b8d3",
".git/config": "6c60da4b70351cae828aa7c6294ff8f1",
".git/objects/61/35915d660ca2c9e26a8a24206e812bdeeacf60": "b6cf65cf7911edfb1099f236009a3363",
".git/objects/95/538dc8647c6913bc609965675eb810bda4dcfc": "a91bc7f8afb2d0c70ab6ed8e1d368339",
".git/objects/95/8b8df3bc8e521ef0a7d1496fe9e6e3d53de795": "632f605b0b34e5618d411e3adf41599f",
".git/objects/92/78d93c6660522e1b93c52b023b76142c2fc3c6": "c446f8bac1b5375f9d6602f13619009e",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/9e813e715bba828e59ee57c52bff62e865fdd0": "6eb7c0158ae4653f3fc6866c0f59746e",
".git/objects/50/04049e773aa516bf2f7b3ea2d30759e31b77c3": "eb5591444345d8f6674692a5bc6c5760",
".git/objects/68/5a4107ee9779d96dfdad2c665e57720da38cac": "d4106ce4e13241801e217586c003ec52",
".git/objects/9b/a2fab9785f126cff912d925ba5770142061482": "2999184f3e3f44873cd24d5723d499fc",
".git/objects/9b/dc2d8be9af8d88504be3da2a555c83829f515a": "38413bbdef8e3726bc439b6f39a42f83",
".git/objects/9b/2b0d9b8ce2914545438865467f7577e3a38ec9": "1353bee4baba7ccb7ed4826afa3047b0",
".git/objects/9b/2b2874f709badbcff52ce20811e76b6e03b745": "eb2ef578fa5bfed134e8b63c3a2bb215",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/e91b59da3a53d28770a61e44f288590b31f161": "ff73604570112212468b23bb726136df",
".git/objects/56/f6a1cbb229d885be5dd6ef3ee3ca5290a79225": "02d4fed20ac7f2f0f7b5dd1a9aa85993",
".git/objects/3d/32e4994a8dad05530d254e0cfc03922bbf6665": "09a05597d4c45f3f1272f73de2deefe4",
".git/objects/33/d7684cd540c25c8137a15d34bd4dec29932507": "5ce59e96f991c39d47ca60e1916264a8",
".git/objects/9c/6941af7375be29f8cb0f27ede093c2a0216efd": "d01fe3a603b90337fdb214577030fef8",
".git/objects/a4/1577e372d25bd12d48d540762fd84817fc986c": "acd5ae146405f1e769525be43b4046ae",
".git/objects/a4/6ebb7f2bf829508a86e3ce6a17cde6685f33ce": "be3b5a90afc0055b94ba6111498f96cf",
".git/objects/a4/9ed39f9e9ae4dd3539c217cb5bb66ed80faae5": "bdd9fc40602061b390968daec199fa91",
".git/objects/a3/610862b811d041a9168e38bedd5b2c4e0ea254": "0f674b478c2ae8deae086201ac59a8ad",
".git/objects/b5/bfbee52b92f1f9f761362213772f3309573646": "71c5fb7e08e7c6d72bed526e5126e653",
".git/objects/b5/6c852dd962a2e4efb67416873b5dbf96f02342": "af0304c7d0643b94767436875ecc7707",
".git/objects/b5/77e0a91ba3ec3ab254c6e9e8489faebd16ce87": "07e0c703f41c52bd032086c339656bc2",
".git/objects/b2/fc470d9b4ba5e32619fdb4f3ddf73f73c45290": "1d603956cb6ae3f0f1c714d19a3bb1e8",
".git/objects/d9/2854f4944c23933468f9be93b5db41771eeb1c": "1c83e771932c3fc632f576114e32849e",
".git/objects/d9/abc89f5fdd1d2396ece9d4e4ed75fa45f22262": "30cf4e862f1b9409f2fa3c16ca785406",
".git/objects/bb/dad06849d8121489a93b384655092920c1a781": "f11e0b59df7e595f48088d133abde175",
".git/objects/d7/1db9a93ec7a56261835b8ec02f03cafa15a599": "6699e1daed446f82942d82fe3328dc2e",
".git/objects/d0/ee8bb4f3c859138d731bbcd062601d395a1918": "673666d17afdb34f29b6b52fb9b4e62a",
".git/objects/a2/23452c4e2c3b15b2df08e5d01f01c60f609666": "50998f358457e48f55e6f32b2109d2be",
".git/objects/a5/1f7340bae9935196308e380bf5125b136fc4bc": "37946178102f3b74e35494759e9138d7",
".git/objects/bd/1df6b335d4bb2875f40676e5d84b8b0d4465c4": "89d1e8046a8c49253a0c468b199fa475",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/75ca04bf7ff2783d5035eb2c7325cf06315d99": "b16bdd2e9664ad1b7b71d44240a7c6d4",
".git/objects/bc/cc87c635a7da6854ced6411ccb466c52d7357d": "2c6465c2d7694f4915c8df83bede22ed",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/bc2abf6513c079c8241540923786c401cb8918": "c632496fe324964643df3ff81c413964",
".git/objects/c0/b7623f1ec2204b4e07e59fc7b5e38d259bba16": "ee837127d8f56c53ff29c59a96f41e4d",
".git/objects/fc/e23bfc42f95a66b3e26f42380e7bf098d9b1c3": "9b91eee16c75228310d18061850a3533",
".git/objects/fe/e5f0b0945383d8c761b835827fee84f0a964af": "7fae7ef208f9a2b853a1ab5ec4e75383",
".git/objects/ed/e3242dbdeeb7032dfbf6670ebdd5106873ba6a": "ae4ec6293d0a1ea5980205278a8246bf",
".git/objects/ec/8d7ec0a4d42286fa2cd9ee86a329dd0b17e1cf": "410327881e2dc157e365270755f4ea22",
".git/objects/20/111a809fabb9c96d1fa3e24fe9a1d1c54ba50b": "73e6017ae5c0f47947469ba15aa46f33",
".git/objects/pack/pack-524be1bea5d652d729307a8d6fb0545cd82d2a91.idx": "cc339a17f6652e472abaafd9ef086d5f",
".git/objects/pack/pack-524be1bea5d652d729307a8d6fb0545cd82d2a91.pack": "f2c85ad4277c9b8cd9f192cd3b12f185",
".git/objects/7d/1e303450c69a668017d09792eee683a63be839": "27a74145cd33aaaf87dcf7e0a462f415",
".git/objects/29/83edbf31c156fb23f8ede9e6ef9c887d4b08d0": "b56a938e80934cb22d5bc94da47c2c4d",
".git/objects/29/c9e37fcf436f44b1ebe0a45d3c7e9e131fa521": "0e42c04bcd66e3a47e0f61c8bfb505a3",
".git/objects/7c/492e8781ac48f16fe3589e23d7603a5a0144f5": "8865e0564a2229fe87bcde2a1b3e51bd",
".git/objects/16/a2953a373818e964fab3996cf6937b0c0def84": "6d92dfd4ae64e456dbc684075dcc0ae1",
".git/objects/42/1dde8f538663c9f18d4303b3177d10ceba7e97": "4af9032af4e1af8478876a0b1161d4a1",
".git/objects/89/42b924304d0c3e947ad12d488b566f469c6e27": "b03da7cc0dc0b100ea857a4010e0afa3",
".git/objects/1f/d64708eae1ef202509109a6ee65302afd19ef9": "96074bcddb6b6882ab0b3c7ed747c529",
".git/objects/87/cc69ed2def08d21e4e11b5740f790b4bd1b0e1": "2d1daf0d7d50883a52c1dc53995c41a7",
".git/objects/80/af0495d8f485261b846bdc66b3fccb866010e8": "996b6fec40286c808fea00d190a6d33d",
".git/objects/1a/3dbc871daf29187be744e6a26ea78ccd165315": "34b46d471911f06aa73541325e87d00d",
".git/objects/17/dee457209b92a84530e8eaa5f96b3c50630ea9": "413271f0807cab7cf48dbbfdfb33fcdf",
".git/objects/7b/0d0a01e17c93114cec3fa842f02dc536038bdb": "f6c1539f68902dedc8be9cc73b13d3aa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/910a3796175d306d0415d2d7c95e77da770bb4": "9e2297fabde37efb3663245c7c40acde",
".git/objects/10/8e2d29028445f93d9e3584fdc2f8c961c15411": "0e22e8c4361fcf28d04a0556d9e45a5b",
".git/objects/19/1444e939a8ffd6e914a149fca53bd6457fd0a6": "380f4a5435d2be79ea37ea2c2e8801b2",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/75/933fddd6fb7ceaf877e14143efc8dce9b3f8e1": "2c4ae50e4796157f5896da02693c5b54",
".git/objects/86/93f7d26cc24a5d821e4d12222539cc80437c19": "7febdee5d0cb00afa93bbe3f7ca99f87",
".git/objects/2f/1a56aa25b7ede648b6b21ebb93e72134c098ca": "952a13d80d9997b28e2ee68c7baa4c15",
".git/objects/88/cfa541945af1dec95353e79c2a0930b4b53620": "53ee02094145dbafb05a220008671cb6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/07/09f9f19179bc8af4085aa342acadd40e2e0366": "4e1670002ab13815a7be4e61924656fd",
".git/objects/9a/8598bfb29b2c9bce46016792ff705998b0d720": "0196c81ffd54b314770fba3d1343bbfb",
".git/objects/5c/a6e0b908dff39dd202943639eeb3194751a899": "b934379cf7674c57e552ee6fba41e456",
".git/objects/09/b75969ad87740c1797ef7ac6ec3a0c99a58647": "740b1410b95640cef28257b4c1a4a2a1",
".git/objects/65/aeebda527af86178424e19dcc40daef13fe6c4": "ef5de5ed1b54985035521e19c3a1f38b",
".git/objects/65/3b37c51b2e1eb4e890a43e96c0ee6463086bc3": "70ec18924433c56266aef72e202c12df",
".git/objects/96/581624fcb5c93af8b3e2af54b6497b79ca28e8": "e1f0599fe26822db0c01a8870c29b69d",
".git/objects/96/de5b56e34015203e115f3a0370a3662cbcb7f8": "4c096a44f9d08a0ef29e951c946384c3",
".git/objects/3a/7145071055a80ba8ef679de7d2c323bcf0989d": "f59781107bacaa3323aa36eb7bf82704",
".git/objects/53/4823922c7c74354aeb1d421623151b42170afa": "c053d5c4fd63d998c71edac356a797c2",
".git/objects/53/6b2280237adc0170b81705b03b28422b40167f": "e71f821b81c27c51ec38abdeba8877bb",
".git/objects/3f/fdf015cd18632d38a0af878aca6ac83a7e01cf": "51d001fee2b54dc6fd119dd73e92e838",
".git/objects/37/676165e1390da1ce3515ad7d1cab50eb514b3a": "4905ab4bca9346f59e8888ff7428e46d",
".git/objects/6d/3fab918b9955a8b960a10205e57deef1c1f27c": "caa78cd91f74714ed7940254a7a9f57a",
".git/objects/06/6693cfd664e1e12cef57e5d230638236f9509e": "b0684eae61c8a4255abb727e489e0ad3",
".git/objects/52/c6328066c12d46a82ea09053287ce12530766b": "c829e813ac399788c008ca2aa64d1d3c",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/63/bbf85a6d9f27ec3048775186857d547715fb81": "28b240b0d278fd88ae6e3e5c4965b2c4",
".git/objects/0f/c2242fb325a6f9c474d0fa8995bdee2870a2c8": "b7377eaf9a0678a5a49675c13308e85a",
".git/objects/0a/7a2dc786cf799d874dcff50a7440da2c834991": "c15b38ad13286577adcddf1dabf0d777",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/bf/0b1e8b07a4e1dadffac30780b64fc9f6caec24": "15b1894fdbb0b067a5f7c2c2293d1bf9",
".git/objects/ba/29a8afb305fef027c592d4592d805f388258c1": "563fb94b47ea32047ebdaea469c44bde",
".git/objects/a0/3ec616609cfe587166379eedd63b85cf9b33f1": "d5f89e12514c95e5e5a9d7637ce47745",
".git/objects/a7/5de4076dcaf10027dbc265aa23c2cfad2e3107": "cd11b3fffc2dccabc5d77edfef99e123",
".git/objects/dd/7dd8cab3998fc610b0ce50cd1b0bbcb97cd7ae": "e90e8bb15f182aadcec762b204d4c91e",
".git/objects/a9/488cc112a125935e2b3d1a51bd7640da6c4bc1": "874b884b9ee63deb58ccc10058b88ced",
".git/objects/aa/a7a4487c7ea7bb6fa2e2ab354de78857d26d98": "4f5826cd35b08ff19a5121bffa2a99ca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/c22873e10f43286f60967ee7609a0152b66486": "ed74be9ce5443e42859dddd893116762",
".git/objects/b0/242177b0ed0544d7db0a94648355019624666a": "62f5697543b57009e7ca5a0395d1770b",
".git/objects/a6/69814c0863e07ee00acc69bfdff9c57804366d": "aa6d2975bc1fb75c512030c2eb57efc0",
".git/objects/a6/0d760b1682b2770bb4eb15ce49d830e952a86d": "7c4376b51eb0b3bb641113bb8a0b38d5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/9434c3aa180916fee14112b79a0c2159d19044": "85a7746709ae3534cfa42ce7da0b3072",
".git/objects/c4/cd85278173ccc1eef544d120d661b78c9de624": "cc518dbf6fd8d5751b44f5b235a72ce1",
".git/objects/c4/c0d7570683c5a438a3edbe2a0d18a044efd03d": "5e5e9a1a22377dc5733bc38505395bb6",
".git/objects/f6/307d82e5a282c65cb3c6d8c42ae99223992ed0": "35ea84b7a8b64c0061a6af6e4b63d17c",
".git/objects/e9/2953ee847041bb7692ec9f4d0ed7fe91816a7d": "d23e16a91478ff612fb8cf12e9ae65b3",
".git/objects/f8/c8e629daef47afc1f97a8fc7bff98f5731e1eb": "68125d0acc34f1263476b41901e947f4",
".git/objects/f8/2141ec1b68a68ed97a47759488a47906a31fc4": "e485287f5d7aecaac3a4fb20ac51a5a5",
".git/objects/79/fb5f220a6c6ed330dfba6828a2eade5e7d29c5": "c6a8b1e9b7b33c2134f73f789ea07855",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/a342e4135a06d5be34da96a90d207ed63ec7f2": "e208d66191bc182cc839d346579c3e97",
".git/objects/1b/58253a9de515c93f159ce622ee2e6cc46878b0": "80c29f7260f9adec6d11cadef1001cff",
".git/objects/23/95638f3a605bb2fc3b46a900c99873bf859a8c": "d26868a08a542db2f5e40e4b3c252f36",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/5557a3a466dd9d130861acf732bf9243e5cf8b": "4c7b77c794dd3db0b60dc088bc233d70",
".git/objects/15/874987af432a651efcbc43c80504b05fc11a18": "618fa2b9fad48a25be7ebc3a2709e218",
".git/objects/1c/51f4d08c9479c0d503a71365683b1197918cce": "bdf7b80ad2381537f76d9055291f129e",
".git/objects/82/3128cb674fd2ec60de2b7617ffd5a195d3dd47": "6b5567d771a6b6d512a618ace38646b5",
".git/objects/2e/94a7ea841e503d6fe9632f169e3311df799620": "b6518ff8b60e8a0d174d8f41e9834991",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/86ca78534e76179ddf553e62a4cd141edb7b7d": "6e145c3b3b3e1f176e9b3f99c0a8342f",
".git/objects/2b/0ce85856fab776018d44bb343ca037979fc12e": "ccbcf7c88f479f0006eb3a49672d5c48",
".git/objects/7f/7f2eceec77e19a496a2f998650c14e1b15d716": "68adb361d24b3bc2d026124c2fa84b52",
".git/objects/7a/10f094fb41a02451d6746978b41969a5321865": "c9e1e8ee9942a897a9d8722ad10aacf6",
".git/objects/14/8773366b28d2d53999aee066fcf5d38111d835": "8a9838f212833a789e4661b43ce1eb80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dca7d9d6ce5c458180d6496997f5ba2f",
".git/logs/refs/heads/master": "a3ac38638370c8e5a01b8d9e56cdda4c",
".git/logs/refs/heads/main": "616ca6a707bc14a34b9a20f26052fb77",
".git/logs/refs/remotes/origin/patch-2": "148f61359b672fb60e0cb91db90701d1",
".git/logs/refs/remotes/origin/patch-3": "2d8d25e5c36e147fdb50a91382eb2843",
".git/logs/refs/remotes/origin/VivekKumar851135-patch-1": "71336507eaffd7cfb82f04f0734a2f02",
".git/logs/refs/remotes/origin/main": "d7159e7f1490303ea0645a3437bb82b0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "a9e85cb9cd935a0d6867e4610a33f4f0",
".git/refs/heads/main": "155d56afe955cecd3d82be92979ea2d9",
".git/refs/remotes/origin/patch-2": "8a8b4c9a6308d4e48cdd0422b838a5d5",
".git/refs/remotes/origin/patch-3": "221233b3bc71ee805c3600daa3e151cf",
".git/refs/remotes/origin/VivekKumar851135-patch-1": "f9b5f6ae375bc7fc05d3e57ce291b082",
".git/refs/remotes/origin/main": "155d56afe955cecd3d82be92979ea2d9",
".git/index": "8f782a7498ad8ea5718ff919f5d5eb77",
".git/COMMIT_EDITMSG": "030c6af722e5187679e13239d8e7e7ae",
".git/FETCH_HEAD": "6bc83a4b54a7986f5d826d1397193ec6",
"assets/AssetManifest.json": "ccf46c2670173fef51804ae7bdb9728b",
"assets/NOTICES": "2de92808990b2596fdacde86cd970bae",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/ArchitectsDaughter-Regular.ttf": "31c2153c0530e32553b31a49b3d70736",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/info.png": "9d2ac02d1e05d3749c78531b9ad05981",
"assets/assets/images/templatelong6.png": "ad03b28695ada2c093117f7f99e366af",
"assets/assets/images/info.jpg": "5419cae483ed30792f58142843d11925",
"assets/assets/images/background4.jpg": "92ebbef7f4a3d147e00d419ef2321bb4",
"assets/assets/images/templeteshort4.png": "50e2ab62654650badc86054c85cc2b74",
"assets/assets/images/demo_poster.jpg": "33aa241d602b8fa8812d00cf3934f3a9",
"assets/assets/images/templeteshort5.png": "9c711bb1e9f13513040e5673d4248f06",
"assets/assets/images/background5.jpg": "10fd0289c0599a28e6b351d5fc4e4062",
"assets/assets/images/templatelong7.png": "b39d0aed0d54b4fffb7282df31094fc4",
"assets/assets/images/templatelong5.png": "d1b4a4c2a26091a66b9b33ec77a79d58",
"assets/assets/images/templeteshort7.png": "3a9326dcbf71e96a7faf7613bddd2310",
"assets/assets/images/templeteSHORT6.png": "f677c4f6ed2ae8da1b2e41463e268e38",
"assets/assets/images/templatelong4.png": "f91028c4b1f58e1ee8f15885013d293e",
"assets/assets/images/background2.jpg": "6c7a17dffa4e3c001725c900ad347363",
"assets/assets/images/rohit.png": "e069757d25cc49cb3a60a90d3f0a9022",
"assets/assets/images/templeteshort2.png": "aed378d52ac615737c206d2a9eb9a6a7",
"assets/assets/images/arvind.png": "9a9442df3ab87f80c6ed15a645d3beae",
"assets/assets/images/templeteshort3.png": "10f56a9608c1d8eef082fab07dda1d01",
"assets/assets/images/background3.jpg": "7c5f1a076b5e3c6a2f16fb63e769717b",
"assets/assets/images/templatelong1.png": "b600556cbf03130c060d84d21ac214f1",
"assets/assets/images/templatelong3.png": "497f0cfe8f2f60781514c980adb2da92",
"assets/assets/images/background1.jpg": "67fe10c7811c529ea7e88813118e0f4f",
"assets/assets/images/templeteshort1.png": "8892fd22679b93ce510b1f560a8a0cc0",
"assets/assets/images/templatelong2.png": "74f1af604210fcc6c8d5b54745c431c8",
"assets/assets/images/ashish.png": "a1793dc0993f7ffd9259127e09a6f84a",
"assets/assets/images/templete2.png": "2f3c31a81a0e8b834942da33e98bca01",
"assets/assets/images/akash.png": "9ecb0baa1a7133dad908e4e61b642116",
"assets/assets/images/study.jpg": "e9c5b85f73fc14150c8bc05274bb4a3e",
"assets/assets/images/upcoming.jpg": "99180108080ec1fa3bb3b7dfaa29fda1",
"assets/assets/images/niraj.png": "7c1505f8e3d612cad78b24eb846e1a28",
"assets/assets/images/abhimanyu.png": "c50f376497abb1c8995eb4d40c3bbe69",
"assets/assets/images/giphy.gif": "a8a4f5d7eef65e16a88264c9ae03d663",
"assets/assets/images/avinash.png": "0546faa0eee7c839fe2eae0e3c428ad4",
"assets/assets/images/background.jpg": "bb9d3e02f50156c479f7313b8727d1fb",
"assets/assets/images/management.jpg": "aba8c7c7d8d0c7e32bb223c03b2ab946",
"assets/assets/images/background.png": "85fb1b38483c3a9bac67aed8f645ec58",
"assets/assets/images/left.png": "c5359fd59efefe56bfd57a40f0461ccd",
"assets/assets/images/footer.jpg": "42ef31c82aa1fc4c141b2bc23daaaa9c",
"assets/assets/images/saurav.png": "75d760845e4972bd3ee32d151758785d",
"assets/assets/images/chandan.png": "5f9ed3c3d388504635d2f9d518c4d625",
"assets/assets/images/flower-g296759d65_1920.jpg": "978aca449b00efae4d9f9951c858df8f",
"assets/assets/images/template.png": "1d9b14894576293cee3e6bb336be712c",
"assets/assets/images/about.png": "96f6f3ecf93a428dac3a8209850361e5",
"assets/assets/images/purosottam.png": "61b18426bdba13fc826e623d2672aa6e",
"assets/assets/images/right.png": "9dd875e9c62f844b167745823ed10b29",
"assets/assets/images/shubham.png": "75d760845e4972bd3ee32d151758785d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
