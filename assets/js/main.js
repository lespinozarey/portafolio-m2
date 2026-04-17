$("button").click(function() {
    var numProductos = parseInt($("#numProductos").html()) + 1;
    $("#numProductos").html(numProductos);
    alert(numProductos + " productos en el carrito");
});