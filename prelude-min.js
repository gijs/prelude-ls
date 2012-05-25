// prelude-ls 0.1.0
// Copyright (c) 2012 George Zahariev
// Released under the MIT License
// raw.github.com/gkz/prelude-ls/master/LICNSE
this.Prelude=function(){function Pb(a,b){return a.length?function(){var c=b?b.concat():[];return c.push.apply(c,arguments)<a.length?Pb.call(this,a,c):a.apply(this,c)}:a}function Qb(a,b){return function(){return a(b.apply(this,arguments))}}function Rb(a,b){var c=0,d=b.length>>>0;while(c<d)if(a===b[c++])return!0;return!1}var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Nb,Ob=[].slice;a=function(a){return!a},b=Pb(function(a,b){return a===b}),c=function(){var a;return a=Ob.call(arguments),function(){var b,c,d,e,f;b=arguments;for(d=0,f=(e=a).length;d<f;++d)c=e[d],b=[c.apply(this,b)];return b[0]}},d=Math.max,e=Math.min,f=function(a){return-a},g=Math.abs,h=function(a){switch(!1){case!(a<0):return-1;case!(a>0):return 1;default:return 0}},i=function(a,b){return~~(a/b)},j=function(a,b){return a%b},k=function(a,b){return Math.floor(a/b)},l=function(a,b){var c;return(a%(c=b)+c)%c},m=function(a){return 1/a},n=Math.PI,o=Math.exp,p=Math.sqrt,q=Math.log,r=Math.pow,s=Math.sin,t=Math.tan,u=Math.cos,v=Math.asin,w=Math.atan,x=Math.atan2,y=Math.acos,z=function(a){return~~a},A=Math.round,B=Math.ceil,C=Math.floor,D=function(a){return a!==a},E=Pb(function(a,b){return a+b}),F=Pb(function(a,b){return a-b}),G=Pb(function(a,b){return b-a}),H=Pb(function(a,b){return a*b}),I=Pb(function(a,b){return a/b}),J=Pb(function(a,b){return b/a}),K=function(a){return a%2===0},L=function(a){return a%2!==0},M=Pb(function(a,b){var c;a=Math.abs(a),b=Math.abs(b);while(b!==0)c=a%b,a=b,b=c;return a}),N=Pb(function(a,b){return Math.abs(Math.floor(a/M(a,b)*b))}),O=function(a){return a},P=Pb(function(a,b,c){return a(c,b)}),Q=function(a){throw a},R=Pb(function(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d)c=b[d],a(c);return b}),S=Pb(function(a,b){var c,d,e,f;c=[];for(e=0,f=b.length;e<f;++e)d=b[e],c.push(a(d));return c}),T=Pb(function(a,b){return[a].concat(b)}),U=Pb(function(a,b){return a.concat(b)}),V=Pb(function(a,b){var c,d,e,f;c=[];for(e=0,f=b.length;e<f;++e)d=b[e],a(d)&&c.push(d);return c}),W=function(a){return a.slice(0,1)},X=function(a){return a.slice(1)},Y=function(a){return a.slice(a.length-1)},Z=function(a){return a.slice(0,a.length-1)},$=function(a){return!a.length},_=function(a){return a.length},ab=function(a){return a.slice().reverse()},cb=bb=Pb(function(a,b,c){var d,e,f;for(e=0,f=c.length;e<f;++e)d=c[e],b=a(b,d);return b}),eb=db=Pb(function(a,b){return cb(a,b[0],b.slice(1))}),fb=Pb(function(a,b,c){return cb(a,b,c.reverse())}),gb=Pb(function(a,b){return b.reverse(),cb(a,b[0],b.slice(1))}),hb=function(a){return cb(function(a,b){return a&&b},!0,a)},ib=function(a){return cb(function(a,b){return a||b},!1,a)},jb=Pb(function(a,b){return cb(function(b,c){return b||a(c)},!1,b)}),kb=Pb(function(a,b){return cb(function(b,c){return b&&a(c)},!0,b)}),lb=function(a){var b,c,d,e;b=0;for(d=0,e=a.length;d<e;++d)c=a[d],b+=c;return b},mb=function(a){var b,c,d,e;b=1;for(d=0,e=a.length;d<e;++d)c=a[d],b*=c;return b},nb=function(a){return cb(U,[],a)},ob=Pb(function(a,b){return nb(S(a,b))}),pb=function(a){return Math.max.apply(this,a)},qb=function(a){return Math.min.apply(this,a)},sb=rb=Pb(function(a,b,c){var d,e,f,g,h;d=[b],e=b;for(g=0,h=c.length;g<h;++g)f=c[g],d.push(e=a(e,f));return d}),ub=tb=Pb(function(a,b){return sb(a,b[0],b.slice(1))}),vb=Pb(function(a,b,c){return c.reverse(),sb(a,b,c).reverse()}),wb=Pb(function(a,b){return b.reverse(),sb(a,b[0],b.slice(1)).reverse()}),xb=Pb(function(a,b){var c,d;c=[],d=0;for(;d<a;++d)c.push(b);return c}),yb=Pb(function(a,b){switch(!1){case!(a<=0):return b;case!!b.length:return[];default:return b.slice(0,a)}}),zb=Pb(function(a,b){switch(!1){case!(a<=0):return b;case!!b.length:return[];default:return b.slice(a)}}),Ab=Pb(function(a,b){return[yb(a,b),zb(a,b)]}),Bb=Pb(function(a,b){var c,d,e,f;if(!b.length)return[];c=0;for(e=0,f=b.length;e<f;++e){d=b[e];if(!a(d))break;++c}return yb(c,b)}),Cb=Pb(function(a,b){var c,d,e,f;if(!b.length)return[];c=0;for(e=0,f=b.length;e<f;++e){d=b[e];if(!a(d))break;++c}return zb(c,b)}),Db=Pb(function(a,b){return[Bb(a,b),Cb(a,b)]}),Eb=Pb(function(b,c){return Db(Qb(a,b),c)}),Fb=Pb(function(a,b){return Rb(a,b)}),Gb=Pb(function(a,b){return!Rb(a,b)}),Hb=Pb(function(a,b){return b!=null?b[a]:void 8}),Ib=function(){var a,b,c,d,e,f,g,h,i;a=Ob.call(arguments),b=[];for(c=0,g=a.length;c<g;++c){d=a[c];for(e=0,h=d.length;e<h;++e)f=d[e],c===0&&b.push([]),(i=b[e])!=null&&i.push(f)}return b},Jb=function(a){var b,c,d,e,f,g;b=Ob.call(arguments,1);if(!b[0].length||!b[1].length)return[];c=[];for(e=0,g=(f=Ib.apply(this,b)).length;e<g;++e)d=f[e],c.push(a.apply(this,d));return c},Kb=function(a){return a.split("\n")},Lb=function(a){return a.join("\n")},Mb=function(a){return a.split(" ")},Nb=function(a){return a.join(" ")}}();