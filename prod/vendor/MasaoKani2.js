/**
  * MasaoKani2.js
  * commit hash: c6425b7a77309ad11de9b07e39f37ef10ca7f489
  */
CanvasMasao.MasaoKani2=function(a){var t,o,e,m,s,r,M,i,h,f,l,p,n,S,c,g,_,d,u,v,w,y,x,b,A,I,j,B,P,k,R,C,z,K,Y,X,q,G,H,V,E,F,J,N,D,L,O,Q,T,U,W,Z;function $(a){var t=parseInt(oa(a));return isNaN(t)&&(t=-1),t}function aa(){var t=!1,o=!1;2==y&&(o=!0),y>0&&--y<=0&&(x=0);var i=B[R],h=P[R];if(y<=0)if(x++,i<=1)y=h,t=!0;else if(2==i)a.mp.mSet(e+(s-32>>1),m+(r-32>>1),100),y=h,t=!0;else if(3==i)1!=x&&7!=x&&13!=x||a.mp.mSet(e+(s-32>>1),m+(r-32>>1),100),1==x&&a.mp.gs.rsAddSound(10),x>=13&&(y=h,t=!0);else if(4==i)M<=0?a.mp.mSet(e+(s-32>>1),m+16,200):a.mp.mSet(e+(s-32>>1),m+16,205),y=h,t=!0;else if(5==i)1!=x&&9!=x&&17!=x||(M<=0?a.mp.mSet(e+(s-32>>1),m+16,200):a.mp.mSet(e+(s-32>>1),m+16,205)),1==x&&a.mp.gs.rsAddSound(11),x>=17&&(y=h,t=!0);else if(6==i)M<=0?a.mp.mSet(e+32,m+(r-32>>1),300):a.mp.mSet(e+s-32,m+(r-32>>1),305),y=h,t=!0;else if(7==i)M<=0?(a.mp.mSet(e+32,m+(r-32>>1)-16,300),a.mp.mSet(e+32,m+(r-32>>1)+16,300)):(a.mp.mSet(e+s-32,m+(r-32>>1)-16,305),a.mp.mSet(e+s-32,m+(r-32>>1)+16,305)),a.mp.gs.rsAddSound(14),y=h,t=!0;else if(8==i)M<=0?a.mp.mSet(e+(s-32>>1),m+16,400):a.mp.mSet(e+(s-32>>1),m+16,405),y=h,t=!0;else if(9==i)0==M?a.mp.mSet(e+(s-32>>1),m+r-16,606):M<0?a.mp.mSet(e+(s-32>>1),m+r-16,600):a.mp.mSet(e+(s-32>>1),m+r-16,605),y=h,t=!0;else if(10==i){if(1==x)if(M<=0){var p=3.3144445419311523,c=Math.floor(12*Math.cos(p)),g=-1*Math.floor(12*Math.sin(p));a.mp.mSet2(e+16,m+(r-32>>1),710,c,g),p=2.965555429458618,c=Math.floor(12*Math.cos(p)),g=-1*Math.floor(12*Math.sin(p)),a.mp.mSet2(e+16,m+(r-32>>1),710,c,g),p=3.6633334159851074,c=Math.floor(12*Math.cos(p)),g=-1*Math.floor(12*Math.sin(p)),a.mp.mSet2(e+16,m+(r-32>>1),710,c,g),p=2.616666793823242,c=Math.floor(12*Math.cos(p)),g=-1*Math.floor(12*Math.sin(p)),a.mp.mSet2(e+16,m+(r-32>>1),710,c,g)}else{var _=3.3144445419311523,u=-1*Math.floor(12*Math.cos(_)),v=-1*Math.floor(12*Math.sin(_));a.mp.mSet2(e+s-48,m+(r-32>>1),710,u,v),_=2.965555429458618,u=-1*Math.floor(12*Math.cos(_)),v=-1*Math.floor(12*Math.sin(_)),a.mp.mSet2(e+s-48,m+(r-32>>1),710,u,v),_=3.6633334159851074,u=-1*Math.floor(12*Math.cos(_)),v=-1*Math.floor(12*Math.sin(_)),a.mp.mSet2(e+s-48,m+(r-32>>1),710,u,v),_=2.616666793823242,u=-1*Math.floor(12*Math.cos(_)),v=-1*Math.floor(12*Math.sin(_)),a.mp.mSet2(e+s-48,m+(r-32>>1),710,u,v)}else if(11==x)if(M<=0){var w=3.140000104904175,b=Math.floor(12*Math.cos(w)),k=-1*Math.floor(12*Math.sin(w));a.mp.mSet2(e+16,m+(r-32>>1),710,b,k),w=2.7038888931274414,b=Math.floor(12*Math.cos(w)),k=-1*Math.floor(12*Math.sin(w)),a.mp.mSet2(e+16,m+(r-32>>1),710,b,k),w=3.576111078262329,b=Math.floor(12*Math.cos(w)),k=-1*Math.floor(12*Math.sin(w)),a.mp.mSet2(e+16,m+(r-32>>1),710,b,k)}else{var C=3.140000104904175,z=-1*Math.floor(12*Math.cos(C)),K=-1*Math.floor(12*Math.sin(C));a.mp.mSet2(e+s-48,m+(r-32>>1),710,z,K),C=2.7038888931274414,z=-1*Math.floor(12*Math.cos(C)),K=-1*Math.floor(12*Math.sin(C)),a.mp.mSet2(e+s-48,m+(r-32>>1),710,z,K),C=3.576111078262329,z=-1*Math.floor(12*Math.cos(C)),K=-1*Math.floor(12*Math.sin(C)),a.mp.mSet2(e+s-48,m+(r-32>>1),710,z,K)}1==x&&a.mp.gs.rsAddSound(18),x>=11&&(y=h,t=!0)}else if(11==i){if(1==x)for(var Y=0;Y<=330;Y+=30){var X=3.14*Y/180,q=Math.floor(12*Math.cos(X)),G=-1*Math.floor(12*Math.sin(X));a.mp.mSet2(e+16,m+(r-32>>1),710,q,G)}else if(11==x)for(var H=15;H<=345;H+=30){var V=3.14*H/180,E=Math.floor(12*Math.cos(V)),F=-1*Math.floor(12*Math.sin(V));a.mp.mSet2(e+16,m+(r-32>>1),710,E,F)}1==x&&a.mp.gs.rsAddSound(18),x>=11&&(y=h,t=!0)}else if(12==i)M<=0?a.mp.tSetBoss(e+(s-32>>1),m,150,-4):a.mp.tSetBoss(e+(s-32>>1),m,150,4),y=h,t=!0;else if(13==i)M<=0?a.mp.tSetBoss(e+(s-32>>1),m,150,2):a.mp.tSetBoss(e+(s-32>>1),m,150,-2),y=h,t=!0;else if(14==i)M<=0?a.mp.tSetBoss(e+(s-32>>1),m,450,-6):a.mp.tSetBoss(e+(s-32>>1),m,450,6),y=h,t=!0;else if(15==i)M<=0?a.mp.tSetBoss(e+(s-32>>1),m,450,2):a.mp.tSetBoss(e+(s-32>>1),m,450,-2),y=h,t=!0;else if(16==i)M<=0?a.mp.tSetBoss(e+(s-32>>1),m,650,-5):a.mp.tSetBoss(e+(s-32>>1),m,650,5),y=h,t=!0;else if(17==i)M<=0?a.mp.tSetBoss(e+(s-32>>1),m,650,2):a.mp.tSetBoss(e+(s-32>>1),m,650,-2),y=h,t=!0;else if(18==i){for(var J=10;J<=310;J+=60)a.mp.mSet2(e+(s-32>>1),m+(r-32>>1),901,J,0),a.mp.mSet2(e+(s-32>>1),m+(r-32>>1),911,J,0);a.mp.gs.rsAddSound(18),y=h,t=!0}else if(19==i){if(1==x)if(M<=0){var N=3.140000104904175,D=Math.floor(8*Math.cos(N)),L=-1*Math.floor(8*Math.sin(N));a.mp.mSet2(e+16,m+(r-32>>1),710,D,L),N=2.616666793823242,D=Math.floor(8*Math.cos(N)),L=-1*Math.floor(8*Math.sin(N)),a.mp.mSet2(e+16,m+(r-32>>1),710,D,L),a.mp.mSet2(e+16,m+(r-32>>1),710,D,-1*L)}else{var O=3.140000104904175,Q=-1*Math.floor(8*Math.cos(O)),T=-1*Math.floor(8*Math.sin(O));a.mp.mSet2(e+s-48,m+(r-32>>1),710,Q,T),O=2.616666793823242,Q=-1*Math.floor(8*Math.cos(O)),T=-1*Math.floor(8*Math.sin(O)),a.mp.mSet2(e+s-48,m+(r-32>>1),710,Q,T),a.mp.mSet2(e+s-48,m+(r-32>>1),710,Q,-1*T)}else if(20==x)if(M<=0){var U=2.7911112308502197,W=Math.floor(8*Math.cos(U)),Z=-1*Math.floor(8*Math.sin(U));a.mp.mSet2(e+16,m+(r-32>>1),710,W,Z),a.mp.mSet2(e+16,m+(r-32>>1),710,W,-1*Z)}else{var $=2.7911112308502197,aa=-1*Math.floor(8*Math.cos($)),ta=-1*Math.floor(8*Math.sin($));a.mp.mSet2(e+s-48,m+(r-32>>1),710,aa,ta),a.mp.mSet2(e+s-48,m+(r-32>>1),710,aa,-1*ta)}1==x&&a.mp.gs.rsAddSound(18),x>=20&&(y=h,t=!0)}else if(20==i){if(1==x){var oa=1.5700000524520874,ea=Math.floor(8*Math.cos(oa)),ma=-1*Math.floor(8*Math.sin(oa));a.mp.mSet2(e+(s-32>>1),m+16,710,ea,ma),oa=1.0466667413711548,ea=Math.floor(8*Math.cos(oa)),ma=-1*Math.floor(8*Math.sin(oa)),a.mp.mSet2(e+(s-32>>1),m+16,710,ea,ma),a.mp.mSet2(e+(s-32>>1),m+16,710,-1*ea,ma)}else if(20==x){var sa=1.2211111783981323,ra=Math.floor(8*Math.cos(sa)),Ma=-1*Math.floor(8*Math.sin(sa));a.mp.mSet2(e+(s-32>>1),m+16,710,ra,Ma),a.mp.mSet2(e+(s-32>>1),m+16,710,-1*ra,Ma)}1==x&&a.mp.gs.rsAddSound(18),x>=20&&(y=h,t=!0)}else if(21==i){if(1==x){var ia=1.5700000524520874,ha=Math.floor(8*Math.cos(ia)),fa=Math.floor(8*Math.sin(ia));a.mp.mSet2(e+(s-32>>1),m+r-48,710,ha,fa),ia=1.0466667413711548,ha=Math.floor(8*Math.cos(ia)),fa=Math.floor(8*Math.sin(ia)),a.mp.mSet2(e+(s-32>>1),m+r-48,710,ha,fa),a.mp.mSet2(e+(s-32>>1),m+r-48,710,-1*ha,fa)}else if(20==x){var la=1.2211111783981323,pa=Math.floor(8*Math.cos(la)),na=Math.floor(8*Math.sin(la));a.mp.mSet2(e+(s-32>>1),m+r-48,710,pa,na),a.mp.mSet2(e+(s-32>>1),m+r-48,710,-1*pa,na)}1==x&&a.mp.gs.rsAddSound(18),x>=20&&(y=h,t=!0)}else if(22==i){if(1==x)if(M<=0){var Sa=3.140000104904175,ca=Math.floor(10*Math.cos(Sa)),ga=Math.floor(10*Math.sin(Sa));a.mp.mSet2(e+16,m+(r-32>>1),731,ca,ga),Sa=3.837778091430664,ca=Math.floor(10*Math.cos(Sa)),ga=Math.floor(10*Math.sin(Sa)),a.mp.mSet2(e+16,m+(r-32>>1),731,ca,ga),Sa=4.535555839538574,ca=Math.floor(10*Math.cos(Sa)),ga=Math.floor(10*Math.sin(Sa)),a.mp.mSet2(e+16,m+(r-32>>1),731,ca,ga)}else{var _a=3.140000104904175,da=-1*Math.floor(10*Math.cos(_a)),ua=Math.floor(10*Math.sin(_a));a.mp.mSet2(e+s-48,m+(r-32>>1),731,da,ua),_a=3.837778091430664,da=-1*Math.floor(10*Math.cos(_a)),ua=Math.floor(10*Math.sin(_a)),a.mp.mSet2(e+s-48,m+(r-32>>1),731,da,ua),_a=4.535555839538574,da=-1*Math.floor(10*Math.cos(_a)),ua=Math.floor(10*Math.sin(_a)),a.mp.mSet2(e+s-48,m+(r-32>>1),731,da,ua)}else if(18==x)if(M<=0){var va=3.48888897895813,wa=Math.floor(10*Math.cos(va)),ya=Math.floor(10*Math.sin(va));a.mp.mSet2(e+16,m+(r-32>>1),731,wa,ya),va=4.186666965484619,wa=Math.floor(10*Math.cos(va)),ya=Math.floor(10*Math.sin(va)),a.mp.mSet2(e+16,m+(r-32>>1),731,wa,ya)}else{var xa=3.48888897895813,ba=-1*Math.floor(10*Math.cos(xa)),Aa=Math.floor(10*Math.sin(xa));a.mp.mSet2(e+s-48,m+(r-32>>1),731,ba,Aa),xa=4.186666965484619,ba=-1*Math.floor(10*Math.cos(xa)),Aa=Math.floor(10*Math.sin(xa)),a.mp.mSet2(e+s-48,m+(r-32>>1),731,ba,Aa)}1==x&&a.mp.gs.rsAddSound(11),x>=18&&(y=h,t=!0)}else if(23==i){if(1==x)if(M<=0){var Ia=3.140000104904175,ja=Math.floor(10*Math.cos(Ia)),Ba=-1*Math.floor(10*Math.sin(Ia));a.mp.mSet2(e+16,m+(r-32>>1),731,ja,Ba),Ia=3.837778091430664,ja=Math.floor(10*Math.cos(Ia)),Ba=-1*Math.floor(10*Math.sin(Ia)),a.mp.mSet2(e+16,m+(r-32>>1),731,ja,Ba),Ia=4.535555839538574,ja=Math.floor(10*Math.cos(Ia)),Ba=-1*Math.floor(10*Math.sin(Ia)),a.mp.mSet2(e+16,m+(r-32>>1),731,ja,Ba)}else{var Pa=3.140000104904175,ka=-1*Math.floor(10*Math.cos(Pa)),Ra=-1*Math.floor(10*Math.sin(Pa));a.mp.mSet2(e+s-48,m+(r-32>>1),731,ka,Ra),Pa=3.837778091430664,ka=-1*Math.floor(10*Math.cos(Pa)),Ra=-1*Math.floor(10*Math.sin(Pa)),a.mp.mSet2(e+s-48,m+(r-32>>1),731,ka,Ra),Pa=4.535555839538574,ka=-1*Math.floor(10*Math.cos(Pa)),Ra=-1*Math.floor(10*Math.sin(Pa)),a.mp.mSet2(e+s-48,m+(r-32>>1),731,ka,Ra)}else if(18==x)if(M<=0){var Ca=3.48888897895813,za=Math.floor(10*Math.cos(Ca)),Ka=-1*Math.floor(10*Math.sin(Ca));a.mp.mSet2(e+16,m+(r-32>>1),731,za,Ka),Ca=4.186666965484619,za=Math.floor(10*Math.cos(Ca)),Ka=-1*Math.floor(10*Math.sin(Ca)),a.mp.mSet2(e+16,m+(r-32>>1),731,za,Ka)}else{var Ya=3.48888897895813,Xa=-1*Math.floor(10*Math.cos(Ya)),qa=-1*Math.floor(10*Math.sin(Ya));a.mp.mSet2(e+s-48,m+(r-32>>1),731,Xa,qa),Ya=4.186666965484619,Xa=-1*Math.floor(10*Math.cos(Ya)),qa=-1*Math.floor(10*Math.sin(Ya)),a.mp.mSet2(e+s-48,m+(r-32>>1),731,Xa,qa)}1==x&&a.mp.gs.rsAddSound(11),x>=18&&(y=h,t=!0)}else if(24==i)a.mp.mSet(e+(s-32>>1),m+(r-32>>1),90),a.mp.gs.rsAddSound(18),y=h,t=!0;else if(25==i)M<=0?a.mp.mSet2(e+16,m+16,800,-5,-32):a.mp.mSet2(e+s-48,m+16,800,5,-32),a.mp.gs.rsAddSound(22),y=h,t=!0;else if(26==i)M<=0?a.mp.mSet2(e+16,m+16,800,-10,-32):a.mp.mSet2(e+s-48,m+16,800,10,-32),a.mp.gs.rsAddSound(22),y=h,t=!0;else if(27==i)M<=0?a.mp.mSet2(e+16,m+16,800,-15,-32):a.mp.mSet2(e+s-48,m+16,800,15,-32),a.mp.gs.rsAddSound(22),y=h,t=!0;else if(28==i)M<=0?a.mp.mSet2(e+16,m+(r-32>>1),810,-12,0):a.mp.mSet2(e+s-48,m+(r-32>>1),810,12,0),a.mp.gs.rsAddSound(22),y=h,t=!0;else if(29==i)a.mp.mSet2(e+16,m+(r-32>>1),77,-1,0),a.mp.gs.rsAddSound(14),y=h,t=!0;else if(30==i)a.mp.mSet2(e+16,m+(r-32>>1),75,-1,0),a.mp.gs.rsAddSound(11),y=h,t=!0;else if(31==i){if(M<=0)for(var Ga=0;Ga<=270;Ga+=90)a.mp.mSet2(e+(s-32>>1),m+(r-32>>1),970,Ga,0);else for(var Ha=0;Ha<=270;Ha+=90)a.mp.mSet2(e+(s-32>>1),m+(r-32>>1),980,Ha,0);a.mp.gs.rsAddSound(18),y=h,t=!0}else if(32==i)1!=x&&9!=x&&17!=x||a.mp.mSet(e+16,m+16,200),1==x&&a.mp.gs.rsAddSound(11),x>=17&&(y=h,t=!0);else if(33==i)1!=x&&9!=x&&17!=x||a.mp.mSet(e+s-48,m+16,205),1==x&&a.mp.gs.rsAddSound(11),x>=17&&(y=h,t=!0);else if(34==i)M<=0?a.mp.mSet2(e+16,m+(r-32>>1),731,-8,0):a.mp.mSet2(e+s-48,m+(r-32>>1),731,8,0),y=h,t=!0;else if(35==i)a.mp.mSet2(e+16,m+(r-32>>1),731,-8,0),y=h,t=!0;else if(36==i)a.mp.mSet2(e+s-48,m+(r-32>>1),731,8,0),y=h,t=!0;else if(37==i){var Va=3.4016668796539307,Ea=Math.floor(8*Math.cos(Va)),Fa=-1*Math.floor(8*Math.sin(Va));a.mp.mSet2(e+16,m+(r-32>>1),710,Ea,Fa),a.mp.mSet2(e+16,m+(r-32>>1),710,Ea,-1*Fa),Va=3.924999952316284,Ea=Math.floor(8*Math.cos(Va)),Fa=-1*Math.floor(8*Math.sin(Va)),a.mp.mSet2(e+16,m+(r-32>>1),710,Ea,Fa),a.mp.mSet2(e+16,m+(r-32>>1),710,Ea,-1*Fa),a.mp.gs.rsAddSound(18),y=h,t=!0}else if(38==i){var Ja=3.4016668796539307,Na=-1*Math.floor(8*Math.cos(Ja)),Da=-1*Math.floor(8*Math.sin(Ja));a.mp.mSet2(e+16,m+(r-32>>1),710,Na,Da),a.mp.mSet2(e+16,m+(r-32>>1),710,Na,-1*Da),Ja=3.924999952316284,Na=-1*Math.floor(8*Math.cos(Ja)),Da=-1*Math.floor(8*Math.sin(Ja)),a.mp.mSet2(e+16,m+(r-32>>1),710,Na,Da),a.mp.mSet2(e+16,m+(r-32>>1),710,Na,-1*Da),a.mp.gs.rsAddSound(18),y=h,t=!0}else if(39==i)a.mp.mSet2(e+(s-32>>1),m+16,710,0,-8),y=h,t=!0;else if(40==i)a.mp.mSet2(e+(s-32>>1),m+r-48,710,0,8),y=h,t=!0;else if(41==i){var La=4.9716668128967285,Oa=-1*Math.floor(8*Math.cos(La)),Qa=Math.floor(8*Math.sin(La));a.mp.mSet2(e+(s-32>>1),m+16,710,Oa,Qa),a.mp.mSet2(e+(s-32>>1),m+16,710,-1*Oa,Qa),La=5.49500036239624,Oa=-1*Math.floor(8*Math.cos(La)),Qa=Math.floor(8*Math.sin(La)),a.mp.mSet2(e+(s-32>>1),m+16,710,Oa,Qa),a.mp.mSet2(e+(s-32>>1),m+16,710,-1*Oa,Qa),y=h,t=!0}else if(42==i){var Ta=4.9716668128967285,Ua=-1*Math.floor(8*Math.cos(Ta)),Wa=-1*Math.floor(8*Math.sin(Ta));a.mp.mSet2(e+(s-32>>1),m+r-48,710,Ua,Wa),a.mp.mSet2(e+(s-32>>1),m+r-48,710,-1*Ua,Wa),Ta=5.49500036239624,Ua=-1*Math.floor(8*Math.cos(Ta)),Wa=-1*Math.floor(8*Math.sin(Ta)),a.mp.mSet2(e+(s-32>>1),m+r-48,710,Ua,Wa),a.mp.mSet2(e+(s-32>>1),m+r-48,710,-1*Ua,Wa),y=h,t=!0}else 43==i?(M<=0?(a.mp.mSet2(e+16,m,731,-8,0),a.mp.mSet2(e+16,m+r-32,731,-8,0)):(a.mp.mSet2(e+s-48,m,731,8,0),a.mp.mSet2(e+s-48,m+r-32,731,8,0)),a.mp.gs.rsAddSound(11),y=h,t=!0):44==i?(M<=0?a.mp.mSet(e+(s-32>>1),m+(r-32>>1),95):a.mp.mSet(e+(s-32>>1),m+(r-32>>1),96),a.mp.gs.rsAddSound(18),y=h,t=!0):45==i?(a.mp.mSet(e+(s-32>>1),m+(r-32>>1),95),a.mp.gs.rsAddSound(18),y=h,t=!0):46==i&&(a.mp.mSet(e+(s-32>>1),m+(r-32>>1),96),a.mp.gs.rsAddSound(18),y=h,t=!0);2==I?t&&++R>1&&(R=0):3==I?t&&++R>2&&(R=0):4==I?(t||o)&&(R=n<=S>>1?1:0):5==I?(t||o)&&(R=n<=Math.floor(S/3)?2:n<=Math.floor(2*S/3)?1:0):6==I?t&&(j>=1?(R=0,--j<=0&&(j=0,R=1)):R=1):7==I?t&&(j>=1?(R=0,--j<=0&&(j=0,R=1)):R=1==R?2:1):8==I?(t||o)&&(R=M<=0?0:1):9==I?(t||o)&&(R=16==A||17==A?d?m+(r>>1)-a.mp.maps.wy<160?1:2:0:6==A||7==A?d?m<l?1:2:0:m+(r>>1)-a.mp.maps.wy<96?1:m+(r>>1)-a.mp.maps.wy>=224?2:0):10==I?(t||o)&&(R=16==A||17==A?d?0:e+(s>>1)-a.mp.maps.wx>256?1:2:6==A||7==A?d?0:e>f-256?1:2:e+(s>>1)-a.mp.maps.wx<128?2:e+(s>>1)-a.mp.maps.wx>=384?1:0):R=0}function ta(a){return t.getImage(a)}function oa(t){return a.getParameter(t)}B=new Array(3),P=new Array(3),k=46,D=new Array(4),L=new Array(4),O=new Array(4),Q=new Array(4),T=new Array(4),U=new Array(8),W=new Array(8),Z=new Array(8),t=a,function(){if((o=$("oriboss_v"))>=2){2!=(w=$("oriboss_anime_type"))&&(w=1);var a=t.getParameter("filename_oriboss_left1");if(G=t.getImage(a),a=t.getParameter("filename_oriboss_right1"),H=t.getImage(a),a=t.getParameter("filename_oriboss_tubure_left"),F=t.getImage(a),a=t.getParameter("filename_oriboss_tubure_right"),J=t.getImage(a),2!=w){var e=t.getParameter("filename_oriboss_left2");V=t.getImage(e),e=t.getParameter("filename_oriboss_right2"),E=t.getImage(e)}}}(),function(){for(var a=0;a<8;a++)U[a]=0;for(var t=0;t<8;t++){var o=t+1+"",e=$("x_backimage"+o+"_view_x");e>0&&(U[t]=32*(e+1),Z[t]=ta(oa("x_backimage"+o+"_filename")))}}(),this.masaoEvent=function(x,ta){var ea=t.getMode();1==ea||ea>=100&&ea<200&&(1==t.getJSMes()?(t.setJSMes("2"),function(){var i=$("j_hp");i<1&&(i=1);if(i>1){t.setMyMaxHP(i);var h=oa("j_hp_name");null==h&&(h=""),t.showMyHP(h)}2==$("j_equip_fire")&&t.equipFire(1);(i=$("j_equip_grenade"))>=1&&t.equipGrenade(i);(function(){for(var a=0;a<=3;a++)Q[a]=0;var o=$("ximage1_view_x");o>0&&(D[0]=32*(o+1),L[0]=$("ximage1_x"),O[0]=$("ximage1_y"),Q[0]=100,T[0]=t.getImage(oa("filename_ximage1")));(o=$("ximage2_view_x"))>0&&(D[1]=32*(o+1),L[1]=$("ximage2_x"),O[1]=$("ximage2_y"),Q[1]=100,T[1]=t.getImage(oa("filename_ximage2")));(o=$("ximage3_view_x"))>0&&(D[2]=32*(o+1),L[2]=$("ximage3_x"),O[2]=$("ximage3_y"),Q[2]=100,T[2]=t.getImage(oa("filename_ximage3")));(o=$("ximage4_view_x"))>0&&(D[3]=32*(o+1),L[3]=$("ximage4_x"),O[3]=$("ximage4_y"),Q[3]=100,T[3]=t.getImage(oa("filename_ximage4")))})(),function(){for(var a=0;a<8;a++)W[a]=!1,U[a]<=0&&(W[a]=!0)}(),(o=$("oriboss_v"))>=2?(g=c=30,_=0,v=0,d=!1,null==(b=oa("oriboss_name"))&&(b=""),(n=$("oriboss_hp"))<1&&(n=1),S=n,3==o?300==a.mp.co_b.c?(a.mp.co_b.c=0,e=a.mp.co_b.x,m=a.mp.co_b.y+16):c=0:((e=$("oriboss_x"))<0&&(e=0),e>179&&(e=179),e=32*(e+1),(m=$("oriboss_y"))<0&&(m=0),m>29&&(m=29),m=32*(m+10)),f=e,l=m,(s=$("oriboss_width"))<32&&(s=32),(r=$("oriboss_height"))<32&&(r=32),(p=$("oriboss_speed"))<1&&(p=1),M=-4,(A=$("oriboss_ugoki"))<1&&(A=1),A>27&&(A=1),(I=$("oriboss_waza_select"))<1&&(I=1),I>10&&(I=1),(j=$("oriboss_waza_select_option"))<0&&(j=3),j<1&&(j=1),B[0]=$("oriboss_waza1"),B[0]<1&&(B[0]=1),B[0]>k&&(B[0]=k),B[1]=$("oriboss_waza2"),B[1]<1&&(B[1]=1),B[1]>k&&(B[1]=k),B[2]=$("oriboss_waza3"),B[2]<1&&(B[2]=1),B[2]>k&&(B[2]=k),P[0]=$("oriboss_waza1_wait"),P[0]<1&&(P[0]=1),P[1]=$("oriboss_waza2_wait"),P[1]<1&&(P[1]=1),P[2]=$("oriboss_waza3_wait"),P[2]<1&&(P[2]=1),R=0,((C=$("oriboss_fumeru_f"))<1||C>4)&&(C=1),2!=(z=$("oriboss_tail_f"))&&(z=1),2!=(K=$("oriboss_destroy"))&&(K=1),Y=!1,X=s,q=r,c>0&&(2!=(w=$("oriboss_anime_type"))&&(w=1),N=e-512,t.setScrollLock(N),y=5)):c=0}()):function(o,x,I){c>0&&function(o,x,I){if(30==c)return void(x>=N&&(c=100));if(20==c)(u-=1)<=0&&(t.setStageClear(),c=0);else if(50==c)(u-=1)<=0&&(c=0,t.hideGauge(),t.addScore(1e3),2==K?(c=20,u=30):t.setMapchip((x>>5)-1+6,(I>>5)-10+4,8));else if(80==c)(u-=1)<=0&&(c=g);else if(c>=100){100==c?(e+=M,24==A||25==A||26==A?e+(s>>1)<=N+256&&(e=N+256-(s>>1),24==A?(c=2500,M=-1*p,i=0):26==A?(c=2700,M=-1*p,i=0,Y=!0):(c=2600,M=-1*p,e+(s>>1)<a.mp.co_j.x+15&&(M=p),i=0)):4==A||5==A||20==A||21==A?e<=N+320&&(e=N+320,M=0,4==A?(c=500,h=0):20==A?(c=2100,h=0):21==A?(c=2200,h=0):(c=600,h=0),g=c):16==A||17==A?e<=N+512-s&&(e=N+512-s,M=0,16==A?(c=1700,i=-1*p,M=-1*p):(c=1800,i=p,M=-1*p),g=c):e<=N+384&&(e=N+384,M=0,2==A?(c=300,M=-1*p):3==A?(c=400,i=-1*p):6==A?(c=700,i=-1*p,M=-1*p):7==A?(c=800,i=p,M=-1*p):8==A?(c=900,M=-1*p):9==A?(c=1e3,M=-1*p):10==A?(c=1100,M=-1*p):11==A?(c=1200,M=-1*p):12==A?(c=1300,M=-1*p):13==A?(c=1400,M=-1*p):14==A?(c=1500,M=-1*p,i=-1*p):15==A?(c=1600,M=-1*(p>>1),i=-1*p):18==A?(c=1900,M=-1*p):19==A?(c=2e3,M=-1*p):22==A?(c=2300,M=-1*p,i=-1*p):23==A?(c=2400,M=-1*p,i=p):27==A?(c=2800,M=-1*p,i=0,Y=!0):(c=200,M=0),g=c)):200==c?aa():300==c?(M<0?(e+=M)<=f-512&&(e=f-512,M=p):(e+=M)>=f-s&&(e=f-s,M=-1*p),aa()):400==c?(i<0?(m+=i)<=l-96&&(m=l-96,i=p):(m+=i)>=l+96&&(m=l+96,i=-1*p),aa()):500==c?((h-=p)<0&&(h+=360),e=f-256+Math.floor(96*Math.cos(3.14*h/180))-32,m=l+32+Math.floor(96*Math.sin(3.14*h/180))-32,M=h>180?-1:1,aa()):600==c?((h+=p)>=360&&(h-=360),e=f-256+Math.floor(96*Math.cos(3.14*h/180))-32,m=l+32+Math.floor(96*Math.sin(3.14*h/180))-32,M=h<180?-1:1,aa()):700==c?(M<0?m>l-64?(m-=p)<=l-64&&(m=l-64,i=0,d=!0):(e+=M)<=f-512+128-s&&(e=f-512+128-s,M=p,i=p,d=!1):m<l+64?(m+=p)>=l+64&&(m=l+64,i=0,d=!0):(e+=M)>=f-128&&(e=f-128,M=-1*p,i=-1*p,d=!1),aa()):800==c?(M<0?m<l+64?(m+=p)>=l+64&&(m=l+64,i=0,d=!0):(e+=M)<=f-512+128-s&&(e=f-512+128-s,M=p,i=-1*p,d=!1):m>l-64?(m-=p)<=l-64&&(m=l-64,i=0,d=!0):(e+=M)>=f-128&&(e=f-128,M=-1*p,i=p,d=!1),aa()):c>=900&&c<1e3?900==c?n<=S>>1?(c=910,M=-1*p,y=2):aa():910==c?(e+=M)<=f-512&&(e=f-512,c=920,M=p):920==c&&aa():c>=1e3&&c<1100?1e3==c?n<=Math.floor(2*S/3)?(c=1010,M=-1*p,y=2):aa():1010==c?(e+=M)<=f-512&&(e=f-512,c=1020,M=p):1020==c?(n<=Math.floor(S/3)?(c=1030,M=p,y=2):aa(),aa()):1030==c?(e+=M)>=f-s&&(e=f-s,M=-1*p,c=1040):1040==c&&aa():c>=1100&&c<1200?1100==c?n<=S>>1?(c=1110,i=-1*p,y=2):aa():1110==c?(m+=i)<=I+32&&(m=I+32,c=1120):1120==c&&aa():c>=1200&&c<1300?1200==c?n<=Math.floor(2*S/3)?(c=1210,i=-1*p,y=2):aa():1210==c?(m+=i)<=I+32&&(m=I+32,c=1220):1220==c?n<=Math.floor(S/3)?(c=1230,i=p,y=2):aa():1230==c?(m+=i)>=I+320-r-32&&(m=I+320-r-32,c=1240):1240==c&&aa():c>=1300&&c<1400?1300==c?n<=S>>1?(c=1310,i=p,y=2):aa():1310==c?(m+=i)>=I+320-r-32&&(m=I+320-r-32,c=1320):1320==c&&aa():c>=1400&&c<1500?1400==c?n<=Math.floor(2*S/3)?(c=1410,i=p,y=2):aa():1410==c?(m+=i)>=I+320-r-32&&(m=I+320-r-32,c=1420):1420==c?n<=Math.floor(S/3)?(c=1430,i=-1*p,y=2):aa():1430==c?(m+=i)<=I+32&&(m=I+32,c=1440):1440==c&&aa():c>=1500&&c<1600?(M>0?(e+=M)>=x+512-s&&(e=x+512-s,M=-1*p):M<0&&(e+=M)<=x&&(e=x,M=p),i>0?(m+=i)>=I+320-r&&(m=I+320-r,i=-1*p):i<0&&(m+=i)<=I&&(m=I,i=p),aa()):c>=1600&&c<1700?(M>0?(e+=M)>=x+512-s&&(e=x+512-s,M=-1*(p>>1)):M<0&&(e+=M)<=x&&(e=x,M=p>>1),i>0?(m+=i)>=I+320-r-64&&(m=I+320-r-64,i=-1*p):i<0&&(m+=i)<=I+64&&(m=I+64,i=p),aa()):1700==c?(M<0?d?(e+=M)<=x&&(e=x,M=p,i=p,d=!1):(m-=p)<=I&&(m=I,i=0,d=!0):d?(e+=M)>=x+512-s&&(e=x+512-s,M=-1*p,i=-1*p,d=!1):(m+=p)>=I+320-r&&(m=I+320-r,i=0,d=!0),aa()):1800==c?(M<0?d?(e+=M)<=x&&(e=x,M=p,i=-1*p,d=!1):(m+=p)>=I+320-r&&(m=I+320-r,i=0,d=!0):d?(e+=M)>=x+512-s&&(e=x+512-s,M=-1*p,i=p,d=!1):(m-=p)<=I&&(m=I,i=0,d=!0),aa()):c>=1900&&c<2e3?(1900==c?n<=S>>1&&(c=1910,y<10&&(y=10)):M<0?(e+=M)<=f-512&&(e=f-512,M=p):(e+=M)>=f-s&&(e=f-s,M=-1*p),aa()):c>=2e3&&c<2100?(2e3==c?n<=Math.floor(S/3)&&(c=2010,y<10&&(y=10)):M<0?(e+=M)<=f-512&&(e=f-512,M=p):(e+=M)>=f-s&&(e=f-s,M=-1*p),aa()):c>=2100&&c<2200?(2100==c?n<=S>>1&&(c=2110,y<10&&(y=10)):((h-=p)<0&&(h+=360),e=f-256+Math.floor(96*Math.cos(3.14*h/180))-32,m=l+32+Math.floor(96*Math.sin(3.14*h/180))-32,M=h>180?-1:1),aa()):c>=2200&&c<2300?(2200==c?n<=Math.floor(S/3)&&(c=2110,y<10&&(y=10)):((h-=p)<0&&(h+=360),e=f-256+Math.floor(96*Math.cos(3.14*h/180))-32,m=l+32+Math.floor(96*Math.sin(3.14*h/180))-32,M=h>180?-1:1),aa()):2300==c?(i<0?(e+=M,(m+=i)<=l-192&&(m=l-192,e=f-128-192,i=p,M=p)):(e+=M,(m+=i)>=l&&(m=l,e=f-128,i=-1*p,M=-1*p)),aa()):2400==c?(i<0?(e+=M,(m+=i)<=l&&(m=l,e=f-128,i=p,M=-1*p)):(e+=M,(m+=i)>=l+192&&(m=l+192,e=f-128-192,i=-1*p,M=p)),aa()):2500==c?aa():c>=2600&&c<2700?(c<2616?c++:M<=0?e+(s>>1)<a.mp.co_j.x+15&&(M=p,c=2600):e+(s>>1)>a.mp.co_j.x+15&&(M=-1*p,c=2600),aa()):2700==c?(++_>1&&(_=0),0==_&&X<1024&&(X+=2,q+=2),aa()):2800==c&&(X<1024&&(X+=2,q+=2),aa());var j,B=!1;if(3!=C&&(Y?t.getMyXReal()+24>e-(X-s>>1)&&t.getMyXReal()<e+s+(X-s>>1)-8&&t.getMyYReal()+24>m-(q-r>>1)&&t.getMyYReal()<m+r+(q-r>>1)-8&&(B=!0):t.getMyXReal()+24>e&&t.getMyXReal()<e+s-8&&t.getMyYReal()+24>m&&t.getMyYReal()<m+r-8&&(B=!0)),B&&(2==C&&t.getMyVY()>10?(t.setMyPress("3"),t.setMyYReal(m),(n-=1)<=0?(n=0,c=50,u=20):(c=80,u=10)):4==C?t.setMyMiss("2"):(t.setMyHPDamage("1"),t.getMyHP()<=0&&t.setMyMiss("2"))),(j=Y?t.attackFire(e-24-(X-s>>1),m-24-(q-r>>1),X-32+48,q-32+48):t.attackFire(e-24,m-24,s-32+48,r-32+48))>=1&&(n-=j)<=0&&(n=0,c=50,u=20),2==z&&5==a.mp.j_tail_ac){var P=!1;if(Y?a.mp.co_j.y<m+r-4+(q-r>>1)&&a.mp.co_j.y+32>m+4-(q-r>>1)&&(0==a.mp.co_j.muki?a.mp.co_j.x-32-12<=e+s+(X-s>>1)&&a.mp.co_j.x+8>=e-(X-s>>1)&&(P=!0):a.mp.co_j.x+32+32+12>=e-(X-s>>1)&&a.mp.co_j.x+24<=e+s+(X-s>>1)&&(P=!0)):a.mp.co_j.y<m+r-4&&a.mp.co_j.y+32>m+4&&(0==a.mp.co_j.muki?a.mp.co_j.x-32-12<=e+s&&a.mp.co_j.x+8>=e&&(P=!0):a.mp.co_j.x+32+32+12>=e&&a.mp.co_j.x+24<=e+s&&(P=!0)),P){a.mp.gs.rsAddSound(9);var k=a.tdb.getValueInt("j_tail_ap_boss");k<0&&(k=0),(n-=k)<=0&&(n=0,c=50,u=20)}}}if(x>=N){if(Y){var R=a.gg.os_img.getGraphics();R.translate(e-x+(s>>1),m-I+(r>>1));var D=X/s,L=q/r;R.scale(D,L),c>=100?M<=0?v<=2||2==w?R.drawImage(G,-(s>>1),-(r>>1),t):null!=V&&R.drawImage(V,-(s>>1),-(r>>1),t):v<=2||2==w?R.drawImage(H,-(s>>1),-(r>>1),t):null!=E&&R.drawImage(E,-(s>>1),-(r>>1),t):c>=50&&c<=80&&(M<=0?R.drawImage(F,-(s>>1),-(r>>1),t):null!=J&&R.drawImage(J,-(s>>1),-(r>>1),t)),R.dispose()}else c>=100?M<=0?v<=2||2==w?o.drawImage(G,e-x,m-I,t):null!=V&&o.drawImage(V,e-x,m-I,t):v<=2||2==w?o.drawImage(H,e-x,m-I,t):null!=E&&o.drawImage(E,e-x,m-I,t):c>=50&&c<=80&&(M<=0?o.drawImage(F,e-x,m-I,t):null!=J&&o.drawImage(J,e-x,m-I,t));++v>5&&(v=0)}x>=N&&c>=50&&t.showGauge(Math.floor(200*n/S),b+" "+n+" / "+S)}(o,x,I);(function(){if(2!=a.mp.gg.layer_mode&&1!=a.mp.mcs_haikei_visible)return;for(var t=0;t<8;t++)!W[t]&&null!=Z[t]&&U[t]>0&&100==a.mp.ml_mode&&a.mp.maps.wx>=U[t]&&(a.mp.setbacki_f=!0,a.mp.setbacki_img=Z[t],W[t]=!0)})(),function(a,o){for(var e=0;e<=3;e++)Q[e]<=0||(Q[e]>=100&&o>=D[e]&&Q[e]--,Q[e]<100&&(a.drawImage(T[e],L[e],O[e],t),Q[e]--))}(o,x)}(x,t.getViewXReal(),t.getViewYReal())),my_offscreen_img=ta}},CanvasMasao.MasaoKani2.inject=function(a){a.userInit=function(){this.masaoKani2=new CanvasMasao.MasaoKani2(this)},a.userSub=function(a,t){this.masaoKani2.masaoEvent(a,t)}},CanvasMasao.MasaoConstruction.prototype.userInit=function(){this.masaoKani2=new CanvasMasao.MasaoKani2(this)},CanvasMasao.MasaoConstruction.prototype.userSub=function(a,t){this.masaoKani2.masaoEvent(a,t)};