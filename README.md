*Guild Wars 2 Skills Tooltip Helper*
=========

So there's this guy on the Enjin forums named ["Gwendabell" that made a really neafty Javascript][1] that converts html links of Guild Wars 2 skills into nice looking tooltips. The only problem is that I am a lazy Amerikan and I'm too lazy to type in the entire friggin html code myself every time I want a tooltip; and thus this script was born. It basically converts any string that contains "#{skill name}" into a respective html link. Note that this only works on Forum Posts and Articles. For those advanced users, you should be able to add more classes to the actual script itself if you want this to work on more than just forum posts and articles.

  [1]: http://www.enjin.com/forums/m/10826/viewthread/2495106-adding-guild-wars-2-tooltips-to-your-site


Magic in action: ![Sample post](http://dl.dropbox.com/u/389096/desktop/magma_orb.png "Sample post")   


How to use with Enjin:
========

Basic Users:
--------
  1) Go to the "Admin Panel."  
  2) Click on the "Modules" tab.  
  3) On the left side, look for "General Content" then click on "HTML Module."  
  4) Click on "Create Module" to create a new "HTML Module," name it whatever you want.  
  5) Click on "Edit" to the right of the module's name.  
  6) Click on "HTML Source."  
  7) Paste the code snippet from the bottom of the page ("Enjin HTML Module Code") to the editbox, then save it.  
  8) Click on the "Pages" tab at the top; right below the Enjin logo.  
  9) On the "Home" page, look for the section titled "Custom Bottom" on the template.   
  10) Add a container with the "HTML Module" you just created.  
  11) Repeat steps 9-10 for the "Forum" page on the dropdown menu.  

Advanced Users:
--------
  1) Create HTML Module with the code snippet at the bottom of this page ("Enjin HTML Module Code").  
  2) Add the HTML Module to the "bottom" of the "Home" and "Forum" page on the Layout Editor.  

How to link skills in articles or forums:
========
Type #{skill name} (for example: #{Doom}) into any article or forum post and watch the magic happen.  

Enjin HTML Module Code
========

NOTE: On the code snippet below, replace "YOUROWNHOST.com" with your own host. Basically the file "gw2helper.js" needs to be uploaded somewhere for you to be able to use this. 

```javascript
<script src="http://YOUROWNHOST.com/gw2helper.js"></script>

<script type="text/javascript">
  $(document).ready(function() {
    $('.post-content, .article-content').gw2helper();
  });
</script>
<script src="http://tooltips.flame-throwing.com/javascripts/tooltips.js"></script>
```

*Special Note #1*: **USA USA**.  
*Special Note #2*: Friendship is magic.  

