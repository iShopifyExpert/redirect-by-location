<script>
jQuery.ajax( {
  url: '//freegeoip.net/json/',
  type: 'POST',
  dataType: 'jsonp',
  success: function(location) {
    // UK -- United Kingdom
    if (location.country_code === 'AU') {
      // Redirect visitor to the UK store
      window.top.location.href = 'https://au.dittybird.com/';
    } else {
      // Redirect visitor to the Worldwide
      window.top.location.href = 'https://www..dittybird.com/';
    }
  }
});
</script>
