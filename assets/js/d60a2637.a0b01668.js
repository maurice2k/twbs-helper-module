"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7714],{6540:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return r},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var o=n(7462),s=n(3366),u=(n(7294),n(3905)),p=n(5064),l=n(8215),a=(n(6213),n(4800)),i=["components"],c={sidebar_position:1},r="Custom select",m={unversionedId:"usage/components/input-group/custom-forms/custom-select",id:"usage/components/input-group/custom-forms/custom-select",isDocsHomePage:!1,title:"Custom select",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/input-group/custom-forms/custom-select.mdx",sourceDirName:"usage/components/input-group/custom-forms",slug:"/usage/components/input-group/custom-forms/custom-select",permalink:"/twbs-helper-module/docs/usage/components/input-group/custom-forms/custom-select",editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/input-group/custom-forms/custom-select.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic example",permalink:"/twbs-helper-module/docs/usage/components/input-group/index"},next:{title:"Custom file input",permalink:"/twbs-helper-module/docs/usage/components/input-group/custom-forms/custom-file-input"}},d=[],b={toc:d};function k(e){var t=e.components,n=(0,s.Z)(e,i);return(0,u.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"custom-select"},"Custom select"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/input-group/#custom-select"},"Twitter bootstrap Documentation")),(0,u.kt)(p.Z,{mdxType:"Tabs"},(0,u.kt)(l.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,u.kt)(a.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,u.kt)("div",{class:"input-group mb-3"},(0,u.kt)("div",{class:"input-group-prepend"},(0,u.kt)("label",{class:"input-group-text",for:"inputGroupSelect01"},"Options")),(0,u.kt)("select",{name:"select_label_prepend",id:"inputGroupSelect01",class:"custom-select"},(0,u.kt)("option",{value:"",selected:"selected"},"Choose..."),(0,u.kt)("option",{value:"1"},"One"),(0,u.kt)("option",{value:"2"},"Two"),(0,u.kt)("option",{value:"3"},"Three"))),(0,u.kt)("div",{class:"input-group mb-3"},(0,u.kt)("select",{name:"select_label_append",id:"inputGroupSelect02",class:"custom-select"},(0,u.kt)("option",{value:"",selected:"selected"},"Choose..."),(0,u.kt)("option",{value:"1"},"One"),(0,u.kt)("option",{value:"2"},"Two"),(0,u.kt)("option",{value:"3"},"Three")),(0,u.kt)("div",{class:"input-group-append"},(0,u.kt)("label",{class:"input-group-text",for:"inputGroupSelect02"},"Options"))),(0,u.kt)("div",{class:"input-group mb-3"},(0,u.kt)("div",{class:"input-group-prepend"},(0,u.kt)("button",{type:"button",name:"button",class:"btn btn-outline-secondary",value:""},"Button")),(0,u.kt)("select",{name:"select_button_prepend",id:"inputGroupSelect03","aria-label":"Example select with button addon",class:"custom-select"},(0,u.kt)("option",{value:"",selected:"selected"},"Choose..."),(0,u.kt)("option",{value:"1"},"One"),(0,u.kt)("option",{value:"2"},"Two"),(0,u.kt)("option",{value:"3"},"Three"))),(0,u.kt)("div",{class:"input-group"},(0,u.kt)("select",{name:"select_button_append",id:"inputGroupSelect04","aria-label":"Example select with button addon",class:"custom-select"},(0,u.kt)("option",{value:"",selected:"selected"},"Choose..."),(0,u.kt)("option",{value:"1"},"One"),(0,u.kt)("option",{value:"2"},"Two"),(0,u.kt)("option",{value:"3"},"Three")),(0,u.kt)("div",{class:"input-group-append"},(0,u.kt)("button",{type:"button",name:"button",class:"btn btn-outline-secondary",value:""},"Button"))))),(0,u.kt)(l.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$oFactory = new \\Laminas\\Form\\Factory();\n\necho $this->formElement(\n    $oFactory->create(\n        [\n            'name'       => 'select_label_prepend',\n            'type'       => 'select',\n            'options'    => [\n                'form_group'        => false,\n                'input_group_class' => 'mb-3',\n                'custom'            => true,\n                'empty_option'      => 'Choose...',\n                'value_options'     => [\n                    1 => 'One',\n                    2 => 'Two',\n                    3 => 'Three',\n                ],\n                'add_on_prepend'    => ['label' => 'Options'],\n            ],\n            'attributes' => [    'id' => 'inputGroupSelect01'    ],\n        ]\n    )->setValue('')\n).PHP_EOL;\n\necho $this->formElement(\n    $oFactory->create(\n        [\n            'name'       => 'select_label_append',\n            'type'       => 'select',\n            'options'    => [\n                'form_group'        => false,\n                'input_group_class' => 'mb-3',\n                'custom'            => true,\n                'empty_option'      => 'Choose...',\n                'value_options'     => [\n                    1 => 'One',\n                    2 => 'Two',\n                    3 => 'Three',\n                ],\n                'add_on_append'     => ['label' => 'Options'],\n            ],\n            'attributes' => [    'id' => 'inputGroupSelect02'    ],\n        ]\n    )->setValue('')\n).PHP_EOL;\n\necho $this->formElement(\n    $oFactory->create(\n        [\n            'name'       => 'select_button_prepend',\n            'type'       => 'select',\n            'options'    => [\n                'form_group'        => false,\n                'input_group_class' => 'mb-3',\n                'custom'            => true,\n                'empty_option'      => 'Choose...',\n                'value_options'     => [\n                    1 => 'One',\n                    2 => 'Two',\n                    3 => 'Three',\n                ],\n                'add_on_prepend'    => [\n                    'element' => [\n                        'type'    => 'button',\n                        'options' => [\n                            'label'   => 'Button',\n                            'variant' => 'outline-secondary',\n                        ],\n                    ],\n                ],\n            ],\n            'attributes' => [\n                'id'         => 'inputGroupSelect03',\n                'aria-label' => 'Example select with button addon',\n            ],\n        ]\n    )->setValue('')\n).PHP_EOL;\n\n\necho $this->formElement(\n    $oFactory->create(\n        [\n            'name'       => 'select_button_append',\n            'type'       => 'select',\n            'options'    => [\n                'form_group'    => false,\n                'custom'        => true,\n                'empty_option'  => 'Choose...',\n                'value_options' => [\n                    1 => 'One',\n                    2 => 'Two',\n                    3 => 'Three',\n                ],\n                'add_on_append' => [\n                    'element' => [\n                        'type'    => 'button',\n                        'options' => [\n                            'label'   => 'Button',\n                            'variant' => 'outline-secondary',\n                        ],\n                    ],\n                ],\n            ],\n            'attributes' => [\n                'id'         => 'inputGroupSelect04',\n                'aria-label' => 'Example select with button addon',\n            ],\n        ]\n    )->setValue('')\n);\n\n")))))}k.isMDXComponent=!0}}]);