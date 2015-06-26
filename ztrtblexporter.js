/*! Ztrint/TableExporter.js v0.0.1 | (c) 2015 Nicolas Castro | https://github.com/Ztrint/TableExporter.js */

(function ($) {

  $.fn.ZtrintTableExporter = function (options) {

    var csspfx = 'tbl_export_';

    var defs = $.extend({
      filename: 'table export',
      title: 'Export this table to ',
      formats: ['xls', 'csv', 'txt']
    }, options);

    var exporters = {
      txt: function (tid) {
        newButton('txt', 'TXT')
                .appendTo($('#' + tid + '_' + csspfx + 'panel'))
                //.insertBefore(t)
                .click(function () {
                  text = parseTable(this, function (text) {
                    return text + '\t';
                  }, function (text) {
                    return text + '\r\n';
                  });
                  save(this, 'text/plain', 'txt', text);
                });
      },
      csv: function (tid) {
        newButton('csv', 'CSV')
                .appendTo($('#' + tid + '_' + csspfx + 'panel'))
                .click(function () {
                  text = parseTable(this, function (text) {
                    return '"' + text + '"' + ',';
                  }, function (text) {
                    return text + '\r\n';
                  });
                  save(this, 'text/csv', 'csv', text);
                });
      },
      xls: function (tid) {
        //$('<a/>', {class: 'tbl_export_btn tbl_export_xls', href: '#', table: tid, title: defs.title + 'MS Excel'})
        newButton('xls', 'MS Excel')
                .appendTo($('#' + tid + '_' + csspfx + 'panel'))
                .click(function () {
                  text = parseTable(this, function (text) {
                    return '<td>' + text + '</td>';
                  }, function (text) {
                    return '<tr>' + text + '</tr>';
                  });
                  save(this, 'application/vnd.ms-excel', 'xls', '<table>' + text + '</table>');
                });
      }
    };

    function newButton(classSfx, titleSfx) {
      return $('<a/>', {class: csspfx + 'btn ' + csspfx + classSfx, href: '#', table: tid, title: defs.title + titleSfx});
    }

    function sanitize(text) {
      return text.replace(/(\r\n|\n|\r)/gm, "").replace('"', "'").trim();
    }

    function parseTable(sender, onNewCell, onNewRow) {
      table_id = $(sender).attr('table');
      text = "";
      $("#" + table_id + ' tr').each(function () {
        cells = "";
        $(this).children("th,td").each(function () {
          cells += onNewCell(sanitize($(this).text()));
        });
        text += onNewRow(cells);
      });
      return text;
    }

    function save(sender, cntData, extension, text) {
      stream = 'data:' + cntData + ';charset=utf-8,' + escape(text);
      $(sender).addClass(csspfx + '_done').attr('href', stream).attr("download", defs.filename + "." + extension);
    }

    return this.each(function () {
      t = $(this);
      tid = t.attr('id');
      $('<div/>', {class: csspfx + 'panel', id: tid + '_tbl_export_panel'}).prependTo(t);
      //add the exporters (prepend buttons, bind events)
      defs.formats.forEach(
              function (key) {
                exporters[key](tid);
              }
      );
      //setup the show event
      t.hover(function () {
        $(this).children('.' + csspfx + 'panel').slideDown(100);
      }, function () {
        $(this).children('.' + csspfx + 'panel').slideUp(100);
      });
      //data:application/pdf;base64
    });

  };
}(jQuery));