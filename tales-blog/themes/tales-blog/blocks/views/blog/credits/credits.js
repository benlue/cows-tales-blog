ctrl.startup = function()  {
    var  hdCtrl = __.getCtrl('pgHeader'),
         menus = [
             {
                 href: 'credits.html',
                 title: 'Credits'
             }
         ];

    hdCtrl.setBreadCrumb( menus );
}