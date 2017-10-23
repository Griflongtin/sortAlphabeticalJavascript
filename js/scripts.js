$(function() {
  $("#groceries-form").submit(function(event) {
    event.preventDefault();
    $(this).hide();
    $("div#output").show();
    var inputValues = ["item1", "item2", "item3", "item4"];

    var items = inputValues.map(function(value) {
      return $("#" + value).val().toUpperCase();
    });
    items.sort();
    items.forEach(function(value) {
      $("#output ul").append("<li>" + value + "</li>");
    });
  });
});
