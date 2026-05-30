/*
 @name : 锅巴汉化 - Web汉化插件
 @author : 麦子、JAR、小蓝、好阳光的小锅巴、人民當家做主
 @version : V0.6.1 - 2026-5-26
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737
*/

// ============================================================
// 匹配配置
// ============================================================
// ignoreCase: true   忽略大小写(Gold/gold/GOLD都匹配), false=区分大小写
// trimSpaces: true   忽略首尾空格(" gold "匹配"gold"), false=保留空格
//
// 影响范围：
//   ✅ cnItems 精确匹配(字符串值+数组值)
//   ✅ cnItems 分类索引({{分类名}}/{{分类名*}}/{{分类名*|sep|join}})
//   ✅ cnResourceNames 名词翻译
//   ✅ cnPrefix / cnPostfix 前后缀
//   ✅ cnRegReplace / 排除规则 / 模板正则(通过 addIgnoreCaseFlag / cnConfig.ignoreCase 控制)
var cnConfig = {
    ignoreCase: true,
    trimSpaces: true,
};

// ============================================================
// cnCategoriesList — 分类名称注册表（供编辑器工具使用）
// ============================================================
// 分类数据由 cnItems 中的数组值 ["译文", "分类名"] 自动构建。
// 此列表仅声明有哪些分类，以便编辑器提供分类选择/管理功能。
var cnCategoriesList = [
    "resource",
    "item",
    "character",
    "turtle",
    "tool",
    "headgear",
    "footwear",
    "accessory",
    "sigil",
    "relic",
    "consumable",
    "effect",
    "music",
    "achievement",
];

// ============================================================
// cnItems — 主要翻译词条
// ============================================================
// 用法：
//   "原文": "译文"                         → 精确静态匹配
//   "原文": ["译文", "分类名"]               → 静态匹配 + 自动加入分类
//   "Cost: {{0}}": "消耗：{{0}}"            → 模板匹配 ({{0}} 匹配任意值)
//   "{{resource}}: {{%d}}": "{{resource}}：{{%d}}"  → 分类模板 + 数字验证
//   "{{分类名*}}": 仅在该分类查找，找不到保留原文
//   "{{分类名*|sep|join}}": 分类限定列表解析
//   "{{*}}": 通用列表，逐项递归翻译
//   "{{*|sep|join}}": 自定义分隔符/连接词的列表
// ============================================================
var cnItems = {
    // ===== UI 文本 =====
    "Stamina Bar": "体力条",
    "Light Radius": "光照范围",
    "Power": "力量",
    "Layers": "岩层",
    "Restore Cells": "恢复单元",
    "Regeneration": "恢复",
    "Uh oh!": "哎呀！",
    "???" : "？？？",
    "Resource": "资源",
    "Unknown": "未知",
    "Start": "开始",
    "Stop": "停止",
    "End": "结束",
    "Cancel": "取消",
    "Turn On": "开启",
    "Turn Off": "关闭",
    "Craft": "制作",
    "Repair": "修复",
    "Shop": "商店",
    "Back": "返回",
    "Equip": "装备",
    "Unequip": "卸下",
    "Sell": "出售",
    "Buy": "购买",
    "Close": "关闭",
    "Dig": "挖掘",
    "Save": "保存",
    "Load": "读取",
    "Export": "导出",
    "Import": "导入",
    "Music": "音乐",
    "Sound": "音效",
    "Volume": "音量",
    "Settings": "设置",
    "Statistics": "统计",
    "Achievements": "成就",
    "Items": "物品",
    "Backpack": "背包",
    "Crafting": "制作",
    "Upgrades": "升级",
    "Turtles": "乌龟",
    "Help": "帮助",
    "Health": "生命",
    "Stamina": "体力",
    "Stamina:": "体力：",
    "Depth: ": "深度：",
    "Light:": "光照：",
    "Power:": "力量：",
    "Effect:": "效果：",
    "Layer: ": "岩层：",
    "Hardness: ": "硬度：",
    "Charges:": "充能：",
    "Quantity:": "数量：",
    "Type:": "类型：",
    "Status:": "状态：",
    "Digs:": "挖掘数：",
    "Damage": "伤害",
    "Armor": "护甲",
    "Speed": "速度",
    "Strength": "力量",
    "Defense": "防御",
    "Durability": "耐久度",
    "Level": "等级",
    "Experience": "经验",
    "Depth": "深度",
    "Surface": "地表",
    "Inventory": "背包",
    "Requires": "需要",
    "Upgrade": "升级",
    "Equipped": "已装备",
    "Locked": "未解锁",
    "New": "新",
    "Accessibility": "辅助功能",
    "Colorblind Mode": "色盲模式",
    "Delete": "删除",
    "Game Save": "游戏存档",
    "Graphics Quality": "画质",
    "High": "高",
    "Low": "低",
    "Current Run Stats": "本次运行统计",
    "Back to Top": "回到顶部",
    "ack to Top": "回到顶部",
    "Cells dug: ": "挖掘单元：",
    "Elapsed time: ": "已用时间：",
    "Restore cells: ": "恢复单元：",
    "Max depth: ": "最大深度：",
    "Departed cows: ": "奶牛离去：",
    "Sheep sheared: ": "剪羊毛：",
    "Quartz gambled: ": "石英赌注：",
    "Returned to surface: ": "返回地表：",
    "Total playtime: ": "总游玩时间：",
    "Max Durability:": "最大耐久：",
    "Footwear": "鞋子",
    "Storage": "仓库",
    "Air": "空气",
    "Soil": "土壤",
    "Sand": "沙子",

    // ===== 角色 / 乌龟 =====
    "Scoot": ["斯库特", "turtle"],
    "Grampshell": ["格兰普谢尔", "turtle"],
    "Fern": ["蕨恩", "turtle"],
    "Griddle": ["格里铎", "turtle"],
    "Mistral": ["米斯特拉尔", "turtle"],
    "Caelo": ["凯洛", "turtle"],
    "Reeler": ["瑞拉", "turtle"],
    "Nix": ["尼克斯", "turtle"],
    "Pebble": ["佩珀", "turtle"],
    "Presto": ["普雷斯托", "turtle"],

    // ===== 资源 =====
    "Quartz": ["石英", "resource"],
    "Clay": ["粘土", "resource"],
    "Leather": ["皮革", "resource"],
    "Wool": ["羊毛", "resource"],
    "Coal": ["煤炭", "resource"],
    "Wood": ["木材", "resource"],
    "Amethyst": ["紫水晶", "resource"],
    "Emerald": ["翡翠", "resource"],
    "Ruby": ["红宝石", "resource"],
    "Sapphire": ["蓝宝石", "resource"],
    "Diamond": ["钻石", "resource"],
    "Anthracite": ["无烟煤", "resource"],
    "Ironwood": ["铁木", "resource"],
    "Cobalt": ["钴", "resource"],
    "Opal": ["蛋白石", "resource"],
    "Vermilion": ["朱砂", "resource"],
    "Alexandrite": ["亚历山大石", "resource"],
    "Copper Ore": ["铜矿石", "resource"],
    "Iron Ore": ["铁矿石", "resource"],
    "Gold Ore": ["金矿石", "resource"],
    "Titanium Ore": ["钛矿石", "resource"],
    "Copper Bar": ["铜锭", "resource"],
    "Iron Bar": ["铁锭", "resource"],
    "Gold Bar": ["金锭", "resource"],
    "Titanium Bar": ["钛锭", "resource"],
    "Cobalt Bar": ["钴锭", "resource"],
    "Vermilion Bar": ["朱砂锭", "resource"],

    "Coin": ["金币", "resource"],
    "Core Fragment": ["核心碎片", "resource"],
    "Void Shard": ["虚空碎片", "resource"],

    // ===== 镐子 (工具) =====
    "Copper Pickaxe": ["铜镐", "tool"],
    "Iron Pickaxe": ["铁镐", "tool"],
    "Gold Pickaxe": ["金镐", "tool"],
    "Titanium Pickaxe": ["钛镐", "tool"],
    "Diamond Pickaxe": ["钻石镐", "tool"],
    "Cobalt Pickaxe": ["钴镐", "tool"],
    "Vermilion Pickaxe": ["朱砂镐", "tool"],
    "Siphon Pickaxe": ["虹吸镐", "tool"],
    "Primeval Pickaxe": ["远古镐", "tool"],
    "Lumen Pickaxe": ["流明镐", "tool"],

    // ===== 钻头 (工具) =====
    "Iron Drill": ["铁钻头", "tool"],
    "Titanium Drill": ["钛钻头", "tool"],
    "Viridian Drill": ["翠绿钻头", "tool"],
    "Attuned Drill": ["共鸣钻头", "tool"],

    // ===== 头盔 =====
    "Baseball Cap": ["棒球帽", "headgear"],
    "Fedora": ["软呢帽", "headgear"],
    "Iron Helm": ["铁头盔", "headgear"],
    "Visor": ["护目镜", "headgear"],
    "Halo": ["光环", "headgear"],
    "Propeller Cap": ["螺旋桨帽", "headgear"],
    "Flower Crown": ["花冠", "headgear"],
    "Crystal Circlet": ["水晶头环", "headgear"],
    "Hard Hat": ["安全帽", "headgear"],
    "Top Hat": ["高顶礼帽", "headgear"],

    // ===== 鞋子 =====
    "Leather Boots": ["皮靴", "footwear"],
    "Snow Boots": ["雪地靴", "footwear"],
    "Rollerskates": ["轮滑鞋", "footwear"],
    "Magmawalker": ["熔岩行者", "footwear"],
    "Ironhide Greaves": ["铁皮护腿", "footwear"],
    "Mycelial Boots": ["菌丝靴", "footwear"],

    // ===== 饰品 =====
    "Violetheart Pendant": ["紫心吊坠", "accessory"],
    "Verdant Radiance": ["翠绿光辉", "accessory"],
    "Sanguine Signet": ["血色印章", "accessory"],
    "Winterheart": ["冬心", "accessory"],
    "Omnishard": ["全能碎片", "accessory"],
    "Gilded Shift": ["镀金移位", "accessory"],
    "Resonant Prong": ["共鸣叉", "accessory"],
    "Alchemist's Pouch": ["炼金袋", "accessory"],
    "Dwarven Bracer": ["矮人护腕", "accessory"],
    "Relicbinder's Chisel": ["遗物束缚凿", "accessory"],
    "Prismatic Lantern": ["棱彩灯笼", "accessory"],
    "Evergrowth Hammer": ["永生长锤", "accessory"],
    "Terracotta Jug": ["赤陶壶", "accessory"],

    // ===== 印记 =====
    "Heart Sigil": ["心脏印记", "sigil"],
    "Star Sigil": ["星辰印记", "sigil"],
    "Heal Sigil": ["治愈印记", "sigil"],
    "Iron Sigil": ["钢铁印记", "sigil"],
    "Regen Sigil": ["恢复印记", "sigil"],
    "Light Sigil": ["光明印记", "sigil"],
    "Luck Sigil": ["幸运印记", "sigil"],
    "Shield Sigil": ["护盾印记", "sigil"],
    "Fortitude Sigil": ["坚韧印记", "sigil"],
    "Infinite Sigil": ["无限印记", "sigil"],

    // ===== 消耗品 =====
    "Flask": ["水壶", "consumable"],
    "Full Flask": ["满水壶", "consumable"],
    "Torch": ["火把", "consumable"],
    "Mageflare Rune": ["法师辉光符文", "consumable"],
    "Ladder": ["梯子", "consumable"],
    "Hammer": ["锤子", "consumable"],

    // ===== 圣物 =====
    "Starlight Locket": ["星光挂坠", "relic"],
    "Mirror of Mornings": ["晨光之镜", "relic"],
    "Whispering Rune": ["低语符文", "relic"],
    "Anubis Doll": ["阿努比斯玩偶", "relic"],
    "Staff of Osiris": ["奥西里斯法杖", "relic"],
    "Eye of Shelet": ["谢莱特之眼", "relic"],
    "Sandglass of the Dunes": ["沙丘沙漏", "relic"],
    "Scarab Carapace": ["圣甲虫甲壳", "relic"],
    "Cog of the First Engine": ["原初引擎齿轮", "relic"],
    "Automaton Core": ["自动核心", "relic"],
    "Groveheart Seed": ["林心种子", "relic"],
    "Stone Idol": ["石像", "relic"],
    "Bark Scroll": ["树皮卷轴", "relic"],
    "Black Rectangle": ["黑色矩形", "relic"],
    "Mask of the Silent Choir": ["静默合唱团面具", "relic"],
    "Scoot's Groove Disc": ["斯库特律动碟", "relic"],
    "Hollow Key": ["中空钥匙", "relic"],
    "Solar Bloom": ["太阳花", "relic"],
    "The Last String": ["最后一弦", "relic"],
    "Moon Bell Fragment": ["月铃碎片", "relic"],

    // ===== 音乐名称 =====
    "serenitrove": "宁静洞穴",
    "bonusroundboogie": "奖励回合布吉",
    "arcadeafternoon": "街机午后",
    "pixelparade": "像素游行",
    "bitbybit": "一点一滴",
    "turbotrek": "涡轮之旅",
    "forgottenquest": "被遗忘的探索",
    "neontemptation": "霓虹诱惑",
    "scootstheme": "斯库特主题",
    "grufflove": "粗犷之爱",

    // ===== 成就/教程标题 =====
    "Heavy Drip": "重水欲滴",
    "Jackpot Junkie": "中奖狂人",
    "Dry Run": "干涸之旅",
    "Dim Descent": "昏暗下潜",
    "Echoes Unearthed": "回响出土",
    "Fashion Statement": "时尚宣言",
    "My Final Form": "我的最终形态",
    "Toxin Relationship": "毒物关系",
    "Seal the Deal": "成交",
    "A Light in the Depths": "深处之光",
    "A New Adventure Awaits": "新的冒险在等待",
    "A Woolly Visitor": "毛茸茸的访客",
    "Barefoot Bravado": "赤足勇士",
    "Feeling Lucky?": "运气不错？",
    "Nothing Up My Shell": "壳中无物",
    "New Turtle Unlocked!": "解锁新乌龟！",
    "New Resources": "新资源",
    "Pocketful of Wonders": "满袋奇迹",
    "The Secret in the Stone": "石中之秘",
    "Immovable": "不可动摇",
    "Second Chances": "第二次机会",
    "Turtally Armored": "全面龟甲",
    "Leaf It to Fern": "交给蕨恩",
    "Zone Switching": "区域切换",
    "Forged in the Depths": "深渊锻造",
    "Root of All Possibilities": "万有可能之根",
    "Quartz for Luck": "石英求好运",
    "Merchant's Mark": "商人之印",
    "Trinkets of the Unknown": "未知小物",
    "Echoes Etched in Crystal": "水晶刻印回响",
    "Shell Shocked Sensei": "震惊的师傅",
    "The Furry Business": "毛茸生意",
    "The Breeze Begins": "微风起时",
    "Herbal Resurrection": "草药复苏",
    "Melodies Unearthed": "出土旋律",
    "Crystal Meets Magma": "水晶遇熔岩",
    "Maximum Hydration": "最大水润",
    "Movement Controls": "移动控制",
    "Gruff Love": "粗犷的爱",
    "Shuffle": "随机",
    "Loop": "循环",

    // ===== 角色描述 =====
    "Young, eager, and kinda clueless.": "年轻热情，但有点懵懂。",
    "Digging since before you hatched.": "在你孵化之前就开始挖了。",
    "Nurtures the dirt with every dig.": "每一铲都在滋养泥土。",
    "Digs sideways because down is too mainstream.": "横着挖，因为往下太主流了。",
    "Heaven's chosen crawler. Only slower and glowier.": "天选爬行者，只是更慢更发光。",
    "Spins wheels. Digs deals.": "转轮子，挖交易。",
    "Facetious and faceted.": "诙谐又多面。",
    "Half a shell, twice the enthusiasm.": "一半的壳，双倍的热情。",
    "The hands move faster than the mind.": "手比脑子动得快。",

    // ===== 角色传说 =====
    "Nix has a gentle kind of wit and a quiet charm that draws others in. Even when she's being a little playful, there's something soothing about having her around.": "尼克斯有一种温和的机智和安静的魅力，吸引着周围的人。即使她有点调皮，有她在身边也让人感到舒心。",

    // ===== 物品描述 =====
    "Small gold coin with a polished surface.": "表面抛光的小金币。",
    "Primarily used as currency for trade and training.": "主要用于交易和训练的货币。",
    "Reddish metal that's easy to shape and polish.": "易于塑形和抛光的微红色金属。",
    "Perfect for pottery and bricks.": "非常适合制作陶器和砖块。",
    "Essential for crafting armor and gear.": "制作护甲和装备的必需品。",
    "Soft fleece, useful for warm clothing and padding.": "柔软的绒毛，适合制作保暖衣物和衬垫。",
    "Used for crafting and fueling furnaces.": "用于制作和作为熔炉燃料。",
    "High-grade coal that burns hotter and longer.": "燃烧更热更久的高级煤炭。",
    "Petrified wood as hard as metal.": "坚硬如铁的石化木材。",
    "Blue-tinged metal with magnetic properties.": "带蓝色调的磁性金属。",
    "Iridescent gem that refracts light into shifting colors.": "能将光线折射出变幻色彩的彩虹宝石。",
    "Crimson ore that reacts unpredictably to heat.": "遇热反应不可预测的深红矿石。",
    "Extremely rare color-changing gemstone.": "极为罕见的变色宝石。",
    "Bright green gemstone of high value.": "高价值的亮绿色宝石。",
    "Rare blue gemstone known for its elegance.": "以其优雅著称的稀有蓝宝石。",
    "Red gemstone prized for its beauty.": "因其美丽而备受珍视的红宝石。",
    "Uncommon gem with a deep violet color.": "深紫色的稀有宝石。",
    "Sharp, shiny, and nearly impossible to break.": "锋利闪亮，几乎无法破坏。",
    "Soft and shiny with a warm yellow color.": "柔软闪亮，带有温暖的黄色。",
    "Heavy and dark with a rough, solid feel.": "厚重深沉，质感粗糙坚实。",
    "Light but tough with a smooth silver look.": "轻巧坚韧，呈光滑银色外观。",
    "Softens when exposed to strong light.": "暴露在强光下会变软。",
    "Fragment of nothingness, cold to the touch.": "虚无的碎片，触感冰冷。",
    "Vital for fueling furnaces.": "熔炉燃料的关键材料。",

    // ===== 装备描述 =====
    "Slightly worn-out baseball cap.": "略微磨损的棒球帽。",
    "Distinguished fedora with timeless style.": "彰显品味的经典软呢帽。",
    "Sturdy iron helm, tough and reliable.": "坚固的铁头盔，可靠耐用。",
    "Sleek visor designed for focused vision.": "流线型护目镜，专注视野。",
    "Glowing halo radiating gentle warmth.": "散发柔和温暖的光环。",
    "Cap topped with a spinning propeller.": "顶端带旋转螺旋桨的帽子。",
    "Crown of flowers symbolizing growth and renewal.": "象征生长与更新的花冠。",
    "Circlet carved with impossible precision.": "以不可思议的精度雕刻的头环。",
    "Solid hard hat offering dependable protection.": "坚固的安全帽，提供可靠保护。",
    "Grand top hat befitting a stage magician.": "适合舞台魔术师的华丽高顶礼帽。",

    // ===== 效果描述 =====
    "Immune to Bogged": "免疫沼泽",
    "Immune to Bogged. Slides when moving": "免疫沼泽。移动时会滑行",
    "Immune to slippery ice": "免疫滑冰",
    "Ignores Burn damage while digging sideways. Immune to Chill": "横挖时无视灼烧伤害。免疫寒冷",
    "Stamina bonus increases with depth (+15 per 100 depth)": "体力加成随深度增加（每100深度+15）",
    "Reduces Sporebound max stack by 1": "孢子束缚最大层数减少1",
    "Regen restores 2 additional stamina": "恢复额外回复2点体力",
    "Restore cells heal for more as you go deeper": "恢复单元随深度增加回复更多",
    "Immune to Burn": "免疫灼烧",
    "Precious metals and gemstones shine in the dark": "贵金属和宝石在黑暗中发光",
    "Removes stamina cost for equipping footwear and tools.": "消除装备鞋子和工具的体力消耗。",
    "Increases treasure chest spawns and signals nearby chests.": "增加宝箱生成并提示附近宝箱。",
    "Enhances the effects of all consumables": "增强所有消耗品的效果",
    "Chance to preserve tool durability on dig": "挖掘时有概率保留工具耐久",
    "Increases relic extraction attempts by 4": "圣物提取尝试次数增加4",
    "Fixed light radius (250), ignores other light modifiers": "固定光照范围(250)，忽略其他光照修正",
    "Restore cells heal +2 stamina and restore 2 equipped Tool durability": "恢复单元额外回复2体力并修复2点装备工具耐久",
    "Gains 1 charge for every 5 cells dug (max 60). Unequip to restore 1 stamina per charge.": "每挖掘5个单元获得1层充能（最多60层）。卸下时每层充能回复1点体力。",

    // ===== 印记效果 =====
    "+30 Max Stamina": "最大体力+30",
    "+10% extra resource spawn": "额外资源生成+10%",
    "Restore cells heal for 3 extra stamina": "恢复单元额外回复3点体力",
    "Metallic ores heal for 5 stamina": "金属矿石回复5点体力",
    "Regen restores 1 additional stamina": "恢复额外回复1点体力",
    "Light radius +30": "光照范围+30",
    "15% chance to double resource yield": "15%概率双倍资源产量",
    "Quartz and gems provide 1 Shield Stack": "石英和宝石提供1层护盾",
    "+1 Max Stamina every 20 cells dug": "每挖掘20个单元最大体力+1",
    "Equip cost underground -2": "地下装备消耗-2",
    "+10 Max Stamina": "最大体力+10",
    "+20 Light Radius": "光照范围+20",
    "Regeneration triggers 2 digs faster": "恢复触发加快2次挖掘",
    "+1 Power": "力量+1",

    // ===== 道具效果 =====
    "Restores 15 Stamina. Refills when returning to surface.": "回复15点体力。返回地表时重新填满。",
    "Restores 20 Stamina (2 charges). Refills when returning to surface.": "回复20点体力（2次充能）。返回地表时重新填满。",
    "Simple light source.": "简易光源。",
    "Removes darkness until the next dig.": "移除黑暗直到下一次挖掘。",
    "Lets you dig 1 cell up.": "允许向上挖掘1个单元。",
    "Repairs a tool underground.": "在地下修复一件工具。",

    // ===== 圣物描述 =====
    "Holds a speck of night sky that glimmers softly whenever you whisper a secret wish.": "蕴含一片夜空碎片，每当你轻声许愿便会微微闪烁。",
    "Polish its golden frame to reveal a rosy glow that mimics the very first dawn.": "擦拭金色边框，便会散发出仿若最初黎明的玫瑰色光芒。",
    "A small enchanted stone etched with a glowing symbol that softly hums forgotten secrets.": "一块刻有发光符号的小型附魔石，轻声吟唱着被遗忘的秘密。",
    "A stitched, jackal-headed doll made of soft fabric and golden thread.": "用柔软布料和金线缝制的胡狼头玩偶。",
    "Once wielded by the high-priest turtle, the staff was said to revive withered plants in times of drought.": "据说曾是神龟大祭司的法杖，能在干旱时使枯萎的植物复苏。",
    "Believed to belong to the sun goddess of the Shell Kingdom, whose gaze protected turtles from sandstorms and deception.": "相传属于贝壳王国的太阳女神，她的目光保护乌龟免受沙暴和欺骗。",

    // ===== 圣物描述（短） =====
    "Piece of the world's heart.": "世界之心的一部分。",
    "Drops Core Fragment on dig.": "挖掘时掉落核心碎片。",

    // ===== 属性说明 =====
    "Increases digging strength, making it easier to break through tougher terrain.": "提高挖掘力量，更容易突破坚硬地形。",
    "Increases maximum stamina, allowing for longer digging sessions.": "提高最大体力，允许更长时间的挖掘。",
    "Increases base light radius, enabling greater visibility in dark areas.": "提高基础光照范围，在黑暗区域获得更好的视野。",
    "Increases ore smelting speed, allowing for faster metal production.": "提高矿石熔炼速度，加快金属生产。",
    "Enables stamina to recover gradually after digging, helping sustain longer runs.": "使体力在挖掘后逐渐恢复，帮助维持更长的旅程。",
    "Each point reduces stamina cost for digging by 1 (down to a minimum of 1).": "每点减少挖掘体力消耗1（最低降至1）。",
    "Illuminates the area around you when you are deeper underground.": "在地下深处时照亮周围区域。",

    // ===== 地面/区域效果 =====
    "Consecutive digs in the same direction inflict Sporebound.": "同方向连续挖掘会施加孢子束缚。",
    "Inflicts Bogged.": "施加沼泽状态。",
    "Inflicts Burn.": "施加灼烧状态。",
    "Inflicts Chill, slippery ground.": "施加寒冷，地面湿滑。",
    "Inflicts Gloom.": "施加昏暗状态。",
    "Each dig adds Toxin stacks. Restore cells clear stacks.": "每次挖掘增加毒素层数。恢复单元清除层数。",
    "Each dig adds Wither stacks. Restore cells reduce Wither stacks.": "每次挖掘增加凋零层数。恢复单元减少凋零层数。",
    "Falling gravel deals stamina damage.": "落石造成体力伤害。",
    "Falling sand fills gaps.": "流沙会填充空隙。",

    // ===== 解锁说明 =====
    "Unlocks Farfields": "解锁远野",
    "Unlocks ability to carry consumables (3 slots)": "解锁携带消耗品能力（3格）",
    "Unlocks ability to carry consumables (4 slots)": "解锁携带消耗品能力（4格）",

    // ===== 交易 =====
    "Trade 100 amethyst for 150 quartz": "100紫水晶换150石英",
    "Trade 100 copper bars for 75 quartz": "100铜锭换75石英",
    "Trade 100 diamond for 500 quartz": "100钻石换500石英",
    "Trade 100 emerald for 200 quartz": "100翡翠换200石英",
    "Trade 100 gold bars for 150 quartz": "100金锭换150石英",
    "Trade 100 iron bars for 100 quartz": "100铁锭换100石英",
    "Trade 100 leather for 50 quartz": "100皮革换50石英",
    "Trade 100 ruby for 300 quartz": "100红宝石换300石英",
    "Trade 100 sapphire for 300 quartz": "100蓝宝石换300石英",
    "Trade 100 titanium bars for 300 quartz": "100钛锭换300石英",

    // ===== 对话/教程 =====
    "CONGRATULATIONS": "恭喜",
    "You've reached water": "你到达了水源",
    "You've reached the Deepwater": "你到达了深水层",
    "Thanks for playing!": "感谢游玩！",
    "Import Save": "导入存档",
    "Export Successful": "导出成功",
    "Export Failed": "导出失败",
    "Save Exported": "存档已导出",
    "Save Imported": "存档已导入",
    "Import Failed": "导入失败",
    "Deletion Cancelled": "删除已取消",
    "Delete Save": "删除存档",
    "Paste your saved game data here": "在此粘贴你的存档数据",
    "Type 'delete' here": "在此输入'delete'",
    "To confirm deletion, please type 'delete' below.\n\nThis will permanently delete your game save and cannot be undone.\n\nProceed?": "确认删除请在下方输入'delete'。\n\n这将永久删除你的游戏存档，且无法撤销。\n\n继续？",
    "This will replace your current game save.\n\nProceed?": "这将替换你当前的游戏存档。\n\n继续？",
    "Paste your saved game data below.\n\nThis will replace your current game save.\n\nProceed?": "在此粘贴你的存档数据。\n\n这将替换你当前的游戏存档。\n\n继续？",

    // ===== 加工产物描述 =====
    "Refined copper. Essential for early tools.": "精炼铜。早期工具的必需品。",
    "Processed iron for tools.": "加工铁，用于制作工具。",
    "Purified gold for trade and crafting.": "纯金，用于交易和制作。",
    "Processed titanium for advanced tools.": "加工钛，用于高级工具。",
    "Refined cobalt for advanced crafting.": "精炼钴，用于高级制作。",
    "Refined crimson metal that radiates volatile energy.": "精炼深红金属，散发不稳定的能量。",

    // ===== 建筑/工作站 =====
    "Tanning Rack": ["鞣革架", "item"],
    "Storage": ["仓库", "item"],

    // ===== 地面类型 =====
    "Air": ["空气", "resource"],
    "Soil": ["土壤", "resource"],
    "Sand": ["沙子", "resource"],

    // ===== 教程/提示 =====
    "All tortoises are turtles, but not all turtles are tortoises.": "所有陆龟都是龟，但不是所有龟都是陆龟。",
    "Cows spawn every 100 cells you dig downward.": "每向下挖掘100格就会生成一头牛。",
    "Stronger punches? Softer cows.": "拳头越重？牛越软。",
    "Pickaxes lose durability only when they're reducing stamina cost.": "镐子仅在减少体力消耗时损耗耐久。",
    "Swapping equipment underground costs {{0}} stamina.": "在地下更换装备消耗{{0}}体力。",
    "Overdug and missed something in the sand? Try digging right beneath it.": "挖过头错过了沙子里的东西？试试挖它的正下方。",
    "There's a 1 in 593 chance to hit the Jackpot on the slot machine.": "老虎机中大奖的概率是593分之一。",
    "You can trade unused resources for Quartz at Bits and Bobs.": "你可以在 Bits and Bobs 用闲置资源换取石英。",
    "Hint: There are no Quartz spawns in the Magma layer.": "提示：岩浆层不会生成石英。",
    "Each layer has varying hardness and occasional special effects.\n\nHover to see more information about the layer you're in.": "每个地层都有不同的硬度和特殊效果。\n\n悬停查看当前地层的详细信息。",

    // ===== 制作要求 =====
    "Requires a Furnace, unlocked by reaching deeper depths.": "需要熔炉，通过到达更深深度解锁。",

    // ===== 结束画面 =====
    "Hope you had fun! If you'd like to leave a rating, you can do so at": "希望你玩得开心！如果你想留下评分，可以前往：",

    // ===== 额外角色描述 =====
    "But mom said iron is good for you.": "但妈妈说铁对你有好处。",

    // ===== 角色传说（Scoot） =====
    "Scoot is cheerful and curious turtle whose eagerness often leads him into adorable misadventures.\n\nHis optimism shines brightly, even if he's sometimes unaware of the hidden dangers waiting underground.": "斯库特是一只开朗好奇的小乌龟，他的热情常常让他陷入可爱的小麻烦。\n\n他的乐观精神闪闪发光，尽管他有时并未察觉到地下潜藏的危险。",

    // ===== 角色传说（Grampshell） =====
    "Grampshell, Scoot's grumpy yet warm-hearted grandfather is a cavern veteran. Younger turtles love listening to his slightly exaggerated stories of past adventures.\n\nThough his stamina isn't what it once was, he still possesses a remarkable instinct for finding hidden resources.": "格兰普谢尔是斯库特脾气暴躁但内心温暖的外公，是洞穴老手。小乌龟们喜欢听他那些略带夸张的冒险故事。\n\n虽然体力不如从前，但他仍拥有发现隐藏资源的惊人直觉。",

    // ===== 角色传说（Fern） =====
    "Sweet-natured Fern developed a bond with nature that makes flowers bloom with every dig.\n\nHer gentle presence turns every expedition into a blooming underground garden, spreading warmth and kindness wherever she goes.": "温柔善良的蕨恩与自然建立了联系，每一次挖掘都会让花朵绽放。\n\n她温柔的身影将每次探险变成盛开的地下花园，所到之处都充满温暖与善意。",

    // ===== 角色传说（Griddle） =====
    "Griddle, Scoot's best friend, shares his enthusiasm but often misunderstands simple things, making him amusingly oblivious. His cheerful innocence makes every adventure enjoyable, despite occasional confusion.\n\nHe digs through tunnels seeking metallic ores to strengthen his already tough shell.": "格里铎是斯库特最好的朋友，和他一样充满热情，但常常误解简单的事情，让他显得有些可爱的迷糊。他那 cheerful 的天真让每次冒险都充满乐趣，尽管偶尔也会有些困惑。\n\n他挖遍隧道寻找金属矿石，以强化他那本就坚硬的龟壳。",

    // ===== 角色传说（Mistral） =====
    "Mistral is a spirited turtle known for doing things her own way.\n\nInstead of digging down like most, she loves exploring sideways tunnels, often stumbling upon curious little surprises others pass by.": "米斯特拉尔是一只活力四射的乌龟，以特立独行而闻名。\n\n不像大多数乌龟向下挖，她喜欢探索横向隧道，常常发现别人忽略的有趣小惊喜。",

    // ===== 角色传说（Caelo） =====
    "Caelo is a serene celestial turtle with wings that softly glow.\n\nHe acts as a gentle light in the dark, drifting through the caves and bringing a sense of peace to everyone he meets.": "凯洛是一只宁静的天界乌龟，翅膀微微发光。\n\n他像黑暗中的一盏温柔明灯，飘过洞穴，为遇到的每个人带来安宁。",

    // ===== 角色传说（Reeler） =====
    "Reeler is all about the thrill. He's charismatic, fun-loving, and never takes things too seriously.\n\nEvery dig is a roll of the dice thanks to his mini-slot wheel, making each trip underground a total surprise.": "瑞拉追求的就是刺激。他魅力十足、爱玩爱笑，从不过于认真。\n\n有了他的迷你老虎机，每次挖掘都像掷骰子，让每次地下之旅都充满惊喜。",

    // ===== 角色传说（Pebble） =====
    "Pebble is the tiniest hatchling in the burrow, still wobbling on little legs and learning how to dig like the older turtles.\n\nWith each dig he discovers more about the underground world and about himself, slowly growing into the turtle he dreams of becoming.": "佩珀是洞穴里最小的幼龟，还在用小短腿蹒跚学步，学习像大乌龟一样挖掘。\n\n每一次挖掘，他都更多地了解地下世界和自己，慢慢成长为梦想中的那只乌龟。",

    // ===== 角色传说（Presto） =====
    "Presto is a magician turtle with a flair for the theatrical. He learned his craft from wandering turtles and developed a talent for clever sleight-of-hand tricks.\n\nWhat he lacks in raw strength, he makes up for with resourcefulness and style.": "普雷斯托是一只富有戏剧天赋的魔术师乌龟。他从流浪龟那里学艺，练就了灵巧的手上功夫。\n\n他用机智和风度弥补了力量的不足。",

    // ===== 角色效果描述 =====
    "- Low base stamina\n- Finds more resources underground": "- 基础体力较低\n- 在地下发现更多资源",
    "- Low base stamina\n- Restore cells heal more and can overheal\n- Overhealing increases light radius": "- 基础体力较低\n- 恢复单元回复更多且可过量恢复\n- 过量恢复增加光照范围",
    "- High base stamina\n- Eating metallic ores restores stamina": "- 基础体力较高\n- 食用金属矿石回复体力",
    "- No horizontal stamina cost\n- Lower vertical digging power": "- 横向移动无体力消耗\n- 纵向挖掘力降低",
    "- Minimum horizontal dig power increased\n- Higher stamina costs": "- 最小横向挖掘力提升\n- 体力消耗增加",
    "+5 stamina per dig without moving\n+1 stamina per cell for horizontal digs": "每次不动位置挖掘+5体力\n横向挖掘每格+1体力",
    "- Cannot equip footwear\n- Gains +1 max stamina every 9 cells dug": "- 无法装备鞋子\n- 每挖掘9个单元最大体力+1",
    "- Equipping costs doubled\n- Regeneration also increases max stamina": "- 装备消耗翻倍\n- 恢复同时增加最大体力",

    // ===== 互动提示 =====
    "Stamina full": "体力已满",
    "Tool broke!": "工具损坏！",
    "Footwear broke!": "鞋子损坏！",
    "Ladder recovered!": "梯子回收！",
    "Ladders recovered!": "梯子回收！",
    "Double yield!": "双倍产出！",
    "Nothing to repair": "无需修复",
    "Active": "已激活",
    "Too close to the surface": "离地表太近",
    "Can't place over water": "不能放在水面上",
    "Ladder's already here": "这里已经有梯子了",
    "There's a ladder below": "下方已有梯子",
    "There's a ladder above": "上方已有梯子",
    "Need dug ground!": "需要已挖掘的地面！",
    "All relics already found!": "所有圣物已找到！",
    "All items restored!": "所有物品已恢复！",
    "Repaired!": "已修复！",
    "Wooden Backpack crafted!": "木制背包已制作！",

    // ===== 宝箱事件消息 =====
    "Buried beneath the earth, a gramophone crackles to life. The melodies are old, but the rhythm never fades.": "埋藏在地下的留声机吱嘎作响。旋律虽老，节奏不灭。",
    "Wild ginseng has awakened Grampshell! Slow, steady, and full of digging wisdom.": "野山参唤醒了格兰普谢尔！沉稳、从容，满载挖掘智慧。",
    "Scoot found a shiny vinyl album in the chest and gave it to Grampshell. Though the old turtle grumbled, Scoot paid no attention and cheerfully wandered off, leaving Grampshell to shake his head, pride hidden in his smile.": "斯库特在宝箱里发现了一张闪亮的黑胶唱片，送给了格兰普谢尔。老乌龟虽然嘟囔了几句，但斯库特毫不在意，兴高采烈地跑开了，留下格兰普谢尔摇头微笑，满是骄傲。",

    // ===== 教程提示 =====
    "Tap the left and right sides of the viewport to move horizontally.\n\nTap the bottom of the viewport to dig down.": "点击视口左右两侧横向移动。\n\n点击视口底部向下挖掘。",
    "[A / D] or [Left / Right] keys to move.\n\n[S] or [Down] to dig downward.": "[A / D] 或 [← / →] 键移动。\n\n[S] 或 [↓] 向下挖掘。",

    // ===== 新乌龟解锁提示 =====
    "You have unlocked a new turtle!\n\nYou may switch turtles on the surface by tapping on your current turtle.": "你解锁了一只新乌龟！\n\n你可以在地表点击当前乌龟来切换。",
    "You have unlocked a new turtle!\n\nYou may switch turtles on the surface by clicking on your current turtle.": "你解锁了一只新乌龟！\n\n你可以在地表点击当前乌龟来切换。",

    // ===== 区域切换提示 =====
    "Welcome to the Farfields!\n\nYou can switch between zones by tapping on the signposts or by walking to the edge of the screen while on the surface.": "欢迎来到远野！\n\n你可以点击路标或在地表走到屏幕边缘来切换区域。",
    "Welcome to the Farfields!\n\nYou can switch between zones by clicking on the signposts, walking to the edge of the screen, or pressing [Q] while on the surface.": "欢迎来到远野！\n\n你可以点击路标、走到屏幕边缘，或在地表按 [Q] 键来切换区域。",

    // ===== 新资源提示 =====
    "You've collected a new type of resource!\n\nTap the arrow icon next to the resource bar to switch between resource views.": "你收集到了一种新资源！\n\n点击资源栏旁的箭头图标切换资源视图。",
    "You've collected a new type of resource!\n\nClick the arrow icon next to the resource bar or press [Tab] to switch between resource views.": "你收集到了一种新资源！\n\n点击资源栏旁的箭头图标或按 [Tab] 键切换资源视图。",

    // ===== 地表事件/建筑提示 =====
    "A strange tortoise has appeared, watching in silence. There's something different about this one… Maybe it's worth seeing what he has to teach.": "一只陌生的乌龟出现了，沉默地注视着你。这只乌龟有些不同……或许值得看看他有什么要教的。",
    "Some cute, peaceful, and totally killable animals appear! Time to set up a tanning rack...": "一些可爱、温顺且完全可以宰杀的动物出现了！是时候搭个鞣革架了……",
    "A simple stall has popped up, stocked with all the essentials. Someone is making a profit, and it's probably not you.": "一个简易摊位出现了，摆满了各种必需品。有人在赚钱，但大概不是你。",
    "A blacksmith has emerged from the shadows, setting up a forge nearby. I could craft something better with an anvil.": "一个铁匠从阴影中出现，在附近建起了熔炉。有了铁砧，我能打造更好的东西。",
    "A strange shop flickers into existence, filled with trinkets that whisper and glow. Best to browse carefully...": "一家奇怪的商店闪烁着出现，里面摆满了低语发光的小物件。最好小心浏览……",
    "A glowing shard rises from the ground, reflecting your journey. The past is never truly buried.": "一块发光的碎片从地面升起，映照出你的旅程。过去从未真正被埋葬。",
    "A peculiar seed, buried deep underground. Maybe it will find a place to sprout next time I return to the surface.": "一颗奇特的种子深埋地下。也许下次我返回地表时，它会找到发芽的地方。",
    "A strange machine has appeared, its lights flickering in the sunlight. The jackpot is always just one pull away, or so they say.": "一台奇怪的机器出现了，灯光在阳光下闪烁。大奖总是差一次拉杆，至少他们是这么说的。",
    "A fluffy sheep has appeared on the surface! It looks warm and woolly... maybe a good shearing is in order.": "一只毛茸茸的羊出现在地表！看起来又暖又蓬松……也许该好好剪一剪了。",

    // ===== 角色解锁事件消息 =====
    "Your iron hoarding has attracted someone... heavier. Griddle joins your adventure!": "你的铁囤积吸引了一个……更重的家伙。格里铎加入了你的冒险！",
    "Your brilliance has pierced the deepest dark. Caelo, heaven's glowiest turtle, now watches over your digging crusade.": "你的光芒刺穿了最深处的黑暗。凯洛，天上最闪亮的乌龟，现在守护着你的挖掘征程。",
    "Compassion echoes through the caverns. From moss and bloom, Fern emerges to stand with you.": "同情心在洞穴中回响。从苔藓和花朵中，蕨恩出现与你并肩。",
    "You wandered into the Magma layer without any shoes. Pebble squeaks in admiration and decides you're his new role model.": "你没穿鞋子就闯入了熔岩层。佩珀吱吱地赞叹，决定将你视为新的榜样。",
    "The machine sings, quartz fly, and out comes a turtle with a taste for chance. Reeler has entered the game.": "机器歌唱着，石英飞舞，一只喜欢碰运气的乌龟走了出来。瑞拉加入了游戏。",
    "Your collection of accessories has caught the eye of a certain showturtle. Presto appears from nowhere!": "你的饰品收藏引起了一只表演龟的注意。普雷斯托凭空出现！",

    // ===== 头部装备解锁事件 =====
    "Scoot adjusts his new cap and grins, maybe he isn't so clueless after all!": "斯库特调整着他的新帽子咧嘴笑着，也许他终究不是那么懵懂！",
    "Grampshell tips his fedora. Digging's an art, and class never goes out of style.": "格兰普谢尔轻触他的软呢帽。挖掘是一门艺术，优雅永不过时。",
    "Griddle clangs the iron helm cheerfully. Who knew iron was this fashionable?": "格里铎欢快地敲着铁头盔。谁知道铁也能这么时尚？",
    "Caelo's halo shimmers softly, guiding his slow, steady crawl toward greatness.": "凯洛的光环柔和地闪烁，指引他缓慢而坚定地爬向伟大。",
    "Mistral slides the visor down, seeing the world clearly. Well, at least horizontally.": "米斯特拉尔滑下护目镜，清晰地看清了世界。好吧，至少横向是清楚了。",
    "Reeler twirls the cap with glee. If luck's a game, he's playing in style.": "瑞拉欢乐地旋转着帽子。如果运气是场游戏，他也要玩得有风格。",
    "The petals bloom as Fern smiles. Even the deepest earth can grow something beautiful.": "蕨恩微笑时花瓣绽放。即使是最深的地下也能长出美丽的东西。",
    "The circlet glows softly. Nix might be deep in thought. Or just enjoying how shiny they are.": "头环柔和地发光。尼克斯也许在沉思，也许只是在享受它们有多闪亮。",
    "Pebble secures the strap. Time to build some defenses.": "佩珀系好带子。是时候建立一些防御了。",
    "Presto pulls a top hat from thin air. Every magician needs a proper stage prop.": "普雷斯托凭空变出一顶高顶礼帽。每个魔术师都需要合适的舞台道具。",

    // ===== 印记解锁事件（地表水源） =====
    "Scoot splashes the glowing water playfully. A warm sigil bobs against his little claws.": "斯库特顽皮地拍打着发光的水面。一枚温暖的印记在他小小的爪子旁浮动。",
    "Grampshell gazes warmly into the still water. A star sigil rises to meet him, ancient as the shell on his back.": "格兰普谢尔温暖地凝视着平静的水面。一枚星辰印记升起迎接他，古老如他背上的龟壳。",
    "The water hums a soft lullaby at Fern's gentle touch. A sigil of healing drifts upward like a budding flower.": "水在蕨恩的轻柔触碰下哼唱着摇篮曲。一枚治愈印记像含苞待放的花蕾般向上飘浮。",
    "Griddle pokes the hissing water with a puzzled blink. A heavy iron sigil clunks at his feet.": "格里铎困惑地眨着眼戳了戳嘶嘶作响的水面。一枚沉重的钢铁印记砰地落在他脚边。",
    "A gentle current stirs. Mistral catches a sigil of regeneration, shimmering like wind on water.": "一股温柔的暗流涌动。米斯特拉尔抓住了一枚恢复印记，它像水面上的风一样 shimmer 着。",
    "The darkness recedes as Caelo kneels. A sigil of light answers his quiet patience.": "凯洛跪下时黑暗退却。一枚光明印记回应了他安静的耐心。",
    "Reeler does a joyful cannonball into the pool. He pops back up giggling, holding a shiny sigil.": "瑞拉欢快地一个炮弹跳跳进水池。他咯咯笑着冒出头，手里拿着一枚闪亮的印记。",
    "The pool crystallizes around Nix. A frosty shield sigil forms, resting against her claws.": "水池在尼克斯周围结晶。一枚冰霜护盾印记形成，靠在她爪边。",
    "Pebble grunts and reaches deep into the glowing water. A sigil of fortitude surfaces, matching his big spirit.": "佩珀咕哝着伸手探入发光的水中。一枚坚韧印记浮出水面，正配他伟大的精神。",
    "Presto waves a claw over the swirling depths. An infinite sigil appears out of nowhere.": "普雷斯托挥爪划过旋转的深处。一枚无限印记凭空出现。",

    // ===== 头部装备解锁标题 =====
    "Rookie's Pride": "新手的骄傲",
    "Shellbound Gentleman": "壳中绅士",
    "Iron Will": "钢铁意志",
    "Heavenly Glow": "天堂之光",
    "Stylishly Sideways": "横着也时尚",
    "Spin to Win": "旋转制胜",
    "Nature's Embrace": "自然之拥",
    "Reflective Mood": "沉思心境",
    "Safety First": "安全第一",
    "Abracashella!": "龟壳魔法！",

    // ===== 印记解锁标题 =====
    "Heart of the Deep": "深渊之心",
    "Starbound Memory": "星辰记忆",
    "Mending Light": "治愈之光",
    "Ironclad Mark": "铁甲印记",
    "Renewing Breeze": "复苏之风",
    "Luminous Seal": "光明之印",
    "Fortune's Favor": "命运的眷顾",
    "Warden's Crest": "守护者徽记",
    "Unbreakable Will": "不屈意志",
    "Endless Encore": "无尽返场",

    // ===== 蓝图/卷轴提示 =====
    "All items already found!": "所有物品已找到！",

    // ===== 背包提示 =====
    "No save data found to export.": "未找到要导出的存档数据。",
    "Unable to copy to clipboard.\nPlease check browser permissions.": "无法复制到剪贴板。\n请检查浏览器权限。",
    "Game save copied to clipboard.\n\nYou can paste and save this text to backup your game progress.": "游戏存档已复制到剪贴板。\n\n你可以粘贴并保存此文本以备份游戏进度。",
    "Game save successfully imported.\n\nThe game will now reload to apply changes.\n\nPlease wait...": "游戏存档已成功导入。\n\n游戏将重新加载以应用更改。\n\n请稍候……",
    "Invalid save data.\n\nPlease check that you copied the entire save string.": "无效的存档数据。\n\n请检查是否复制了完整的存档字符串。",
    "The confirmation input did not match 'delete'.\nYour game save has NOT been deleted.": "确认输入不匹配'delete'。\n你的游戏存档未被删除。",

    // ===== 综合提示 =====
    "+1": "+1",
    "-1": "-1",
    "-2": "-2",
    "-10!": "-10！",
    "-5!": "-5！",
    "-20!": "-20！",
    "-15 max stamina": "-15最大体力",
    "No save data": "无存档数据",

    // ===== 按钮/界面文本 =====
    "Next": "下一步",
    "Out": "出界",

    // ===== 成就/进度 =====
    "You've collected a new type of resource!\n\nClick the arrow icon next to the resource bar to switch between resource views.": "你收集到了一种新资源！\n\n点击资源栏旁的箭头图标切换资源视图。",

    // ===== 制作/升级提示 =====
    "Requires a Furnace": "需要熔炉",
    "unlocked by reaching deeper depths.": "通过到达更深深度解锁。",

    // ===== 蓝图发现消息（模板匹配，{{0}}匹配任意文本） =====
    "You found a blueprint for a {{0}}!": "你发现了一张{{0}}蓝图！",
    "You discovered a blueprint for an advanced {{0}}!": "你发现了一张高级{{0}}蓝图！",
    "You uncovered a rare blueprint for {{0}}!": "你发现了一张稀有{{0}}蓝图！",
    "You found a rare blueprint for {{0}}!": "你发现了一张稀有{{0}}蓝图！",
    "You found a blueprint for a pair of {{0}}!": "你发现了一双{{0}}蓝图！",
    "You found a crafting scroll for {{0}}!": "你发现了一张{{0}}制作卷轴！",
    "{{0}} Blueprint": "{{0}}蓝图",
    "{{0}} Scroll": "{{0}}卷轴",
    "Now playing": "正在播放",

    // ===== 音乐名称（显示名） =====
    "Bit by Bit": "一点一滴",
    "Turbo Trek": "涡轮之旅",
    "Pixel Parade": "像素游行",
    "Scoot's Theme": "斯库特主题",
    "Forgotten Quest": "被遗忘的探索",
    "Neon Temptation": "霓虹诱惑",
    "Arcade Afternoon": "街机午后",
    "Bonus Round Boogie": "奖励回合布吉",

    // ===== 属性名称 =====
    "Enlightenment": "启迪",
    "Focus": "专注",

    // ===== 物品/建筑 =====
    "Signpost": "路标",
    "Wooden Backpack": "木制背包",

    // ===== 工具特殊效果 =====
    "Light level increases power.": "光照等级提升力量。",
    "Every 6th dig costs 0 stamina.": "每第6次挖掘消耗0体力。",
    "Power becomes 12 in Core layer.": "在核心层力量变为12。",
    "Digs 2 cells when drilling down.": "向下钻探时挖掘2格。",
    "Small chance to not consume stamina.": "小概率不消耗体力。",
    "Rare chance to double resource yield.": "小概率双倍资源产出。",
    "Heals 5 stamina when digging resource cells.": "挖掘资源单元时回复5体力。",
    "Power increases by 1 per 100 digs (max bonus +4). Resets on unequip.": "每挖掘100次力量+1（最多+4）。卸下时重置。",
    "- Glows slightly\n- Cannot equip tools\n- Quartz and gems grant shield stacks": "- 微微发光\n- 无法装备工具\n- 石英和宝石提供护盾层数",
    "Random heal from restore cells": "恢复单元随机治疗",
    "Overhealing increases light radius": "过量恢复增加光照范围",
    "Mining metallic ore heals": "挖掘金属矿石治疗",
    "Low base stamina": "基础体力较低",
    "Reduced dig power": "挖掘力降低",
    "No stamina cost for equipping": "装备无体力消耗",
    "No restore cells": "无恢复单元",
    "Immune to all ground effects": "免疫所有地形效果",
    "Regenerates faster": "恢复更快",
    "Spins mini slot on digs": "挖掘时转动迷你老虎机",
    "Vertical digging is harder": "纵向挖掘更困难",

    "Accessories": "饰品",
    "Equipment": "装备",
    "Consumable": "消耗品",
    "Build": "建造",
    "Train": "训练",
    "Fuel": "燃料",
    "Relic Powers": "圣物能力",
    "Resources": "资源",
    "Collected Relics": "已收集圣物",
    "Encased Relic": "封存圣物",
    "Select a Sigil": "选择印记",
    "Add to Collection": "加入收藏",
    "Empty": "空",
    "Empty bag slot": "空背包栏",
    "Headgear Visual Effects": "头部装备视觉效果",

    // ===== 状态效果 =====
    "Bogged": "沼泽",
    "Burn": "灼烧",
    "Chill": "寒冷",
    "Gloom": "昏暗",
    "Toxin": "毒素",
    "Wither": "凋零",
    "Sporebound": "孢子束缚",
    "Refraction": "折射",
    "Hardmode": "困难模式",

    // ===== 效果描述 =====
    "Burn: -1 Stamina on dig": "灼烧：每次挖掘-1体力",
    "Chill: Regen frozen": "寒冷：恢复冻结",
    "Gloom: Halves light radius": "昏暗：光照范围减半",
    "Bogged: Backtracking costs stamina": "沼泽：后退消耗体力",
    "Toxin: Drains 20 stamina at 20 stacks": "毒素：20层时消耗20体力",
    "Refraction: Cell softens when exposed to strong light": "折射：单元格在强光下变软",
    "Immune to Gravel and lowers Toxin damage": "免疫砾石并降低毒素伤害",
    "Fortify: Gain 1 max stamina every 9 stacks": "强化：每9层获得1最大体力",
    "Fortitude Sigil: Gain 1 max stamina every 20 cells dug": "坚韧印记：每挖掘20个单元获得1最大体力",

    // ===== 按钮/提示 =====
    "(Broken)": "(已损坏)",
    "(3 digs)": "(3次挖掘)",
    "(2 repairs)": "(2次修复)",
    "Digs Left:": "剩余挖掘：",
    "Light Bonus:": "光照加成：",
    "Stamina Restore:": "体力恢复：",
    "Play Button": "播放按钮",

    // ===== 商店/交易 =====
    "Nothing to sell here": "这里没有可出售的",
    "Nothing else to buy here": "这里没有其他可购买的",
    "Nothing to craft or repair": "没有可制作或修复的",
    "No trinkets available": "没有可用的小物件",
    "No blueprints have been discovered so far": "尚未发现任何蓝图",
    "Click to equip crafted tools": "点击装备已制作的工具",
    "Click to equip crafted footwear": "点击装备已制作的鞋子",
    "Click to equip unlocked headgear": "点击装备已解锁的头部装备",
    "Click to equip crafted accessories": "点击装备已制作的饰品",
    "Click to equip uncrafted equipment": "点击装备未制作的装备",
    "(Can be picked up when removed)": "（卸下时可取回）",

    // ===== 圣物相关 =====
    "Find the relic before it shatters!": "在圣物碎裂前找到它！",
    "The relic shattered...": "圣物碎裂了……",
    "Relic extracted successfully!": "圣物提取成功！",
    "Reach the Deepwater to unlock sigils": "到达深水层解锁印记",

    // ===== 游戏消息 =====
    "Changed your mind? Ready to build a Tanning Rack?": "改变主意了？准备好建鞣革架了吗？",
    "Yes (Switch to Standard Mode permanently)": "是（永久切换到标准模式）",
    "Nothing seems to happen. The boulder is far too hard to carve with your current strength.": "什么也没发生。巨石太硬了，以你当前的力量无法雕刻。",
    "With each strike, the stone yields. Beneath the rough exterior, an ancient altar emerges.": "每一下敲击，石头都在松动。粗糙的外表下，一座古老的祭坛显现出来。",
    "A colorful capsule machine has appeared in the Farfields. A Coin buys a twist of the knob, and each twist brings a little surprise.": "远野出现了一台五彩缤纷的胶囊机。一枚金币扭一次旋钮，每次扭转都会带来小惊喜。",
    "When your stamina runs out or you have no more moves, click here or press [B] to head back to the surface!": "当体力耗尽或无法继续移动时，点击此处或按 [B] 键返回地表！",
    "Digging costs stamina! Tougher soil costs you more stamina per dig.": "挖掘消耗体力！越硬的土壤每次挖掘消耗的体力越多。",

    // ===== 场景/地点 =====
    "sign left": "向左指示牌",
    "sign right": "向右指示牌",
    "gacha knob": "扭蛋旋钮",
    "gacha machine": "扭蛋机",
    "slot machine": "老虎机",
    "slot machine blur": "老虎机模糊",
    "slot machine handle": "老虎机手柄",
    "slot symbol": "老虎机符号",
    "smelter furnace": "熔炼炉",
    "blacksmith anvil": "铁匠铁砧",
    "treasure chest": "宝箱",
    "trinket shop": "小物件商店",
    "dispensed capsule": "已出胶囊",
    "music note": "音符",
    "falling-sand": "落沙",
    "falling-sand-bg": "落沙背景",
    "ironwood tree": "铁木树",
    "sheep": "羊",

    // ===== 资源图标 =====
    "copper": "铜",
    "iron": "铁",
    "gold": "金",
    "cow": "牛",
    "tree": "树",
    "cloud": "云",
    "goldbar": "金锭",
    "ironbar": "铁锭",
    "copperbar": "铜锭",
    "titanium": "钛",
    "titaniumbar": "钛锭",
    "cobaltbar": "钴锭",
    "vermilionbar": "朱砂锭",
    "sigil": "印记",
    "stall": "摊位",
    "lorestone": "知识石",
    "dojo": "道场",
    "gramophone": "留声机",
    "Cadence": "韵律",

    // ===== 区域解锁消息 =====
    "Occult Oddities": "神秘奇物",
    "The tunnels stir, a breeze slips through cracks unnoticed. Mistral has joined your dig squad!": "隧道骚动起来，一阵微风从裂缝中悄然潜入。米斯特拉尔加入了你的挖掘队伍！",
    "As quartz meets molten rock, a figure crystallizes from the magma. Nix has joined your dig squad!": "当石英遇到熔岩时，一个身影从岩浆中结晶而出。尼克斯加入了你的挖掘队伍！",
    "As if by magic, a signpost appears where the slot machine once stood. It points east to the Farfields.": "仿佛变魔术一般，老虎机消失的地方出现了一个路标。它指向东方的远野。",
    "So much water... so much potential. You accidentally overfill your flask, and now you have... a Full Flask.": "如此多的水……如此多的潜力。你不小心把水壶装得太满，现在你有了……一个满水壶。",

    // ===== 设置/选项 =====
    "Emojify!": "表情符号！",
    "Go to options": "前往选项",
    "Read help": "阅读帮助",
    "Size adj:": "大小调整：",
    "View original": "查看原文",
    "Changes made from this popup are temporary and only affect the current tab.": "此弹窗做出的更改是临时的，仅影响当前标签页。",

    // ===== 表情字体 =====
    "   Blobmoji": "   Blobmoji",
    "   EmojiTwo": "   EmojiTwo",
    "   Fluent Emoji": "   Fluent Emoji",
    "   Fluent Emoji Mono": "   Fluent Emoji Mono",
    "   Noto Color Emoji": "   Noto Color Emoji",
    "   Noto Emoji Mono": "   Noto Emoji Mono",
    "   OpenMoji": "   OpenMoji",
    "   OpenMoji Black": "   OpenMoji Black",
    "   OpenSans+Noto": "   OpenSans+Noto",
    "   System default": "   系统默认",
    "   Twemoji": "   Twemoji",

    // ===== 用户补充遗漏翻译 =====
    "Hard Soil": "坚硬土壤",
    "Mud": "泥浆",
    "Stone": "石头",
    "Granite": "花岗岩",
    "Ice": "冰",
    "Magma": "岩浆",
    "Obsidian": "黑曜石",
    "Water": "水",
    "Deepwater": "深水",
    "Subsoil": "底土",
    "Gravel": "砾石",
    "Underbark": "树皮下",
    "Sporegrove": "孢子林",
    "Blightvein": "枯萎矿脉",
    "Shimmera": "闪光层",
    "Umbra": "暗影层",
    "Void": "虚空",
    "Core": "核心",
    "Anvil": "铁砧",
    "Altar": "祭坛",
    "Tools": "工具",
    "Relics": "圣物",
    "Headgear": "头部装备",
    "No": "否",
    "Bits and Bobs": "零碎小物",
    "Gramophone OFF": "留声机 - 关闭",
    "View Farfields resources": "查看远野资源",
    "View Meadow resources": "查看草地资源",
    "Don't build [": "不建造 [",
    "] (Leathercrafting disabled)": "] (皮革制作已禁用)",
    "These special cells restore your stamina when dug.\n\nLook for them when your stamina is low!": "这些特殊单元在挖掘时会恢复体力。\n\n体力低的时候找找它们吧！",
    "When this bar fills up, you regenerate 1 stamina!\n\nThe number shows how many more cells you need to dig to fill it. Higher Regeneration levels make the bar fill faster.": "此条填满时恢复1点体力！\n\n数字显示还需挖掘多少单元才能填满。恢复等级越高，填得越快。",

    // ===== 乌龟解锁条件 =====
    "Reward from a random chest": "随机宝箱奖励",
    "Have 60 Iron Bars": "拥有60个铁锭",
    "Dig 20,000 cells": "挖掘20,000个单元",
    "Have more than 250 light": "拥有超过250光照",
    "Spend 300 Quartz in the slot machine": "在老虎机花费300石英",
    "Collect 35 restore cells in a single run": "单次运行收集35个恢复单元",
    "Dig up a Quartz in Magma (not spawned naturally)": "在岩浆中挖出石英（非自然生成）",
    "Reach Magma layer from the surface barefoot": "赤脚从地表到达岩浆层",
    "Own more than 6 accessories": "拥有超过6个饰品",
    "Relics Collected": "圣物收集",
    "(Max)": "（最大）",
};
// ============================================================
// cnResourceNames — 资源名词翻译（备用，优先级低于 cnItems）
// ============================================================
// 支持 "名词: 数值" 格式的自动翻译（如 "Mana: 500" → "法力：500"）
var cnResourceNames = {};
// cnRegReplace — 正则替换（备用，优先级低于精确匹配但高于模板/分类）
var cnRegReplace = new Map([
    // 多行统计面板（结束画面）
    [/^Total playtime: (\d+)h (\d+)m (\d+)s\nCells dug: (\d+)\nMax depth: (\d+)\nDeparted cows: (\d+)\nReturned to surface: (\d+) times$/,
     (m) => `总游玩时间：${m[1]}小时${m[2]}分${m[3]}秒\n挖掘单元：${m[4]}\n最大深度：${m[5]}\n奶牛离去：${m[6]}\n返回地表：${m[7]}次`],
    // 单个统计标签：总游玩时间
    [/^Total playtime: (\d+)h (\d+)m (\d+)s$/, (m) => `总游玩时间：${m[1]}小时${m[2]}分${m[3]}秒`],
    // 单行统计：Departed cows: N
    [/^Departed cows: (\d+)$/, (m) => `奶牛离去：${m[1]}`],
    // 单行统计：Returned to surface: N times
    [/^Returned to surface: (\d+) times$/, (m) => `返回地表：${m[1]}次`],
    // 单行统计：Returned to surface: 1 time (单数)
    [/^Returned to surface: 1 time$/, (m) => `返回地表：1次`],
    // 单行统计：Max depth: N
    [/^Max depth: (\d+)$/, (m) => `最大深度：${m[1]}`],
    // 单行统计：Sheep sheared: N
    [/^Sheep sheared: (\d+)$/, (m) => `剪羊毛：${m[1]}`],
    // 单行统计：Quartz gambled: N
    [/^Quartz gambled: (\d+)$/, (m) => `石英赌注：${m[1]}`],
    // 动态模板：Reach Water as {角色名}
    [/^Reach Water as (.+)$/, (m) => `以${m[1]}身份到达水源`],
    // 动态模板：Reach the Deepwater with {角色名}
    [/^Reach the Deepwater with (.+)$/, (m) => `与${m[1]}到达深水层`],
]);
// 前缀/后缀提取（备用）
var cnPrefix = {};
var cnPostfix = {};
// 排除规则（备用）
var cnExcludeWhole = [];
var cnExcludePostfix = [];

// ✅ 在数据加载完成后重建翻译引擎索引
if (typeof rebuildIndices === 'function') {
    rebuildIndices();
    console.log("chs.js: 翻译数据已加载，索引已重建");
}
