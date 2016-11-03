(function($) {
  'use strict';

  function getSwitchWrapper(el) {
    var $el = $(el),
        classAttr = $el.attr('class'),
        checkedAttr = $el.is(':checked') ? 'checked' : '',
        disabledAttr = $el.is(':disabled') ? 'disabled' : '',
        classes = ['rev-switch', classAttr, checkedAttr, disabledAttr].join(' ');
    return $('<span class="'+classes+'"></span>');
  }

  function getSwitchToggle(el) {
    return $('<small></small>');
  }

  function getSwitchText(el) {
    var $el = $(el),
        textOn = $el.attr('on'),
        textOff = $el.attr('off');

    return $('<span class="rev-switch-text"><span class="on">'+textOn+'</span><span class="off">'+textOff+'</span></span>');
  }

  function revSwitch() {
    return this.each(function() {
      var $checkbox = $(this);
      $checkbox
        .hide()
        .wrap(getSwitchWrapper(this))
        .before(getSwitchToggle(this))
        .after(getSwitchText(this))
        .on('click', function() {
          $(this).parent('span.rev-switch').toggleClass('checked');
        })
        .parent('span.rev-switch')
          .on('click', function(e) {

            /* avoid conflicting with label click when inside a label */
            e.preventDefault();

            $checkbox.trigger('click');
          });
    });
  }

  $.fn.revSwitch = revSwitch;

}(jQuery));
