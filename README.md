About:
-----------------------------------------------------------------------------------------

Product: Ztrint Table Exporter
Description: a very simple jquery plugin that allows export html tables to txt and csv.
Author: Nicolas Castro - nrctkno@gmail.com

Special thanks to the stackoverflow community and my colleagues.

Requirements:
-----------------------------------------------------------------------------------------

JQuery 2.x, that´s all.

Usage:
-----------------------------------------------------------------------------------------

Tables MUST have an id attribute.

Add this to your .js:

  $('.mytableclass').ZtrintTableExporter();

Or using options:
```
  $('.mytableclass').ZtrintTableExporter({
    filename: 'My very first exported table',     //the filename prefix (the extension is automatic)
    title: 'Export my beautiful table to ',       //the title shown in link's mouse hover event
    formats: ['txt','csv']                        //you can choose txt, csv or both (by default)
  });
```

...and this to your .css:

```
.tbl_export_panel{display: none;position: fixed;}
.tbl_export_btn{display: inline-block;width:22px; height: 22px; background-color:#97b7c7; background-position: center; background-repeat: no-repeat; margin: 0 2px;}
.tbl_export_btn:hover{background-color:#d0e1e9;}
.tbl_export_txt{background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAYAAACEnoQPAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABcSURBVHja7JFLCoBADENfZO5/5bixWDpF/CwEMTCLKQ15obJtbmrhgcKs9JCkshd/hQCUsAW4GHww37HnsNZ4unNOpgtpzVsnF4J577VTjXKKK/JIvX7s72KvAwAH+xs5q6sM8gAAAABJRU5ErkJggg==');}
.tbl_export_csv{background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABlSURBVHja7JHBCsAgDEMT6f//cnbZoHRtPdTDDgsINiJ5UUoSBlpuT7cqL57B3BBJMq8liFJC9JJtAhRoRJIA8LydhTQ0M+6LJYGKdHT+wlCWfE9WofSOEWjXtfL+Cl+oMCa4BgB1ZCkrD3Oz/gAAAABJRU5ErkJggg==');}
.tbl_export_xls{background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABpSURBVHja7JHBCsAgDENfxP//5exUKKUwoR52WC/aGGNSZdsMagFIUgajr3hgUQAbwLYlKa/da93Zis3b5czJzlZV72xXkcxrbac+ZkEVD76u/MKkdriuUU+xaw66ORxhf4QvRBg7eAYAi4hWL6HcnkAAAAAASUVORK5CYII=');}
```