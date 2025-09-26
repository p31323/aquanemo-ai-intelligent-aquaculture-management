// Fix: Add React and ReactDOM imports to resolve JSX, hooks, and rendering errors.
import React from 'react';
import ReactDOM from 'react-dom/client';

// --- MOCK DATA --- //
const managerKPIs = [
  { title: "總存活率", value: "98.5%", change: 0.2, positive: true },
  { title: "平均FCR", value: "1.2", change: -0.1, positive: true },
  { title: "預估月利潤", value: "+5.2%", change: 1.5, positive: true },
  { title: "今日總能耗", value: "-3%", change: -1.2, positive: true },
];

const alerts = [
  { 
    type: 'critical', 
    title: '[緊急] 3號槽AI偵測到疑似白點病', 
    content: '2隻魚隻出現異常行為。信賴度92%。', 
    actions: ['查看詳情', '一鍵通報技術員'],
    tankId: 3
  },
  { 
    type: 'warning', 
    title: '[預測] 5號槽溶氧量趨勢下降', 
    content: '預計12小時後可能低於安全閾值。', 
    actions: ['啟動智能增氧排程'],
    tankId: 5
  },
  { 
    type: 'info', 
    title: '[市場] 畢卡索品系國際市場價格上漲8%', 
    content: '建議增加出貨準備。', 
    actions: ['查看市場洞察'],
    tankId: null
  },
];

const tanks = [
    { id: 1, status: 'ok', name: 'A級畢卡索 - 育苗前期', species: '畢卡索' }, 
    { id: 2, status: 'ok', name: 'B級黑瑪瑙 - 中期', species: '黑瑪瑙' }, 
    { id: 3, status: 'critical', name: 'A級畢卡索 - 育苗中期', species: '畢卡索' },
    { id: 4, status: 'ok', name: 'C級雪花 - 後期', species: '雪花' }, 
    { id: 5, status: 'warning', name: 'S級畢卡索 - 親代', species: '畢卡索' }, 
    { id: 6, status: 'ok', name: 'B級黑瑪瑙 - 前期', species: '黑瑪瑙' },
    { id: 7, status: 'ok', name: 'A級雪花 - 中期', species: '雪花' }, 
    { id: 8, status: 'ok', name: '種魚隔離槽', species: '混合' },
];

const financialSummary = {
    revenue: 125000,
    costs: 85000,
    profit: 40000,
};

const costBreakdown = [
    { name: '飼料 (Feed)', value: 45000, color: 'bg-cyan-500' },
    { name: '電力 (Energy)', value: 20000, color: 'bg-violet-500' },
    { name: '人力 (Labor)', value: 15000, color: 'bg-yellow-500' },
    { name: '其他 (Other)', value: 5000, color: 'bg-blue-500' },
];

const monthlyPerformance = [
    { month: '一月', revenue: 40000, cost: 28000 },
    { month: '二月', revenue: 45000, cost: 30000 },
    { month: '三月', revenue: 52000, cost: 35000 },
    { month: '四月', revenue: 48000, cost: 33000 },
];

const batchProfitability = [
    { id: 'A-2024-01', species: '畢卡索', revenue: 50000, cost: 32000, profit: 18000 },
    { id: 'B-2024-01', species: '黑瑪瑙', revenue: 45000, cost: 31000, profit: 14000 },
    { id: 'A-2023-12', species: '畢卡索', revenue: 30000, cost: 22000, profit: 8000 },
    { id: 'C-2024-01', species: '雪花', revenue: 62000, cost: 40000, profit: 22000 },
];

const breedingAssets = [
    { id: '#X10', species: '畢卡索', grade: 'S+', parentId: null, traits: { '白紋連接性': 5, '體型飽滿度': 4 }, healthHistory: '無爛鰭病史', imageUrl: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=400' },
    { id: '#Y25', species: '畢卡索', grade: 'A', parentId: '#X10', traits: { '白紋連接性': 4, '體型飽滿度': 5 }, healthHistory: '良好', imageUrl: 'https://images.unsplash.com/photo-1593994399702-6c3a1f33a8a0?q=80&w=400' },
    { id: '#Z03', species: '黑瑪瑙', grade: 'S', parentId: null, traits: { '黑體純度': 5, '體型飽滿度': 5 }, healthHistory: '良好', imageUrl: 'https://images.unsplash.com/photo-1544551763-77852e7f7b9b?q=80&w=400' },
    { id: '#A15', species: '雪花', grade: 'A+', parentId: null, traits: { '斑點分布': 4, '體型飽滿度': 4 }, healthHistory: '良好', imageUrl: 'https://images.unsplash.com/photo-1608105315217-1a0525e24a8f?q=80&w=400' },
    { id: '#B30', species: '畢卡索', grade: 'A', parentId: '#X10', traits: { '白紋連接性': 3, '體型飽滿度': 4 }, healthHistory: '無爛鰭病史', imageUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=400' },
    { id: '#C42', species: '黑瑪瑙', grade: 'A', parentId: '#Z03', traits: { '黑體純度': 4, '體型飽滿度': 5 }, healthHistory: '良好', imageUrl: 'https://images.unsplash.com/photo-1560947997-5a4a2f8b5037?q=80&w=400' },
];

// Data for Decision Support
const feedOptions = [
    { id: 'current', name: '目前飼料 (B牌)', costPerKg: 1.8, fcrModifier: 0 },
    { id: 'A', name: 'A牌高效飼料', costPerKg: 2.2, fcrModifier: -0.15 },
    { id: 'C', name: 'C牌經濟飼料', costPerKg: 1.4, fcrModifier: 0.1 },
];

const batchProfitabilityWithFCR = batchProfitability.map((b, i) => ({
    ...b,
    fcr: 1.2 + i * 0.05,
    totalFeedKg: (b.cost * 0.6) / 1.8 
}));

const priceTrends = {
    '畢卡索': [ { week: -3, price: 25 }, { week: -2, price: 26 }, { week: -1, price: 28 }, { week: 0, price: 27 }, { week: 1, price: 29, predicted: true }, { week: 2, price: 30, predicted: true }, { week: 3, price: 31, predicted: true }, { week: 4, price: 30, predicted: true } ],
    '黑瑪瑙': [ { week: -3, price: 30 }, { week: -2, price: 29 }, { week: -1, price: 31 }, { week: 0, price: 32 }, { week: 1, price: 33, predicted: true }, { week: 2, price: 32, predicted: true }, { week: 3, price: 34, predicted: true }, { week: 4, price: 35, predicted: true } ],
};

const marketHotness = [
    { name: '雪花白紋', score: 95, trend: 'up' },
    { name: '閃電紋', score: 88, trend: 'up' },
    { name: '全黑瑪瑙', score: 82, trend: 'stable' },
    { name: '經典畢卡索', score: 75, trend: 'down' },
];

const sustainabilityMetrics = {
    carbonFootprint: { value: 1.25, unit: 'tCO2e/ton', change: -0.05, positive: false },
    waterUsage: { value: 15.3, unit: 'm³/ton', change: -0.2, positive: false },
};

// Data for Farm Setup
const initialFarmLayout = tanks.map((tank, index) => ({
    ...tank,
    gridPosition: { x: index % 4, y: Math.floor(index / 4) },
    devices: [],
}));

const initialIotDevices = [
    { id: 'TEMP-0A3F5C', type: 'temp-sensor', name: '溫度計 #1' },
    { id: 'DO-9B1D8E', type: 'do-sensor', name: '溶氧感測器 #1' },
    { id: 'PH-4C6A2B', type: 'ph-sensor', name: '酸鹼度計 #1' },
    { id: 'CAM-F7E9C1', type: 'camera', name: '水下攝影機 #A' },
    { id: 'TEMP-1B4G6D', type: 'temp-sensor', name: '溫度計 #2' },
    { id: 'DO-8A2E9F', type: 'do-sensor', name: '溶氧感測器 #2' },
];

// Data for User Management
const users = [
  { id: 1, name: '陳經理', email: 'manager.chen@aquanemo.ai', role: '管理者', lastLogin: '2024-05-21 08:30', status: 'active' },
  { id: 2, name: '小李', email: 'li.tech@aquanemo.ai', role: '現場技術員', lastLogin: '2024-05-21 07:55', status: 'active' },
  { id: 3, name: '王博士', email: 'wang.breeder@aquanemo.ai', role: '育種專家', lastLogin: '2024-05-20 15:10', status: 'active' },
  { id: 4, name: '訪客稽核員', email: 'audit@external.com', role: '訪客/稽核員', lastLogin: '2024-05-19 11:00', status: 'disabled' },
];

const initialRolesConfig = {
  '管理者': {
    '查看儀表板': true, '控制設備': true, '編輯警報閾值': true, '查看財務報告': true,
    '管理育種資產': true, '生成報告': true, '管理使用者': true, '設定系統': true,
  },
  '現場技術員': {
    '查看儀表板': true, '控制設備': true, '編輯警報閾值': false, '查看財務報告': false,
    '管理育種資產': false, '生成報告': false, '管理使用者': false, '設定系統': false,
  },
  '育種專家': {
    '查看儀表板': true, '控制設備': false, '編輯警報閾值': false, '查看財務報告': false,
    '管理育種資產': true, '生成報告': true, '管理使用者': false, '設定系統': false,
  },
  '訪客/稽核員': {
    '查看儀表板': true, '控制設備': false, '編輯警報閾值': false, '查看財務報告': true,
    '管理育種資產': false, '生成報告': true, '管理使用者': false, '設定系統': false,
  },
};

const initialAutomationRules = [
    { id: 1, name: "低溶氧自動增氧", description: "當任一槽溶氧量低於 5.0 持續 5 分鐘，自動啟動增氧機並通知技術員", enabled: true },
    { id: 2, name: "夜間節能模式", description: "每日 22:00 至 06:00，自動降低水泵流速 20%", enabled: true },
    { id: 3, name: "AI 疾病警報", description: "當 AI 偵測到疑似疾病，自動建立紅色警報並發送通知給管理者與技術員", enabled: false },
];

const iotDeviceStatus = [
    ...initialIotDevices,
    { id: 'PUMP-A01', type: 'pump', name: '主循環水泵 #1' },
    { id: 'PUMP-A02', type: 'pump', name: '主循環水泵 #2' },
    { id: 'AERATOR-01', type: 'aerator', name: '增氧機 (1號槽)' },
].map((device, i) => ({ ...device, status: i % 6 === 0 ? 'offline' : 'online', tankId: (i % 8) + 1 }));


const systemLogs = [
    { timestamp: '2024-05-21 10:05:15', level: 'INFO', message: '使用者 陳經理 登入系統' },
    { timestamp: '2024-05-21 10:05:20', level: 'INFO', message: '規則 #1 觸發: 5號槽溶氧量為 4.8 mg/L' },
    { timestamp: '2024-05-21 10:05:21', level: 'INFO', message: '執行動作: 啟動5號槽增氧機' },
    { timestamp: '2024-05-21 10:05:22', level: 'INFO', message: '執行動作: 發送SMS通知至 現場