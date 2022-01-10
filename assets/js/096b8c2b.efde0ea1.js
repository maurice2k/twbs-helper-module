"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6867],{3447:function(n,a,e){e.r(a),e.d(a,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return v},toc:function(){return p},default:function(){return m}});var l=e(7462),i=e(3366),t=(e(7294),e(3905)),s=e(6396),r=e(8215),o=(e(9055),e(4321)),c=["components"],d={sidebar_position:14,label:"Navs and tabs"},u="Navs and tabs",v={unversionedId:"usage/components/navs-and-tabs",id:"usage/components/navs-and-tabs",title:"Navs and tabs",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/navs-and-tabs.mdx",sourceDirName:"usage/components",slug:"/usage/components/navs-and-tabs",permalink:"/twbs-helper-module/docs/usage/components/navs-and-tabs",editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/navs-and-tabs.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,label:"Navs and tabs"},sidebar:"tutorialSidebar",previous:{title:"Modal",permalink:"/twbs-helper-module/docs/usage/components/modal"},next:{title:"Navbar",permalink:"/twbs-helper-module/docs/usage/components/navbar"}},p=[{value:"Base nav",id:"base-nav",children:[],level:2},{value:"Available styles",id:"available-styles",children:[{value:"Horizontal alignment",id:"horizontal-alignment",children:[],level:3},{value:"Vertical",id:"vertical",children:[],level:3},{value:"Tabs",id:"tabs",children:[],level:3},{value:"Pills",id:"pills",children:[],level:3},{value:"Fill and justify",id:"fill-and-justify",children:[],level:3}],level:2},{value:"Working with flex utilities",id:"working-with-flex-utilities",children:[],level:2},{value:"Using dropdowns",id:"using-dropdowns",children:[{value:"Tabs with dropdowns",id:"tabs-with-dropdowns",children:[],level:3},{value:"Pills with dropdowns",id:"pills-with-dropdowns",children:[],level:3}],level:2}],b={toc:p};function m(n){var a=n.components,e=(0,i.Z)(n,c);return(0,t.kt)("wrapper",(0,l.Z)({},b,e,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"navs-and-tabs"},"Navs and tabs"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-tabs/"},"Twitter bootstrap Documentation")),(0,t.kt)("h2",{id:"base-nav"},"Base nav"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-tabs/#base-nav"},"Twitter bootstrap Documentation")),(0,t.kt)(s.Z,{mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,t.kt)(o.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,t.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="nav">\n    <li class="nav-item">\n        <a aria-current="page" class="active nav-link" href="#">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n    </li>\n</ul>\n<nav class="nav">\n    <a aria-current="page" class="active nav-link" href="#">Active</a>\n    <a class="nav-link" href="#">Link</a>\n    <a class="nav-link" href="#">Link</a>\n    <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n</nav>'}}))),(0,t.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    ['page' => true]\n);\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'list' => false,\n        'page' => true,\n    ]\n);\n\n")))),(0,t.kt)("h2",{id:"available-styles"},"Available styles"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-tabs/#available-styles"},"Twitter bootstrap Documentation")),(0,t.kt)("h3",{id:"horizontal-alignment"},"Horizontal alignment"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-tabs/#horizontal-alignment"},"Twitter bootstrap Documentation")),(0,t.kt)(s.Z,{mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,t.kt)(o.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,t.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="justify-content-center nav">\n    <li class="nav-item">\n        <a aria-current="page" class="active nav-link" href="#">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n    </li>\n</ul>\n<ul class="justify-content-end nav">\n    <li class="nav-item">\n        <a aria-current="page" class="active nav-link" href="#">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n    </li>\n</ul>'}}))),(0,t.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// Centered with option 'center'\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'centered' => true,\n        'page'     => true,\n    ]\n);\n\n// Right-aligned with option 'right_aligned'\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'right_aligned' => true,\n        'page'          => true,\n    ]\n);\n\n")))),(0,t.kt)("h3",{id:"vertical"},"Vertical"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-tabs/#vertical"},"Twitter bootstrap Documentation")),(0,t.kt)(s.Z,{mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,t.kt)(o.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,t.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="flex-column nav">\n    <li class="nav-item">\n        <a aria-current="page" class="active nav-link" href="#">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n    </li>\n</ul>\n<nav class="flex-column nav">\n    <a aria-current="page" class="active nav-link" href="#">Active</a>\n    <a class="nav-link" href="#">Link</a>\n    <a class="nav-link" href="#">Link</a>\n    <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n</nav>'}}))),(0,t.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'vertical' => true,\n        'page'     => true,\n    ]\n);\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'vertical' => true,\n        'list'     => false,\n        'page'     => true,\n    ]\n);\n\n")))),(0,t.kt)("h3",{id:"tabs"},"Tabs"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-tabs/#tabs"},"Twitter bootstrap Documentation")),(0,t.kt)(s.Z,{mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,t.kt)(o.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,t.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="nav nav-tabs">\n    <li class="nav-item">\n        <a aria-current="page" class="active nav-link" href="#">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n    </li>\n</ul>'}}))),(0,t.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'tabs' => true,\n        'page' => true,\n    ]\n);\n\n")))),(0,t.kt)("h3",{id:"pills"},"Pills"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-pills/#pills"},"Twitter bootstrap Documentation")),(0,t.kt)(s.Z,{mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,t.kt)(o.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,t.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="nav nav-pills">\n    <li class="nav-item">\n        <a aria-current="page" class="active nav-link" href="#">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n    </li>\n</ul>'}}))),(0,t.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'pills' => true,\n        'page'  => true,\n    ]\n);\n\n")))),(0,t.kt)("h3",{id:"fill-and-justify"},"Fill and justify"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-pills/#fill-and-justify"},"Twitter bootstrap Documentation")),(0,t.kt)(s.Z,{mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,t.kt)(o.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,t.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="nav nav-fill nav-pills">\n    <li class="nav-item">\n        <a aria-current="page" class="active nav-link" href="#">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Much longer nav link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n    </li>\n</ul>\n<br></br>\n<nav class="nav nav-fill nav-pills">\n    <a aria-current="page" class="active nav-link" href="#">Active</a>\n    <a class="nav-link" href="#">Much longer nav link</a>\n    <a class="nav-link" href="#">Link</a>\n    <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n</nav>\n<br></br>\n<ul class="nav nav-justified nav-pills">\n    <li class="nav-item">\n        <a aria-current="page" class="active nav-link" href="#">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Much longer nav link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n    </li>\n</ul>\n<br></br>\n<nav class="nav nav-justified nav-pills">\n    <a aria-current="page" class="active nav-link" href="#">Active</a>\n    <a class="nav-link" href="#">Much longer nav link</a>\n    <a class="nav-link" href="#">Link</a>\n    <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n</nav>'}}))),(0,t.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Much longer nav link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'pills' => true,\n        'fill'  => true,\n        'page'  => true,\n    ]\n);\n\necho PHP_EOL.'<br/>';\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Much longer nav link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'pills' => true,\n        'fill'  => true,\n        'list'  => false,\n        'page'  => true,\n    ]\n);\n\necho PHP_EOL.'<br/>';\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Much longer nav link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'pills'     => true,\n        'justified' => true,\n        'page'      => true,\n    ]\n);\n\necho PHP_EOL.'<br/>';\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'label' => 'Much longer nav link',\n                'uri'   => '#',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'pills'     => true,\n        'justified' => true,\n        'list'      => false,\n        'page'      => true,\n    ]\n);\n\n")))),(0,t.kt)("h2",{id:"working-with-flex-utilities"},"Working with flex utilities"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-tabs/#working-with-flex-utilities"},"Twitter bootstrap Documentation")),(0,t.kt)(s.Z,{mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,t.kt)(o.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,t.kt)("div",{dangerouslySetInnerHTML:{__html:'<nav class="flex-column flex-sm-row nav nav-pills">\n    <a aria-current="page" class="active flex-sm-fill nav-link text-sm-center" href="#">Active</a>\n    <a class="flex-sm-fill nav-link text-sm-center" href="#">Longer nav link</a>\n    <a class="flex-sm-fill nav-link text-sm-center" href="#">Link</a>\n    <a aria-disabled="true" class="disabled flex-sm-fill nav-link text-sm-center" href="#" tabindex="-1">Disabled</a>\n</nav>'}}))),(0,t.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n                'class'  => 'flex-sm-fill text-sm-center',\n            ],\n            [\n                'label' => 'Longer nav link',\n                'uri'   => '#',\n                'class' => 'flex-sm-fill text-sm-center',\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n                'class' => 'flex-sm-fill text-sm-center',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n                'class'   => 'flex-sm-fill text-sm-center',\n            ],\n        ]\n    ),\n    [\n        'page'    => true,\n        'list'    => false,\n        'pills'   => true,\n        'ulClass' => 'flex-column flex-sm-row nav',\n    ]\n);\n\n")))),(0,t.kt)("h2",{id:"using-dropdowns"},"Using dropdowns"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-tabs/#using-dropdowns"},"Twitter bootstrap Documentation")),(0,t.kt)("h3",{id:"tabs-with-dropdowns"},"Tabs with dropdowns"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-tabs/#tabs-with-dropdowns"},"Twitter bootstrap Documentation")),(0,t.kt)(s.Z,{mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,t.kt)(o.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,t.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="nav nav-tabs">\n    <li class="nav-item">\n        <a aria-current="page" class="active nav-link" href="#">Active</a>\n    </li>\n    <li class="dropdown nav-item">\n        <a aria-expanded="false" class="dropdown-toggle nav-link" data-bs-toggle="dropdown" href="#" role="button">Dropdown</a>\n        <ul class="dropdown-menu">\n            <li><a class="dropdown-item" href="#">Action</a></li>\n            <li><a class="dropdown-item" href="#">Another action</a></li>\n            <li><a class="dropdown-item" href="#">Something else here</a></li>\n            <li><hr class="dropdown-divider"></hr></li>\n            <li><a class="dropdown-item" href="#">Separated link</a></li>\n        </ul>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n    </li>\n</ul>'}}))),(0,t.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'type'     => \\TwbsHelper\\Navigation\\Page\\DropdownPage::class,\n                'label'    => 'Dropdown',\n                'dropdown' => [\n                    'Action',\n                    'Another action',\n                    'Something else here',\n                    '---',\n                    'Separated link',\n                ],\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'tabs' => true,\n        'page' => true,\n    ]\n);\n\n")))),(0,t.kt)("h3",{id:"pills-with-dropdowns"},"Pills with dropdowns"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/components/navs-tabs/#pills-with-dropdowns"},"Twitter bootstrap Documentation")),(0,t.kt)(s.Z,{mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,t.kt)(o.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,t.kt)("div",{dangerouslySetInnerHTML:{__html:'<ul class="nav nav-pills">\n    <li class="nav-item">\n        <a aria-current="page" class="active nav-link" href="#">Active</a>\n    </li>\n    <li class="dropdown nav-item">\n        <a aria-expanded="false" class="dropdown-toggle nav-link" data-bs-toggle="dropdown" href="#" role="button">Dropdown</a>\n        <ul class="dropdown-menu">\n            <li><a class="dropdown-item" href="#">Action</a></li>\n            <li><a class="dropdown-item" href="#">Another action</a></li>\n            <li><a class="dropdown-item" href="#">Something else here</a></li>\n            <li><hr class="dropdown-divider"></hr></li>\n            <li><a class="dropdown-item" href="#">Separated link</a></li>\n        </ul>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n    </li>\n    <li class="nav-item">\n        <a aria-disabled="true" class="disabled nav-link" href="#" tabindex="-1">Disabled</a>\n    </li>\n</ul>'}}))),(0,t.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation(\n        [\n            [\n                'label'  => 'Active',\n                'uri'    => '#',\n                'active' => true,\n            ],\n            [\n                'type'     => \\TwbsHelper\\Navigation\\Page\\DropdownPage::class,\n                'label'    => 'Dropdown',\n                'dropdown' => [\n                    'Action',\n                    'Another action',\n                    'Something else here',\n                    '---',\n                    'Separated link',\n                ],\n            ],\n            [\n                'label' => 'Link',\n                'uri'   => '#',\n            ],\n            [\n                'label'   => 'Disabled',\n                'uri'     => '#',\n                'visible' => false,\n            ],\n        ]\n    ),\n    [\n        'pills' => true,\n        'page'  => true,\n    ]\n);\n\n")))))}m.isMDXComponent=!0}}]);