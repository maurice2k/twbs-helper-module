(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{72:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return c})),e.d(n,"metadata",(function(){return v})),e.d(n,"rightToc",(function(){return u})),e.d(n,"default",(function(){return d}));var t=e(2),r=e(6),l=(e(0),e(93)),s=e(94),i=e.n(s),o=e(95),b=e(96),c={id:"navbar",title:"Navbar"},v={unversionedId:"rendering/navbar",id:"rendering/navbar",isDocsHomePage:!1,title:"Navbar",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/navbar.mdx",permalink:"/twbs-helper-module/docs/rendering/navbar",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/navbar.mdx",sidebar:"docsSidebar",previous:{title:"Navs",permalink:"/twbs-helper-module/docs/rendering/navs"},next:{title:"Pagination",permalink:"/twbs-helper-module/docs/rendering/pagination"}},u=[{value:"Supported content",id:"supported-content",children:[{value:"Brand",id:"brand",children:[]},{value:"Nav",id:"nav",children:[]},{value:"Forms",id:"forms",children:[]},{value:"Text",id:"text",children:[]}]},{value:"Color schemes",id:"color-schemes",children:[]},{value:"Containers",id:"containers",children:[]},{value:"Placement",id:"placement",children:[]}],p={rightToc:u};function d(a){var n=a.components,e=Object(r.a)(a,["components"]);return Object(l.b)("wrapper",Object(t.a)({},p,e,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navbar/"}),"Twitter bootstrap Documentation")),Object(l.b)("h2",{id:"supported-content"},"Supported content"),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navbar/#supported-content"}),"Twitter bootstrap Documentation")),Object(l.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"result",mdxType:"TabItem"},i()('<nav class="bg-light&#x20;navbar&#x20;navbar-expand-lg&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;">Navbar</a>\n    <button type="button" name="navbar_toggler" class="navbar-toggler" data-toggle="collapse" aria-expanded="false" aria-label="Toggle&#x20;navigation" data-target="&#x23;navbarSupportedContent" aria-controls="navbarSupportedContent" value=""><span class="navbar-toggler-icon"></span></button>\n    <div class="collapse&#x20;navbar-collapse" id="navbarSupportedContent">\n        <ul class="mr-auto&#x20;nav&#x20;navbar-nav">\n            <li class="&#x20;nav-item">\n                <a class="nav-link&#x20;active" href="&#x23;">Home <span class="sr-only">(current)</span></a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Link</a>\n            </li>\n            <li class="dropdown&#x20;nav-item">\n                <a id="navbarDropdown" class="dropdown-toggle&#x20;nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="&#x23;">Dropdown</a>\n                <div aria-labelledby="navbarDropdown" class="dropdown-menu">\n                    <a class="dropdown-item" href="&#x23;">Action</a>\n                    <a class="dropdown-item" href="&#x23;">Another action</a>\n                    <div class="dropdown-divider"></div>\n                    <a class="dropdown-item" href="&#x23;">Something else here</a>\n                </div>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n            </li>\n        </ul>\n        <form action="" method="POST" name="form" class="form-inline&#x20;my-2&#x20;my-lg-0" role="form" id="form">\n            <input name="search" type="search" placeholder="Search" aria-label="Search" class="form-control&#x20;mr-sm-2" value=""/>\n            <button type="submit" name="submit" class="btn&#x20;btn-outline-success&#x20;my-2&#x20;my-sm-0" value="">Search</button>\n        </form>\n    </div>\n</nav>')),Object(l.b)(b.a,{value:"source",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation([\n        ['label' => 'Home <span class=\"sr-only\">(current)</span>', 'uri' => '#', 'active' => true],\n        ['label' => 'Link', 'uri' => '#'],\n        [\n            'type' => '\\TwbsHelper\\Navigation\\Page\\DropdownPage',\n            'label' => 'Dropdown',\n            'dropdown' => [\n                'items' => [\n                    'Action',\n                    'Another action',\n                    '---',\n                    'Something else here',\n                ],\n                'attributes' => ['id' => 'navbarDropdown'],\n            ],\n        ],\n        ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n    ]),\n    [\n        'brand' => 'Navbar',\n        'form' => [\n            'elements' => [\n                [\n                    'spec' => [\n                        'name' => 'search',\n                        'attributes' => [\n                            'type' => 'search',\n                            'placeholder' => 'Search',\n                            'aria-label' => 'Search',\n                            'class' => 'mr-sm-2',\n                        ],\n                    ],\n                ],\n                [\n                    'spec' => [\n                        'type' => 'submit',\n                        'options' => [\n                            'label' => 'Search',\n                            'variant' => 'outline-success',\n                        ],\n                        'attributes' => [\n                            'class' => 'my-2 my-sm-0',\n                        ],\n                    ],\n                ],\n            ],\n            'attributes' => ['class' => 'my-2 my-lg-0'],\n        ],\n        'attributes' => ['id' => 'navbarSupportedContent'],\n    ]\n);\n")))),Object(l.b)("h3",{id:"brand"},"Brand"),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navbar/#brand"}),"Twitter bootstrap Documentation")),Object(l.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"result",mdxType:"TabItem"},i()('<nav class="bg-light&#x20;navbar&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;">Navbar</a>\n</nav>\n<br/>\n<nav class="bg-light&#x20;navbar&#x20;navbar-light">\n    <span class="h1&#x20;mb-0&#x20;navbar-brand">Navbar</span>\n</nav>\n<br/>\n<nav class="bg-light&#x20;navbar&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;"><img alt="" height="30" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;bootstrap-solid.svg" width="30" /></a>\n</nav>\n<br/>\n<nav class="bg-light&#x20;navbar&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;">\n        <img alt="" class="align-top&#x20;d-inline-block" height="30" src="&#x2F;twbs-helper-module&#x2F;img&#x2F;docs&#x2F;bootstrap-solid.svg" width="30" />\n        Bootstrap\n    </a>\n</nav>')),Object(l.b)(b.a,{value:"source",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"// As a link\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(),\n    [\n        'brand' => 'Navbar',\n        'expand' => false,\n        'toggler' => false,\n    ]\n);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// As a heading\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(),\n    [\n        'brand' => [\n            'content' => 'Navbar',\n            'attributes' => ['class' => 'mb-0 h1'],\n            'type' => 'heading',\n        ],\n        'expand' => false,\n        'toggler' => false,\n    ]\n);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Just an image\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(),\n    [\n        'brand' => [\n            'img' => [\n                '/twbs-helper-module/img/docs/bootstrap-solid.svg',\n            ],\n        ],\n        'expand' => false,\n        'toggler' => false,\n    ]\n);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Image and text\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(),\n    [\n        'brand' => [\n            'content' => 'Bootstrap',\n            'img' => [\n                '/twbs-helper-module/img/docs/bootstrap-solid.svg',\n                [\n                    'width' => 30,\n                    'height' => 30,\n                    'alt' => '',\n                ],\n            ],\n        ],\n        'expand' => false,\n        'toggler' => false,\n    ]\n);\n")))),Object(l.b)("h3",{id:"nav"},"Nav"),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navbar/#nav"}),"Twitter bootstrap Documentation")),Object(l.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"result",mdxType:"TabItem"},i()('<nav class="bg-light&#x20;navbar&#x20;navbar-expand-lg&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;">Navbar</a>\n    <button type="button" name="navbar_toggler" class="navbar-toggler" data-toggle="collapse" aria-expanded="false" aria-label="Toggle&#x20;navigation" data-target="&#x23;navbarNav" aria-controls="navbarNav" value=""><span class="navbar-toggler-icon"></span></button>\n    <div class="collapse&#x20;navbar-collapse" id="navbarNav">\n        <ul class="mr-auto&#x20;nav&#x20;navbar-nav">\n            <li class="&#x20;nav-item">\n                <a class="nav-link&#x20;active" href="&#x23;">Home <span class="sr-only">(current)</span></a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Features</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Pricing</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<br/>\n<nav class="bg-light&#x20;navbar&#x20;navbar-expand-lg&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;">Navbar</a>\n    <button type="button" name="navbar_toggler" class="navbar-toggler" data-toggle="collapse" aria-expanded="false" aria-label="Toggle&#x20;navigation" data-target="&#x23;navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" value=""><span class="navbar-toggler-icon"></span></button>\n    <div class="collapse&#x20;navbar-collapse" id="navbarNavAltMarkup">\n        <nav class="mr-auto&#x20;nav&#x20;navbar-nav">\n            <a class="nav-link&#x20;active" href="&#x23;">Home <span class="sr-only">(current)</span></a>\n            <a class="nav-link" href="&#x23;">Features</a>\n            <a class="nav-link" href="&#x23;">Pricing</a>\n            <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n        </nav>\n    </div>\n</nav>\n<br/>\n<nav class="bg-light&#x20;navbar&#x20;navbar-expand-lg&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;">Navbar</a>\n    <button type="button" name="navbar_toggler" class="navbar-toggler" data-toggle="collapse" aria-expanded="false" aria-label="Toggle&#x20;navigation" data-target="&#x23;navbarNavDropdown" aria-controls="navbarNavDropdown" value=""><span class="navbar-toggler-icon"></span></button>\n    <div class="collapse&#x20;navbar-collapse" id="navbarNavDropdown">\n        <ul class="mr-auto&#x20;nav&#x20;navbar-nav">\n            <li class="&#x20;nav-item">\n                <a class="nav-link&#x20;active" href="&#x23;">Home <span class="sr-only">(current)</span></a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Features</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Pricing</a>\n            </li>\n            <li class="dropdown&#x20;nav-item">\n                <a id="navbarDropdownMenuLink" class="dropdown-toggle&#x20;nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="&#x23;">Dropdown link</a>\n                <div aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu">\n                    <a class="dropdown-item" href="&#x23;">Action</a>\n                    <a class="dropdown-item" href="&#x23;">Another action</a>\n                    <a class="dropdown-item" href="&#x23;">Something else here</a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>')),Object(l.b)(b.a,{value:"source",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation([\n        [\n            'label' => 'Home <span class=\"sr-only\">(current)</span>',\n            'uri' => '#',\n            'active' => true,\n        ],\n        ['label' => 'Features', 'uri' => '#'],\n        ['label' => 'Pricing', 'uri' => '#'],\n        ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n    ]),\n    [\n        'brand' => 'Navbar',\n        'attributes' => ['id' => 'navbarNav'],\n    ]\n);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Avoid the list-based approach\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation([\n        [\n            'label' => 'Home <span class=\"sr-only\">(current)</span>',\n            'uri' => '#',\n            'active' => true,\n        ],\n        ['label' => 'Features', 'uri' => '#'],\n        ['label' => 'Pricing', 'uri' => '#'],\n        ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n    ]),\n    [\n        'brand' => 'Navbar',\n        'attributes' => ['id' => 'navbarNavAltMarkup'],\n        'nav' => ['list' => false],\n    ]\n);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation([\n        [\n            'label' => 'Home <span class=\"sr-only\">(current)</span>',\n            'uri' => '#',\n            'active' => true,\n        ],\n        ['label' => 'Features', 'uri' => '#'],\n        ['label' => 'Pricing', 'uri' => '#'],\n        [\n            'type' => '\\TwbsHelper\\Navigation\\Page\\DropdownPage',\n            'label' => 'Dropdown link',\n            'dropdown' => [\n                'items' => [\n                    'Action',\n                    'Another action',\n                    'Something else here',\n                ],\n                'attributes' => ['id' => 'navbarDropdownMenuLink'],\n            ],\n        ],\n    ]),\n    [\n        'brand' => 'Navbar',\n        'attributes' => ['id' => 'navbarNavDropdown'],\n    ]\n);\n")))),Object(l.b)("h3",{id:"forms"},"Forms"),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navbar/#forms"}),"Twitter bootstrap Documentation")),Object(l.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"result",mdxType:"TabItem"},i()('<nav class="bg-light&#x20;navbar&#x20;navbar-light">\n    <form action="" method="POST" name="form" role="form" class="form-inline" id="form">\n        <input name="search" type="search" placeholder="Search" aria-label="Search" class="form-control&#x20;mr-sm-2" value=""/>\n        <button type="submit" name="submit" class="btn&#x20;btn-outline-success&#x20;my-2&#x20;my-sm-0" value="">Search</button>\n    </form>\n</nav>\n<br/>\n<nav class="bg-light&#x20;navbar&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;">Navbar</a>\n    <form action="" method="POST" name="form" role="form" class="form-inline" id="form">\n        <input name="search" type="search" placeholder="Search" aria-label="Search" class="form-control&#x20;mr-sm-2" value=""/>\n        <button type="submit" name="submit" class="btn&#x20;btn-outline-success&#x20;my-2&#x20;my-sm-0" value="">Search</button>\n    </form>\n</nav>\n<br/>\n<nav class="bg-light&#x20;navbar&#x20;navbar-light">\n    <form action="" method="POST" name="form" role="form" class="form-inline" id="form">\n        <div class="input-group">\n            <div class="input-group-prepend">\n                <div class="input-group-text" id="basic-addon1">\n                    @\n                </div>\n            </div>\n            <input name="username" type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" class="form-control" value=""/>\n        </div>\n    </form>\n</nav>\n<br/>\n<nav class="bg-light&#x20;navbar&#x20;navbar-light">\n    <form action="" method="POST" name="form" role="form" class="form-inline" id="form">\n        <button type="button" name="main_button" class="btn&#x20;btn-outline-success" value="">Main button</button>\n        <button type="button" name="smaller_button" class="btn&#x20;btn-outline-secondary&#x20;btn-sm" value="">Smaller button</button>\n    </form>\n</nav>')),Object(l.b)(b.a,{value:"source",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(),\n    [\n        'expand' => false,\n        'toggler' => false,\n        'collapse' => false,\n        'form' => [\n            'elements' => [\n                [\n                    'spec' => [\n                        'name' => 'search',\n                        'attributes' => [\n                            'type' => 'search',\n                            'placeholder' => 'Search',\n                            'aria-label' => 'Search',\n                            'class' => 'mr-sm-2',\n                        ],\n                    ],\n                ],\n                [\n                    'spec' => [\n                        'type' => 'submit',\n                        'options' => [\n                            'label' => 'Search',\n                            'variant' => 'outline-success',\n                        ],\n                        'attributes' => ['class' => 'my-2 my-sm-0'],\n                    ],\n                ],\n            ],\n        ],\n    ]\n);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(),\n    [\n        'expand' => false,\n        'toggler' => false,\n        'collapse' => false,\n        'brand' => 'Navbar',\n        'form' => [\n            'elements' => [\n                [\n                    'spec' => [\n                        'name' => 'search',\n                        'attributes' => [\n                            'type' => 'search',\n                            'placeholder' => 'Search',\n                            'aria-label' => 'Search',\n                            'class' => 'mr-sm-2',\n                        ],\n                    ],\n                ],\n                [\n                    'spec' => [\n                        'type' => 'submit',\n                        'options' => [\n                            'label' => 'Search',\n                            'variant' => 'outline-success',\n                        ],\n                        'attributes' => ['class' => 'my-2 my-sm-0'],\n                    ],\n                ],\n            ],\n        ],\n    ]\n);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Input groups work, too:\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(),\n    [\n        'expand' => false,\n        'toggler' => false,\n        'collapse' => false,\n        'form' => [\n            'elements' => [\n                [\n                    'spec' => [\n                        'name' => 'username',\n                        'options' => [\n                            'add_on_prepend' => '@',\n                        ],\n                        'attributes' => [\n                            'type' => 'text',\n                            'placeholder' => 'Username',\n                            'aria-label' => 'Username',\n                            'aria-describedby' => 'basic-addon1',\n                        ],\n                    ],\n                ],\n            ],\n        ],\n    ]\n);\n\n// Various buttons are supported as part of these navbar forms, too.\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Input groups work, too:\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(),\n    [\n        'expand' => false,\n        'toggler' => false,\n        'collapse' => false,\n        'form' => [\n            'elements' => [\n                [\n                    'spec' => [\n                        'type' => 'button',\n                        'name' => 'main_button',\n                        'options' => [\n                            'label' => 'Main button',\n                            'variant' => 'outline-success',\n                        ],\n                    ],\n                ],\n                [\n                    'spec' => [\n                        'type' => 'button',\n                        'name' => 'smaller_button',\n                        'options' => [\n                            'label' => 'Smaller button',\n                            'variant' => 'outline-secondary',\n                            'size' => 'sm',\n                        ],\n                    ],\n                ],\n            ],\n        ],\n    ]\n);\n")))),Object(l.b)("h3",{id:"text"},"Text"),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navbar/#text"}),"Twitter bootstrap Documentation")),Object(l.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"result",mdxType:"TabItem"},i()('<nav class="bg-light&#x20;navbar&#x20;navbar-light">\n    <span class="navbar-text">Navbar text with an inline element</span>\n</nav>\n<br/>\n<nav class="bg-light&#x20;navbar&#x20;navbar-expand-lg&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;">Navbar w/ text</a>\n    <button type="button" name="navbar_toggler" class="navbar-toggler" data-toggle="collapse" aria-expanded="false" aria-label="Toggle&#x20;navigation" data-target="&#x23;navbarText" aria-controls="navbarText" value=""><span class="navbar-toggler-icon"></span></button>\n    <div class="collapse&#x20;navbar-collapse" id="navbarText">\n        <ul class="mr-auto&#x20;nav&#x20;navbar-nav">\n            <li class="&#x20;nav-item">\n                <a class="nav-link&#x20;active" href="&#x23;">Home <span class="sr-only">(current)</span></a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Features</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Pricing</a>\n            </li>\n        </ul>\n        <span class="navbar-text">Navbar text with an inline element</span>\n    </div>\n</nav>')),Object(l.b)(b.a,{value:"source",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(),\n    [\n        'text' => 'Navbar text with an inline element',\n        'expand' => false,\n        'toggler' => false,\n    ]\n);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation([\n        [\n            'label' => 'Home <span class=\"sr-only\">(current)</span>',\n            'uri' => '#',\n            'active' => true,\n        ],\n        ['label' => 'Features', 'uri' => '#'],\n        ['label' => 'Pricing', 'uri' => '#'],\n    ]),\n    [\n        'brand' => 'Navbar w/ text',\n        'text' => 'Navbar text with an inline element',\n        'attributes' => ['id' => 'navbarText'],\n    ]\n);\n")))),Object(l.b)("h2",{id:"color-schemes"},"Color schemes"),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navbar/#color-schemes"}),"Twitter bootstrap Documentation")),Object(l.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"result",mdxType:"TabItem"},i()('<nav class="bg-dark&#x20;navbar&#x20;navbar-dark&#x20;navbar-expand-lg">\n    <a class="navbar-brand" href="&#x23;">Navbar</a>\n    <button type="button" name="navbar_toggler" class="navbar-toggler" data-toggle="collapse" aria-expanded="false" aria-label="Toggle&#x20;navigation" value=""><span class="navbar-toggler-icon"></span></button>\n    <div class="collapse&#x20;navbar-collapse">\n        <ul class="mr-auto&#x20;nav&#x20;navbar-nav">\n            <li class="&#x20;nav-item">\n                <a class="nav-link&#x20;active" href="&#x23;">Home <span class="sr-only">(current)</span></a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Link</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Features</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Pricing</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">About</a>\n            </li>\n        </ul>\n        <form action="" method="POST" name="form" role="form" class="form-inline" id="form">\n            <input name="search" type="search" placeholder="Search" aria-label="Search" class="form-control&#x20;mr-sm-2" value=""/>\n            <button type="submit" name="submit" class="btn&#x20;btn-outline-success" value="">Search</button>\n        </form>\n    </div>\n</nav>\n<br/>\n<nav class="bg-primary&#x20;navbar&#x20;navbar-dark&#x20;navbar-expand-lg">\n    <a class="navbar-brand" href="&#x23;">Navbar</a>\n    <button type="button" name="navbar_toggler" class="navbar-toggler" data-toggle="collapse" aria-expanded="false" aria-label="Toggle&#x20;navigation" value=""><span class="navbar-toggler-icon"></span></button>\n    <div class="collapse&#x20;navbar-collapse">\n        <ul class="mr-auto&#x20;nav&#x20;navbar-nav">\n            <li class="&#x20;nav-item">\n                <a class="nav-link&#x20;active" href="&#x23;">Home <span class="sr-only">(current)</span></a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Link</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Features</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Pricing</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">About</a>\n            </li>\n        </ul>\n        <form action="" method="POST" name="form" role="form" class="form-inline" id="form">\n            <input name="search" type="search" placeholder="Search" aria-label="Search" class="form-control&#x20;mr-sm-2" value=""/>\n            <button type="submit" name="submit" class="btn&#x20;btn-outline-success" value="">Search</button>\n        </form>\n    </div>\n</nav>\n<br/>\n<nav class="navbar&#x20;navbar-dark&#x20;navbar-expand-lg" style="background-color&#x3A;&#x20;&#x23;e3f2fd&#x3B;">\n    <a class="navbar-brand" href="&#x23;">Navbar</a>\n    <button type="button" name="navbar_toggler" class="navbar-toggler" data-toggle="collapse" aria-expanded="false" aria-label="Toggle&#x20;navigation" value=""><span class="navbar-toggler-icon"></span></button>\n    <div class="collapse&#x20;navbar-collapse">\n        <ul class="mr-auto&#x20;nav&#x20;navbar-nav">\n            <li class="&#x20;nav-item">\n                <a class="nav-link&#x20;active" href="&#x23;">Home <span class="sr-only">(current)</span></a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Link</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Features</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">Pricing</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" href="&#x23;">About</a>\n            </li>\n        </ul>\n        <form action="" method="POST" name="form" role="form" class="form-inline" id="form">\n            <input name="search" type="search" placeholder="Search" aria-label="Search" class="form-control&#x20;mr-sm-2" value=""/>\n            <button type="submit" name="submit" class="btn&#x20;btn-outline-success" value="">Search</button>\n        </form>\n    </div>\n</nav>')),Object(l.b)(b.a,{value:"source",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"$oNavigationContainer = new \\Laminas\\Navigation\\Navigation([\n    ['label' => 'Home <span class=\"sr-only\">(current)</span>', 'uri' => '#', 'active' => true],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Features', 'uri' => '#'],\n    ['label' => 'Pricing', 'uri' => '#'],\n    ['label' => 'About', 'uri' => '#'],\n]);\n\n$aOptions = [\n    'brand' => 'Navbar',\n    'form' => [\n        'elements' => [\n            [\n                'spec' => [\n                    'name' => 'search',\n                    'attributes' => [\n                        'type' => 'search',\n                        'placeholder' => 'Search',\n                        'aria-label' => 'Search',\n                        'class' => 'mr-sm-2',\n                    ],\n                ],\n            ],\n            [\n                'spec' => [\n                    'type' => 'submit',\n                    'options' => [\n                        'label' => 'Search',\n                        'variant' => 'outline-success',\n                    ],\n                ],\n            ],\n        ],\n    ],\n];\n\n// Navbar dark, background dark\n$aOptions['variant'] = 'dark';\n$aOptions['background'] = 'dark';\n\necho $this->navigation()->navbar()->render($oNavigationContainer, $aOptions);\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Navbar dark, background primary\n$aOptions['variant'] = 'dark';\n$aOptions['background'] = 'primary';\n\necho $this->navigation()->navbar()->render($oNavigationContainer, $aOptions);\necho PHP_EOL . '<br/>' . PHP_EOL;\n\n// Navbar light, custom background-color\n$aOptions['variant'] = 'dark';\n$aOptions['background'] = false;\n$aOptions['attributes'] = ['style' => 'background-color: #e3f2fd;'];\n\necho $this->navigation()->navbar()->render($oNavigationContainer, $aOptions);\n")))),Object(l.b)("h2",{id:"containers"},"Containers"),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navbar/#containers"}),"Twitter bootstrap Documentation")),Object(l.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"result",mdxType:"TabItem"},i()('<div class="container">\n    <nav class="bg-light&#x20;navbar&#x20;navbar-expand-lg&#x20;navbar-light">\n        <a class="navbar-brand" href="&#x23;">Navbar</a>\n    </nav>\n</div>\n<br/>\n<nav class="bg-light&#x20;navbar&#x20;navbar-expand-lg&#x20;navbar-light">\n    <div class="container">\n        <a class="navbar-brand" href="&#x23;">Navbar</a>\n    </div>\n</nav>')),Object(l.b)(b.a,{value:"source",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(),\n    [\n        'brand' => 'Navbar',\n        'container' => 'wrap',\n        'toggler' => false,\n    ]\n);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(),\n    [\n        'brand' => 'Navbar',\n        'container' => 'within',\n        'toggler' => false,\n    ]\n);\n")))),Object(l.b)("h2",{id:"placement"},"Placement"),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navbar/#placement"}),"Twitter bootstrap Documentation")),Object(l.b)(o.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"result",mdxType:"TabItem"},i()('<nav class="bg-light&#x20;navbar&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;">Default</a>\n</nav>\n<br/>\n<nav class="bg-light&#x20;fixed-top&#x20;navbar&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;">Fixed top</a>\n</nav>\n<br/>\n<nav class="bg-light&#x20;fixed-bottom&#x20;navbar&#x20;navbar-light">\n    <a class="navbar-brand" href="&#x23;">Fixed bottom</a>\n</nav>\n<br/>\n<nav class="bg-light&#x20;navbar&#x20;navbar-light&#x20;sticky-top">\n    <a class="navbar-brand" href="&#x23;">Sticky top</a>\n</nav>\n<br/>\n')),Object(l.b)(b.a,{value:"source",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"foreach ([\n    false => 'Default',\n    'fixed-top' => 'Fixed top',\n    'fixed-bottom' => 'Fixed bottom',\n    'sticky-top' => 'Sticky top',\n] as $sPlacement => $sBrand) {\n    echo $this->navigation()->navbar()->render(\n        new \\Laminas\\Navigation\\Navigation(),\n        [\n            'brand' => $sBrand,\n            'placement' => $sPlacement,\n            'toggler' => false,\n            'expand' => false,\n        ]\n    );\n    echo PHP_EOL . '<br/>' . PHP_EOL;\n}\n")))))}d.isMDXComponent=!0}}]);