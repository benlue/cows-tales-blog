ctrl.startup = function()  {
    var  hdCtrl = __.getCtrl('pgHeader'),
         menus = [
             {
                 href: 'about.html',
                 title: 'About'
             }
         ];

    hdCtrl.setBreadCrumb( menus );
}