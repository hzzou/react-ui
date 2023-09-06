"use strict";(self.webpackChunkreact_ui=self.webpackChunkreact_ui||[]).push([[840],{62840:function(it,O,l){l.r(O),l.d(O,{VirtualList:function(){return K},VirtualTable:function(){return q}});var W=l(54306),A=l.n(W),D=l(50959),e=l(11527),Z=function(t){var r=t.idx,n=t.stripe,i=t.style,a=t.item;return(0,e.jsx)("div",{className:n?r%2?"list list-item-odd":"list list-item-even":"list",style:i,children:a.name})},F=Z,B=l(92935),k=l.n(B),E=l(67216),z,G=E.ZP.div(z||(z=k()([`
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
`]))),J=function(t){var r=t.height,n=r===void 0?300:r,i=t.width,a=i===void 0?600:i,h=t.itemHeight,o=h===void 0?30:h,c=t.stripe,d=c===void 0?!1:c,f=t.listData,m=t.onScroll,b=(0,D.useState)(0),p=A()(b,2),y=p[0],V=p[1],j=f.length,$=function(){for(var u=Math.floor(y/o),g=Math.max(0,u-2),N=Math.ceil(n/o),C=Math.min(j,u+N+3),w=[],s=g;s<C;s++){var I={height:o,top:o*s};w.push((0,e.jsx)(F,{idx:s,stripe:d,style:I,item:f[s]},s+Math.random()))}return w},M=function(u){var g=u.currentTarget.scrollTop;V(g),m(u)};return(0,e.jsx)(G,{children:(0,e.jsx)("div",{className:"virtual-list",style:{width:a,height:n},onScroll:M,children:$()})})},K=J,R,Q=E.ZP.div(R||(R=k()([` 
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
        .default{
          width: 100%;
          height: 100%;
          color: #999;
          display: flex;
          justify-content: center;
          align-items: center;
        }
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
`]))),U=function(t){var r=t.stripe,n=t.item,i=t.style,a=t.idx,h=[],o=Object.keys(n);return o.forEach(function(c,d){h.push((0,e.jsx)("li",{className:"td",style:{width:1/o.length*100+"%",height:i.height},children:n[c]},d+Math.random()))}),(0,e.jsx)("ul",{style:i,className:r?a%2?"tr item-even":"tr item-odd":"tr",children:h})},X=U,Y=function(t){var r=t.itemHeight,n=r===void 0?40:r,i=t.showHeader,a=i===void 0?!0:i,h=t.stripe,o=h===void 0?!1:h,c=t.tableData,d=c===void 0?[]:c,f=t.height,m=f===void 0?400:f,b=t.fixHead,p=b===void 0?!0:b,y=t.headerAlign,V=y===void 0?"left":y,j=t.align,$=j===void 0?"left":j,M=t.onScroll,S=[],u=(0,D.useState)(0),g=A()(u,2),N=g[0],C=g[1],w=d.length,s=d.length>0?Object.keys(d[0]):[];s.forEach(function(T){S.push((0,e.jsx)("li",{className:"th",style:{width:1/s.length*100+"%",height:n},children:T},T))});var I=function(x){var L=x.currentTarget.scrollTop;C(L),M(x)},_=function(){for(var x=Math.floor(N/n),L=Math.max(0,x-2),tt=Math.ceil(m/n),et=Math.min(w,x+tt+1),P=[],v=L;v<et;v++){var nt={textAlign:$,height:n,top:a?n+n*v:n*v};P.push((0,e.jsx)(X,{idx:v,stripe:o,item:d[v],style:nt},v+Math.random()))}return P};return(0,e.jsx)(Q,{children:(0,e.jsx)("div",{className:"virtual-table",children:(0,e.jsxs)("article",{style:{height:m},onScroll:I,className:"table",children:[a&&(0,e.jsx)("header",{className:"thead",style:{position:p?"sticky":"relative"},children:(0,e.jsx)("ul",{className:"tr",style:{textAlign:V},children:S})}),(0,e.jsx)("section",{className:"tbody",style:{height:a?m-n:m},children:d.length>0?(0,e.jsx)(e.Fragment,{children:_()}):(0,e.jsx)("div",{className:"default",children:"\u6682\u65E0\u6570\u636E"})})]})})})},q=Y}}]);
