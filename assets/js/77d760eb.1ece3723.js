"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1270],{8943:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var s=t(7462),a=t(3366),l=(t(7294),t(3905)),o=t(6396),r=t(8215),i=(t(9055),t(4321)),d=["components"],m={sidebar_position:1,label:"Overview"},p="Overview",c={unversionedId:"usage/forms/overview",id:"usage/forms/overview",title:"Overview",description:"Twitter bootstrap Documentation",source:"@site/docs/usage/forms/overview.mdx",sourceDirName:"usage/forms",slug:"/usage/forms/overview",permalink:"/twbs-helper-module/docs/usage/forms/overview",editUrl:"https://neilime/twbs-helper-module/edit/main/website/docs/usage/forms/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,label:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Figures",permalink:"/twbs-helper-module/docs/usage/content/figures"},next:{title:"Form controls",permalink:"/twbs-helper-module/docs/usage/forms/form-controls"}},u=[{value:"Overview",id:"overview-1",children:[],level:2},{value:"Form text",id:"form-text",children:[],level:2},{value:"Disabled forms",id:"disabled-forms",children:[],level:2}],b={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,d);return(0,l.kt)("wrapper",(0,s.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"overview"},"Overview"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/overview"},"Twitter bootstrap Documentation")),(0,l.kt)("h2",{id:"overview-1"},"Overview"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/overview/#overview"},"Twitter bootstrap Documentation")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(i.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<form action="" id="form" method="POST" name="form" role="form">\n    <div class="mb-3">\n        <label class="form-label" for="exampleInputEmail1">Email address</label>\n        <input name="email" type="email" id="exampleInputEmail1" class="form-control" aria-describedby="emailHelp" value=""></input>\n        <div class="form-text" id="emailHelp">\n            We\'ll never share your email with anyone else.\n        </div>\n    </div>\n    <div class="mb-3">\n        <label class="form-label" for="exampleInputPassword1">Password</label>\n        <input name="password" type="password" id="exampleInputPassword1" class="form-control" value=""></input>\n    </div>\n    <div class="mb-3">\n        <div class="form-check">\n            <input class="form-check-input" id="exampleCheck1" name="remember_me" type="checkbox" value="1"></input>\n            <label class="form-check-label" for="exampleCheck1">Check me out</label>\n        </div>\n    </div>\n    <button class="btn btn-primary" name="submit" type="submit" value="">Submit</button>\n</form>'}}))),(0,l.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\necho $this->form(\n    $factory->create(\n        [\n            'type'     => 'form',\n            'elements' => [\n                [\n                    'spec' => [\n                        'name'       => 'email',\n                        'options'    => [\n                            'label'      => 'Email address',\n                            'help_block' => [\n                                'content'    => 'We\\'ll never share your email with anyone else.',\n                                'attributes' => ['id' => 'emailHelp'],\n                            ],\n                        ],\n                        'attributes' => [\n                            'type' => 'email',\n                            'id'   => 'exampleInputEmail1',\n                        ],\n                    ],\n                ],\n                [\n                    'spec' => [\n                        'name'       => 'password',\n                        'options'    => ['label' => 'Password'],\n                        'attributes' => [\n                            'type' => 'password',\n                            'id'   => 'exampleInputPassword1',\n                        ],\n                    ],\n                ],\n                [\n                    'spec' => [\n                        'type'       => 'checkbox',\n                        'name'       => 'remember_me',\n                        'options'    => [\n                            'label'              => 'Check me out',\n                            'use_hidden_element' => false,\n                        ],\n                        'attributes' => [    'id' => 'exampleCheck1'    ],\n                    ],\n                ],\n                [\n                    'spec' => [\n                        'type'    => 'submit',\n                        'options' => [\n                            'label'   => 'Submit',\n                            'variant' => 'primary',\n                        ],\n                    ],\n                ],\n            ],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h2",{id:"form-text"},"Form text"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/overview/#form-text"},"Twitter bootstrap Documentation")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(i.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<label class="form-label" for="inputPassword5">Password</label>\n<input name="password" id="inputPassword5" type="password" class="form-control" aria-describedby="passwordHelpBlock" value=""></input>\n<div class="form-text" id="passwordHelpBlock">\n    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.\n</div>\n<br></br>\n<form action="" class="align-items-center g-3 row" id="form" method="POST" name="form" role="form">\n    <div class="col-auto">\n        <label class="col-form-label" for="inputPassword6">Password</label>\n    </div>\n    <div class="col-auto">\n        <input name="password" id="inputPassword6" type="password" class="form-control" aria-describedby="passwordHelpInline" value=""></input>\n    </div>\n    <div class="col-auto">\n        <span class="form-text" id="passwordHelpInline">Must be 8-20 characters long.</span>\n    </div>\n</form>'}}))),(0,l.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\necho $this->formRow(\n    $factory->create(\n        [\n            'name'       => 'password',\n            'options'    => [\n                'label'      => 'Password',\n                'form_group' => false,\n                'help_block' => [\n                    'content'    => 'Your password must be 8-20 characters long, contain letters and numbers, '.'and must not contain spaces, special characters, or emoji.',\n                    'attributes' => ['id' => 'passwordHelpBlock'],\n                ],\n            ],\n            'attributes' => [\n                'id'   => 'inputPassword5',\n                'type' => 'password',\n            ],\n        ]\n    )\n);\n\necho PHP_EOL.'<br/>';\n\n// Inline text can use any typical inline HTML element\n// (be it a <small>, <span>, or something else)\n// with nothing more than a utility class\necho $this->form(\n    $factory->create(\n        [\n            'type'       => 'form',\n            'options'    => [\n                'layout' => \\TwbsHelper\\Form\\View\\Helper\\Form::LAYOUT_INLINE,\n            ],\n            'attributes' => ['class' => 'g-3'],\n            'elements'   => [\n                [\n                    'spec' => [\n                        'name'       => 'password',\n                        'options'    => [\n                            'label'      => 'Password',\n                            'help_block' => [\n                                'content'    => 'Must be 8-20 characters long.',\n                                'attributes' => ['id' => 'passwordHelpInline'],\n                            ],\n                        ],\n                        'attributes' => [\n                            'id'   => 'inputPassword6',\n                            'type' => 'password',\n                        ],\n                    ],\n                ],\n            ],\n        ]\n    )\n);\n\n")))),(0,l.kt)("h2",{id:"disabled-forms"},"Disabled forms"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/forms/overview/#disabled-forms"},"Twitter bootstrap Documentation")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"result",label:"Result",default:!0,mdxType:"TabItem"},(0,l.kt)(i.Z,{bootstrapVersion:"5.1",mdxType:"HtmlCode"},(0,l.kt)("div",{dangerouslySetInnerHTML:{__html:'<form action="" id="form" method="POST" name="form" role="form">\n    <fieldset disabled="disabled">\n        <div class="mb-3">\n            <label class="form-label" for="disabledTextInput">Disabled input</label>\n            <input class="form-control" id="disabledTextInput" name="fieldset[disabled-input]" placeholder="Disabled input" type="text" value=""></input>\n        </div>\n        <div class="mb-3">\n            <label class="form-label" for="disabledSelect">Disabled select menu</label>\n            <select class="form-select" id="disabledSelect" name="fieldset[disabled-select]"><option value="">Disabled select</option></select>\n        </div>\n        <div class="mb-3">\n            <div class="form-check">\n                <input class="form-check-input" disabled="disabled" id="disabledFieldsetCheck" name="fieldset[disabled-fieldset-check]" type="checkbox" value="1"></input>\n                <label class="form-check-label" for="disabledFieldsetCheck">Can\'t check this</label>\n            </div>\n        </div>\n        <button class="btn btn-primary" name="fieldset[submit]" type="submit" value="">Submit</button>\n    </fieldset>\n</form>'}}))),(0,l.kt)(r.Z,{value:"source",label:"Source",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$factory = new \\Laminas\\Form\\Factory();\n\necho $this->form(\n    $factory->create(\n        [\n            'type'     => 'form',\n            'elements' => [\n                [\n                    'spec' => [\n                        'type'       => 'fieldset',\n                        'options'    => [    'label' => 'Disabled fieldset example'    ],\n                        'attributes' => [    'disabled' => true    ],\n                        'elements'   => [\n                            [\n                                'spec' => [\n                                    'name'       => 'disabled-input',\n                                    'options'    => ['label' => 'Disabled input'],\n                                    'attributes' => [\n                                        'type'        => 'text',\n                                        'id'          => 'disabledTextInput',\n                                        'placeholder' => 'Disabled input',\n                                    ],\n                                ],\n                            ],\n                            [\n                                'spec' => [\n                                    'name'       => 'disabled-select',\n                                    'type'       => 'select',\n                                    'attributes' => ['id' => 'disabledSelect'],\n                                    'options'    => [\n                                        'label'        => 'Disabled select menu',\n                                        'empty_option' => 'Disabled select',\n                                    ],\n                                ],\n                            ],\n                            [\n                                'spec' => [\n                                    'type'       => 'checkbox',\n                                    'name'       => 'disabled-fieldset-check',\n                                    'options'    => [\n                                        'label'              => 'Can\\'t check this',\n                                        'use_hidden_element' => false,\n                                    ],\n                                    'attributes' => [\n                                        'id'       => 'disabledFieldsetCheck',\n                                        'disabled' => true,\n                                    ],\n                                ],\n                            ],\n                            [\n                                'spec' => [\n                                    'type'    => 'submit',\n                                    'options' => [\n                                        'label'   => 'Submit',\n                                        'variant' => 'primary',\n                                    ],\n                                ],\n                            ],\n                        ],\n                    ],\n                ],\n            ],\n        ]\n    )\n);\n\n")))))}f.isMDXComponent=!0}}]);