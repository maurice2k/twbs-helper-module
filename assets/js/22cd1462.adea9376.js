"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3502],{9829:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return d},default:function(){return b}});var n=i(7462),l=i(3366),s=(i(7294),i(3905)),a=i(6396),o=i(8215),r=(i(9055),i(4321)),u=["components"],p={sidebar_position:12,label:"List group"},m="List group",c={unversionedId:"usage/components/list-group",id:"usage/components/list-group",title:"List group",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/list-group.mdx",sourceDirName:"usage/components",slug:"/usage/components/list-group",permalink:"/twbs-helper-module/docs/usage/components/list-group",editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/list-group.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,label:"List group"},sidebar:"tutorialSidebar",previous:{title:"Dropdowns",permalink:"/twbs-helper-module/docs/usage/components/dropdowns"},next:{title:"Modal",permalink:"/twbs-helper-module/docs/usage/components/modal"}},d=[{value:"Basic example",id:"basic-example",children:[],level:2},{value:"Active items",id:"active-items",children:[],level:2},{value:"Disabled items",id:"disabled-items",children:[],level:2},{value:"Links and buttons",id:"links-and-buttons",children:[],level:2},{value:"Flush",id:"flush",children:[],level:2},{value:"Numbered",id:"numbered",children:[],level:2},{value:"Horizontal",id:"horizontal",children:[],level:2},{value:"Contextual classes",id:"contextual-classes",children:[],level:2},{value:"With badges",id:"with-badges",children:[],level:2},{value:"Custom content",id:"custom-content",children:[],level:2},{value:"Checkboxes and radios",id:"checkboxes-and-radios",children:[],level:2}],g={toc:d};function b(t){var e=t.components,i=(0,l.Z)(t,u);return(0,s.kt)("wrapper",(0,n.Z)({},g,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"list-group"},"List group"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/"},"Twitter bootstrap Documentation")),(0,s.kt)("h2",{id:"basic-example"},"Basic example"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/#basic-example"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="list-group">\n    <li class="list-group-item">An item</li>\n    <li class="list-group-item">A second item</li>\n    <li class="list-group-item">A third item</li>\n    <li class="list-group-item">A fourth item</li>\n    <li class="list-group-item">And a fifth one</li>\n</ul>'}}))),(0,s.kt)(o.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->listGroup(\n    [\n        'An item',\n        'A second item',\n        'A third item',\n        'A fourth item',\n        'And a fifth one',\n    ]\n);\n\n")))),(0,s.kt)("h2",{id:"active-items"},"Active items"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/#active-items"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="list-group">\n    <li aria-current="true" class="active list-group-item">An active item</li>\n    <li class="list-group-item">A second item</li>\n    <li class="list-group-item">A third item</li>\n    <li class="list-group-item">A fourth item</li>\n    <li class="list-group-item">And a fifth one</li>\n</ul>'}}))),(0,s.kt)(o.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->listGroup(\n    [\n        'An active item' => ['active' => true],\n        'A second item',\n        'A third item',\n        'A fourth item',\n        'And a fifth one',\n    ]\n);\n\n")))),(0,s.kt)("h2",{id:"disabled-items"},"Disabled items"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/#disabled-items"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="list-group">\n    <li aria-disabled="true" class="disabled list-group-item">A disabled item</li>\n    <li class="list-group-item">A second item</li>\n    <li class="list-group-item">A third item</li>\n    <li class="list-group-item">A fourth item</li>\n    <li class="list-group-item">And a fifth one</li>\n</ul>'}}))),(0,s.kt)(o.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->listGroup(\n    [\n        'A disabled item' => ['disabled' => true],\n        'A second item',\n        'A third item',\n        'A fourth item',\n        'And a fifth one',\n    ]\n);\n\n")))),(0,s.kt)("h2",{id:"links-and-buttons"},"Links and buttons"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/#links-and-buttons"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="list-group">\n    <a aria-current="true" class="active list-group-item list-group-item-action" href="#">The current link item</a>\n    <a class="list-group-item list-group-item-action" href="#">A second item</a>\n    <a class="list-group-item list-group-item-action" href="#">A third item</a>\n    <a class="list-group-item list-group-item-action" href="#">A fourth item</a>\n    <a aria-disabled="true" class="disabled list-group-item list-group-item-action" href="#" tabindex="-1">A disabled link item</a>\n</div>\n<br></br>\n<div class="list-group">\n    <button aria-current="true" class="active list-group-item list-group-item-action" type="button">The current button</button>\n    <button class="list-group-item list-group-item-action" type="button">A second item</button>\n    <button class="list-group-item list-group-item-action" type="button">A third button item</button>\n    <button class="list-group-item list-group-item-action" type="button">A fourth button item</button>\n    <button aria-disabled="true" class="list-group-item list-group-item-action" disabled="disabled" type="button">A disabled button item</button>\n</div>'}}))),(0,s.kt)(o.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->listGroup(\n    [\n        'The current link item' => [\n            'active'     => true,\n            'attributes' => ['href' => '#'],\n        ],\n        'A second item'         => ['attributes' => ['href' => '#']],\n        'A third item'          => ['attributes' => ['href' => '#']],\n        'A fourth item'         => ['attributes' => ['href' => '#']],\n        'A disabled link item'  => [\n            'disabled'   => true,\n            'attributes' => ['href' => '#'],\n        ],\n    ],\n    ['type' => 'action']\n);\n\necho PHP_EOL.'<br/>';\n\necho $this->listGroup(\n    [\n        'The current button' => ['active' => true],\n        'A second item',\n        'A third button item',\n        'A fourth button item',\n        'A disabled button item' => ['disabled' => true],\n    ],\n    ['type' => 'button']\n);\n\n")))),(0,s.kt)("h2",{id:"flush"},"Flush"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/#flush"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="list-group list-group-flush">\n    <li class="list-group-item">An item</li>\n    <li class="list-group-item">A second item</li>\n    <li class="list-group-item">A third item</li>\n    <li class="list-group-item">A fourth item</li>\n    <li class="list-group-item">And a fifth one</li>\n</ul>'}}))),(0,s.kt)(o.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->listGroup(\n    [\n        'An item',\n        'A second item',\n        'A third item',\n        'A fourth item',\n        'And a fifth one',\n    ],\n    ['flush' => true]\n);\n\n")))),(0,s.kt)("h2",{id:"numbered"},"Numbered"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/#numbered"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<ol class="list-group list-group-numbered">\n    <li class="list-group-item">A list item</li>\n    <li class="list-group-item">A list item</li>\n    <li class="list-group-item">A list item</li>\n</ol>\n<br></br>\n<ol class="list-group list-group-numbered">\n    <li class="align-items-start d-flex justify-content-between list-group-item">\n        <div class="ms-2 me-auto">\n        <div class="fw-bold">Subheading</div>\n        Content for list item\n        </div>\n        <span class="badge bg-primary rounded-pill">14</span>\n    </li>\n    <li class="align-items-start d-flex justify-content-between list-group-item">\n        <div class="ms-2 me-auto">\n        <div class="fw-bold">Subheading</div>\n        Content for list item\n        </div>\n        <span class="badge bg-primary rounded-pill">14</span>\n    </li>\n    <li class="align-items-start d-flex justify-content-between list-group-item">\n        <div class="ms-2 me-auto">\n        <div class="fw-bold">Subheading</div>\n        Content for list item\n        </div>\n        <span class="badge bg-primary rounded-pill">14</span>\n    </li>\n</ol>'}}))),(0,s.kt)(o.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->listGroup(\n    [\n        'A list item',\n        'A list item',\n        'A list item',\n    ],\n    ['numbered' => true]\n);\n\necho PHP_EOL.'<br/>';\n\necho $this->listGroup(\n    [\n        [\n            'content' => '<div class=\"ms-2 me-auto\">'.'<div class=\"fw-bold\">Subheading</div>'.'Content for list item'.'</div>',\n            'badge'   => [\n                14,\n                [\n                    'type'    => 'pill',\n                    'variant' => 'primary',\n                ],\n            ],\n        ],\n        [\n            'content' => '<div class=\"ms-2 me-auto\">'.'<div class=\"fw-bold\">Subheading</div>'.'Content for list item'.'</div>',\n            'badge'   => [\n                14,\n                [\n                    'type'    => 'pill',\n                    'variant' => 'primary',\n                ],\n            ],\n        ],\n        [\n            'content' => '<div class=\"ms-2 me-auto\">'.'<div class=\"fw-bold\">Subheading</div>'.'Content for list item'.'</div>',\n            'badge'   => [\n                14,\n                [\n                    'type'    => 'pill',\n                    'variant' => 'primary',\n                ],\n            ],\n        ],\n    ],\n    ['numbered' => true]\n);\n\n")))),(0,s.kt)("h2",{id:"horizontal"},"Horizontal"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/#horizontal"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="list-group list-group-horizontal">\n    <li class="list-group-item">An item</li>\n    <li class="list-group-item">A second item</li>\n    <li class="list-group-item">A third item</li>\n</ul>\n<br></br>\n<ul class="list-group list-group-horizontal-sm">\n    <li class="list-group-item">An item</li>\n    <li class="list-group-item">A second item</li>\n    <li class="list-group-item">A third item</li>\n</ul>\n<br></br>\n<ul class="list-group list-group-horizontal-md">\n    <li class="list-group-item">An item</li>\n    <li class="list-group-item">A second item</li>\n    <li class="list-group-item">A third item</li>\n</ul>\n<br></br>\n<ul class="list-group list-group-horizontal-lg">\n    <li class="list-group-item">An item</li>\n    <li class="list-group-item">A second item</li>\n    <li class="list-group-item">A third item</li>\n</ul>\n<br></br>\n<ul class="list-group list-group-horizontal-xl">\n    <li class="list-group-item">An item</li>\n    <li class="list-group-item">A second item</li>\n    <li class="list-group-item">A third item</li>\n</ul>\n<br></br>\n<ul class="list-group list-group-horizontal-xxl">\n    <li class="list-group-item">An item</li>\n    <li class="list-group-item">A second item</li>\n    <li class="list-group-item">A third item</li>\n</ul>'}}))),(0,s.kt)(o.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// Add option 'horizontal' to change the layout of list group items from vertical to horizontal\necho $this->listGroup(\n    [\n        'An item',\n        'A second item',\n        'A third item',\n    ],\n    ['horizontal' => true]\n);\n\n// Alternatively, choose a responsive variant `sm|md|lg|xl|xxl`\n// to make a list group horizontal starting at that breakpoint\u2019s\nforeach (['sm', 'md', 'lg', 'xl', 'xxl'] as $breakpoint) {\n    echo PHP_EOL.'<br/>';\n\n    echo $this->listGroup(\n        [\n            'An item',\n            'A second item',\n            'A third item',\n        ],\n        ['horizontal' => $breakpoint]\n    );\n}\n\n")))),(0,s.kt)("h2",{id:"contextual-classes"},"Contextual classes"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/#contextual-classes"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="list-group">\n    <li class="list-group-item">A simple default list group item</li>\n    <li class="list-group-item list-group-item-primary">A simple primary list group item</li>\n    <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>\n    <li class="list-group-item list-group-item-success">A simple success list group item</li>\n    <li class="list-group-item list-group-item-danger">A simple danger list group item</li>\n    <li class="list-group-item list-group-item-warning">A simple warning list group item</li>\n    <li class="list-group-item list-group-item-info">A simple info list group item</li>\n    <li class="list-group-item list-group-item-light">A simple light list group item</li>\n    <li class="list-group-item list-group-item-dark">A simple dark list group item</li>\n</ul>\n<br></br>\n<div class="list-group">\n    <a class="list-group-item list-group-item-action" href="#">A simple default list group item</a>\n    <a class="list-group-item list-group-item-action list-group-item-primary" href="#">A simple primary list group item</a>\n    <a class="list-group-item list-group-item-action list-group-item-secondary" href="#">A simple secondary list group item</a>\n    <a class="list-group-item list-group-item-action list-group-item-success" href="#">A simple success list group item</a>\n    <a class="list-group-item list-group-item-action list-group-item-danger" href="#">A simple danger list group item</a>\n    <a class="list-group-item list-group-item-action list-group-item-warning" href="#">A simple warning list group item</a>\n    <a class="list-group-item list-group-item-action list-group-item-info" href="#">A simple info list group item</a>\n    <a class="list-group-item list-group-item-action list-group-item-light" href="#">A simple light list group item</a>\n    <a class="list-group-item list-group-item-action list-group-item-dark" href="#">A simple dark list group item</a>\n</div>'}}))),(0,s.kt)(o.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// Use option 'variant' to style list items with a stateful background and color\necho $this->listGroup(\n    [\n        'A simple default list group item',\n        'A simple primary list group item' => ['variant' => 'primary'],\n        'A simple secondary list group item' => ['variant' => 'secondary'],\n        'A simple success list group item' => ['variant' => 'success'],\n        'A simple danger list group item' => ['variant' => 'danger'],\n        'A simple warning list group item' => ['variant' => 'warning'],\n        'A simple info list group item' => ['variant' => 'info'],\n        'A simple light list group item' => ['variant' => 'light'],\n        'A simple dark list group item' => ['variant' => 'dark'],\n    ]\n);\n\necho PHP_EOL.'<br/>';\n\n// Contextual classes also work with .list-group-item-action\necho $this->listGroup(\n    [\n        'A simple default list group item'   => ['attributes' => ['href' => '#']],\n        'A simple primary list group item'   => [\n            'variant'    => 'primary',\n            'attributes' => ['href' => '#'],\n        ],\n        'A simple secondary list group item' => [\n            'variant'    => 'secondary',\n            'attributes' => ['href' => '#'],\n        ],\n        'A simple success list group item'   => [\n            'variant'    => 'success',\n            'attributes' => ['href' => '#'],\n        ],\n        'A simple danger list group item'    => [\n            'variant'    => 'danger',\n            'attributes' => ['href' => '#'],\n        ],\n        'A simple warning list group item'   => [\n            'variant'    => 'warning',\n            'attributes' => ['href' => '#'],\n        ],\n        'A simple info list group item'      => [\n            'variant'    => 'info',\n            'attributes' => ['href' => '#'],\n        ],\n        'A simple light list group item'     => [\n            'variant'    => 'light',\n            'attributes' => ['href' => '#'],\n        ],\n        'A simple dark list group item'      => [\n            'variant'    => 'dark',\n            'attributes' => ['href' => '#'],\n        ],\n    ],\n    ['type' => 'action']\n);\n\n")))),(0,s.kt)("h2",{id:"with-badges"},"With badges"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/#with-badges"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="list-group">\n    <li class="align-items-center d-flex justify-content-between list-group-item">\n        A list item\n        <span class="badge bg-primary rounded-pill">14</span>\n    </li>\n    <li class="align-items-center d-flex justify-content-between list-group-item">\n        A second list item\n        <span class="badge bg-primary rounded-pill">2</span>\n    </li>\n    <li class="align-items-center d-flex justify-content-between list-group-item">\n        A third list item\n        <span class="badge bg-primary rounded-pill">1</span>\n    </li>\n</ul>'}}))),(0,s.kt)(o.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->listGroup(\n    [\n        'A list item'        => [\n            'badge' => [\n                14,\n                [\n                    'type'    => 'pill',\n                    'variant' => 'primary',\n                ],\n            ],\n        ],\n        'A second list item' => [\n            'badge' => [\n                2,\n                [\n                    'type'    => 'pill',\n                    'variant' => 'primary',\n                ],\n            ],\n        ],\n        'A third list item'  => [\n            'badge' => [\n                1,\n                [\n                    'type'    => 'pill',\n                    'variant' => 'primary',\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h2",{id:"custom-content"},"Custom content"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/#custom-content"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="list-group">\n    <a aria-current="true" class="active list-group-item list-group-item-action" href="#">\n        <div class="d-flex w-100 justify-content-between">\n            <h5 class="mb-1">List group item heading</h5>\n            <small>3 days ago</small>\n        </div>\n        <p class="mb-1">Some placeholder content in a paragraph.</p>\n        <small>And some small print.</small>\n    </a>\n    <a class="list-group-item list-group-item-action" href="#">\n        <div class="d-flex w-100 justify-content-between">\n            <h5 class="mb-1">List group item heading</h5>\n            <small>3 days ago</small>\n        </div>\n        <p class="mb-1">Some placeholder content in a paragraph.</p>\n        <small>And some small print.</small>\n    </a>\n    <a class="list-group-item list-group-item-action" href="#">\n        <div class="d-flex w-100 justify-content-between">\n            <h5 class="mb-1">List group item heading</h5>\n            <small>3 days ago</small>\n        </div>\n        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        <small>Donec id elit non mi porta.</small>\n    </a>\n</div>'}}))),(0,s.kt)(o.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->listGroup(\n    [\n        [\n            'content'    => '<div class=\"d-flex w-100 justify-content-between\">'.'    <h5 class=\"mb-1\">List group item heading</h5>'.'    <small>3 days ago</small>'.'</div>'.'<p class=\"mb-1\">Some placeholder content in a paragraph.</p>'.'<small>And some small print.</small>',\n            'attributes' => ['href' => '#'],\n            'active'     => true,\n        ],\n        [\n            'content'    => '<div class=\"d-flex w-100 justify-content-between\">'.'    <h5 class=\"mb-1\">List group item heading</h5>'.'    <small>3 days ago</small>'.'</div>'.'<p class=\"mb-1\">Some placeholder content in a paragraph.</p>'.'<small>And some small print.</small>',\n            'attributes' => ['href' => '#'],\n        ],\n        [\n            'content'    => '<div class=\"d-flex w-100 justify-content-between\">'.'    <h5 class=\"mb-1\">List group item heading</h5>'.'    <small>3 days ago</small>'.'</div>'.'<p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. '.'Maecenas sed diam eget risus varius blandit.</p>'.'<small>Donec id elit non mi porta.</small>',\n            'attributes' => ['href' => '#'],\n        ],\n    ],\n    ['type' => 'action']\n);\n\n")))),(0,s.kt)("h2",{id:"checkboxes-and-radios"},"Checkboxes and radios"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/list-group/#checkboxes-and-radios"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(r.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="list-group">\n    <li class="list-group-item">\n        <input type="hidden" name="checkbox" value="0"></input><input aria-label="..." class="form-check-input me-1" name="checkbox" type="checkbox" value="1"></input>\n        First checkbox\n    </li>\n    <li class="list-group-item">\n        <input type="hidden" name="checkbox" value="0"></input><input aria-label="..." class="form-check-input me-1" name="checkbox" type="checkbox" value="1"></input>\n        Second checkbox\n    </li>\n    <li class="list-group-item">\n        <input type="hidden" name="checkbox" value="0"></input><input aria-label="..." class="form-check-input me-1" name="checkbox" type="checkbox" value="1"></input>\n        Third checkbox\n    </li>\n    <li class="list-group-item">\n        <input type="hidden" name="checkbox" value="0"></input><input aria-label="..." class="form-check-input me-1" name="checkbox" type="checkbox" value="1"></input>\n        Fourth checkbox\n    </li>\n</ul>\n<br></br>\n<ul class="list-group">\n    <label class="list-group-item">\n        <input type="hidden" name="checkbox" value="0"></input><input class="form-check-input me-1" name="checkbox" type="checkbox" value="1"></input>\n        First checkbox\n    </label>\n    <label class="list-group-item">\n        <input type="hidden" name="checkbox" value="0"></input><input class="form-check-input me-1" name="checkbox" type="checkbox" value="1"></input>\n        Second checkbox\n    </label>\n    <label class="list-group-item">\n        <input type="hidden" name="checkbox" value="0"></input><input class="form-check-input me-1" name="checkbox" type="checkbox" value="1"></input>\n        Third checkbox\n    </label>\n    <label class="list-group-item">\n        <input type="hidden" name="checkbox" value="0"></input><input class="form-check-input me-1" name="checkbox" type="checkbox" value="1"></input>\n        Fourth checkbox\n    </label>\n</ul>'}}))),(0,s.kt)(o.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->listGroup(\n    [\n        'First checkbox'  => [\n            'checkbox' => ['attributes' => ['aria-label' => '...']],\n        ],\n        'Second checkbox' => [\n            'checkbox' => ['attributes' => ['aria-label' => '...']],\n        ],\n        'First checkbox'  => [\n            'checkbox' => ['attributes' => ['aria-label' => '...']],\n        ],\n        'Third checkbox'  => [\n            'checkbox' => ['attributes' => ['aria-label' => '...']],\n        ],\n        'Fourth checkbox' => [\n            'checkbox' => ['attributes' => ['aria-label' => '...']],\n        ],\n    ],\n);\n\necho PHP_EOL.'<br/>';\n\necho $this->listGroup(\n    [\n        'First checkbox'  => [\n            'checkbox' => ['label' => true],\n        ],\n        'Second checkbox' => [\n            'checkbox' => ['label' => true],\n        ],\n        'First checkbox'  => [\n            'checkbox' => ['label' => true],\n        ],\n        'Third checkbox'  => [\n            'checkbox' => ['label' => true],\n        ],\n        'Fourth checkbox' => [\n            'checkbox' => ['label' => true],\n        ],\n    ],\n);\n\n")))))}b.isMDXComponent=!0}}]);