/* Current-location directions. Source: existing named branches and verified map pins; no GPS collection. */
(() => {
  "use strict";
  const catalog = {
  "via": {
    "label": "VIA INN PRIME 札幌大通",
    "destination": "43.0574089,141.355892",
    "placeId": "",
    "kind": "point"
  },
  "gracery": {
    "label": "札幌格拉斯麗飯店",
    "destination": "43.0662987,141.3495618",
    "placeId": "",
    "kind": "point"
  },
  "lagent": {
    "label": "La’gent Stay 函館站前",
    "destination": "41.7745385,140.7271824",
    "placeId": "",
    "kind": "point"
  },
  "sapporo": {
    "label": "JR札幌站",
    "destination": "43.0686606,141.3507553",
    "placeId": "",
    "kind": "point"
  },
  "cts": {
    "label": "JR新千歲機場站",
    "destination": "42.7876478,141.6811348",
    "placeId": "",
    "kind": "point"
  },
  "ctsi": {
    "label": "新千歲機場國際線航廈",
    "destination": "42.7868038,141.6764565",
    "placeId": "ChIJn9qAvkEgdV8RoKqJpDVDN1E",
    "kind": "point"
  },
  "tpe": {
    "label": "桃園機場第一航廈周邊",
    "destination": "25.081705,121.2391126",
    "placeId": "ChIJX0AV-r-fQjQRl2OfIF72JRs",
    "kind": "point"
  },
  "tanuki": {
    "label": "狸小路商店街",
    "destination": "43.0572386,141.352677",
    "placeId": "",
    "kind": "point"
  },
  "otaru": {
    "label": "JR小樽站",
    "destination": "43.1976982,140.9936905",
    "placeId": "ChIJE9XByazhCl8RnT8UejiiXSA",
    "kind": "point"
  },
  "music": {
    "label": "小樽音樂盒堂",
    "destination": "43.1905288,141.0079732",
    "placeId": "ChIJB2IMXFrgCl8Rx-WS9YJOmbQ",
    "kind": "point"
  },
  "kitaichi": {
    "label": "北一硝子三號館",
    "destination": "43.1922675,141.007334",
    "placeId": "ChIJ___DnVrgCl8RruTc290c3p8",
    "kind": "point"
  },
  "letao": {
    "label": "LeTAO小樽本店",
    "destination": "43.191311,141.007433",
    "placeId": "",
    "kind": "point"
  },
  "canal": {
    "label": "小樽運河",
    "destination": "43.199041,141.0021176",
    "placeId": "ChIJ0UxVV2ThCl8RIZdpda0H7gQ",
    "kind": "point"
  },
  "mahoroba": {
    "label": "登別 Mahoroba 飯店",
    "destination": "42.4930624,141.1419064",
    "placeId": "",
    "kind": "point"
  },
  "jigoku": {
    "label": "登別地獄谷展望台",
    "destination": "42.4974278,141.146399",
    "placeId": "ChIJXyg2iMJmdV8RS6DrcMviU9A",
    "kind": "point"
  },
  "toya": {
    "label": "JR洞爺站",
    "destination": "42.5506149,140.7635604",
    "placeId": "",
    "kind": "point"
  },
  "hakodate": {
    "label": "JR函館站",
    "destination": "41.7732691,140.7276996",
    "placeId": "ChIJWVv9RZ_znl8RCNDfo9l-O1A",
    "kind": "point"
  },
  "market": {
    "label": "函館朝市",
    "destination": "41.7722914,140.7251981",
    "placeId": "ChIJ__8_-aHznl8RZ3sWVLjqLr8",
    "kind": "point"
  },
  "goryo": {
    "label": "五稜郭塔",
    "destination": "41.7946699,140.75402",
    "placeId": "",
    "kind": "point"
  },
  "goryopark": {
    "label": "五稜郭公園",
    "destination": "41.7968814,140.7561137",
    "placeId": "",
    "kind": "point"
  },
  "hachimanzaka": {
    "label": "八幡坂",
    "destination": "41.7639012,140.7118043",
    "placeId": "",
    "kind": "point"
  },
  "church": {
    "label": "函館正教會周邊",
    "destination": "41.7627913,140.7122004",
    "placeId": "",
    "kind": "point"
  },
  "ropebase": {
    "label": "函館山纜車山麓站",
    "destination": "41.7609168,140.7143123",
    "placeId": "ChIJ3y9gWwDznl8RQN0L-QFS-qY",
    "kind": "point"
  },
  "ropetop": {
    "label": "函館山纜車山麓站（先搭纜車上山）",
    "destination": "41.7609168,140.7143123",
    "placeId": "ChIJ3y9gWwDznl8RQN0L-QFS-qY",
    "kind": "point"
  },
  "kanemori": {
    "label": "金森紅磚倉庫",
    "destination": "41.7664927,140.7163777",
    "placeId": "ChIJo1BfeKjznl8R-KEsd6JreQ4",
    "kind": "point"
  },
  "mashu": {
    "label": "摩周丸紀念館",
    "destination": "41.7728908,140.7217883",
    "placeId": "",
    "kind": "point"
  },
  "shihachi": {
    "label": "Shihachi 鮮魚店｜北24條本店",
    "destination": "43.0907457,141.34622",
    "placeId": "",
    "kind": "point"
  },
  "tv": {
    "label": "札幌電視塔",
    "destination": "43.0611047,141.3564246",
    "placeId": "",
    "kind": "point"
  },
  "rei": {
    "label": "札幌東急REI飯店",
    "destination": "43.0549517,141.3511999",
    "placeId": "",
    "kind": "point"
  },
  "zoo": {
    "label": "旭山動物園",
    "destination": "43.7689713,142.4791319",
    "placeId": "",
    "kind": "point"
  },
  "falls": {
    "label": "白鬚瀑布觀景區",
    "destination": "43.4745585,142.6393176",
    "placeId": "",
    "kind": "point"
  },
  "pond": {
    "label": "白金青池",
    "destination": "43.4934738,142.6142144",
    "placeId": "ChIJbyoi3mLMDF8RnndLnx8YzQQ",
    "kind": "point"
  },
  "ningle": {
    "label": "森林精靈露臺",
    "destination": "43.3233257,142.3558861",
    "placeId": "",
    "kind": "point"
  },
  "maruyama": {
    "label": "圓山公園站",
    "destination": "43.0555951,141.3182692",
    "placeId": "",
    "kind": "point"
  },
  "jingu": {
    "label": "北海道神宮",
    "destination": "43.054333,141.3077928",
    "placeId": "ChIJk6jwxNwpC18RCNdmWzXijew",
    "kind": "point"
  },
  "toraya": {
    "label": "Toraya",
    "destination": "43.056442,141.315445",
    "placeId": "",
    "kind": "point"
  },
  "odori": {
    "label": "大通公園",
    "destination": "43.0607521,141.3544308",
    "placeId": "ChIJKdPFSFEpC18RnuAg7TaybA4",
    "kind": "point"
  },
  "white": {
    "label": "白色戀人公園｜替換加選",
    "destination": "43.0888751,141.2717042",
    "placeId": "",
    "kind": "point"
  },
  "tengu": {
    "label": "天狗山纜車山麓站",
    "destination": "43.1776081,140.9752401",
    "placeId": "",
    "kind": "point"
  },
  "food-01": {
    "label": "根室花丸壽司｜JR Tower Stellar Place 店",
    "destination": "根室花まる JRタワーステラプレイス店",
    "kind": "query"
  },
  "food-02": {
    "label": "奧芝商店｜站前創成寺",
    "destination": "奥芝商店 駅前創成寺",
    "kind": "query"
  },
  "food-03": {
    "label": "餃子製造所｜札幌站西店",
    "destination": "SAPPORO餃子製造所 札幌駅西店",
    "kind": "query"
  },
  "food-04": {
    "label": "札幌農學校｜酪農牛奶布丁",
    "destination": "札幌農学校 JR札幌駅店",
    "kind": "query"
  },
  "food-05": {
    "label": "SOUP CURRY KING｜中央店",
    "destination": "SOUP CURRY KING セントラル",
    "kind": "query"
  },
  "food-06": {
    "label": "蟹座 札幌",
    "destination": "かに食べ放題 蟹座札幌",
    "kind": "query"
  },
  "food-07": {
    "label": "KAGAYOI｜大通 BISSE",
    "destination": "耀い 札幌大通BISSE",
    "kind": "query"
  },
  "food-08": {
    "label": "THE SAKURA BUFFET",
    "destination": "THE SAKURA BUFFET 札幌 南4条西6丁目4-1",
    "kind": "query"
  },
  "food-09": {
    "label": "山岡家｜新薄野店",
    "destination": "ラーメン山岡家 新すすきの店",
    "kind": "query"
  },
  "food-10": {
    "label": "octafuzz｜布丁與咖啡",
    "destination": "octafuzz 南平岸",
    "kind": "query"
  },
  "food-11": {
    "label": "三角亭",
    "destination": "さんかく亭 小樽",
    "kind": "query"
  },
  "food-12": {
    "label": "Marusho水產",
    "destination": "マルショウ水産 小樽 三角市場",
    "kind": "query"
  },
  "food-13": {
    "label": "LeTAO小樽本店",
    "destination": "43.191311,141.007433",
    "placeId": "",
    "kind": "point"
  },
  "food-14": {
    "label": "Soup Curry Begirama",
    "destination": "Soup Curry Begirama 函館",
    "kind": "query"
  },
  "food-15": {
    "label": "函館味彩拉麵｜本店",
    "destination": "あじさい 本店 函館",
    "kind": "query"
  },
  "food-16": {
    "label": "小丑漢堡｜海灣地區本店",
    "destination": "ラッキーピエロ ベイエリア本店",
    "kind": "query"
  },
  "food-17": {
    "label": "Meguriya｜鹿肉料理",
    "destination": "めぐりや Meguriya 洞爺湖",
    "kind": "query"
  },
  "food-18": {
    "label": "札幌飛燕｜新千歲機場店",
    "destination": "札幌飛燕 新千歳空港",
    "kind": "query"
  },
  "food-19": {
    "label": "富良野薰衣草冰淇淋",
    "reason": "尚未指定店家，請先確認販售地點"
  },
  "food-20": {
    "label": "惠比壽食堂｜暫對應惠比壽屋食堂",
    "reason": "原記錄仍為暫對應，請先確認店名"
  },
  "food-21": {
    "label": "鐘樓咖啡｜原名稱保留",
    "reason": "原店名尚未唯一辨識"
  },
  "food-22": {
    "label": "札幌車站北口的小農會｜原名稱保留",
    "reason": "尚未辨識店家"
  },
  "extra-01": {
    "label": "小樽住吉神社",
    "destination": "住吉神社 小樽",
    "kind": "query"
  },
  "extra-02": {
    "label": "札幌諏訪神社",
    "destination": "札幌諏訪神社",
    "kind": "query"
  },
  "extra-03": {
    "label": "宮之森法蘭西斯教會冬季燈飾",
    "destination": "宮の森フランセス教会 札幌",
    "kind": "query"
  },
  "extra-04": {
    "label": "mont-bell Sapporo Factory／Factory Outlet",
    "destination": "モンベル サッポロファクトリー店",
    "kind": "query"
  },
  "extra-05": {
    "label": "Alpen Outdoors 札幌發寒旗艦店",
    "destination": "アルペンアウトドアーズ フラッグシップストア 札幌発寒店",
    "kind": "query"
  },
  "extra-06": {
    "label": "Alpen Outdoors 札幌月寒店",
    "destination": "アルペンアウトドアーズ 札幌月寒店",
    "kind": "query"
  },
  "extra-07": {
    "label": "mont-bell 其他門市備選",
    "reason": "尚未指定分店"
  },
  "spot-01": {
    "label": "大通公園",
    "destination": "43.0607521,141.3544308",
    "placeId": "ChIJKdPFSFEpC18RnuAg7TaybA4",
    "kind": "point"
  },
  "spot-02": {
    "label": "札幌電視塔",
    "destination": "43.0611047,141.3564246",
    "placeId": "",
    "kind": "point"
  },
  "spot-03": {
    "label": "北海道神宮",
    "destination": "43.054333,141.3077928",
    "placeId": "ChIJk6jwxNwpC18RCNdmWzXijew",
    "kind": "point"
  },
  "spot-04": {
    "label": "藻岩山",
    "destination": "もいわ山ロープウェイ 山麓駅 札幌",
    "kind": "query"
  },
  "spot-05": {
    "label": "薄野",
    "destination": "すすきの交差点 札幌",
    "kind": "query"
  },
  "spot-06": {
    "label": "二條市場",
    "destination": "二条市場 札幌",
    "kind": "query"
  },
  "spot-07": {
    "label": "白色戀人公園",
    "destination": "43.0888751,141.2717042",
    "placeId": "",
    "kind": "point"
  },
  "spot-08": {
    "label": "定山溪",
    "destination": "定山溪 札幌 北海道 日本",
    "kind": "area"
  },
  "spot-09": {
    "label": "小樽運河",
    "destination": "43.199041,141.0021176",
    "placeId": "ChIJ0UxVV2ThCl8RIZdpda0H7gQ",
    "kind": "point"
  },
  "spot-10": {
    "label": "堺町通",
    "destination": "小樽堺町通り商店街",
    "kind": "query"
  },
  "spot-11": {
    "label": "北一硝子",
    "destination": "43.1922675,141.007334",
    "placeId": "ChIJ___DnVrgCl8RruTc290c3p8",
    "kind": "point"
  },
  "spot-12": {
    "label": "小樽音樂盒堂",
    "destination": "43.1905288,141.0079732",
    "placeId": "ChIJB2IMXFrgCl8Rx-WS9YJOmbQ",
    "kind": "point"
  },
  "spot-13": {
    "label": "三角市場",
    "destination": "三角市場 小樽",
    "kind": "query"
  },
  "spot-14": {
    "label": "天狗山",
    "destination": "43.1776081,140.9752401",
    "placeId": "",
    "kind": "point"
  },
  "spot-15": {
    "label": "白金青池",
    "destination": "43.4934738,142.6142144",
    "placeId": "ChIJbyoi3mLMDF8RnndLnx8YzQQ",
    "kind": "point"
  },
  "spot-16": {
    "label": "白鬚瀑布",
    "destination": "43.4745585,142.6393176",
    "placeId": "",
    "kind": "point"
  },
  "spot-17": {
    "label": "四季彩之丘",
    "destination": "四季彩の丘 美瑛",
    "kind": "query"
  },
  "spot-18": {
    "label": "拼布之路",
    "destination": "拼布之路 美瑛・富良野・旭川 北海道 日本",
    "kind": "area"
  },
  "spot-19": {
    "label": "富田農場",
    "destination": "ファーム富田 中富良野",
    "kind": "query"
  },
  "spot-20": {
    "label": "富良野花田",
    "destination": "富良野花田 美瑛・富良野・旭川 北海道 日本",
    "kind": "area"
  },
  "spot-21": {
    "label": "旭山動物園",
    "destination": "43.7689713,142.4791319",
    "placeId": "",
    "kind": "point"
  },
  "spot-22": {
    "label": "登別地獄谷",
    "destination": "42.4974278,141.146399",
    "placeId": "ChIJXyg2iMJmdV8RS6DrcMviU9A",
    "kind": "point"
  },
  "spot-23": {
    "label": "大湯沼",
    "destination": "大湯沼 登別",
    "kind": "query"
  },
  "spot-24": {
    "label": "登別溫泉",
    "destination": "登別温泉",
    "kind": "area"
  },
  "spot-25": {
    "label": "洞爺湖",
    "destination": "洞爺湖温泉 湖畔遊歩道",
    "kind": "area"
  },
  "spot-26": {
    "label": "有珠山",
    "destination": "有珠山ロープウェイ 山麓駅",
    "kind": "query"
  },
  "spot-27": {
    "label": "昭和新山",
    "destination": "昭和新山 有珠郡",
    "kind": "query"
  },
  "spot-28": {
    "label": "洞爺湖溫泉",
    "destination": "洞爺湖温泉",
    "kind": "area"
  },
  "spot-29": {
    "label": "函館山纜車山麓站",
    "destination": "41.7609168,140.7143123",
    "placeId": "ChIJ3y9gWwDznl8RQN0L-QFS-qY",
    "kind": "point"
  },
  "spot-30": {
    "label": "五稜郭",
    "destination": "41.7946699,140.75402",
    "placeId": "",
    "kind": "point"
  },
  "spot-31": {
    "label": "函館朝市",
    "destination": "41.7722914,140.7251981",
    "placeId": "ChIJ__8_-aHznl8RZ3sWVLjqLr8",
    "kind": "point"
  },
  "spot-32": {
    "label": "金森紅磚倉庫",
    "destination": "41.7664927,140.7163777",
    "placeId": "ChIJo1BfeKjznl8R-KEsd6JreQ4",
    "kind": "point"
  },
  "spot-33": {
    "label": "八幡坂",
    "destination": "41.7639012,140.7118043",
    "placeId": "",
    "kind": "point"
  },
  "spot-34": {
    "label": "元町",
    "destination": "41.7627913,140.7122004",
    "placeId": "",
    "kind": "point"
  },
  "spot-35": {
    "label": "湯之川溫泉",
    "destination": "湯之川溫泉 函館・道南 北海道 日本",
    "kind": "area"
  },
  "spot-36": {
    "label": "大沼國定公園",
    "destination": "大沼公園駅 北海道",
    "kind": "query"
  },
  "spot-37": {
    "label": "松前／松前城",
    "destination": "松前城 北海道",
    "kind": "query"
  },
  "spot-38": {
    "label": "網走",
    "destination": "網走 道東・知床 北海道 日本",
    "kind": "area"
  },
  "spot-39": {
    "label": "知床五湖",
    "destination": "知床五湖フィールドハウス",
    "kind": "query"
  },
  "spot-40": {
    "label": "知床峠",
    "destination": "知床峠 道東・知床 北海道 日本",
    "kind": "area"
  },
  "spot-41": {
    "label": "Oshinkoshin 雙美瀑布",
    "destination": "オシンコシンの滝 北海道",
    "kind": "query"
  },
  "spot-42": {
    "label": "摩周湖",
    "destination": "摩周湖 道東・知床 北海道 日本",
    "kind": "area"
  },
  "spot-43": {
    "label": "屈斜路湖",
    "destination": "屈斜路湖 道東・知床 北海道 日本",
    "kind": "area"
  },
  "spot-44": {
    "label": "阿寒湖",
    "destination": "阿寒湖 道東・知床 北海道 日本",
    "kind": "area"
  },
  "spot-45": {
    "label": "釧路濕原",
    "destination": "釧路濕原 道東・知床 北海道 日本",
    "kind": "area"
  },
  "spot-46": {
    "label": "支笏湖溫泉／遊客中心周邊",
    "destination": "42.7727487,141.4041342",
    "kind": "point"
  },
  "spot-47": {
    "label": "二世谷",
    "destination": "二世谷 其他區域與季節圖補充 北海道 日本",
    "kind": "area"
  },
  "spot-48": {
    "label": "大雪山",
    "destination": "大雪山 其他區域與季節圖補充 北海道 日本",
    "kind": "area"
  },
  "spot-49": {
    "label": "旭岳",
    "destination": "旭岳 其他區域與季節圖補充 北海道 日本",
    "kind": "area"
  },
  "spot-50": {
    "label": "層雲峽",
    "destination": "層雲峽 其他區域與季節圖補充 北海道 日本",
    "kind": "area"
  },
  "tour-sunagawa": {
    "label": "砂川休息站",
    "reason": "休息站方向與停靠設施待導遊確認"
  },
  "tour-furano-rest": {
    "label": "富良野花園休息區",
    "reason": "確切設施待導遊通知"
  },
  "tour-ningle": {
    "label": "森林精靈露臺｜Ningle Terrace",
    "destination": "43.3233257,142.3558861",
    "placeId": "",
    "kind": "point"
  },
  "spot-hokudai": {
    "label": "北海道大學｜札幌校區",
    "destination": "北海道大学 正門 札幌",
    "kind": "query"
  },
  "food-toraya": {
    "label": "Toraya｜鰻魚與季節料理",
    "destination": "43.056442,141.315445",
    "placeId": "",
    "kind": "point"
  },
  "activity-munich": {
    "label": "聖誕市集・大通公園2丁目",
    "destination": "大通公園2丁目 札幌",
    "kind": "query"
  },
  "tour-iwamizawa": {
    "label": "岩見澤休息站",
    "reason": "休息站方向與停靠設施待導遊確認"
  },
  "shikotsu": {
    "label": "支笏湖溫泉／遊客中心周邊",
    "destination": "42.7727487,141.4041342",
    "kind": "point"
  }
};
  const aliases = {
  "VIA INN PRIME 札幌大通": "via",
  "札幌格拉斯麗飯店": "gracery",
  "La’gent Stay 函館站前": "lagent",
  "JR札幌站": "sapporo",
  "JR新千歲機場站": "cts",
  "新千歲機場國際線航廈": "ctsi",
  "桃園機場第一航廈周邊": "tpe",
  "狸小路商店街": "tanuki",
  "JR小樽站": "otaru",
  "小樽音樂盒堂本館": "spot-12",
  "北一硝子三號館": "kitaichi",
  "LeTAO 小樽本店": "letao",
  "小樽運河": "spot-09",
  "登別 Mahoroba 飯店": "mahoroba",
  "登別地獄谷展望台": "jigoku",
  "JR洞爺站": "toya",
  "JR函館站": "hakodate",
  "函館朝市": "spot-31",
  "五稜郭塔入口": "goryo",
  "五稜郭公園": "goryopark",
  "八幡坂": "spot-33",
  "函館正教會周邊": "church",
  "函館山纜車山麓站": "ropebase",
  "函館山纜車山頂站": "ropetop",
  "金森紅磚倉庫": "spot-32",
  "摩周丸紀念館": "mashu",
  "Shihachi 鮮魚店｜北24條本店": "shihachi",
  "札幌電視塔集合候選": "tv",
  "札幌東急REI飯店集合候選": "rei",
  "旭山動物園": "spot-21",
  "白鬚瀑布觀景區": "falls",
  "白金青池": "spot-15",
  "森林精靈露臺": "ningle",
  "圓山公園站": "maruyama",
  "北海道神宮": "spot-03",
  "Toraya｜鰻魚與季節料理": "toraya",
  "大通公園": "spot-01",
  "白色戀人公園｜替換加選": "white",
  "天狗山纜車山麓／巴士下車站周邊": "tengu",
  "根室花丸壽司｜JR Tower Stellar Place 店": "food-01",
  "奧芝商店｜站前創成寺": "food-02",
  "餃子製造所｜札幌站西店": "food-03",
  "札幌農學校｜酪農牛奶布丁": "food-04",
  "SOUP CURRY KING｜中央店": "food-05",
  "蟹座 札幌": "food-06",
  "KAGAYOI｜大通 BISSE": "food-07",
  "THE SAKURA BUFFET": "food-08",
  "山岡家｜新薄野店": "food-09",
  "octafuzz｜布丁與咖啡": "food-10",
  "三角亭": "food-11",
  "Marusho 水產｜小樽三角市場店": "food-12",
  "LeTAO 本店｜起司蛋糕與店內小蛋糕": "food-13",
  "Soup Curry Begirama": "food-14",
  "函館味彩拉麵｜本店": "food-15",
  "小丑漢堡｜海灣地區本店": "food-16",
  "Meguriya｜鹿肉料理": "food-17",
  "札幌飛燕｜新千歲機場店": "food-18",
  "富良野薰衣草冰淇淋": "food-19",
  "惠比壽食堂｜暫對應惠比壽屋食堂": "food-20",
  "鐘樓咖啡｜原名稱保留": "food-21",
  "札幌車站北口的小農會｜原名稱保留": "food-22",
  "小樽住吉神社": "extra-01",
  "札幌諏訪神社": "extra-02",
  "宮之森法蘭西斯教會冬季燈飾": "extra-03",
  "mont-bell Sapporo Factory／Factory Outlet": "extra-04",
  "Alpen Outdoors 札幌發寒旗艦店": "extra-05",
  "Alpen Outdoors 札幌月寒店": "extra-06",
  "mont-bell 其他門市備選": "extra-07",
  "札幌電視塔": "spot-02",
  "藻岩山": "spot-04",
  "薄野": "spot-05",
  "二條市場": "spot-06",
  "白色戀人公園": "spot-07",
  "定山溪": "spot-08",
  "堺町通": "spot-10",
  "北一硝子": "spot-11",
  "小樽音樂盒堂": "spot-12",
  "三角市場": "spot-13",
  "天狗山": "spot-14",
  "白鬚瀑布": "spot-16",
  "四季彩之丘": "spot-17",
  "拼布之路": "spot-18",
  "富田農場": "spot-19",
  "富良野花田": "spot-20",
  "登別地獄谷": "spot-22",
  "大湯沼": "spot-23",
  "登別溫泉": "spot-24",
  "洞爺湖": "spot-25",
  "有珠山": "spot-26",
  "昭和新山": "spot-27",
  "洞爺湖溫泉": "spot-28",
  "函館山": "spot-29",
  "五稜郭": "spot-30",
  "元町": "spot-34",
  "湯之川溫泉": "spot-35",
  "大沼國定公園": "spot-36",
  "松前／松前城": "spot-37",
  "網走": "spot-38",
  "知床五湖": "spot-39",
  "知床峠": "spot-40",
  "Oshinkoshin 雙美瀑布": "spot-41",
  "摩周湖": "spot-42",
  "屈斜路湖": "spot-43",
  "阿寒湖": "spot-44",
  "釧路濕原": "spot-45",
  "支笏湖": "spot-46",
  "二世谷": "spot-47",
  "大雪山": "spot-48",
  "旭岳": "spot-49",
  "層雲峽": "spot-50",
  "砂川休息站": "tour-sunagawa",
  "富良野花園休息區": "tour-furano-rest",
  "森林精靈露臺｜Ningle Terrace": "tour-ningle",
  "北海道大學｜札幌校區": "spot-hokudai",
  "必排｜Toraya｜鰻魚與季節料理": "food-toraya",
  "札幌慕尼黑聖誕市集": "activity-munich",
  "北海道大學": "spot-hokudai",
  "北海道大學札幌校區": "spot-hokudai",
  "五稜郭塔／公園": "spot-30",
  "五稜郭塔展望台": "spot-30",
  "函館山纜車": "spot-29",
  "函館山纜車來回票": "spot-29",
  "小樽運河／堺町通": "spot-09",
  "八幡坂／元町": "spot-33",
  "洞爺湖湖畔": "spot-25",
  "小樽天狗山｜12/6下午主線": "spot-14",
  "Toraya": "food-toraya",
  "白金青池／白鬚瀑布": "spot-15",
  "支笏湖溫泉／遊客中心周邊": "shikotsu"
};
  const events = {
  "5": {
    "0": [
      "tpe"
    ],
    "2": [
      "ctsi"
    ],
    "4": [
      "cts"
    ],
    "5": [
      "sapporo"
    ],
    "6": [
      "via"
    ],
    "7": [
      "tanuki"
    ],
    "8": [
      "activity-munich"
    ],
    "9": [
      "activity-munich"
    ],
    "10": [
      "via"
    ]
  },
  "6": {
    "1": [
      "otaru"
    ],
    "2": [
      "spot-10",
      "kitaichi",
      "music"
    ],
    "3": [
      "food-11",
      "food-12",
      "letao"
    ],
    "4": [
      "canal"
    ],
    "5": [
      "tengu"
    ],
    "6": [
      "tengu"
    ],
    "7": [
      "otaru"
    ],
    "8": [
      "sapporo"
    ]
  },
  "7": {
    "2": [
      "shikotsu"
    ],
    "3": [
      "shikotsu"
    ],
    "4": [
      "mahoroba"
    ],
    "5": [
      "jigoku"
    ],
    "6": [
      "mahoroba"
    ]
  },
  "8": {
    "1": [
      "jigoku"
    ],
    "3": [
      "spot-25"
    ],
    "4": [
      "spot-25"
    ],
    "6": [
      "toya"
    ],
    "7": [
      "hakodate"
    ]
  },
  "9": {
    "0": [
      "market"
    ],
    "1": [
      "goryopark",
      "goryo"
    ],
    "3": [
      "hachimanzaka",
      "church"
    ],
    "4": [
      "ropebase"
    ],
    "5": [
      "ropebase"
    ],
    "6": [
      "ropebase"
    ],
    "7": [
      "ropebase"
    ],
    "9": [
      "lagent"
    ]
  },
  "10": {
    "0": [
      "lagent"
    ],
    "1": [
      "lagent"
    ],
    "2": [
      "kanemori",
      "mashu",
      "market"
    ],
    "3": [
      "lagent"
    ],
    "4": [
      "hakodate"
    ],
    "5": [
      "sapporo"
    ],
    "6": [
      "gracery"
    ],
    "7": [
      "shihachi"
    ],
    "8": [
      "gracery"
    ]
  },
  "11": {
    "0": [
      "rei",
      "tv"
    ],
    "1": [
      "rei",
      "tv"
    ],
    "2": [
      "tour-sunagawa"
    ],
    "3": [
      "zoo"
    ],
    "4": [
      "falls"
    ],
    "5": [
      "pond"
    ],
    "6": [
      "tour-furano-rest"
    ],
    "7": [
      "ningle"
    ],
    "8": [
      "tour-iwamizawa"
    ],
    "9": [
      "tv",
      "rei"
    ],
    "10": [
      "gracery"
    ]
  },
  "12": {
    "0": [
      "maruyama"
    ],
    "1": [
      "jingu"
    ],
    "2": [
      "maruyama"
    ],
    "3": [
      "odori"
    ],
    "5": [
      "activity-munich"
    ],
    "6": [
      "toraya"
    ],
    "7": [
      "toraya"
    ],
    "8": [
      "gracery"
    ]
  },
  "13": {
    "1": [
      "gracery"
    ],
    "2": [
      "gracery"
    ],
    "3": [
      "cts"
    ],
    "4": [
      "ctsi"
    ],
    "6": [
      "ctsi"
    ],
    "7": [
      "tpe"
    ]
  }
};
  const sightGroups = {"spot-09": ["canal", "spot-10"], "spot-30": ["goryo", "goryopark"], "spot-33": ["hachimanzaka", "church"], "spot-15": ["pond", "falls"]};
  const plane = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m21 3-7 18-4-7-7-4 18-7Z"/><path d="m10 14 6-6"/></svg>';
  const normalize = text => text.replace(/[\s・｜|／/、，：:]/g,'').toLowerCase();
  const lookup = new Map(Object.entries(aliases).map(([name,key])=>[normalize(name),key]));
  function directions(entry) {
    // Omit origin: Google Maps resolves the device's current location after permission.
    // No travelmode override: the traveler can choose walking, public transport or driving.
    const params = new URLSearchParams({api:'1',destination:entry.destination});
    if(entry.placeId)params.set('destination_place_id',entry.placeId);
    return 'https://www.google.com/maps/dir/?'+params.toString();
  }
  function button(key,compact) {
    const entry=catalog[key];if(!entry)return null;
    const el=document.createElement(entry.destination?'a':'span');
    el.className='location-flight'+(entry.destination?'':' is-unresolved');
    el.innerHTML=plane;
    const label=document.createElement('span');
    label.textContent=entry.destination?(compact?'導航':entry.label):'地點待確認';el.appendChild(label);
    if(entry.destination){
      el.href=directions(entry);el.target='_blank';el.rel='noopener noreferrer';
      el.setAttribute('aria-label','從目前位置導航至'+entry.label+(entry.kind==='area'?'（區域定位，請確認入口）':''));
      el.title='從目前位置前往 '+entry.label+(entry.kind==='area'?'；區域定位，請在Google Maps確認入口':'');
    }else{
      el.setAttribute('aria-disabled','true');el.title=entry.reason;el.setAttribute('aria-label',entry.label+'：'+entry.reason);
    }
    return el;
  }
  function attach(host,keys,heading) {
    if(host.querySelector(':scope > .location-flight-row'))return;
    const row=document.createElement('div');row.className='location-flight-row';
    keys.forEach(key=>{const el=button(key,keys.length===1);if(el)row.appendChild(el);});
    if(!row.childElementCount)return;
    if(keys.some(key=>catalog[key]?.kind==='area')){
      const note=document.createElement('small');note.className='flight-area-note';note.textContent='區域定位，請在地圖確認入口';row.appendChild(note);
    }
    if(heading)heading.insertAdjacentElement('afterend',row);else host.appendChild(row);
  }
  function refresh() {
    document.querySelectorAll('.candidate-card').forEach(card=>{
      const heading=card.querySelector('h4');if(!heading)return;
      const key=card.dataset.candidateId||lookup.get(normalize(heading.textContent));if(key)attach(card,[key],heading);
    });
    document.querySelectorAll('#sight-collections tbody tr').forEach(tr=>{
      const cell=tr.querySelector('td'),heading=cell?.querySelector('strong');if(!heading)return;
      const key=lookup.get(normalize(heading.textContent));if(key)attach(cell,[key]);
    });
    const selected=document.querySelector('#date-tabs [aria-selected="true"]');
    if(selected){
      const date=Number(selected.id.slice(4))+5;
      document.querySelectorAll('#view-plan .timeline-item').forEach((li,index)=>{
        const keys=events[date]?.[index];if(keys)attach(li.lastElementChild,keys);
      });
    }
    document.querySelectorAll('.map-stop-body').forEach(card=>{
      const h=card.querySelector('h4');if(!h)return;const key=lookup.get(normalize(h.textContent));
      if(key){attach(card,[key],h);card.querySelectorAll('.map-stop-links a').forEach(a=>{if(a.textContent.startsWith('從目前位置出發'))a.remove();});}
    });
    document.querySelectorAll('.sight-ticket').forEach(card=>{
      const h=card.querySelector('h4'),key=h&&lookup.get(normalize(h.textContent));if(key)attach(card,[key],h);
    });
    if(document.body.dataset.page==='sights'){
      document.querySelectorAll('main article.card[id],main section#tenguyama').forEach(card=>{
        const id=card.id,key=id==='christmas'?'activity-munich':id==='tenguyama'?'spot-14':id;
        if(catalog[key])attach(card,sightGroups[id]||[key],card.querySelector('h2'));
      });
    }
  }
  refresh();
  window.addEventListener('hokkaido-day-change',()=>queueMicrotask(refresh));
  const help=document.createElement('p');help.className='location-flight-help';
  help.innerHTML=plane+'<span>點小飛機，從目前位置出發；請允許 Google Maps 使用定位。無法定位時可自行輸入出發點。</span>';
  const target=document.querySelector('body.atlas-top > .atlas-shell')||document.querySelector('.travel-mast')||document.querySelector('main h1');
  if(target&&document.querySelector('.location-flight'))target.insertAdjacentElement('afterend',help);
})();
