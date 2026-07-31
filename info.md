---
layout: page
title: 店のこと
latin: THE SHOP
permalink: /info/
lead: 看板が小さいので、迷ったらお電話ください。すぐ出ます。
---

<div class="shirase">
  <dl class="kojou">
    <div><dt>店名</dt><dd>{{ site.title }}</dd></div>
    {% if site.shop.established != "" %}<div><dt>開店</dt><dd>{{ site.shop.established }}</dd></div>{% endif %}
    <div><dt>所在地</dt><dd>{{ site.shop.address }}</dd></div>
    <div><dt>電話</dt><dd><a href="tel:{{ site.shop.tel | replace: '-', '' }}">{{ site.shop.tel }}</a></dd></div>
    <div><dt>営業時間</dt><dd>{{ site.shop.hours }}</dd></div>
    <div><dt>定休日</dt><dd>{{ site.shop.closed }}</dd></div>
    <div><dt>駐車場</dt><dd>{{ site.shop.parking }}</dd></div>
    <div><dt>アクセス</dt><dd>{{ site.shop.access }}</dd></div>
  </dl>

  <iframe
    class="chizu"
    src="https://maps.google.com/maps?q={{ site.shop.map_query | url_encode }}&output=embed"
    title="{{ site.title }}の地図"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<div class="kugiri">
  <span class="kugiri__ji">承っていること<small>SERVICES</small></span>
</div>

<div class="maegaki" markdown="1">

扱っているのは、大正から昭和にかけて織られたきものです。すべて一点物で、状態を確かめ、手入れをしてから店に出しています。

**試着** — 気になる一枚は羽織ってみてください。古いきものは寸法が小さいので、数字だけで決めると失敗します。

**寸法直し** — 身丈や裄が足りないとき、縫い代が残っていれば出せることがあります。その場で見て、できるかどうかお答えします。

**買取・引き取り** — たんすに眠っているきものがあれば、お持ちください。値がつくもの、つかないもの、正直にお伝えします。〈※このお店で買取をされていない場合は、この段落ごと消してください〉

</div>

<div class="izanai">
  <p>ご予約は要りません。定休日だけご確認のうえ、どうぞ。</p>
  <a class="fumi" href="tel:{{ site.shop.tel | replace: '-', '' }}">電話でたずねる</a>
</div>
