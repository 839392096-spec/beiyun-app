const knowledge = {
  female: [
    {
      title: "孕前检查与基础评估",
      body: "建议在计划怀孕前做一次孕前咨询，重点看月经与排卵、慢性病、既往妊娠史、疫苗、口腔、甲状腺、贫血和遗传风险。",
      points: ["带上正在使用的药物清单", "有糖尿病、高血压、甲状腺疾病等情况先稳定控制", "备孕前后避免烟酒，咖啡因不过量"],
      tags: ["孕前咨询", "慢病管理", "用药核对"]
    },
    {
      title: "叶酸与营养",
      body: "多数指南建议有怀孕可能的人每日补充叶酸，常用剂量为 400 微克。若有神经管缺陷史、特殊用药或疾病，应由医生决定剂量。",
      points: ["饮食保证蛋白质、蔬果、全谷物和铁", "不要自行叠加多种复合维生素", "体重过低或过高都建议提前管理"],
      tags: ["叶酸", "营养", "体重"]
    },
    {
      title: "排卵与同房时机",
      body: "可以结合月经周期、宫颈黏液、基础体温和排卵试纸判断易孕窗口。排卵日前后规律同房，比频繁焦虑式安排更可持续。",
      points: ["周期不规律时优先记录 2-3 个周期", "试纸强阳后 24-48 小时内通常更接近排卵", "持续无排卵迹象建议就诊"],
      tags: ["排卵", "周期", "易孕期"]
    }
  ],
  male: [
    {
      title: "精子健康需要提前准备",
      body: "精子生成需要一段时间，备孕期男方应同步改善睡眠、运动、体重、烟酒和高温暴露。",
      points: ["少熬夜，规律中等强度运动", "避免桑拿、久泡热水和长时间高温环境", "有精索静脉曲张、睾丸疼痛或性功能问题及时就医"],
      tags: ["精子质量", "睡眠", "高温"]
    },
    {
      title: "饮食与补充剂",
      body: "均衡饮食比盲目补品更重要。锌、叶酸、维生素 D 等是否需要补充，应结合饮食和检查结果决定。",
      points: ["保证鱼、蛋、奶、豆制品和坚果摄入", "不建议自行长期大剂量补充", "戒烟限酒会直接改善整体生殖健康"],
      tags: ["营养", "补剂", "戒烟限酒"]
    },
    {
      title: "参与而不是旁观",
      body: "备孕不是女方一个人的任务。男方可以共同记录周期、预约检查、准备餐食和承担压力管理。",
      points: ["共同查看打卡记录", "陪同重要检查", "遇到备孕压力时主动沟通"],
      tags: ["共同参与", "沟通", "压力"]
    }
  ],
  couple: [
    {
      title: "建立三个月准备期",
      body: "把备孕前 3 个月当作身体和生活的调试期，重点是规律作息、营养、运动、用药核对和风险筛查。",
      points: ["双方都做基础健康检查", "把烟酒、熬夜和极端减肥列为优先调整项", "准备怀孕前咨询医生是否需要疫苗或补种"],
      tags: ["三个月计划", "共同打卡", "风险筛查"]
    },
    {
      title: "什么时候需要去医院",
      body: "35 岁以下规律备孕 12 个月未孕，或 35 岁及以上备孕 6 个月未孕，建议夫妻双方一起做生育力评估。有明显异常时不用等。",
      points: ["月经长期不规律或闭经", "反复流产、盆腔炎、子宫内膜异位症史", "男方精液异常或相关病史"],
      tags: ["久备不孕", "夫妻同查", "早评估"]
    }
  ]
};

const questions = [
  {
    q: "备孕多久没怀上需要检查？",
    a: "如果女方小于 35 岁，规律无避孕同房 12 个月未孕建议检查；35 岁及以上通常建议 6 个月未孕就评估。若月经明显异常、反复流产、盆腔疾病史或男方生殖系统问题，应更早就诊。"
  },
  {
    q: "叶酸应该什么时候开始吃？",
    a: "通常建议孕前开始补充，并持续到孕早期。常用剂量是每日 400 微克，但有高风险因素的人应让医生单独评估剂量。"
  },
  {
    q: "排卵试纸一直不强阳怎么办？",
    a: "先确认测试时间和连续性，试纸最好每天固定时段测。若连续多个周期没有强阳、月经紊乱或备孕困难，应到妇产科或生殖科评估排卵。"
  },
  {
    q: "备孕期间感冒或吃药了怎么办？",
    a: "不要自行停用慢病药，也不要自行叠加药物。记录药名、剂量、服用日期和末次月经时间，咨询医生或药师判断风险。"
  },
  {
    q: "压力很大影响怀孕吗？",
    a: "长期压力可能影响睡眠、同房频率和内分泌节律。可以把目标从“必须怀上”改成“完成可控习惯”，必要时寻求心理咨询或医生帮助。"
  },
  {
    q: "男方要不要查精液？",
    a: "需要。生育力评估应夫妻双方同时进行，精液检查相对基础且信息量高，尤其是备孕久未成功或男方有相关病史时。"
  }
];

const checkGroups = [
  {
    id: "female",
    title: "女方今日打卡",
    hint: "围绕周期、营养、身体信号和用药安全记录。",
    items: [
      ["female-folic", "叶酸/医生建议补充剂", "按医嘱或说明补充，不自行叠加高剂量复合维生素。"],
      ["female-cycle", "月经、排卵或分泌物记录", "记录出血、基础体温、宫颈黏液、排卵试纸或腹痛等变化。"],
      ["female-food", "优质蛋白与蔬果", "今天至少安排一餐优质蛋白，并保证蔬果和饮水。"],
      ["female-risk", "用药与异常症状核对", "感冒药、止痛药、慢病药或异常出血腹痛，先记录，必要时咨询医生。"]
    ]
  },
  {
    id: "male",
    title: "男方今日打卡",
    hint: "把精子健康相关的可控习惯落到每天。",
    items: [
      ["male-sleep", "睡眠与压力管理", "尽量保证 7 小时左右睡眠，避免连续熬夜。"],
      ["male-heat", "避免高温暴露", "少桑拿、久泡热水、长时间久坐或把电脑放腿上。"],
      ["male-smoke", "远离烟酒", "备孕阶段建议戒烟，避免饮酒或至少严格限制。"],
      ["male-exercise", "适量运动", "完成散步、慢跑、力量训练等中等强度活动，避免突然过量。"]
    ]
  },
  {
    id: "couple",
    title: "双方共同打卡",
    hint: "让备孕变成共同执行，而不是单方承担。",
    items: [
      ["couple-plan", "同步今日安排", "确认排卵监测、同房安排、检查预约或补充剂购买等事项。"],
      ["couple-mood", "沟通压力和情绪", "用 5 分钟说清今天的压力、期待和需要对方配合的地方。"],
      ["couple-food", "共同健康饮食", "少油炸、高糖和夜宵，尽量一起完成一顿均衡餐。"]
    ]
  }
];

const situationChecks = {
  period: {
    title: "今日处于经期",
    body: "以观察经量、疼痛和休息为主，暂不把同房安排作为重点。",
    items: [
      ["situation-period-flow", "记录经量与痛经程度", "若出血异常增多、剧烈腹痛或头晕乏力，应及时就医。"],
      ["situation-period-rest", "注意保暖和休息", "避免过度运动，饮食保持清淡和足量水分。"]
    ]
  },
  fertile: {
    title: "今日处于易孕期",
    body: "重点是排卵监测、同房节奏和双方状态配合。",
    items: [
      ["situation-fertile-test", "排卵试纸/身体信号记录", "记录试纸颜色、宫颈黏液、体温或腹部轻微坠胀。"],
      ["situation-fertile-plan", "安排合适同房时机", "排卵日前后规律同房即可，不必把频率推到双方都焦虑。"]
    ]
  },
  ovulation: {
    title: "今日为预测排卵日",
    body: "预测不等于确诊排卵，今天适合重点记录并完成夫妻协作。",
    items: [
      ["situation-ovulation-confirm", "重点确认排卵信号", "结合排卵试纸、宫颈黏液和体温变化观察。"],
      ["situation-ovulation-care", "同房后放松休息", "不需要特殊姿势或过度清洗，保持正常生活即可。"]
    ]
  },
  normal: {
    title: "今日为普通备孕日",
    body: "重点打基础：作息、饮食、运动、戒烟酒和周期连续记录。",
    items: [
      ["situation-normal-routine", "完成基础健康习惯", "把睡眠、饮食、运动和情绪稳定放在第一位。"],
      ["situation-normal-review", "复盘本周期记录", "查看是否需要补充体温、试纸、月经或同房记录。"]
    ]
  }
};

const birthItems = [
  {
    title: "临产前 4-6 周",
    body: "确认产检计划、分娩医院、交通路线、证件和待产包。了解临产信号，但不把网络信息当作诊断。",
    points: ["规律宫缩逐渐增强", "破水或疑似破水", "阴道出血、剧烈腹痛、胎动明显减少需立即就医"]
  },
  {
    title: "入院准备",
    body: "待产包以证件、产检资料、产妇用品、新生儿衣物和充电设备为核心，避免带太多用不上的物品。",
    points: ["身份证、医保卡、产检本/检查报告", "产褥垫、哺乳内衣、宽松衣物", "新生儿衣物、包被、纸尿裤"]
  },
  {
    title: "产后 24-72 小时",
    body: "重点观察出血、体温、伤口/会阴疼痛、排尿、乳房胀痛和情绪变化。新生儿关注吃奶、尿便、黄疸和体温。",
    points: ["出血量突然增多或有大血块要就医", "发热、恶臭分泌物、严重头痛不能拖", "明显情绪低落、失眠或伤害念头需要立即求助"]
  },
  {
    title: "产后恢复期",
    body: "按医嘱复查，循序恢复活动。母乳、混合或配方喂养都需要获得支持，不用把喂养方式变成自责。",
    points: ["通常需要产后复查", "盆底和腹直肌恢复应专业评估", "家人应分担夜间照护和家务"]
  }
];

const today = new Date();
const todayKey = toDateKey(today);
const storageRoot = "preconception-app";
let currentUser = localStorage.getItem(`${storageRoot}:session`) || "";
let authMode = "login";
let calendarMonth = new Date(today.getFullYear(), today.getMonth(), 1);

const authScreen = document.querySelector("#authScreen");
const appShell = document.querySelector("#appShell");
const authForm = document.querySelector("#authForm");
const authMessage = document.querySelector("#authMessage");
const authSubmit = document.querySelector("#authSubmit");
const phoneInput = document.querySelector("#phoneInput");
const passwordInput = document.querySelector("#passwordInput");
const roleField = document.querySelector("#roleField");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const knowledgeList = document.querySelector("#knowledgeList");
const qaList = document.querySelector("#qaList");
const checkinGrid = document.querySelector("#checkinGrid");
const noteInput = document.querySelector("#noteInput");
const cycleForm = document.querySelector("#cycleForm");
const lastPeriodInput = document.querySelector("#lastPeriodInput");
const cycleLengthInput = document.querySelector("#cycleLengthInput");
const periodLengthInput = document.querySelector("#periodLengthInput");
const partnerForm = document.querySelector("#partnerForm");
const partnerPhoneInput = document.querySelector("#partnerPhoneInput");
const partnerMessage = document.querySelector("#partnerMessage");
const partnerStatus = document.querySelector("#partnerStatus");
const momentForm = document.querySelector("#momentForm");
const momentInput = document.querySelector("#momentInput");
const momentTag = document.querySelector("#momentTag");
const momentMessage = document.querySelector("#momentMessage");
const momentList = document.querySelector("#momentList");
let communityFilter = "all";

function userKey(name) {
  return `${storageRoot}:${currentUser}:${name}`;
}

function accountKey(phone, name) {
  return `${storageRoot}:${phone}:${name}`;
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(value) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function dayDiff(start, end) {
  const startTime = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  const endTime = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
  return Math.round((endTime - startTime) / 86400000);
}

function formatDate(date) {
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function getAccounts() {
  return JSON.parse(localStorage.getItem(`${storageRoot}:accounts`) || "{}");
}

function saveAccounts(accounts) {
  localStorage.setItem(`${storageRoot}:accounts`, JSON.stringify(accounts));
}

function getMoments() {
  return JSON.parse(localStorage.getItem(`${storageRoot}:moments`) || "[]");
}

function saveMoments(moments) {
  localStorage.setItem(`${storageRoot}:moments`, JSON.stringify(moments));
}

function setAuthMessage(text, success = false) {
  authMessage.textContent = text;
  authMessage.classList.toggle("success", success);
}

function updateAuthMode(mode) {
  authMode = mode;
  document.querySelectorAll(".auth-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });
  authSubmit.textContent = mode === "login" ? "登录" : "注册";
  roleField.style.display = mode === "login" ? "none" : "grid";
  setAuthMessage("");
}

function getCurrentAccount() {
  return getAccounts()[currentUser] || null;
}

function getUserRole(phone = currentUser) {
  const account = getAccounts()[phone];
  return account?.role || "female";
}

function getRoleName(role) {
  return role === "male" ? "男方版" : "女方版";
}

function validatePhone(phone) {
  return /^1\d{10}$/.test(phone);
}

function showApp() {
  const loggedIn = Boolean(currentUser);
  authScreen.classList.toggle("hidden", loggedIn);
  appShell.classList.toggle("is-locked", !loggedIn);
  const role = getUserRole();
  document.querySelector("#activeUser").textContent = loggedIn ? `${currentUser} · ${getRoleName(role)}` : "未登录";
  if (loggedIn) {
    updateVersionHome();
    setKnowledgeRole(getUserRole());
    loadUserState();
  }
}

function updateVersionHome() {
  const role = getUserRole();
  document.querySelector("#versionTitle").textContent = role === "male" ? "男方备孕版本" : "女方备孕版本";
  document.querySelector("#versionCopy").textContent =
    role === "male"
      ? "重点关注睡眠、运动、戒烟酒、高温暴露和伴侣协作。"
      : "重点关注周期预测、叶酸营养、排卵信号和身体异常记录。";
}

function loadUserState() {
  noteInput.value = localStorage.getItem(userKey(`note-${todayKey}`)) || "";
  loadCycleSettings();
  renderCheckin();
  updateStatus();
  loadPartnerState();
  renderMoments();
}

function setTab(id) {
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === id));
  panels.forEach((panel) => panel.classList.toggle("active", panel.id === id));
}

function renderKnowledge(type = "female") {
  knowledgeList.innerHTML = knowledge[type]
    .map(
      (item) => `
        <article class="knowledge-card">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
          <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
          <div class="tag-row">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        </article>
      `
    )
    .join("");
}

function setKnowledgeRole(type) {
  document.querySelectorAll(".segment-btn").forEach((item) => {
    item.classList.toggle("active", item.dataset.person === type);
  });
  renderKnowledge(type);
}

function renderQuestions(keyword = "") {
  const normalized = keyword.trim().toLowerCase();
  const filtered = questions.filter((item) => `${item.q}${item.a}`.toLowerCase().includes(normalized));
  qaList.innerHTML = filtered
    .map(
      (item) => `
        <article class="qa-card">
          <button type="button" aria-expanded="false">
            <h3><span>${item.q}</span><span>+</span></h3>
          </button>
          <p class="qa-answer">${item.a}</p>
        </article>
      `
    )
    .join("");

  qaList.querySelectorAll(".qa-card").forEach((card) => {
    const button = card.querySelector("button");
    button.addEventListener("click", () => {
      const open = card.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      button.querySelector("h3 span:last-child").textContent = open ? "-" : "+";
    });
  });
}

function getChecks(phone = currentUser) {
  if (!phone) return {};
  return JSON.parse(localStorage.getItem(accountKey(phone, `checkin-${todayKey}`)) || "{}");
}

function saveChecks(checks) {
  localStorage.setItem(userKey(`checkin-${todayKey}`), JSON.stringify(checks));
  updateStatus();
  renderPartnerStatus();
}

function getCurrentSituation() {
  const settings = getCycleSettings();
  if (!settings) return "normal";
  const type = getDayType(settings, today);
  return type || "normal";
}

function getCurrentSituationForUser(phone = currentUser) {
  const raw = localStorage.getItem(accountKey(phone, "cycle-settings"));
  if (!raw) return "normal";
  const settings = JSON.parse(raw);
  const type = getDayType(settings, today);
  return type || "normal";
}

function getTodayCheckGroups(phone = currentUser) {
  const role = getUserRole(phone);
  const baseGroups = checkGroups.filter((group) => group.id === role || group.id === "couple");
  const situation = getCurrentSituationForUser(phone);
  return [
    ...baseGroups,
    {
      id: "situation",
      title: situationChecks[situation].title,
      hint: situationChecks[situation].body,
      items: situationChecks[situation].items
    }
  ];
}

function getFlatCheckItems(phone = currentUser) {
  return getTodayCheckGroups(phone).flatMap((group) => group.items);
}

function renderCycleAdvice() {
  const situation = getCurrentSituation();
  const advice = situationChecks[situation];
  const hasCycle = Boolean(getCycleSettings());
  document.querySelector("#cycleAdvice").innerHTML = `
    <div>
      <span>今日周期建议</span>
      <strong>${advice.title}</strong>
      <p>${advice.body}${hasCycle ? "" : " 如需更准确的场景打卡，请先在“周期日历”填写末次月经和周期信息。"}</p>
    </div>
  `;
}

function renderCheckin() {
  const checks = getChecks();
  renderCycleAdvice();
  checkinGrid.innerHTML = getTodayCheckGroups()
    .map(
      (group) => `
        <section class="check-section ${group.id}">
          <div class="check-section-head">
            <h3>${group.title}</h3>
            <p>${group.hint}</p>
          </div>
          <div class="check-list">
            ${group.items
              .map(
                ([id, title, body]) => `
                  <label class="check-card">
                    <input type="checkbox" data-check="${id}" ${checks[id] ? "checked" : ""} />
                    <span>
                      <h3>${title}</h3>
                      <p>${body}</p>
                    </span>
                  </label>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");

  checkinGrid.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const next = getChecks();
      next[input.dataset.check] = input.checked;
      saveChecks(next);
    });
  });
}

function renderBirth() {
  document.querySelector("#birthTimeline").innerHTML = birthItems
    .map(
      (item) => `
        <article class="timeline-card">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
          <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function maskPhone(phone) {
  return phone ? `${phone.slice(0, 3)}****${phone.slice(7)}` : "匿名用户";
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[char];
  });
}

function formatMomentTime(value) {
  const date = new Date(value);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${month}-${day} ${hour}:${minute}`;
}

function renderMoments() {
  const moments = getMoments()
    .filter((moment) => communityFilter === "all" || moment.tag === communityFilter)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (moments.length === 0) {
    momentList.innerHTML = `
      <article class="moment-card">
        <div class="moment-meta"><strong>社区还没有动态</strong></div>
        <p>发布第一条此刻瞬间，记录今天的备孕心情或经验。</p>
      </article>
    `;
    return;
  }

  momentList.innerHTML = moments
    .map(
      (moment) => `
        <article class="moment-card">
          <div class="moment-meta">
            <strong>${maskPhone(moment.author)}</strong>
            <span>${getRoleName(moment.role)}</span>
            <span>${formatMomentTime(moment.createdAt)}</span>
          </div>
          <p>${escapeHTML(moment.content)}</p>
          <div class="moment-toolbar">
            <span class="moment-tag">${moment.tag}</span>
            ${
              moment.author === currentUser
                ? `<button class="text-btn" type="button" data-delete-moment="${moment.id}">删除</button>`
                : ""
            }
          </div>
        </article>
      `
    )
    .join("");

  momentList.querySelectorAll("[data-delete-moment]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = getMoments().filter((moment) => moment.id !== button.dataset.deleteMoment);
      saveMoments(next);
      renderMoments();
    });
  });
}

function updateStatus() {
  const checks = getChecks();
  const items = getFlatCheckItems();
  const completed = items.filter(([id]) => checks[id]).length;
  document.querySelector("#streakCount").textContent = `${completed}/${items.length}`;
  document.querySelector("#todayState").textContent =
    completed === items.length ? "今天已全部完成" : `今天已完成 ${completed} 项`;
}

function getCycleSettings() {
  if (!currentUser) return null;
  return JSON.parse(localStorage.getItem(userKey("cycle-settings")) || "null");
}

function saveCycleSettings(settings) {
  localStorage.setItem(userKey("cycle-settings"), JSON.stringify(settings));
}

function loadCycleSettings() {
  const saved = getCycleSettings();
  if (!saved) {
    lastPeriodInput.value = toDateKey(new Date(today.getFullYear(), today.getMonth(), 1));
    renderCalendar();
    return;
  }
  lastPeriodInput.value = saved.lastPeriod;
  cycleLengthInput.value = saved.cycleLength;
  periodLengthInput.value = saved.periodLength;
  calendarMonth = new Date(parseDate(saved.lastPeriod).getFullYear(), parseDate(saved.lastPeriod).getMonth(), 1);
  renderPrediction(saved);
  renderCalendar();
}

function getCycleForDate(settings, date) {
  const lastPeriod = parseDate(settings.lastPeriod);
  const cycleLength = Number(settings.cycleLength);
  const rawDiff = dayDiff(lastPeriod, date);
  const cycleIndex = Math.floor(rawDiff / cycleLength);
  const cycleStart = addDays(lastPeriod, cycleIndex * cycleLength);
  const dayInCycle = dayDiff(cycleStart, date);
  const ovulationDay = cycleLength - 14;
  return { cycleStart, dayInCycle, ovulationDay };
}

function getDayType(settings, date) {
  if (!settings) return "";
  const { dayInCycle, ovulationDay } = getCycleForDate(settings, date);
  if (dayInCycle >= 0 && dayInCycle < Number(settings.periodLength)) return "period";
  if (dayInCycle === ovulationDay) return "ovulation";
  if (dayInCycle >= ovulationDay - 5 && dayInCycle <= ovulationDay + 1) return "fertile";
  return "";
}

function renderPrediction(settings) {
  const lastPeriod = parseDate(settings.lastPeriod);
  const cycleLength = Number(settings.cycleLength);
  const periodLength = Number(settings.periodLength);
  const ovulation = addDays(lastPeriod, cycleLength - 14);
  const fertileStart = addDays(ovulation, -5);
  const fertileEnd = addDays(ovulation, 1);
  const nextPeriod = addDays(lastPeriod, cycleLength);
  document.querySelector("#predictionCard").innerHTML = `
    <span>预测结果</span>
    <strong>${formatDate(ovulation)}</strong>
    <p>预测排卵日：${formatDate(ovulation)}；易孕期：${formatDate(fertileStart)}-${formatDate(fertileEnd)}；本次经期约 ${periodLength} 天，下次月经预计 ${formatDate(nextPeriod)}。</p>
  `;
}

function renderCalendar() {
  const settings = getCycleSettings();
  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();
  const monthStart = new Date(year, month, 1);
  const gridStart = addDays(monthStart, -monthStart.getDay());
  const calendar = document.querySelector("#cycleCalendar");
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];

  document.querySelector("#monthTitle").textContent = `${year}年${month + 1}月`;
  calendar.innerHTML = weekdays.map((day) => `<div class="weekday">${day}</div>`).join("");

  for (let index = 0; index < 42; index += 1) {
    const date = addDays(gridStart, index);
    const type = getDayType(settings, date);
    const isToday = toDateKey(date) === todayKey;
    const muted = date.getMonth() !== month;
    const label = type === "period" ? "经期" : type === "fertile" ? "易孕" : type === "ovulation" ? "排卵" : "";
    const className = ["calendar-day", muted ? "muted" : "", type, isToday ? "today" : ""].filter(Boolean).join(" ");
    calendar.insertAdjacentHTML(
      "beforeend",
      `<div class="${className}"><strong>${date.getDate()}</strong>${label ? `<small>${label}</small>` : ""}</div>`
    );
  }
}

document.querySelectorAll(".auth-tab").forEach((button) => {
  button.addEventListener("click", () => updateAuthMode(button.dataset.authMode));
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value;
  const accounts = getAccounts();

  if (!validatePhone(phone)) {
    setAuthMessage("请输入正确的 11 位手机号。");
    return;
  }
  if (password.length < 6) {
    setAuthMessage("密码至少需要 6 位。");
    return;
  }

  if (authMode === "register") {
    if (accounts[phone]) {
      setAuthMessage("这个手机号已经注册，可以直接登录。");
      return;
    }
    const role = document.querySelector("input[name='role']:checked").value;
    accounts[phone] = { password, role, partner: "", createdAt: new Date().toISOString() };
    saveAccounts(accounts);
    currentUser = phone;
    localStorage.setItem(`${storageRoot}:session`, currentUser);
    showApp();
    return;
  }

  if (!accounts[phone] || accounts[phone].password !== password) {
    setAuthMessage("手机号或密码不正确。");
    return;
  }
  currentUser = phone;
  localStorage.setItem(`${storageRoot}:session`, currentUser);
  showApp();
});

document.querySelector("#logoutBtn").addEventListener("click", () => {
  currentUser = "";
  localStorage.removeItem(`${storageRoot}:session`);
  passwordInput.value = "";
  setAuthMessage("");
  showApp();
});

function getCompletionForUser(phone) {
  const checks = getChecks(phone);
  const items = getFlatCheckItems(phone);
  const completed = items.filter(([id]) => checks[id]).length;
  return { completed, total: items.length };
}

function loadPartnerState() {
  const account = getCurrentAccount();
  const partner = account?.partner || "";
  partnerPhoneInput.value = partner;
  renderPartnerStatus();
}

function renderPartnerStatus() {
  const account = getCurrentAccount();
  const partner = account?.partner || "";
  const accounts = getAccounts();

  if (!partner) {
    partnerStatus.innerHTML = `
      <h3>对方今日状态</h3>
      <p>还未绑定情侣账号。绑定后，这里会显示对方今天的打卡完成情况。</p>
    `;
    return;
  }

  if (!accounts[partner]) {
    partnerStatus.innerHTML = `
      <h3>对方今日状态</h3>
      <p>已填写 ${partner}，但这个手机号还没有在本机注册。</p>
    `;
    return;
  }

  const { completed, total } = getCompletionForUser(partner);
  const done = completed === total;
  partnerStatus.innerHTML = `
    <h3>对方今日状态</h3>
    <div class="partner-score">
      <span>${partner} · ${getRoleName(getUserRole(partner))}</span>
      <strong>${completed}/${total}</strong>
      <p>${done ? "对方今天已完成全部打卡。" : `对方今天还有 ${total - completed} 项未完成。`}</p>
    </div>
  `;
}

partnerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const partner = partnerPhoneInput.value.trim();
  const accounts = getAccounts();

  partnerMessage.textContent = "";
  partnerMessage.classList.remove("success");

  if (!validatePhone(partner)) {
    partnerMessage.textContent = "请输入正确的 11 位手机号。";
    return;
  }
  if (partner === currentUser) {
    partnerMessage.textContent = "不能绑定自己的手机号。";
    return;
  }
  if (!accounts[partner]) {
    partnerMessage.textContent = "对方手机号还没有注册，请先注册对方账号。";
    return;
  }

  accounts[currentUser].partner = partner;
  if (!accounts[partner].partner) {
    accounts[partner].partner = currentUser;
  }
  saveAccounts(accounts);
  partnerMessage.textContent = "情侣账号已绑定。";
  partnerMessage.classList.add("success");
  renderPartnerStatus();
});

momentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const content = momentInput.value.trim();

  momentMessage.textContent = "";
  momentMessage.classList.remove("success");

  if (content.length < 2) {
    momentMessage.textContent = "至少写 2 个字再发布。";
    return;
  }

  const moments = getMoments();
  moments.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    author: currentUser,
    role: getUserRole(),
    tag: momentTag.value,
    content,
    createdAt: new Date().toISOString()
  });
  saveMoments(moments);
  momentInput.value = "";
  momentMessage.textContent = "已发布到社区。";
  momentMessage.classList.add("success");
  renderMoments();
});

document.querySelectorAll(".community-filter").forEach((button) => {
  button.addEventListener("click", () => {
    communityFilter = button.dataset.filter;
    document.querySelectorAll(".community-filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderMoments();
  });
});

tabs.forEach((tab) => tab.addEventListener("click", () => setTab(tab.dataset.tab)));

document.querySelectorAll(".segment-btn").forEach((button) => {
  button.addEventListener("click", () => {
    setKnowledgeRole(button.dataset.person);
  });
});

document.querySelector("#questionSearch").addEventListener("input", (event) => {
  renderQuestions(event.target.value);
});

document.querySelector("#resetToday").addEventListener("click", () => {
  localStorage.removeItem(userKey(`checkin-${todayKey}`));
  renderCheckin();
  updateStatus();
});

document.querySelector("#saveNote").addEventListener("click", () => {
  localStorage.setItem(userKey(`note-${todayKey}`), noteInput.value);
});

cycleForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const settings = {
    lastPeriod: lastPeriodInput.value,
    cycleLength: Number(cycleLengthInput.value),
    periodLength: Number(periodLengthInput.value)
  };
  saveCycleSettings(settings);
  calendarMonth = new Date(parseDate(settings.lastPeriod).getFullYear(), parseDate(settings.lastPeriod).getMonth(), 1);
  renderPrediction(settings);
  renderCalendar();
  renderCheckin();
  updateStatus();
});

document.querySelector("#prevMonth").addEventListener("click", () => {
  calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1);
  renderCalendar();
});

document.querySelector("#nextMonth").addEventListener("click", () => {
  calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1);
  renderCalendar();
});

renderKnowledge();
renderQuestions();
renderBirth();
updateAuthMode("login");
showApp();
