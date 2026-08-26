document.addEventListener('DOMContentLoaded', function () {
  var input = document.querySelector('input[placeholder*="Tìm theo tên vải"]');
  var fabric = input && input.closest('.section');

  if (fabric) {
    var buttons = Array.from(fabric.querySelectorAll('a.button')).slice(0, 5);
    var cards = Array.from(fabric.querySelectorAll('.row[class*="grid-cols-1"][class*="md:grid-cols-2"] > .col > .col-inner')).filter(function (card) {
      return card.querySelector('h3') && card.textContent.indexOf('Thành phần:') !== -1;
    });
    var empty = document.createElement('p');
    var category = '';
    var categoryLabels = ['', 'áo thun', 'áo sơ mi', 'áo khoác', 'quần'];

    empty.className = 'arden-fabric-empty';
    empty.setAttribute('role', 'status');
    empty.hidden = true;
    empty.textContent = 'Không tìm thấy chất liệu phù hợp.';
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
      button.setAttribute('role', 'button');
      button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
      button.addEventListener('click', function (event) {
        event.preventDefault();
        category = categoryLabels[index];
        buttons.forEach(function (item) {
          item.setAttribute('aria-pressed', item === button ? 'true' : 'false');
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
