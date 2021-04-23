(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,i,a){"use strict";a.r(i),a.d(i,"frontMatter",(function(){return o})),a.d(i,"metadata",(function(){return m})),a.d(i,"toc",(function(){return d})),a.d(i,"default",(function(){return p}));var t=a(3),n=a(7),s=(a(0),a(94)),l=a(95),u=a.n(l),c=a(96),r=a(97),o={id:"media-object",title:"Media object"},m={unversionedId:"rendering/media-object",id:"rendering/media-object",isDocsHomePage:!1,title:"Media object",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/media-object.mdx",sourceDirName:"rendering",slug:"/rendering/media-object",permalink:"/twbs-helper-module/docs/rendering/media-object",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/media-object.mdx",version:"current",frontMatter:{id:"media-object",title:"Media object"},sidebar:"docsSidebar",previous:{title:"List group",permalink:"/twbs-helper-module/docs/rendering/list-group"},next:{title:"Modal",permalink:"/twbs-helper-module/docs/rendering/modal"}},d=[{value:"Example",id:"example",children:[]},{value:"Nesting",id:"nesting",children:[]},{value:"Alignment",id:"alignment",children:[]},{value:"Order",id:"order",children:[]},{value:"Media list",id:"media-list",children:[]}],b={toc:d};function p(e){var i=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},b,a,{components:i,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/"},"Twitter bootstrap Documentation")),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/#example"},"Twitter bootstrap Documentation")),Object(s.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"result",mdxType:"TabItem"},u()('<div class="media">\n    <img alt="..." class="mr-3" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;64x64.svg" />\n    <div class="media-body">\n        <h5 class="mt-0">Media heading</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n    </div>\n</div>')),Object(s.b)(r.a,{value:"source",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"echo $this->media([\n    'img' => ['/twbs-helper-module/img/docs/64x64.svg', ['alt' => '...', 'class' => 'mr-3']],\n    'title' => 'Media heading',\n    'text' => 'Cras sit amet nibh libero, in gravida nulla. ' .\n    'Nulla vel metus scelerisque ante sollicitudin. ' .\n    'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ' .\n    'Fusce condimentum nunc ac nisi vulputate fringilla. ' .\n    'Donec lacinia congue felis in faucibus.',\n]);\n")))),Object(s.b)("h2",{id:"nesting"},"Nesting"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/#nesting"},"Twitter bootstrap Documentation")),Object(s.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"result",mdxType:"TabItem"},u()('<div class="media">\n    <img alt="..." class="mr-3" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;64x64.svg" />\n    <div class="media-body">\n        <h5 class="mt-0">Media heading</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        <div class="media">\n            <img alt="..." class="mr-3" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;64x64.svg" />\n            <div class="media-body">\n                <h5 class="mt-0">Media heading</h5>\n                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n            </div>\n        </div>\n    </div>\n</div>')),Object(s.b)(r.a,{value:"source",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"echo $this->media([\n    'img' => ['/twbs-helper-module/img/docs/64x64.svg', ['alt' => '...', 'class' => 'mr-3']],\n    'title' => 'Media heading',\n    'text' => 'Cras sit amet nibh libero, in gravida nulla. ' .\n    'Nulla vel metus scelerisque ante sollicitudin. ' .\n    'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ' .\n    'Fusce condimentum nunc ac nisi vulputate fringilla. ' .\n    'Donec lacinia congue felis in faucibus.',\n    'media' => [\n        'content' => [\n            'img' => ['/twbs-helper-module/img/docs/64x64.svg', ['alt' => '...', 'class' => 'mr-3']],\n            'title' => 'Media heading',\n            'text' => 'Cras sit amet nibh libero, in gravida nulla. ' .\n            'Nulla vel metus scelerisque ante sollicitudin. ' .\n            'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ' .\n            'Fusce condimentum nunc ac nisi vulputate fringilla. ' .\n            'Donec lacinia congue felis in faucibus.',\n        ],\n    ],\n]);\n")))),Object(s.b)("h2",{id:"alignment"},"Alignment"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/#alignment"},"Twitter bootstrap Documentation")),Object(s.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"result",mdxType:"TabItem"},u()('<div class="media">\n    <img alt="..." class="align-self-start&#x20;mr-3" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;64x64.svg" />\n    <div class="media-body">\n        <h5 class="mt-0">Top-aligned media</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n    </div>\n</div>\n<div class="media">\n    <img alt="..." class="align-self-center&#x20;mr-3" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;64x64.svg" />\n    <div class="media-body">\n        <h5 class="mt-0">Top-aligned media</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n    </div>\n</div>\n<div class="media">\n    <img alt="..." class="align-self-end&#x20;mr-3" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;64x64.svg" />\n    <div class="media-body">\n        <h5 class="mt-0">Top-aligned media</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n    </div>\n</div>')),Object(s.b)(r.a,{value:"source",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"// Top-aligned media\necho $this->media([\n    'img' => ['/twbs-helper-module/img/docs/64x64.svg', ['alt' => '...', 'class' => 'align-self-start mr-3']],\n    'title' => 'Top-aligned media',\n    'text' => [\n        'Cras sit amet nibh libero, in gravida nulla. ' .\n        'Nulla vel metus scelerisque ante sollicitudin. ' .\n        'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ' .\n        'Fusce condimentum nunc ac nisi vulputate fringilla. ' .\n        'Donec lacinia congue felis in faucibus.',\n        'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. ' .\n        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',\n    ],\n]) . PHP_EOL;\n\n// Center-aligned media\necho $this->media([\n    'img' => ['/twbs-helper-module/img/docs/64x64.svg', ['alt' => '...', 'class' => 'align-self-center mr-3']],\n    'title' => 'Top-aligned media',\n    'text' => [\n        'Cras sit amet nibh libero, in gravida nulla. ' .\n        'Nulla vel metus scelerisque ante sollicitudin. ' .\n        'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ' .\n        'Fusce condimentum nunc ac nisi vulputate fringilla. ' .\n        'Donec lacinia congue felis in faucibus.',\n        [\n            'content' => 'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. ' .\n            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',\n            'attributes' => ['class' => 'mb-0'],\n        ],\n    ],\n]) . PHP_EOL;\n\n// Bottom-aligned media\necho $this->media([\n    'img' => ['/twbs-helper-module/img/docs/64x64.svg', ['alt' => '...', 'class' => 'align-self-end mr-3']],\n    'title' => 'Top-aligned media',\n    'text' => [\n        'Cras sit amet nibh libero, in gravida nulla. ' .\n        'Nulla vel metus scelerisque ante sollicitudin. ' .\n        'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ' .\n        'Fusce condimentum nunc ac nisi vulputate fringilla. ' .\n        'Donec lacinia congue felis in faucibus.',\n        [\n            'content' => 'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. ' .\n            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',\n            'attributes' => ['class' => 'mb-0'],\n        ],\n    ],\n]);\n")))),Object(s.b)("h2",{id:"order"},"Order"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/#order"},"Twitter bootstrap Documentation")),Object(s.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"result",mdxType:"TabItem"},u()('<div class="media">\n    <div class="media-body">\n        <h5 class="mb-1&#x20;mt-0">Media object</h5>\n        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n    </div>\n    <img alt="..." class="ml-3" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;64x64.svg" />\n</div>')),Object(s.b)(r.a,{value:"source",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"echo $this->media([\n    'title' => ['content' => 'Media object', 'attributes' => ['class' => 'mb-1']],\n    'text' => 'Cras sit amet nibh libero, in gravida nulla. ' .\n    'Nulla vel metus scelerisque ante sollicitudin. ' .\n    'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ' .\n    'Fusce condimentum nunc ac nisi vulputate fringilla. ' .\n    'Donec lacinia congue felis in faucibus.',\n    'img' => ['/twbs-helper-module/img/docs/64x64.svg', ['alt' => '...', 'class' => 'ml-3']],\n]);\n")))),Object(s.b)("h2",{id:"media-list"},"Media list"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/media-object/#media-list"},"Twitter bootstrap Documentation")),Object(s.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"result",mdxType:"TabItem"},u()('<ul class="list-unstyled">\n    <li class="media">\n        <img alt="..." class="mr-3" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;64x64.svg" />\n        <div class="media-body">\n            <h5 class="mb-1&#x20;mt-0">List-based media object</h5>\n            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        </div>\n    </li>\n    <li class="media">\n        <img alt="..." class="mr-3" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;64x64.svg" />\n        <div class="media-body">\n            <h5 class="mb-1&#x20;mt-0">List-based media object</h5>\n            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        </div>\n    </li>\n    <li class="media">\n        <img alt="..." class="mr-3" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;64x64.svg" />\n        <div class="media-body">\n            <h5 class="mb-1&#x20;mt-0">List-based media object</h5>\n            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n        </div>\n    </li>\n</ul>')),Object(s.b)(r.a,{value:"source",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"echo $this->mediaList([\n    [\n        'img' => ['/twbs-helper-module/img/docs/64x64.svg', ['alt' => '...', 'class' => 'mr-3']],\n        'title' => ['content' => 'List-based media object', 'attributes' => ['class' => 'mb-1']],\n        'text' => 'Cras sit amet nibh libero, in gravida nulla. ' .\n        'Nulla vel metus scelerisque ante sollicitudin. ' .\n        'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ' .\n        'Fusce condimentum nunc ac nisi vulputate fringilla. ' .\n        'Donec lacinia congue felis in faucibus.',\n    ],\n    [\n        'img' => ['/twbs-helper-module/img/docs/64x64.svg', ['alt' => '...', 'class' => 'mr-3']],\n        'title' => ['content' => 'List-based media object', 'attributes' => ['class' => 'mb-1']],\n        'text' => 'Cras sit amet nibh libero, in gravida nulla. ' .\n        'Nulla vel metus scelerisque ante sollicitudin. ' .\n        'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ' .\n        'Fusce condimentum nunc ac nisi vulputate fringilla. ' .\n        'Donec lacinia congue felis in faucibus.',\n    ],\n    [\n        'img' => ['/twbs-helper-module/img/docs/64x64.svg', ['alt' => '...', 'class' => 'mr-3']],\n        'title' => ['content' => 'List-based media object', 'attributes' => ['class' => 'mb-1']],\n        'text' => 'Cras sit amet nibh libero, in gravida nulla. ' .\n        'Nulla vel metus scelerisque ante sollicitudin. ' .\n        'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ' .\n        'Fusce condimentum nunc ac nisi vulputate fringilla. ' .\n        'Donec lacinia congue felis in faucibus.',\n    ],\n]);\n")))))}p.isMDXComponent=!0}}]);