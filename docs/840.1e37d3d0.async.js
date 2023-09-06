"use strict";(self.webpackChunkreact_ui=self.webpackChunkreact_ui||[]).push([[840],{62840:function(lt,O,i){i.r(O),i.d(O,{VirtualList:function(){return Q},VirtualTable:function(){return tt}});var Z=i(54306),A=i.n(Z),D=i(50959),n=i(11527),B=function(t){var a=t.idx,e=t.stripe,l=t.style,r=t.item;return(0,n.jsx)("div",{className:e?a%2?"list list-item-odd":"list list-item-even":"list",style:l,children:r.name})},F=B,G=i(92935),z=i.n(G),R=i(67216),k,J=R.ZP.div(k||(k=z()([`
  overflow: auto;
  .virtual-list {
    position: relative;
    border: 1px solid #dedede;
    overflow: auto;
    .list {
      display: flex;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      position: absolute;
      width: 100%;
      border-bottom: 1px solid #ddd;
      &:last-of-type {
        border-bottom: none;
      }
    }
    .list-item-odd {
      background-color: #eee;
    }
    .list-item-even {
      background-color: #fff;
    }
  }
`]))),K=function(t){var a=t.height,e=a===void 0?300:a,l=t.width,r=l===void 0?600:l,o=t.itemHeight,d=o===void 0?30:o,s=t.stripe,m=s===void 0?!1:s,v=t.listData,x=t.onScroll,H=(0,D.useState)(0),b=A()(H,2),p=b[0],V=b[1],y=v.length,M=function(){for(var h=Math.floor(p/d),g=Math.max(0,h-2),C=Math.ceil(e/d),I=Math.min(y,h+C+3),f=[],c=g;c<I;c++){var N={height:d,top:d*c};f.push((0,n.jsx)(F,{idx:c,stripe:m,style:N,item:v[c]},c+Math.random()))}return f},S=function(h){var g=h.currentTarget.scrollTop;V(g),x(h)};return(0,n.jsx)(J,{children:(0,n.jsx)("div",{className:"virtual-list",style:{width:r,height:e},onScroll:S,children:M()})})},Q=K,U=i(57213),E=i.n(U),P,X=R.ZP.div(P||(P=z()([` 
  .virtual-table {
    border: 1px solid #dedede;
    color: #333;
    width: 100%;
    .table {
      position: relative;
      overflow: auto;
      display: flex;
      flex-direction: column;
      width: 100%;
      .thead,
      .tbody {
        width: 100%;
        .tr {
          display: flex;
          width: 100%;
          margin: 0;
          padding: 0;
          .th,
          .td {
            list-style: none;
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid #999;
            line-height: 1em;
            &:last-of-type {
              border-right: none;
            }
          }
        }
      }

      .thead {
        top: 0;
        z-index: 10000;
        .tr {
          background-color: #dedede;
          .th {
            font-weight: bold;
          }
        }
      }
      .tbody {
        .tr {
          position: absolute;
          border-bottom: 1px solid #dedede;
          &:last-of-type {
            border-bottom: none;
          }
          .td {
            border-color: #dedede;
          }
        }
        .item-odd {
          background-color: #fff;
        }
        .item-even {
          background-color: #eee;
        }
      }
    }
  }
`]))),Y=function(t){var a=t.stripe,e=t.item,l=t.style,r=t.idx,o=[],d=Object.keys(e);return d.forEach(function(s,m){o.push((0,n.jsx)("li",{className:"td",style:{width:1/d.length*100+"%",height:l.height},children:e[s]},m+Math.random()))}),(0,n.jsx)("ul",{style:l,className:a?r%2?"tr item-even":"tr item-odd":"tr",children:o})},q=Y,_=function(t){var a=t.itemHeight,e=a===void 0?40:a,l=t.showHeader,r=l===void 0?!0:l,o=t.stripe,d=o===void 0?!1:o,s=t.tableData,m=t.height,v=m===void 0?400:m,x=t.fixHead,H=x===void 0?!1:x,b=t.style,p=t.headerAlign,V=p===void 0?"left":p,y=t.align,M=y===void 0?"left":y,S=[],$=(0,D.useState)(0),h=A()($,2),g=h[0],C=h[1],I=s.length,f=Object.keys(s[0]);f.forEach(function(j){S.push((0,n.jsx)("li",{className:"th",style:{width:1/f.length*100+"%",height:e},children:j},j))});var c=function(w){var L=w.currentTarget.scrollTop;C(L)},N=function(){for(var w=Math.floor(g/e),L=Math.max(0,w-2),et=Math.ceil(v/e),nt=Math.min(I,w+et+1),W=[],u=L;u<nt;u++){var it={textAlign:M,height:e,top:r?e+e*u:e*u};W.push((0,n.jsx)(q,{idx:u,stripe:d,item:s[u],style:it},u+Math.random()))}return W};return(0,n.jsx)(X,{children:(0,n.jsx)("div",{className:"virtual-table",children:(0,n.jsxs)("article",{style:E()(E()({},b),{},{height:v}),onScroll:c,className:"table",children:[r&&(0,n.jsx)("header",{className:"thead",style:{position:H?"sticky":"relative"},children:(0,n.jsx)("ul",{className:"tr",style:{textAlign:V},children:S})}),(0,n.jsx)("section",{className:"tbody",style:{height:r?v-e:v},children:N()})]})})})},tt=_}}]);
