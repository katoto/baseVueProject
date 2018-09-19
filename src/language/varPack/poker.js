let en = {
    a1: 'Randomize the Client Seed',
    a2: 'Client Seed',
    a3: 'The Hash of Random Number',
    a4: 'Randomize',
    a5: 'Lock',
    a6: 'Set Random Number of This Round',
    a7: 'Check Random Number of Last Round',
    a8: 'Unlock',
    a9: 'Random Number',
    a10: 'Result Checking',
    a11: 'A string of characters provided to you before placing a bet',
    a12: 'One and only characters correspond to the random number',
    a13: 'A unique string of characters generated by the system before placing a bet',
    a14: '<i>Up to</i> {0} <i>{1}</i>',
    a15: 'x{0}',
    a16: 'Delete',
    a17: 'Pay',
    a18: 'Transparency&nbsp;Checking',
    a19: 'Recent&nbsp;Bets',
    a20: 'My&nbsp;Bets',
    a21: 'User',
    a22: 'Bet',
    a23: 'Win',
    a24: 'Try Again',
    a25: 'You Win',
    a26: 'Open',
    a27: 'Draw History',
    a28: 'Client Seed',
    a29: 'Random Number',
    a30: 'Bet Hash',
    a31: 'Decimal Number',
    a32: 'The hash of random number shows below',
    a33: 'Enter client seed ( within 128 characters)',
    a34: 'Compose a card',
    a35: 'Insufficient Balance',
    a36: 'Already reached to the upper limit',
    a37: 'RED',
    a38: 'BLACK',
    a39: 'LuckyPoker',
    a40: 'Play LuckyPoker',
    a41: 'By playing on Coinsprize, you trust the 100% randomness of our games. And the randomness can be checked through "provably fair" tool which protects the game statistics not be modified by anyone, users can check it at any time.',
    a42: '',
    a43: '',
    a44: 'Though the relevant techniques are complicate, the "provably fair" tool can be explained in a simple manner:',
    a45: '1. Client Seed: a string of characters provided to you before placing a bet.',
    a46: '2. Random Number: a unique string of characters generated by the system before placing a bet.',
    a47: '3. The Hash of Random Number: one and only characters correspond to the random number.',
    a48: 'How the provably fair system applies these three components?',
    a49: 'First, the system follows two rules:',
    a50: '1. The platform has no idea about client seed before user placing a bet.',
    a51: '2. Each random number has a corresponding hash, these two statistics will be revealed after the result comes out. User can only see the hash before placing the bet.',
    a52: 'Reasons for making rules：',
    a53: 'Since Coinsprize has no way to know client seed in advance, the platform cannot cheat. Before revealing the result, only the hash of random number is seeable, so that you can check transparency of result later.  ',
    a54: 'How does it works?',
    a55: "After placing a bet, user's browser will send the client seed to Coinsprize server. And the system will calculate a bet hash according to client seed and the random number through SHA-512 cryptographic algorithm.",
    a56: 'Then use the first 3 characters of the bet hash to generate the outcome of your bet. The system does this by converting the first 5 characters of the bet hash from base 16 (hexadecimal) to base 10 (decimal).',
    a57: 'The decimal number is used to calculate the bet result through the modulo 54 operation, and 0-53 correspond to 54 types of the playing card.',
    a58: 'How to verify the random number?',
    a59: 'The random number will be shown when bet result comes out.',
    a60: 'Users can use any free SHA-256 generator to verify the hash of random number.',
    a61: 'Note: If two hashes you got before and after placing the bet are the same, it means the bet result is unmodified and 100% random.',
    a62: 'No record yet',
    a63: 'If this number is over 4,050 then the next 3 characters would be used for modulo operation.',
    a64: 'Please wait',
    a65: 'Please choose element(s) on the left',
    a66: 'Please choose element(s) below',
    a67: '',
    a68: '',
    a69: '',
    a70: '',
    a71: '',
    a72: '',
    a73: '',
    a74: '',
    a75: '',
    a76: '',
    a77: '',
    a78: '',
    a79: '',
    a80: '',
    a81: '',
    a82: '',
    a83: '',
    a84: '',
    a85: '',
    a86: '',
    a87: '',
    a88: '',
    a89: '',
    a90: '',
    a91: '',
    a92: '',
    a93: '',
    a94: '',
    a95: '',
    a96: '',
    a97: '',
    a98: '',
    a99: '',
    a100: ''
}

let zhCn = {
    a1: '自定义开奖随机数',
    a2: '客户端种子',
    a3: '随机数hash值',
    a4: '随机',
    a5: '锁定',
    a6: '本轮随机数设置',
    a7: '上轮随机数校验',
    a8: '解锁',
    a9: '平台随机数',
    a10: '查验',
    a11: '您在下注前提供的一串字符',
    a12: '对应随机数的一个哈希字符串',
    a13: '在您下注之前由平台生成的唯一字符串',
    a14: '<i>最高可中</i>  {0} <i>{1}</i>',
    a15: '{0}倍',
    a16: '清空',
    a17: '确认下注',
    a18: '公平性验证',
    a19: '投注流水',
    a20: '只看自己',
    a21: '玩家',
    a22: '投注',
    a23: '结果',
    a24: '请再接再厉',
    a25: '恭喜中奖',
    a26: '开牌',
    a27: '历史开奖',
    a28: '请输入客户端种子',
    a29: '请输入平台随机数',
    a30: '合成随机数',
    a31: '生成十进制数',
    a32: '下方将展示平台随机数对应的hash值',
    a33: '请输入128位以内字符客户端种子',
    a34: '请选择您认为会开出的扑克牌选项',
    a35: '账户余额不足',
    a36: '当前选项已超过投注上限',
    a37: '红',
    a38: '黑',
    a39: '幸运扑克',
    a40: '幸运扑克怎么玩',
    a41: '当你在Coinsprize平台上玩游戏时，你相信游戏的结果是随机的100%。',
    a42: '我们将使用“可证明公平”工具来确保我们的游戏的结果/结果是100%（完全）随机。',
    a43: '这个工具使得我们不可能在任何时候改变结果，并且所有玩家都可以使用独立的服务来检查或确认任何结果是否确实是随机的。',
    a44: '技术虽复杂，但概念很简单。这个“可证明公平”系统共三个主要组成部分。',
    a45: '1. 客户端种子：在提供赌注之前提供的字符串。',
    a46: '2. 平台随机数：平台在你下注之前产生的独特的字符串',
    a47: '3. 随机数hash值：与平台随机数对应的唯一哈希字符串',
    a48: '可证明公平系统如何使用这三个组件？',
    a49: '首先，系统执行两个规则',
    a50: '1. 平台在你下注之前不会知道客户的种子。',
    a51: '2. 在你下注之前，你只会看到随机数hash值。这个hash值与我们的随机数一一对应，直到系统产生结果才会公布最终的平台随机数。',
    a52: '设定规则的原因',
    a53: '该工具阻止了Coinsprize了解您的客户种子，以便Coinsprize无法通过更改您的押注结果进行欺骗。该工具在计算结果之前与您共享随机数HASH值，以便您以后能够验证结果是随机的',
    a54: '它是如何工作的',
    a55: '当你下注时，你的浏览器然后将你的客户端种子发送给Coinsprize服务器。然后我们使用你的客户端种子和我们的平台随机数来计算出一个合成随机数。用于此次合成随机数的算法是SHA-512加密算法。',
    a56: '然后，系统使用合成随机数的前3个字符从十六进制转换为十进制来生成下注的结果。',
    a57: '该十进制数通过模54运算计算出最终开牌结果，0-53分别对应扑克牌中的54种牌型',
    a58: '您如何验证随机数',
    a59: '当Coinsprize显示您的投注结果时，它还会同时显示平台随机数。',
    a60: '然后，您可以在任意网站使用 免费的SHA-256生成器 确认平台随机数的哈希值与您下注前显示给您的随机数hash值相同。',
    a61: '注：在您下注之前显示随机数hash值，如果游戏的结果是100％随机的（即，赌场在任何时候都没有改变结果），则生成的合成随机数必须匹配。',
    a62: '没有数据',
    a63: '如果选出的数字大于数字大于4050的话依次取下一个3位，然后这个3位数参与取模运算。',
    a64: '开奖中',
    a65: '请在左侧选择您认为会开出的选项',
    a66: '请在下方选择您认为会开出的选项',
    a67: '',
    a68: '',
    a69: '',
    a70: '',
    a71: '',
    a72: '',
    a73: '',
    a74: '',
    a75: '',
    a76: '',
    a77: '',
    a78: '',
    a79: '',
    a80: '',
    a81: '',
    a82: '',
    a83: '',
    a84: '',
    a85: '',
    a86: '',
    a87: '',
    a88: '',
    a89: '',
    a90: '',
    a91: '',
    a92: '',
    a93: '',
    a94: '',
    a95: '',
    a96: '',
    a97: '',
    a98: '',
    a99: '',
    a100: ''
}

let zhTw = {
    a1: '自定義開獎隨機數',
    a2: '客戶端種子',
    a3: '隨機數hash值',
    a4: '隨機',
    a5: '鎖定',
    a6: '本輪隨機數設置',
    a7: '上輪隨機數校驗',
    a8: '解鎖',
    a9: '平臺隨機數',
    a10: '查驗',
    a11: '您在下註前提供的一串字符',
    a12: '對應隨機數的一個哈希字符串',
    a13: '在您下註之前由平臺生成的唯一字符串',
    a14: '<i>最高可中</i>  {0} <i>{1}</i>',
    a15: '{0}倍',
    a16: '清空',
    a17: '確認下註',
    a18: '公平性驗證',
    a19: '投註流水',
    a20: '只看自己',
    a21: '玩家',
    a22: '投註',
    a23: '結果',
    a24: '請再接再厲',
    a25: '恭喜中獎',
    a26: '開牌',
    a27: '歷史開獎',
    a28: '請輸入客戶端種子',
    a29: '請輸入平臺隨機數',
    a30: '合成隨機數',
    a31: '生成十進制數',
    a32: '下方將展示平臺隨機數對應的hash值',
    a33: '請輸入128位以內字符客戶端種子',
    a34: '請選擇您認為會開出的撲克牌選項',
    a35: '賬戶余額不足',
    a36: '當前選項已超過投註上限',
    a37: '紅',
    a38: '黑',
    a39: '幸運撲克',
    a40: '幸運撲克怎麽玩',
    a41: '當妳在Coinsprize平臺上玩遊戲時，妳相信遊戲的結果是隨機的100%。',
    a42: '我們將使用“可證明公平”工具來確保我們的遊戲的結果/結果是100%（完全）隨機。',
    a43: '這個工具使得我們不可能在任何時候改變結果，並且所有玩家都可以使用獨立的服務來檢查或確認任何結果是否確實是隨機的。',
    a44: '技術雖復雜，但概念很簡單。這個“可證明公平”系統共三個主要組成部分。',
    a45: '1. 客戶端種子：在提供賭註之前提供的字符串。',
    a46: '2. 平臺隨機數：平臺在妳下註之前產生的獨特的字符串',
    a47: '3. 隨機數hash值：與平臺隨機數對應的唯一哈希字符串',
    a48: '可證明公平系統如何使用這三個組件？',
    a49: '首先，系統執行兩個規則',
    a50: '1. 平臺在妳下註之前不會知道客戶的種子。',
    a51: '2. 在妳下註之前，妳只會看到隨機數hash值。這個hash值與我們的隨機數一一對應，直到系統產生結果才會公布最終的平臺隨機數。',
    a52: '設定規則的原因',
    a53: '該工具阻止了Coinsprize了解您的客戶種子，以便Coinsprize無法通過更改您的押註結果進行欺騙。該工具在計算結果之前與您共享隨機數HASH值，以便您以後能夠驗證結果是隨機的',
    a54: '它是如何工作的',
    a55: '當妳下註時，妳的瀏覽器然後將妳的客戶端種子發送給Coinsprize服務器。然後我們使用妳的客戶端種子和我們的平臺隨機數來計算出一個合成隨機數。用於此次合成隨機數的算法是SHA-512加密算法。',
    a56: '然後，系統使用合成隨機數的前3個字符從十六進制轉換為十進制來生成下註的結果',
    a57: '該十進制數通過模54運算計算出最終開牌結果，0-53分別對應撲克牌中的54種牌型',
    a58: '您如何驗證隨機數',
    a59: '當Coinsprize顯示您的投註結果時，它還會同時顯示平臺隨機數。',
    a60: '然後，您可以在任意網站使用 免費的SHA-256生成器 確認平臺隨機數的哈希值與您下註前顯示給您的隨機數hash值相同。',
    a61: '註：在您下註之前顯示隨機數hash值，如果遊戲的結果是100％隨機的（即，賭場在任何時候都沒有改變結果），則生成的合成隨機數必須匹配。',
    a62: '沒有數據',
    a63: '如果選出的數字大於數字大於4050的話依次取下一個3位，然後這個3位數參與取模運算。',
    a64: '開獎中',
    a65: '請在左側選擇您認為會開出的選項',
    a66: '請在下方選擇您認為會開出的選項',
    a67: '',
    a68: '',
    a69: '',
    a70: '',
    a71: '',
    a72: '',
    a73: '',
    a74: '',
    a75: '',
    a76: '',
    a77: '',
    a78: '',
    a79: '',
    a80: '',
    a81: '',
    a82: '',
    a83: '',
    a84: '',
    a85: '',
    a86: '',
    a87: '',
    a88: '',
    a89: '',
    a90: '',
    a91: '',
    a92: '',
    a93: '',
    a94: '',
    a95: '',
    a96: '',
    a97: '',
    a98: '',
    a99: '',
    a100: ''
}

// 组件内运用直接变量访问 $lang.demo.a1 会根据页面当前环境获取词条

export default { en, zhCn, zhTw }
