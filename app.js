'use strict';
(() => {
  const data = globalThis.PARAXANTHINE_DATA;
  const byId = id => document.getElementById(id);
  let sortKey = 'company';
  let sortDirection = 1;
  const labels = ['Supplier', 'Specification', 'MOQ / packaging', 'Documentation', 'Restrictions', 'Source'];
  const node = (tag, text, className) => {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    if (className) element.className = className;
    return element;
  };
  const safeUrl = raw => {
    try { const url = new URL(raw); return url.protocol === 'https:' && !url.username && !url.password ? url.href : null; } catch { return null; }
  };
  const stat = (label, value, className = '') => {
    const element = node('span', undefined, `stat ${className}`);
    element.append(node('strong', String(value)), document.createTextNode(` ${label}`));
    byId('stats').append(element);
  };
  stat('suppliers in China', data.suppliers.length, 'china');
  stat('public COA / result examples', data.suppliers.filter(s => s.has_coa).length);
  stat('research / non-consumption restrictions', data.suppliers.filter(s => s.restriction_tags.includes('research')).length);
  stat('independently verified batches', data.independent_batch_tests);
  const searchable = supplier => [supplier.company, supplier.location, supplier.purity, supplier.grade, supplier.moq, supplier.documentation, supplier.restriction, supplier.caveat].join(' ').toLowerCase();
  function matches(supplier) {
    const query = byId('search').value.toLowerCase().trim();
    return (!query || searchable(supplier).includes(query))
      && (byId('evidence').value === 'all' || supplier.source_type === byId('evidence').value)
      && (byId('restriction').value === 'all' || supplier.restriction_tags.includes(byId('restriction').value))
      && (!byId('documents').checked || supplier.has_coa === true);
  }
  function supplierRow(supplier) {
    const row = node('tr', undefined, 'china');
    row.dataset.supplier = supplier.id;
    const cells = labels.map(label => {
      const cell = node('td'); cell.dataset.label = label;
      const inner = node('div'); cell.append(inner); row.append(cell); return inner;
    });
    cells[0].append(node('span', supplier.company, 'company'), node('span', supplier.location, 'location'));
    cells[1].append(node('span', 'Supplier claim', 'badge'), node('p', supplier.purity, 'cell-copy'));
    const grade = node('details'); grade.append(node('summary', 'Grade claim'), node('p', supplier.grade)); cells[1].append(grade);
    cells[2].append(node('p', supplier.moq));
    cells[3].append(node('span', supplier.document_status, 'badge'), node('p', supplier.documentation, 'cell-copy'));
    if (supplier.warning) cells[3].append(node('p', supplier.warning, 'cell-copy small warning'));
    if (supplier.restriction_tags.includes('research')) cells[4].append(node('span', 'Research / non-consumption', 'badge research'));
    cells[4].append(node('p', supplier.restriction));
    const limits = node('details'); limits.append(node('summary', 'Evidence limits'), node('p', supplier.caveat)); cells[4].append(limits);
    cells[5].append(node('p', supplier.source_type === 'marketplace' ? 'Supplier-posted listing' : 'Supplier website', 'source-provenance'));
    supplier.sources.forEach(source => {
      const url = safeUrl(source.url);
      if (!url) return;
      const link = node('a', source.label, 'source-link'); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; cells[5].append(link);
    });
    return row;
  }
  function render() {
    const filtered = data.suppliers.filter(matches).sort((a,b) => String(a[sortKey] || '').localeCompare(String(b[sortKey] || ''), 'en') * sortDirection);
    byId('rows').replaceChildren(...filtered.map(supplierRow));
    byId('count').textContent = `${filtered.length} / ${data.suppliers.length} suppliers`;
    byId('empty').hidden = filtered.length > 0;
  }
  ['search', 'evidence', 'restriction', 'documents'].forEach(id => byId(id).addEventListener(id === 'search' ? 'input' : 'change', render));
  byId('reset').addEventListener('click', event => {
    event.preventDefault();
    byId('search').value = ''; byId('evidence').value = 'all'; byId('restriction').value = 'all'; byId('documents').checked = false;
    sortKey = 'company'; sortDirection = 1; byId('sort-mobile').value = 'company'; updateSortHeaders(); render();
  });
  function updateSortHeaders() {
    document.querySelectorAll('th[aria-sort]').forEach(th => th.removeAttribute('aria-sort'));
    document.querySelectorAll('.sort').forEach(button => {
      const selected = button.dataset.sort === sortKey;
      button.querySelector('span').textContent = selected ? (sortDirection === 1 ? '↑' : '↓') : '↕';
      if (selected) button.parentElement.setAttribute('aria-sort', sortDirection === 1 ? 'ascending' : 'descending');
    });
  }
  document.querySelectorAll('.sort').forEach(button => button.addEventListener('click', () => {
    sortDirection = sortKey === button.dataset.sort ? -sortDirection : 1; sortKey = button.dataset.sort;
    byId('sort-mobile').value = ['company', 'location', 'documentation'].includes(sortKey) ? sortKey : '';
    updateSortHeaders(); render();
  }));
  byId('sort-mobile').addEventListener('change', () => {
    sortKey = byId('sort-mobile').value; sortDirection = 1; updateSortHeaders(); render();
  });
  byId('export').addEventListener('click', () => {
    const exportData = {...data, suppliers: data.suppliers.filter(matches)};
    const blob = new Blob([JSON.stringify(exportData, null, 2) + '\n'], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const link = node('a'); link.href = url; link.download = 'paraxanthine-public-reference.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  render();
})();
