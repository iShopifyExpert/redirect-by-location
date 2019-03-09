# redirect-by-location
Redirect Store by IP Location
The Code To Set Up Location-Based IP Redirects
The following code snippet should be placed at the bottom of your theme.liquid layout file just above the closing </body> tag:

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
*You can find country abbreviation codes here
