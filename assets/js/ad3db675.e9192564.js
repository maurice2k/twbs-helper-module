"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[447],{1400:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),l=a(5488),s=a(5162),p=(a(814),a(4321)),h=["components"],r={sidebar_position:21,label:"Scrollspy"},m="Scrollspy",d={unversionedId:"usage/components/scrollspy",id:"usage/components/scrollspy",title:"Scrollspy",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/scrollspy.mdx",sourceDirName:"usage/components",slug:"/usage/components/scrollspy",permalink:"/twbs-helper-module/docs/usage/components/scrollspy",draft:!1,editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/scrollspy.mdx",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,label:"Scrollspy"},sidebar:"tutorialSidebar",previous:{title:"Progress",permalink:"/twbs-helper-module/docs/usage/components/progress"},next:{title:"Spinners",permalink:"/twbs-helper-module/docs/usage/components/spinners"}},g={},c=[{value:"Example in navbar",id:"example-in-navbar",level:2},{value:"Example with nested nav",id:"example-with-nested-nav",level:2},{value:"Example with list-group",id:"example-with-list-group",level:2}],u={toc:c};function y(e){var t=e.components,a=(0,o.Z)(e,h);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scrollspy"},"Scrollspy"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/scrollspy/"},"Twitter bootstrap Documentation")),(0,i.kt)("h2",{id:"example-in-navbar"},"Example in navbar"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/scrollspy/#example-in-navbar"},"Twitter bootstrap Documentation")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,i.kt)(p.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,i.kt)("div",{dangerouslySetInnerHTML:{__html:'<nav class="bg-light navbar navbar-light px-3" id="navbar-example2">\n    <a class="navbar-brand" href="#">Navbar</a>\n    <ul class="nav-pills navbar-nav">\n        <li class="nav-item">\n            <a aria-current="page" class="active nav-link" href="#scrollspyHeading1">First</a>\n        </li>\n        <li class="nav-item">\n            <a class="nav-link" href="#scrollspyHeading2">Second</a>\n        </li>\n        <li class="dropdown nav-item">\n            <a aria-expanded="false" class="dropdown-toggle nav-link" data-bs-toggle="dropdown" href="#" role="button">Dropdown</a>\n            <ul class="dropdown-menu">\n                <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>\n                <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>\n                <li><hr class="dropdown-divider"></li>\n                <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>\n            </ul>\n        </li>\n    </ul>\n</nav>\n<div class="scrollspy-example" data-bs-offset="0" data-bs-spy="scroll" data-bs-target="#navbar-example2" tabindex="0">\n    <h4 id="scrollspyHeading1">First heading</h4>\n    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n    <h4 id="scrollspyHeading2">Second heading</h4>\n    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n    <h4 id="scrollspyHeading3">Third heading</h4>\n    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n    <h4 id="scrollspyHeading4">Fourth heading</h4>\n    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n    <h4 id="scrollspyHeading5">Fifth heading</h4>\n    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n</div>'}}))),(0,i.kt)(s.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->navigation()->navbar()->render(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'First',\n                'uri'    => '#scrollspyHeading1',\n                'active' => true,\n            ],\n            [\n                'label' => 'Second',\n                'uri'   => '#scrollspyHeading2',\n            ],\n            [\n                'type'     => \\TwbsHelper\\Navigation\\Page\\DropdownPage::class,\n                'label'    => 'Dropdown',\n                'dropdown' => [\n                    'items' => [\n                        'Third' => ['attributes' => ['href' => '#scrollspyHeading3']],\n                        'Fourth' => ['attributes' => ['href' => '#scrollspyHeading4']],\n                        '---',\n                        'Fifth' => ['attributes' => ['href' => '#scrollspyHeading5']],\n                    ],\n                ],\n            ],\n        ],\n    ),\n    [\n        'brand'      => 'Navbar',\n        'expand'     => false,\n        'toggler'    => false,\n        'collapse'   => false,\n        'nav'        => [    'pills' => true    ],\n        'attributes' => [\n            'id'    => 'navbar-example2',\n            'class' => 'px-3',\n        ],\n\n    ]\n);\n\necho '<div class=\"scrollspy-example\" data-bs-offset=\"0\" data-bs-spy=\"scroll\" '.'data-bs-target=\"#navbar-example2\" tabindex=\"0\">';\nforeach ([\n    'First heading',\n    'Second heading',\n    'Third heading',\n    'Fourth heading',\n    'Fifth heading',\n] as $key => $label) {\n    echo '    <h4 id=\"scrollspyHeading'.($key + 1).'\">'.$label.'</h4>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>';\n}\n\necho '</div>';\n\n")))),(0,i.kt)("h2",{id:"example-with-nested-nav"},"Example with nested nav"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/scrollspy/#example-with-nested-nav"},"Twitter bootstrap Documentation")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,i.kt)(p.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,i.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="row">\n    <div class="col-4">\n        <nav class="align-items-stretch bg-light flex-column navbar navbar-light p-3" id="navbar-example3">\n            <a class="navbar-brand" href="#">Navbar</a>\n            <nav class="flex-column nav-pills navbar-nav">\n                <a aria-current="page" class="active nav-link" href="#item-1">Item 1</a>\n                <nav class="flex-column nav nav-pills">\n                    <a class="ms-3 my-1 nav-link" href="#item-1-1">Item 1-1</a>\n                    <a class="ms-3 my-1 nav-link" href="#item-1-2">Item 1-2</a>\n                </nav>\n                <a class="nav-link" href="#item-2">Item 2</a>\n                <a class="nav-link" href="#item-3">Item 3</a>\n                <nav class="flex-column nav nav-pills">\n                    <a class="ms-3 my-1 nav-link" href="#item-3-1">Item 3-1</a>\n                    <a class="ms-3 my-1 nav-link" href="#item-3-2">Item 3-2</a>\n                </nav>\n            </nav>\n        </nav>\n    </div>\n    <div class="col-8">\n        <div class="scrollspy-example-2" data-bs-offset="0" data-bs-spy="scroll" data-bs-target="#navbar-example3" tabindex="0">\n            <h4 id="item-1">Item 1</h4>\n            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n            <h5 id="item-1-1">Item 1-1</h5>\n            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n            <h5 id="item-1-2">Item 1-2</h5>\n            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n            <h4 id="item-2">Item 2</h4>\n            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n            <h4 id="item-3">Item 3</h4>\n            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n            <h5 id="item-3-1">Item 3-1</h5>\n            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n            <h5 id="item-3-2">Item 3-2</h5>\n            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n        </div>\n    </div>\n</div>'}}))),(0,i.kt)(s.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->gridRow(\n    [\n        [\n            $this->navigation()->navbar()->render(\n                new \\Laminas\\Navigation\\Navigation(\n                    [\n                        [\n                            'label'  => 'Item 1',\n                            'uri'    => '#item-1',\n                            'active' => true,\n                            'pages'  => [\n                                [\n                                    'label' => 'Item 1-1',\n                                    'uri'   => '#item-1-1',\n                                    'class' => 'ms-3 my-1',\n                                ],\n                                [\n                                    'label' => 'Item 1-2',\n                                    'uri'   => '#item-1-2',\n                                    'class' => 'ms-3 my-1',\n                                ],\n                            ],\n                        ],\n                        [\n                            'label' => 'Item 2',\n                            'uri'   => '#item-2',\n                        ],\n                        [\n                            'label' => 'Item 3',\n                            'uri'   => '#item-3',\n                            'pages' => [\n                                [\n                                    'label' => 'Item 3-1',\n                                    'uri'   => '#item-3-1',\n                                    'class' => 'ms-3 my-1',\n                                ],\n                                [\n                                    'label' => 'Item 3-2',\n                                    'uri'   => '#item-3-2',\n                                    'class' => 'ms-3 my-1',\n                                ],\n                            ],\n                        ],\n                    ],\n                ),\n                [\n                    'brand'      => 'Navbar',\n                    'expand'     => false,\n                    'toggler'    => false,\n                    'collapse'   => false,\n                    'nav'        => [\n                        'vertical' => true,\n                        'pills'    => true,\n                        'list'     => false,\n                    ],\n                    'attributes' => [\n                        'id'    => 'navbar-example3',\n                        'class' => 'align-items-stretch flex-column p-3',\n                    ],\n                ]\n            ),\n            ['column' => 4],\n        ],\n        [\n            '<div class=\"scrollspy-example-2\" data-bs-offset=\"0\" data-bs-spy=\"scroll\" '.'data-bs-target=\"#navbar-example3\" tabindex=\"0\">'.'    <h4 id=\"item-1\">Item 1</h4>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, '.'the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>'.PHP_EOL.'    <h5 id=\"item-1-1\">Item 1-1</h5>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, '.'the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>'.PHP_EOL.'    <h5 id=\"item-1-2\">Item 1-2</h5>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, '.'the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>'.PHP_EOL.'    <h4 id=\"item-2\">Item 2</h4>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, '.'the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>'.PHP_EOL.'    <h4 id=\"item-3\">Item 3</h4>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, '.'the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>'.PHP_EOL.'    <h5 id=\"item-3-1\">Item 3-1</h5>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, '.'the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>'.PHP_EOL.'    <h5 id=\"item-3-2\">Item 3-2</h5>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, '.'the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>'.PHP_EOL.'</div>',\n            ['column' => 8],\n        ],\n    ]\n);\n\n")))),(0,i.kt)("h2",{id:"example-with-list-group"},"Example with list-group"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/scrollspy/#example-with-list-group"},"Twitter bootstrap Documentation")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,i.kt)(p.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,i.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="row">\n    <div class="col-4">\n        <div class="list-group" id="list-example">\n            <a aria-current="true" class="active list-group-item list-group-item-action" href="#list-item-1">Item 1</a>\n            <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>\n            <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>\n            <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>\n        </div>\n    </div>\n    <div class="col-8">\n        <div class="scrollspy-example" data-bs-offset="0" data-bs-spy="scroll" data-bs-target="#list-example" tabindex="0">\n            <h4 id="list-item-1">Item 1</h4>\n            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n            <h4 id="list-item-2">Item 2</h4>\n            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n            <h4 id="list-item-3">Item 3</h4>\n            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n            <h4 id="list-item-4">Item 4</h4>\n            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It\'s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>\n        </div>\n    </div>\n</div>'}}))),(0,i.kt)(s.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->gridRow(\n    [\n        [\n            $this->listGroup(\n                [\n                    'Item 1' => [\n                        'attributes' => ['href' => '#list-item-1'],\n                        'active'     => true,\n                    ],\n                    'Item 2' => ['attributes' => ['href' => '#list-item-2']],\n                    'Item 3' => ['attributes' => ['href' => '#list-item-3']],\n                    'Item 4' => ['attributes' => ['href' => '#list-item-4']],\n\n                ],\n                [\n                    'type' => 'action',\n                    'id'   => 'list-example',\n                ]\n            ),\n            ['column' => 4],\n        ],\n        [\n            '<div class=\"scrollspy-example\" data-bs-offset=\"0\" data-bs-spy=\"scroll\" '.'data-bs-target=\"#list-example\" tabindex=\"0\">'.'    <h4 id=\"list-item-1\">Item 1</h4>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, '.'the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>'.PHP_EOL.'    <h4 id=\"list-item-2\">Item 2</h4>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, '.'the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>'.PHP_EOL.'    <h4 id=\"list-item-3\">Item 3</h4>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, '.'the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>'.PHP_EOL.'    <h4 id=\"list-item-4\">Item 4</h4>'.'    <p>This is some placeholder content for the scrollspy page. '.'Note that as you scroll down the page, '.'the appropriate navigation link is highlighted. '.'It\\'s repeated throughout the component example. '.'We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>'.PHP_EOL.'</div>',\n            ['column' => 8],\n        ],\n    ]\n);\n\n")))))}y.isMDXComponent=!0}}]);