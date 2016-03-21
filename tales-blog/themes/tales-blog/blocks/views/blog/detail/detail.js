ctrl.startup = function()  {
    var  hdCtrl = __.getCtrl('pgHeader'),
         menus = [
             {
                 href: 'home.html',
                 title: 'Blog'
             },
             {
                 href: 'detail.html',
                 title: '<%= ctx.title %>'
             }
         ];

    hdCtrl.setBreadCrumb( menus );
}