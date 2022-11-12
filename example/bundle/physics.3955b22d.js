function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequire4485;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire4485=a);var o,r,d=a("ilwiq"),l=a("7lx9d"),s=a("5Rd1x"),c=a("7ePFa"),p={};o=p,r=function(){var e=function(){function t(e){return a.appendChild(e.dom),e}function n(e){for(var t=0;t<a.children.length;t++)a.children[t].style.display=t===e?"block":"none";i=e}var i=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",(function(e){e.preventDefault(),n(++i%a.children.length)}),!1);var o=(performance||Date).now(),r=o,d=0,l=t(new e.Panel("FPS","#0ff","#002")),s=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new e.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:a,addPanel:t,showPanel:n,begin:function(){o=(performance||Date).now()},end:function(){d++;var e=(performance||Date).now();if(s.update(e-o,200),e>r+1e3&&(l.update(1e3*d/(e-r),100),r=e,d=0,c)){var t=performance.memory;c.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){o=this.end()},domElement:a,setMode:n}};return e.Panel=function(e,t,n){var i=1/0,a=0,o=Math.round,r=o(window.devicePixelRatio||1),d=80*r,l=48*r,s=3*r,c=2*r,p=3*r,h=15*r,m=74*r,u=30*r,f=document.createElement("canvas");f.width=d,f.height=l,f.style.cssText="width:80px;height:48px";var w=f.getContext("2d");return w.font="bold "+9*r+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=n,w.fillRect(0,0,d,l),w.fillStyle=t,w.fillText(e,s,c),w.fillRect(p,h,m,u),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(p,h,m,u),{dom:f,update:function(l,y){i=Math.min(i,l),a=Math.max(a,l),w.fillStyle=n,w.globalAlpha=1,w.fillRect(0,0,d,h),w.fillStyle=t,w.fillText(o(l)+" "+e+" ("+o(i)+"-"+o(a)+")",s,c),w.drawImage(f,p+r,h,m-r,u,p,h,m-r,u),w.fillRect(p+m-r,h,r,u),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(p+m-r,h,r,o((1-l/y)*u))}}},e},"object"==typeof p?p=r():"function"==typeof define&&define.amd?define(r):o.Stats=r();var h=a("jiuw3"),m=a("4CEV9");const u={displayCollider:!1,displayBVH:!1,displayParents:!1,visualizeDepth:10,gravity:-9.8,physicsSteps:5,simulationSpeed:1,sphereSize:1,pause:!1,step:()=>{const e=u.physicsSteps;for(let t=0;t<e;t++)T(.016/e)},explode:function(){const e=new d.Vector3;b.forEach((t=>{e.copy(t.position),e.y+=10,e.normalize(),t.velocity.addScaledVector(e,120)}))},reset:function(){b.forEach((e=>{e.material.dispose(),e.geometry.dispose(),y.remove(e)})),b.length=0,P.forEach((e=>{e.material.dispose(),e.geometry.dispose(),y.remove(e)})),P.length=0}};let f,w,y,S,v,g,M,x,V;const b=[],P=[],C=new d.Sphere,E=new d.Vector3,z=new d.Vector3,R=new d.Vector3(0,0,1);function L(e,t,n,i,a,o=0){if(a<Math.max(Math.abs(.04*u.gravity),5))return;const r=2*Math.max(t?Math.max(e.collider.radius,t.collider.radius):e.collider.radius,.4),l=new d.Mesh(new d.RingBufferGeometry(0,1,30),new d.MeshBasicMaterial({side:2,transparent:!0,depthWrite:!1}));l.lifetime=0,l.maxLifetime=.4,l.maxScale=r*Math.max(Math.sin(Math.min(a/200,1)*Math.PI/2),.35),l.position.copy(n).addScaledVector(i,o),l.quaternion.setFromUnitVectors(R,i),y.add(l),P.push(l)}function B(){const e=new d.Color(16777215),t=new d.Color(1251612).lerp(e,.5*Math.random()+.5).convertSRGBToLinear(),n=new d.Mesh(new d.SphereGeometry(1,20,20),new d.MeshStandardMaterial({color:t}));y.add(n),n.castShadow=!0,n.receiveShadow=!0,n.material.shadowSide=2;const i=.5*u.sphereSize*(.2*Math.random()+.6);return n.scale.setScalar(i),n.collider=new d.Sphere(n.position,i),n.velocity=new d.Vector3(0,0,0),n.mass=Math.pow(i,3)*Math.PI*4/3,b.push(n),n}function H(e){const t=x.geometry.boundsTree;for(let n=0,i=b.length;n<i;n++){const a=b[n],o=a.collider;if(a.velocity.y+=u.gravity*e,o.center.addScaledVector(a.velocity,e),o.center.y<-80){b.splice(n,1),n--,i--,a.material.dispose(),a.geometry.dispose(),y.remove(a);continue}C.copy(a.collider);let r=!1;if(t.shapecast({intersectsBounds:e=>e.intersectsSphere(C),intersectsTriangle:e=>{e.closestPointToPoint(C.center,E),E.sub(C.center);const t=E.length();if(t<C.radius){const e=t-C.radius;E.multiplyScalar(1/t),C.center.addScaledVector(E,e),r=!0}},traverseBoundsOrder:e=>e.distanceToPoint(C.center)-C.radius}),r){E.subVectors(C.center,o.center).normalize(),a.velocity.reflect(E);const t=a.velocity.dot(E);a.velocity.addScaledVector(E,.5*-t),a.velocity.multiplyScalar(Math.max(1-e,0)),o.center.copy(C.center),z.copy(C.center).addScaledVector(E,-C.radius),L(a,null,z,E,t,.05)}}for(let e=0,t=b.length;e<t;e++){const n=b[e],i=n.collider;for(let a=e+1;a<t;a++){const e=b[a],t=e.collider;E.subVectors(i.center,t.center);const o=E.length()-(i.radius+t.radius);if(o<0){E.normalize();const a=n.velocity.dot(E),r=e.velocity.dot(E),l=Math.max(a,.2),s=Math.max(r,.2),c=l+s,p=l/c,h=s/c;i.center.addScaledVector(E,-p*o),t.center.addScaledVector(E,h*o);const m=new d.Vector3;m.addScaledVector(E,-a).addScaledVector(E,r);const u=m.length(),f=n.mass,w=e.mass;let y,S;const v=.5;m.dot(n.velocity)>m.dot(e.velocity)?(y=v*u*(f-w)/(f+w),S=v*u*2*f/(f+w),y-=u):(y=v*u*2*w/(f+w),S=v*u*(w-f)/(f+w),S-=u),m.normalize(),n.velocity.addScaledVector(m,y),e.velocity.addScaledVector(m,S),z.copy(i.center).addScaledVector(E,-i.radius),L(n,e,z,E,u,0)}}n.position.copy(i.center)}}function T(e){if(x){const t=u.physicsSteps;for(let n=0;n<t;n++)H(e/t)}for(let t=0,n=P.length;t<n;t++){const i=P[t];i.lifetime+=e;const a=i.lifetime/i.maxLifetime;let o=Math.sin(4.5*a*Math.PI/4);o=1-Math.pow(1-o,2),i.scale.setScalar(o*i.maxScale),i.material.opacity=1-Math.sin(2*a*Math.PI/4),a>=1&&(P.splice(t,1),i.parent.remove(i),i.geometry.dispose(),i.material.dispose(),t--,n--)}}!function(){const t=1251612;f=new d.WebGLRenderer({antialias:!0}),f.setPixelRatio(window.devicePixelRatio),f.setSize(window.innerWidth,window.innerHeight),f.setClearColor(t,1),f.shadowMap.enabled=!0,f.shadowMap.type=d.PCFSoftShadowMap,f.outputEncoding=d.sRGBEncoding,document.body.appendChild(f.domElement),y=new d.Scene,y.fog=new d.Fog(t,30,70);const n=new d.DirectionalLight(11193599,1);n.position.set(1,1.5,1).multiplyScalar(50),n.intensity=.25;const i=n.shadow.camera;i.bottom=i.left=-10,i.top=i.right=10,y.add(n),y.add(new d.HemisphereLight(4491519,2241348,.3)),w=new d.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50),w.position.set(10,10,-10),w.far=100,w.updateProjectionMatrix(),window.camera=w,S=new d.Clock,new s.OrbitControls(w,f.domElement),g=new(e(p)),document.body.appendChild(g.dom),(new l.GLTFLoader).load("../models/low_poly_environment_jungle_scene/scene.gltf",(e=>{M=e.scene,M.scale.setScalar(.05);const t=new d.PointLight(65535);t.distance=7,t.position.set(-100,-40,100),M.add(t);const n=new d.PointLight(16768358);n.distance=15,n.intensity=5,n.position.set(80,80,135),n.shadow.normalBias=.01,n.shadow.bias=-.001,n.shadow.mapSize.setScalar(1024),n.castShadow=!0,M.add(n);const i=[];M.updateMatrixWorld(!0),M.traverse((e=>{if(e.geometry){const t=e.geometry.clone();t.applyMatrix4(e.matrixWorld);for(const e in t.attributes)"position"!==e&&t.deleteAttribute(e);i.push(t)}}));const a=c.mergeBufferGeometries(i,!1);a.boundsTree=new m.MeshBVH(a),x=new d.Mesh(a),x.material.wireframe=!0,x.material.opacity=.5,x.material.transparent=!0,V=new m.MeshBVHVisualizer(x,u.visualizeDepth),y.add(V),y.add(x),y.add(M),M.traverse((e=>{e.material&&(e.castShadow=!0,e.receiveShadow=!0,e.material.shadowSide=2)}))})),v=new h.GUI;const a=v.addFolder("Visualization");a.add(u,"displayCollider"),a.add(u,"displayBVH"),a.add(u,"displayParents").onChange((e=>{V.displayParents=e,V.update()})),a.add(u,"visualizeDepth",1,20,1).onChange((e=>{V.depth=e,V.update()})),a.open();const o=v.addFolder("Physics");o.add(u,"physicsSteps",0,30,1),o.add(u,"gravity",-100,100,.01).onChange((e=>{u.gravity=parseFloat(e)})),o.add(u,"simulationSpeed",0,5,.01),o.add(u,"sphereSize",.2,5,.1),o.add(u,"pause"),o.add(u,"step"),o.open(),v.add(u,"explode"),v.add(u,"reset"),v.open();const r=new d.Raycaster,b=new d.Vector2;let P=0,C=0;f.domElement.addEventListener("pointerdown",(e=>{P=e.clientX,C=e.clientY})),f.domElement.addEventListener("pointerup",(e=>{if(Math.abs(e.clientX-P)+Math.abs(e.clientY-C)>2)return;b.x=e.clientX/window.innerWidth*2-1,b.y=-e.clientY/window.innerHeight*2+1,r.setFromCamera(b,w);const t=B();t.position.copy(w.position).addScaledVector(r.ray.direction,3),t.velocity.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).addScaledVector(r.ray.direction,10*Math.random()+15).multiplyScalar(.5)})),window.addEventListener("resize",(function(){w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)}),!1),window.createSphere=B}(),function e(){g.update(),requestAnimationFrame(e);const t=Math.min(S.getDelta(),.1);x&&(x.visible=u.displayCollider,V.visible=u.displayBVH,u.pause||T(u.simulationSpeed*t));f.render(y,w)}();
//# sourceMappingURL=physics.3955b22d.js.map