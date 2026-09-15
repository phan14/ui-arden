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

  var factoryDepartments = [
    { id:'dept-cad', title:'Phòng Phát Triển Mẫu & Rập CAD', capacity:'15 - 20 bộ rập mới / ngày', description:'Đội ngũ kỹ thuật rập trên 10 năm kinh nghiệm biến mọi ý tưởng phác thảo thành bộ rập vi tính chuẩn xác đến từng milimet.', equipment:['Phần mềm nhảy size Gerber & Lectra','Máy in sơ đồ phun khổ lớn 1m8','Bàn số hóa rập mẫu tự động'] },
    { id:'dept-cutting', title:'Phân Xưởng Trải & Cắt Vải Tự Động', capacity:'3.000 - 5.000 bán thành phẩm / ngày', description:'Tất cả cây vải đều được xả nghỉ đạt độ ổn định cấu trúc sợi trước khi cắt nhằm chống vặn sườn và lệch canh sợi khi may.', equipment:['Bàn trải vải tự động ray trượt','Máy cắt vòng đứng công suất lớn','Máy xả vải nghỉ 24h khử độ co rút'] },
    { id:'dept-sewing', title:'Dây Chuyền May Juki Chuyên Dụng', capacity:'2.500 sản phẩm hoàn thiện / ngày', description:'Chuyền may được chuyên môn hóa theo từng dòng sản phẩm: chuyền áo thun, chuyền sơ mi, chuyền quần kaki và chuyền áo khoác.', equipment:['Máy 1 kim điện tử Juki DDL-9000C','Máy vắt sổ Siruba 4 chỉ, 5 chỉ','Máy Kansai viền cổ & máy cào bọ gia cố'] },
    { id:'dept-qc', title:'Khu Vực QC, Ủi Hơi & Đóng Gói Thành Phẩm', capacity:'100% sản phẩm được rà kim & FQC', description:'Kiểm tra 100% đường may, độ sạch chỉ, thông số đo kích thước và độ phẳng trước khi đóng thùng carton bàn giao.', equipment:['Máy dò kim loại Hashima điện tử','Hệ thống bàn ủi hơi nồi hơi tự động Silver Star','Máy đóng gói túi zip & niêm phong thùng'] }
  ];
  function normalizeFactoryText(value) { return (value || '').trim().toLocaleLowerCase('vi'); }
  function installFactoryController(section) {
    if (!section || section.dataset.ardenFactoryReady === 'true') return;
    var headings = Array.from(section.querySelectorAll('h3, h4'));
    var cards = [];
    factoryDepartments.forEach(function (department) {
      var heading = headings.find(function (item) {
        return normalizeFactoryText(item.textContent) === normalizeFactoryText(department.title) && item.closest('.col.large-3');
      });
      var card = heading && heading.closest('.col-inner');
      if (!card) return;
      card.dataset.factoryDepartment = department.id;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-pressed', 'false');
      cards.push(card);
    });
    if (cards.length !== factoryDepartments.length) return;
    var detailHeading = headings.find(function (item) { return !item.closest('.col.large-3') && factoryDepartments.some(function (department) { return normalizeFactoryText(item.textContent) === normalizeFactoryText(department.title); }); });
    var detail = detailHeading && detailHeading.closest('.row, .col-inner');
    if (!detail) return;
    var detailParagraphs = Array.from(detail.querySelectorAll('p'));
    var capacity = detailParagraphs.find(function (item) { return normalizeFactoryText(item.textContent).indexOf('công suất:') === 0 || normalizeFactoryText(item.textContent).indexOf('đang xem:') === 0; });
    var description = detailParagraphs.find(function (item) { return factoryDepartments.some(function (department) { return normalizeFactoryText(item.textContent) === normalizeFactoryText(department.description); }); });
    var equipment = Array.from(detail.querySelectorAll('li, p')).filter(function (item) { return factoryDepartments.some(function (department) { return department.equipment.some(function (value) { return normalizeFactoryText(item.textContent) === normalizeFactoryText(value); }); }); });
    if (!capacity || !description || equipment.length < 3) return;
    function select(department) {
      cards.forEach(function (card) { var active = card.dataset.factoryDepartment === department.id; card.classList.toggle('is-active', active); card.setAttribute('aria-pressed', active ? 'true' : 'false'); });
      detailHeading.textContent = department.title;
      capacity.textContent = (normalizeFactoryText(capacity.textContent).indexOf('đang xem:') === 0 ? 'ĐANG XEM: ' + department.title : 'Công suất: ' + department.capacity);
      description.textContent = department.description;
      equipment.slice(0, 3).forEach(function (item, index) { item.textContent = department.equipment[index]; addIcon(item, 'check', 'before', 'arden-semantic-icon--check arden-icon-size-14'); });
    }
    cards.forEach(function (card) {
      function activate() { var department = factoryDepartments.find(function (item) { return item.id === card.dataset.factoryDepartment; }); if (department) select(department); }
      card.addEventListener('click', activate);
      card.addEventListener('keydown', function (event) { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); } });
    });
    section.dataset.ardenFactoryReady = 'true';
    select(factoryDepartments[0]);
  }
  function installServiceModelController(root) {
    if (!root || root.dataset.ardenModelReady === 'true') return;
    var heading = Array.from(root.querySelectorAll('h2')).find(function (item) { return (item.textContent || '').toLocaleLowerCase('vi').indexOf('lựa chọn mô hình gia công') !== -1; });
    var section = heading && heading.closest('.section');
    var detailHeading = section && Array.from(section.querySelectorAll('h3')).find(function (item) { return (item.textContent || '').indexOf('ODM:') !== -1; });
    var panel = detailHeading && detailHeading.closest('.col-inner');
    if (!section || !panel) return;
    var description = Array.from(panel.querySelectorAll('p')).find(function (item) { return (item.textContent || '').trim().length > 100; });
    var benefitMarkers = ['chuỗi cung ứng', 'kỹ thuật may mặc', 'tối ưu giá thành', 'hợp đồng nda'];
    var benefits = benefitMarkers.map(function (marker) { return Array.from(panel.querySelectorAll('li, p')).find(function (item) { return normalizeFactoryText(item.textContent).indexOf(marker) !== -1; }); }).filter(Boolean);
    if (!description || benefits.length !== 4) return;
    var models = {
      odm:{title:'MÔ HÌNH ODM: SẢN XUẤT TRỌN GÓI TỪ Ý TƯỞNG',description:'Bạn chỉ cần cung cấp hình ảnh ý tưởng, phác thảo hoặc mẫu tương tự. Arden sẽ phụ trách 100% công đoạn còn lại: tìm nguồn vải chuẩn pantone, ra rập vi tính CAD, may mẫu, in/thêu, hoàn thiện nhãn mác và đóng gói hoàn chỉnh.',benefits:['Tiết kiệm 80% thời gian quản lý chuỗi cung ứng','Không cần am hiểu sâu về kỹ thuật may mặc','Được xưởng cố vấn chất liệu tối ưu giá thành','Bảo mật thiết kế tuyệt đối bằng hợp đồng NDA']},
      oem:{title:'MÔ HÌNH OEM: GIA CÔNG THEO RẬP & TECHPACK CỦA BRAND',description:'Brand đã có sẵn bộ rập vi tính, bảng thông số kích thước và bản vẽ kỹ thuật chi tiết. Arden tập trung tối đa vào độ chính xác của đường may, kiểm soát chất lượng FQC và tiến độ xuất xưởng hàng loạt.',benefits:['Chính xác 100% theo thông số rập của thương hiệu','Tối ưu chi phí sản xuất ở mức cao nhất','Năng lực đáp ứng các đơn hàng số lượng lớn','Bảo đảm tiến độ giao hàng theo lịch launching']}
    };
    var controls = document.createElement('div'); controls.className = 'arden-model-controls'; controls.setAttribute('role','tablist'); controls.setAttribute('aria-label','Mô hình gia công');
    [['odm','GIA CÔNG TRỌN GÓI ODM (A - Z)'],['oem','GIA CÔNG THEO RẬP CÓ SẴN OEM']].forEach(function (option) { var button=document.createElement('button'); button.type='button'; button.dataset.serviceModel=option[0]; button.setAttribute('role','tab'); button.textContent=option[1]; controls.appendChild(button); });
    panel.parentElement.parentElement.insertBefore(controls, panel.parentElement);
    function select(id) { var model=models[id]; controls.querySelectorAll('button').forEach(function(button){var active=button.dataset.serviceModel===id;button.classList.toggle('is-active',active);button.setAttribute('aria-selected',active?'true':'false');});detailHeading.textContent=model.title;description.textContent=model.description;benefits.forEach(function(item,index){item.textContent=model.benefits[index];addIcon(item,'check','before','arden-semantic-icon--check arden-icon-size-14');}); }
    controls.addEventListener('click',function(event){var button=event.target.closest('[data-service-model]');if(button)select(button.dataset.serviceModel);});
    root.dataset.ardenModelReady='true'; select('odm');
  }
  function renderFactory(section) {
    if (!section) return;
    Array.from(section.querySelectorAll('h3')).slice(-4).forEach(function (heading) { addIcon(heading.closest('.col-inner'), 'arrow-right', 'after', 'arden-semantic-icon--overlay arden-icon-size-12'); });
    section.querySelectorAll('li').forEach(function (item) { addIcon(item, 'check', 'before', 'arden-semantic-icon--check arden-icon-size-14'); });
    addIcon(section.querySelector('a.button'), 'arrow-right', 'after', 'arden-icon-size-16');
    installFactoryController(section);
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
  installServiceModelController(document.querySelector('.arden-react-page--services'));
  var fabricPage=document.querySelector('.arden-react-page--fabricguide'); if(fabricPage)renderReactPage(fabricPage);
  var manufacturingPage=document.querySelector('.arden-react-page--manufacturing');
  if(manufacturingPage){
    var manufacturingFactoryHeading=Array.from(manufacturingPage.querySelectorAll('h2')).find(function(heading){return normalizeFactoryText(heading.textContent).indexOf('cơ sở vật chất & máy móc')===0;});
    var manufacturingFactory=manufacturingFactoryHeading&&manufacturingFactoryHeading.closest('.section');
    if(manufacturingFactory){manufacturingFactory.classList.add('arden-icon-role-factory');renderFactory(manufacturingFactory);}
  }
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
        var category = card.getAttribute(cardAttribute) || card.className || '';
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

  /* UX Builder flattens each capability item into three sibling text blocks.
     Re-form the six source cards so their number, heading and copy keep the
     same layout at every breakpoint while each field remains editable. */
  var manufacturingCapabilities = document.querySelector('.arden-react-page--manufacturing > .section:nth-child(4) .row.grid > .col:last-child > .col-inner');
  if (manufacturingCapabilities && !manufacturingCapabilities.querySelector('.arden-capability-item')) {
    Array.from(manufacturingCapabilities.querySelectorAll(':scope > .text:has(h3)')).forEach(function (headingBlock) {
      var numberBlock = headingBlock.previousElementSibling;
      var copyBlock = headingBlock.nextElementSibling;
      if (!numberBlock || !copyBlock || !numberBlock.matches('.text') || !copyBlock.matches('.text')) return;
      var card = document.createElement('div');
      card.className = 'arden-capability-item';
      manufacturingCapabilities.insertBefore(card, numberBlock);
      card.appendChild(numberBlock);
      card.appendChild(headingBlock);
      card.appendChild(copyBlock);
    });
  }
});
