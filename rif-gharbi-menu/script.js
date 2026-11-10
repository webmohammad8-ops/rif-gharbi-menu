/* ==========================================================================
   مطعم وشاورما الريف الغربي — كل المحتوى هنا (أسماء الأصناف والأسعار أمثلة: عدّلها)
   ========================================================================== */
(function () {
  "use strict";

  /* ===== 1) بيانات المطعم ===== */
  const SHOP = {
    name: "مطعم وشاورما الريف الغربي",
    phone: "05X-XXX-XXXX",
    phoneHref: "+970XXXXXXXXX",
    address: "اكتب عنوان المطعم هنا",
    hours: "", // مثال: "يوميًا 10:00 ص — 12:00 م"  (اتركه فارغًا لإخفائه)
  };

  /* ===== 2) الصور (Unsplash المجانية). لاستبدالها: "images/اسم.jpg" ===== */
  const u = (id, w) => "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&w=" + (w || 1200) + "&q=75";
  const IMG = {
    hero: u("1610203551374-0ac8a596fcea", 1800),
    shawarma: u("1562059390-a761a084768e"),
    chicken: u("1518492104633-130d0cc84637"),
    kebab: u("1610203551374-0ac8a596fcea"),
    salad: u("1630820927907-967da76f417f"),
  };

  /* ===== 3) المنيو =====
     item: { name, desc?, price? }  أو  { name, desc?, variants: [{ label, price }] }
     إن لم تضع image للقسم يظهر رمز (emoji) بدلها. */
  const MENU = [
    { id: "shawarma", title: "الشاورما", en: "SHAWARMA", image: IMG.shawarma, emoji: "🌯",
      note: "كل الأنواع على: كماج · شراك · سمون",
      items: [
        { name: "شاورما دجاج", desc: "دجاج متبّل مع ثوم ومخلل وبطاطا.", variants: [{ label: "كماج", price: 14 }, { label: "شراك", price: 12 }, { label: "سمون", price: 16 }] },
        { name: "شاورما لحم", desc: "لحم مشوي على السيخ مع طحينة وبقدونس وبصل.", variants: [{ label: "كماج", price: 18 }, { label: "شراك", price: 16 }, { label: "سمون", price: 20 }] },
        { name: "وجبة شاورما", desc: "ساندويش شاورما + بطاطا + مشروب.", price: 26 },
      ] },
    { id: "arabic", title: "وجبات عربي", en: "ARABIC MEALS", image: IMG.chicken, emoji: "🍽️",
      items: [
        { name: "وجبة عربي دجاج", desc: "دجاج مع أرز وحمص وسلطة وخبز.", price: 35 },
        { name: "وجبة عربي لحم", desc: "لحم مع أرز وحمص وسلطة وخبز.", price: 45 },
        { name: "وجبة مشاوي مشكّلة", desc: "تشكيلة مشاوي مع أرز وسلطات وخبز.", price: 70 },
      ] },
    { id: "grill", title: "دجاج جريل", en: "GRILLED CHICKEN", image: IMG.chicken, emoji: "🍗",
      items: [
        { name: "ربع دجاجة جريل", desc: "مع بطاطا وثوم ومخلل.", price: 18 },
        { name: "نصف دجاجة جريل", desc: "مع بطاطا وثوم ومخلل.", price: 32 },
        { name: "دجاجة كاملة جريل", desc: "مع بطاطا وثوم وسلطة.", price: 60 },
      ] },
    { id: "charcoal", title: "دجاج على الفحم", en: "CHARCOAL CHICKEN", image: IMG.kebab, emoji: "🔥",
      items: [
        { name: "ربع دجاجة على الفحم", desc: "مشوي على الفحم الحقيقي مع ثوم وبطاطا.", price: 20 },
        { name: "نصف دجاجة على الفحم", desc: "مشوي على الفحم الحقيقي مع ثوم وبطاطا.", price: 36 },
        { name: "دجاجة كاملة على الفحم", desc: "مع ثوم وبطاطا وسلطة وخبز.", price: 68 },
      ] },
    { id: "popular", title: "أكلات شعبية", en: "TRADITIONAL DISHES", emoji: "🍲",
      items: [
        { name: "منسف", desc: "لحم مع أرز وجميد ولوز وصنوبر.", price: 40 },
        { name: "مقلوبة", desc: "أرز مع خضار ولحم أو دجاج.", price: 35 },
        { name: "مسخّن", desc: "دجاج مع بصل وسماق على خبز طابون.", price: 35 },
        { name: "مجدّرة", desc: "عدس وأرز مع بصل مقلي.", price: 18 },
      ] },
    { id: "kebab", title: "الكباب", en: "KEBAB", image: IMG.kebab, emoji: "🥩",
      items: [
        { name: "ساندويش كباب", desc: "كباب لحم مع بصل وبقدونس وطحينة.", price: 18 },
        { name: "وجبة كباب", desc: "أسياخ كباب مع أرز وسلطة وخبز.", price: 45 },
        { name: "كباب بالصينية", desc: "كباب مع بطاطا وطماطم مشوية.", price: 55 },
      ] },
    { id: "salads", title: "السلطات", en: "SALADS", image: IMG.salad, emoji: "🥗",
      items: [
        { name: "سلطة عربية", desc: "خيار وبندورة وبقدونس وليمون.", price: 12 },
        { name: "تبّولة", desc: "بقدونس وبرغل وبندورة وليمون.", price: 14 },
        { name: "حمص", desc: "حمص بالطحينة وزيت الزيتون.", price: 12 },
        { name: "متبّل", desc: "باذنجان مشوي بالطحينة.", price: 12 },
      ] },
    { id: "falafel", title: "الفلافل", en: "FALAFEL", emoji: "🧆",
      items: [
        { name: "ساندويش فلافل", desc: "فلافل مقرمشة مع خضار وطحينة.", price: 6 },
        { name: "صحن فلافل", desc: "10 قطع مع حمص وسلطة وخبز.", price: 15 },
        { name: "وجبة فلافل", desc: "ساندويش فلافل + بطاطا + مشروب.", price: 16 },
      ] },
  ];

  /* ==========================================================================
     الكود (لا تحتاج تعدّل ما تحته)
     ========================================================================== */
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const money = (p) => '<span class="price" dir="ltr">' + p + "<small>₪</small></span>";

  function itemHTML(it) {
    if (it.variants) {
      return '<li class="item"><div class="row"><span class="name">' + esc(it.name) + "</span></div>" +
        (it.desc ? '<p class="desc">' + esc(it.desc) + "</p>" : "") +
        '<div class="variants">' + it.variants.map((v) => '<span class="variant">' + esc(v.label) + " <b dir=\"ltr\">" + v.price + "₪</b></span>").join("") + "</div></li>";
    }
    return '<li class="item"><div class="row"><span class="name">' + esc(it.name) + '</span><span class="leader"></span>' + money(it.price) + "</div>" +
      (it.desc ? '<p class="desc">' + esc(it.desc) + "</p>" : "") + "</li>";
  }

  function render() {
    $("#menu").innerHTML = MENU.map((s) =>
      '<section class="section reveal" id="' + s.id + '" aria-labelledby="h-' + s.id + '">' +
      '<div class="cover">' +
      (s.image ? '<img src="' + s.image + '" alt="" loading="lazy">' : "") +
      '<span class="cover-emoji" aria-hidden="true"' + (s.image ? ' hidden' : "") + ">" + s.emoji + "</span>" +
      '<div class="cover-row"><h2 id="h-' + s.id + '">' + esc(s.title) + '</h2><span class="en">' + esc(s.en) + "</span></div></div>" +
      (s.note ? '<p class="note-box">' + esc(s.note) + "</p>" : "") +
      '<ul class="items">' + s.items.map(itemHTML).join("") + "</ul></section>"
    ).join("");

    // إن فشل تحميل صورة قسم نعرض الرمز بدلها
    document.querySelectorAll(".cover img").forEach((img) => {
      img.addEventListener("error", () => {
        img.remove();
      });
    });
    document.querySelectorAll(".cover").forEach((c) => {
      if (!c.querySelector("img")) c.querySelector(".cover-emoji").hidden = false;
    });
    document.querySelectorAll(".cover img").forEach((img) => {
      img.addEventListener("error", () => {
        const em = img.parentElement.querySelector(".cover-emoji");
        if (em) em.hidden = false;
      });
    });

    $("#catsTrack").innerHTML = MENU.map((s) => '<a class="chip" href="#' + s.id + '" data-id="' + s.id + '">' + esc(s.title) + "</a>").join("");
  }

  /* تمييز القسم الحالي في الشريط العلوي */
  function watch() {
    const chips = Array.from(document.querySelectorAll(".chip"));
    const setOn = (id) => {
      chips.forEach((c) => c.classList.toggle("on", c.dataset.id === id));
      const on = chips.find((c) => c.dataset.id === id);
      if (on) on.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    };
    if (!("IntersectionObserver" in window)) return setOn(MENU[0].id);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setOn(e.target.id); }),
      { rootMargin: "-25% 0px -65% 0px" }
    );
    MENU.forEach((s) => io.observe(document.getElementById(s.id)));
    setOn(MENU[0].id);
  }

  function init() {
    document.title = SHOP.name + " | المنيو";
    $("#heroImg").src = IMG.hero;
    $("#callFab").href = "tel:" + SHOP.phoneHref;
    $("#footInfo").innerHTML =
      "<li>📍 " + esc(SHOP.address) + "</li>" +
      '<li><a href="tel:' + SHOP.phoneHref + '" dir="ltr">📞 ' + esc(SHOP.phone) + "</a></li>" +
      (SHOP.hours ? "<li>🕒 " + esc(SHOP.hours) + "</li>" : "");
    render();
    watch();
  }
  document.addEventListener("DOMContentLoaded", init);
})();
