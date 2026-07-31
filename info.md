---
layout: page
title: 店のこと
latin: THE SHOP
permalink: /info/
lead: 大きな通りから一本入った、蔵造りの店です。看板が小さいので、どうぞ迷わずお電話ください。
---

<div class="shirase">
  <dl class="kojou">
    <div><dt>店名</dt><dd>{{ site.title }}</dd></div>
    <div><dt>創業</dt><dd>{{ site.shop.established }}</dd></div>
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

反物の販売のほか、お仕立て、寸法直し、洗い張り、しみ抜きを承ります。他店でお求めのきものでもかまいません。

たんすに眠っているきものを持ち込んでいただければ、着られる状態かどうか、直すならどのくらいかかるか、その場で見立てます。見立てだけなら無料です。

</div>

<div class="izanai">
  <p>ご予約は要りません。定休日だけご確認のうえ、どうぞ。</p>
  <a class="fumi" href="tel:{{ site.shop.tel | replace: '-', '' }}">電話でたずねる</a>
</div>
