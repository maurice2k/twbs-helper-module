(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return r})),a.d(t,"default",(function(){return c}));var i=a(3),n=a(7),l=(a(0),a(94)),o={id:"installation",title:"Installation"},s={unversionedId:"installation",id:"installation",isDocsHomePage:!0,title:"Installation",description:"Install this library using composer",source:"@site/docs/installation.md",sourceDirName:".",slug:"/",permalink:"/twbs-helper-module/docs/",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/installation.md",version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docsSidebar",next:{title:"Introduction",permalink:"/twbs-helper-module/docs/rendering"}},r=[{value:"Install this library using composer",id:"install-this-library-using-composer",children:[]},{value:"Include Twitter Bootstrap assets",id:"include-twitter-bootstrap-assets",children:[]}],p={toc:r};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"install-this-library-using-composer"},"Install this library using composer"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell-session"},"composer require neilime/twbs-helper-module\n")),Object(l.b)("h3",{id:"include-twitter-bootstrap-assets"},"Include Twitter Bootstrap assets"),Object(l.b)("h4",{id:"with-assetsbundle-module-easy-way"},"With ",Object(l.b)("strong",{parentName:"h4"},"AssetsBundle")," module (easy way)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Install the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/neilime/zf-assets-bundle/wiki/Installation"},"AssetsBundle module"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Install ",Object(l.b)("a",{parentName:"p",href:"https://github.com/twbs/bootstrap#quick-start"},"Twitter Bootstrap"),":"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell-session"},"composer require twbs/bootstrap\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Edit the application module configuration file ",Object(l.b)("inlineCode",{parentName:"p"},"module/Application/config/module.config.php"),", adding the configuration fragment below:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-php",metastring:'title="module/Application/config/module.config.php" {3-7}',title:'"module/Application/config/module.config.php"',"{3-7}":!0},"return [\n  //...\n  'assets_bundle' => [\n    'assets' => [\n      'less' => ['@zfRootPath/vendor/twitter/bootstrap/less/bootstrap.less'],\n    ],\n  ],\n  //...\n];\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Edit layout file ",Object(l.b)("inlineCode",{parentName:"p"},"module/Application/view/layout/layout.phtml"),", to render head scripts:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-php",metastring:'title="module/Application/view/layout/layout.phtml" {2}',title:'"module/Application/view/layout/layout.phtml"',"{2}":!0},"//...\necho $this->headScript();\n//...\n")))),Object(l.b)("h4",{id:"manually"},"Manually"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Copy ",Object(l.b)("inlineCode",{parentName:"li"},"bootstrap.css")," file (available on ",Object(l.b)("a",{parentName:"li",href:"https://github.com/twbs/bootstrap/archive/v3.0.0.zip"},"Twitter Bootstrap website"),") into your assets folder and add it in your head scripts.")))}c.isMDXComponent=!0}}]);