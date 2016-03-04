(function() {
  'use strict';

  angular
    .module('revSwitch', [])
    .directive('revNgSwitch', function(){
      return {
        restrict: 'AE'
      , replace: true
      , transclude: true
      , template: function(element, attrs) {
          var html = '';
          html += '<span';
          html +=   ' class="rev-switch' + (attrs.class ? ' ' + attrs.class : '') + '"';
          html +=   attrs.ngModel ? ' ng-click="' + attrs.disabled + ' ? ' + attrs.ngModel + ' : ' + attrs.ngModel + '=!' + attrs.ngModel + (attrs.ngChange ? '; ' + attrs.ngChange + '()"' : '"') : '';
          html +=   ' ng-class="{ checked:' + attrs.ngModel + ', disabled:' + attrs.disabled + ' }"';
          html +=   '>';
          html +=   '<small></small>';
          html +=   '<input type="checkbox"';
          html +=     attrs.id ? ' id="' + attrs.id + '"' : '';
          html +=     attrs.name ? ' name="' + attrs.name + '"' : '';
          html +=     attrs.ngModel ? ' ng-model="' + attrs.ngModel + '"' : '';
          html +=     ' style="display:none" />';
          html +=     '<span class="rev-switch-text">';
          html +=     attrs.on ? '<span class="on">'+attrs.on+'</span>' : '';
          html +=     attrs.off ? '<span class="off">'+attrs.off + '</span>' : ' ';
          html += '</span>';
          return html;
        }
      }
    });

}());
