<script type="text/javascript">
$.fn.extend({
 treeview: function() {
 return this.each(function() {
 // Initialize the top levels;
 var tree = $(this); 
 tree.addClass('treeview-tree');
 tree.find('li').each(function() {
 var stick = $(this);
 });
 tree.find('li').has("ul").each(function () {
 var branch = $(this); //li with children ul
 
 branch.prepend("<i class='tree-indicator glyphicon glyphicon-chevron-right'></i>");
 branch.addClass('tree-branch');
 branch.on('click', function (e) {
 if (this == e.target) {
 var icon = $(this).children('i:first');
 
 icon.toggleClass("glyphicon-chevron-down glyphicon-chevron-right");
 $(this).children().children().toggle();
 }
 })
 branch.children().children().toggle();
 
 branch.children('.tree-indicator, button, a').click(function(e) {
 branch.click();
 
 e.preventDefault();
 });
 });
 });
 }
});
 
$(window).on('load', function () {
 $('.treeview').each(function () {
 var tree = $(this);
 tree.treeview();
 })
})
</script>