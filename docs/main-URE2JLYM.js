import{B as c,a,b as l,c as s,f as u,h as x,i as r,j as n,k as p,n as i,w as g,x as h,y as v,z as y}from"./chunk-7FXBMLUJ.js";var w=(()=>{let t=class t{constructor(){this.route={route:"./alejandro-toro"}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["welcome-page"]],decls:18,vars:1,consts:[[1,"container","w-2/4","sm:h-[300px]","md:h-[200px]","lg:h-80","welcome"],[1,"flex","flex-col"],[1,"text-4xl","md:text-7xl","lg:text-8xl","xl:text-9xl","text-secundary"],[1,"text-blueLight"],[1,"text-light"],[1,"flex","flex-col","lg:flex-row","md:mt-4","md:p-10","lg:mt-0"],["src","../assets/marcaName.png","alt","imagen de la marca personal",1,"lg:w-[500px]"],[1,"md:mt-6","lg:mt-8","lg:ml-8","cursor-pointer"],[1,"text-light","sm:text-lg","md:text-xl","hover:text-secundary","text-center",3,"routerLink"]],template:function(o,f){o&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),i(3," BIENV"),r(4,"span",3),i(5,"E"),n(),r(6,"span",4),i(7,"NIDOS"),n()(),r(8,"div",5)(9,"div"),p(10,"img",6),n(),r(11,"div",7)(12,"p",8)(13,"span",3),i(14," <"),n(),i(15,"VerM\xE1s "),r(16,"span",3),i(17,"/>"),n()()()()()()),o&2&&(u(12),x("routerLink",f.route.route))},dependencies:[y],styles:[".welcome[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.letter[_ngcontent-%COMP%]{width:10%;margin:0 auto}"]});let e=t;return e})();var S=[{path:"",component:w},{path:"alejandro-toro",loadChildren:()=>import("./chunk-4SPYDAOV.js").then(e=>e.HomeModule)},{path:"**",redirectTo:""}],M=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s({type:t}),t.\u0275inj=a({imports:[c.forRoot(S),c]});let e=t;return e})();var C=(()=>{let t=class t{constructor(){this.title="portafolio"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(o,f){o&1&&p(0,"router-outlet")},dependencies:[v]});let e=t;return e})();var N=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s({type:t,bootstrap:[C]}),t.\u0275inj=a({imports:[h,M]});let e=t;return e})();g().bootstrapModule(N).catch(e=>console.error(e));