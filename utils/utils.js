let Utils = {
    datatable: function (table_id, columns, data, pageLength=15) {
        if ($.fn.dataTable.isDataTable("#" + table_id)) {
          $("#" + table_id)
            .DataTable()
            .destroy();
        }
    
        $("#" + table_id).DataTable({
          data: data,
          columns: columns,
          pageLength: pageLength,
          lengthMenu: [2, 5, 10, 15, 25, 50, 100, "All"],
        });
      }
}