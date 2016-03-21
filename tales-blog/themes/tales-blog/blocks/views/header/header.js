ctrl.setBreadCrumb = function(labels)  {
    var  html = "";
    
    for (var i in labels)  {
        var  label = labels[i];
        
        if (i > 0)
            html += '<span class="seperator"> / </span>';
        html += '<a href="' + label.href + '">' + label.title + '</a>';
    }
    console.log( html );
    
    ctrl.sel('.tales-breadcrumb').html( html );
}