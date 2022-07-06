"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9461],{8271:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return r},metadata:function(){return h},toc:function(){return p}});var a=t(7462),o=t(3366),l=(t(7294),t(3905)),c=t(5488),i=t(5162),s=(t(3066),t(4321)),d=["components"],r={sidebar_position:4,label:"Checks and radios"},u="Checks and radios",h={unversionedId:"usage/forms/checks-and-radios",id:"usage/forms/checks-and-radios",title:"Checks and radios",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/forms/checks-and-radios.mdx",sourceDirName:"usage/forms",slug:"/usage/forms/checks-and-radios",permalink:"/twbs-helper-module/docs/usage/forms/checks-and-radios",draft:!1,editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/forms/checks-and-radios.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,label:"Checks and radios"},sidebar:"tutorialSidebar",previous:{title:"Select",permalink:"/twbs-helper-module/docs/usage/forms/select"},next:{title:"Range",permalink:"/twbs-helper-module/docs/usage/forms/range"}},b={},p=[{value:"Checks",id:"checks",level:2},{value:"Indeterminate",id:"indeterminate",level:3},{value:"Disabled",id:"disabled",level:3},{value:"Radios",id:"radios",level:2},{value:"Disabled",id:"disabled-1",level:3},{value:"Switches",id:"switches",level:2},{value:"Default (stacked)",id:"default-stacked",level:2},{value:"Inline",id:"inline",level:2},{value:"Without labels",id:"without-labels",level:2},{value:"Toggle buttons",id:"toggle-buttons",level:2},{value:"Checkbox toggle buttons",id:"checkbox-toggle-buttons",level:3},{value:"Radio toggle buttons",id:"radio-toggle-buttons",level:3},{value:"Outlined styles",id:"outlined-styles",level:3}],k={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"checks-and-radios"},"Checks and radios"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios"},"Twitter bootstrap Documentation")),(0,l.kt)("h2",{id:"checks"},"Checks"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#checks"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="form-check">\n    <input type="hidden" name="default-checkbox" value="0"><input class="form-check-input" id="flexCheckDefault" name="default-checkbox" type="checkbox" value="1">\n    <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>\n</div>\n<div class="form-check">\n    <input type="hidden" name="checked-checkbox" value="0"><input checked class="form-check-input" id="flexCheckChecked" name="checked-checkbox" type="checkbox" value="1">\n    <label class="form-check-label" for="flexCheckChecked">Checked checkbox</label>\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\n// Default checkbox\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'default-checkbox',\n            'type'       => 'checkbox',\n            'options'    => [\n                'label'      => 'Default checkbox',\n                'form_group' => false,\n            ],\n            'attributes' => [    'id' => 'flexCheckDefault'    ],\n        ]\n    )\n);\n\necho PHP_EOL;\n\n// Checked checkbox\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'checked-checkbox',\n            'type'       => 'checkbox',\n            'options'    => [\n                'label'      => 'Checked checkbox',\n                'form_group' => false,\n            ],\n            'attributes' => [\n                'id'      => 'flexCheckChecked',\n                'checked' => true,\n            ],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h3",{id:"indeterminate"},"Indeterminate"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#indeterminate"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="form-check">\n    <input class="form-check-input" id="flexCheckIndeterminate" name="indeterminate-checkbox" type="checkbox" value="">\n    <label class="form-check-label" for="flexCheckIndeterminate">Indeterminate checkbox</label>\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'indeterminate-checkbox',\n            'type'       => 'checkbox',\n            'options'    => [\n                'label'              => 'Indeterminate checkbox',\n                'use_hidden_element' => false,\n                'form_group'         => false,\n                'checked_value'      => '',\n            ],\n            'attributes' => [    'id' => 'flexCheckIndeterminate'    ],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h3",{id:"disabled"},"Disabled"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#disabled"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="form-check">\n    <input type="hidden" disabled name="default-checkbox" value="0"><input class="form-check-input" disabled id="flexCheckDisabled" name="default-checkbox" type="checkbox" value="1">\n    <label class="form-check-label" for="flexCheckDisabled">Disabled checkbox</label>\n</div>\n<div class="form-check">\n    <input type="hidden" disabled name="checked-checkbox" value="0"><input checked class="form-check-input" disabled id="flexCheckCheckedDisabled" name="checked-checkbox" type="checkbox" value="1">\n    <label class="form-check-label" for="flexCheckCheckedDisabled">Disabled checked checkbox</label>\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\n// Disabled checkbox\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'default-checkbox',\n            'type'       => 'checkbox',\n            'options'    => [\n                'label'      => 'Disabled checkbox',\n                'form_group' => false,\n            ],\n            'attributes' => [\n                'id'       => 'flexCheckDisabled',\n                'disabled' => true,\n            ],\n        ]\n    )\n);\n\necho PHP_EOL;\n\n// Disabled checked checkbox\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'checked-checkbox',\n            'type'       => 'checkbox',\n            'options'    => [\n                'label'      => 'Disabled checked checkbox',\n                'form_group' => false,\n            ],\n            'attributes' => [\n                'id'       => 'flexCheckCheckedDisabled',\n                'checked'  => true,\n                'disabled' => true,\n            ],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h2",{id:"radios"},"Radios"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#radios"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="form-check">\n    <input class="form-check-input" id="flexRadioDefault1" name="flexRadioDefault" type="radio" value="option1">\n    <label class="form-check-label" for="flexRadioDefault1">Default radio</label>\n</div>\n<div class="form-check">\n    <input checked class="form-check-input" id="flexRadioDefault2" name="flexRadioDefault" type="radio" value="option2">\n    <label class="form-check-label" for="flexRadioDefault2">Default checked radio</label>\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'flexRadioDefault',\n            'type'       => 'radio',\n            'options'    => [\n                'form_group'    => false,\n                'value_options' => [\n                    [\n                        'label'      => 'Default radio',\n                        'value'      => 'option1',\n                        'attributes' => ['id' => 'flexRadioDefault1'],\n                    ],\n                    [\n                        'label'      => 'Default checked radio',\n                        'value'      => 'option2',\n                        'attributes' => ['id' => 'flexRadioDefault2'],\n                    ],\n                ],\n            ],\n            'attributes' => [    'value' => 'option2'    ],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h3",{id:"disabled-1"},"Disabled"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#disabled-1"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="form-check">\n    <input class="form-check-input" disabled id="flexRadioDisabled" name="flexRadioDisabled" type="radio" value="option1">\n    <label class="form-check-label" for="flexRadioDisabled">Default radio</label>\n</div>\n<div class="form-check">\n    <input checked class="form-check-input" disabled id="flexRadioCheckedDisabled" name="flexRadioDisabled" type="radio" value="option2">\n    <label class="form-check-label" for="flexRadioCheckedDisabled">Default checked radio</label>\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'flexRadioDisabled',\n            'type'       => 'radio',\n            'options'    => [\n                'form_group'    => false,\n                'value_options' => [\n                    [\n                        'label'      => 'Default radio',\n                        'value'      => 'option1',\n                        'attributes' => ['id' => 'flexRadioDisabled'],\n                    ],\n                    [\n                        'label'      => 'Default checked radio',\n                        'value'      => 'option2',\n                        'attributes' => ['id' => 'flexRadioCheckedDisabled'],\n                    ],\n                ],\n            ],\n            'attributes' => [\n                'value'    => 'option2',\n                'disabled' => true,\n            ],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h2",{id:"switches"},"Switches"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#switches"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="form-check form-switch">\n    <input type="hidden" name="default-switch-checkbox" value="0"><input class="form-check-input" id="flexSwitchCheckDefault" name="default-switch-checkbox" role="switch" type="checkbox" value="1">\n    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>\n</div>\n<div class="form-check form-switch">\n    <input type="hidden" name="checked-switch-checkbox" value="0"><input checked class="form-check-input" id="flexSwitchCheckChecked" name="checked-switch-checkbox" role="switch" type="checkbox" value="1">\n    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>\n</div>\n<div class="form-check form-switch">\n    <input type="hidden" disabled name="disabled-switch-checkbox" value="0"><input class="form-check-input" disabled id="flexSwitchCheckDisabled" name="disabled-switch-checkbox" role="switch" type="checkbox" value="1">\n    <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>\n</div>\n<div class="form-check form-switch">\n    <input type="hidden" disabled name="disabled-checked-switch-checkbox" value="0"><input checked class="form-check-input" disabled id="flexSwitchCheckChecked" name="disabled-checked-switch-checkbox" role="switch" type="checkbox" value="1">\n    <label class="form-check-label" for="flexSwitchCheckChecked">Disabled checked switch checkbox input</label>\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\n// Default switch checkbox input\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'default-switch-checkbox',\n            'type'       => 'checkbox',\n            'options'    => [\n                'switch'     => true,\n                'label'      => 'Default switch checkbox input',\n                'form_group' => false,\n            ],\n            'attributes' => [    'id' => 'flexSwitchCheckDefault'    ],\n        ]\n    )\n);\n\necho PHP_EOL;\n\n// Checked switch checkbox input\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'checked-switch-checkbox',\n            'type'       => 'checkbox',\n            'options'    => [\n                'switch'     => true,\n                'label'      => 'Checked switch checkbox input',\n                'form_group' => false,\n            ],\n            'attributes' => [\n                'id'      => 'flexSwitchCheckChecked',\n                'checked' => true,\n            ],\n        ]\n    )\n);\n\necho PHP_EOL;\n\n// Disabled switch checkbox input\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'disabled-switch-checkbox',\n            'type'       => 'checkbox',\n            'options'    => [\n                'switch'     => true,\n                'label'      => 'Disabled switch checkbox input',\n                'form_group' => false,\n            ],\n            'attributes' => [\n                'id'       => 'flexSwitchCheckDisabled',\n                'disabled' => true,\n            ],\n        ]\n    )\n);\n\necho PHP_EOL;\n\n// Disabled checked switch checkbox input\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'disabled-checked-switch-checkbox',\n            'type'       => 'checkbox',\n            'options'    => [\n                'switch'     => true,\n                'label'      => 'Disabled checked switch checkbox input',\n                'form_group' => false,\n            ],\n            'attributes' => [\n                'id'       => 'flexSwitchCheckChecked',\n                'checked'  => true,\n                'disabled' => true,\n            ],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h2",{id:"default-stacked"},"Default (stacked)"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#default-stacked"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="form-check">\n    <input type="hidden" name="default-checkbox" value="0"><input class="form-check-input" id="defaultCheck1" name="default-checkbox" type="checkbox" value="1">\n    <label class="form-check-label" for="defaultCheck1">Default checkbox</label>\n</div>\n<div class="form-check">\n    <input type="hidden" disabled name="disabled-checkbox" value="0"><input class="form-check-input" disabled id="defaultCheck2" name="disabled-checkbox" type="checkbox" value="1">\n    <label class="form-check-label" for="defaultCheck2">Disabled checkbox</label>\n</div>\n<br>\n<div class="form-check">\n    <input class="form-check-input" id="exampleRadios1" name="exampleRadios" type="radio" value="option1">\n    <label class="form-check-label" for="exampleRadios1">Default radio</label>\n</div>\n<div class="form-check">\n    <input class="form-check-input" id="exampleRadios2" name="exampleRadios" type="radio" value="option2">\n    <label class="form-check-label" for="exampleRadios2">Second default radio</label>\n</div>\n<div class="form-check">\n    <input class="form-check-input" disabled id="exampleRadios3" name="exampleRadios" type="radio" value="option3">\n    <label class="form-check-label" for="exampleRadios3">Disabled radio</label>\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\n// Render Default checkbox\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'default-checkbox',\n            'type'       => 'checkbox',\n            'options'    => [\n                'label'      => 'Default checkbox',\n                'form_group' => false,\n            ],\n            'attributes' => [    'id' => 'defaultCheck1'    ],\n        ]\n    )\n);\n\n// Render Disabled checkbox\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'disabled-checkbox',\n            'type'       => 'checkbox',\n            'options'    => [\n                'label'      => 'Disabled checkbox',\n                'form_group' => false,\n            ],\n            'attributes' => [\n                'id'       => 'defaultCheck2',\n                'disabled' => true,\n            ],\n        ]\n    )\n);\n\necho PHP_EOL.'<br/>';\n\n// Render radio\necho $this->formRow(\n    $factory->create(\n        [\n            'name'    => 'exampleRadios',\n            'type'    => 'radio',\n            'options' => [\n                'form_group'    => false,\n                'value_options' => [\n                    [\n                        'label'      => 'Default radio',\n                        'value'      => 'option1',\n                        'attributes' => ['id' => 'exampleRadios1'],\n                    ],\n                    [\n                        'label'      => 'Second default radio',\n                        'value'      => 'option2',\n                        'attributes' => ['id' => 'exampleRadios2'],\n                    ],\n                    [\n                        'label'      => 'Disabled radio',\n                        'value'      => 'option3',\n                        'disabled'   => true,\n                        'attributes' => ['id' => 'exampleRadios3'],\n                    ],\n                ],\n            ],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h2",{id:"inline"},"Inline"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#inline"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="col-auto">\n    <div class="form-check form-check-inline">\n        <input class="form-check-input" id="inlineCheckbox1" name="inlineCheckboxOptions[]" type="checkbox" value="option1">\n        <label class="form-check-label" for="inlineCheckbox1">1</label>\n    </div>\n    <div class="form-check form-check-inline">\n        <input class="form-check-input" id="inlineCheckbox2" name="inlineCheckboxOptions[]" type="checkbox" value="option2">\n        <label class="form-check-label" for="inlineCheckbox2">2</label>\n    </div>\n    <div class="form-check form-check-inline">\n        <input class="form-check-input" disabled id="inlineCheckbox3" name="inlineCheckboxOptions[]" type="checkbox" value="option3">\n        <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>\n    </div>\n</div>\n<br>\n<div class="col-auto">\n    <div class="form-check form-check-inline">\n        <input class="form-check-input" id="inlineRadio1" name="inlineRadioOptions" type="radio" value="option1">\n        <label class="form-check-label" for="inlineRadio1">1</label>\n    </div>\n    <div class="form-check form-check-inline">\n        <input class="form-check-input" id="inlineRadio2" name="inlineRadioOptions" type="radio" value="option2">\n        <label class="form-check-label" for="inlineRadio2">2</label>\n    </div>\n    <div class="form-check form-check-inline">\n        <input class="form-check-input" disabled id="inlineRadio3" name="inlineRadioOptions" type="radio" value="option3">\n        <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>\n    </div>\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\n// Render checkbox\necho $this->formRow(\n    $factory->create(\n        [\n            'name'    => 'inlineCheckboxOptions',\n            'type'    => 'multicheckbox',\n            'options' => [\n                'layout'        => 'inline',\n                'form_group'    => false,\n                'value_options' => [\n                    [\n                        'label'      => '1',\n                        'value'      => 'option1',\n                        'attributes' => ['id' => 'inlineCheckbox1'],\n                    ],\n                    [\n                        'label'      => '2',\n                        'value'      => 'option2',\n                        'attributes' => ['id' => 'inlineCheckbox2'],\n                    ],\n                    [\n                        'label'      => '3 (disabled)',\n                        'value'      => 'option3',\n                        'disabled'   => true,\n                        'attributes' => ['id' => 'inlineCheckbox3'],\n                    ],\n                ],\n            ],\n        ]\n    )\n);\n\necho PHP_EOL.'<br/>';\n\n// Render radio\necho $this->formRow(\n    $factory->create(\n        [\n            'name'    => 'inlineRadioOptions',\n            'type'    => 'radio',\n            'options' => [\n                'layout'        => 'inline',\n                'form_group'    => false,\n                'value_options' => [\n                    [\n                        'label'      => '1',\n                        'value'      => 'option1',\n                        'attributes' => ['id' => 'inlineRadio1'],\n                    ],\n                    [\n                        'label'      => '2',\n                        'value'      => 'option2',\n                        'attributes' => ['id' => 'inlineRadio2'],\n                    ],\n                    [\n                        'label'      => '3 (disabled)',\n                        'value'      => 'option3',\n                        'disabled'   => true,\n                        'attributes' => ['id' => 'inlineRadio3'],\n                    ],\n                ],\n            ],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h2",{id:"without-labels"},"Without labels"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#without-labels"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="form-check">\n    <input type="hidden" name="checkboxNoLabel" value="0"><input aria-label="..." class="form-check-input" id="checkboxNoLabel" name="checkboxNoLabel" type="checkbox" value="1">\n</div>\n<div class="form-check">\n    <input aria-label="..." class="form-check-input position-static" id="radioNoLabel1" name="radioNoLabel" type="radio" value="option1">\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n\n$factory = new \\Laminas\\Form\\Factory();\n\n// Render checkbox\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'checkboxNoLabel',\n            'type'       => 'checkbox',\n            'options'    => [\n                'form_group' => false,\n                'label'      => '',\n                'value'      => 'option1',\n            ],\n            'attributes' => [\n                'id'         => 'checkboxNoLabel',\n                'aria-label' => '...',\n            ],\n        ]\n    )\n);\n\n// Render radio\necho $this->formRow(\n    $factory->create(\n        [\n            'name'    => 'radioNoLabel',\n            'type'    => 'radio',\n            'options' => [\n                'form_group'    => false,\n                'value_options' => [\n                    [\n                        'label'      => '',\n                        'value'      => 'option1',\n                        'attributes' => [\n                            'id'         => 'radioNoLabel1',\n                            'aria-label' => '...',\n                        ],\n                    ],\n                ],\n            ],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h2",{id:"toggle-buttons"},"Toggle buttons"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#toggle-buttons"},"Twitter bootstrap Documentation")),(0,l.kt)("h3",{id:"checkbox-toggle-buttons"},"Checkbox toggle buttons"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#checkbox-toggle-buttons"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="form-check">\n    <input type="hidden" name="single-toggle" value="0"><input autocomplete="off" class="btn-check" id="btn-check-1" name="single-toggle" type="checkbox" value="1">\n    <label class="btn btn-primary" for="btn-check-1">Single toggle</label>\n</div>\n<div class="form-check">\n    <input type="hidden" name="single-toggle" value="0"><input autocomplete="off" checked class="btn-check" id="btn-check-2" name="single-toggle" type="checkbox" value="1">\n    <label class="btn btn-primary" for="btn-check-2">Checked</label>\n</div>\n<div class="form-check">\n    <input type="hidden" disabled name="single-toggle" value="0"><input autocomplete="off" class="btn-check" disabled id="btn-check-3" name="single-toggle" type="checkbox" value="1">\n    <label class="btn btn-primary" for="btn-check-3">Disabled</label>\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n\n$factory = new \\Laminas\\Form\\Factory();\n\n// Single toggle\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'single-toggle',\n            'type'       => 'checkbox',\n            'options'    => [\n                'button'     => 'primary',\n                'form_group' => false,\n                'label'      => 'Single toggle',\n            ],\n            'attributes' => [\n                'id'           => 'btn-check-1',\n                'autocomplete' => 'off',\n            ],\n        ]\n    )\n);\n\necho PHP_EOL;\n\n// Checked\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'single-toggle',\n            'type'       => 'checkbox',\n            'options'    => [\n                'button'     => 'primary',\n                'form_group' => false,\n                'label'      => 'Checked',\n            ],\n            'attributes' => [\n                'id'           => 'btn-check-2',\n                'autocomplete' => 'off',\n                'checked'      => true,\n            ],\n        ]\n    )\n);\n\necho PHP_EOL;\n\n// Disabled\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'single-toggle',\n            'type'       => 'checkbox',\n            'options'    => [\n                'button'     => 'primary',\n                'form_group' => false,\n                'label'      => 'Disabled',\n            ],\n            'attributes' => [\n                'id'           => 'btn-check-3',\n                'autocomplete' => 'off',\n                'disabled'     => true,\n            ],\n        ]\n    )\n);\n\necho PHP_EOL;\n\n")))),(0,l.kt)("h3",{id:"radio-toggle-buttons"},"Radio toggle buttons"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#radio-toggle-buttons"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="col-auto">\n    <div class="form-check form-check-inline">\n        <input autocomplete="off" checked class="btn-check" id="option1" name="inlineRadioOptions" type="radio" value="option1">\n        <label class="btn btn-secondary" for="option1">Checked</label>\n    </div>\n    <div class="form-check form-check-inline">\n        <input autocomplete="off" class="btn-check" id="option2" name="inlineRadioOptions" type="radio" value="option2">\n        <label class="btn btn-secondary" for="option2">Radio</label>\n    </div>\n    <div class="form-check form-check-inline">\n        <input autocomplete="off" class="btn-check" disabled id="inlineRadio3" name="inlineRadioOptions" type="radio" value="option3">\n        <label class="btn btn-secondary" for="inlineRadio3">Disabled</label>\n    </div>\n    <div class="form-check form-check-inline">\n        <input class="btn-check" id="inlineRadio3" name="inlineRadioOptions" type="radio" value="option4">\n        <label class="btn btn-secondary" for="inlineRadio3">Radio</label>\n    </div>\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'inlineRadioOptions',\n            'type'       => 'radio',\n            'options'    => [\n                'button'        => true,\n                'layout'        => 'inline',\n                'form_group'    => false,\n                'value_options' => [\n                    [\n                        'label'      => 'Checked',\n                        'value'      => 'option1',\n                        'attributes' => [\n                            'id'           => 'option1',\n                            'autocomplete' => 'off',\n                        ],\n                    ],\n                    [\n                        'label'      => 'Radio',\n                        'value'      => 'option2',\n                        'attributes' => [\n                            'id'           => 'option2',\n                            'autocomplete' => 'off',\n                        ],\n                    ],\n                    [\n                        'label'      => 'Disabled',\n                        'value'      => 'option3',\n                        'disabled'   => true,\n                        'attributes' => [\n                            'id'           => 'inlineRadio3',\n                            'autocomplete' => 'off',\n                        ],\n                    ],\n                    [\n                        'label'      => 'Radio',\n                        'value'      => 'option4',\n                        'attributes' => ['id' => 'inlineRadio3'],\n                    ],\n                ],\n            ],\n            'attributes' => ['value' => 'option1'],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h3",{id:"outlined-styles"},"Outlined styles"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/checks-radios/#outlined-styles"},"Twitter bootstrap Documentation")),(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<div class="form-check">\n    <input type="hidden" name="single-toggle-outlined" value="0"><input autocomplete="off" class="btn-check" id="btn-check-outlined" name="single-toggle-outlined" type="checkbox" value="1">\n    <label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label>\n</div>\n<div class="form-check">\n    <input type="hidden" name="single-toggle" value="0"><input autocomplete="off" checked class="btn-check" id="btn-check-2-outlined" name="single-toggle" type="checkbox" value="1">\n    <label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label>\n</div>\n<div class="col-auto">\n    <div class="form-check form-check-inline">\n        <input autocomplete="off" checked class="btn-check" id="success-outlined" name="options-outlined" type="radio" value="option1">\n        <label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>\n    </div>\n    <div class="form-check form-check-inline">\n        <input autocomplete="off" class="btn-check" id="danger-outlined" name="options-outlined" type="radio" value="option2">\n        <label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>\n    </div>\n</div>'}}))),(0,l.kt)(i.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\n// Single toggle outlined\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'single-toggle-outlined',\n            'type'       => 'checkbox',\n            'options'    => [\n                'button'     => 'outline-primary',\n                'form_group' => false,\n                'label'      => 'Single toggle',\n            ],\n            'attributes' => [\n                'id'           => 'btn-check-outlined',\n                'autocomplete' => 'off',\n            ],\n        ]\n    )\n);\n\necho PHP_EOL;\n\n// Checked outlined\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'single-toggle',\n            'type'       => 'checkbox',\n            'options'    => [\n                'button'     => 'outline-secondary',\n                'form_group' => false,\n                'label'      => 'Checked',\n            ],\n            'attributes' => [\n                'id'           => 'btn-check-2-outlined',\n                'autocomplete' => 'off',\n                'checked'      => true,\n            ],\n        ]\n    )\n);\n\necho PHP_EOL;\n\n// Checked success radio\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'options-outlined',\n            'type'       => 'radio',\n            'options'    => [\n                'form_group'    => false,\n                'layout'        => 'inline',\n                'value_options' => [\n                    [\n                        'label'      => 'Checked success radio',\n                        'value'      => 'option1',\n                        'button'     => 'outline-success',\n                        'attributes' => [\n                            'id'           => 'success-outlined',\n                            'autocomplete' => 'off',\n                        ],\n                    ],\n                    [\n                        'label'      => 'Danger radio',\n                        'value'      => 'option2',\n                        'button'     => 'outline-danger',\n                        'attributes' => [\n                            'id'           => 'danger-outlined',\n                            'autocomplete' => 'off',\n                        ],\n                    ],\n                ],\n            ],\n            'attributes' => ['value' => 'option1'],\n        ]\n    )\n);\n\n")))))}m.isMDXComponent=!0}}]);