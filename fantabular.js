/*
 * fantabular.js v0.1 by Joah Gerstenberg, 2015
 * licensed under MIT license
 */

(function($) {
  $.fn.fantabular = function($opt_) {
    $opt_ = $opt_ ? $opt_ : {};

    var $opt = {
      mobile_class: $opt_.mobile_class ? $opt_.mobile_class : 'visible-xs',
      desktop_class: $opt_.desktop_class ? $opt_.desktop_class : 'hidden-xs',
      selector: $opt_.selector ? $(this).find($opt_.selector) : $(this),
      inherit_classes: $opt_.inherit_classes == false ? false : true,
    }

    $opt.classes = ($opt.selector.attr('class') ? $opt.selector.attr('class') : '');

    if (!$opt.selector.is('table')) {
      throw '.fantabular() can only be called on tables.';
      return false;
    }

    $opt.selector.each(function() {
      $parent = $(this);
      var $h = $('<div class="' + $opt.mobile_class + '"><table class="' + ($opt.inherit_classes ? $opt.classes : '') + '"><tbody></tbody></table></div>');
      
      $(this).find(' > tbody > tr').each(function() {
        var $t = $('<tr><td><table><tbody></tbody></table></td></tr>');
        $(this).find('> td').each(function() {
          var $r = $('<tr></tr>');
          var $temp = $('<td class="header">' + $parent.find('thead > tr > th:nth-child(' + ($(this).index() + 1) + ')').html() + '</td>')
          
          if ($opt.inherit_classes) {
            $temp.addClass($parent.find('thead > tr > th:nth-child(' + ($(this).index() + 1) + ')').attr('class'));
          }

          $r.append($temp);
          $temp = $('<td>' + $(this).html() + '</td>');

          if ($opt.inherit_classes) {-
            $temp.addClass($(this).attr('class'));
          }

          $r.append($temp);
          $t.find('tbody').append($r);
        });

        $h.find('> table > tbody').append($t);
      });

      $h.find('td:empty').addClass('empty');
      $(this).wrap('<div class="' + $opt.desktop_class + '"></div>').parent().after($h);
    });

    return true;
  }
})(jQuery)
