---
layout: page
title: 買いかた
latin: HOW TO BUY
permalink: /info/
lead: 羽織ってみていただけないぶん、書けることは全部書きます。読んでも分からないことは、お電話でお答えします。
---

<div class="shirase">
  <dl class="kojou">
    <div><dt>送料</dt><dd>{{ site.shop.soryo }}</dd></div>
    <div><dt>発送</dt><dd>{{ site.shop.hasso }}</dd></div>
    <div><dt>返品</dt><dd>{{ site.shop.henpin }}</dd></div>
    <div><dt>お問い合わせ</dt><dd><a href="tel:{{ site.shop.tel | replace: '-', '' }}">{{ site.shop.tel }}</a></dd></div>
    <div><dt>受付時間</dt><dd>{{ site.shop.hours }}<br><span style="font-size:.85em;opacity:.75;">{{ site.shop.hours_note }}</span></dd></div>
    {% if site.shop.mail != "" %}<div><dt>メール</dt><dd><a href="mailto:{{ site.shop.mail }}">{{ site.shop.mail }}</a></dd></div>{% endif %}
  </dl>

  <div class="izanai">
    <p>店舗はありません。<br>そのぶん、写真も寸法も、聞かれたことは<br>全部お答えします。</p>
    {% if site.shop.shop_url != "" %}
    <a class="fumi" href="{{ site.shop.shop_url }}" rel="noopener">{% if site.shop.shop_name != "" %}{{ site.shop.shop_name }}で買う{% else %}お買いもの{% endif %}</a>
    {% else %}
    <a class="fumi" href="tel:{{ site.shop.tel | replace: '-', '' }}">{{ site.shop.tel }}</a>
    {% endif %}
  </div>
</div>

<div class="kugiri">
  <span class="kugiri__ji">買う前に、寸法を<small>SIZE</small></span>
</div>

<div class="maegaki" markdown="1">

古いきものは、今の人の身体に合わないことがあります。**返品の理由でいちばん多いのが寸法です。**そうならないように、買う前に二つだけ測ってください。

**身丈（みたけ）** — 肩から裾まで。**自分の身長と同じくらい**あれば着られます。五センチ低いくらいまでは、おはしょりを短くして何とかなります。十センチ低いと苦しい。

**裄（ゆき）** — 首の後ろの出っぱった骨から、手首のぐりぐりまで。腕を斜め45度に上げて測ります。こちらは**ごまかしが利きません。**二センチ足りないだけで手首が出ます。

一覧に並んでいる一枚ごとに、この二つを書いてあります。お手持ちのきものがあれば、それを平らに置いて測って、数字を見比べるのがいちばん確実です。

</div>

<div class="kugiri">
  <span class="kugiri__ji">状態のこと<small>CONDITION</small></span>
</div>

<div class="maegaki" markdown="1">

扱っているのは、七十年から百年前に織られたきものです。**新品ではありません。**シミ、ヤケ、擦れ、ほつれ——大なり小なり、必ずどこかにあります。

見つけたものは、隠さず状態の欄に書いています。書いていないものが見つかることもあります。古いものなので、そこは正直に申し上げます。

だからこそ、**気になる箇所は買う前に聞いてください。**衿の内側でも、袖口でも、裏地でも、写真を撮ってお送りします。手間ではありません。買ったあとで「思っていたのと違う」となるほうが、お互いに残念です。

</div>

<div class="kugiri">
  <span class="kugiri__ji">返品について<small>RETURNS</small></span>
</div>

<div class="maegaki" markdown="1">

{{ site.shop.henpin }}

理由は聞きません。実物を見ずに買っていただいている以上、それが筋だと思っています。

袖を通してみて、違うと感じたら送り返してください。次の方にお渡しします。

</div>

<div class="izanai">
  <p>分からないことは、何でも聞いてください。</p>
  <a class="fumi" href="tel:{{ site.shop.tel | replace: '-', '' }}">{{ site.shop.tel }}　{{ site.shop.hours }}</a>
</div>
