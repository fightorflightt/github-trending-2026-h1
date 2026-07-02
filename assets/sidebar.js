// Shared sidebar component for all lessons
// Generates left navigation + top-right repo link

const LESSONS = [
  { num: "01", name: "OpenClaw",        file: "0001-openclaw.html",        group: "AI 智能体 & 编程", repo: "https://github.com/openclaw/openclaw" },
  { num: "02", name: "Hermes Agent",    file: "0002-hermes-agent.html",    group: "AI 智能体 & 编程", repo: "https://github.com/NousResearch/hermes-agent" },
  { num: "03", name: "Claude Code",     file: "0003-claude-code.html",     group: "AI 智能体 & 编程", repo: "https://github.com/anthropics/claude-code" },
  { num: "04", name: "Skills 生态",     file: "0004-skills-ecosystem.html",group: "AI 智能体 & 编程", repo: "https://github.com/anthropics/skills" },
  { num: "08", name: "opencode",        file: "0008-opencode.html",        group: "AI 智能体 & 编程", repo: "https://github.com/anomalyco/opencode" },
  { num: "09", name: "superpowers",     file: "0009-superpowers.html",     group: "AI 智能体 & 编程", repo: "https://github.com/obra/superpowers" },
  { num: "05", name: "Open WebUI",      file: "0005-open-webui.html",     group: "本地 AI & 底层引擎", repo: "https://github.com/open-webui/open-webui" },
  { num: "06", name: "llama.cpp",       file: "0006-llamacpp.html",       group: "本地 AI & 底层引擎", repo: "https://github.com/ggml-org/llama.cpp" },
  { num: "12", name: "Odysseus",        file: "0012-odysseus.html",        group: "本地 AI & 底层引擎", repo: "https://github.com/pewdiepie-archdaemon/odysseus" },
  { num: "07", name: "ponytail",        file: "0007-ponytail.html",        group: "设计 & 效率工具", repo: "https://github.com/DietrichGebert/ponytail" },
  { num: "11", name: "Open Design",     file: "0011-open-design.html",     group: "设计 & 效率工具", repo: "https://github.com/nexu-io/open-design" },
  { num: "13", name: "screenshot→code", file: "0013-screenshot-to-code.html",group: "设计 & 效率工具", repo: "https://github.com/abi/screenshot-to-code" },
  { num: "16", name: "Stirling-PDF",    file: "0016-stirling-pdf.html",    group: "设计 & 效率工具", repo: "https://github.com/Stirling-Tools/Stirling-PDF" },
  { num: "17", name: "markitdown",      file: "0017-markitdown.html",      group: "设计 & 效率工具", repo: "https://github.com/microsoft/markitdown" },
  { num: "10", name: "nanochat",        file: "0010-nanochat.html",        group: "无代码 & 独立开发利器", repo: "https://github.com/karpathy/nanochat" },
  { num: "14", name: "n8n",             file: "0014-n8n.html",             group: "无代码 & 独立开发利器", repo: "https://github.com/n8n-io/n8n" },
  { num: "15", name: "Dify",            file: "0015-dify.html",            group: "无代码 & 独立开发利器", repo: "https://github.com/langgenius/dify" },
  { num: "18", name: "NocoDB",          file: "0018-nocodb.html",          group: "无代码 & 独立开发利器", repo: "https://github.com/nocodb/nocodb" },
  { num: "19", name: "PocketBase",      file: "0019-pocketbase.html",      group: "无代码 & 独立开发利器", repo: "https://github.com/pocketbase/pocketbase" },
  { num: "20", name: "MiroFish",          file: "0020-mirofish.html",          group: "前沿探索", repo: "https://github.com/666ghj/MiroFish" },
  { num: "21", name: "Learn Claude Code",  file: "0021-learn-claude-code.html",  group: "AI 智能体 & 编程", repo: "https://github.com/shareAI-lab/learn-claude-code" },
];

function buildSidebar(currentFile) {
  const groups = {};
  LESSONS.forEach(l => {
    if (!groups[l.group]) groups[l.group] = [];
    groups[l.group].push(l);
  });

  let html = '<div class="sidebar-header"><h3>📚 2026 H1 热门项目</h3><div class="sub">共 21 节课</div></div>';

  for (const [group, lessons] of Object.entries(groups)) {
    html += `<div class="sidebar-section">${group}</div><ul class="sidebar-list">`;
    lessons.forEach(l => {
      const active = currentFile === l.file ? ' class="active"' : '';
      html += `<li><a href="${l.file}"${active}><span class="num">${l.num}</span><span class="name">${l.name}</span></a></li>`;
    });
    html += '</ul>';
  }

  html += '<div class="sidebar-footer"><a href="../reference/glossary.html">📖 词汇表</a></div>';

  return html;
}

function buildRepoLink(currentFile) {
  const lesson = LESSONS.find(l => l.file === currentFile);
  if (!lesson) return '';
  return `<a href="${lesson.repo}" target="_blank" class="repo-link">🔗 原仓库</a>`;
}

function init() {
  const path = window.location.pathname;
  const currentFile = path.substring(path.lastIndexOf('/') + 1);

  // Build sidebar
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.innerHTML = buildSidebar(currentFile);
  }

  // Build repo link in top-right
  const repoLink = document.getElementById('repo-link');
  if (repoLink) {
    repoLink.outerHTML = buildRepoLink(currentFile);
  }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
