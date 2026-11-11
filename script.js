/* JOKISURIK WEBSITE - interaksi menu, formulir, dan kontak */
(function () {
  'use strict';
  const cfg = window.JOKISURIK || {};
  const waNumber = String(cfg.whatsapp || '6282286750339').replace(/\D/g, '');
  const businessName = cfg.namaBisnis || 'JokiSurik Website';
  const email = cfg.email || 'jokisurik@gmail.com';
  const github = cfg.github || 'https://github.com/sarimarlina';
  const safeWa = waNumber.length >= 10 && waNumber.length <= 15 ? waNumber : '6282286750339';
  const waLink = (message) => `https://wa.me/${safeWa}?text=${encodeURIComponent(message)}`;
  const setLink = (id, href, label) => {
    const node = document.getElementById(id);
    if (!node) return;
    node.setAttribute('href', href);
    if (label) node.textContent = label;
  };
  const formatWa = (num) => num.startsWith('62') ? '0' + num.slice(2) : num;
  const greeting = `Halo ${businessName}, saya ingin konsultasi mengenai layanan Anda.`;
  setLink('floating-wa', waLink(greeting));
  setLink('footer-whatsapp', waLink(greeting));
  setLink('contact-wa-text', waLink(greeting), formatWa(safeWa));
  setLink('contact-email', `mailto:${email}`, email);
  setLink('footer-email', `mailto:${email}`);
  setLink('github-link', github);
  document.querySelectorAll('[data-business-name]').forEach(el => el.textContent = businessName);
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  // Navigasi HP
  const toggle = document.getElementById('menu-toggle');
  const mobile = document.getElementById('mobile-menu');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Buka menu navigasi' : 'Tutup menu navigasi');
      mobile.hidden = open;
    });
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Buka menu navigasi');
      mobile.hidden = true;
    }));
  }

  // Tombol kartu layanan: pilih layanan & pindah ke formulir.
  document.querySelectorAll('[data-service]').forEach(btn => {
    btn.addEventListener('click', () => {
      const select = document.getElementById('client-service');
      if (select) select.value = btn.getAttribute('data-service') || '';
      document.getElementById('konsultasi')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Formulir bersifat statis: tidak mengirim atau menyimpan data di server.
  const form = document.getElementById('lead-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const nama = document.getElementById('client-name').value.trim();
    const usaha = document.getElementById('client-business').value.trim();
    const layanan = document.getElementById('client-service').value;
    const pesan = document.getElementById('client-description').value.trim();
    const status = document.getElementById('form-status');
    if (!nama || !layanan || !pesan) {
      if (status) status.textContent = 'Lengkapi nama, layanan, dan kebutuhan terlebih dahulu.';
      return;
    }
    const text = [
      `Halo ${businessName}, saya ingin konsultasi.`,
      '',
      `Nama: ${nama}`,
      ...(usaha ? [`Usaha: ${usaha}`] : []),
      `Layanan: ${layanan}`,
      `Kebutuhan: ${pesan}`,
      '',
      'Mohon informasi dan penawaran lebih lanjut. Terima kasih.'
    ].join('\n');
    if (status) status.textContent = 'WhatsApp akan dibuka. Periksa pesan sebelum mengirimnya.';
    // Tindakan akhir dilakukan pengunjung di WhatsApp.
    window.location.href = waLink(text);
  });

  // Analytics opsional: hanya dijalankan apabila pemilik mengisi ID.
  const analyticsId = String(cfg.googleAnalyticsId || '').trim();
  const adsId = String(cfg.googleAdsId || '').trim();
  const validId = id => /^(G-[A-Z0-9]+|AW-\d+)$/.test(id);
  const ids = [...new Set([analyticsId, adsId].filter(validId))];
  if (ids.length) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    ids.forEach(id => window.gtag('config', id));
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ids[0])}`;
    document.head.appendChild(script);
  }
  // Catatan: konversi Google Ads sebaiknya dicatat setelah pengunjung benar-benar
  // menghubungi, bukan sekadar setelah formulir memunculkan WhatsApp.
})();
