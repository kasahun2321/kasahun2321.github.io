<script>
  $(document).ready(function($)
  {
    //--->add row at the end > start
    $(document).on('click',".btn_row_add_below_end", function(e)
    {
      var tableBody = $(document).find('.tbl_code_with_mark').find("tbody");
      var trLast = tableBody.find("tr:last");
      var trNew = trLast.clone();
      trLast.after(trNew);
    });
    //--->add row at the end > end


    //--->current row > new > start
    $(document).on('click',".btn_row_below_new", function(e)
    {
      var r = $(this).closest('tr').clone();

      $.each(r.find('td'), function(i1,v1)
      {
        //clear all data/value in td/cell
        $(this).html('');
      });

      $(this).closest('tr').after(r);
    });
    //--->current row > new > end


    //--->current row > clone > start
    $(document).on('click',".btn_row_below_clone", function(e)
    {
      var r = $(this).closest('tr').clone();
      $(this).closest('tr').after(r);
    });
    //--->current row > clone > end

    //--->current row > delete > start
    $(document).on('click',".btn_row_delete", function(e)
    {
      var r = $(this).closest('tr').remove();
    });
    //--->current row > delete > end
    
  });
</script>