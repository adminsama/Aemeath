const { createApp, markRaw } = Vue;
const FALLBACK_IMAGE = "/themes/aemeath/dist/assets/aemeath.png";
const GLOBE_GEO_LABELS = [
  { id: "north-america", lat: 45, lon: -104, zh: "北美洲", en: "NORTH AMERICA" },
  { id: "south-america", lat: -18, lon: -60, zh: "南美洲", en: "SOUTH AMERICA" },
  { id: "europe", lat: 52, lon: 17, zh: "欧洲", en: "EUROPE" },
  { id: "africa", lat: 7, lon: 22, zh: "非洲", en: "AFRICA" },
  { id: "asia", lat: 43, lon: 88, zh: "亚洲", en: "ASIA" },
  { id: "oceania", lat: -28, lon: 137, zh: "大洋洲", en: "OCEANIA" },
  { id: "pacific", lat: 3, lon: -154, zh: "太平洋", en: "PACIFIC" },
  { id: "atlantic", lat: 12, lon: -33, zh: "大西洋", en: "ATLANTIC" },
  { id: "indian", lat: -22, lon: 78, zh: "印度洋", en: "INDIAN OCEAN" },
];
const copy = {
  "zh-CN": {
    overview: "概览",
    probe: "拨测",
    map: "分布",
    billing: "账单",
    navigation: "主导航",
    live: "实时连接",
    syncing: "正在同步",
    language: "切换语言",
    appearance: "切换外观",
    heroEyebrow: "星炬导航 / 长航星辉 01",
    heroTitle: "星辉航行观测阵列",
    heroText: "但愿我会让你感到骄傲，但愿我没有让你失望。",
    online: "在线",
    phaseLock: "航迹锁定",
    phaseStable: "连接状态：稳定",
    phaseWatch: "连接状态：待检查",
    frame: "帧",
    onlineNodes: "在线上行链路",
    nodeArray: "节点阵列",
    totalTraffic: "累计传输",
    lastSync: "最后同步",
    visible: "可见",
    search: "搜索节点",
    unnamed: "未命名节点",
    linked: "已连接",
    idle: "空闲",
    phaseArray: "星炬航迹",
    nominal: "正常",
    watch: "观察",
    averageCpu: "平均 CPU",
    averageMemory: "平均内存",
    liveTelemetry: "实时遥测",
    empty: "没有匹配的节点。",
    refresh: "刷新",
    probeSub: "公开 Ping 任务与节点连接质量",
    unnamedTask: "未命名任务",
    noTasks: "未检测到公开拨测任务。",
    probeWindow: "时间窗口",
    latencyTrace: "延迟轨迹",
    probeAll: "公开任务综合 / 全部节点",
    probeSelected: "公开任务综合 / 指定节点",
    probeDetailSub: "该节点完整延迟记录与丢包统计",
    historyWindow: "历史窗口",
    historySub: "切换后加载该节点公开的完整记录",
    sampleCount: "有效样本",
    minLatency: "最低延迟",
    maxLatency: "最高延迟",
    loading: "正在同步公开记录...",
    node: "节点",
    latency: "延迟",
    loss: "丢包",
    status: "状态",
    degraded: "受限",
    stable: "稳定",
    noProbeData: "此任务暂时没有公开的拨测记录。",
    probeSummary: "拨测摘要",
    taskInterval: "任务间隔",
    averageLatency: "平均延迟",
    packetLoss: "平均丢包",
    mapSub: "优先采用节点经纬度，其次按城市与地区定位的信号分布图",
    mapZoom: "地图缩放",
    zoomIn: "放大地图",
    zoomOut: "缩小地图",
    zoomReset: "重置地图缩放",
    signalCpu: "24 小时平均 CPU",
    signalRam: "24 小时平均内存",
    signalTraffic: "24 小时平均流量",
    signalLive: "实时机群信号",
    mapped: "已定位",
    offline: "离线",
    billingSub: "按公开价格与计费周期折算，并按币种分别统计",
    monthlySpend: "月度估算",
    paidNodes: "已配置付费节点",
    renewingSoon: "30 天内到期",
    nodeCost: "节点费用",
    normalizedMonth: "按币种分别统计 · 折算为 30 天",
    noBilling: "节点尚未配置公开价格。",
    currencyTotals: "按币种汇总",
    back: "返回概览",
    loadTrace: "负载轨迹",
    nodeInfo: "节点信息",
    cores: "核心",
    uptime: "运行时间",
    trafficLimit: "流量上限",
    unlimited: "不限",
    price: "价格",
    nodeNotFound: "节点不存在或不可见。",
    footer: "实时观测已启用",
    notSet: "未设置",
    unknown: "未知",
    nodeLayout: "节点阵列布局",
    layoutclassic: "双列阵列",
    layoutgrid_3: "三列阵列",
    layoutgrid_4: "四列阵列",
    cpuModel: "CPU 型号",
    hardwareProfile: "硬件与系统",
    reportedFields: "来自节点公开上报字段",
    architecture: "架构",
    operatingSystem: "操作系统",
    kernel: "内核",
    processorThreads: "逻辑线程",
    memoryTotal: "内存总量",
    diskTotal: "磁盘总量",
    networkInterface: "网络接口",
    publicAddress: "公开地址",
    days: "天后",
    expired: "已到期",
    globeOrbit: "星炬全球观测轨道",
    globeHint: "拖动旋转 · 滚轮缩放 · 点击信标查看节点",
    globeLoading: "正在校准星图与地理边界...",
    loaderSignal: "心核信号正在接入",
    globeUnavailable: "当前浏览器无法启用 3D 地球，仍可通过下方列表查看节点。",
  },
  en: {
    overview: "OVERVIEW",
    probe: "PROBE",
    map: "DISTRIBUTION",
    billing: "BILLING",
    navigation: "Primary navigation",
    live: "LIVE LINK",
    syncing: "SYNCING",
    language: "Change language",
    appearance: "Change appearance",
    heroEyebrow: "STELLAR BEACON / LONG VOYAGE 01",
    heroTitle: "STARLIGHT OBSERVATORY",
    heroText: "I hope I made you proud. I hope I did not let you down.",
    online: "ONLINE",
    phaseLock: "ROUTE LOCK",
    phaseStable: "LINK STATUS: STABLE",
    phaseWatch: "LINK STATUS: ATTENTION",
    frame: "FRAME",
    onlineNodes: "UPLINKS ONLINE",
    nodeArray: "NODE ARRAY",
    totalTraffic: "TOTAL TRANSMISSION",
    lastSync: "LAST SYNC",
    visible: "VISIBLE",
    search: "Search nodes",
    unnamed: "Unnamed node",
    linked: "LINKED",
    idle: "IDLE",
    phaseArray: "BEACON ROUTE",
    nominal: "NOMINAL",
    watch: "WATCH",
    averageCpu: "AVG. CPU",
    averageMemory: "AVG. MEMORY",
    liveTelemetry: "LIVE TELEMETRY",
    empty: "No matching nodes.",
    refresh: "REFRESH",
    probeSub: "Public ping tasks and node connection quality",
    unnamedTask: "Unnamed task",
    noTasks: "No public ping tasks detected.",
    probeWindow: "WINDOW",
    latencyTrace: "LATENCY TRACE",
    probeAll: "PUBLIC TASK AGGREGATE / ALL NODES",
    probeSelected: "PUBLIC TASK AGGREGATE / SELECTED NODES",
    probeDetailSub: "Full node latency records and packet-loss summary",
    historyWindow: "HISTORY WINDOW",
    historySub: "Switch to load this node's complete public records",
    sampleCount: "VALID SAMPLES",
    minLatency: "MIN. LATENCY",
    maxLatency: "MAX. LATENCY",
    loading: "SYNCING PUBLIC RECORDS...",
    node: "NODE",
    latency: "LATENCY",
    loss: "LOSS",
    status: "STATUS",
    degraded: "DEGRADED",
    stable: "STABLE",
    noProbeData: "No public probe data is available for this task yet.",
    probeSummary: "PROBE SUMMARY",
    taskInterval: "TASK INTERVAL",
    averageLatency: "AVG. LATENCY",
    packetLoss: "AVG. PACKET LOSS",
    mapSub: "Signal distribution using node coordinates first, then city and region matching",
    mapZoom: "Map zoom",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    zoomReset: "Reset zoom",
    signalCpu: "24H AVG. CPU",
    signalRam: "24H AVG. MEMORY",
    signalTraffic: "24H AVG. TRAFFIC",
    signalLive: "LIVE FLEET SIGNAL",
    mapped: "MAPPED",
    offline: "OFFLINE",
    billingSub:
      "Normalized from public price and billing cycle, grouped by currency",
    monthlySpend: "MONTHLY ESTIMATE",
    paidNodes: "PRICED NODES",
    renewingSoon: "DUE IN 30 DAYS",
    nodeCost: "NODE COST",
    normalizedMonth: "GROUPED BY CURRENCY · NORMALIZED TO 30 DAYS",
    noBilling: "No public node price is configured.",
    currencyTotals: "CURRENCY TOTALS",
    back: "BACK TO OVERVIEW",
    loadTrace: "LOAD TRACE",
    nodeInfo: "NODE INFO",
    cores: "CORES",
    uptime: "UPTIME",
    trafficLimit: "TRAFFIC LIMIT",
    unlimited: "UNLIMITED",
    price: "PRICE",
    nodeNotFound: "Node does not exist or is not visible.",
    footer: "LIVE OBSERVATION ENABLED",
    notSet: "NOT SET",
    unknown: "UNKNOWN",
    nodeLayout: "NODE ARRAY LAYOUT",
    layoutclassic: "Two-column array",
    layoutgrid_3: "Three-column array",
    layoutgrid_4: "Four-column array",
    cpuModel: "CPU MODEL",
    hardwareProfile: "HARDWARE & SYSTEM",
    reportedFields: "PUBLIC NODE-REPORTED FIELDS",
    architecture: "ARCHITECTURE",
    operatingSystem: "OPERATING SYSTEM",
    kernel: "KERNEL",
    processorThreads: "LOGICAL THREADS",
    memoryTotal: "TOTAL MEMORY",
    diskTotal: "TOTAL DISK",
    networkInterface: "NETWORK INTERFACE",
    publicAddress: "PUBLIC ADDRESS",
    days: "DAYS LEFT",
    expired: "EXPIRED",
    globeOrbit: "STELLAR GLOBAL OBSERVATION ORBIT",
    globeHint: "DRAG TO ROTATE · WHEEL TO ZOOM · SELECT A BEACON",
    globeLoading: "CALIBRATING STAR MAP AND GEOGRAPHIC BORDERS...",
    loaderSignal: "CORE SIGNAL UPLINK",
    globeUnavailable: "The 3D globe is unavailable. Use the node list below.",
  },
};
const demoNodes = [
  {
    uuid: "aurora",
    name: "Aurora Relay",
    region: "Japan",
    os: "Debian GNU/Linux 12",
    cpu_cores: 4,
    cpu_name: "AMD EPYC 7B13",
    arch: "x86_64",
    kernel: "6.1.0-cloud-amd64",
    ip: "203.0.113.18",
    mem_total: 8589934592,
    disk_total: 171798691840,
    price: 9,
    currency: "$",
    billing_cycle: 30,
  },
  {
    uuid: "lighthouse",
    name: "Lighthouse",
    region: "United States",
    os: "Ubuntu 24.04",
    cpu_cores: 2,
    cpu_name: "Intel Xeon Platinum 8370C",
    arch: "x86_64",
    kernel: "6.8.0-generic",
    ip: "198.51.100.42",
    mem_total: 4294967296,
    disk_total: 85899345920,
    price: 5,
    currency: "$",
    billing_cycle: 30,
  },
  {
    uuid: "stardust",
    name: "Stardust Archive",
    region: "Germany",
    os: "AlmaLinux 9",
    cpu_cores: 4,
    cpu_name: "AMD EPYC 7763",
    arch: "x86_64",
    kernel: "5.14.0-503.el9",
    ip: "192.0.2.67",
    mem_total: 17179869184,
    disk_total: 343597383680,
    price: 7,
    currency: "EUR",
    billing_cycle: 30,
  },
];
const demoLive = {
  aurora: {
    cpu: { usage: 18 },
    ram: { used: 3264175145, total: 8589934592 },
    disk: { used: 65283502899, total: 171798691840 },
    network: {
      up: 15000,
      down: 42000,
      totalUp: 128849018880,
      totalDown: 266287972352,
    },
    uptime: 716400,
    process: 96,
  },
  lighthouse: {
    cpu: { usage: 43 },
    ram: { used: 2628519987, total: 4294967296 },
    disk: { used: 39582418599, total: 85899345920 },
    network: {
      up: 9000,
      down: 25000,
      totalUp: 68719476736,
      totalDown: 137438953472,
    },
    uptime: 366000,
    process: 73,
  },
  stardust: {
    cpu: { usage: 8 },
    ram: { used: 4638564679, total: 17179869184 },
    disk: { used: 109951162777, total: 343597383680 },
    network: {
      up: 3100,
      down: 10000,
      totalUp: 51539607552,
      totalDown: 103079215104,
    },
    uptime: 975600,
    process: 121,
  },
};
createApp({
  data() {
    return {
      nodes: [],
      live: {},
      onlineIds: [],
      settings: {},
      route: "overview",
      selectedId: null,
      search: "",
      nodeView: "classic",
      socket: null,
      socketPoll: null,
      connected: false,
      usingDemo: false,
      appearance: localStorage.getItem("appearance") || "dark",
      language: localStorage.getItem("language") || "zh-CN",
      now: new Date(),
      activeMetric: "cpu",
      tasks: [],
      activeTask: null,
      probeRecords: [],
      probeInfo: [],
      probeHours: 24,
      probeNodeId: null,
      probeDetailHours: 24,
      probeDetailRecords: [],
      probeDetailCache: {},
      probeDetailLoading: false,
      histories: {},
      detailHours: 24,
      signalHistory: [],
      liveSignalSamples: [],
      signalLoading: false,
      chartZoom: {
        hero: { start: 0, end: 1 },
        probe: { start: 0, end: 1 },
        "probe-detail": { start: 0, end: 1 },
        "detail-load": { start: 0, end: 1 },
        "detail-ping": { start: 0, end: 1 },
      },
      mapScale: 1,
      globeLoading: true,
      globe: null,
      globeInitTimer: null,
      mapDrag: {
        active: false,
        startX: 0,
        startY: 0,
        rotationX: 0,
        rotationY: 0,
        moved: false,
      },
      chartHover: {
        key: "",
        x: 0,
        y: 0,
        left: 0,
        top: 0,
        label: "",
        value: "",
      },
      stars: Array.from({ length: 76 }, (_, id) => ({
        id,
        x: +(Math.random() * 100).toFixed(2),
        y: +(Math.random() * 100).toFixed(2),
        size: +(0.8 + Math.random() * 2.6).toFixed(2),
        color: ["var(--cyan)", "var(--rose)", "var(--gold)", "var(--text)"][
          Math.floor(Math.random() * 4)
        ],
        duration: +(1.8 + Math.random() * 4.6).toFixed(2),
        delay: +(-Math.random() * 5).toFixed(2),
      })),
      meteors: Array.from({ length: 8 }, (_, id) => ({
        id,
        x: +(4 + Math.random() * 70).toFixed(2),
        y: +(2 + Math.random() * 45).toFixed(2),
        length: Math.round(120 + Math.random() * 180),
        angle: Math.round(20 + Math.random() * 18),
        color: ["var(--cyan)", "var(--rose)", "var(--gold)"][id % 3],
        duration: +(10 + Math.random() * 10).toFixed(2),
        delay: +(-Math.random() * 18).toFixed(2),
      })),
      clock: null,
      retryTimer: null,
    };
  },
  computed: {
    navItems() {
      const items = [{ key: "overview" }, { key: "probe" }, { key: "map" }];
      if (this.hasBilling) items.push({ key: "billing" });
      return items;
    },
    subtitle() {
      return this.settings.panel_subtitle || "AEMEATH / NODE OBSERVATORY";
    },
    heroDescription() {
      const setting =
        this.language === "zh-CN"
          ? this.settings.hero_text_zh
          : this.settings.hero_text_en;
      const legacy =
        this.language === "zh-CN"
          ? "以爱弥斯的海潮、晶体与绯色能量为灵感构建的实时节点观测界面。"
          : "A real-time node observatory shaped by Aemeath-inspired tides, crystal geometry, and rose energy.";
      return setting && setting !== legacy ? setting : this.t("heroText");
    },
    characterImage() {
      return this.settings.character_image || FALLBACK_IMAGE;
    },
    siteName() {
      return this.settings.sitename || "AEMEATH";
    },
    showSiteName() {
      return this.settingBool(this.settings.show_site_name, true);
    },
    heroSignalMetric() {
      const metric = this.settings.hero_signal_metric || "cpu";
      return ["cpu", "ram", "traffic"].includes(metric) ? metric : "cpu";
    },
    heroSignalHours() {
      return Math.max(
        1,
        Math.min(48, this.number(this.settings.hero_signal_hours) || 24),
      );
    },
    backgroundMode() {
      return this.settings.background_mode === "circuit" ? "circuit" : "starfield";
    },
    nodeSortMode() {
      const mode = this.settings.node_sort_mode || "weight_desc";
      return ["weight_desc", "weight_asc", "backend"].includes(mode)
        ? mode
        : "weight_desc";
    },
    nodeViewOptions() {
      return ["classic", "grid_3", "grid_4"];
    },
    configuredNodeView() {
      const mode = this.settings.node_display_mode || "classic";
      return this.nodeViewOptions.includes(mode) ? mode : "classic";
    },
    orderedNodes() {
      const indexed = this.nodes.map((node, index) => ({ node, index }));
      if (this.nodeSortMode === "backend")
        return indexed.map((item) => item.node);
      const direction = this.nodeSortMode === "weight_asc" ? 1 : -1;
      return indexed
        .sort((a, b) => {
          const diff = this.number(a.node.weight) - this.number(b.node.weight);
          return diff ? diff * direction : a.index - b.index;
        })
        .map((item) => item.node);
    },
    telemetryNodes() {
      return this.orderedNodes.slice(0, 5);
    },
    signalValues() {
      const values = this.heroVisibleSamples.map((sample) =>
        this.number(sample.value),
      );
      return values.length === 1 ? [values[0], values[0]] : values;
    },
    heroChartSamples() {
      const samples = this.signalHistory.length
        ? this.signalHistory
        : this.liveSignalSamples;
      return this.downsampleSamples(
        samples.map((sample) => ({
          time: sample.time,
          value: this.number(sample.value),
        })),
      );
    },
    heroVisibleSamples() {
      return this.visibleChartSamples("hero", this.heroChartSamples);
    },
    signalPoints() {
      const values = this.signalValues.length ? this.signalValues : [0];
      const min = Math.min(...values);
      const max = Math.max(...values);
      const range = max - min || 1;
      return values.map((value, index) => ({
        x: (index / (values.length - 1 || 1)) * 305,
        y: max === min ? 53 : 91 - ((value - min) / range) * 73,
      }));
    },
    signalPath() {
      return this.signalPoints
        .map(
          (point, index) =>
            `${index ? "L" : "M"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`,
        )
        .join(" ");
    },
    signalAreaPath() {
      const points = this.signalPoints;
      if (!points.length) return "";
      return `${this.signalPath} L${points[points.length - 1].x.toFixed(1)} 104 L${points[0].x.toFixed(1)} 104 Z`;
    },
    signalEnd() {
      return this.signalPoints[this.signalPoints.length - 1] || { x: 0, y: 53 };
    },
    signalLabel() {
      const key =
        this.heroSignalMetric === "ram"
          ? "signalRam"
          : this.heroSignalMetric === "traffic"
            ? "signalTraffic"
            : "signalCpu";
      return this.signalHistory.length
        ? `${this.heroSignalHours}H / ${this.t(key)}`
        : this.t("signalLive");
    },
    signalCurrent() {
      const raw = this.heroChartSamples[this.heroChartSamples.length - 1]?.value;
      if (!Number.isFinite(Number(raw))) return this.signalLoading ? "SYNC" : "--";
      const value = this.number(raw);
      return this.heroSignalMetric === "traffic"
        ? this.rate(value)
        : value.toFixed(1) + "%";
    },
    signalRangeLabel() {
      return (
        this.heroSignalMetric.toUpperCase() + " / " + this.heroSignalHours + "H"
      );
    },
    onlineCount() {
      return this.nodes.filter((n) => this.isOnline(n)).length;
    },
    allOnline() {
      return this.nodes.length > 0 && this.onlineCount === this.nodes.length;
    },
    connectionStatus() {
      const total = this.nodes.length;
      const offline = Math.max(0, total - this.onlineCount);
      if (!total) {
        return this.language === "zh-CN"
          ? "连接状态：等待节点数据"
          : "LINK STATUS: WAITING FOR NODE DATA";
      }
      if (!offline) return this.t("phaseStable");
      return this.language === "zh-CN"
        ? `连接状态：${this.onlineCount} / ${total} 在线，${offline} 台待检查`
        : `LINK STATUS: ${this.onlineCount} / ${total} ONLINE, ${offline} NEEDS ATTENTION`;
    },
    nowLabel() {
      return this.now.toLocaleTimeString(
        this.language === "zh-CN" ? "zh-CN" : "en-US",
        { hour: "2-digit", minute: "2-digit", second: "2-digit" },
      );
    },
    visibleNodes() {
      const q = this.search.trim().toLowerCase();
      return !q
        ? this.orderedNodes
        : this.orderedNodes.filter((n) =>
            [n.name, n.region, n.group, n.os, n.tags]
              .filter(Boolean)
              .join(" ")
              .toLowerCase()
              .includes(q),
          );
    },
    averageCpu() {
      return this.nodes.length
        ? this.nodes.reduce((s, n) => s + this.nodeCpu(n), 0) /
            this.nodes.length
        : 0;
    },
    averageMemory() {
      return this.nodes.length
        ? this.nodes.reduce((s, n) => s + this.nodeMemory(n), 0) /
            this.nodes.length
        : 0;
    },
    totalTraffic() {
      return this.nodes.reduce(
        (s, n) => s + this.totalOf(this.nodeLive(n).network),
        0,
      );
    },
    selectedNode() {
      return this.nodes.find((n) => n.uuid === this.selectedId) || null;
    },
    selectedName() {
      return this.selectedNode?.name || "";
    },
    activeTaskName() {
      return this.activeTaskObj?.name || this.t("unnamedTask");
    },
    activeTaskObj() {
      return this.tasks.find((t) => t.id === this.activeTask) || null;
    },
    selectedProbeNode() {
      return this.nodes.find((node) => node.uuid === this.probeNodeId) || null;
    },
    probeSourceNodeIds() {
      return this.settingArray(this.settings.probe_display_nodes);
    },
    probeSourceNodes() {
      return this.probeSourceNodeIds.length
        ? this.orderedNodes.filter((node) =>
            this.probeSourceNodeIds.includes(node.uuid),
          )
        : this.orderedNodes;
    },
    probeSourceLabel() {
      const count = this.probeSourceNodes.length;
      return this.probeSourceNodeIds.length
        ? `${this.t("probeSelected")} ${count}`
        : `${this.t("probeAll")} ${count}`;
    },
    probeRecordsForDisplay() {
      const ids = this.probeSourceNodeIds;
      return ids.length
        ? this.probeRecords.filter((record) => ids.includes(record.client))
        : this.probeRecords;
    },
    probeRows() {
      return this.probeSourceNodes.map((node) => {
        const r = this.probeRecords.filter((x) => x.client === node.uuid);
        const good = r.filter((x) => this.number(x.value) >= 0);
        const avg = good.length
          ? good.reduce((s, x) => s + this.number(x.value), 0) / good.length
          : null;
        const loss = r.length ? ((r.length - good.length) / r.length) * 100 : 0;
        const info =
          (this.probeInfo || []).find((x) => x.client === node.uuid) || {};
        return {
          uuid: node.uuid,
          node,
          average: avg === null ? (info.avg ?? null) : avg,
          loss: r.length ? loss : this.number(info.loss),
        };
      });
    },
    probeAverage() {
      const v = this.probeRows.map((x) => x.average).filter((x) => x !== null);
      return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
    },
    probeLoss() {
      return this.probeRows.length
        ? this.probeRows.reduce((s, x) => s + x.loss, 0) / this.probeRows.length
        : 0;
    },
    probePath() {
      return this.linePath(
        this.probeVisibleSamples.map((sample) => sample.value),
      );
    },
    probeChartSamples() {
      return this.aggregateLatencySamples(
        this.probeRecordsForDisplay,
        this.probeHours,
      );
    },
    probeVisibleSamples() {
      return this.visibleChartSamples("probe", this.probeChartSamples);
    },
    probeDetailPath() {
      return this.linePath(
        this.probeDetailVisibleSamples.map((sample) => sample.value),
      );
    },
    probeDetailChartSamples() {
      return this.recordChartSamples(
        this.probeDetailRecords,
        (record) => record.value,
      );
    },
    probeDetailVisibleSamples() {
      return this.visibleChartSamples(
        "probe-detail",
        this.probeDetailChartSamples,
      );
    },
    probeDetailStats() {
      return this.latencyStats(this.probeDetailRecords);
    },
    mappedNodes() {
      const points = this.orderedNodes
        .map((n) => ({ node: n, ...this.coordinate(n) }))
        .filter((item) => item.lat !== null && item.lon !== null);
      const groups = new Map();
      points.forEach((item) => {
        const key = `${item.lat.toFixed(4)}:${item.lon.toFixed(4)}`;
        const group = groups.get(key) || [];
        group.push(item);
        groups.set(key, group);
      });
      return Array.from(groups.values()).flatMap((group) =>
        group.map((item, index) => ({
          ...item,
          clusterSize: group.length,
          clusterIndex: index,
        })),
      );
    },
    mapScaleLabel() {
      return Math.round(this.mapScale * 100) + "%";
    },
    paidNodes() {
      return this.nodes.filter((n) => this.number(n.price) > 0);
    },
    hasBilling() {
      return this.paidNodes.length > 0;
    },
    billedNodes() {
      return this.paidNodes
        .slice()
        .sort(
          (a, b) => this.billingFor(b).monthly - this.billingFor(a).monthly,
        );
    },
    expiringNodes() {
      return this.paidNodes.filter((n) => {
        const d = this.daysUntil(n.expired_at);
        return d !== null && d >= 0 && d <= 30;
      });
    },
    costTotals() {
      const m = {};
      this.paidNodes.forEach((n) => {
        const b = this.billingFor(n);
        if (!m[b.currency]) m[b.currency] = 0;
        m[b.currency] += b.monthly;
      });
      return Object.entries(m)
        .map(([currency, amount]) => ({ currency, amount }))
        .sort((a, b) => b.amount - a.amount);
    },
    billingHeadline() {
      if (!this.costTotals.length) return this.t("notSet");
      return this.costTotals
        .map((x) => x.currency + x.amount.toFixed(2))
        .join(" + ");
    },
    detailMetrics() {
      if (!this.selectedNode) return [];
      const l = this.nodeLive(this.selectedNode);
      return [
        {
          name: "CPU",
          value: this.nodeCpu(this.selectedNode).toFixed(1) + "%",
          sub: l.load?.load1
            ? `LOAD ${this.number(l.load.load1).toFixed(2)}`
            : this.t("live"),
        },
        {
          name: "RAM",
          value: this.formatBytes(l.ram?.used ?? l.ram?.usage ?? 0),
          sub: this.formatBytes(l.ram?.total ?? this.selectedNode.mem_total),
        },
        {
          name: "DISK",
          value: this.formatBytes(l.disk?.used ?? 0),
          sub: this.formatBytes(l.disk?.total ?? this.selectedNode.disk_total),
        },
        {
          name: "NET",
          value: this.rate(
            this.number(l.network?.down) + this.number(l.network?.up),
          ),
          sub: `${this.t("trafficLimit")}: ${this.selectedNode.traffic_limit ? this.formatBytes(this.selectedNode.traffic_limit) : this.t("unlimited")}`,
        },
        {
          name: "TCP",
          value: String(this.number(l.connections?.tcp)),
          sub: `UDP ${this.number(l.connections?.udp)}`,
        },
        {
          name: "PING",
          value: this.selectedPingLabel,
          sub: this.t("probe"),
        },
      ];
    },
    hardwareInfo() {
      if (!this.selectedNode) return [];
      const node = this.selectedNode;
      const live = this.nodeLive(node);
      const format = (value) =>
        value === undefined || value === null || value === ""
          ? "--"
          : String(value);
      return [
        {
          label: this.t("architecture"),
          value: this.hardwareValue("arch"),
        },
        {
          label: this.t("operatingSystem"),
          value: this.hardwareValue("os"),
        },
        {
          label: this.t("kernel"),
          value: format(node.kernel || live.kernel || live.system?.kernel),
        },
        {
          label: this.t("processorThreads"),
          value: format(
            live.cpu?.threads ||
              live.cpu?.logical_cores ||
              node.cpu_threads ||
              node.cpu_cores,
          ),
        },
        {
          label: this.t("memoryTotal"),
          value: this.formatBytes(live.ram?.total || node.mem_total),
        },
        {
          label: this.t("diskTotal"),
          value: this.formatBytes(live.disk?.total || node.disk_total),
        },
        {
          label: this.t("networkInterface"),
          value: format(
            live.network?.interface ||
              live.network?.name ||
              node.network_interface,
          ),
        },
        {
          label: this.t("publicAddress"),
          value: format(
            node.ip || node.host || node.address || live.ip || live.public_ip,
          ),
        },
      ];
    },
    selectedPingLabel() {
      const h = this.histories[this.selectedId]?.[this.detailHours]?.ping || [];
      const good = h.filter((x) => this.number(x.value) >= 0);
      return good.length
        ? (
            good.reduce((s, x) => s + this.number(x.value), 0) / good.length
          ).toFixed(1) + " ms"
        : "--";
    },
    historyPath() {
      return this.linePath(
        this.detailLoadVisibleSamples.map((sample) => sample.value),
      );
    },
    detailLoadChartSamples() {
      const records =
        this.histories[this.selectedId]?.[this.detailHours]?.load || [];
      return this.recordChartSamples(
        records,
        (record) => record.cpu ?? record.cpu_usage,
      );
    },
    detailLoadVisibleSamples() {
      return this.visibleChartSamples(
        "detail-load",
        this.detailLoadChartSamples,
      );
    },
    detailPingPath() {
      return this.linePath(
        this.detailPingVisibleSamples.map((sample) => sample.value),
      );
    },
    detailPingChartSamples() {
      const records =
        this.histories[this.selectedId]?.[this.detailHours]?.ping || [];
      return this.recordChartSamples(records, (record) => record.value);
    },
    detailPingVisibleSamples() {
      return this.visibleChartSamples(
        "detail-ping",
        this.detailPingChartSamples,
      );
    },
    detailPingStats() {
      return this.latencyStats(
        this.histories[this.selectedId]?.[this.detailHours]?.ping || [],
      );
    },
  },
  watch: {
    route(next) {
      if (next === "map") this.scheduleGlobeInit();
      else this.destroyGlobe();
    },
    mappedNodes() {
      if (this.route === "map") this.$nextTick(() => this.rebuildGlobeNodes());
    },
    onlineIds() {
      if (this.route === "map") this.$nextTick(() => this.rebuildGlobeNodes());
    },
  },
  methods: {
    t(key) {
      return (copy[this.language] || copy.en)[key] || copy.en[key] || key;
    },
    settingBool(value, fallback) {
      if (value === undefined || value === null || value === "")
        return fallback;
      return value === true || value === "true" || value === 1 || value === "1";
    },
    settingArray(value) {
      if (Array.isArray(value)) return value;
      if (typeof value !== "string" || !value) return [];
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
      } catch (_) {
        return value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);
      }
    },
    hardwareValue(kind) {
      const node = this.selectedNode || {};
      const live = this.nodeLive(node);
      if (kind === "cpu")
        return (
          node.cpu_name ||
          node.cpu_model ||
          live.cpu?.model ||
          live.cpu?.name ||
          live.cpu_name ||
          "--"
        );
      if (kind === "arch")
        return (
          node.arch ||
          node.architecture ||
          live.arch ||
          live.architecture ||
          live.system?.arch ||
          "--"
        );
      if (kind === "os")
        return (
          node.os ||
          node.os_name ||
          live.os ||
          live.system?.os ||
          live.system?.name ||
          "--"
        );
      return "--";
    },
    setNodeView(mode) {
      if (!this.nodeViewOptions.includes(mode) || mode === this.nodeView) return;
      const first = new Map(
        Array.from(document.querySelectorAll(".node-grid .node")).map((el) => [
          el,
          el.getBoundingClientRect(),
        ]),
      );
      this.nodeView = mode;
      sessionStorage.setItem("aemeath-node-view", mode);
      this.$nextTick(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        first.forEach((from, el) => {
          const to = el.getBoundingClientRect();
          const dx = from.left - to.left;
          const dy = from.top - to.top;
          const sx = from.width / Math.max(1, to.width);
          const sy = from.height / Math.max(1, to.height);
          if (Math.abs(dx) < 1 && Math.abs(dy) < 1 && Math.abs(sx - 1) < 0.01 && Math.abs(sy - 1) < 0.01) return;
          if (typeof el.animate !== "function") return;
          el.animate(
            [
              { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`, opacity: 0.78 },
              { transform: "translate(0, 0) scale(1, 1)", opacity: 1 },
            ],
            { duration: 420, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
          );
        });
      });
    },
    timeValue(record) {
      const raw = record?.time ?? record?.timestamp ?? record?.created_at;
      if (raw === undefined || raw === null || raw === "") return NaN;
      const numeric = Number(raw);
      if (Number.isFinite(numeric))
        return numeric < 100000000000 ? numeric * 1000 : numeric;
      return new Date(raw).getTime();
    },
    downsampleSamples(samples, limit = 240) {
      if (samples.length <= limit) return samples;
      const step = (samples.length - 1) / (limit - 1);
      return Array.from(
        { length: limit },
        (_, index) => samples[Math.round(index * step)],
      );
    },
    recordChartSamples(records, accessor) {
      const samples = (Array.isArray(records) ? records : [])
        .map((record, index) => ({
          time: this.timeValue(record),
          fallback: index,
          value: this.number(accessor(record)),
          count: 1,
        }))
        .filter((sample) => sample.value >= 0)
        .sort((a, b) =>
          Number.isFinite(a.time) && Number.isFinite(b.time)
            ? a.time - b.time
            : a.fallback - b.fallback,
        );
      return this.downsampleSamples(samples);
    },
    aggregateLatencySamples(records, hours) {
      const valid = (Array.isArray(records) ? records : []).filter(
        (record) => this.number(record.value) >= 0,
      );
      const timed = valid
        .map((record) => ({
          time: this.timeValue(record),
          value: this.number(record.value),
        }))
        .filter((sample) => Number.isFinite(sample.time));
      if (!timed.length)
        return this.recordChartSamples(valid, (record) => record.value);
      const bucketCount = 96;
      const start = Date.now() - hours * 3600000;
      const width = (hours * 3600000) / bucketCount;
      const buckets = Array.from({ length: bucketCount }, () => []);
      timed.forEach((sample) => {
        const index = Math.max(
          0,
          Math.min(bucketCount - 1, Math.floor((sample.time - start) / width)),
        );
        buckets[index].push(sample.value);
      });
      return buckets
        .map((values, index) => ({
          time: start + index * width,
          value: values.reduce((sum, value) => sum + value, 0) / values.length,
          count: values.length,
        }))
        .filter((sample) => Number.isFinite(sample.value));
    },
    formatRecordTime(time) {
      if (!Number.isFinite(time)) return this.t("unknown");
      return new Date(time).toLocaleString(
        this.language === "zh-CN" ? "zh-CN" : "en-US",
        {
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        },
      );
    },
    formatChartValue(value, kind) {
      if (kind === "traffic") return this.rate(value);
      if (kind === "latency") return this.number(value).toFixed(2) + " ms";
      return this.number(value).toFixed(2) + "%";
    },
    visibleChartSamples(key, samples) {
      const source = Array.isArray(samples) ? samples : [];
      if (source.length < 3) return source;
      const range = this.chartZoom[key] || { start: 0, end: 1 };
      const first = Math.max(0, Math.floor(range.start * (source.length - 1)));
      const last = Math.min(
        source.length - 1,
        Math.max(first + 1, Math.ceil(range.end * (source.length - 1))),
      );
      return source.slice(first, last + 1);
    },
    isChartZoomed(key) {
      const range = this.chartZoom[key] || { start: 0, end: 1 };
      return range.end - range.start < 0.995;
    },
    chartZoomLabel(key) {
      const range = this.chartZoom[key] || { start: 0, end: 1 };
      return (1 / (range.end - range.start || 1)).toFixed(1) + "x";
    },
    resetChartZoom(key) {
      this.chartZoom = {
        ...this.chartZoom,
        [key]: { start: 0, end: 1 },
      };
      if (this.chartHover.key === key) this.clearChartHover();
    },
    zoomChart(event, key, samples, kind, width = 600, height = 110) {
      const source = Array.isArray(samples) ? samples : [];
      if (source.length < 3) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const ratio = Math.max(
        0,
        Math.min(1, (event.clientX - rect.left) / rect.width),
      );
      const current = this.chartZoom[key] || { start: 0, end: 1 };
      const currentSpan = current.end - current.start;
      const minimumSpan = Math.max(2 / (source.length - 1), 0.02);
      const nextSpan = Math.max(
        minimumSpan,
        Math.min(1, currentSpan * (event.deltaY < 0 ? 0.72 : 1 / 0.72)),
      );
      const focus = current.start + ratio * currentSpan;
      const nextStart = Math.max(
        0,
        Math.min(1 - nextSpan, focus - ratio * nextSpan),
      );
      this.chartZoom = {
        ...this.chartZoom,
        [key]: { start: nextStart, end: nextStart + nextSpan },
      };
      this.$nextTick(() =>
        this.trackChart(
          event,
          key,
          this.visibleChartSamples(key, source),
          kind,
          width,
          height,
        ),
      );
    },
    trackChart(event, key, samples, kind, width = 600, height = 110) {
      if (!samples.length) return this.clearChartHover();
      const host =
        key === "hero"
          ? event.currentTarget.closest(".hero")
          : event.currentTarget;
      const rect = event.currentTarget.getBoundingClientRect();
      const hostRect = host.getBoundingClientRect();
      const ratio = Math.max(
        0,
        Math.min(1, (event.clientX - rect.left) / rect.width),
      );
      const index = Math.round(ratio * (samples.length - 1));
      const sample = samples[index];
      const values = samples.map((item) => this.number(item.value));
      const min = Math.min(...values);
      const max = Math.max(...values);
      const y =
        max === min
          ? height / 2
          : height -
            15 -
            ((sample.value - min) / (max - min || 1)) * (height - 37);
      this.chartHover = {
        key,
        x: ratio * width,
        y,
        left: Math.max(
          10,
          Math.min(hostRect.width - 132, event.clientX - hostRect.left),
        ),
        top: Math.max(43, event.clientY - hostRect.top),
        label: this.formatRecordTime(sample.time),
        value:
          this.formatChartValue(sample.value, kind) +
          (sample.count > 1 ? ` / ${sample.count}` : ""),
      };
    },
    clearChartHover() {
      if (this.chartHover.key)
        this.chartHover = {
          key: "",
          x: 0,
          y: 0,
          left: 0,
          top: 0,
          label: "",
          value: "",
        };
    },
    number(v) {
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    },
    latencyStats(records) {
      const all = Array.isArray(records) ? records : [];
      const good = all
        .filter((record) => this.number(record.value) >= 0)
        .map((record) => this.number(record.value));
      const count = good.length;
      const loss = all.length ? ((all.length - count) / all.length) * 100 : 0;
      return {
        count,
        min: count ? Math.min(...good).toFixed(1) + " ms" : "--",
        avg: count
          ? (good.reduce((sum, value) => sum + value, 0) / count).toFixed(1) +
            " ms"
          : "--",
        max: count ? Math.max(...good).toFixed(1) + " ms" : "--",
        loss: all.length ? loss.toFixed(1) + "%" : "--",
      };
    },
    percent(a, b) {
      return b > 0
        ? Math.max(0, Math.min(100, (this.number(a) / this.number(b)) * 100))
        : 0;
    },
    isOnline(node) {
      return this.onlineIds.includes(node.uuid);
    },
    nodeLive(node) {
      return this.live[node.uuid] || {};
    },
    nodeCpu(node) {
      const c = this.nodeLive(node).cpu;
      return Math.max(
        0,
        Math.min(100, this.number(typeof c === "object" ? c.usage : c)),
      );
    },
    nodeMemory(node) {
      const r = this.nodeLive(node).ram;
      return typeof r === "object"
        ? this.percent(r.used, r.total || node.mem_total)
        : this.number(r);
    },
    nodeDisk(node) {
      const d = this.nodeLive(node).disk;
      return typeof d === "object"
        ? this.percent(d.used, d.total || node.disk_total)
        : this.number(d);
    },
    metrics(node) {
      return [
        {
          name: "CPU",
          value: this.nodeCpu(node),
          level: this.nodeCpu(node) > 85 ? "warn" : "",
        },
        {
          name: "RAM",
          value: this.nodeMemory(node),
          level: this.nodeMemory(node) > 85 ? "warn" : "",
        },
        {
          name: "DISK",
          value: this.nodeDisk(node),
          level: this.nodeDisk(node) > 90 ? "warn" : "",
        },
      ];
    },
    nodeTooltip(node) {
      const live = this.nodeLive(node);
      return [
        node.name || node.uuid,
        `CPU ${this.nodeCpu(node).toFixed(2)}%`,
        `RAM ${this.nodeMemory(node).toFixed(2)}%`,
        `DISK ${this.nodeDisk(node).toFixed(2)}%`,
        `NET ${this.rate(this.number(live.network?.up) + this.number(live.network?.down))}`,
      ].join(" | ");
    },
    nodeLine(n) {
      return (
        [n.region, n.group, n.os].filter(Boolean).join(" / ") ||
        this.t("unknown")
      );
    },
    formatBytes(v) {
      let n = this.number(v),
        i = 0,
        u = ["B", "KB", "MB", "GB", "TB", "PB"];
      while (n >= 1024 && i < u.length - 1) {
        n /= 1024;
        i++;
      }
      return (i === 0 ? n.toFixed(0) : n.toFixed(n >= 10 ? 1 : 2)) + " " + u[i];
    },
    rate(v) {
      return this.formatBytes(v) + "/s";
    },
    totalOf(network) {
      return this.number(network?.totalUp) + this.number(network?.totalDown);
    },
    recordSignalValue(record) {
      const metric = this.heroSignalMetric;
      if (metric === "traffic") {
        const network = record.network || {};
        return (
          this.number(record.net_in ?? record.netIn ?? network.down) +
          this.number(record.net_out ?? record.netOut ?? network.up)
        );
      }
      const source = metric === "ram" ? record.ram : record.cpu;
      const value =
        typeof source === "object"
          ? metric === "ram"
            ? this.percent(source.used, source.total)
            : this.number(source.usage)
          : this.number(source);
      return value > 0 && value <= 1 ? value * 100 : value;
    },
    pushLiveSignal() {
      const candidates = this.orderedNodes.filter(
        (node) =>
          this.nodeLive(node) && Object.keys(this.nodeLive(node)).length,
      );
      if (!candidates.length) return;
      const values = candidates.map((node) => {
        if (this.heroSignalMetric === "traffic") {
          const network = this.nodeLive(node).network || {};
          return this.number(network.up) + this.number(network.down);
        }
        return this.heroSignalMetric === "ram"
          ? this.nodeMemory(node)
          : this.nodeCpu(node);
      });
      this.liveSignalSamples = [
        ...this.liveSignalSamples,
        {
          time: Date.now(),
          value: values.reduce((sum, value) => sum + value, 0) / values.length,
        },
      ].slice(-72);
    },
    async loadHeroSignal() {
      if (this.usingDemo) {
        this.signalHistory = [];
        this.pushLiveSignal();
        return;
      }
      const requested = this.settingArray(this.settings.hero_signal_nodes);
      const targets = (
        requested.length
          ? this.orderedNodes.filter((node) => requested.includes(node.uuid))
          : this.orderedNodes
      ).slice(0, 80);
      if (!targets.length) return;
      this.signalLoading = true;
      const points = Array.from({ length: 48 }, () => []);
      const start = Date.now() - this.heroSignalHours * 3600000;
      const windowSize = (this.heroSignalHours * 3600000) / points.length;
      for (let index = 0; index < targets.length; index += 6) {
        const batch = targets.slice(index, index + 6);
        const rows = await Promise.all(
          batch.map(async (node) => {
            try {
              const response = await fetch(
                `/api/records/load?uuid=${encodeURIComponent(node.uuid)}&hours=${this.heroSignalHours}`,
              );
              if (!response.ok) return [];
              const data = this.unwrap(await response.json()) || {};
              return Array.isArray(data.records) ? data.records : [];
            } catch (_) {
              return [];
            }
          }),
        );
        rows.flat().forEach((record) => {
          const timestamp = new Date(
            record.time || record.timestamp || 0,
          ).getTime();
          if (!Number.isFinite(timestamp) || timestamp < start) return;
          const bucket = Math.min(
            points.length - 1,
            Math.max(0, Math.floor((timestamp - start) / windowSize)),
          );
          points[bucket].push(this.recordSignalValue(record));
        });
      }
      this.signalHistory = points
        .map((values, index) => ({
          time: start + index * windowSize,
          value: values.length
            ? values.reduce((sum, value) => sum + value, 0) / values.length
            : null,
        }))
        .filter((item) => item.value !== null);
      this.signalLoading = false;
      if (!this.signalHistory.length) this.pushLiveSignal();
    },
    globeVector(lat, lon, radius = 2) {
      const latitude = (this.number(lat) * Math.PI) / 180;
      const longitude = (this.number(lon) * Math.PI) / 180;
      const cosLatitude = Math.cos(latitude);
      return new THREE.Vector3(
        radius * cosLatitude * Math.sin(longitude),
        radius * Math.sin(latitude),
        radius * cosLatitude * Math.cos(longitude),
      );
    },
    globeLine(points, material, closed = false) {
      const vertices = closed ? [...points, points[0]] : points;
      const geometry = new THREE.BufferGeometry().setFromPoints(vertices);
      return new THREE.Line(geometry, material);
    },
    scheduleGlobeInit() {
      clearTimeout(this.globeInitTimer);
      this.$nextTick(() => {
        this.globeInitTimer = setTimeout(() => this.initGlobe(), 120);
      });
    },
    viewEntered() {
      if (this.route === "map") this.initGlobe();
    },
    initGlobe() {
      const canvas = this.$refs.globeCanvas;
      const stage = this.$refs.globeStage;
      if (!canvas || !stage || this.route !== "map") return;
      if (this.globe?.canvas === canvas) {
        this.resizeGlobe();
        this.rebuildGlobeNodes();
        return;
      }
      this.destroyGlobe();
      this.mapScale = 1;
      this.globeLoading = true;
      const fallback = this.$refs.globeFallback;
      try {
        if (!window.THREE) throw new Error("Three.js unavailable");
        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
        renderer.setClearColor(0x000000, 0);
        if (THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
        camera.position.set(0, 0, 6.4);
        const world = new THREE.Group();
        world.rotation.set(0.34, -1.35, 0);
        scene.add(world);

        const globeMaterial = new THREE.MeshPhongMaterial({
          color: 0x07151e,
          emissive: 0x031119,
          shininess: 34,
          transparent: true,
          opacity: 0.98,
        });
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(2, 72, 48),
          globeMaterial,
        );
        world.add(sphere);

        const atmosphere = new THREE.Mesh(
          new THREE.SphereGeometry(2.13, 64, 40),
          new THREE.ShaderMaterial({
            transparent: true,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            uniforms: {
              glowColor: { value: new THREE.Color(0x79efe2) },
            },
            vertexShader:
              "varying vec3 vNormal; varying vec3 vWorldPosition; void main(){vNormal=normalize(normalMatrix*normal); vec4 worldPosition=modelMatrix*vec4(position,1.0); vWorldPosition=worldPosition.xyz; gl_Position=projectionMatrix*viewMatrix*worldPosition;}",
            fragmentShader:
              "uniform vec3 glowColor; varying vec3 vNormal; varying vec3 vWorldPosition; void main(){vec3 viewDirection=normalize(cameraPosition-vWorldPosition); float intensity=pow(0.72-dot(vNormal,viewDirection),2.25); gl_FragColor=vec4(glowColor,intensity*0.48);}",
          }),
        );
        scene.add(atmosphere);

        const gridMaterial = new THREE.LineBasicMaterial({
          color: 0x69d8d0,
          transparent: true,
          opacity: 0.13,
          depthWrite: false,
        });
        for (let lat = -60; lat <= 60; lat += 30) {
          const points = [];
          for (let lon = -180; lon <= 180; lon += 3)
            points.push(this.globeVector(lat, lon, 2.012));
          world.add(this.globeLine(points, gridMaterial));
        }
        for (let lon = -150; lon <= 180; lon += 30) {
          const points = [];
          for (let lat = -90; lat <= 90; lat += 3)
            points.push(this.globeVector(lat, lon, 2.012));
          world.add(this.globeLine(points, gridMaterial));
        }

        const markerGroup = new THREE.Group();
        const geoLabelGroup = new THREE.Group();
        const routeGroup = new THREE.Group();
        world.add(routeGroup, markerGroup, geoLabelGroup);

        const orbitMaterial = new THREE.MeshBasicMaterial({
          color: 0xe18baa,
          transparent: true,
          opacity: 0.2,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const orbit = new THREE.Mesh(
          new THREE.TorusGeometry(2.63, 0.007, 6, 196),
          orbitMaterial,
        );
        orbit.rotation.set(1.08, 0.42, 0.18);
        scene.add(orbit);

        scene.add(new THREE.HemisphereLight(0xbefef5, 0x130817, 1.35));
        const roseLight = new THREE.DirectionalLight(0xff8db8, 1.9);
        roseLight.position.set(-3, 2.5, 4);
        scene.add(roseLight);
        const cyanLight = new THREE.DirectionalLight(0x67e5da, 1.2);
        cyanLight.position.set(4, -1, 3);
        scene.add(cyanLight);

        const state = markRaw({
          canvas,
          stage,
          scene,
          camera,
          renderer,
          world,
          sphere,
          atmosphere,
          orbit,
          markerGroup,
          geoLabelGroup,
          routeGroup,
          beaconMarkers: [],
          geoMarkers: [],
          tick: 0,
          worldVector: new THREE.Vector3(),
          projectedVector: new THREE.Vector3(),
          frame: 0,
          disposed: false,
          resumeAt: Date.now() + 4500,
          baseDistance: 6.4,
          hasFittedNodes: false,
          initialRotation: { x: 0.34, y: -1.35 },
          resizeObserver: null,
        });
        this.globe = state;
        if (fallback) fallback.classList.remove("visible");
        this.resizeGlobe();
        if (window.ResizeObserver) {
          state.resizeObserver = new ResizeObserver(() => this.resizeGlobe());
          state.resizeObserver.observe(stage);
        }
        this.loadGlobeLand(state);
        this.buildGlobeGeoLabels(state);
        this.rebuildGlobeNodes();
        const animate = () => {
          if (state.disposed) return;
          state.frame = requestAnimationFrame(animate);
          if (!this.mapDrag.active && Date.now() > state.resumeAt)
            state.world.rotation.y += 0.00045;
          state.orbit.rotation.z += 0.00034;
          state.renderer.render(state.scene, state.camera);
          state.tick += 1;
          if (state.tick % 2 === 0) this.positionGlobeOverlays();
        };
        animate();
      } catch (error) {
        console.warn("Aemeath globe initialization failed", error);
        this.globeLoading = false;
        if (fallback) fallback.classList.add("visible");
      }
    },
    async loadGlobeLand(state) {
      try {
        const response = await fetch(
          "/themes/aemeath/dist/assets/countries-50m.json",
        );
        if (!response.ok || state.disposed || !window.topojson)
          throw new Error("Globe border data unavailable");
        const topology = await response.json();
        if (state.disposed) return;
        const collection = topojson.feature(
          topology,
          topology.objects.countries,
        );
        const segments = [];
        const addRing = (ring) => {
          for (let index = 1; index < ring.length; index++) {
            const from = ring[index - 1];
            const to = ring[index];
            if (Math.abs(from[0] - to[0]) > 180) continue;
            segments.push(
              this.globeVector(from[1], from[0], 2.022),
              this.globeVector(to[1], to[0], 2.022),
            );
          }
        };
        collection.features.forEach((feature) => {
          const coordinates = feature.geometry?.coordinates || [];
          if (feature.geometry?.type === "Polygon")
            coordinates.forEach(addRing);
          if (feature.geometry?.type === "MultiPolygon")
            coordinates.forEach((polygon) => polygon.forEach(addRing));
        });
        const geometry = new THREE.BufferGeometry().setFromPoints(segments);
        const material = new THREE.LineBasicMaterial({
          color: 0xb6eee8,
          transparent: true,
          opacity: 0.56,
        });
        const borders = new THREE.LineSegments(geometry, material);
        borders.userData.globeLand = true;
        state.world.add(borders);
      } catch (error) {
        console.warn("Aemeath globe border loading failed", error);
      } finally {
        if (this.globe === state && !state.disposed) this.globeLoading = false;
      }
    },
    buildGlobeGeoLabels(state) {
      const layer = this.$refs.globeGeoLayer;
      if (!layer || !state || state.disposed) return;
      layer.replaceChildren();
      this.disposeGlobeGroup(state.geoLabelGroup);
      state.geoMarkers = GLOBE_GEO_LABELS.map((item) => {
        const anchor = new THREE.Object3D();
        anchor.position.copy(this.globeVector(item.lat, item.lon, 2.036));
        state.geoLabelGroup.add(anchor);
        const element = document.createElement("span");
        element.className = `globe-geo-label ${item.id}`;
        element.textContent = this.language === "zh-CN" ? item.zh : item.en;
        layer.appendChild(element);
        return { anchor, element, item };
      });
      this.positionGlobeOverlays();
    },
    disposeGlobeGroup(group) {
      if (!group) return;
      while (group.children.length) {
        const child = group.children.pop();
        child.traverse((object) => {
          object.geometry?.dispose?.();
          if (Array.isArray(object.material))
            object.material.forEach((material) => material.dispose?.());
          else object.material?.dispose?.();
        });
      }
    },
    fitGlobeToNodes(state, points) {
      if (!state || state.hasFittedNodes || !points.length) return;
      const center = points.reduce(
        (sum, item) => sum.add(this.globeVector(item.lat, item.lon, 1)),
        new THREE.Vector3(),
      );
      if (center.lengthSq() < 0.01) {
        center.copy(this.globeVector(points[0].lat, points[0].lon, 1));
      }
      center.normalize();
      const latitude = Math.asin(Math.max(-1, Math.min(1, center.y)));
      const longitude = Math.atan2(center.x, center.z);
      const rotation = {
        x: Math.max(-0.95, Math.min(0.95, latitude)),
        y: -longitude,
      };
      state.world.rotation.set(rotation.x, rotation.y, 0);
      state.initialRotation = rotation;
      state.hasFittedNodes = true;
    },
    rebuildGlobeNodes() {
      const state = this.globe;
      if (!state || state.disposed) return;
      this.disposeGlobeGroup(state.markerGroup);
      this.disposeGlobeGroup(state.routeGroup);
      state.beaconMarkers = [];
      const beaconLayer = this.$refs.globeBeaconLayer;
      beaconLayer?.replaceChildren();
      const points = this.mappedNodes;
      this.fitGlobeToNodes(state, points);
      state.canvas.dataset.markerCount = String(points.length);
      const hub = points[0] ? this.globeVector(points[0].lat, points[0].lon, 2.035) : null;
      points.forEach((item, index) => {
        const online = this.isOnline(item.node);
        const position = this.globeVector(item.lat, item.lon, 2.045);
        const anchorObject = new THREE.Object3D();
        anchorObject.position.copy(position);
        state.markerGroup.add(anchorObject);
        if (beaconLayer) {
          const anchor = document.createElement("a");
          anchor.className = `globe-beacon${online ? " online" : " offline"}`;
          anchor.href = `#/node/${encodeURIComponent(item.node.uuid)}`;
          anchor.title = this.nodeTooltip(item.node);
          const core = document.createElement("i");
          const label = document.createElement("span");
          const name = document.createElement("b");
          name.textContent = item.node.name || item.node.uuid;
          label.appendChild(name);
          if (item.clusterIndex === 0 && item.clusterSize > 1) {
            const count = document.createElement("em");
            count.textContent = `+${item.clusterSize - 1}`;
            label.appendChild(count);
          }
          anchor.append(core, label);
          anchor.addEventListener("click", (event) => {
            event.preventDefault();
            this.go("node/" + encodeURIComponent(item.node.uuid));
          });
          anchor.addEventListener("pointerenter", (event) =>
            this.showGlobeTooltip(event, item.node),
          );
          anchor.addEventListener("pointermove", (event) =>
            this.showGlobeTooltip(event, item.node),
          );
          anchor.addEventListener("pointerleave", () => this.hideGlobeTooltip());
          beaconLayer.appendChild(anchor);
          state.beaconMarkers.push({
            anchor: anchorObject,
            element: anchor,
            clusterIndex: item.clusterIndex,
            clusterSize: item.clusterSize,
          });
        }

        if (hub && index > 0 && index < 15) {
          const end = position.clone().normalize().multiplyScalar(2.035);
          let middle = hub.clone().add(end);
          if (middle.lengthSq() < 0.08)
            middle = hub.clone().cross(new THREE.Vector3(0, 1, 0));
          middle.normalize().multiplyScalar(2.35 + hub.distanceTo(end) * 0.12);
          const curve = new THREE.QuadraticBezierCurve3(hub, middle, end);
          const route = this.globeLine(
            curve.getPoints(48),
            new THREE.LineBasicMaterial({
              color: index % 3 === 0 ? 0xf0a4bd : 0x65dcd3,
              transparent: true,
              opacity: 0.3,
              depthWrite: false,
            }),
          );
          state.routeGroup.add(route);
        }
      });
      this.positionGlobeOverlays();
    },
    clusterScreenOffset(index, count) {
      if (!index || count < 2) return { x: 0, y: 0 };
      const position = index - 1;
      const ring = Math.floor(position / 8);
      const slots = Math.min(8, count - 1 - ring * 8);
      const angle = ((position % 8) / Math.max(1, slots)) * Math.PI * 2 - Math.PI / 2;
      const radius = 18 + ring * 13;
      return {
        x: Math.round(Math.cos(angle) * radius),
        y: Math.round(Math.sin(angle) * radius),
      };
    },
    positionGlobeOverlays() {
      const state = this.globe;
      if (!state || state.disposed) return;
      state.scene.updateMatrixWorld(true);
      const project = (anchor, element, offset = { x: 0, y: 0 }) => {
        const worldPosition = state.worldVector;
        anchor.getWorldPosition(worldPosition);
        const frontFacing = worldPosition.z > 0.08;
        const projected = state.projectedVector.copy(worldPosition).project(state.camera);
        const visible =
          frontFacing &&
          projected.z > -1 &&
          projected.z < 1 &&
          Math.abs(projected.x) < 1.02 &&
          Math.abs(projected.y) < 1.02;
        element.hidden = !visible;
        if (!visible) return projected;
        element.style.left = `calc(${(projected.x * 0.5 + 0.5) * 100}% + ${offset.x}px)`;
        element.style.top = `calc(${(-projected.y * 0.5 + 0.5) * 100}% + ${offset.y}px)`;
        element.classList.toggle("align-left", projected.x > 0.46 || offset.x > 4);
        element.style.zIndex = String(20 + Math.round(worldPosition.z * 10));
        return projected;
      };
      const expanded = this.mapScale >= 1.14;
      state.beaconMarkers.forEach(
        ({ anchor, element, clusterIndex, clusterSize }) => {
          const offset = this.clusterScreenOffset(clusterIndex, clusterSize);
          project(anchor, element, offset);
          element.classList.toggle(
            "label-visible",
            clusterIndex === 0 || expanded,
          );
        },
      );
      state.geoMarkers.forEach(({ anchor, element, item }) => {
        element.textContent = this.language === "zh-CN" ? item.zh : item.en;
        project(anchor, element);
      });
    },
    resizeGlobe() {
      const state = this.globe;
      if (!state || state.disposed) return;
      const rect = state.stage.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      state.renderer.setSize(width, height, false);
      state.camera.aspect = width / height;
      const verticalFov = THREE.MathUtils.degToRad(state.camera.fov);
      const horizontalFov =
        2 * Math.atan(Math.tan(verticalFov / 2) * state.camera.aspect);
      const limitingFov = Math.min(verticalFov, horizontalFov);
      state.baseDistance = 2.48 / Math.tan(limitingFov / 2) + 0.26;
      state.camera.position.z = state.baseDistance / this.mapScale;
      state.camera.updateProjectionMatrix();
      this.positionGlobeOverlays();
    },
    destroyGlobe() {
      const state = this.globe;
      if (!state) return;
      state.disposed = true;
      cancelAnimationFrame(state.frame);
      state.resizeObserver?.disconnect?.();
      state.scene.traverse((object) => {
        object.geometry?.dispose?.();
        if (Array.isArray(object.material))
          object.material.forEach((material) => material.dispose?.());
        else object.material?.dispose?.();
      });
      state.renderer.dispose();
      this.globe = null;
    },
    showGlobeTooltip(event, node) {
      const tooltip = this.$refs.globeTooltip;
      const stage = this.globe?.stage;
      if (!stage || !tooltip || !node || this.mapDrag.active) return;
      const rect = stage.getBoundingClientRect();
      tooltip.textContent = this.nodeTooltip(node).replaceAll(" | ", "\n");
      tooltip.style.left = `${Math.min(rect.width - 218, Math.max(10, event.clientX - rect.left + 14))}px`;
      tooltip.style.top = `${Math.min(rect.height - 122, Math.max(10, event.clientY - rect.top + 14))}px`;
      tooltip.classList.add("visible");
    },
    hideGlobeTooltip() {
      this.$refs.globeTooltip?.classList.remove("visible");
    },
    zoomMap(delta) {
      const next = Math.max(0.72, Math.min(1.75, +(this.mapScale + delta).toFixed(2)));
      if (next === this.mapScale) return;
      this.mapScale = next;
      if (this.globe) {
        this.globe.camera.position.z = this.globe.baseDistance / next;
        this.globe.resumeAt = Date.now() + 6500;
        this.positionGlobeOverlays();
      }
    },
    handleMapWheel(event) {
      this.zoomMap(event.deltaY < 0 ? 0.1 : -0.1);
    },
    startMapPan(event) {
      if (event.button !== 0 || event.target.closest("a, button")) return;
      const state = this.globe;
      if (!state) return;
      this.mapDrag = {
        active: true,
        startX: event.clientX,
        startY: event.clientY,
        rotationX: state.world.rotation.x,
        rotationY: state.world.rotation.y,
        moved: false,
      };
      state.resumeAt = Date.now() + 7000;
      state.canvas.style.cursor = "grabbing";
      this.$refs.globeTooltip?.classList.remove("visible");
      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    moveMapPan(event) {
      const state = this.globe;
      if (!this.mapDrag.active || !state) return;
      const dx = event.clientX - this.mapDrag.startX;
      const dy = event.clientY - this.mapDrag.startY;
      state.world.rotation.y = this.mapDrag.rotationY + dx * 0.006;
      state.world.rotation.x = Math.max(
        -1.2,
        Math.min(1.2, this.mapDrag.rotationX + dy * 0.005),
      );
      if (Math.abs(dx) + Math.abs(dy) > 5) this.mapDrag.moved = true;
    },
    endMapPan(event) {
      if (!this.mapDrag.active) return;
      const moved = this.mapDrag.moved;
      event.currentTarget.releasePointerCapture?.(event.pointerId);
      this.mapDrag = { ...this.mapDrag, active: false };
      if (this.globe) this.globe.canvas.style.cursor = "grab";
      if (moved || event.type === "pointercancel") this.hideGlobeTooltip();
    },
    leaveGlobe() {
      if (!this.mapDrag.active) this.hideGlobeTooltip();
    },
    resetMap() {
      this.mapScale = 1;
      if (!this.globe) return;
      this.globe.camera.position.z = this.globe.baseDistance;
      this.globe.world.rotation.set(
        this.globe.initialRotation.x,
        this.globe.initialRotation.y,
        0,
      );
      this.globe.resumeAt = Date.now() + 4500;
      this.positionGlobeOverlays();
    },
    uptime(s) {
      let n = Math.floor(this.number(s));
      if (!n) return "--";
      const d = Math.floor(n / 86400);
      n %= 86400;
      const h = Math.floor(n / 3600);
      const m = Math.floor((n % 3600) / 60);
      return d ? `${d}d ${h}h` : h ? `${h}h ${m}m` : `${m}m`;
    },
    toggleAppearance() {
      this.appearance = this.appearance === "dark" ? "light" : "dark";
      localStorage.setItem("appearance", this.appearance);
      this.applyAppearance();
    },
    applyAppearance() {
      document.documentElement.dataset.appearance = this.appearance;
      document.documentElement.style.colorScheme = this.appearance;
    },
    applyBackground() {
      document.documentElement.dataset.background = this.backgroundMode;
    },
    toggleLanguage() {
      this.language = this.language === "zh-CN" ? "en" : "zh-CN";
      localStorage.setItem("language", this.language);
      document.documentElement.lang = this.language;
      this.positionGlobeOverlays();
    },
    applyPublic(data) {
      this.settings = data.theme_settings || {};
      if (data.sitename) this.settings.sitename = data.sitename;
      const savedView = sessionStorage.getItem("aemeath-node-view");
      this.nodeView = this.nodeViewOptions.includes(savedView)
        ? savedView
        : this.configuredNodeView;
      this.probeHours = Math.max(
        1,
        Math.min(48, this.number(this.settings.probe_history_hours) || 24),
      );
      this.applyBackground();
    },
    unwrap(data) {
      return data && typeof data === "object" && "data" in data
        ? data.data
        : data;
    },
    async bootstrap() {
      try {
        const [a, b] = await Promise.all([
          fetch("/api/public"),
          fetch("/api/nodes"),
        ]);
        if (!a.ok || !b.ok) throw new Error("API unavailable");
        const pub = this.unwrap(await a.json()) || {};
        const nodes = this.unwrap(await b.json()) || [];
        this.applyPublic(pub);
        this.nodes = Array.isArray(nodes) ? nodes : [];
        this.usingDemo = false;
        this.connect();
        this.loadSnapshots();
        this.loadHeroSignal();
      } catch (e) {
        this.nodes = demoNodes;
        this.live = demoLive;
        this.onlineIds = demoNodes.map((n) => n.uuid);
        this.usingDemo = true;
        this.connected = false;
        this.pushLiveSignal();
      } finally {
        const preloader = document.getElementById("theme-preloader");
        if (preloader) {
          preloader.classList.add("is-leaving");
          setTimeout(() => preloader.remove(), 360);
        }
      }
    },
    normalizeLive(raw) {
      if (Array.isArray(raw))
        return raw.reduce((o, x) => {
          if (x?.uuid) o[x.uuid] = x;
          return o;
        }, {});
      return raw && typeof raw === "object" ? raw : {};
    },
    connect() {
      if (this.socket) {
        this.socket.onclose = null;
        this.socket.close();
      }
      clearInterval(this.socketPoll);
      const proto = location.protocol === "https:" ? "wss:" : "ws:";
      try {
        this.socket = new WebSocket(
          proto + "//" + location.host + "/api/clients",
        );
        this.socket.onopen = () => {
          this.connected = true;
          this.socket.send("get");
          this.socketPoll = setInterval(() => {
            if (this.socket?.readyState === 1) this.socket.send("get");
          }, 3000);
        };
        this.socket.onmessage = (e) => {
          try {
            const root = JSON.parse(e.data);
            const packet =
              root?.data?.data || root?.data?.online ? root.data : root;
            const data = this.normalizeLive(
              packet?.data || packet?.clients || packet?.nodes || {},
            );
            this.live = { ...this.live, ...data };
            this.onlineIds = Array.isArray(packet?.online)
              ? packet.online
              : Object.keys(data);
            this.connected = true;
            this.now = new Date();
            this.pushLiveSignal();
          } catch (_) {}
        };
        this.socket.onerror = () => {
          this.connected = false;
        };
        this.socket.onclose = () => {
          this.connected = false;
          clearInterval(this.socketPoll);
          if (!this.usingDemo) {
            clearTimeout(this.retryTimer);
            this.retryTimer = setTimeout(() => this.connect(), 5000);
          }
        };
      } catch (_) {
        this.connected = false;
      }
    },
    async loadSnapshots() {
      const list = this.nodes.slice(0, 80);
      await Promise.all(
        list.map(async (n) => {
          try {
            const r = await fetch("/api/recent/" + encodeURIComponent(n.uuid));
            if (!r.ok) return;
            const body = this.unwrap(await r.json());
            const rows = Array.isArray(body)
              ? body
              : body?.data || body?.records || [];
            const latest = rows[rows.length - 1] || body?.latest;
            if (latest && !this.live[n.uuid])
              this.live = { ...this.live, [n.uuid]: latest };
          } catch (_) {}
        }),
      );
    },
    go(page) {
      const path = page.startsWith("node/") ? page : page;
      location.hash = "#/" + path;
      this.applyRoute(path);
    },
    applyRoute(path) {
      const clean = (path || "overview").replace(/^#?\/?/, "");
      if (clean.startsWith("node/")) {
        this.route = "node";
        this.selectedId = decodeURIComponent(clean.slice(5));
        this.fetchHistory(this.selectedId);
      } else {
        this.route = ["overview", "probe", "map", "billing"].includes(clean)
          ? clean
          : "overview";
        if (this.route === "billing" && !this.hasBilling) {
          this.route = "overview";
          if (location.hash !== "#/overview") location.hash = "#/overview";
          return;
        }
        if (this.route === "probe") this.loadProbeData();
      }
    },
    openNode(n) {
      if (!n) return;
      this.selectedId = n.uuid;
      this.route = "node";
      this.fetchHistory(n.uuid);
    },
    async loadProbeData() {
      try {
        const r = await fetch("/api/task/ping");
        if (!r.ok) throw new Error();
        const tasks = this.unwrap(await r.json()) || [];
        this.tasks = Array.isArray(tasks) ? tasks : [];
        if (!this.activeTask && this.tasks.length)
          this.activeTask = this.tasks[0].id;
        if (this.activeTask !== null) await this.fetchProbeRecords();
      } catch (_) {
        this.tasks = [];
        this.probeRecords = [];
        this.probeInfo = [];
      }
    },
    async selectTask(id) {
      this.activeTask = id;
      await this.fetchProbeRecords();
    },
    async fetchProbeRecords() {
      if (this.activeTask === null) return;
      try {
        const r = await fetch(
          "/api/records/ping?task_id=" +
            encodeURIComponent(this.activeTask) +
            "&hours=" +
            this.probeHours,
        );
        if (!r.ok) throw new Error();
        const data = this.unwrap(await r.json()) || {};
        this.probeRecords = Array.isArray(data.records) ? data.records : [];
        this.probeInfo = Array.isArray(data.basic_info) ? data.basic_info : [];
        if (Array.isArray(data.tasks) && !this.tasks.length)
          this.tasks = data.tasks;
      } catch (_) {
        this.probeRecords = [];
        this.probeInfo = [];
      }
    },
    async openProbeNode(node) {
      if (!node) return;
      this.probeNodeId = node.uuid;
      const detailLoad = this.loadProbeDetail();
      this.$nextTick(() => {
        this.$refs.probeDetail?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      await detailLoad;
    },
    async setProbeDetailHours(hours) {
      this.probeDetailHours = hours;
      await this.loadProbeDetail();
    },
    async loadProbeDetail() {
      const uuid = this.probeNodeId;
      const hours = this.probeDetailHours;
      if (!uuid) return;
      const cached = this.probeDetailCache[uuid]?.[hours];
      if (cached) {
        this.probeDetailRecords = cached;
        this.probeDetailLoading = false;
        return;
      }
      this.probeDetailLoading = true;
      this.probeDetailRecords = [];
      try {
        const response = await fetch(
          "/api/records/ping?uuid=" +
            encodeURIComponent(uuid) +
            "&hours=" +
            hours,
        );
        if (!response.ok) throw new Error();
        const body = this.unwrap(await response.json()) || {};
        const records = Array.isArray(body.records) ? body.records : [];
        this.probeDetailCache = {
          ...this.probeDetailCache,
          [uuid]: {
            ...(this.probeDetailCache[uuid] || {}),
            [hours]: records,
          },
        };
        if (this.probeNodeId === uuid && this.probeDetailHours === hours)
          this.probeDetailRecords = records;
      } catch (_) {
        if (this.probeNodeId === uuid && this.probeDetailHours === hours)
          this.probeDetailRecords = [];
      } finally {
        if (this.probeNodeId === uuid && this.probeDetailHours === hours)
          this.probeDetailLoading = false;
      }
    },
    async setDetailHours(hours) {
      this.detailHours = hours;
      await this.fetchHistory(this.selectedId, hours);
    },
    async fetchHistory(uuid, hours = this.detailHours) {
      if (!uuid || this.histories[uuid]?.[hours]) return;
      try {
        const [load, ping] = await Promise.all([
          fetch(
            "/api/records/load?uuid=" +
              encodeURIComponent(uuid) +
              "&hours=" +
              hours,
          ),
          fetch(
            "/api/records/ping?uuid=" +
              encodeURIComponent(uuid) +
              "&hours=" +
              hours,
          ),
        ]);
        const l = load.ok ? this.unwrap(await load.json()) : {};
        const p = ping.ok ? this.unwrap(await ping.json()) : {};
        this.histories = {
          ...this.histories,
          [uuid]: {
            ...(this.histories[uuid] || {}),
            [hours]: {
              load: Array.isArray(l?.records) ? l.records : [],
              ping: Array.isArray(p?.records) ? p.records : [],
            },
          },
        };
      } catch (_) {
        this.histories = {
          ...this.histories,
          [uuid]: {
            ...(this.histories[uuid] || {}),
            [hours]: { load: [], ping: [] },
          },
        };
      }
    },
    linePath(values) {
      const source = values.filter((v) => Number.isFinite(v));
      const stride = Math.max(1, Math.ceil(source.length / 240));
      const arr = source.filter(
        (_, index) => index % stride === 0 || index === source.length - 1,
      );
      if (!arr.length) return "M0 88 L120 76 L240 84 L360 57 L480 66 L600 38";
      const min = Math.min(...arr),
        max = Math.max(...arr),
        range = max - min || 1;
      return arr
        .map(
          (v, i) =>
            `${i ? "L" : "M"} ${((i / (arr.length - 1 || 1)) * 600).toFixed(1)} ${(95 - ((v - min) / range) * 73).toFixed(1)}`,
        )
        .join(" ");
    },
    coordinate(n) {
      const toMap = (lat, lon) => ({ lat, lon });
      const latitude = Number(
        n.latitude ?? n.lat ?? n.geo?.latitude ?? n.geo?.lat ?? n.location?.latitude,
      );
      const longitude = Number(
        n.longitude ?? n.lng ?? n.lon ?? n.geo?.longitude ?? n.geo?.lng ?? n.location?.longitude,
      );
      if (
        Number.isFinite(latitude) &&
        Number.isFinite(longitude) &&
        Math.abs(latitude) <= 90 &&
        Math.abs(longitude) <= 180
      ) {
        return toMap(latitude, longitude);
      }
      const s = [n.city, n.region, n.location, n.country, n.name]
        .filter((value) => typeof value === "string")
        .join(" ")
        .toLowerCase();
      const rules = [
        [/los angeles|lax|us-ca/, [34.0522, -118.2437]],
        [/seattle|us-wa/, [47.6062, -122.3321]],
        [/dallas|us-tx/, [32.7767, -96.797]],
        [/chicago|us-il/, [41.8781, -87.6298]],
        [/new york|nyc|newark|us-ny/, [40.7128, -74.006]],
        [/miami|us-fl/, [25.7617, -80.1918]],
        [/washington|wdc|us-dc/, [38.9072, -77.0369]],
        [/vancouver|canada|🇨🇦/, [49.2827, -123.1207]],
        [/sao paulo|brazil|🇧🇷/, [-23.5505, -46.6333]],
        [/london|united kingdom|\buk\b|🇬🇧/, [51.5072, -0.1276]],
        [/amsterdam|netherlands|🇳🇱/, [52.3676, 4.9041]],
        [/frankfurt|germany|\bde\b|🇩🇪/, [50.1109, 8.6821]],
        [/paris|france|🇫🇷/, [48.8566, 2.3522]],
        [/warsaw|poland|🇵🇱/, [52.2297, 21.0122]],
        [/moscow|russia|🇷🇺/, [55.7558, 37.6173]],
        [/istanbul|turkey|türkiye|🇹🇷/, [41.0082, 28.9784]],
        [/dubai|uae|united arab emirates|🇦🇪/, [25.2048, 55.2708]],
        [/mumbai|india|🇮🇳/, [19.076, 72.8777]],
        [/beijing|北京/, [39.9042, 116.4074]],
        [/shanghai|上海/, [31.2304, 121.4737]],
        [/hangzhou|杭州/, [30.2741, 120.1551]],
        [/guangzhou|shenzhen|guangdong|广州|深圳|广东/, [23.1291, 113.2644]],
        [/china|中国|🇨🇳/, [35.8617, 104.1954]],
        [/hong kong|香港|🇭🇰/, [22.3193, 114.1694]],
        [/taiwan|taipei|台湾|台北|🇹🇼/, [25.033, 121.5654]],
        [/tokyo|osaka|japan|日本|🇯🇵/, [35.6762, 139.6503]],
        [/seoul|korea|韩国|대한민국|🇰🇷/, [37.5665, 126.978]],
        [/singapore|新加坡|🇸🇬/, [1.3521, 103.8198]],
        [/jakarta|indonesia|印尼|🇮🇩/, [-6.2088, 106.8456]],
        [/sydney|melbourne|australia|澳大利亚|🇦🇺/, [-33.8688, 151.2093]],
        [/united states|usa|america|🇺🇸/, [39.8283, -98.5795]],
      ];
      const found = rules.find((x) => x[0].test(s));
      return found ? toMap(found[1][0], found[1][1]) : { lat: null, lon: null };
    },
    billingFor(n) {
      const price = this.number(n.price),
        cycle = this.number(n.billing_cycle) || 30,
        currency = n.currency || "$";
      if (price <= 0) return { monthly: 0, currency, label: this.t("notSet") };
      const monthly = (price / cycle) * 30;
      return {
        monthly,
        currency,
        label: currency + monthly.toFixed(2) + " / " + this.t("billing"),
      };
    },
    billingCycleText(n) {
      const d = this.number(n.billing_cycle) || 30;
      return d === 30
        ? this.language === "zh-CN"
          ? "月付"
          : "MONTHLY"
        : d + (this.language === "zh-CN" ? " 天周期" : " DAY CYCLE");
    },
    daysUntil(date) {
      if (!date) return null;
      const n = new Date(date).getTime();
      return Number.isFinite(n) ? Math.ceil((n - Date.now()) / 86400000) : null;
    },
    expiryText(n) {
      const d = this.daysUntil(n.expired_at);
      if (d === null) return this.t("notSet");
      return d < 0 ? this.t("expired") : d + " " + this.t("days");
    },
  },
  mounted() {
    this.applyAppearance();
    this.applyBackground();
    this.bootstrap();
    this.applyRoute(location.hash);
    if (this.route === "map") this.scheduleGlobeInit();
    window.addEventListener("hashchange", () => this.applyRoute(location.hash));
    this.clock = setInterval(() => (this.now = new Date()), 1000);
  },
  beforeUnmount() {
    this.destroyGlobe();
    clearTimeout(this.globeInitTimer);
    clearInterval(this.clock);
    clearTimeout(this.retryTimer);
    if (this.socket) {
      this.socket.onclose = null;
      this.socket.close();
    }
  },
}).mount("#app");
