(self.webpackChunklite=self.webpackChunklite||[]).push([[4330],{66802:(e,t,n)=>{"use strict";n.d(t,{R4:()=>i,Ue:()=>o,xG:()=>l,Hp:()=>s});var r=n(93661),i=function(e,t,n){var r,i;return"undefined"!=typeof window&&e&&t&&!!(window.ApplePaySession&&null!==(r=window.ApplePaySession)&&void 0!==r&&r.supportsVersion(n)&&null!==(i=window.ApplePaySession)&&void 0!==i&&i.canMakePayments())},o=function(e,t){var n="";switch(t){case"CA":return e===r.FM.Monthly&&(n="monthlyCad"),e===r.FM.Yearly&&(n="yearlyCad"),n;default:return n}};function l(e){var t=e.amount,n=e.currency,r=e.locale,i=e.floatingDigits,o=void 0===i?[2,2]:i,l=e.isLongFormat,s=void 0!==l&&l,a=r||"undefined"!=typeof window&&window.navigator.language||"en-US",u=n||"USD";if(!Intl)return"".concat(t," ").concat(u);try{var c=new Intl.NumberFormat(a,{style:"currency",currency:u,minimumFractionDigits:o[0],maximumFractionDigits:o[1],currencyDisplay:"narrowSymbol"}).format(t);return s?"".concat(c," ").concat(n):c}catch(e){return String(t)}}var s=function(e,t,n){var r=String(e);return n?"".concat(r," ").concat(t):r}},76107:(e,t,n)=>{"use strict";n.d(t,{b:()=>r});var r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MembershipUpsellModal_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}},61279:(e,t,n)=>{"use strict";n.d(t,{DI:()=>x,nj:()=>C,oT:()=>U});var r=n(59713),i=n.n(r),o=n(63038),l=n.n(o),s=n(28655),a=n.n(s),u=n(82492),c=n.n(u),d=n(92471),m=n(21919),f=n(67294),b=n(25735),p=n(9354),v=n(75880),w=n(18627),h=n(66411),y=n(78285);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(){var e=a()(["\n  mutation fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe($userId: ID!) {\n    fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe(userId: $userId) {\n      __typename\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return E=function(){return e},e}function V(){var e=a()(["\n  mutation unsubscribeNewsletterV3($newsletterV3Id: ID!) {\n    unsubscribeNewsletterV3(newsletterV3Id: $newsletterV3Id)\n  }\n"]);return V=function(){return e},e}function P(){var e=a()(["\n  mutation subscribeNewsletterV3($newsletterV3Id: ID!, $shouldRecordConsent: Boolean) {\n    subscribeNewsletterV3(\n      newsletterV3Id: $newsletterV3Id\n      shouldRecordConsent: $shouldRecordConsent\n    )\n  }\n"]);return P=function(){return e},e}function O(){var e=a()(["\n  fragment useNewsletterV3Subscription_newsletterV3_viewerEdge on NewsletterV3 {\n    viewerEdge {\n      id\n      isSubscribed\n    }\n  }\n"]);return O=function(){return e},e}function M(){var e=a()(["\n  fragment useNewsletterV3Subscription_user on User {\n    id\n    username\n    newsletterV3 {\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return M=function(){return e},e}function N(){var e=a()(["\n  fragment useNewsletterV3Subscription_newsletterV3 on NewsletterV3 {\n    id\n    type\n    slug\n    name\n    collection {\n      slug\n    }\n    user {\n      id\n      name\n      username\n      newsletterV3 {\n        id\n      }\n    }\n  }\n"]);return N=function(){return e},e}var x=(0,d.Ps)(N()),C=(0,d.Ps)(M(),x),k=((0,d.Ps)(O()),(0,d.Ps)(P())),D=(0,d.Ps)(V()),F=(0,d.Ps)(E(),x),U=function(e){var t=e.newsletterV3,n=e.creator,r=e.newsletterName,i=e.hideLinkInConfirmationToast,o=void 0!==i&&i,s=t||{},a=s.id,u=s.type,d=s.slug,S=s.collection,E=(null==t?void 0:t.user)||n,V=null!=r?r:null==t?void 0:t.name,P=f.useState(!1),O=l()(P,2),M=O[0],N=O[1],x=(0,p.T)({newsletterSlug:d,collectionSlug:null==S?void 0:S.slug,username:null==E?void 0:E.username}),U=x.viewerEdge,I=x.loading,_=(0,b.VB)({name:"enable_auto_follow_on_subscribe",placeholder:!1}),A=f.useState(!1),T=l()(A,2),R=T[0],Y=T[1];f.useEffect((function(){Y(!(null==U||!U.isSubscribed))}),[null==U?void 0:U.isSubscribed]);var B=(0,w.Av)(),L=(0,h.Qi)(),j=(0,y.w)();M&&B.event("newsletterV3.subscribe.error",{newsletterV3Id:a});var G=function(e,t,n){if(n){var r={id:"User:".concat(null==E?void 0:E.id),fragment:C,fragmentName:"useNewsletterV3Subscription_user"},i=e.readFragment(r);e.writeFragment(g(g({},r),{},{data:g(g({},i),{},{newsletterV3:n})}))}if(U){var o=e.readQuery({query:p.p,variables:{newsletterSlug:d,collectionSlug:null==S?void 0:S.slug,username:null==E?void 0:E.username}}),l=c()({},o,{newsletterV3:{viewerEdge:{isSubscribed:t}}});e.writeQuery({query:p.p,variables:{newsletterSlug:d||"",collectionSlug:null==S?void 0:S.slug,username:null==E?void 0:E.username},data:l})}t&&null!=E&&E.id&&_&&(0,v.I0)(e,E.id,{isFollowing:!0})},$=(0,m.D)(k,{onCompleted:function(e){var t=e.subscribeNewsletterV3;N(!t),t&&(B.event("newsletterV3.subscribeClicked",{newsletterV3Id:a,source:L}),Y(!0))},update:function(e){G(e,!0)}}),z=l()($,1)[0],H=(0,m.D)(D,{onCompleted:function(e){var t=e.unsubscribeNewsletterV3;N(!t),t&&(Y(!1),j({duration:o?5e3:"NEXTPAGE",toastStyle:"NEWSLETTER_UNSUBSCRIBE",extraParams:{newsletterName:V||null,newsletterType:u||null,unsubscribeFn:function(){return Y(!1)},hideEmailSettingsLink:o,hideCloseButton:o}}))},update:function(e){G(e,!1)}}),W=l()(H,1)[0],Q=(0,m.D)(F,{onCompleted:function(e){var t=e.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe;N(!t),t&&(B.event("newsletterV3.subscribeClicked",{newsletterV3Id:t.id,source:L}),Y(!0))},update:function(e,t){var n,r=g({},null===(n=t.data)||void 0===n?void 0:n.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe);G(e,!0,r)}}),K=l()(Q,1)[0];return{isSubscribed:R,hasError:M,setSubscribe:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];N(!1),e&&!t&&null!=n&&n.id?K({variables:{userId:null==n?void 0:n.id}}):e&&null!=t&&t.id?z({variables:{newsletterV3Id:null==t?void 0:t.id,shouldRecordConsent:r}}):null!=t&&t.id?W({variables:{newsletterV3Id:null==t?void 0:t.id}}):N(!0)},loading:I}}},93661:(e,t,n)=>{"use strict";n.d(t,{FM:()=>o,d5:()=>f,kr:()=>b,OS:()=>p});var r,i,o,l,s=n(59713),a=n.n(s),u=n(66802),c=n(25735),d=n(91157);!function(e){e.Monthly="monthly",e.Yearly="yearly",e.YearlyCrossout="yearlyCrossout",e.YearlyStaff="yearlyStaff",e.YearlyPriceSaved="yearlyPriceSaved",e.YearlyStaffPriceSaved="YearlyStaffPriceSaved",e.FiftyPercentOffOneYearDiscountPrice="FiftyPercentOffOneYearDiscountPrice",e.FiftyPercentOffOneYearDiscountCrossoutPrice="FiftyPercentOffOneYearDiscountCrossoutPrice",e.FiftyPercentOffOneYearDiscountSavedMembershipPrice="FiftyPercentOffOneYearDiscountSavedMembershipPrice"}(o||(o={})),function(e){e[e.NoDiscount=0]="NoDiscount",e[e.FiftyPercentOffOneYear=1]="FiftyPercentOffOneYear"}(l||(l={}));var m={CA:{plan:(r={},a()(r,o.Monthly,5),a()(r,o.Yearly,50),a()(r,o.YearlyCrossout,60),a()(r,o.YearlyStaff,1),a()(r,o.YearlyPriceSaved,10),a()(r,o.YearlyStaffPriceSaved,49),a()(r,o.FiftyPercentOffOneYearDiscountPrice,25),a()(r,o.FiftyPercentOffOneYearDiscountCrossoutPrice,50),a()(r,o.FiftyPercentOffOneYearDiscountSavedMembershipPrice,25),r),currency:"CAD"},US:{plan:(i={},a()(i,o.Monthly,5),a()(i,o.Yearly,50),a()(i,o.YearlyCrossout,60),a()(i,o.YearlyStaff,1),a()(i,o.YearlyPriceSaved,10),a()(i,o.YearlyStaffPriceSaved,49),a()(i,o.FiftyPercentOffOneYearDiscountPrice,25),a()(i,o.FiftyPercentOffOneYearDiscountCrossoutPrice,50),a()(i,o.FiftyPercentOffOneYearDiscountSavedMembershipPrice,25),i),currency:"USD"}},f=function(){var e=(0,d.x)(),t=e.loading,n=e.geolocation,r=!!(0,c.VB)({name:"enable_lite_canada_plan",placeholder:!1}),i=!t&&n&&n.country?n.country:"";return r&&"CA"===i?"CA":"US"},b=function(e){var t=e.membershipType,n=e.country,r=m[n],i=r.currency,l=r.plan[t||o.Yearly];if(!l)throw new Error("Unavailable membership price");return{amount:l,currency:i}},p=function(e){var t=e.membershipType,n=e.excludeCurrencySign,r=void 0!==n&&n,i=e.isLongFormat,o=void 0!==i&&i,l=f(),s=b({membershipType:t,country:l}),a=s.amount,c=s.currency;return r?(0,u.Hp)(a,c,o):(0,u.xG)({amount:a,currency:c,floatingDigits:[0,0],isLongFormat:o})}},9354:(e,t,n)=>{"use strict";n.d(t,{T:()=>a,p:()=>u});var r=n(28655),i=n.n(r),o=n(64718),l=n(92471);function s(){var e=i()(["\n  query NewsletterV3ViewerEdge($newsletterSlug: ID!, $collectionSlug: ID, $username: ID) {\n    newsletterV3(\n      newsletterSlug: $newsletterSlug\n      collectionSlug: $collectionSlug\n      username: $username\n    ) {\n      ... on NewsletterV3 {\n        id\n        viewerEdge {\n          id\n          isSubscribed\n        }\n      }\n    }\n  }\n"]);return s=function(){return e},e}var a=function(e){var t,n=e.newsletterSlug,r=void 0===n?"":n,i=e.collectionSlug,l=e.username,s=(0,o.a)(u,{variables:{newsletterSlug:r,collectionSlug:i,username:l},ssr:!1,skip:!r&&!l}),a=s.loading,c=s.error,d=s.data;return a?{loading:a}:c?{error:c}:{viewerEdge:null==d||null===(t=d.newsletterV3)||void 0===t?void 0:t.viewerEdge}},u=(0,l.Ps)(s())},24330:(e,t,n)=>{"use strict";n.d(t,{N:()=>u});var r=n(63038),i=n.n(r),o=n(67294),l=n(32317),s=n(69116),a=n(77355),u=function(e){var t=e.creator,n=e.followButtonSize,r=void 0===n?"REGULAR":n,u=e.shouldHideTooltip,c=void 0!==u&&u,d=e.post,m=e.showMembershipUpsellModal,f=e.susiEntry,b=e.isVisible,p=e.width,v=e.isSubscribeCompact,w=void 0!==v&&v,h=o.useState(!1),y=i()(h,2),S=y[0],g=y[1];return o.createElement(o.Fragment,null,o.createElement(l.Bv,{buttonSize:r,onClick:function(){t.viewerEdge.isFollowing||g(!0)},post:d,user:t,susiEntry:f,width:p}),o.createElement(a.x,{marginLeft:w?"4px":"8px"},o.createElement(s.X,{user:t,showMembershipUpsellModal:m,showPostFollowSubscribeTooltip:S&&!c,hidePostFollowSubscribeTooltip:function(){return g(!1)},isVisible:b,isCompact:w})))}},69116:(e,t,n)=>{"use strict";n.d(t,{X:()=>se,w:()=>ae});var r=n(28655),i=n.n(r),o=n(63038),l=n.n(o),s=n(92471),a=n(67294),u=n(21919),c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateUserPostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userUpdatePostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}}]}}]}}]},d=n(6443),m=n(14818),f=n(13791),b=n(77355),p=n(54945),v=n(87691),w=n(18627),h=n(66411),y=n(43487),S=n(87498),g=n(78870),E=n(50458),V="after_subscribe_membership_upsell",P=function(e){var t=e.user,n=e.isVisible,r=e.hide,i=(0,y.v9)((function(e){return e.config.authDomain})),o=(0,w.Av)(),s=(0,d.H)(),P=s.value,O=s.loading;a.useEffect((function(){var e;O||null!=P&&P.postSubscribeMembershipUpsellShownAt||(o.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:null===(e=t.newsletterV3)||void 0===e?void 0:e.id,source:V}),N())}),[O]);var M=(0,u.D)(c,{optimisticResponse:{userUpdatePostSubscribeMembershipUpsellShownAt:{__typename:"User",id:(null==P?void 0:P.id)||"",postSubscribeMembershipUpsellShownAt:(new Date).getTime()}}}),N=l()(M,1)[0];return a.createElement(h.cW,{source:{name:V}},a.createElement(f.v,{isVisible:n,hide:r,withCloseButton:!0,withAnimation:!0,buttonStyle:"STRONG",buttonSize:"REGULAR",cancelText:"Not now",confirmText:"Become a member",onConfirm:function(){var e,n;o.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:null===(e=t.newsletterV3)||void 0===e?void 0:e.id,source:V}),n=(0,g.Rk)((0,E.c5p)(i),{subscribeToUserId:t.id,source:V}),window.location.href=n},showCancelButton:!0,isDestructiveAction:!1},a.createElement(b.x,{marginBottom:"24px"},a.createElement(m.z,{miroId:t.imageId||S.gG,alt:t.name||"",diameter:80,freezeGifs:!1})),a.createElement(b.x,{marginBottom:{xs:"8px",sm:"8px",md:"16px",lg:"16px",xl:"16px"}},a.createElement(p.H2,{scale:{xs:"S",sm:"S",md:"L",lg:"L",xl:"L"}},"You’re subscribed to get email updates. Become a member for more.")),a.createElement(b.x,{marginBottom:"32px"},a.createElement(v.F,{tag:"span",scale:{xs:"M",sm:"M",md:"L",lg:"L",xl:"L"},color:"DARKER"},"Your membership fee directly supports ",t.name," and other writers you read. Get full access to every story on Medium."))))},O=n(76107),M=n(77280),N=n(61279),x=n(93661),C=n(98863),k=n(26350),D=n(43822),F=n(47230),U=n(73917),I=n(26244),_=n(1383),A=n(14646),T=n(31889),R=n(34135),Y=n(97217),B=n(78285);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j=a.createElement("path",{d:"M14 7.29L15.6 9 18 6M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),G=a.createElement("path",{d:"M6 8.44l5.27 3.87 1.4-1.06.7-.52"});const $=function(e){return a.createElement("svg",L({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),j,G)};function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var H=a.createElement("path",{d:"M24 13l2 2 3-3.5M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),W=a.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const Q=function(e){return a.createElement("svg",z({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),H,W)};function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var X=a.createElement("path",{d:"M14.58 6.89h3.92M16.39 9V5.08M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),q=a.createElement("path",{d:"M6 8.44l5.27 3.87 2.81-2.11"});const J=function(e){return a.createElement("svg",K({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),X,q)};function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ee=a.createElement("rect",{x:26.25,y:9.25,width:.5,height:6.5,rx:.25}),te=a.createElement("rect",{x:29.75,y:12.25,width:.5,height:6.5,rx:.25,transform:"rotate(90 29.75 12.25)"}),ne=a.createElement("path",{d:"M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),re=a.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const ie=function(e){return a.createElement("svg",Z({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),ee,te,ne,re)};var oe=n(68894);function le(){var e=i()(["\n  fragment UserSubscribeButton_user on User {\n    id\n    isPartnerProgramEnrolled\n    name\n    viewerEdge {\n      id\n      isFollowing\n      isUser\n    }\n    viewerIsUser\n    newsletterV3 {\n      id\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n    ...useNewsletterV3Subscription_user\n    ...MembershipUpsellModal_user\n  }\n  ","\n  ","\n  ","\n"]);return le=function(){return e},e}var se=function(e){var t=e.user,n=e.showMembershipUpsellModal,r=void 0!==n&&n,i=e.showPostFollowSubscribeTooltip,o=void 0!==i&&i,s=e.hidePostFollowSubscribeTooltip,u=e.isVisible,c=void 0===u||u,m=e.isCompact,f=void 0!==m&&m,p=a.useRef(null),S=(0,A.I)(),V=(0,T.F)(),O=(0,d.H)().value,L=(0,oe.O)(!1),j=l()(L,3),G=j[0],z=j[1],H=j[2],W=t.newsletterV3,K=(0,B.w)(),X=(0,w.Av)(),q=(0,h.pK)(),Z=(0,h.Qi)(),ee=(0,M.PM)(),te=(0,N.oT)({newsletterV3:W,creator:t,newsletterName:t.name||void 0}),ne=te.isSubscribed,re=te.hasError,le=te.loading,se=te.setSubscribe,ae=(0,y.v9)((function(e){return e.config.authDomain})),ue=(0,g.Rk)((0,E.c5p)(ae),{subscribeToUserId:t.id,source:Z}),ce=!(null==O||!O.mediumMemberAt),de=a.useState(!1),me=l()(de,2),fe=me[0],be=me[1],pe=a.useState(!1),ve=l()(pe,2),we=ve[0],he=ve[1],ye=(0,h.P7)(ee||"").susiEntry,Se=void 0===ye?"":ye,ge=["newsletter_v3_promo","writer_subscription_landing"].includes(Se),Ee=["newsletter_v3_promo"].includes(Se),Ve=(0,x.OS)({membershipType:x.FM.Monthly}),Pe=!1,Oe=function(){var e;!Pe&&c&&Me()&&(X.event("newsletterV3.subscribePresented",{newsletterV3Id:(null===(e=t.newsletterV3)||void 0===e?void 0:e.id)||"",source:q}),Pe=!0)},Me=function(){var e;if(!p.current)return!1;var t=null===(e=p.current)||void 0===e?void 0:e.getBoundingClientRect(),n=t.top+t.height/2;return n>=0&&n<=window.innerHeight};a.useEffect((function(){return Oe(),window&&R.V6.on("scroll",Oe),function(){R.V6.off("scroll",Oe)}}),[]),a.useEffect((function(){Oe()}),[c]);var Ne=(0,oe.O)(!1),xe=l()(Ne,3),Ce=xe[0],ke=xe[1],De=xe[2],Fe=function(e,t){var n=(0,d.H)(),r=n.value,i=n.loading,o=a.useRef(null),l=!(null==r||!r.mediumMemberAt),s=(0,M.PM)(),u=(0,h.P7)(s||"").susiEntry,c=["newsletter_v3_promo","writer_subscription_landing","subscribe_user"].includes(void 0===u?"":u);if(i)return!1;if(null!==o.current)return o.current;var m=c&&!l&&!e.viewerEdge.isUser&&!!e.isPartnerProgramEnrolled&&!(null!=r&&r.postSubscribeMembershipUpsellShownAt);return o.current=m,m}(t),Ue=a.useState(!1),Ie=l()(Ue,2),_e=Ie[0],Ae=Ie[1];a.useEffect((function(){r&&ne&&!_e&&Fe?ke():De()}),[ne,_e,Fe]),a.useEffect((function(){ee&&!Fe&&ge&&ne&&(!Ee&&Z===Se||Ee)&&K({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_SUBSCRIBE",extraParams:{newsletterName:t.name,newsletterType:Y.Rr.NEWSLETTER_TYPE_AUTHOR,unsubscribeFn:function(){return se(!1)}}})}),[ee,ne]),a.useEffect((function(){if(ne&&we&&W){var e=!ce&&!!t.isPartnerProgramEnrolled;e&&X.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:W.id,source:Z}),be(e),he(!1)}}),[ne,we,W]);var Te=(0,C.f)().isWorkingPreview;if(re||t.viewerEdge.isUser&&!Te)return null;var Re,Ye=ne?"OBVIOUS":"STRONG",Be=function(e,t){return function(n){return{stroke:t?n.baseColor.background.normal:e,height:f?"23px":"36px",width:f?"23px":"36px"}}},Le=S(Be(V.accentColor.fill.normal,le)),je=S(Be(V.accentColor.background,le));Re=ne?f?a.createElement($,{className:Le}):a.createElement(Q,{className:Le}):f?a.createElement(J,{className:je}):a.createElement(ie,{className:je});var Ge=a.createElement(F.z,{loading:le,buttonStyle:Ye,onClick:function(){var e;he(!ne),O?ne?se(!1):O&&O.allowEmailAddressSharingEditorWriter?se(!0,!1):z():null!==(e=t.newsletterV3)&&void 0!==e&&e.id?X.event("newsletterV3.subscribeClicked",{newsletterV3Id:t.newsletterV3.id,source:Z}):X.event("user.LOSubscribeClicked",{targetUserId:t.id,source:Z})},padding:"0","aria-label":"Subscribe"},Re),$e=function(){return a.createElement(b.x,{padding:"14px 12px 20px",maxWidth:"220px"},a.createElement(v.F,{tag:"div",scale:"S",color:"DARKER"},a.createElement("strong",null,"You're subscribed to ",t.name,". Become a member for more.")," Get full access to every story on Medium for ",Ve," a month."),a.createElement(b.x,{paddingTop:"8px"},a.createElement(D.a,{isButton:!0,buttonStyle:"STRONG",buttonSize:"SMALL",redirectUrl:ue,width:"150px",onClick:function(){X.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:W.id,source:Z})}},a.createElement(b.x,{textAlign:"center"},a.createElement(v.F,{scale:"S",color:"WHITE"},"Become a member")))))},ze=function(){return a.createElement(b.x,{padding:"10px 12px",maxWidth:"166px"},a.createElement(v.F,{tag:"div",scale:"S",color:"DARKER"},"Subscribe to get an email whenever ",t.name," publishes."))},He=function(e){var t=e.children;return a.createElement(U.J,{isVisible:!!s&&!ne,hide:s,placement:"bottom",popoverRenderFn:ze,targetDistance:10,role:"tooltip"},t)},We=function(e){var t=e.children;return a.createElement(U.J,{isVisible:!le&&fe,hide:function(){return be(!1)},placement:"bottom",popoverRenderFn:$e,targetDistance:10,role:"tooltip"},t)},Qe=function(e){var t=e.children;return a.createElement(I.$,{isVisible:!le&&!ne,hideOnClick:!0,noPortal:!0,mouseEnterDelay:500,mouseLeaveDelay:0,placement:"bottom",popoverRenderFn:ze,role:"tooltip",targetDistance:10},t)},Ke=function(e){var t=e.children;return o&&!ne?a.createElement(He,null,t):fe?a.createElement(We,null,t):a.createElement(Qe,null,t)};return a.createElement("div",{ref:p},a.createElement(Ke,null,a.createElement(b.x,null,O&&a.createElement(_.Q,{onConfirm:function(){se(!0,!0)},isVisible:G,hide:H,titleText:"Confirm your subscription to ".concat(t.name),confirmText:"Confirm now",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!1,withCloseButton:!1,isDestructiveAction:!1},"When you subscribe to a writer or publication, your email address will be shared with them so they can stay in contact with you outside of Medium. Opt out any time by unsubscribing in Settings."),O?Ge:a.createElement(k.R,{operation:"register",newsletterV3:W,user:t,actionUrl:W?(0,E.Zul)(W.id):(0,E.lcz)(t.id),susiEntry:"subscribe_user"},Ge))),Ce&&a.createElement(P,{user:t,isVisible:Ce,hide:function(){Ae(!0),De()}}))},ae=(0,s.Ps)(le(),N.DI,N.nj,O.b)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/4330.e8b3e1bc.chunk.js.map