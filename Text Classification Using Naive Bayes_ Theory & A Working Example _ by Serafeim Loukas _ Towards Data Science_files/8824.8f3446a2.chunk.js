(self.webpackChunklite=self.webpackChunklite||[]).push([[8824],{92210:(e,n,t)=>{"use strict";t.d(n,{w:()=>m});var i=t(67294),r=t(47230),l=t(77355),a=t(31889),o=t(14646);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var d=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.5 2a.5.5 0 0 0-.5.5V5h-2.5a.5.5 0 0 0 0 1H19v2.5a.5.5 0 0 0 1 0V6h2.5a.5.5 0 0 0 0-1H20V2.5a.5.5 0 0 0-.5-.5zm-14 4a.5.5 0 0 0-.5.5v.75l7 5.13 3.7-2.78a.5.5 0 0 1 .6.8l-4 3-.3.22-.3-.22L5 8.5v9.01c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 1 1 0v5c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-11C4 5.67 4.67 5 5.5 5h7a.5.5 0 0 1 0 1h-7z",fill:"#242424"});const s=function(e){return i.createElement("svg",c({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),d)};var u={marginRight:"8px"},m=function(e){var n,t=e.buttonSize,c=void 0===t?"REGULAR":t,d=e.buttonStyle,m=void 0===d?"STRONG":d,p=e.showMailIcon,v=void 0===p||p,k=e.onClick,f=e.width,E=e.buttonText,g=void 0===E?"Get this newsletter":E,h=e.redirectUrl,S=e.displayOnly,w=void 0!==S&&S,b=(0,a.F)(),x=(0,o.I)();return i.createElement(r.z,{buttonStyle:m,onClick:k,size:c,width:f,href:h,displayOnly:w},i.createElement(l.x,{display:"flex",justifyContent:"center",alignItems:"center"},v&&i.createElement("span",{className:x(u),"aria-hidden":"true"},i.createElement(s,{className:x((n="SUBTLE"===m?b.baseColor.text.normal:b.accentColor.background,{"> path":{fill:n}}))})),g))}},92548:(e,n,t)=>{"use strict";t.d(n,{B:()=>s});var i=t(67294),r=t(77355),l=t(47230),a=t(14646),o=t(62528),c={from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},d=function(e){return function(n){return{width:"20px",height:"20px",borderRadius:"50%",borderWidth:"1px",borderStyle:"solid",borderColor:"".concat(n.baseColor.border.light," transparent ").concat(n.baseColor.border.light," ").concat(n.baseColor.border.light),animation:"".concat(e," 1s infinite linear;")}}},s=function(e){var n=e.buttonSize,t=void 0===n?"LARGE":n,s=e.buttonStyle,u=void 0===s?"STRONG":s,m=e.width,p=void 0===m?"100%":m,v=(0,a.I)(),k=function(){var e=(0,o.o)({keyframesName:c}).keyframesName;return i.createElement("div",{className:v(d(e))})},f=function(){return i.createElement(r.x,null,i.createElement(r.x,{display:"inline-block",float:"left",marginRight:"8px"},i.createElement(k,null)),i.createElement(r.x,{float:"left"},"Loading.."))};return i.createElement("div",{style:{cursor:"wait"}},i.createElement(l.z,{buttonStyle:u,onClick:function(){return null},size:t,width:p,disabled:!0},i.createElement(f,null)))}},29969:(e,n,t)=>{"use strict";t.d(n,{X:()=>y});var i=t(63038),r=t.n(i),l=t(67294),a=t(92519),o=t(83302),c=t(25735),d=t(6443),s=t(67701),u=t(77355),m=t(93310),p=t(20113),v=t(87691),k=t(18627),f=t(66411),E=t(14646),g=t(31889),h=t(34135),S=t(97217),w=t(43487),b=t(50458),x=function(e,n){return{borderTop:"1px solid ".concat(e.baseColor.border.darker),padding:"24px 0",marginBottom:"25px",minHeight:n}},N=function(e){var n=e.viewer,t=e.newsletterV3,i=e.newsletterV3LandingUrl,r=e.useCustomDomainLOFlow,c=e.isVertical,d=e.handleClick;return t?n||r?l.createElement(a.x,{newsletterV3:t,buttonStyle:"SUBTLE",redirectUrl:r?i:void 0,isVertical:c}):l.createElement(o.Q,{newsletterV3:t,isVertical:c,handleClick:d}):null},y=function(e){var n,t,i,a,o,y=e.postId,T=e.publisher,F=e.isVertical,R=void 0!==F&&F,C=l.useRef(null),V=(0,w.v9)((function(e){return e.config.authDomain})),_=(0,k.Av)(),O=(0,E.I)(),B=(0,g.F)(),L=(0,d.H)().value,I=!!(0,c.VB)({name:"enable_newsletter_lo_flow_custom_domains",placeholder:!1}),P=l.useState(!1),D=r()(P,2),U=D[0],A=D[1],j=l.useState("0px"),z=r()(j,2),G=z[0],H=z[1],W=null==(0,w.v9)((function(e){return e.navigation.currentLocation})).match("http[s]?://[^/]*".concat(V)),Y=!L&&W&&I,M=T.newsletterV3,$=null==M?void 0:M.type,K=T.username,X=void 0===K?"":K,q=(0,b.iBn)(null!==(n=null==M?void 0:M.slug)&&void 0!==n?n:"",V,$===S.Rr.NEWSLETTER_TYPE_COLLECTION?T:void 0,$===S.Rr.NEWSLETTER_TYPE_AUTHOR&&X?X:void 0),Q="Collection"===T.__typename?T:void 0,Z=(0,s.gY)(Q).viewerEdge;switch($){case S.Rr.NEWSLETTER_TYPE_COLLECTION:t="Sign up for ".concat(null==M?void 0:M.name),i="0px",a="You're an editor of ".concat(null==M?void 0:M.name),o=null==Z?void 0:Z.isEditor;break;case S.Rr.NEWSLETTER_TYPE_AUTHOR:t=(null==M?void 0:M.promoHeadline)||"Get an email whenever ".concat(T.name," publishes."),i="6px",a="You cannot subscribe to yourself",o=T.viewerEdge.isUser}U&&(t="Check your inbox.");var J=!1,ee=function(){!J&&ne()&&(_.event("newsletterV3.promoViewed",{newsletterV3Id:null==M?void 0:M.id,postId:y}),J=!0)},ne=function(){var e;if(!C.current)return!1;var n=null===(e=C.current)||void 0===e?void 0:e.getBoundingClientRect(),t=n.top+n.height/2;return t>=0&&t<=window.innerHeight};return l.useEffect((function(){return ee(),window&&h.V6.on("scroll",ee),function(){h.V6.off("scroll",ee)}}),[]),l.useEffect((function(){var e;if(C.current){var n=(null===(e=C.current)||void 0===e?void 0:e.getBoundingClientRect()).height;H("".concat(n,"px"))}}),[C]),M&&l.createElement(f.cW,{source:{name:"newsletter_v3_promo",susiEntry:"newsletter_v3_promo"}},l.createElement("div",{ref:C,className:R?void 0:O(x(B,G))},l.createElement(u.x,{wordBreak:"break-word",paddingBottom:i},l.createElement(p.X6,{scale:"S"},t)),$===S.Rr.NEWSLETTER_TYPE_COLLECTION&&!U&&l.createElement(l.Fragment,null,l.createElement(u.x,{paddingTop:"4px"},l.createElement(v.F,{tag:"h3",scale:"S",color:"DARKER"},"By ".concat(T.name))),l.createElement(u.x,{paddingTop:"8px",paddingBottom:"10px"},l.createElement(v.F,{scale:"S",color:"DARKER"},null==M?void 0:M.description," ",l.createElement(m.r,{inline:!0,linkStyle:"OBVIOUS",href:q},"Take a look.")))),$===S.Rr.NEWSLETTER_TYPE_AUTHOR&&(null==M?void 0:M.promoBody)&&!U&&l.createElement(l.Fragment,null,l.createElement(u.x,{wordBreak:"break-word",paddingTop:"8px",paddingBottom:"8px"},l.createElement(v.F,{scale:"S",color:"DARKER"},null==M?void 0:M.promoBody))),o?l.createElement(u.x,{paddingTop:"10px"},l.createElement(v.F,{scale:"S",color:"DARKER"},a)):l.createElement(u.x,{display:"flex",flexWrap:"wrap"},l.createElement(N,{viewer:L,useCustomDomainLOFlow:Y,newsletterV3:M,newsletterV3LandingUrl:q,isVertical:R,handleClick:function(){return A(!0)}}))))}},13156:(e,n,t)=>{"use strict";t.d(n,{B:()=>c});var i=t(319),r=t.n(i),l=t(98007),a=t(95472),o=t(31579),c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3SubscribeButton_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_collection"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_newsletterV3"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useNewsletterV3Subscription_newsletterV3"}}]}}].concat(r()(l.Os.definitions),r()(a.Gi.definitions),r()(l.GB.definitions),r()(o.DI.definitions))}},92519:(e,n,t)=>{"use strict";t.d(n,{x:()=>A});var i=t(67154),r=t.n(i),l=t(63038),a=t.n(l),o=t(67294),c=t(92210),d=t(61279),s=t(6443),u=t(26350),m=t(77355),p=t(1383),v=t(93310),k=t(16793),f=t(98096),E=t(47230),g=t(64602),h=t(87691),S=t(18627),w=t(66411),b=t(14646),x=t(97217),N=t(78285),y=t(77280),T=t(43487);function F(){return(F=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var R=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.5 6a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 1 1 0v6c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-11C4 5.67 4.67 5 5.5 5h7a.5.5 0 0 1 0 1h-7z",fill:"#242424"}),C=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.1 7.2a.5.5 0 0 1 .7-.1l7.2 5.28 3.7-2.78a.5.5 0 0 1 .6.8L12 13.62 4.2 7.9a.5.5 0 0 1-.1-.7zM21.35 4.65c.2.2.2.5 0 .7L18 8.71l-2.35-2.36a.5.5 0 0 1 .7-.7L18 7.29l2.65-2.64c.2-.2.5-.2.7 0z",fill:"#242424"});const V=function(e){return o.createElement("svg",F({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),R,C)};var _=t(68894),O=t(50458),B=t(3207),L=t(43405),I=function(e){var n=e.children;return o.createElement(m.x,{margin:{lg:void 0,xl:void 0,md:void 0,sm:void 0,xs:"10px 0 0 0"},flexShrink:"0"},n)},P=function(e){var n=e.children,t=e.helperTextColor,i=e.scale;return o.createElement(m.x,{maxWidth:"425px",margin:"10px 0 0 0"},o.createElement(h.F,{scale:i||"XS",color:t},n))};function D(e){var n=e.withHelperText,t=e.helperTextChildren,i=e.button;return e.isVertical?o.createElement(m.x,{display:"flex",flexDirection:"column",width:"100%"},n&&o.createElement(m.x,{paddingBottom:"16px"},t),i):o.createElement(m.x,{display:"flex",flexDirection:{lg:"row",xl:"row",md:"row",sm:"column",xs:"column"},alignItems:{lg:"center",xl:"center",md:"center",sm:"flex-start",xs:"flex-start"},justifyContent:n?"space-between":"center",width:"100%"},n&&o.createElement(m.x,{paddingRight:{lg:"8px",xl:"8px",md:"8px",sm:"0",xs:"0"},paddingBottom:{lg:"0",xl:"0",md:"0",sm:"16px",xs:"16px"}},t),i)}var U=function(e){var n=e.newsletterV3,t=e.showMailIcon,i=void 0===t||t,l=e.buttonSize,d=void 0===l?"REGULAR":l,s=e.buttonStyle,m=void 0===s?"STRONG":s,v=e.redirectUrl,k=e.buttonText,f=e.width,E=e.viewer,g=e.subscribeButtonText,h=e.setSubscribe,b=e.user,x=e.collection,N=e.susiEntry,y=e.newsletterOrProfileName,F=n.id,R=(0,O.Zul)(F),C=(0,w.Lk)(),V=(0,S.Av)(),B=(0,T.v9)((function(e){return e.config.productName})),L=(0,_.O)(!1),P=a()(L,3),D=P[0],U=P[1],A=P[2],j={buttonSize:d,buttonStyle:m,onClick:function(){var e;E?E&&E.allowEmailAddressSharingEditorWriter?h(!0,!1):U():null!=b&&null!==(e=b.newsletterV3)&&void 0!==e&&e.id?V.event("newsletterV3.subscribeClicked",{newsletterV3Id:b.newsletterV3.id,source:C}):null!=b&&b.id&&V.event("user.LOSubscribeClicked",{targetUserId:b.id,source:C})},showMailIcon:i,buttonText:k||g,redirectUrl:v,width:f};return o.createElement(I,null,E?o.createElement(o.Fragment,null,o.createElement(c.w,j),o.createElement(p.Q,{onConfirm:function(){return h(!0,!0)},isVisible:D,hide:A,titleText:"Confirm your subscription to ".concat(y),confirmText:"Confirm now",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!1,withCloseButton:!1,isDestructiveAction:!1},"By confirming, you agree to share your email address with the editors of newsletters and writers you've subscribed to so they can stay in contact with you outside of ".concat(B,". You can opt out of sharing your email address by unsubscribing in your Settings."))):o.createElement(u.R,{operation:"register",newsletterV3:n,user:b,collection:x||void 0,actionUrl:R,susiEntry:N,redirectTo:v},o.createElement(c.w,r()({},j,{redirectUrl:void 0}))))},A=function(e){var n,t,i,r,l=e.newsletterV3,a=e.helperTextColor,c=void 0===a?"LIGHTER":a,p=e.showHelperText,h=void 0===p||p,S=e.showMailIcon,T=void 0===S||S,F=e.buttonSize,R=void 0===F?"REGULAR":F,C=e.buttonStyle,_=void 0===C?"STRONG":C,O=e.redirectUrl,A=e.buttonText,j=e.width,z=e.isVertical,G=e.hideLinkInConfirmationToast,H=(0,b.I)(),W=(0,s.H)().value,Y=l.collection?l.collection:void 0,M=l.user?l.user:void 0,$=(0,N.w)(),K=(0,y.PM)();switch(l.type){case x.Rr.NEWSLETTER_TYPE_COLLECTION:n=l.name,t="Get this newsletter",i="You’re signed up for ".concat(n,"."),r="newsletter_v3_promo";break;case x.Rr.NEWSLETTER_TYPE_AUTHOR:n=null==M?void 0:M.name,t="Subscribe",i="You’re subscribed to ".concat(n),r="subscribe_user"}var X=(0,d.oT)({newsletterV3:l,newsletterName:n,hideLinkInConfirmationToast:G}),q=X.isSubscribed,Q=X.hasError,Z=X.setSubscribe;o.useEffect((function(){if(K){var e=(0,w.P7)(K||"").susiEntry;["collection_newsletter_v3_landing","newsletter_v3_promo"].includes(void 0===e?"":e)&&q&&$({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_SUBSCRIBE",extraParams:{newsletterName:n,newsletterType:l.type,unsubscribeFn:function(){return Z(!1)}}})}}),[K,q]);var J=o.useMemo((function(){return W?o.createElement(o.Fragment,null,"Emails will be sent to ",W.email,". ",o.createElement(u.R,{operation:"login",newsletterV3:l,collection:Y,susiEntry:r,inline:!0},o.createElement(v.r,{linkStyle:"OBVIOUS",inline:!0,target:"_blank"},"Not you?"))):o.createElement(L.b,null)}),[W,l,Y,r]);return o.createElement(o.Fragment,null,o.createElement(k.Z,null,(function(e){return o.createElement(f.f,{theme:(0,B.jN)(Y,e)},q?o.createElement(D,{withHelperText:h,helperTextChildren:o.createElement(P,{helperTextColor:"DARKER",scale:"S"},i),button:o.createElement(I,null,o.createElement(E.z,{buttonStyle:"SUBTLE",onClick:function(){return Z(!1)},size:R},o.createElement(m.x,{display:"flex",justifyContent:"center",alignItems:"center",tag:"span"},T&&o.createElement(V,{width:"24px",height:"24px",className:H((a="SUBTLE"===_?e.baseColor.text.normal:e.accentColor.background,{marginRight:"8px",fill:a}))}),"Unsubscribe"))),isVertical:z}):o.createElement(w.cW,{source:{newsletterV3Id:l.id},extendSource:!0},o.createElement(D,{button:o.createElement(U,{redirectUrl:O,buttonText:A,width:j,showMailIcon:T,buttonSize:R,subscribeButtonText:t,setSubscribe:Z,user:M,collection:Y,susiEntry:r,newsletterOrProfileName:n,viewer:W,newsletterV3:l,buttonStyle:_}),withHelperText:h,helperTextChildren:o.createElement(P,{helperTextColor:c},J),isVertical:z})));var a})),Q&&o.createElement(g.F,{toastStyle:"RETRYABLE_ERROR",isVisible:Q,hide:function(){}}))}},41422:(e,n,t)=>{"use strict";t.d(n,{L:()=>o});var i=t(319),r=t.n(i),l=t(95472),a=t(68216),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3SubscribeByEmail_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}}]}}].concat(r()(l.Gi.definitions),r()(a.nf.definitions))}},83302:(e,n,t)=>{"use strict";t.d(n,{Q:()=>j,A:()=>z});var i,r,l=t(28655),a=t.n(l),o=t(63038),c=t.n(o),d=t(59713),s=t.n(d),u=t(64718),m=t(21919),p=t(92471),v=t(67294),k=t(92210),f=t(92548),E=t(93717),g=t(18839),h=t(76109),S=t(12890),w=t(98096),b=t(77355),x=t(21755),N=t(87691),y=t(66411),T=t(31889),F=t(40980),R=t(97217),C=t(43487),V=t(6855),_=t(17583),O=t(50458),B=t(3207),L=t(43405);function I(){var e=a()(["\n  mutation SendNewsletterSubscriptionAcctAuthEmail(\n    $newsletterV3Id: String!\n    $email: String!\n    $redirect: String\n    $captchaValue: String\n    $operation: String\n  ) {\n    sendNewsletterSubscriptionAcctAuthEmail(\n      newsletterV3Id: $newsletterV3Id\n      email: $email\n      redirect: $redirect\n      captchaValue: $captchaValue\n      operation: $operation\n    ) {\n      ... on SusiMethod {\n        value\n      }\n      ... on BadRequest {\n        message\n      }\n      ... on FailedChallenge {\n        message\n      }\n      ... on NotFound {\n        message\n      }\n    }\n  }\n"]);return I=function(){return e},e}function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var U=(i={},s()(i,x.j.xl,"425px"),s()(i,x.j.lg,"425px"),s()(i,x.j.md,"375px"),s()(i,x.j.sm,"100%"),s()(i,x.j.xs,"100%"),i),A=(r={},s()(r,x.j.xl,"375px"),s()(r,x.j.lg,"375px"),s()(r,x.j.md,"325px"),s()(r,x.j.sm,"100%"),s()(r,x.j.xs,"100%"),r),j=function(e){var n=e.centerContent,t=void 0!==n&&n,i=e.newsletterV3,r=e.isVertical,l=e.handleClick,a=(0,T.F)(),o=(0,y.pK)(),d=(0,y.hp)(),s=(0,C.v9)((function(e){return e.config.authDomain})),p=(0,C.v9)((function(e){return e.navigation.currentLocation})),I=(0,C.v9)((function(e){return e.config.productName})),P=v.useState(""),j=c()(P,2),G=j[0],H=j[1],W=v.useState(""),Y=c()(W,2),M=Y[0],$=Y[1],K=v.useState(!1),X=c()(K,2),q=X[0],Q=X[1],Z=v.useState(!1),J=c()(Z,2),ee=J[0],ne=J[1],te=v.useState(!1),ie=c()(te,2),re=ie[0],le=ie[1],ae=v.useState(!1),oe=c()(ae,2),ce=oe[0],de=oe[1],se=v.useState(""),ue=c()(se,2),me=ue[0],pe=ue[1],ve="register",ke=i.type===R.Rr.NEWSLETTER_TYPE_AUTHOR?"Subscribe":"Get this newsletter",fe=null==p.match("http[s]?://[^/]*".concat(s)),Ee=i.collection,ge=i.id,he=i.slug,Se=i.user,we=(0,O.Zul)(ge),be=Ee?(0,O.iBn)(he,s,Ee,(null==Se?void 0:Se.username)||""):p;(0,u.a)(h.qz,{fetchPolicy:"no-cache",skip:!we||fe,onCompleted:function(e){var n=e.accountToken;return n&&pe((0,g.hQ)(be,o,d,we,n))}});var xe=function(e){H(e),Q(!0),setTimeout((function(){return Q(!1)}),S.zn),ne(!1),le(!1)},Ne=function(){(0,V.J)(M)?(le(!0),ne(!0)):xe("Enter a valid email address.")},ye=function(){xe("We couldn't process your request. Try again, or contact our support team.")},Te=(0,m.D)(z,{onCompleted:function(e){switch(e.sendNewsletterSubscriptionAcctAuthEmail.__typename){case"SusiMethod":$(M),de(!0),l&&l();break;case"BadRequest":xe("Enter a valid email address.");break;case"FailedChallenge":case"NotFound":default:ye()}},onError:ye}),Fe=c()(Te,1)[0],Re={newsletterV3Id:ge,email:M,operation:ve,redirect:me},Ce=(0,_.s)()||x.j.lg,Ve=i.type===R.Rr.NEWSLETTER_TYPE_AUTHOR?U:A;return v.createElement(w.f,{theme:(0,B.jN)(Ee,a)},v.createElement(b.x,{alignItems:t?"center":"flex-start",display:"flex",flexDirection:"column",justifyContent:t?"center":"flex-start"},v.createElement(E.k,{callback:function(e){Fe({variables:D({captchaValue:e},Re)})},shouldExecuteRecaptcha:ee}),v.createElement(b.x,{display:ce?"none":"inline"},v.createElement(b.x,{alignItems:r?"flex-start":"flex-end",display:"flex",justifyContent:"space-between",flexDirection:r?"column":"row",sm:{alignItems:t?"center":"flex-start",flexDirection:"column",paddingTop:"16px"}},v.createElement(b.x,{marginTop:G?{lg:"25px",xl:"25px",md:"25px",sm:"0",xs:"0"}:void 0,width:r?"100%":{lg:void 0,xl:void 0,md:void 0,sm:"100%",xs:"100%"}},v.createElement(S.II,{errorMessage:G,handleInputChange:function(e){$(e.target.value.trim())},handleSubmit:Ne,input:M,inputType:S.n$.EMAIL,isAnimating:q,textAlign:"start",placeholder:"Your email",width:r?"100%":Ve[Ce],scale:"S"})),v.createElement(b.x,{marginBottom:"auto",marginLeft:r?"0":"15px",sm:{marginLeft:"0px",marginTop:"24px"},marginTop:r?"24px":void 0,flexShrink:"0"},re?v.createElement(f.B,{newsletterV3Id:ge}):v.createElement(F.$,{eventData:{operation:ve}},v.createElement(k.w,{onClick:Ne,buttonText:ke,buttonStyle:"SUBTLE"})))),v.createElement(b.x,{marginTop:G?"10px":"20px",sm:{marginTop:"20px"}},v.createElement(N.F,{scale:"XS"},v.createElement(L.b,null)))),v.createElement(b.x,{display:ce?"inline":"none",marginBottom:"15px",marginTop:"5px",height:"75px"},v.createElement(N.F,{color:"DARKER",scale:"M"},I," sent you an email at ",M," to complete your subscription."))))},z=(0,p.Ps)(I())},43405:(e,n,t)=>{"use strict";t.d(n,{b:()=>o});var i=t(67294),r=t(93310),l=t(43487),a=t(50458),o=function(){var e=(0,l.v9)((function(e){return e.config.productName}));return i.createElement(i.Fragment,null,"By signing up, you will create a ",e," account if you don’t already have one. Review our"," ",i.createElement(r.r,{href:(0,a.wob)(),linkStyle:"OBVIOUS",inline:!0,target:"_blank"},"Privacy Policy")," ","for more information about our privacy practices.")}},75865:(e,n,t)=>{"use strict";t.d(n,{WZ:()=>c,kD:()=>d,Rf:()=>s});var i=t(319),r=t.n(i),l=t(13156),a=t(41422),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3Promo_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"promoHeadline"}},{kind:"Field",name:{kind:"Name",value:"promoBody"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3SubscribeButton_newsletterV3"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3SubscribeByEmail_newsletterV3"}}]}}].concat(r()(l.B.definitions),r()(a.L.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3Promo_publisher_User"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isUser"}}]}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3Promo_newsletterV3"}}]}}]}}].concat(r()(o.definitions))},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3Promo_publisher_Collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3Promo_newsletterV3"}}]}}]}}].concat(r()(o.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3Promo_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3Promo_publisher_User"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3Promo_publisher_Collection"}}]}}]}}].concat(r()(c.definitions),r()(d.definitions))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8824.8f3446a2.chunk.js.map