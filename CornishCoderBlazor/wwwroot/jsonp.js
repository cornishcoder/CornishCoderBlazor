Blazor.registerFunction('jsUpdateTitle', function () {
    const assemblyName = 'CornishCoderBlazor';
    const namespace = 'CornishCoderBlazor.Pages';
    const typeName = 'TargetprocessProject';
    const updateTitle = Blazor.platform.findMethod(
        assemblyName,
        namespace,
        typeName,
        'UpdateTitle'
    );
    Blazor.platform.callMethod(updateTitle, null, [Blazor.platform.toDotNetString('message from jsonP js function!')]);
});

Blazor.registerFunction('jsonP', function (url) {
    
    var data = {};

    var callback = function (data) {
        const assemblyName = 'CornishCoderBlazor';
        const namespace = 'CornishCoderBlazor.Pages';
        const typeName = 'TargetprocessProject';
        const methodName = 'ApiCallback';

        const apiCallback = Blazor.platform.findMethod(
            assemblyName,
            namespace,
            typeName,
            methodName
        );


        console.log(data.Items);
        //let stringy = Blazor.platform.toDotNetString(JSON.stringify(data));
        
        Blazor.platform.callMethod(apiCallback, null, [Blazor.platform.toDotNetString(JSON.stringify(data.Items))]);
    };

    J50Npi.getJSON(url, data, callback);
});