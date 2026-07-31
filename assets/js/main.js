/* 反物：タップで開き、もう一度タップで閉じる。
   ホバーの効かない端末でも同じ操作感になるように。 */
(function () {
  var tana = document.querySelectorAll('.tanmono-dana');

  tana.forEach(function (dana) {
    var maki = dana.querySelectorAll('.tanmono');

    maki.forEach(function (m) {
      m.addEventListener('click', function () {
        var hiraku = m.getAttribute('aria-expanded') !== 'true';
        maki.forEach(function (x) { x.setAttribute('aria-expanded', 'false'); });
        m.setAttribute('aria-expanded', hiraku ? 'true' : 'false');
      });
    });
  });
})();
