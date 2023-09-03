"use strict";(self.webpackChunkreact_ui=self.webpackChunkreact_ui||[]).push([[633],{53633:function(lt,O,i){i.r(O),i.d(O,{VirtualList:function(){return R},VirtualTable:function(){return tt}});var B=i(54306),A=i.n(B),D=i(50959),F=i(92935),z=i.n(F),k=i(67216),E,G=k.ZP.div(E||(E=z()([`
  overflow: auto;
  .virtual-list{
    position: relative;
    border: 1px solid #dedede;
    overflow: auto;
    .list{
      display: flex;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      position: absolute;
      width: 100%;
      border-bottom: 1px solid #ddd;
      &:last-of-type{
        border-bottom: none;
      }
    }
    .list-item-odd{
      background-color: #eee;
    }
    .list-item-even{
      background-color: #fff;
    }
  }
`]))),e=i(11527),J=function(t){var r=t.idx,n=t.stripe,l=t.style,c=t.item;return(0,e.jsx)("div",{className:n?r%2?"list list-item-odd":"list list-item-even":"list",style:l,children:c.name})},K=J,Q=function(t){var r=t.height,n=r===void 0?300:r,l=t.width,c=l===void 0?600:l,d=t.itemHeight,a=d===void 0?30:d,o=t.stripe,v=o===void 0?!1:o,m=t.listData,x=t.onScroll,H=(0,D.useState)(0),b=A()(H,2),p=b[0],w=b[1],y=m.length,V=function(){for(var s=Math.floor(p/a),f=Math.max(0,s-2),$=Math.ceil(n/a),I=Math.min(y,s+$+3),g=[],h=f;h<I;h++){var N={height:a,top:a*h};g.push((0,e.jsx)(K,{idx:h,stripe:v,style:N,item:m[h]},h+Math.random()))}return g},S=function(s){var f=s.currentTarget.scrollTop;w(f),x(s)};return(0,e.jsx)(G,{children:(0,e.jsx)("div",{className:"virtual-list",style:{width:c,height:n},onScroll:S,children:V()})})},R=Q,U=i(57213),P=i.n(U),W,X=k.ZP.div(W||(W=z()([`

  .virtual-table {
    border:1px solid #dedede;
    color: #333;
    width: 100%;
    .table{
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: auto;
      width: 100%;
      .thead,.tbody{
        width: 100%;
        .tr{
          display: flex;
          width: 100%;
          .th,.td{
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid #999;
            line-height: 1em;
            &:last-of-type{
              border-right: none;
            }
          }
        }
      }
      
      .thead{
        top: 0;
        z-index: 10000;
        .tr{
          background-color: #dedede;
          .th{
            font-weight: bold;
          }
        }
      }
      .tbody{
        overflow: auto;
        .tr{
          position: absolute;
          border-bottom: 1px solid #dedede;
          &:last-of-type{
            border-bottom: none;
          }
          .td{
            border-color: #dedede;
          }
        }
        .item-odd{
          background-color: #fff;
        }
        .item-even{
          background-color: #eee;
        }
      }
      
    }
  }
  
`]))),Y=function(t){var r=t.stripe,n=t.item,l=t.style,c=t.idx,d=[],a=Object.keys(n);return a.forEach(function(o,v){d.push((0,e.jsx)("div",{className:"td",style:{width:1/a.length*100+"%",height:l.height},children:n[o]},v+Math.random()))}),(0,e.jsx)("div",{style:l,className:r?c%2?"tr item-odd":"tr item-even":"tr",children:d})},q=Y,_=function(t){var r=t.itemHeight,n=r===void 0?40:r,l=t.showHeader,c=l===void 0?!0:l,d=t.stripe,a=d===void 0?!1:d,o=t.tableData,v=t.height,m=v===void 0?300:v,x=t.fixHead,H=x===void 0?!1:x,b=t.style,p=t.headerAlign,w=p===void 0?"left":p,y=t.align,V=y===void 0?"left":y,S=[],M=(0,D.useState)(0),s=A()(M,2),f=s[0],$=s[1],I=o.length,g=Object.keys(o[0]);g.forEach(function(j){S.push((0,e.jsx)("div",{className:"th",style:{width:1/g.length*100+"%",height:n},children:j},j))});var h=function(T){var L=T.currentTarget.scrollTop;$(L)},N=function(){for(var T=Math.floor(f/n),L=Math.max(0,T-2),et=Math.ceil(m/n),nt=Math.min(I,T+et+3),Z=[],u=L;u<nt;u++){var it={textAlign:V,height:n,top:n*u};Z.push((0,e.jsx)(q,{idx:u,stripe:a,item:o[u],style:it},u+Math.random()))}return Z};return(0,e.jsx)(X,{children:(0,e.jsx)("div",{className:"virtual-table",children:(0,e.jsxs)("div",{style:P()(P()({},b),{},{height:m}),onScroll:h,className:"table",children:[c&&(0,e.jsx)("div",{className:"thead",style:{position:H?"sticky":"relative"},children:(0,e.jsx)("div",{className:"tr",style:{textAlign:w},children:S})}),(0,e.jsx)("div",{className:"tbody",children:N()})]})})})},tt=_}}]);
