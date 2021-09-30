"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7080],{9121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return h},default:function(){return d}});var o=n(7462),s=n(3366),l=(n(7294),n(3905)),c=n(5064),u=n(8215),m=(n(6213),n(4800)),r=["components"],a={sidebar_position:3},i="Select menu",p={unversionedId:"usage/components/forms/custom-forms/select-menu",id:"usage/components/forms/custom-forms/select-menu",isDocsHomePage:!1,title:"Select menu",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/forms/custom-forms/select-menu.mdx",sourceDirName:"usage/components/forms/custom-forms",slug:"/usage/components/forms/custom-forms/select-menu",permalink:"/twbs-helper-module/docs/usage/components/forms/custom-forms/select-menu",editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/forms/custom-forms/select-menu.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Switches",permalink:"/twbs-helper-module/docs/usage/components/forms/custom-forms/switches"},next:{title:"Range",permalink:"/twbs-helper-module/docs/usage/components/forms/custom-forms/range"}},h=[],k={toc:h};function d(e){var t=e.components,n=(0,s.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-menu"},"Select menu"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/forms/#select-menu"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(m.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,l.kt)("select",{name:"custom_select",class:"custom-select"},(0,l.kt)("option",{value:"",selected:"selected"},"Open this select menu"),(0,l.kt)("option",{value:"1"},"One"),(0,l.kt)("option",{value:"2"},"Two"),(0,l.kt)("option",{value:"3"},"Three")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("select",{name:"custom_select_lg",class:"custom-select custom-select-lg mb-3"},(0,l.kt)("option",{value:"",selected:"selected"},"Open this select menu"),(0,l.kt)("option",{value:"1"},"One"),(0,l.kt)("option",{value:"2"},"Two"),(0,l.kt)("option",{value:"3"},"Three")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("select",{name:"custom_select_sm",class:"custom-select custom-select-sm"},(0,l.kt)("option",{value:"",selected:"selected"},"Open this select menu"),(0,l.kt)("option",{value:"1"},"One"),(0,l.kt)("option",{value:"2"},"Two"),(0,l.kt)("option",{value:"3"},"Three")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("select",{name:"custom_select_multiple[]",multiple:"multiple",class:"custom-select"},(0,l.kt)("option",{value:"",selected:"selected"},"Open this select menu"),(0,l.kt)("option",{value:"1"},"One"),(0,l.kt)("option",{value:"2"},"Two"),(0,l.kt)("option",{value:"3"},"Three")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("select",{name:"custom_select_size",size:"3",class:"custom-select"},(0,l.kt)("option",{value:"",selected:"selected"},"Open this select menu"),(0,l.kt)("option",{value:"1"},"One"),(0,l.kt)("option",{value:"2"},"Two"),(0,l.kt)("option",{value:"3"},"Three")))),(0,l.kt)(u.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$oFactory = new \\Laminas\\Form\\Factory();\n\necho $this->formElement(\n    $oFactory->create(\n        [\n            'name'    => 'custom_select',\n            'type'    => 'select',\n            'options' => [\n                'custom'        => true,\n                'empty_option'  => 'Open this select menu',\n                'value_options' => [\n                    1 => 'One',\n                    2 => 'Two',\n                    3 => 'Three',\n                ],\n            ],\n        ]\n    )->setValue('')\n).PHP_EOL;\n\necho '<br/><br/>'.PHP_EOL;\n\n// You may also choose from small and large custom selects to match our similarly sized text inputs.\necho $this->formElement(\n    $oFactory->create(\n        [\n            'name'       => 'custom_select_lg',\n            'type'       => 'select',\n            'options'    => [\n                'size'          => 'lg',\n                'custom'        => true,\n                'empty_option'  => 'Open this select menu',\n                'value_options' => [\n                    1 => 'One',\n                    2 => 'Two',\n                    3 => 'Three',\n                ],\n            ],\n            'attributes' => ['class' => 'mb-3'],\n        ]\n    )->setValue('')\n).PHP_EOL;\n\necho '<br/><br/>'.PHP_EOL;\n\necho $this->formElement(\n    $oFactory->create(\n        [\n            'name'    => 'custom_select_sm',\n            'type'    => 'select',\n            'options' => [\n                'size'          => 'sm',\n                'custom'        => true,\n                'empty_option'  => 'Open this select menu',\n                'value_options' => [\n                    1 => 'One',\n                    2 => 'Two',\n                    3 => 'Three',\n                ],\n            ],\n        ]\n    )->setValue('')\n).PHP_EOL;\n\necho '<br/><br/>'.PHP_EOL;\n\n// The multiple attribute is also supported\necho $this->formElement(\n    $oFactory->create(\n        [\n            'name'       => 'custom_select_multiple',\n            'type'       => 'select',\n            'options'    => [\n                'custom'        => true,\n                'empty_option'  => 'Open this select menu',\n                'value_options' => [\n                    1 => 'One',\n                    2 => 'Two',\n                    3 => 'Three',\n                ],\n            ],\n            'attributes' => ['multiple' => true],\n        ]\n    )->setValue('')\n).PHP_EOL;\n\necho '<br/><br/>'.PHP_EOL;\n\n// As is the size attribute\necho $this->formElement(\n    $oFactory->create(\n        [\n            'name'       => 'custom_select_size',\n            'type'       => 'select',\n            'options'    => [\n                'custom'        => true,\n                'empty_option'  => 'Open this select menu',\n                'value_options' => [\n                    1 => 'One',\n                    2 => 'Two',\n                    3 => 'Three',\n                ],\n            ],\n            'attributes' => ['size' => 3],\n        ]\n    )->setValue('')\n);\n\n")))))}d.isMDXComponent=!0}}]);