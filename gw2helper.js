/** 
 * gw2helper.js
 * Copyright (C) 2012 Juan Baez <http://genscripts.net>
 * MIT License, see License.txt for more information.
 */
(function($) {
  var GW2Helper = function(element)
  {
    var template  = /#\{(.*?)\}/g;
    var elem      = $(element);

    // Private Methods
    var properSkillName = function(skill_name) {
      var s = skill_name.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
      s = s.replace(/(\bIs|\bOf|\bThe)/g, function(a) { return a.toLowerCase(); });
      return s;
    };

    // Public Methods
    this.handleBizNiz = function() {
      var html = elem.html().replace(template, function(m, s) {
        s = properSkillName(s.toLowerCase());
        var a = '<a href=\"http://wiki.guildwars2.com/wiki/' + s.replace(' ','_') + '\" target=\"blank_\">' + s + '</a>';
        return a;
      });
      elem.html(html);
    };
  };

  $.fn.gw2helper = function() {
    return this.each(function() {
      if ($(this).data('gw2helper')) return; 
      $(this).data('gw2helper', new GW2Helper(this));
      var gw2helper = $(this).data('gw2helper');
      gw2helper.handleBizNiz();
    });
  };

})(jQuery);
