//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_598","HYPE_dtl_598",!0==(null!=a&&10>a||false==!0)?"HYPE-598.full.min.js":"HYPE-598.thin.min.js"),false==!0&&(a=a||l("HYPE_w_598","HYPE_wdtl_598","HYPE-598.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n// set the position \nvar scenePosition = document.documentElement.scrollTop || document.body.scrollTop;\nwindow.scrollPositionsByScene[hypeDocument.currentSceneName()] = scenePosition;\n\nconsole.log(scenePosition);\n\n \n\n\n\t\n}",identifier:"14439"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {(function smoothscroll(){\n    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;\n    if (currentScroll > 0) {\n         window.requestAnimationFrame(smoothscroll);\n         window.scrollTo (0,currentScroll - (currentScroll/5));\n    }\n})();\t\n\t\n}",identifier:"15735"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_598(c,e,{"-2":{n:"blank.gif"},"47":{p:1,n:"academy_awards_PNG51.png",g:"20354",o:true,t:"@1x"},"54":{p:1,n:"heart_2x.jpg",g:"20369",o:true,t:"@2x"},"48":{p:1,n:"academy_awards_PNG51_2x.png",g:"20354",o:true,t:"@2x"},"55":{p:1,n:"COMMENT.jpg",g:"20373",o:true,t:"@1x"},"49":{p:1,n:"TRANSORM.jpg",g:"20356",o:true,t:"@1x"},"56":{p:1,n:"COMMENT_2x.jpg",g:"20373",o:true,t:"@2x"},"57":{n:"VIDEO.mp4",g:"20376",t:"video/mp4"},"0":{p:2,n:"zah.mp3",g:"794",t:"audio/mpeg"},"1":{p:2,n:"Notification-sound.mp3",g:"3312",t:"audio/mpeg"},"2":{p:2,n:"Audio.mp3",g:"1037",t:"audio/mpeg"},"3":{p:2,n:"intro-theme17a.mp3",g:"1089",t:"audio/mpeg"},"4":{p:2,n:"cheer.mp3",g:"6809",t:"audio/mpeg"},"5":{p:2,n:"thank%20you%20ariana.mp3",g:"8553",t:"audio/mpeg"},"6":{p:2,n:"happy%20birthday.mp3",g:"15300",t:"audio/mpeg"},"7":{p:2,n:"Ariana%20JIngle.mp3",g:"8551",t:"audio/mpeg"},"10":{p:1,n:"Main%20Logo.png",g:"20231",o:true,t:"@1x"},"8":{p:2,n:"Main%20Intro%20Music.mp3",g:"15736",t:"audio/mpeg"},"9":{p:2,n:"Clicking-sound-effect.mp3",g:"13558",t:"audio/mpeg"},"11":{p:1,n:"Main%20Logo_2x.png",g:"20231",o:true,t:"@2x"},"12":{p:1,n:"GoogleFacebookLogin.png",g:"20239",o:true,t:"@1x"},"13":{p:1,n:"GoogleFacebookLogin_2x.png",g:"20239",o:true,t:"@2x"},"20":{p:1,n:"world-connection-9133860.jpg",g:"20264",o:true,t:"@1x"},"21":{p:1,n:"world-connection-9133860_2x.jpg",g:"20264",o:true,t:"@2x"},"14":{p:1,n:"fit%20banner.jpg",g:"20250",o:true,t:"@1x"},"22":{p:1,n:"2girl.jpg",g:"20291",o:true,t:"@1x"},"15":{p:1,n:"fit%20banner_2x.jpg",g:"20250",o:true,t:"@2x"},"30":{p:1,n:"3guy_2x.jpg",g:"20304",o:true,t:"@2x"},"23":{p:1,n:"2girl_2x.jpg",g:"20291",o:true,t:"@2x"},"16":{p:1,n:"white%20logo.png",g:"20254",o:true,t:"@1x"},"31":{p:1,n:"4guy.jpg",g:"20307",o:true,t:"@1x"},"24":{p:1,n:"1guy.jpg",g:"20293",t:"@1x"},"17":{p:1,n:"white%20logo_2x.png",g:"20254",o:true,t:"@2x"},"32":{p:1,n:"4guy_2x.jpg",g:"20307",o:true,t:"@2x"},"25":{p:1,n:"3girl.jpg",g:"20298",o:true,t:"@1x"},"18":{p:1,n:"brain.png",g:"20259",o:true,t:"@1x"},"40":{p:1,n:"perosnal%20trainer_2x.png",g:"20328",o:true,t:"@2x"},"33":{p:1,n:"6hike.jpg",g:"20309",o:true,t:"@1x"},"26":{p:1,n:"2guy.jpg",g:"20300",o:true,t:"@1x"},"19":{p:1,n:"brain_2x.png",g:"20259",o:true,t:"@2x"},"41":{p:1,n:"salad.png",g:"20333",o:true,t:"@1x"},"34":{p:1,n:"6hike_2x.jpg",g:"20309",o:true,t:"@2x"},"27":{p:1,n:"5girl.jpg",g:"20302",o:true,t:"@1x"},"42":{p:1,n:"salad_2x.png",g:"20333",o:true,t:"@2x"},"35":{p:1,n:"zumba.jpg",g:"20311",o:true,t:"@1x"},"28":{p:1,n:"5girl_2x.jpg",g:"20302",o:true,t:"@2x"},"43":{p:1,n:"boxinb.jpg.png",g:"20339",o:true,t:"@1x"},"50":{p:1,n:"TRANSORM_2x.jpg",g:"20356",o:true,t:"@2x"},"36":{p:1,n:"zumba_2x.jpg",g:"20311",o:true,t:"@2x"},"29":{p:1,n:"3guy.jpg",g:"20304",o:true,t:"@1x"},"44":{p:1,n:"boxinb.jpg_2x.png",g:"20339",o:true,t:"@2x"},"51":{p:1,n:"circle.png",g:"20358",o:true,t:"@1x"},"37":{p:1,n:"sunset2.jpg",g:"20317",o:true,t:"@1x"},"45":{p:1,n:"2LAILA%20LOGO%20copy.png",g:"20352",o:true,t:"@1x"},"52":{p:1,n:"circle_2x.png",g:"20358",o:true,t:"@2x"},"38":{p:1,n:"sunset2_2x.jpg",g:"20317",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"46":{p:1,n:"2LAILA%20LOGO%20copy_2x.png",g:"20352",o:true,t:"@2x"},"39":{p:1,n:"perosnal%20trainer.png",g:"20328",o:true,t:"@1x"},"53":{p:1,n:"heart.jpg",g:"20369",o:true,t:"@1x"}},h,["<link href='https://fonts.googleapis.com/css?family=Poppins:700&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Montserrat&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Astloch&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Asset&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Cute+Font&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=ABeeZee&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Cabin:700&subset=latin' rel='stylesheet' type='text/css'>"],d,[{n:"landing",o:"12357",X:[0]},{n:"Untitled Scene",o:"20246",X:[1]},{n:"Untitled Scene 2",o:"20269",X:[2]},{n:"Untitled Scene 3",o:"20319",X:[3]}],[{p:"600px",U:{},c:"#FFFFFF",G:{a:[{d:0.10000000000000001,p:1,g:2,f:1}]},H:{a:[{p:0}]},d:414,I:{a:[{p:0},{p:0}]},cA:false,Y:414,L:[],Z:1565,v:{"20381":{c:34,d:-1,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:10,A:"#D8DDE4",x:"visible",j:"absolute",O:1,aJ:10,k:"div",C:"#D8DDE4",z:2,B:"#D8DDE4",D:"#D8DDE4",aK:10,bF:"20378",P:1,a:0,aL:10,b:8},"20388":{b:410,z:1,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"Sign Up",x:"visible",I:"Solid",a:416,y:"preserve",J:"Solid"},"20386":{k:"div",x:"visible",c:385,d:151,z:4,a:22,j:"absolute",b:374},"20384":{aV:8,w:"<font>eve</font><br>",x:"visible",a:400,Z:"break-word",b:13,y:"preserve",j:"absolute",z:1,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",bF:"20386",aS:8,t:96,aU:8,G:"#A9A9A9",r:"inline"},"20378":{x:"visible",a:371,dB:"button",b:29,j:"absolute",aA:{a:[{p:0}]},k:"div",c:36,d:17,z:255,cP:"fixed",aP:"pointer"},"20382":{b:0,z:244,K:"None",c:406,cP:"fixed",d:59,L:"None",M:0,bD:"none",aS:6,N:0,aT:6,dB:"button",O:0,g:"#000000",aU:6,P:0,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:0,aL:4,A:"#000000",Y:31,B:"#000000",Z:"break-word",r:"inline",C:"#000000",D:"#000000",t:48,F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"<br>",x:"visible",I:"None",a:-2,y:"preserve",J:"None"},"20389":{b:758,z:2,K:"Solid",c:371,L:"Solid",d:15,aS:6,M:1,e:0,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#000000",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:14,aA:{a:[{d:0.5,p:1,g:2,e:"20246"}]},F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"<font>Lets Go</font>",x:"visible",I:"Solid",a:14,y:"preserve",J:"Solid"},"20380":{c:34,d:-1,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:10,A:"#D8DDE4",x:"visible",j:"absolute",O:1,aJ:10,k:"div",C:"#D8DDE4",z:3,B:"#D8DDE4",D:"#D8DDE4",aK:10,bF:"20378",P:1,a:0,aL:10,b:16},"20387":{w:"",h:"20239",p:"no-repeat",x:"visible",a:416,q:"100% 100%",b:410,j:"absolute",dB:"img",z:3,k:"div",c:414,d:223.3812949640288,r:"inline"},"20379":{c:34,d:-1,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:10,A:"#D8DDE4",x:"visible",j:"absolute",O:1,aJ:10,k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:10,bF:"20378",P:1,a:0,aL:10,b:0},"20385":{h:"20231",p:"no-repeat",x:"visible",a:70,q:"100% 100%",b:0,j:"absolute",dB:"img",z:3,k:"div",bF:"20386",d:151,c:150,r:"inline",e:0},"20383":{aV:8,w:"<font>a</font><br>",x:"visible",a:-93,Z:"break-word",b:13,y:"preserve",j:"absolute",z:2,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",bF:"20386",aS:8,t:96,aU:8,G:"#A9A9A9",r:"inline"}},A:{a:[{p:4,h:"15735"}]},O:["20382","20379","20378","20381","20380","20386","20385","20383","20384","20387","20388","20389"],C:{a:[{p:0}]},"_":0,bY:1,n:"Untitled Layout",o:"12470",bZ:180,T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:3.16,b:[],a:[{f:"c",y:0,z:0.17,i:"a",e:0,s:-93,o:"20383"},{f:"c",y:0,z:0.17,i:"a",e:213,s:400,o:"20384"},{f:"c",y:0,z:0.17,i:"b",e:13,s:13,o:"20384"},{f:"c",y:0.17,z:0.3,i:"e",e:1,s:0,o:"20385"},{y:0.17,i:"a",s:0,z:0,o:"20383",f:"c"},{y:0.17,i:"a",s:213,z:0,o:"20384",f:"c"},{y:0.17,i:"b",s:13,z:0,o:"20384",f:"c"},{y:1.17,i:"e",s:1,z:0,o:"20385",f:"c"},{f:"c",y:2.05,z:0.13,i:"b",e:87,s:374,o:"20386"},{f:"c",y:2.05,z:0.13,i:"a",e:22,s:22,o:"20386"},{f:"c",y:2.18,z:0.14,i:"b",e:410,s:410,o:"20387"},{f:"c",y:2.18,z:0.14,i:"a",e:2,s:416,o:"20387"},{y:2.18,i:"b",s:87,z:0,o:"20386",f:"c"},{y:2.18,i:"a",s:22,z:0,o:"20386",f:"c"},{f:"c",y:2.22,z:0.14,i:"b",e:686,s:410,o:"20388"},{f:"c",y:2.22,z:0.14,i:"a",e:155,s:416,o:"20388"},{f:"c",y:3,z:0.16,i:"e",e:1,s:0,o:"20389"},{y:3.02,i:"b",s:410,z:0,o:"20387",f:"c"},{y:3.02,i:"a",s:2,z:0,o:"20387",f:"c"},{y:3.06,i:"b",s:686,z:0,o:"20388",f:"c"},{y:3.06,i:"a",s:155,z:0,o:"20388",f:"c"},{y:3.16,i:"e",s:1,z:0,o:"20389",f:"c"}],f:30}}},{o:"20248",v:{"20395":{aV:8,w:"<font>eve</font>",x:"visible",a:81,Z:"break-word",b:0,y:"preserve",j:"absolute",z:3,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",bF:"20400",aS:8,t:36,aU:8,G:"#FFFFFF",r:"inline"},"20397":{h:"20259",p:"no-repeat",x:"visible",a:93,q:"100% 100%",b:114,j:"absolute",dB:"img",z:1,k:"div",c:213,d:142,r:"inline",e:0},"20399":{h:"20264",p:"no-repeat",x:"visible",a:113,q:"100% 100%",b:573,j:"absolute",dB:"img",z:5,k:"div",c:173,d:173,r:"inline",e:0},"20390":{b:0,z:7,K:"None",c:406,cP:"fixed",d:59,L:"None",M:0,bD:"none",aS:6,N:0,aT:6,dB:"button",O:0,g:"#000000",aU:6,P:0,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:0,aL:4,A:"#000000",Y:31,B:"#000000",Z:"break-word",r:"inline",C:"#000000",D:"#000000",t:48,F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"<br>",x:"visible",I:"None",a:-2,y:"preserve",J:"None"},"20392":{b:522,z:4,K:"Solid",c:388,L:"Solid",d:27,aS:6,M:1,e:0,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:0,aJ:6,m:"#000000",n:"#919191",aK:6,aL:6,A:"#A0A0A0",Y:24,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"'American Typewriter','Courier New',Courier,monospace",D:"#A0A0A0",t:25,u:"normal",aA:{a:[{d:0.5,p:1,g:2,e:"20269"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"<font>Body</font>",x:"visible",I:"Solid",a:6,y:"preserve",J:"Solid"},"20394":{aV:8,w:"<font>a</font>",x:"visible",a:0,Z:"break-word",b:0,y:"preserve",j:"absolute",z:2,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",bF:"20400",aS:8,t:36,aU:8,G:"#FFFFFF",r:"inline"},"20396":{b:287,z:3,K:"Solid",c:388,L:"Solid",d:27,aS:6,M:1,e:0,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:0,aJ:6,m:"#000000",n:"#919191",aK:6,aL:6,A:"#A0A0A0",Y:24,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"'American Typewriter','Courier New',Courier,monospace",D:"#A0A0A0",t:25,u:"normal",F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"<font>Mind</font>",x:"visible",I:"Solid",a:6,y:"preserve",J:"Solid"},"20398":{b:757,z:6,K:"Solid",c:388,L:"Solid",d:27,aS:6,M:1,e:0,bD:"none",aT:6,N:1,dB:"button",O:1,aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:0,aJ:6,m:"#000000",n:"#919191",aK:6,aL:6,A:"#A0A0A0",Y:24,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"'American Typewriter','Courier New',Courier,monospace",D:"#A0A0A0",t:25,u:"normal",F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"<font>Spirit</font>",x:"visible",I:"Solid",a:6,y:"preserve",J:"Solid"},"20400":{x:"visible",k:"div",c:156,d:57,z:12,cP:"fixed",a:135,j:"absolute",b:7},"20391":{h:"20250",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:355,j:"absolute",dB:"img",z:2,k:"div",c:414,d:128.34,r:"inline",e:0},"20393":{h:"20254",p:"no-repeat",x:"visible",a:31,q:"100% 100%",b:1,j:"absolute",bF:"20400",z:1,k:"div",dB:"img",d:55,c:55,r:"inline"}},p:"600px",cA:false,Y:414,Z:2565,c:"#FFFFFF",L:[],bY:1,d:414,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:2,b:[],a:[{f:"c",y:0,z:0.21,i:"e",e:1,s:0,o:"20397"},{f:"c",y:0,z:0.21,i:"e",e:1,s:0,o:"20396"},{f:"c",y:0.18,z:0.21,i:"e",e:1,s:0,o:"20391"},{f:"c",y:0.18,z:0.21,i:"e",e:1,s:0,o:"20392"},{y:0.21,i:"e",s:1,z:0,o:"20397",f:"c"},{y:0.21,i:"e",s:1,z:0,o:"20396",f:"c"},{f:"c",y:1.09,z:0.21,i:"e",e:1,s:0,o:"20399"},{f:"c",y:1.09,z:0.21,i:"e",e:1,s:0,o:"20398"},{y:1.09,i:"e",s:1,z:0,o:"20391",f:"c"},{y:1.09,i:"e",s:1,z:0,o:"20392",f:"c"},{y:2,i:"e",s:1,z:0,o:"20399",f:"c"},{y:2,i:"e",s:1,z:0,o:"20398",f:"c"}],f:30}},bZ:180,O:["20390","20394","20400","20393","20395","20397","20396","20391","20392","20399","20398"],n:"Untitled Layout",H:{a:[{d:1.1000000000000001,p:1,g:1,f:2}]},"_":1},{o:"20271",v:{"20403":{h:"20254",p:"no-repeat",x:"visible",a:31,q:"100% 100%",b:1,j:"absolute",bF:"20402",z:1,k:"div",dB:"img",d:55,c:55,r:"inline"},"20416":{c:416,d:-2,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:1,C:"#D8DDE4",z:2,P:1,D:"#D8DDE4",a:-4,b:935},"20401":{b:0,z:17,K:"None",c:406,cP:"fixed",d:59,L:"None",M:0,bD:"none",aS:6,N:0,aT:6,dB:"button",O:0,g:"#000000",aU:6,P:0,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:0,aL:4,A:"#000000",Y:31,B:"#000000",Z:"break-word",r:"inline",C:"#000000",D:"#000000",t:48,F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"<br>",x:"visible",I:"None",a:-2,y:"preserve",J:"None"},"20408":{h:"20293",p:"no-repeat",x:"visible",a:280,q:"100% 100%",b:541,j:"absolute",dB:"img",z:6,k:"div",c:136,d:127,r:"inline",e:0},"20414":{h:"20309",p:"no-repeat",x:"visible",a:140,q:"100% 100%",b:805,j:"absolute",dB:"img",z:13,k:"div",c:136,d:127,r:"inline",e:0},"20412":{h:"20304",p:"no-repeat",x:"visible",a:280,q:"100% 100%",b:673,j:"absolute",dB:"img",z:10,k:"div",c:137,d:127,r:"inline",e:0},"20406":{aV:8,w:"BODY",x:"visible",a:176,Z:"break-word",b:80,y:"preserve",j:"absolute",z:16,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:16,r:"inline",aU:8,G:"#000000"},"20419":{aR:false,x:"visible",bE:"20376",a:0,b:123,j:"absolute",c:414,k:"video",z:1,d:414,aO:true,aQ:false,aH:true},"20410":{h:"20300",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:673,j:"absolute",dB:"img",z:11,k:"div",c:137,d:127,r:"inline",e:0},"20404":{aV:8,w:"<font>a</font>",x:"visible",a:0,Z:"break-word",b:0,y:"preserve",j:"absolute",z:2,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",bF:"20402",aS:8,t:36,aU:8,G:"#FFFFFF",r:"inline"},"20417":{G:"#FFFFFF",aU:8,c:394,aV:8,d:190,r:"inline",e:0,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",t:16,Z:"break-word",w:"<font>Here at AQieve we strive to connect you to the coach that fits youre desires so that you can achieve your goals today and not tomorrow<br><br>All our trainers and coaches are handpicked and Vetted to Insure you are getting quality and qualified individuals who are tailored to your needs.</font><br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:6,F:"left",b:948},"20402":{x:"visible",k:"div",c:156,d:57,z:18,cP:"fixed",a:135,j:"absolute",b:7},"20409":{h:"20298",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:541,j:"absolute",dB:"img",aA:{a:[{d:0.59999999999999998,p:1,g:2,f:1}]},z:7,k:"div",d:127,c:136,r:"inline",e:0,aP:"pointer"},"20415":{h:"20311",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:805,j:"absolute",dB:"img",z:12,k:"div",c:136,d:127,r:"inline",e:0},"20407":{h:"20291",p:"no-repeat",x:"visible",a:139,q:"100% 100%",b:541,j:"absolute",dB:"img",z:8,k:"div",c:136,d:127,r:"inline",e:0},"20413":{h:"20307",p:"no-repeat",x:"visible",a:280,q:"100% 100%",b:805,j:"absolute",dB:"img",z:14,k:"div",c:136,d:127,r:"inline",e:0},"20405":{aV:8,w:"<font>eve</font>",x:"visible",a:81,Z:"break-word",b:0,y:"preserve",j:"absolute",z:3,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",bF:"20402",aS:8,t:36,aU:8,G:"#FFFFFF",r:"inline"},"20411":{h:"20302",p:"no-repeat",x:"visible",a:139,q:"100% 100%",b:673,j:"absolute",dB:"img",z:9,k:"div",c:137,d:127,r:"inline",e:0},"20418":{h:"20317",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:940,j:"absolute",dB:"img",z:3,k:"div",c:414,d:310.22399999999999,r:"inline",e:0}},p:"600px",cA:false,Y:414,Z:2565,c:"#FFFFFF",L:[],bY:1,d:414,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:33.1,b:[],a:[{y:0,p:1,i:"Video Track",z:33.1,o:"20419",f:"a"},{f:"c",y:1,z:0.14,i:"e",e:1,s:0,o:"20408"},{f:"c",y:1.05,z:0.14,i:"e",e:1,s:0,o:"20407"},{f:"c",y:1.11,z:0.14,i:"e",e:1,s:0,o:"20409"},{y:1.14,i:"e",s:1,z:0,o:"20408",f:"c"},{f:"c",y:1.19,z:0.14,i:"e",e:1,s:0,o:"20410"},{y:1.19,i:"e",s:1,z:0,o:"20407",f:"c"},{f:"c",y:1.25,z:0.14,i:"e",e:1,s:0,o:"20411"},{y:1.25,i:"e",s:1,z:0,o:"20409",f:"c"},{f:"c",y:2.03,z:0.13,i:"e",e:1,s:0,o:"20412"},{y:2.03,i:"e",s:1,z:0,o:"20410",f:"c"},{y:2.09,i:"e",s:1,z:0,o:"20411",f:"c"},{f:"c",y:2.12,z:0.13,i:"e",e:1,s:0,o:"20413"},{y:2.16,i:"e",s:1,z:0,o:"20412",f:"c"},{f:"c",y:2.21,z:0.13,i:"e",e:1,s:0,o:"20414"},{y:2.25,i:"e",s:1,z:0,o:"20413",f:"c"},{f:"c",y:2.29,z:0.13,i:"e",e:1,s:0,o:"20415"},{f:"c",y:3.03,z:0.13,i:"e",e:1,s:0,o:"20416"},{y:3.04,i:"e",s:1,z:0,o:"20414",f:"c"},{y:3.12,i:"e",s:1,z:0,o:"20415",f:"c"},{y:3.16,i:"e",s:1,z:0,o:"20416",f:"c"},{f:"c",y:3.22,z:0.24,i:"e",e:1,s:0,o:"20417"},{f:"c",y:4,z:0.26,i:"e",e:1,s:0,o:"20418"},{y:4.16,i:"e",s:1,z:0,o:"20417",f:"c"},{y:4.26,i:"e",s:1,z:0,o:"20418",f:"c"}],f:30}},bZ:180,O:["20401","20404","20402","20403","20405","20406","20419","20409","20407","20408","20410","20411","20412","20415","20414","20413","20418","20416","20417"],n:"Untitled Layout",H:{a:[{d:1.1000000000000001,p:1,g:1,f:2}]},"_":2},{o:"20321",v:{"20445":{h:"20358",p:"no-repeat",x:"visible",a:7,q:"100% 100%",b:430,j:"absolute",dB:"img",z:29,k:"div",c:60,d:59,r:"inline"},"20436":{G:"#000000",aU:8,c:400,aV:8,d:41,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:20,Z:"break-word",v:"bold",w:"Transformations &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&gt; &nbsp; &nbsp;&nbsp;",j:"absolute",x:"visible",k:"div",y:"preserve",z:24,aS:8,aT:8,a:-2,b:357},"20427":{aV:8,w:"<font>Find a Trainer</font>",a:21,x:"visible",Z:"break-word",b:217,y:"preserve",j:"absolute",z:17,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:12,r:"inline",G:"#FFFFFF",aU:8,v:"bold"},"20452":{h:"20328",p:"no-repeat",x:"visible",a:16,q:"100% 100%",b:773,j:"absolute",dB:"img",z:5,k:"div",c:77,d:77,r:"inline"},"20443":{h:"20354",p:"no-repeat",x:"visible",a:326,q:"100% 100%",b:258,j:"absolute",dB:"img",z:26,k:"div",c:37,d:72,r:"inline"},"20434":{aV:8,w:"<font>Search</font>",x:"visible",a:9,Z:"break-word",b:0,y:"preserve",j:"absolute",z:2,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",bF:"20441",aS:8,t:16,aU:8,G:"#797979",r:"inline"},"20425":{T:0,l:0,B:"#D8DDE4",c:128,P:1,d:81,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,N:1,aI:10,A:"#D8DDE4",O:1,x:"visible",j:"absolute",aJ:10,k:"div",C:"#D8DDE4",Q:7,z:13,D:"#D8DDE4",R:"#000000",aK:10,m:"#000000",S:-1,a:4,aL:10,n:"#5E5E5E",b:164},"20450":{aV:8,w:"<font>After</font>",a:277,x:"visible",Z:"break-word",b:704,y:"preserve",j:"absolute",z:34,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:16,r:"inline",G:"#FFFFFF",aU:8,v:"bold"},"20441":{k:"div",x:"visible",c:397,d:34,z:11,a:7,j:"absolute",b:106},"20432":{aV:8,w:"<font>Challenges</font>",a:304,x:"visible",Z:"break-word",b:217,y:"preserve",j:"absolute",z:21,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:12,r:"inline",G:"#FFFFFF",aU:8,v:"bold"},"20423":{aV:8,w:"<font>a</font>",x:"visible",a:0,Z:"break-word",b:0,y:"preserve",j:"absolute",z:2,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",bF:"20421",aS:8,t:36,aU:8,G:"#FFFFFF",r:"inline"},"20430":{w:"",Q:0,h:"20333",x:"visible",R:"#000000",a:154,b:170,S:0,dB:"img",z:18,T:0,q:"100% 100%",d:62,j:"absolute",k:"div",p:"no-repeat",c:103,r:"inline"},"20421":{x:"visible",k:"div",c:156,d:57,z:36,cP:"fixed",a:135,j:"absolute",b:7},"20459":{aV:8,w:"Comment",x:"visible",a:157,Z:"break-word",b:862,y:"preserve",j:"absolute",z:8,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:11,r:"inline",aU:8,G:"#000000"},"20457":{aV:8,w:"Like",x:"visible",a:67,Z:"break-word",b:862,y:"preserve",j:"absolute",z:6,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:11,r:"inline",aU:8,G:"#000000"},"20448":{aV:8,w:"Complete Transformation",x:"visible",a:4,Z:"break-word",b:499,y:"preserve",j:"absolute",z:31,yy:"nowrap",s:"Georgia,Times,'Times New Roman',Serif",aT:8,k:"div",aS:8,t:13,r:"inline",aU:8,G:"#000000"},"20439":{T:0,l:0,B:"#D8DDE4",c:128,P:1,d:81,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,N:1,aI:10,A:"#D8DDE4",O:1,x:"visible",j:"absolute",aJ:10,k:"div",C:"#D8DDE4",Q:7,z:23,D:"#D8DDE4",R:"#000000",aK:10,m:"#000000",S:-1,a:280,aL:10,n:"#424242",b:253},"20455":{h:"20369",p:"no-repeat",x:"visible",a:37,q:"100% 100%",b:866,j:"absolute",dB:"img",z:4,k:"div",c:22,d:22,r:"inline"},"20446":{aV:8,w:"Jane Wander",x:"visible",a:70,Z:"break-word",b:430,y:"preserve",j:"absolute",z:30,yy:"nowrap",s:"Georgia,Times,'Times New Roman',Serif",aT:8,k:"div",aS:8,t:13,r:"inline",aU:8,G:"#000000"},"20437":{T:0,l:0,B:"#D8DDE4",c:128,P:1,d:81,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,N:1,aI:10,A:"#D8DDE4",O:1,x:"visible",j:"absolute",aJ:10,k:"div",C:"#D8DDE4",Q:7,z:22,D:"#D8DDE4",R:"#000000",aK:10,m:"#000000",S:-1,a:4,aL:10,n:"#424242",b:253},"20428":{T:0,l:0,B:"#D8DDE4",c:128,P:1,d:81,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,N:1,aI:10,A:"#D8DDE4",O:1,x:"visible",j:"absolute",aJ:10,k:"div",C:"#D8DDE4",Q:7,z:14,D:"#D8DDE4",R:"#000000",aK:10,m:"#000000",S:-1,a:141,aL:10,n:"#424242",b:164},"20453":{aV:8,w:"Samantha Tan",x:"visible",a:83,Z:"break-word",b:768,y:"preserve",j:"absolute",z:2,yy:"nowrap",s:"Georgia,Times,'Times New Roman',Serif",aT:8,k:"div",aS:8,t:13,r:"inline",aU:8,G:"#000000"},"20444":{h:"20356",p:"no-repeat",x:"visible",a:11,q:"100% 100%",b:538,j:"absolute",dB:"img",z:10,k:"div",c:392,d:195,r:"inline"},"20435":{h:"20339",p:"no-repeat",x:"visible",a:312,q:"100% 100%",b:167,j:"absolute",dB:"img",z:20,k:"div",c:66,d:66,r:"inline"},"20426":{h:"20328",p:"no-repeat",x:"visible",a:30,q:"100% 100%",b:167,j:"absolute",dB:"img",z:16,k:"div",c:77,d:77,r:"inline"},"20451":{c:401,d:531,I:"Solid",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:1,N:1,aI:10,A:"#EBEBEB",x:"visible",j:"absolute",O:1,aJ:10,k:"div",C:"#EBEBEB",z:1,B:"#EBEBEB",D:"#EBEBEB",aK:10,P:1,a:5,aL:10,b:408},"20442":{h:"20352",p:"no-repeat",x:"visible",a:41,q:"100% 100%",b:258,j:"absolute",dB:"img",z:25,k:"div",c:56,d:56,r:"inline"},"20433":{c:395,d:28,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:10,A:"#D8DDE4",x:"visible",j:"absolute",O:1,aJ:10,k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:10,bF:"20441",P:1,a:0,aL:10,b:2},"20424":{aV:8,w:"<font>eve</font>",x:"visible",a:81,Z:"break-word",b:0,y:"preserve",j:"absolute",z:3,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",bF:"20421",aS:8,t:36,aU:8,G:"#FFFFFF",r:"inline"},"20440":{aV:8,w:"<font>Events</font>",a:317,x:"visible",Z:"break-word",b:306,y:"preserve",j:"absolute",z:28,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:12,r:"inline",G:"#FFFFFF",aU:8,v:"bold"},"20431":{aV:8,w:"<font>Nutrition</font>",a:173,x:"visible",Z:"break-word",b:217,y:"preserve",j:"absolute",z:19,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:12,r:"inline",G:"#FFFFFF",aU:8,v:"bold"},"20422":{h:"20254",p:"no-repeat",x:"visible",a:31,q:"100% 100%",b:1,j:"absolute",bF:"20421",z:1,k:"div",dB:"img",d:55,c:55,r:"inline"},"20420":{b:0,z:35,K:"None",c:406,cP:"fixed",d:59,L:"None",M:0,bD:"none",aS:6,N:0,aT:6,dB:"button",O:0,g:"#000000",aU:6,P:0,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:0,aL:4,A:"#000000",Y:31,B:"#000000",Z:"break-word",r:"inline",C:"#000000",D:"#000000",t:48,F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"<br>",x:"visible",I:"None",a:-2,y:"preserve",J:"None"},"20458":{h:"20373",p:"no-repeat",x:"visible",a:114,q:"100% 100%",b:861,j:"absolute",dB:"img",z:7,k:"div",c:40,d:27,r:"inline"},"20449":{aV:8,w:"<font>Before</font>",a:83,x:"visible",Z:"break-word",b:704,y:"preserve",j:"absolute",z:33,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:16,r:"inline",G:"#FFFFFF",aU:8,v:"bold"},"20456":{aV:8,w:"New Text",x:"visible",a:161,Z:"break-word",b:630,y:"preserve",j:"absolute",z:9,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:16,r:"inline",aU:8,G:"#000000"},"20447":{aV:8,w:"<font>3 mins ago &gt; Transformations</font>",x:"visible",a:70,Z:"break-word",b:452,y:"preserve",j:"absolute",z:32,k:"div",s:"Georgia,Times,'Times New Roman',Serif",aT:8,d:15,c:287,aS:8,t:13,G:"#919191",aU:8,r:"inline"},"20438":{aV:8,w:"Tv Show<br>",a:36,x:"visible",Z:"break-word",b:306,y:"preserve",j:"absolute",z:27,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:12,r:"inline",G:"#FFFFFF",aU:8,v:"bold"},"20429":{T:0,l:0,B:"#D8DDE4",c:128,P:1,d:81,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,N:1,aI:10,A:"#D8DDE4",O:1,x:"visible",j:"absolute",aJ:10,k:"div",C:"#D8DDE4",Q:7,z:15,D:"#D8DDE4",R:"#000000",aK:10,m:"#000000",S:-1,a:280,aL:10,n:"#424242",b:164},"20454":{b:796,z:3,K:"Solid",c:43,L:"Solid",d:2,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#009051",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:0,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:9,F:"center",G:"#FFFFFF",aP:"pointer",w:"<font>Standard</font>",x:"visible",I:"Solid",a:88,y:"preserve",J:"Solid"}},p:"600px",cA:false,Y:414,Z:2565,c:"#FFFFFF",L:[],bY:1,d:414,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["20420","20423","20421","20422","20424","20433","20441","20434","20425","20428","20429","20426","20430","20435","20427","20431","20432","20437","20439","20442","20443","20438","20440","20436","20451","20445","20446","20447","20448","20444","20456","20449","20450","20452","20453","20454","20457","20458","20459","20455"],n:"Untitled Layout",H:{a:[{d:1.1000000000000001,p:1,g:1,f:2}]},"_":3}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
