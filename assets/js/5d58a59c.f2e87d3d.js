"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6058],{6007:function(n,l,o){o.r(l),o.d(l,{frontMatter:function(){return r},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return v},default:function(){return h}});var t=o(7462),e=o(3366),s=(o(7294),o(3905)),a=o(6396),i=o(8215),d=(o(9055),o(4321)),c=["components"],r={sidebar_position:2,label:"Grid"},m="Grid",u={unversionedId:"usage/layout/grid",id:"usage/layout/grid",title:"Grid",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/layout/grid.mdx",sourceDirName:"usage/layout",slug:"/usage/layout/grid",permalink:"/twbs-helper-module/docs/usage/layout/grid",editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/layout/grid.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,label:"Grid"},sidebar:"tutorialSidebar",previous:{title:"Containers",permalink:"/twbs-helper-module/docs/usage/layout/containers"},next:{title:"Columns",permalink:"/twbs-helper-module/docs/usage/layout/columns"}},v=[{value:"Example",id:"example",children:[],level:2},{value:"Auto-layout columns",id:"auto-layout-columns",children:[{value:"Equal-width",id:"equal-width",children:[],level:3},{value:"Setting one column width",id:"setting-one-column-width",children:[],level:3},{value:"Variable width content",id:"variable-width-content",children:[],level:3}],level:2},{value:"Responsive classes",id:"responsive-classes",children:[{value:"All breakpoints",id:"all-breakpoints",children:[],level:3},{value:"Stacked to horizontal",id:"stacked-to-horizontal",children:[],level:3},{value:"Mix and match",id:"mix-and-match",children:[],level:3},{value:"Row columns",id:"row-columns",children:[],level:3}],level:2},{value:"Nesting",id:"nesting",children:[],level:2}],p={toc:v};function h(n){var l=n.components,o=(0,e.Z)(n,c);return(0,s.kt)("wrapper",(0,t.Z)({},p,o,{components:l,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"grid"},"Grid"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/"},"Twitter bootstrap Documentation")),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/#example"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                'Column',\n                'Column',\n                'Column',\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h2",{id:"auto-layout-columns"},"Auto-layout columns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/#auto-layout-columns"},"Twitter bootstrap Documentation")),(0,s.kt)("h3",{id:"equal-width"},"Equal-width"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/#equal-width"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col">\n            1 of 2\n        </div>\n        <div class="col">\n            2 of 2\n        </div>\n    </div>\n    <div class="row">\n        <div class="col">\n            1 of 3\n        </div>\n        <div class="col">\n            2 of 3\n        </div>\n        <div class="col">\n            3 of 3\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                '1 of 2',\n                '2 of 2',\n            ],\n        ],\n        [\n            [\n                '1 of 3',\n                '2 of 3',\n                '3 of 3',\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h3",{id:"setting-one-column-width"},"Setting one column width"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/#setting-one-column-width"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col">\n            1 of 3\n        </div>\n        <div class="col-6">\n            2 of 3 (wider)\n        </div>\n        <div class="col">\n            3 of 3\n        </div>\n    </div>\n    <div class="row">\n        <div class="col">\n            1 of 3\n        </div>\n        <div class="col-5">\n            2 of 3 (wider)\n        </div>\n        <div class="col">\n            3 of 3\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                '1 of 3',\n                [\n                    '2 of 3 (wider)',\n                    ['column' => 6],\n                ],\n                '3 of 3',\n            ],\n        ],\n        [\n            [\n                '1 of 3',\n                [\n                    '2 of 3 (wider)',\n                    ['column' => 5],\n                ],\n                '3 of 3',\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h3",{id:"variable-width-content"},"Variable width content"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/#variable-width-content"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="justify-content-md-center row">\n        <div class="col col-lg-2">\n            1 of 3\n        </div>\n        <div class="col-md-auto">\n            Variable width content\n        </div>\n        <div class="col col-lg-2">\n            3 of 3\n        </div>\n    </div>\n    <div class="row">\n        <div class="col">\n            1 of 3\n        </div>\n        <div class="col-md-auto">\n            Variable width content\n        </div>\n        <div class="col col-lg-2">\n            3 of 3\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                [\n                    '1 of 3',\n                    [\n                        'column' => [\n                            true,\n                            'lg-2',\n                        ],\n                    ],\n                ],\n                [\n                    'Variable width content',\n                    ['column' => 'md-auto'],\n                ],\n                [\n                    '3 of 3',\n                    [\n                        'column' => [\n                            true,\n                            'lg-2',\n                        ],\n                    ],\n                ],\n            ],\n            [    'justify_content' => 'md-center'    ],\n        ],\n        [\n            [\n                '1 of 3',\n                [\n                    'Variable width content',\n                    ['column' => 'md-auto'],\n                ],\n                [\n                    '3 of 3',\n                    [\n                        'column' => [\n                            true,\n                            'lg-2',\n                        ],\n                    ],\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h2",{id:"responsive-classes"},"Responsive classes"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/#responsive-classes"},"Twitter bootstrap Documentation")),(0,s.kt)("h3",{id:"all-breakpoints"},"All breakpoints"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/#all-breakpoints"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col">\n            col\n        </div>\n        <div class="col">\n            col\n        </div>\n        <div class="col">\n            col\n        </div>\n        <div class="col">\n            col\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-8">\n            col-8\n        </div>\n        <div class="col-4">\n            col-4\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                'col',\n                'col',\n                'col',\n                'col',\n            ],\n        ],\n        [\n            [\n                [\n                    'col-8',\n                    ['column' => 8],\n                ],\n                [\n                    'col-4',\n                    ['column' => 4],\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h3",{id:"stacked-to-horizontal"},"Stacked to horizontal"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/#stacked-to-horizontal"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col-sm-8">\n            col-sm-8\n        </div>\n        <div class="col-sm-4">\n            col-sm-4\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm">\n            col-sm\n        </div>\n        <div class="col-sm">\n            col-sm\n        </div>\n        <div class="col-sm">\n            col-sm\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                [\n                    'col-sm-8',\n                    ['column' => 'sm-8'],\n                ],\n                [\n                    'col-sm-4',\n                    ['column' => 'sm-4'],\n                ],\n            ],\n        ],\n        [\n            [\n                [\n                    'col-sm',\n                    ['column' => 'sm'],\n                ],\n                [\n                    'col-sm',\n                    ['column' => 'sm'],\n                ],\n                [\n                    'col-sm',\n                    ['column' => 'sm'],\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h3",{id:"mix-and-match"},"Mix and match"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/#mix-and-match"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col-md-8">\n            .col-md-8\n        </div>\n        <div class="col-6 col-md-4">\n            .col-6 .col-md-4\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-6 col-md-4">\n            .col-6 .col-md-4\n        </div>\n        <div class="col-6 col-md-4">\n            .col-6 .col-md-4\n        </div>\n        <div class="col-6 col-md-4">\n            .col-6 .col-md-4\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-6">\n            .col-6\n        </div>\n        <div class="col-6">\n            .col-6\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                [\n                    '.col-md-8',\n                    ['column' => 'md-8'],\n                ],\n                [\n                    '.col-6 .col-md-4',\n                    [\n                        'column' => [\n                            6,\n                            'md-4',\n                        ],\n                    ],\n                ],\n            ],\n        ],\n        [\n            [\n                [\n                    '.col-6 .col-md-4',\n                    [\n                        'column' => [\n                            6,\n                            'md-4',\n                        ],\n                    ],\n                ],\n                [\n                    '.col-6 .col-md-4',\n                    [\n                        'column' => [\n                            6,\n                            'md-4',\n                        ],\n                    ],\n                ],\n                [\n                    '.col-6 .col-md-4',\n                    [\n                        'column' => [\n                            6,\n                            'md-4',\n                        ],\n                    ],\n                ],\n            ],\n        ],\n        [\n            [\n                [\n                    '.col-6',\n                    ['column' => 6],\n                ],\n                [\n                    '.col-6',\n                    ['column' => 6],\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h3",{id:"row-columns"},"Row columns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/#row-columns"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row row-cols-2">\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n    </div>\n</div>\n<div class="container">\n    <div class="row row-cols-3">\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n    </div>\n</div>\n<div class="container">\n    <div class="row row-cols-auto">\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n    </div>\n</div>\n<div class="container">\n    <div class="row row-cols-4">\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n    </div>\n</div>\n<div class="container">\n    <div class="row row-cols-4">\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col-6">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n    </div>\n</div>\n<div class="container">\n    <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2">\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n        <div class="col">\n            Column\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                'Column',\n                'Column',\n                'Column',\n                'Column',\n            ],\n            ['columns' => 2],\n        ],\n    ]\n);\n\necho $this->grid(\n    [\n        [\n            [\n                'Column',\n                'Column',\n                'Column',\n                'Column',\n            ],\n            ['columns' => 3],\n        ],\n    ]\n);\n\necho $this->grid(\n    [\n        [\n            [\n                'Column',\n                'Column',\n                'Column',\n                'Column',\n            ],\n            ['columns' => 'auto'],\n        ],\n    ]\n);\n\necho $this->grid(\n    [\n        [\n            [\n                'Column',\n                'Column',\n                'Column',\n                'Column',\n            ],\n            ['columns' => 4],\n        ],\n    ]\n);\n\necho $this->grid(\n    [\n        [\n            [\n                'Column',\n                'Column',\n                [\n                    'Column',\n                    ['column' => 6],\n                ],\n                'Column',\n            ],\n            ['columns' => 4],\n        ],\n    ]\n);\n\necho $this->grid(\n    [\n        [\n            [\n                'Column',\n                'Column',\n                'Column',\n                'Column',\n            ],\n            [\n                'columns' => [\n                    1,\n                    'sm-2',\n                    'md-4',\n                ],\n            ],\n        ],\n    ]\n);\n\n")))),(0,s.kt)("h2",{id:"nesting"},"Nesting"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/#nesting"},"Twitter bootstrap Documentation")),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,s.kt)(d.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,s.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="container">\n    <div class="row">\n        <div class="col-sm-3">\n            Level 1: .col-sm-3\n        </div>\n        <div class="col-sm-9">\n            <div class="row">\n                <div class="col-8 col-sm-6">\n                    Level 2: .col-8 .col-sm-6\n                </div>\n                <div class="col-4 col-sm-6">\n                    Level 2: .col-4 .col-sm-6\n                </div>\n            </div>\n        </div>\n    </div>\n</div>'}}))),(0,s.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->grid(\n    [\n        [\n            [\n                [\n                    'Level 1: .col-sm-3',\n                    ['column' => 'sm-3'],\n                ],\n                [\n                    null,\n                    [\n                        'column' => 'sm-9',\n                        'grid'   => [\n                            'rows' => [\n                                [\n                                    [\n                                        [\n                                            'Level 2: .col-8 .col-sm-6',\n                                            [\n                                                'column' => [\n                                                    8,\n                                                    'sm-6',\n                                                ],\n                                            ],\n                                        ],\n                                        [\n                                            'Level 2: .col-4 .col-sm-6',\n                                            [\n                                                'column' => [\n                                                    4,\n                                                    'sm-6',\n                                                ],\n                                            ],\n                                        ],\n                                    ],\n                                ],\n                            ],\n                        ],\n                    ],\n                ],\n            ],\n        ],\n    ]\n);\n\n")))))}h.isMDXComponent=!0}}]);