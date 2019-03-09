# redirect-by-location
Redirect Store by IP Location
The Code To Set Up Location-Based IP Redirects
The following code snippet should be placed at the bottom of your theme.liquid layout file just above the closing </body> tag:
[codehtml]
<script>
jQuery.ajax( {
  url: '//freegeoip.net/json/',
  type: 'POST',
  dataType: 'jsonp',
  success: function(location) {
    // UK -- United Kingdom
    if (location.country_code === 'UK') {
      // Redirect visitor to the UK store
      window.top.location.href = 'http://uk.blackclaw.com';
    }
  }
});
</script>


<script type="text/javascript">
  //Coded by Codehouse - Aaliyan Gul
  jQuery.ajax({
    url: 'https://ipapi.co/json',
    type: 'POST',
    async: false,
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    success: function (location) {
      // AU -- Australia
      if (location.country === 'AU') { // Redirect visitor to the AU store
          window.top.location.href = 'https://au.dittybird.com/';
      } else if (location.country === 'DE') { // Redirect visitor to the UK store
          window.top.location.href = 'https://de.dittybird.com/';
      }
    }
  });
</script>

[codehtml]
*You can find country abbreviation codes here
