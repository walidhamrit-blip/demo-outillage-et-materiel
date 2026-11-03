/* Outillage & Matériel — interactions */
(function () {
  'use strict';

  /* Menu mobile */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav-principal');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Filtres catalogue */
  var filters = document.querySelectorAll('.filter');
  var cards = document.querySelectorAll('#cards .card');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filters.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      var cat = btn.dataset.filter;
      cards.forEach(function (card) {
        var show = cat === 'all' || card.dataset.cat === cat;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* Formulaire de devis (démo : pas d'envoi réseau) */
  var form = document.querySelector('.devis-form');
  if (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nom = form.querySelector('#nom');
      var tel = form.querySelector('#tel');
      if (!nom.value.trim() || !tel.value.trim()) {
        if (status) {
          status.textContent = 'Merci de renseigner votre nom et votre téléphone.';
          status.style.color = '#d64545';
        }
        (!nom.value.trim() ? nom : tel).focus();
        return;
      }
      if (status) {
        status.textContent = 'Merci ! Votre demande est enregistrée (démo) — réponse sous 24 h ouvrées.';
        status.style.color = '#1f7a4d';
      }
      form.reset();
    });
  }

  /* Année du footer */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
