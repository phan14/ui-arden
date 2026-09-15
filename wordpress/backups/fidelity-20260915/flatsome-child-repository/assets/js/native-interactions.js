document.addEventListener('DOMContentLoaded', function () {
  /* Render exact Lucide vectors from the PHP-owned registry. This keeps UX
     Builder content editable while avoiding icon-font/emoji approximations. */
  var iconPaths = window.ardenIconPaths || {};
  function createArdenIcon(name, extraClass) {
    if (!iconPaths[name]) return null;
    var wrapper = document.createElement('span');
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    wrapper.className = 'arden-icon arden-semantic-icon' + (extraClass ? ' ' + extraClass : '');
    wrapper.setAttribute('aria-hidden', 'true');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    if (name === 'star') svg.setAttribute('fill', 'currentColor');
    svg.innerHTML = iconPaths[name];
    wrapper.appendChild(svg);
    return wrapper;
  }
  function addIcon(target, name, position, extraClass) {
    if (!target || !iconPaths[name] || target.querySelector(':scope > .arden-semantic-icon[data-arden-icon="' + name + '"]')) return;
    target.querySelectorAll(':scope > .arden-semantic-icon').forEach(function (oldIcon) { oldIcon.remove(); });
    var icon = createArdenIcon(name, extraClass);
    if (!icon) return;
    icon.dataset.ardenIcon = name;
    if (position === 'after') target.appendChild(icon);
    else target.insertBefore(icon, target.firstChild);
  }
  function replaceIconSlot(target, name) {
    if (!target) return;
    var slot = target.querySelector('.icon-inner') || target.querySelector('.icon-box-img');
    if (!slot) return;
    slot.textContent = '';
    slot.classList.add('arden-icon-slot');
    addIcon(slot, name);
  }

  function appendUniqueIcon(target, name, extraClass) {
    if (!target || target.querySelector(':scope > [data-arden-icon="' + name + '"]')) return;
    var icon = createArdenIcon(name, extraClass); if (!icon) return;
    icon.dataset.ardenIcon = name; target.appendChild(icon);
  }
  function renderDeclaredMarkers(root) {
    if (!root) return;
    root.querySelectorAll('[data-arden-card-icon]').forEach(function (heading) {
      var target = heading.closest('.icon-box') || heading.closest('.col-inner') || heading.parentElement;
      addIcon(target, heading.dataset.ardenCardIcon, 'before', 'arden-semantic-icon--card arden-icon-size-20');
    });
    root.querySelectorAll('[class*="arden-icon-before-"], [class*="arden-icon-after-"]').forEach(function (target) {
      var marker = Array.from(target.classList).find(function (name) { return /^arden-icon-(before|after)-[a-z-]+-(12|14|16|20)$/.test(name); });
      if (!marker) return; var parts = marker.match(/^arden-icon-(before|after)-(.+)-(12|14|16|20)$/);
      addIcon(target, parts[2], parts[1], 'arden-icon-size-' + parts[3]);
    });
    root.querySelectorAll('[data-arden-testimonial-author]').forEach(function (author) {
      var card = author.closest('.col-inner') || author.parentElement; if (!card || card.querySelector(':scope > .arden-icon-stars')) return;
      var stars = document.createElement('p'); stars.className = 'arden-icon-stars';
      for (var i = 0; i < 5; i += 1) { var star = createArdenIcon('star', 'arden-semantic-icon--star arden-icon-size-16'); star.dataset.ardenIcon='star'; stars.appendChild(star); }
      card.insertBefore(stars, card.firstChild);
    });
  }
  function renderCta(section) {
    if (!section) return;
    addIcon(section.querySelector('.arden-eyebrow, p:first-of-type'), 'sparkles', 'before', 'arden-icon-size-14');
    addIcon(section.querySelector('a.arden-button--accent, a.bg-amber-400, a.bg-amber-500, a.button:not(.arden-button--light)'), 'arrow-right', 'after', 'arden-icon-size-16');
    addIcon(section.querySelector('a.arden-button--light, a.bg-white'), 'phone-call', 'before', 'arden-icon-size-16');
  }
  function renderBanner(section) {
    if (!section) return;
    addIcon(section.querySelector('nav a, ol a, ul a'), 'house', 'before', 'arden-icon-size-14');
    addIcon(section.querySelector('nav li:last-child, ol li:last-child, ul li:last-child'), 'chevron-right', 'before', 'arden-icon-size-14');
    addIcon(section.querySelector('.arden-eyebrow, .tracking-widest, .tracking-wide, p:first-of-type'), 'sparkles', 'before', 'arden-icon-size-14');
  }
  function renderFactory(section) {
    if (!section) return;
    Array.from(section.querySelectorAll('h3')).slice(-4).forEach(function (heading) { addIcon(heading.closest('.col-inner'), 'arrow-right', 'after', 'arden-semantic-icon--overlay arden-icon-size-12'); });
    section.querySelectorAll('li').forEach(function (item) { addIcon(item, 'check', 'before', 'arden-semantic-icon--check arden-icon-size-14'); });
    addIcon(section.querySelector('a.button'), 'arrow-right', 'after', 'arden-icon-size-16');
  }
  function renderHome(home) {
    var hero=home.querySelector('.arden-hero'); addIcon(hero&&hero.querySelector('.arden-eyebrow'),'sparkles','before','arden-icon-size-14');
    var heroIcons=['circle-check','shield-check','award']; hero&&hero.querySelectorAll('.arden-feature-badges .col-inner').forEach(function(card,i){addIcon(card,heroIcons[i],'before','arden-semantic-icon--feature arden-icon-size-16');});
    if(hero){var buttons=hero.querySelectorAll('a.button');addIcon(buttons[0],'arrow-right','after','arden-icon-size-16');addIcon(buttons[1],'chevron-right','after','arden-icon-size-16');addIcon(hero.querySelector('.arden-hero__caption, figcaption'),'sparkles','before','arden-icon-size-16');}
    var services=home.querySelector('.arden-services'); services&&services.querySelectorAll('li').forEach(function(item){addIcon(item,'check','before','arden-semantic-icon--check arden-icon-size-14');}); services&&services.querySelectorAll('a.button').forEach(function(button,i){addIcon(button,i===0?'arrow-right':'chevron-right','after','arden-icon-size-'+(i===0?'16':'14'));});
    var products=home.querySelector('.arden-products'); products&&products.querySelectorAll('.arden-icon-product-meta').forEach(function(meta){addIcon(meta,'layers','before','arden-icon-size-14');if(meta.classList.contains('arden-icon-product-meta--with-clock'))appendUniqueIcon(meta,'clock','arden-icon-size-14');}); addIcon(products&&products.querySelector('a.button'),'arrow-right','after','arden-icon-size-16');
    renderFactory(home.querySelector('.arden-factory')); addIcon(home.querySelector('.arden-capabilities a.button'),'arrow-right','after','arden-icon-size-16');
    var moq=home.querySelector('.arden-moq'); moq&&moq.querySelectorAll('li').forEach(function(item){addIcon(item,'check','before','arden-semantic-icon--check arden-icon-size-16');}); moq&&Array.from(moq.querySelectorAll('a.button')).slice(0,3).forEach(function(button){addIcon(button,'arrow-right','after','arden-icon-size-16');}); addIcon(moq&&moq.querySelector('.arden-moq__guarantee, .arden-moq__note'),'shield-check','before','arden-icon-size-20');
    addIcon(home.querySelector('.arden-portfolio > .section-content > .row:first-child a.button'),'arrow-right','after','arden-icon-size-16'); addIcon(home.querySelector('.arden-blog > .section-content > .row:first-child a.button'),'arrow-right','after','arden-icon-size-16');
    var why=['shield-check','zap','award','dollar-sign','heart-handshake','circle-check']; home.querySelectorAll('.arden-why-choose .icon-box, .arden-why-choose .col-inner').forEach(function(card,i){if(i<why.length)addIcon(card,why[i],'before','arden-semantic-icon--card arden-icon-size-20');});
    home.querySelectorAll('.arden-faq .accordion-title').forEach(function(title){addIcon(title,'circle-question-mark','before','arden-icon-size-16');var toggle=title.querySelector('.toggle');if(toggle){toggle.textContent='';addIcon(toggle,'chevron-down','before','arden-icon-size-16');}});
    renderDeclaredMarkers(home); renderCta(home.querySelector('.arden-cta'));
  }
  function renderReactPage(root) {
    renderDeclaredMarkers(root); renderBanner(root.querySelector('.arden-icon-role-banner')); renderCta(root.querySelector('.arden-icon-role-cta'));
    var story=root.querySelector('.arden-icon-role-story'); story&&story.querySelectorAll('h3').forEach(function(heading){addIcon(heading.parentElement,'check','before','arden-semantic-icon--check arden-icon-size-16');}); addIcon(story&&story.querySelector('a.button'),'arrow-right','after','arden-icon-size-16');
    var factory=root.querySelector('.arden-icon-role-factory'); renderFactory(factory); if(factory){Array.from(factory.querySelectorAll('p')).slice(-3).forEach(function(item){addIcon(item,'check','before','arden-semantic-icon--check arden-icon-size-14');});} var gsm=root.querySelector('.arden-icon-role-gsm'); addIcon(gsm&&gsm.querySelector('.col-inner'),'info','before','arden-icon-size-16');
    var field=root.querySelector('.arden-icon-role-fabric-grid input[type="search"], .arden-icon-role-fabric-grid input[type="text"]'); if(field){field.parentElement.classList.add('arden-search-control');addIcon(field.parentElement,'search','before','arden-icon-size-20');}
    root.querySelectorAll('.arden-icon-role-fabric-grid .col-inner').forEach(function(card){var paragraphs=card.querySelectorAll(':scope > .text > p');if(paragraphs.length===14)Array.from(paragraphs).slice(9,12).forEach(function(item){addIcon(item,'circle-check','before','arden-semantic-icon--check arden-icon-size-14');});});
  }
  var home=document.body.classList.contains('home')?document.querySelector('main'):null; if(home)renderHome(home);
  var about=document.querySelector('.arden-react-page--about'); if(about)renderReactPage(about);
  var fabricPage=document.querySelector('.arden-react-page--fabricguide'); if(fabricPage)renderReactPage(fabricPage);
  /* Match React's immediate browser validation while retaining CF7 server validation. */
  document.querySelectorAll('.wpcf7 [aria-required="true"]').forEach(function (field) {
    field.required = true;
  });

  var searchTabs = Array.from(document.querySelectorAll('[data-search-type]'));
  if (searchTabs.length) {
    var searchResults = Array.from(document.querySelectorAll('[data-result-type]'));
    searchTabs.forEach(function (tab) {
      tab.addEventListener('click', function (event) {
        event.preventDefault();
        var type = tab.getAttribute('data-search-type') || 'all';
        searchTabs.forEach(function (item) {
          var active = item === tab;
          item.setAttribute('aria-selected', active ? 'true' : 'false');
          item.classList.toggle('active', active);
          item.classList.toggle('is-active', active);
        });
        searchResults.forEach(function (result) {
          result.hidden = type !== 'all' && result.getAttribute('data-result-type') !== type;
        });
      });
    });
  }

  function installFilter(buttonSelector, buttonAttribute, cardSelector, cardAttribute, inputSelector) {
    var buttons = Array.from(document.querySelectorAll(buttonSelector));
    var cards = Array.from(document.querySelectorAll(cardSelector));
    var input = inputSelector ? document.querySelector(inputSelector) : null;
    if (!buttons.length || !cards.length) return;
    var filter = 'all';
    function applyFilter() {
      var query = input ? input.value.trim().toLocaleLowerCase('vi') : '';
      cards.forEach(function (card) {
        var category = card.getAttribute(cardAttribute) || '';
        card.hidden = (filter !== 'all' && category.indexOf(filter) === -1) || (query && card.textContent.toLocaleLowerCase('vi').indexOf(query) === -1);
      });
    }
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        filter = button.getAttribute(buttonAttribute) || 'all';
        buttons.forEach(function (item) { var active = item === button; item.classList.toggle('is-active', active); item.setAttribute('aria-selected', active ? 'true' : 'false'); });
        applyFilter();
      });
    });
    buttons.forEach(function (button, index) {
      button.setAttribute('tabindex', index === 0 ? '0' : '-1');
      button.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
        event.preventDefault();
        var offset = event.key === 'ArrowRight' ? 1 : -1;
        buttons[(index + offset + buttons.length) % buttons.length].focus();
      });
    });
    if (input) input.addEventListener('input', applyFilter);
  }
  installFilter('[data-project-filter]', 'data-project-filter', '[data-project-category]', 'data-project-category');
  installFilter('[data-news-filter]', 'data-news-filter', '[data-news-card]', 'data-news-category', '.arden-news-search input');

  /* Preserve native Flatsome controls while restoring the visible React heading semantics. */
  document.querySelectorAll('.arden-faq__accordion .accordion-title, .arden-careers-accordion .accordion-title').forEach(function (title) {
    if (title.querySelector('h3')) return;
    var heading = document.createElement('h3');
    heading.className = 'arden-native-control-heading';
    Array.from(title.childNodes).forEach(function (node) {
      if (node.nodeType === 1 && node.classList && node.classList.contains('toggle')) return;
      heading.appendChild(node);
    });
    title.appendChild(heading);
  });

  document.querySelectorAll('body.page-id-83 .arden-fabric-tabs [role="tab"]').forEach(function (tab) {
    if (tab.querySelector('h3')) return;
    var heading = document.createElement('h3');
    heading.className = 'arden-native-control-heading';
    while (tab.firstChild) heading.appendChild(tab.firstChild);
    tab.appendChild(heading);
  });
  var input = document.querySelector('.arden-react-page--fabricguide input[type="search"], .arden-react-page--fabricguide input[type="text"]');
  var fabric = input && input.closest('.section');

  if (fabric) {
    var buttons = Array.from(fabric.querySelectorAll('a.button')).slice(0, 5);
    var cards = Array.from(fabric.querySelectorAll('.col-inner')).filter(function (card) {
      return card.querySelector('h3');
    });
    var empty = document.createElement('p');
    var category = '';
    var categoryLabels = ['', 'Ã¡o thun', 'Ã¡o sÆ¡ mi', 'Ã¡o khoÃ¡c', 'quáº§n'];

    empty.className = 'arden-fabric-empty';
    empty.setAttribute('role', 'status');
    empty.hidden = true;
    empty.textContent = 'KhÃ´ng tÃ¬m tháº¥y cháº¥t liá»‡u phÃ¹ há»£p.';
    fabric.appendChild(empty);

    function apply() {
      var query = (input.value || '').trim().toLocaleLowerCase('vi');
      var visible = 0;

      cards.forEach(function (card) {
        var text = card.textContent.toLocaleLowerCase('vi');
        var categoryMatch = !category || text.indexOf(category) !== -1;
        var matches = categoryMatch && (!query || text.indexOf(query) !== -1);
        card.hidden = !matches;
        if (matches) visible += 1;
      });

      empty.hidden = visible !== 0;
    }

    buttons.forEach(function (button, index) {
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      button.addEventListener('click', function (event) {
        event.preventDefault();
        category = categoryLabels[index];
        buttons.forEach(function (item) {
          item.setAttribute('aria-selected', item === button ? 'true' : 'false');
        });
        apply();
      });
    });

    input.addEventListener('input', apply);
    apply();
  }

  var policyTabs = document.querySelector('.arden-policy-tabs');
  if (policyTabs) {
    var policyIds = ['chung', 'chinh-sach-bao-mat', 'chinh-sach-thanh-toan', 'chinh-sach-doi-tra', 'chinh-sach-van-chuyen'];
    var policyLinks = Array.from(policyTabs.querySelectorAll('[role="tab"]'));
    var policyPanels = Array.from(policyTabs.querySelectorAll('[role="tabpanel"]'));

    policyIds.forEach(function (id, index) {
      var link = policyLinks[index];
      var panel = policyPanels[index];
      if (!link || !panel) return;
      panel.id = id;
      link.setAttribute('href', '#' + id);
      link.setAttribute('aria-controls', id);
    });

    var requestedPolicyId = window.location.hash.slice(1);
    var requestedPolicyIndex = policyIds.indexOf(requestedPolicyId);
    if (requestedPolicyIndex !== -1) {
      policyLinks.forEach(function (link, index) {
        var active = index === requestedPolicyIndex;
        link.setAttribute('aria-selected', active ? 'true' : 'false');
        link.setAttribute('tabindex', active ? '0' : '-1');
        link.parentElement.classList.toggle('active', active);
      });
      policyPanels.forEach(function (panel, index) {
        panel.classList.toggle('active', index === requestedPolicyIndex);
      });
    }
  }

  document.querySelectorAll('.arden-special-element--form form button[type="button"]').forEach(function (button) {
    button.setAttribute('aria-pressed', button.classList.contains('bg-blue-900') ? 'true' : 'false');
    button.addEventListener('click', function () {
      var active = button.getAttribute('aria-pressed') === 'true';
      button.setAttribute('aria-pressed', active ? 'false' : 'true');
      button.classList.toggle('bg-blue-900', !active);
      button.classList.toggle('text-white', !active);
    });
  });
});
