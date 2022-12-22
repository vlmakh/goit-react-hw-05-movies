"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[547],{7605:function(n,e,t){t.d(e,{T:function(){return u}});var r,o=t(168),a=t(4709),i=t(6048),s=t.n(i),u=(0,a.Z)(s())(r||(r=(0,o.Z)(["\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  margin-top: 16px;\n  font-size: ",";\n  font-weight: 700;\n\n  & li {\n    color: ",";\n\n    transition: color 250ms linear;\n\n    :hover:not(.disabled) {\n      color: ",";\n    }\n  }\n\n  & .activePage {\n    color: ",";\n  }\n\n  & a {\n    padding: 0 8px;\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}))},5547:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,o,a,i,s,u=t(2982),c=t(885),l=t(168),p=t(4709),h=t(8759),d=p.Z.div(r||(r=(0,l.Z)(["\n  margin: ","px auto 0;\n  max-width: 1280px;\n  height: 720px;\n  background-image: radial-gradient(\n      at center,\n      rgba(59, 67, 81, 0.2),\n      "," 70%\n    ),\n    url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.bcgMain}),h),f=p.Z.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  justify-content: center;\n  margin-top: 16px;\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),g=p.Z.li(a||(a=(0,l.Z)(["\n  box-shadow: none;\n\n  transition: box-shadow 250ms linear;\n\n  :hover,\n  :focus {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.shadows.blackShadow})),x=p.Z.form(i||(i=(0,l.Z)(["\n  display: flex;\n  margin: 0 auto;\n  max-width: 400px;\n"]))),m=p.Z.input(s||(s=(0,l.Z)(["\n  width: 100%;\n  padding: 4px 8px;\n\n  &:hover + button {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.bcgBtn})),b=t(370),Z=t(7605),v=t(6625),w=(t(1174),t(6731)),j=t(3682),y=t(7689),k=t(2791),C=t(4390),_=t(4373),P=t(5218),S=t(184);function L(n){var e,t,r=n.currentLang,o=(0,k.useState)([]),a=(0,c.Z)(o,2),i=a[0],s=a[1],l=(0,w.lr)(),p=(0,c.Z)(l,2),h=p[0],L=p[1],A=h.get(null!==(e="search")?e:""),N=h.get(null!==(t="page")?t:""),U=(0,k.useState)(N?Number(N):1),q=(0,c.Z)(U,2),z=q[0],T=q[1],D=(0,k.useState)(A||""),E=(0,c.Z)(D,2),F=E[0],H=E[1],M=(0,y.TH)(),O=(0,k.useState)(0),Y=(0,c.Z)(O,2),B=Y[0],G=Y[1],R="uk-UA"===r?"\u041d\u0435\u043c\u0430\u0454 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432 \u0437\u0430 \u0432\u0430\u0448\u0438\u043c \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c":"No results found due to your search inquiry",I="uk-UA"===r?"\u041f\u043e\u0440\u043e\u0436\u043d\u0456\u0439 \u0437\u0430\u043f\u0438\u0442. \u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0449\u043e\u0441\u044c \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443":"Empty query. Please input something for search";(0,k.useEffect)((function(){A&&(0,C.vw)(A,z,r).then((function(n){if(!n.results.length)return P.ZP.error(R);G(n.total_pages),s((0,u.Z)(n.results))})).catch((function(n){return console.log(n)}))}),[r,R,z,A]);return(0,S.jsxs)(j.xu,{p:4,textAlign:"center",mt:"48px",children:[(0,S.jsxs)(x,{onSubmit:function(n){if(n.preventDefault(),!F.trim())return P.ZP.error(I);F.trim()!==A&&(T(1),s([]),L({search:F.trim(),page:Number(z)}))},children:[(0,S.jsxs)(j.xu,{position:"relative",flexGrow:"1",children:[(0,S.jsx)(m,{type:"text",value:F,onChange:function(n){H(n.target.value)},placeholder:"uk-UA"===r?"\u041d\u0430\u0437\u0432\u0430 \u0444\u0456\u043b\u044c\u043c\u0443":"Film"}),(0,S.jsx)(b.Yg,{type:"button",onClick:function(){H(""),s([]),L({search:"",page:0}),G(0)},children:(0,S.jsx)(_.FMH,{size:"20"})})]}),(0,S.jsx)(b.Yq,{type:"submit",children:"uk-UA"===r?"\u041f\u043e\u0448\u0443\u043a":"Search"})]}),!i.length&&(0,S.jsx)(d,{}),(0,S.jsx)(f,{children:i.map((function(n){return(0,S.jsx)(g,{children:(0,S.jsx)(w.OL,{to:"".concat(n.id),state:{from:M},children:(0,S.jsx)(v.u,{movie:n})})},n.id)}))}),(0,S.jsx)(Z.T,{breakLabel:"...",nextLabel:">",onPageChange:function(n){T(n.selected+1),L({search:F,page:n.selected+1})},pageRangeDisplayed:5,pageCount:B,previousLabel:"<",renderOnZeroPageCount:null,disabledLinkClassName:"disabled",activeClassName:"activePage"})]})}},8759:function(n,e,t){n.exports=t.p+"static/media/bcg-movies01.15f8126b6e71a507dca7.jpg"}}]);
//# sourceMappingURL=547.f94cfe91.chunk.js.map