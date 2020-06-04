// validation

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function() {
  
  // layout menu

  $('.sidebar .list-group-item').each(function(i) {
    if (window.location.pathname === this.pathname) {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    };
  });

  // question reply star mark

  $('.icon-js-star').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('text-primary');
    var icon = $(this).find('i');
    if (icon.text() === 'star_border') {
      icon.text('star');
    } else {
      icon.text('star_border');
    };
  });

  // mark as read

  $('.btn-js-read').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('btn-outline-primary');
    $(this).toggleClass('btn-primary');
    if ($(this).text() === 'Mark as read') {
      $(this).text('Read');
    } else {
      $(this).text('Mark as read');
    };
  });

  // btn-reply

  $('.btn-js-reply').on('click', function(e) {
    e.preventDefault();
    $('.assignment-reply').addClass('active');
  });

  $(document).mouseup(function (e) {
    var container = $('.assignment-reply');
    var trigger = $('.btn-js-cancel');
    if ( (!container.is(e.target) && container.has(e.target).length === 0) || trigger.is(e.target)) {
      container.removeClass('active'); 
    };
  });

  // edit New Admin Modal

  $('#editNewAdminModal').on('show.bs.modal', function(event){
    var btn = $(event.relatedTarget);
    var name = btn.data('name');
    var email = btn.data('email');
    
    var modal = $(this);
    modal.find('#editNewAdminName').val(name);
    modal.find('#editNewAdminEmail').val(email);
  });

  // view-modal

  $('#viewModal').on('show.bs.modal', function(event){
    var btn = $(event.relatedTarget);
    var id = btn.data('id');
    var name = btn.data('name');
    var email = btn.data('email');
    
    var modal = $(this);
    modal.find('#viewId').text(id);
    modal.find('#viewName').text(name);
    modal.find('#viewEmail').text(email);
    modal.find('#viewEditBtn').data('name', name);
    modal.find('#viewEditBtn').data('email', email);
  });

  // expand
  $('.expand').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.infoCard').toggleClass('active');
  });

});