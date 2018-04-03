// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .



$(() => {
  const next = $('#next')
  const pid = $('#pid')
  const name = $('#name')
  const description = $('#description')

  next.on('click', function() {
    let id = pid.text()
    fetch(`/products/${id}/data`)
      .then(r => r.json())
      .then(json => {
        name.text(json['name'])
        description.text(json['description'])
        pid.text(json['id'])
      })
  })
})