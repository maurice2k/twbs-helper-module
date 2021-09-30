"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1317],{6497:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return b},toc:function(){return d},default:function(){return T}});var n=o(7462),l=o(3366),a=(o(7294),o(3905)),s=o(5064),i=o(8215),p=(o(6213),o(4800)),r=["components"],m={sidebar_position:0},u="Examples",b={unversionedId:"usage/components/tooltips/index",id:"usage/components/tooltips/index",isDocsHomePage:!1,title:"Examples",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/components/tooltips/index.mdx",sourceDirName:"usage/components/tooltips",slug:"/usage/components/tooltips/index",permalink:"/twbs-helper-module/docs/usage/components/tooltips/index",editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/components/tooltips/index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Accessibility",permalink:"/twbs-helper-module/docs/usage/components/toasts/examples/accessibility"}},d=[],c={toc:d};function T(t){var e=t.components,o=(0,l.Z)(t,r);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/tooltips/#examples"},"Twitter bootstrap Documentation")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,a.kt)(p.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,a.kt)("button",{type:"button",name:"tooltip",class:"btn btn-secondary",title:"Tooltip on top","data-toggle":"tooltip","data-placement":"top",value:""},"Tooltip on top"),(0,a.kt)("button",{type:"button",name:"tooltip",class:"btn btn-secondary",title:"Tooltip on right","data-toggle":"tooltip","data-placement":"right",value:""},"Tooltip on right"),(0,a.kt)("button",{type:"button",name:"tooltip",class:"btn btn-secondary",title:"Tooltip on bottom","data-toggle":"tooltip","data-placement":"bottom",value:""},"Tooltip on bottom"),(0,a.kt)("button",{type:"button",name:"tooltip",class:"btn btn-secondary",title:"Tooltip on left","data-toggle":"tooltip","data-placement":"left",value:""},"Tooltip on left"),(0,a.kt)("button",{type:"button",name:"tooltip",class:"btn btn-secondary",title:"<em>Tooltip</em> <u>with</u> <b>HTML</b>","data-toggle":"tooltip","data-html":"true",value:""},"Tooltip with HTML"))),(0,a.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nforeach ([\n    'top'    => 'Tooltip on top',\n    'right'  => 'Tooltip on right',\n    'bottom' => 'Tooltip on bottom',\n    'left'   => 'Tooltip on left',\n] as $sPlacement => $sLabel) {\n    echo $this->formButton(\n        [\n            'name'    => 'tooltip',\n            'options' => [\n                'label'   => $sLabel,\n                'tooltip' => [\n                    'placement' => $sPlacement,\n                    'content'   => $sLabel,\n                ],\n            ],\n        ]\n    ).PHP_EOL;\n}\n\necho $this->formButton(\n    [\n        'name'    => 'tooltip',\n        'options' => [\n            'label'   => 'Tooltip with HTML',\n            'tooltip' => '<em>Tooltip</em> <u>with</u> <b>HTML</b>',\n        ],\n    ]\n);\n\n")))),(0,a.kt)("h1",{id:"disabled-elements"},"Disabled elements"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/tooltips/#disabled-elements"},"Twitter bootstrap Documentation")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,a.kt)(p.Z,{bootstrapVersion:"4.5",mdxType:"HtmlCode"},(0,a.kt)("span",{class:"d-inline-block","data-toggle":"tooltip",tabindex:"0",title:"Disabled tooltip"},(0,a.kt)("button",{type:"button",name:"tooltip",disabled:"disabled",class:"btn btn-primary",style:"pointer-events: none;",value:""},"Disabled button")))),(0,a.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\necho $this->formButton(\n    [\n        'name'       => 'tooltip',\n        'options'    => [\n            'label'   => 'Disabled button',\n            'tooltip' => 'Disabled tooltip',\n            'variant' => 'primary',\n        ],\n        'attributes' => [    'disabled' => true    ],\n    ]\n);\n\n")))))}T.isMDXComponent=!0}}]);