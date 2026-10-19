(() => {
  'use strict';
  const papers = Array.isArray(window.PAPERS) ? window.PAPERS : [];
  const filters = document.querySelectorAll('[data-filter]');
  const search = document.getElementById('paper-search');
  const grid = document.getElementById('paper-grid');
  const count = document.getElementById('paper-count');
  const stat = document.getElementById('paper-stat');
  const dialog = document.getElementById('paper-dialog');
  const close = document.getElementById('dialog-close');
  let activeFilter = 'all';

  function normalize(s) { return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g,'d').toLowerCase(); }
  function element(tag, className, text) { const e = document.createElement(tag); if (className) e.className = className; if (text !== undefined) e.textContent = text; return e; }
  function link(url, label) { const e = element('a', '', label); e.href = /^https:\/\//.test(url) ? url : '#library'; e.target = '_blank'; e.rel = 'noopener noreferrer'; return e; }
  function render() {
    const term = normalize(search.value.trim());
    const result = papers.filter(p => (activeFilter === 'all' || p.category === activeFilter) && normalize([p.title,p.short,p.authors,p.description,p.core,p.relevance,p.limitation].join(' ')).includes(term));
    count.textContent = String(result.length).padStart(2, '0');
    stat.textContent = String(papers.length).padStart(2, '0');
    grid.replaceChildren();
    if (!result.length) { grid.append(element('p', 'paper-empty', 'Không tìm thấy tài liệu phù hợp. Hãy thử một từ khóa hoặc bộ lọc khác.')); return; }
    for (const paper of result) {
      const card = element('article', 'paper-card');
      const top = element('div', 'paper-card-top');
      top.append(element('span', 'paper-category', paper.label), element('span', 'paper-year', paper.year));
      const title = element('h3', '', paper.title);
      const cite = element('p', 'paper-cite', paper.authors + ' · ' + paper.year);
      const summary = element('p', 'paper-summary', paper.description);
      const footer = element('div', 'paper-card-footer');
      const btn = element('button', '', 'Xem ghi chú  ↗'); btn.type = 'button'; btn.addEventListener('click', () => openPaper(paper));
      footer.append(btn, link(paper.url, 'Nguồn gốc  ↗'));
      card.append(top, title, cite, summary, footer); grid.append(card);
    }
  }
  function openPaper(p) {
    const fields = {
      'dialog-code': p.id.toUpperCase(),
      'dialog-category': p.label + ' / READING NOTE',
      'dialog-title': p.title,
      'dialog-citation': p.authors + ' · ' + p.year,
      'dialog-core': p.core,
      'dialog-relevance': p.relevance,
      'dialog-limitation': p.limitation,
      'dialog-experiment': p.experiment
    };
    for (const [id, value] of Object.entries(fields)) document.getElementById(id).textContent = value;
    document.getElementById('dialog-link').href = /^https:\/\//.test(p.url) ? p.url : '#library';
    if (dialog.showModal) dialog.showModal(); else dialog.setAttribute('open', '');
  }
  for (const btn of filters) btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    for (const other of filters) { const selected = other === btn; other.classList.toggle('active', selected); other.setAttribute('aria-pressed', String(selected)); }
    render();
  });
  search.addEventListener('input', render);
  close.addEventListener('click', () => dialog.close ? dialog.close() : dialog.removeAttribute('open'));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  render();
})();
