/* ==================================================================
   金魚鉢
   1. 衣桁：触れて開く（ホバーの効かない端末でも同じ操作感に）
   2. 注文の紙：文面を組み立てて、コピー／メール／電話に渡す
   ================================================================== */

/* ---- 1. 衣桁 --------------------------------------------------- */
(function () {
  document.querySelectorAll('.tanmono-dana').forEach(function (dana) {
    var maki = dana.querySelectorAll('button.tanmono');
    maki.forEach(function (m) {
      m.addEventListener('click', function () {
        var hiraku = m.getAttribute('aria-expanded') !== 'true';
        maki.forEach(function (x) { x.setAttribute('aria-expanded', 'false'); });
        m.setAttribute('aria-expanded', hiraku ? 'true' : 'false');
      });
    });
  });
})();

/* ---- 2. 注文の紙 ----------------------------------------------- */
(function () {
  var kami = document.querySelector('[data-kami]');
  if (!kami) return;

  var shina  = document.querySelector('.shina');
  var hiraku = document.querySelector('[data-chumon]');
  var tojiru = kami.querySelector('[data-tojiru]');
  var fumiRan = kami.querySelector('[data-fumi]');
  var utsusu = kami.querySelector('[data-utsusu]');
  var mailA  = kami.querySelector('[data-mail]');

  var na   = kami.querySelector('[data-na]');
  var saki = kami.querySelector('[data-saki]');
  var toi  = kami.querySelector('[data-toi]');

  var modoruSaki = null;

  function bunmen() {
    var shinamei = shina ? shina.dataset.shina : '';
    var ne = shina ? shina.dataset.ne : '';
    var gyo = [
      '金魚鉢 ご注文',
      '',
      '品名：' + shinamei,
      '価格：' + ne,
      'URL：' + location.href,
      '',
      'お名前：' + (na.value || '（未記入）'),
      'ご連絡先：' + (saki.value || '（未記入）')
    ];
    if (toi.value.trim() !== '') {
      gyo.push('', 'ご質問・ご要望：', toi.value.trim());
    }
    return gyo.join('\n');
  }

  function kakinaosu() {
    fumiRan.textContent = bunmen();
    if (mailA) {
      mailA.href = 'mailto:' + mailA.dataset.atesaki +
        '?subject=' + encodeURIComponent('【ご注文】' + (shina ? shina.dataset.shina : '')) +
        '&body=' + encodeURIComponent(bunmen());
    }
  }

  [na, saki, toi].forEach(function (r) {
    if (r) r.addEventListener('input', kakinaosu);
  });

  function aku() {
    modoruSaki = document.activeElement;
    kami.hidden = false;
    document.body.style.overflow = 'hidden';
    kakinaosu();
    if (na) na.focus();
  }
  function shimeru() {
    kami.hidden = true;
    document.body.style.overflow = '';
    if (modoruSaki) modoruSaki.focus();
  }

  if (hiraku) hiraku.addEventListener('click', aku);
  if (tojiru) tojiru.addEventListener('click', shimeru);
  kami.addEventListener('click', function (e) { if (e.target === kami) shimeru(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !kami.hidden) shimeru();
  });

  if (utsusu) {
    utsusu.addEventListener('click', function () {
      var moto = utsusu.textContent;
      function owari(ji) {
        utsusu.textContent = ji;
        setTimeout(function () { utsusu.textContent = moto; }, 2200);
      }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(bunmen())
          .then(function () { owari('うつしました'); })
          .catch(function () { owari('うつせませんでした'); });
      } else {
        var t = document.createElement('textarea');
        t.value = bunmen();
        t.style.position = 'fixed'; t.style.opacity = '0';
        document.body.appendChild(t); t.select();
        try { document.execCommand('copy'); owari('うつしました'); }
        catch (e) { owari('うつせませんでした'); }
        document.body.removeChild(t);
      }
    });
  }
})();
