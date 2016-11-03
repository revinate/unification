(function() {

  var template = [
    '<span class="{{getStaticClasses()}}" ng-class="{disabled: isDisabled, checked: isChecked}" ng-click="onClick()">',
      '<small></small>',
      '<input type="checkbox" ng-model="isChecked" style="display: none;">',
      '<span class="rev-switch-text">',
        '<span class="on">{{getOnText()}}</span>',
        '<span class="off">{{getOffText()}}</span>',
      '</span>',
    '</span>'
  ].join('');

  var directive = function() {

    function link(scope, el, attrs) {
      scope.getStaticClasses = function() {
        return attrs.class ? 'rev-switch ' + attrs.class : 'rev-switch';
      }
      scope.getOnText = function() {
        return scope.onText ? scope.onText : 'On';
      }
      scope.getOffText = function() {
        return scope.offText ? scope.offText : 'Off';
      }
      scope.onClick = function() {
        if(scope.isDisabled) {
          return;
        }
        if(scope.onChange) {
          scope.onChange({value: !scope.isChecked});
        } else {
          scope.isChecked = !scope.isChecked;
        }
      }
    }

    return {
      restrict: 'AE',
      replace: true,
      scope: {
        onText: '@?',
        offText: '@?',
        isDisabled: '@?',
        isChecked: '=',
        onChange: '&?'
      },
      template: template,
      link: link
    };
  };

  angular
    .module('styleguide')
    .directive('revNgSwitch', directive);

}());
