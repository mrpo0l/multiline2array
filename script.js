$('#comvertir').click(function () {
  var lines = $('#input').val().split(/\n/);
  var output = [];
  var outputText = [];
  for (var i = 0; i < lines.length; i++) {
    if (/\S/.test(lines[i])) {
      outputText.push("'" + $.trim(lines[i]) + "'");
      output.push($.trim(lines[i]));
    }
  }
  console.log(output);
  $('#input').val('[' + outputText + ']');
  $('.alert').removeClass('alert-info').addClass('alert-success').text('LIsto!')
})
