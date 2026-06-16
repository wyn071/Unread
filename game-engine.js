(() => {
  let playerName = "You";
  let currentChat = null;
  let bannerContact = null;
  let bannerTimer = null;
  let pendingChoices = [];
  let pendingContact = null;
  let pendingSceneId = null;
  let currentMode = "CHAT_MODE";

  const state = {
    clues: [],
    clueIds: new Set(),
    flags: {},
    suspicion: {
      jordan: 0,
      alex: 0,
      sam: 0,
      river: 0,
      dmitri: 0,
      blackwell: 0,
    },
    histories: {},
    unlocked: new Set(["casey", "river"]),
    path: [],
    finalSuspect: null,
    finalMethod: null,
    finalMotive: null,
    typingByContact: {},
    unread: new Set(),
  };

  const now = new Date();
  const todayShort = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const todayLong = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const chars = {
    casey: {
      name: "Casey Morgan",
      role: "Lead Architect, Neuro",
      initials: "CM",
      av: "avatar-casey",
      relationship: "Victim. Sent you a scheduled message before dying.",
      personality:
        "Brilliant, arrogant, paranoid. A programming prodigy who discovered something dangerous hidden in Neurosift's training data.",
      background:
        "Former MIT researcher. Sole architect of Neurosift. Had been encrypting everything and setting up dead man's switches in the weeks before death. Pushed a mysterious Git commit days before dying, then it was force-deleted.",
      tag: "victim",
    },
    river: {
      name: "River Santos",
      role: "Junior Developer / Senior Engineer, Neuro",
      initials: "RS",
      av: "avatar-river",
      relationship: "Your friend. Casey's protege at Neuro.",
      personality:
        "Gifted, warm, but recently distant. Was close to Casey; something changed weeks before the death.",
      background:
        "Recently promoted to Senior Engineer. Some say River discovered something in Casey's code. Others whisper the promotion came with strings attached.",
      tag: "suspect",
    },
    jordan: {
      name: "J.R. Reeves",
      role: "CEO, Neuro",
      initials: "JR",
      av: "avatar-jordan",
      relationship:
        "Casey's boss. Rumored to be secretly negotiating a company sale.",
      personality:
        "Charismatic, smooth-talking, barely technical. Business always comes first.",
      background:
        "Former venture capitalist. Convinced investors to pour millions into Casey's vision. Secretly negotiating to sell the company with or without Casey's approval.",
      tag: "suspect",
    },
    alex: {
      name: "Alex Chen",
      role: "Head of Cybersecurity, Neuro",
      initials: "AC",
      av: "avatar-alex",
      relationship:
        "Casey's former MIT research partner. Their encrypted chats went silent weeks ago.",
      personality:
        "Brilliant, guarded. Knows where all the digital bodies are buried.",
      background:
        "Co-authored multiple papers with Casey. Had a bitter falling out over intellectual property rights. Was the only person Casey seemed to trust, until recently.",
      tag: "suspect",
    },
    blackwell: {
      name: "Morgan Blackwell",
      role: "Venture Capitalist / Board Member",
      initials: "MB",
      av: "avatar-blackwell",
      relationship:
        "Investor. Pressured Casey to launch Neurosift ahead of schedule.",
      personality: "Ice-cold, results-driven, ruthless.",
      background:
        "Invested $15M in Neuro. Repeatedly pressured Casey to launch despite stated ethical concerns and unresolved anomalies in the training data.",
      tag: "suspect",
    },
    dmitri: {
      name: "Dmitri Volkov",
      role: "Cybersecurity Consultant",
      initials: "DV",
      av: "avatar-dmitri",
      relationship:
        "Mysterious. Casey believed he was a corporate spy but could never prove it.",
      personality: "Calculated, always one step ahead. Gives little away.",
      background:
        "Hired six months ago to stress-test Neuro's systems. Previously worked for a major tech competitor.",
      tag: "suspect",
    },
    sam: {
      name: "Sam Pierce",
      role: "Operations Manager, Neuro",
      initials: "SP",
      av: "avatar-sam",
      relationship:
        "Knows every dirty financial secret at Neuro. Has been deleting files.",
      personality: "Exhausted, nervous, pragmatic.",
      background:
        "Handled all contracts and NDAs. Casey recently asked Sam to pull unusual transaction records, and Sam has been nervously deleting files ever since.",
      tag: "suspect",
    },
  };

  const contactOrder = [
    "casey",
    "river",
    "jordan",
    "alex",
    "sam",
    "dmitri",
    "blackwell",
  ];

  const clueCatalog = {
    A_casey_timestamp:
      "Casey's farewell message felt scheduled, overly polished, and unlike their usual blunt style.",
    B2_message:
      "River confirmed Casey is dead after you received Casey's scheduled farewell message.",
    C1_legacy:
      "Casey directed you to the legacy branch before anyone else mentioned the repository.",
    D1_deleted_commit:
      "Casey's insurance-policy commit was force-deleted after it was pushed.",
    D2_toxicology:
      "Toxicology points to insulin mixed with a fast-acting poison, not a straightforward suicide.",
    E1_blackbox:
      "PROJECT_BLACKBOX says Neurosift used stolen training data and someone covered it up.",
    F1_audit:
      "The audit log links DataVault payments to Sam Pierce and final authorization to J.R. Reeves.",
    F3_access:
      "Force-deleting the commit required high-level access and left traces in the reflog.",
    F10_drive:
      "Casey's encrypted drive never made it into the official evidence log.",
    I1_admin_key:
      "The first BLACKBOX payment cleared minutes before Alex generated an emergency admin key.",
    I3_override:
      "Alex's security admin account used an emergency server-room override at 10:58 PM.",
    I6_blackbox_data:
      "PROJECT_BLACKBOX mixed medical, legal, and private support data into the training set.",
    I8_packet:
      "Dmitri's packet capture points the log-tamper script back to sec-mirror-02.",
    I10_adapter:
      "Casey found Alex's old MIT-era adapter inside the BLACKBOX data chain.",
    I12_insulin:
      "Alex wrote the medical incident report that documented Casey's insulin location and routine.",
    J4_clone:
      "Casey's local clone says A.C. built the laundering adapter used for BLACKBOX.",
    J6_payload:
      "The staged farewell payload came from sec-mirror-02 and used Neuro's compliance editor.",
    K2_author:
      "The staged suicide note metadata lists achen_sec as the hidden document author.",
    K3_poison:
      "Alex had the insulin routine and filed a suspicious biohazard disposal request after Casey died.",
    K4_confession:
      "Alex admitted Casey was going to destroy work Alex believed belonged to both of them.",
  };

  const sceneClues = {
    B2: "B2_message",
    C1: "C1_legacy",
    D1: "D1_deleted_commit",
    D2: "D2_toxicology",
    D3: "D1_deleted_commit",
    E1: "E1_blackbox",
    E2: "F3_access",
    E3: "D2_toxicology",
    F1: "F1_audit",
    F3: "F3_access",
    F10: "F10_drive",
    F11: "D1_deleted_commit",
    I1: "I1_admin_key",
    I3: "I3_override",
    I6: "I6_blackbox_data",
    I8: "I8_packet",
    I10: "I10_adapter",
    I12: "I12_insulin",
    J1: "I1_admin_key",
    J3: "I3_override",
    J4: "J4_clone",
    J6: "J6_payload",
    J7: "I10_adapter",
    K2: "K2_author",
    K3: "K3_poison",
    K4: "K4_confession",
  };

  const sceneSuspicion = {
    F1: { sam: 1, jordan: 1 },
    F7: { alex: 1 },
    F8: { dmitri: 1 },
    F9: { blackwell: 1, jordan: 1 },
    H4: { alex: 1 },
    H7: { dmitri: 1 },
    H12: { jordan: 1 },
    I1: { alex: 1, sam: 1 },
    I3: { alex: 2 },
    I8: { alex: 2 },
    I10: { alex: 2 },
    I12: { alex: 2 },
    J4: { alex: 2 },
    J6: { alex: 2 },
    K3: { alex: 2 },
    K4: { alex: 3 },
  };

  const scenes = window.UNREAD_SCENES || {};

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function inlineFormat(value) {
    return escapeHtml(value)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/_([^_]+)_/g, "<em>$1</em>")
      .replace(/\n/g, "<br>");
  }

  function contactForSpeaker(speaker, fallback = "river") {
    return chars[speaker] ? speaker : fallback;
  }

  function ensureHistory(contact) {
    if (!state.histories[contact]) state.histories[contact] = [];
  }

  function unlockContact(contact) {
    if (!chars[contact]) return;
    state.unlocked.add(contact);
    renderChatList();
  }

  function setGameMode(mode) {
    currentMode = mode;
    const chatView = document.getElementById("chat-view");
    const emptyState = document.getElementById("empty-state");
    const deductionView = document.getElementById("deduction-view");
    if (mode === "CHAT_MODE") {
      deductionView.style.display = "none";
      if (currentChat) {
        chatView.style.display = "flex";
        emptyState.style.display = "none";
      } else {
        chatView.style.display = "none";
        emptyState.style.display = "flex";
      }
    } else {
      hideChoices();
      chatView.style.display = "none";
      emptyState.style.display = "none";
      deductionView.style.display = "block";
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function typingDelay(text) {
    const length = text.length;
    if (length < 70) return 800 + Math.min(400, length * 4);
    if (length < 180) return 1200 + Math.min(800, length * 3);
    return Math.min(3000, 2000 + length * 2);
  }

  function speakerName(speaker, fallbackLabel) {
    if (speaker === "system") return "System";
    return chars[speaker]?.name || fallbackLabel || "Someone";
  }

  async function addTypedHistory(contact, item) {
    if (item.speaker === "player" || item.speaker === "system" || item.faded) {
      addHistory(contact, item);
      return;
    }
    state.typingByContact[contact] = `${speakerName(item.speaker, item.label)} is typing...`;
    if (currentChat === contact && currentMode === "CHAT_MODE") showTypingIndicator(contact);
    await sleep(typingDelay(item.text));
    delete state.typingByContact[contact];
    removeTypingIndicator();
    addHistory(contact, item);
    await sleep(220);
  }

  function addHistory(contact, item) {
    ensureHistory(contact);
    state.histories[contact].push(item);
    if (item.speaker && chars[item.speaker]) unlockContact(item.speaker);
    if (currentChat === contact && currentMode === "CHAT_MODE") appendHistoryItem(contact, item);
  }

  function renderChatList() {
    const list = document.getElementById("chatlist");
    list.innerHTML = "";
    contactOrder
      .filter((key) => state.unlocked.has(key))
      .forEach((key) => {
        const c = chars[key];
        const history = state.histories[key] || [];
        const last = [...history].reverse().find((m) => m.kind === "message");
        const item = document.createElement("div");
        item.className = `chat-item${currentChat === key ? " active" : ""}`;
        item.id = `ci-${key}`;
        item.onclick = () => openChat(key);
        item.innerHTML = `
          <div class="avatar ${c.av}" style="width:44px;height:44px;font-size:14px" onclick="openProfile(event, '${key}')">${c.initials}</div>
          <div class="chat-info">
            <div class="chat-name">${escapeHtml(c.name)}</div>
            <div class="chat-role">${escapeHtml(c.role)}</div>
            <div class="chat-preview" id="prev-${key}">${escapeHtml(last ? last.text.split("\n")[0] : "No recent messages")}</div>
          </div>
          <div class="chat-meta">
            <div class="chat-time" id="time-${key}">${history.length ? todayShort : ""}</div>
            <div class="unread-dot" id="dot-${key}" style="display:${state.unread.has(key) ? "block" : "none"}"></div>
          </div>`;
        list.appendChild(item);
      });
  }

  function openChat(contact) {
    if (currentMode !== "CHAT_MODE") return;
    setGameMode("CHAT_MODE");
    currentChat = contact;
    state.unread.delete(contact);
    renderChatList();
    document.getElementById("empty-state").style.display = "none";
    document.getElementById("chat-view").style.display = "flex";
    const c = chars[contact];
    const av = document.getElementById("chat-av");
    av.className = `avatar ${c.av}`;
    av.style.cssText = "width:40px;height:40px;font-size:14px;cursor:pointer;";
    av.textContent = c.initials;
    document.getElementById("chat-name").textContent = c.name;
    document.getElementById("chat-role").textContent = c.role;
    renderChat(contact);
  }

  function renderChat(contact) {
    const mc = document.getElementById("messages-container");
    mc.innerHTML = "";
    ensureHistory(contact);
    state.histories[contact].forEach((item) => {
      if (item.kind === "divider") mc.appendChild(tsDivider(item.label));
      if (item.kind === "marker") mc.appendChild(newMsgMarker());
      if (item.kind === "message") mc.appendChild(bub(item, contact));
    });
    if (state.typingByContact[contact]) {
      const row = document.createElement("div");
      row.className = "msg-row incoming typing-row";
      row.innerHTML = `<div class="bubble typing-bubble" aria-label="${escapeHtml(state.typingByContact[contact])}"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
      mc.appendChild(row);
    }
    if (pendingContact === contact && pendingChoices.length) {
      showChoices(pendingChoices);
    } else {
      hideChoices();
    }
    setTimeout(() => {
      mc.scrollTop = mc.scrollHeight;
    }, 40);
  }

  function appendHistoryItem(contact, item) {
    const mc = document.getElementById("messages-container");
    if (item.kind === "divider") mc.appendChild(tsDivider(item.label));
    if (item.kind === "marker") mc.appendChild(newMsgMarker());
    if (item.kind === "message") mc.appendChild(bub(item, contact));
    mc.scrollTop = mc.scrollHeight;
  }

  function showTypingIndicator(contact) {
    const mc = document.getElementById("messages-container");
    removeTypingIndicator();
    const row = document.createElement("div");
    row.className = "msg-row incoming typing-row";
    row.id = "typing-indicator-row";
    row.innerHTML = `<div class="bubble typing-bubble" aria-label="${escapeHtml(state.typingByContact[contact])}"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
    mc.appendChild(row);
    mc.scrollTop = mc.scrollHeight;
  }

  function removeTypingIndicator() {
    const existing = document.getElementById("typing-indicator-row");
    if (existing) existing.remove();
  }

  function bub(item, activeContact) {
    const dir = item.speaker === "player" ? "outgoing" : "incoming";
    const row = document.createElement("div");
    row.className = `msg-row ${dir}${item.faded ? " faded" : ""}`;
    const bubble = document.createElement("div");
    bubble.className = `bubble${item.speaker === "system" ? " system-bubble" : ""}${item.code ? " code-bubble" : ""}`;
    const needsLabel =
      item.speaker &&
      item.speaker !== "player" &&
      item.speaker !== activeContact &&
      item.speaker !== "system";
    const label = needsLabel && chars[item.speaker] ? chars[item.speaker].name : item.label;
    bubble.innerHTML = `${label && item.speaker !== "player" ? `<div class="speaker-label">${escapeHtml(label)}</div>` : ""}${inlineFormat(item.text)}`;
    row.appendChild(bubble);
    return row;
  }

  function tsDivider(label) {
    const d = document.createElement("div");
    d.className = "timestamp-divider";
    d.innerHTML = `<span>${escapeHtml(label)}</span>`;
    return d;
  }

  function newMsgMarker() {
    const d = document.createElement("div");
    d.className = "new-msg-marker";
    d.innerHTML = "<span>NEW MESSAGE</span>";
    return d;
  }

  function showChoices(choices) {
    const area = document.getElementById("choices-area");
    const btns = document.getElementById("choice-btns");
    area.style.display = "flex";
    btns.innerHTML = "";
    choices.forEach((choice, index) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = choice.text;
      btn.onclick = () => choose(choice, index);
      btns.appendChild(btn);
    });
    requestAnimationFrame(() => {
      const mc = document.getElementById("messages-container");
      mc.scrollTop = mc.scrollHeight;
    });
  }

  function hideChoices() {
    document.getElementById("choices-area").style.display = "none";
    document.getElementById("choice-btns").innerHTML = "";
  }

  function showBanner(contact, msg) {
    bannerContact = contact;
    const c = chars[contact];
    const av = document.getElementById("notif-av");
    av.className = `notif-avatar ${c.av}`;
    av.textContent = c.initials;
    document.getElementById("notif-name").textContent = c.name;
    document.getElementById("notif-msg").textContent = msg;
    const el = document.getElementById("notif-banner");
    el.classList.remove("hide");
    el.onclick = null;
    setTimeout(() => {
      el.classList.add("show");
      el.onclick = () => {
        openChat(bannerContact);
        dismissBanner();
      };
    }, 50);
    if (bannerTimer) clearTimeout(bannerTimer);
    bannerTimer = setTimeout(() => dismissBanner(), 5000);
  }

  function dismissBanner(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const el = document.getElementById("notif-banner");
    el.classList.remove("show");
    el.classList.add("hide");
    if (bannerTimer) clearTimeout(bannerTimer);
  }

  function addClue(id) {
    if (!id || state.clueIds.has(id)) return;
    state.clueIds.add(id);
    const text = clueCatalog[id] || "A useful investigative detail was added to your case notes.";
    const label = `Clue #${state.clues.length + 1}`;
    state.clues.push({ id, label, text });
    document.getElementById("notes-empty").style.display = "none";
    const card = document.createElement("div");
    card.className = "clue-card";
    card.innerHTML = `<div class="clue-label">${escapeHtml(label)}</div><div class="clue-text">${inlineFormat(text)}</div>`;
    document.getElementById("casenotes-panel").appendChild(card);
    showToast();
  }

  function showToast() {
    const t = document.getElementById("toast");
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2200);
  }

  function applySceneEffects(sceneId, choice) {
    state.flags[`visited_${sceneId}`] = true;
    if (choice) {
      state.flags[`choice_${sceneId}_${choice.type}`] = true;
      if (choice.type === "productive") {
        addClue(sceneClues[choice.next] || sceneClues[sceneId]);
      }
    }
    const suspicion = sceneSuspicion[sceneId];
    if (suspicion) {
      Object.entries(suspicion).forEach(([key, value]) => {
        state.suspicion[key] = (state.suspicion[key] || 0) + value;
      });
    }
    if (sceneClues[sceneId]) addClue(sceneClues[sceneId]);
  }

  async function choose(choice) {
    const contact = pendingContact || currentChat || "river";
    const sceneId = pendingSceneId;
    hideChoices();
    pendingChoices = [];
    pendingContact = null;
    pendingSceneId = null;
    addHistory(contact, {
      kind: "message",
      speaker: "player",
      text: choice.text,
    });
    if (choice.type === "productive") addClue(choice.clueId || sceneClues[choice.next]);
    const next = routeEnding(sceneId, choice.next, choice.text);
    if (next) {
      await sleep(450);
      playScene(next, choice);
    } else if (contact === "casey") {
      setTimeout(triggerRiverMessage, 900);
    }
  }

  async function playScene(sceneId, incomingChoice = null) {
    if (sceneId === "Final-Accusation") {
      showFinalAccusation();
      return;
    }
    if (sceneId === "Final-Method") {
      showMethodSelection();
      return;
    }
    if (sceneId === "Final-Motive") {
      showMotiveSelection();
      return;
    }
    if (sceneId && sceneId.startsWith("Ending-")) {
      showEnding(sceneId);
      return;
    }
    const scene = scenes[sceneId];
    if (!scene) {
      addHistory("river", {
        kind: "message",
        speaker: "system",
        text: `Missing scene: ${sceneId}`,
      });
      openChat("river");
      return;
    }
    state.path.push(sceneId);
    applySceneEffects(sceneId, incomingChoice);
    const contact = contactForSpeaker(scene.contact, "river");
    unlockContact(contact);
    setGameMode("CHAT_MODE");
    openChat(contact);
    for (const msg of scene.messages) {
      const speaker = msg.speaker || "system";
      await addTypedHistory(contact, {
        kind: "message",
        speaker,
        label: msg.label,
        text: msg.text.replace(/\{player_name\}|\{Name\}/g, playerName),
        code: Boolean(msg.code),
      });
    }
    if (scene.choices && scene.choices.length) {
      pendingContact = contact;
      pendingSceneId = sceneId;
      pendingChoices = scene.choices.map((choice) => normalizeChoice(sceneId, choice));
      showChoices(pendingChoices);
    } else {
      pendingContact = null;
      pendingSceneId = null;
      pendingChoices = [];
      hideChoices();
    }
  }

  function normalizeChoice(sceneId, choice) {
    return {
      ...choice,
      text: choice.text.replace(/\{player_name\}|\{Name\}/g, playerName),
      type: choice.type || (choice.clue ? "productive" : "neutral"),
    };
  }

  function showFinalAccusation() {
    setGameMode("FINAL_ACCUSATION_MODE");
    state.path.push("Final-Accusation");
    const suspectKeys = ["jordan", "alex", "sam", "dmitri", "blackwell", "river"];
    document.getElementById("deduction-kicker").textContent = "Final Accusation";
    document.getElementById("deduction-title").textContent = "Who killed Casey Morgan?";
    document.getElementById("deduction-subtitle").textContent =
      "Choose one suspect. This is no longer a conversation; this is your formal theory of the case.";
    document.getElementById("deduction-content").innerHTML = `
      <div class="suspect-grid">
        ${suspectKeys
          .map((key) => {
            const c = chars[key];
            return `<button class="suspect-card" data-suspect="${key}">
              <div class="suspect-card-top">
                <div class="avatar ${c.av}" style="width:42px;height:42px;font-size:13px;">${c.initials}</div>
                <div>
                  <div class="suspect-name">${escapeHtml(c.name)}</div>
                  <div class="suspect-role">${escapeHtml(c.role)}</div>
                </div>
              </div>
              <div class="suspect-role">${escapeHtml(c.relationship)}</div>
            </button>`;
          })
          .join("")}
      </div>`;
    document.querySelectorAll(".suspect-card").forEach((card) => {
      card.addEventListener("click", async () => {
        document.querySelectorAll(".suspect-card").forEach((el) => el.classList.remove("selected"));
        card.classList.add("selected");
        state.finalSuspect = card.dataset.suspect;
        await sleep(450);
        showMethodSelection();
      });
    });
  }

  function showMethodSelection() {
    setGameMode("METHOD_SELECTION_MODE");
    state.path.push("Final-Method");
    const methodChoices = scenes["Final-Method"].choices;
    document.getElementById("deduction-kicker").textContent = "Method";
    document.getElementById("deduction-title").textContent = "How was Casey's death staged?";
    document.getElementById("deduction-subtitle").textContent =
      "Select the mechanism that best explains the physical death and the digital cover-up.";
    renderDeductionOptions(methodChoices, async (choice, index) => {
      const lower = choice.text.toLowerCase();
      if (lower.includes("poisoned casey's insulin")) state.finalMethod = "complete";
      else if (lower.includes("cannot prove the insulin path")) state.finalMethod = "partial";
      else state.finalMethod = "wrong";
      await sleep(450);
      showMotiveSelection();
    });
  }

  function showMotiveSelection() {
    setGameMode("MOTIVE_SELECTION_MODE");
    state.path.push("Final-Motive");
    const motiveChoices = scenes["Final-Motive"].choices;
    document.getElementById("deduction-kicker").textContent = "Motive";
    document.getElementById("deduction-title").textContent = "Why was Casey killed?";
    document.getElementById("deduction-subtitle").textContent =
      "Tie the accusation to motive. A correct suspect with a weak theory may still collapse.";
    renderDeductionOptions(motiveChoices, async (choice, index) => {
      const lower = choice.text.toLowerCase();
      if (lower.includes("project_blackbox")) state.finalMotive = "complete";
      else if (lower.includes("hated casey")) state.finalMotive = "partial";
      else state.finalMotive = "wrong";
      await sleep(450);
      showEnding(evaluateStructuredEnding());
    });
  }

  function renderDeductionOptions(choices, onSelect) {
    document.getElementById("deduction-content").innerHTML = `
      <div class="deduction-options">
        ${choices
          .map(
            (choice, index) => `<button class="deduction-option" data-index="${index}">
              <div class="option-title">Option ${index + 1}</div>
              <div class="option-body">${inlineFormat(choice.text)}</div>
            </button>`,
          )
          .join("")}
      </div>`;
    document.querySelectorAll(".deduction-option").forEach((option) => {
      option.addEventListener("click", () => {
        document.querySelectorAll(".deduction-option").forEach((el) => el.classList.remove("selected"));
        option.classList.add("selected");
        onSelect(choices[Number(option.dataset.index)], Number(option.dataset.index));
      });
    });
  }

  function evaluateStructuredEnding() {
    if (state.finalSuspect !== "alex") return "Ending-Cold-Case";
    if (state.finalMethod === "wrong" || state.finalMotive === "wrong") return "Ending-Cold-Case";
    if (state.finalMethod === "partial" || state.finalMotive === "partial") return "Ending-Lucky-Guess";
    return evaluateEnding();
  }

  async function showEnding(endingId) {
    setGameMode("ENDING_MODE");
    state.path.push(endingId);
    const scene = scenes[endingId];
    const titleMap = {
      "Ending-Full-Solve": "FULL SOLVE",
      "Ending-Lucky-Guess": "LUCKY GUESS",
      "Ending-Cold-Case": "COLD CASE",
    };
    document.getElementById("ending-title").textContent = titleMap[endingId] || "ENDING";
    const body = document.getElementById("ending-body");
    body.innerHTML = "";
    document.getElementById("ending-overlay").classList.add("show");
    const paragraphs = (scene?.messages || []).map((m) => m.text).filter(Boolean);
    for (const text of paragraphs) {
      const p = document.createElement("p");
      p.innerHTML = inlineFormat(text);
      body.appendChild(p);
      await sleep(260);
      p.classList.add("visible");
    }
  }

  function routeEnding(sceneId, next, text) {
    if (sceneId === "Final-Accusation") {
      state.finalSuspect = detectSuspect(text);
      return state.finalSuspect === "alex" ? "Final-Method" : "Ending-Cold-Case";
    }
    if (sceneId === "Final-Method") {
      state.finalMethod = text.toLowerCase().includes("poisoned casey's insulin")
        ? "complete"
        : "partial";
      if (state.finalMethod !== "complete") return "Ending-Lucky-Guess";
      return "Final-Motive";
    }
    if (sceneId === "Final-Motive") {
      if (!text.toLowerCase().includes("project_blackbox")) return "Ending-Lucky-Guess";
      return evaluateEnding();
    }
    return next;
  }

  function detectSuspect(text) {
    const lower = text.toLowerCase();
    if (lower.includes("alex")) return "alex";
    if (lower.includes("j.r") || lower.includes("reeves")) return "jordan";
    if (lower.includes("sam")) return "sam";
    if (lower.includes("river")) return "river";
    if (lower.includes("dmitri")) return "dmitri";
    if (lower.includes("blackwell")) return "blackwell";
    return "unknown";
  }

  function evaluateEnding() {
    const required = [
      "I3_override",
      "I8_packet",
      "I10_adapter",
      "I12_insulin",
      "J6_payload",
      "K2_author",
      "K3_poison",
    ];
    const foundRequired = required.filter((id) => state.clueIds.has(id)).length;
    return foundRequired >= 5 && state.clues.length >= 10
      ? "Ending-Full-Solve"
      : "Ending-Lucky-Guess";
  }

  function loadIntroHistory() {
    addHistory("casey", { kind: "divider", label: "November 17, 2025" });
    addHistory("casey", {
      kind: "message",
      speaker: "player",
      text:
        "hi, i'm the one on Stack Overflow who asked about the neural net question last week...\njust wanted some elaboration if you have time",
      faded: true,
    });
    addHistory("casey", {
      kind: "message",
      speaker: "casey",
      text:
        "...did you read the documentation?\nit's literally explained there.\nbottomline: you normalize the inputs before the activation function. don't overcomplicate.",
      faded: true,
    });
    addHistory("casey", {
      kind: "message",
      speaker: "player",
      text: "ah okay thanks, really appreciate it",
      faded: true,
    });

    addHistory("river", { kind: "divider", label: "January 5, 2026" });
    [
      ["river", "I Got Into Neuro!"],
      ["player", "Congrats! That's Awesome."],
      ["river", "Thanks! I heard our lead architect went to MIT, name's Casey. That sound familiar?"],
      ["player", "Morgan?"],
      ["river", "Yep Casey Morgan. Have you guys worked together at MIT?"],
      [
        "player",
        "Oh yeah, seen him around campus. He was in the same department. We exchanged a few messages once about some code.",
      ],
      ["river", "Coool. He's my mentor, man's a genius."],
      ["player", "Glad you got to work with him, congrats once again!"],
      ["river", `Thanks ${playerName}, wish you were here. We should hang soon!`],
      ["player", "Bet! Lets catch up soonn"],
    ].forEach(([speaker, text]) => {
      addHistory("river", { kind: "message", speaker, text, faded: true });
    });
  }

  function triggerCaseyMessage() {
    addHistory("casey", { kind: "marker" });
    addHistory("casey", { kind: "divider", label: todayLong });
    addHistory("casey", {
      kind: "message",
      speaker: "casey",
      text:
        "If you're reading this...\nI'm gone.\nDon't try to fix anything yourself. Just trust no one, and check the legacy branch if you can.",
    });
    showBanner("casey", "If you're reading this...");
    state.unread.add("casey");
    renderChatList();
    pendingContact = "casey";
    pendingChoices = [
      {
        text: "Casey? What happened?",
        next: null,
        type: "neutral",
      },
      {
        text: "Screenshot the message and check the timestamp.",
        next: null,
        type: "productive",
        clueId: "A_casey_timestamp",
      },
    ];
    if (currentChat === "casey") renderChat("casey");
  }

  function triggerRiverMessage() {
    addHistory("river", { kind: "marker" });
    addHistory("river", { kind: "divider", label: todayLong });
    addHistory("river", {
      kind: "message",
      speaker: "river",
      text: `${playerName}, Casey is gone.`,
    });
    showBanner("river", `${playerName}, Casey is gone.`);
    state.unread.add("river");
    renderChatList();
    pendingContact = "river";
    pendingChoices = [
      {
        text: "What? What do you mean gone?",
        next: "B1",
        type: "neutral",
      },
      {
        text: "I just got a message from Casey. What is happening?",
        next: "B2",
        type: "productive",
      },
    ];
    if (currentChat === "river") renderChat("river");
  }

  function resetGameState() {
    state.clues = [];
    state.clueIds = new Set();
    state.flags = {};
    state.path = [];
    state.finalSuspect = null;
    state.finalMethod = null;
    state.finalMotive = null;
    state.typingByContact = {};
    state.unread = new Set();
    Object.keys(state.suspicion).forEach((key) => {
      state.suspicion[key] = 0;
    });
    state.histories = {};
    state.unlocked = new Set(["casey", "river"]);
    document.querySelectorAll(".clue-card").forEach((el) => el.remove());
    document.getElementById("notes-empty").style.display = "block";
    document.getElementById("ending-overlay").classList.remove("show");
    document.getElementById("deduction-content").innerHTML = "";
    currentMode = "CHAT_MODE";
  }

  function goToName() {
    document.getElementById("splash").classList.add("hidden");
    document.getElementById("namescreen").classList.remove("hidden");
    setTimeout(() => document.getElementById("nameInput").focus(), 400);
  }

  function startGame() {
    const value = document.getElementById("nameInput").value.trim();
    if (!value) {
      document.getElementById("nameInput").focus();
      return;
    }
    playerName = value;
    resetGameState();
    document.getElementById("namescreen").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    renderAllChars();
    renderChatList();
    loadIntroHistory();
    renderChatList();
    setTimeout(triggerCaseyMessage, 900);
  }

  function restartGame() {
    resetGameState();
    playerName = "You";
    currentChat = null;
    pendingChoices = [];
    pendingContact = null;
    pendingSceneId = null;
    document.getElementById("nameInput").value = "";
    document.getElementById("app").classList.add("hidden");
    document.getElementById("splash").classList.add("hidden");
    document.getElementById("namescreen").classList.remove("hidden");
    document.getElementById("empty-state").style.display = "flex";
    document.getElementById("chat-view").style.display = "none";
    document.getElementById("deduction-view").style.display = "none";
    document.getElementById("messages-container").innerHTML = "";
    renderChatList();
    setTimeout(() => document.getElementById("nameInput").focus(), 250);
  }

  function switchLeftTab(tab) {
    document.getElementById("tab-chats").classList.toggle("active", tab === "chats");
    document.getElementById("tab-notes").classList.toggle("active", tab === "notes");
    document.getElementById("chatlist").style.display = tab === "chats" ? "block" : "none";
    document.getElementById("casenotes-panel").style.display =
      tab === "notes" ? "flex" : "none";
  }

  function openProfile(event, contact) {
    event.stopPropagation();
    showProfile(contact);
  }

  function openProfileFromChat() {
    if (currentChat) showProfile(currentChat);
  }

  function showProfile(contact) {
    const c = chars[contact];
    document.getElementById("profile-card-inner").innerHTML = `
      <div class="card-avatar-lg ${c.av}">${c.initials}</div>
      <div class="card-name">${escapeHtml(c.name)}</div>
      <div class="card-role-text">${escapeHtml(c.role)}</div>
      <div class="card-divider"></div>
      <div class="card-row"><div class="card-row-label">Relationship to you</div><div class="card-row-value">${escapeHtml(c.relationship)}</div></div>
      <div class="card-row"><div class="card-row-label">Personality</div><div class="card-row-value">${escapeHtml(c.personality)}</div></div>
      <div class="card-row"><div class="card-row-label">Background</div><div class="card-row-value">${escapeHtml(c.background)}</div></div>`;
    document.getElementById("profile-card").classList.add("open");
    document.getElementById("profile-overlay").classList.add("show");
  }

  function closeProfileCard() {
    document.getElementById("profile-card").classList.remove("open");
    document.getElementById("profile-overlay").classList.remove("show");
  }

  function renderAllChars() {
    const list = document.getElementById("chars-list-inner");
    list.innerHTML = "";
    const player = document.createElement("div");
    player.className = "char-card";
    player.innerHTML = `
      <div class="char-avatar" style="background:#1e2535;color:#8899bb;width:46px;height:46px;font-size:14px;">YO</div>
      <div class="char-info">
        <div class="char-name-row">${escapeHtml(playerName)} <span class="char-tag tag-player">YOU</span></div>
        <div class="char-role">Junior Developer . MIT Graduate</div>
        <div class="char-desc">A junior dev with a brief online interaction with Casey Morgan. You were not supposed to be involved, but Casey's scheduled farewell message changed everything.</div>
      </div>`;
    list.appendChild(player);
    contactOrder.forEach((key) => {
      const ch = chars[key];
      const tagClass = ch.tag === "victim" ? "tag-victim" : "tag-suspect";
      const tagText = ch.tag === "victim" ? "VICTIM" : "SUSPECT";
      const card = document.createElement("div");
      card.className = "char-card";
      card.innerHTML = `
        <div class="char-avatar ${ch.av}" style="width:46px;height:46px;font-size:14px;">${ch.initials}</div>
        <div class="char-info">
          <div class="char-name-row">${escapeHtml(ch.name)} <span class="char-tag ${tagClass}">${tagText}</span></div>
          <div class="char-role">${escapeHtml(ch.role)}</div>
          <div class="char-desc">${escapeHtml(ch.background)}</div>
        </div>`;
      list.appendChild(card);
    });
  }

  function openAllChars() {
    renderAllChars();
    document.getElementById("allchars-panel").classList.add("open");
    document.getElementById("allchars-overlay").classList.add("show");
  }

  function closeAllChars() {
    document.getElementById("allchars-panel").classList.remove("open");
    document.getElementById("allchars-overlay").classList.remove("show");
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nameInput").addEventListener("keydown", (event) => {
      if (event.key === "Enter") startGame();
    });
  });

  window.goToName = goToName;
  window.startGame = startGame;
  window.switchLeftTab = switchLeftTab;
  window.openChat = openChat;
  window.openProfile = openProfile;
  window.openProfileFromChat = openProfileFromChat;
  window.closeProfileCard = closeProfileCard;
  window.openAllChars = openAllChars;
  window.closeAllChars = closeAllChars;
  window.dismissBanner = dismissBanner;
  window.restartGame = restartGame;
  window.UNREAD_DEBUG = { state, scenes, playScene, addClue };
})();
