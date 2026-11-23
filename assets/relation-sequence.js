function perspective(fov,aspect,near,far,out=new Float32Array(16)){out.fill(0);const f=1/Math.tan(fov*Math.PI/360);out[0]=f/aspect;out[5]=f;out[10]=(far+near)/(near-far);out[11]=-1;out[14]=2*far*near/(near-far);return out;}function lookAtOrigin(x,y,z,out=new Float32Array(16)){const length=Math.hypot(x,y,z);if(!length)throw new Error("Field camera cannot occupy its target");const zx=x/length,zy=y/length,zz=z/length;let xx=zz,xz=-zx,xl=Math.hypot(xx,xz);if(!xl){xx=1;xz=0;xl=1;}xx/=xl;xz/=xl;const yx=zy*xz,yy=zz*xx-zx*xz,yz=-zy*xx;out.set([xx,yx,zx,0,0,yy,zy,0,xz,yz,zz,0,-(xx*x+xz*z),-(yx*x+yy*y+yz*z),-(zx*x+zy*y+zz*z),1]);return out;}function srgbToLinear(value){return value<=.04045?value/12.92:Math.pow((value+.055)/1.055,2.4);}function sampleField(model,index,blend,out){const presets=model.field.presets;const i=Math.max(0,Math.min(presets.length-1,Math.floor(index)));const a=presets[i],b=presets[Math.min(i+1,presets.length-1)];const t=Math.max(0,Math.min(1,blend));for(const key of model.field.keys)out[key]=a[key]+(b[key]-a[key])*t;for(const key of["deep","mid","hot"])for(let c=0;c<3;c++)out[key][c]=a[key][c]+(b[key][c]-a[key][c])*t;return out;}function mipSizes(width,height,levels){const result=[];for(let i=0;i<levels;i++){width=Math.max(1,Math.round(width/2));height=Math.max(1,Math.round(height/2));result.push([width,height]);}return result;}const downVertex="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}";const downFragment="#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\n#define WEIGHT_INNER 0.125\n#define WEIGHT_OUTER 0.05556\nvarying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;\n#include <colorspace_fragment>\n}";const upVertex="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}";const upFragment="#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;\n#else\nuniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;\n#endif\nuniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);\n#include <colorspace_fragment>\n}";const luminanceFragment="#include <common>\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\n#ifdef RANGE\nuniform vec2 range;\n#elif defined(THRESHOLD)\nuniform float threshold;uniform float smoothing;\n#endif\nvarying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;\n#ifdef RANGE\nfloat low=step(range.x,l);float high=step(l,range.y);mask=low*high;\n#elif defined(THRESHOLD)\nmask=smoothstep(threshold,threshold+smoothing,l);\n#endif\n#ifdef COLOR\ngl_FragColor=texel*mask;\n#else\ngl_FragColor=vec4(l*mask);\n#endif\n}";const screenBlend="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}";const softLightBlend="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}";const vignetteFragment="uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;\n#if VIGNETTE_TECHNIQUE == 0\nfloat d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));\n#else\nvec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));\n#endif\noutputColor=vec4(color,inputColor.a);}";const noiseFragment="void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*(1.0+time)));\n#ifdef PREMULTIPLY\noutputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);\n#else\noutputColor=vec4(noise,inputColor.a);\n#endif\n}";const colourFunctions="#define saturate(a) clamp(a,0.0,1.0)\n#define PI 3.141592653589793\nuniform float toneMappingExposure;\nvec3 RRTAndODTFit( vec3 v ) {\n\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n\n}\n\n// this implementation of ACES is modified to accommodate a brighter viewing environment.\n// the scale factor of 1/0.6 is subjective. see discussion in #19621.\n\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\n	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source\n		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n\n	// ODT_SAT => XYZ => D60_2_D65 => sRGB\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source\n		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n\n	color *= toneMappingExposure / 0.6;\n\n	color = ACESInputMat * color;\n\n	// Apply RRT and ODT\n	color = RRTAndODTFit( color );\n\n	color = ACESOutputMat * color;\n\n	// Clamp to [0, 1]\n	return saturate( color );\n\n}\n\nhighp float rand( const in vec2 uv ) {\n\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\n	return fract( sin( sn ) * c );\n\n}\n\n\n\nvec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\n\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\n\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\n\n";const lightingKeys=["bloomIntensity","bloomThreshold","bloomSmoothing","bloomRadius","exposure","vignetteOffset","vignetteDarkness","noiseOpacity"];const fullscreenVertex="in vec3 position;out vec2 vUv;void main(){vUv=position.xy*.5+.5;gl_Position=vec4(position.xy,1.,1.);}";const luminance="float luminance(vec3 rgb){return dot(rgb,vec3(0.2126,0.7152,0.0722));}\n";function shaderSource(source,fragment,prefix=""){source=source.replace(/#include <(?:common|colorspace_fragment)>/g,"").replace(/\battribute\b/g,"in").replace(/\bvarying\b/g,fragment?"in":"out").replace(/\btexture2D\b/g,"texture").replace(/\bgl_FragColor\b/g,"outColor");if(!fragment&&/\bposition\b/.test(source)&&!/\bin\s+vec3\s+position\b/.test(source))prefix+="in vec3 position;\n";return"#version 300 es\nprecision highp float;\n"+(fragment?"out vec4 outColor;\n":"")+prefix+source;}const compositeFragment=`in vec2 vUv;uniform sampler2D sceneBuffer;uniform sampler2D bloomBuffer;
uniform float intensity;uniform float offset;uniform float darkness;uniform float noiseOpacity;uniform float time;
${colourFunctions}
${screenBlend.replace(/\bblend\b/g,"screenBlend")}
${softLightBlend.replace(/\bblend\b/g,"softLightBlend")}
${vignetteFragment.replace("uniform float offset;uniform float darkness;","").replace(/\bmainImage\b/g,"vignette")}
${noiseFragment.replace(/\bmainImage\b/g,"grain")}
void main(){
 vec4 colour=screenBlend(texture(sceneBuffer,vUv),texture(bloomBuffer,vUv)*intensity,1.);
 colour.rgb=ACESFilmicToneMapping(colour.rgb);
 vec4 next;vignette(colour,vUv,next);colour=next;
 grain(colour,vUv,next);colour=softLightBlend(colour,next,noiseOpacity);
 colour.a=clamp(colour.a,0.,1.);outColor=sRGBTransferOETF(colour);
}`;function createRelationRenderer(model,options={}){const lighting=options.lighting;if(!lighting||lightingKeys.some(key=>!Number.isFinite(lighting[key])))throw new Error("Complete field lighting tokens required");if(!Array.isArray(options.ground)||options.ground.length!==3||!options.ground.every(value=>Number.isFinite(value)&&value>=0&&value<=1))throw new Error("Resolved field ground required");const canvas=document.createElement("canvas");const gl=canvas.getContext("webgl2",{alpha:false,antialias:false,depth:false,stencil:false,powerPreference:"high-performance",preserveDrawingBuffer:false});if(!gl)throw new Error("WebGL2 field renderer unavailable");let disposed=false,lost=false,initialized=false,lastFrame=null,population=null;let programs=[],buffers=[],textures=[],framebuffers=[],shaders=[];let points,streams,down,up,threshold,composite,triangle,scene,bright,downMips,upMips;let width=0,height=0;const field=model.field;const background=options.ground.map(srgbToLinear);const state={deep:new Float32Array(3),mid:new Float32Array(3),hot:new Float32Array(3)};const projection=new Float32Array(16),view=new Float32Array(16);const pointer=new Float32Array(3),parallax=new Float32Array(2),texel=new Float32Array(2);function release(){if(!gl.isContextLost()){for(const value of shaders)gl.deleteShader(value);for(const value of programs)gl.deleteProgram(value.handle);for(const value of buffers)gl.deleteBuffer(value);for(const value of textures)gl.deleteTexture(value);for(const value of framebuffers)gl.deleteFramebuffer(value);}shaders=[];programs=[];buffers=[];textures=[];framebuffers=[];initialized=false;width=height=0;}function compile(type,source){const shader=gl.createShader(type);if(!shader)throw new Error("Cannot allocate field shader");shaders.push(shader);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(shader)||"Field shader compilation failed");return shader;}function program(vertex,fragment,prefix=""){const handle=gl.createProgram();if(!handle)throw new Error("Cannot allocate field program");const p={handle,uniforms:new Map,attributes:[]};programs.push(p);const vs=compile(gl.VERTEX_SHADER,shaderSource(vertex,false,prefix));const fs=compile(gl.FRAGMENT_SHADER,shaderSource(fragment,true,prefix));gl.attachShader(handle,vs);gl.attachShader(handle,fs);gl.linkProgram(handle);if(!gl.getProgramParameter(handle,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(handle)||"Field program link failed");gl.deleteShader(vs);gl.deleteShader(fs);shaders=shaders.filter(s=>s!==vs&&s!==fs);return p;}function buffer(data){const value=gl.createBuffer();if(!value)throw new Error("Cannot allocate field geometry");buffers.push(value);gl.bindBuffer(gl.ARRAY_BUFFER,value);gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);return value;}function attribute(p,name,value,size){p.attributes.push({location:gl.getAttribLocation(p.handle,name),buffer:value,size});}function use(p){gl.useProgram(p.handle);for(const a of p.attributes)if(a.location>=0){gl.bindBuffer(gl.ARRAY_BUFFER,a.buffer);gl.enableVertexAttribArray(a.location);gl.vertexAttribPointer(a.location,a.size,gl.FLOAT,false,0,0);}}function uniform(p,name,value,integer=false){if(!p.uniforms.has(name))p.uniforms.set(name,gl.getUniformLocation(p.handle,name));const location=p.uniforms.get(name);if(location===null)return;if(integer)gl.uniform1i(location,value);else if(typeof value==="number")gl.uniform1f(location,value);else if(value.length===16)gl.uniformMatrix4fv(location,false,value);else if(value.length===3)gl.uniform3fv(location,value);else gl.uniform2fv(location,value);}function draw(p,kind,count){gl.drawArrays(kind,0,count);for(const a of p.attributes)if(a.location>=0)gl.disableVertexAttribArray(a.location);}function target(){const texture=gl.createTexture(),framebuffer=gl.createFramebuffer();if(texture)textures.push(texture);if(framebuffer)framebuffers.push(framebuffer);if(!texture||!framebuffer)throw new Error("Cannot allocate field render target");gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);return{texture,framebuffer,width:0,height:0};}function allocate(t,w,h){if(t.width===w&&t.height===h)return;gl.bindTexture(gl.TEXTURE_2D,t.texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA16F,w,h,0,gl.RGBA,gl.HALF_FLOAT,null);gl.bindFramebuffer(gl.FRAMEBUFFER,t.framebuffer);if(gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE)throw new Error("Half-float field framebuffer incomplete");t.width=w;t.height=h;}function initialize(frame){if(!gl.getExtension("EXT_color_buffer_float"))throw new Error("Half-float field rendering unavailable");if(!population)population=model.pickCounts(frame.size.width,frame.reduced===true);const pointData=model.buildPoints(population.points);points=program(model.fieldVertexShader,model.fieldFragmentShader,"uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;\n");for(const[name,data,size]of[["aSeed",pointData.seeds,3],["aRand",pointData.rand,3],["aTone",pointData.tone,1],["aScale",pointData.scale,1]])attribute(points,name,buffer(data),size);points.count=pointData.count;const paths=model.buildStreamlines(population.lines,population.steps);streams=program("attribute vec3 position;\n"+model.streamVertexShader,model.streamFragmentShader,"uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;\n");for(const[name,data,size]of[["position",paths.positions,3],["aAlong",paths.along,1],["aSeed",paths.seed,1],["aTone",paths.tone,1]])attribute(streams,name,buffer(data),size);streams.count=paths.vertexCount;triangle=buffer(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]));down=program(downVertex,downFragment,"#define FRAMEBUFFER_PRECISION_HIGH\n");up=program(upVertex,upFragment,"#define FRAMEBUFFER_PRECISION_HIGH\n");threshold=program(fullscreenVertex,luminanceFragment,"#define FRAMEBUFFER_PRECISION_HIGH\n#define THRESHOLD\n#define COLOR\n"+luminance);composite=program(fullscreenVertex,compositeFragment,"#define VIGNETTE_TECHNIQUE 0\n#define PREMULTIPLY\n");for(const p of[down,up,threshold,composite])attribute(p,"position",triangle,3);scene=target();bright=target();downMips=Array.from({length:field.bloomLevels},target);upMips=Array.from({length:field.bloomLevels-1},target);gl.disable(gl.DEPTH_TEST);gl.disable(gl.CULL_FACE);gl.disable(gl.DITHER);initialized=true;}function resize(frame){const w=Math.max(1,Math.round(frame.size.width*frame.size.pixelRatio));const h=Math.max(1,Math.round(frame.size.height*frame.size.pixelRatio));if(w===width&&h===height)return;const limit=gl.getParameter(gl.MAX_TEXTURE_SIZE);if(w>limit||h>limit)throw new Error("Field render size exceeds GPU limit");canvas.width=w;canvas.height=h;allocate(scene,w,h);allocate(bright,w,h);const sizes=mipSizes(w,h,field.bloomLevels);sizes.forEach(([mw,mh],i)=>{allocate(downMips[i],mw,mh);if(upMips[i])allocate(upMips[i],mw,mh);});width=w;height=h;}function bind(t){gl.bindFramebuffer(gl.FRAMEBUFFER,t?.framebuffer??null);gl.viewport(0,0,t?.width??width,t?.height??height);}function texture(p,name,t,unit){gl.activeTexture(gl.TEXTURE0+unit);gl.bindTexture(gl.TEXTURE_2D,t.texture);uniform(p,name,unit,true);}function common(p,frame){use(p);uniform(p,"projectionMatrix",projection);uniform(p,"modelViewMatrix",view);uniform(p,"uTime",frame.time);uniform(p,"uIntro",frame.intro);uniform(p,"uDeep",state.deep);uniform(p,"uMid",state.mid);uniform(p,"uHot",state.hot);}function render(frame){if(disposed||lost||gl.isContextLost())return false;const numeric=["time","index","blend","intro","pointerX","pointerY","velocity","cameraX","cameraY","cameraZ","pointerCameraZ","streamOpacity","parallaxX","parallaxY"];if(!frame?.size||numeric.some(key=>!Number.isFinite(frame[key]))||!["width","height","pixelRatio"].every(key=>Number.isFinite(frame.size[key])&&frame.size[key]>0))throw new Error("Complete finite field frame required");lastFrame={...frame,size:{...frame.size}};try{if(!initialized)initialize(frame);resize(frame);sampleField(model,frame.index,frame.blend,state);perspective(field.cameraFov,width/height,field.cameraNear,field.cameraFar,projection);lookAtOrigin(frame.cameraX,frame.cameraY,frame.cameraZ,view);const halfH=Math.tan(field.cameraFov*Math.PI/360)*frame.pointerCameraZ;pointer[0]=frame.pointerX*halfH*width/height;pointer[1]=frame.pointerY*halfH;pointer[2]=0;parallax[0]=frame.parallaxX;parallax[1]=frame.parallaxY;bind(scene);gl.clearColor(...background,1);gl.clear(gl.COLOR_BUFFER_BIT);gl.enable(gl.BLEND);gl.blendEquation(gl.FUNC_ADD);gl.blendFuncSeparate(gl.SRC_ALPHA,gl.ONE,gl.ONE,gl.ONE);common(streams,frame);uniform(streams,"uOpacity",frame.streamOpacity);uniform(streams,"uParallax",parallax);draw(streams,gl.LINES,streams.count);common(points,frame);for(const key of field.keys)uniform(points,"u"+key[0].toUpperCase()+key.slice(1),state[key]);uniform(points,"uSize",Math.max(field.pointSize.minimum,Math.min(field.pointSize.maximum,frame.size.height/field.pointSize.reference)));uniform(points,"uPixelRatio",Math.min(frame.size.pixelRatio,2));uniform(points,"uVelocity",frame.velocity);uniform(points,"uMouse",pointer);uniform(points,"uMouseForce",frame.pointerEnabled===false?0:state.mouseForce);draw(points,gl.POINTS,points.count);gl.disable(gl.BLEND);bind(bright);use(threshold);texture(threshold,"inputBuffer",scene,0);uniform(threshold,"threshold",lighting.bloomThreshold);uniform(threshold,"smoothing",lighting.bloomSmoothing);draw(threshold,gl.TRIANGLES,3);let previous=bright;for(const mip of downMips){bind(mip);use(down);texture(down,"inputBuffer",previous,0);texel[0]=1/previous.width;texel[1]=1/previous.height;uniform(down,"texelSize",texel);draw(down,gl.TRIANGLES,3);previous=mip;}for(let i=upMips.length-1;i>=0;i--){const mip=upMips[i];bind(mip);use(up);texture(up,"inputBuffer",previous,0);texture(up,"supportBuffer",downMips[i],1);texel[0]=1/previous.width;texel[1]=1/previous.height;uniform(up,"texelSize",texel);uniform(up,"radius",lighting.bloomRadius);draw(up,gl.TRIANGLES,3);previous=mip;}bind(null);use(composite);texture(composite,"sceneBuffer",scene,0);texture(composite,"bloomBuffer",previous,1);uniform(composite,"intensity",lighting.bloomIntensity);uniform(composite,"toneMappingExposure",lighting.exposure);uniform(composite,"offset",lighting.vignetteOffset);uniform(composite,"darkness",lighting.vignetteDarkness);uniform(composite,"noiseOpacity",lighting.noiseOpacity);uniform(composite,"time",frame.time);draw(composite,gl.TRIANGLES,3);return true;}catch(error){release();options.onError?.(error);throw error;}}function contextLost(event){event.preventDefault();lost=true;release();options.onLost?.();}function contextRestored(){if(disposed)return;lost=false;try{if(lastFrame)render(lastFrame);options.onRestored?.();}catch(error){}}canvas.addEventListener("webglcontextlost",contextLost);canvas.addEventListener("webglcontextrestored",contextRestored);return{canvas,render,dispose(){if(disposed)return;disposed=true;canvas.removeEventListener("webglcontextlost",contextLost);canvas.removeEventListener("webglcontextrestored",contextRestored);release();lastFrame=null;gl.getExtension("WEBGL_lose_context")?.loseContext();}};}function rgb(hex){const n=parseInt(hex.replace("#",""),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];}const PRESETS=[{id:"dark",label:"The dark",spread:1,freq:.15,amp:1.5,drift:.05,fall:.62,pull:0,cluster:0,cell:3.2,swirl:.02,shear:0,grain:1,gain:1,stream:.18,camZ:10.2,mouseForce:.5,deep:rgb("#05141a"),mid:rgb("#126b62"),hot:rgb("#8ff0d8")},{id:"pressure",label:"Pressure",spread:.94,freq:.26,amp:.95,drift:.09,fall:.12,pull:.58,cluster:0,cell:3.2,swirl:.1,shear:0,grain:.86,gain:1.05,stream:.3,camZ:9.1,mouseForce:.34,deep:rgb("#05081c"),mid:rgb("#2b3d96"),hot:rgb("#9db9ff")},{id:"light",label:"Light",spread:1.08,freq:.52,amp:.42,drift:.14,fall:.06,pull:0,cluster:.88,cell:3.05,swirl:.26,shear:0,grain:1.12,gain:1.15,stream:.1,camZ:10.6,mouseForce:.72,deep:rgb("#02120f"),mid:rgb("#128a6a"),hot:rgb("#c2ffe8")},{id:"fall",label:"The fall",spread:1,freq:.34,amp:.66,drift:.1,fall:.05,pull:.92,cluster:0,cell:3.2,swirl:.34,shear:0,grain:1,gain:1.2,stream:.14,camZ:9.4,mouseForce:.5,deep:rgb("#0d0904"),mid:rgb("#9a6220"),hot:rgb("#ffdca8")},{id:"machines",label:"The machines",spread:1.05,freq:.31,amp:1.85,drift:.26,fall:.18,pull:.12,cluster:0,cell:3.2,swirl:.06,shear:.92,grain:.9,gain:1.1,stream:.42,camZ:9.8,mouseForce:.85,deep:rgb("#160409"),mid:rgb("#9c2333"),hot:rgb("#ff9384")},{id:"hold",label:"Hold",spread:1.02,freq:.1,amp:1.15,drift:.045,fall:.2,pull:.16,cluster:0,cell:3.2,swirl:.05,shear:.26,grain:1.05,gain:1,stream:.55,camZ:10,mouseForce:.45,deep:rgb("#020b10"),mid:rgb("#166a7c"),hot:rgb("#9ce6ff")},{id:"current",label:"Current",spread:1.15,freq:.08,amp:1.4,drift:.05,fall:.1,pull:.1,cluster:0,cell:3.2,swirl:.03,shear:.4,grain:.8,gain:.3,stream:1,camZ:9.6,mouseForce:.3,deep:rgb("#0a0416"),mid:rgb("#6c2bb0"),hot:rgb("#ff8fd8")}];PRESETS.length;const BLENDED_KEYS=["spread","freq","amp","drift","fall","pull","cluster","cell","swirl","shear","grain","gain","stream","camZ","mouseForce"];function mulberry32(seed){let a=seed>>>0;return function random(){a|=0;a=a+0x6d2b79f5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/0x100000000;};}function gaussian(random){let u=0;let v=0;while(u===0)u=random();while(v===0)v=random();const g=Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);return Math.max(-3,Math.min(3,g));}const F3=1/3;const G3=1/6;const GRAD3=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function createNoise3D(random=Math.random){const p=new Uint8Array(256);for(let i=0;i<256;i++)p[i]=i;for(let i=255;i>0;i--){const n=Math.floor((i+1)*random());const tmp=p[i];p[i]=p[n];p[n]=tmp;}const perm=new Uint8Array(512);const permMod12=new Uint8Array(512);for(let i=0;i<512;i++){perm[i]=p[i&255];permMod12[i]=perm[i]%12;}return function noise3D(x,y,z){const s=(x+y+z)*F3;const i=Math.floor(x+s);const j=Math.floor(y+s);const k=Math.floor(z+s);const t=(i+j+k)*G3;const x0=x-(i-t);const y0=y-(j-t);const z0=z-(k-t);let i1,j1,k1;let i2,j2,k2;if(x0>=y0){if(y0>=z0){i1=1;j1=0;k1=0;i2=1;j2=1;k2=0;}else if(x0>=z0){i1=1;j1=0;k1=0;i2=1;j2=0;k2=1;}else{i1=0;j1=0;k1=1;i2=1;j2=0;k2=1;}}else{if(y0<z0){i1=0;j1=0;k1=1;i2=0;j2=1;k2=1;}else if(x0<z0){i1=0;j1=1;k1=0;i2=0;j2=1;k2=1;}else{i1=0;j1=1;k1=0;i2=1;j2=1;k2=0;}}const x1=x0-i1+G3;const y1=y0-j1+G3;const z1=z0-k1+G3;const x2=x0-i2+2*G3;const y2=y0-j2+2*G3;const z2=z0-k2+2*G3;const x3=x0-1+3*G3;const y3=y0-1+3*G3;const z3=z0-1+3*G3;const ii=i&255;const jj=j&255;const kk=k&255;let n0=0,n1=0,n2=0,n3=0;let t0=.6-x0*x0-y0*y0-z0*z0;if(t0>0){const gi0=permMod12[ii+perm[jj+perm[kk]]]*3;t0*=t0;n0=t0*t0*(GRAD3[gi0]*x0+GRAD3[gi0+1]*y0+GRAD3[gi0+2]*z0);}let t1=.6-x1*x1-y1*y1-z1*z1;if(t1>0){const gi1=permMod12[ii+i1+perm[jj+j1+perm[kk+k1]]]*3;t1*=t1;n1=t1*t1*(GRAD3[gi1]*x1+GRAD3[gi1+1]*y1+GRAD3[gi1+2]*z1);}let t2=.6-x2*x2-y2*y2-z2*z2;if(t2>0){const gi2=permMod12[ii+i2+perm[jj+j2+perm[kk+k2]]]*3;t2*=t2;n2=t2*t2*(GRAD3[gi2]*x2+GRAD3[gi2+1]*y2+GRAD3[gi2+2]*z2);}let t3=.6-x3*x3-y3*y3-z3*z3;if(t3>0){const gi3=permMod12[ii+1+perm[jj+1+perm[kk+1]]]*3;t3*=t3;n3=t3*t3*(GRAD3[gi3]*x3+GRAD3[gi3+1]*y3+GRAD3[gi3+2]*z3);}return 32*(n0+n1+n2+n3);};}const SIMPLEX=`
  vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 mm = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    mm = mm * mm;
    return 42.0 * dot(mm*mm, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;const RAMP=`
  vec3 ramp(vec3 deep, vec3 mid, vec3 hot, float t) {
    float k = clamp(t, 0.0, 1.0);
    return k < 0.5
      ? mix(deep, mid, k * 2.0)
      : mix(mid, hot, (k - 0.5) * 2.0);
  }
`;const fieldVertexShader=`
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uIntro;
  uniform float uVelocity;

  uniform vec3  uMouse;
  uniform float uMouseForce;

  /* The section, as forces. Every one of these is a live blend of two
     neighbouring presets — none is ever a preset's own value except
     exactly at the top of a section. */
  uniform float uSpread;
  uniform float uFreq;
  uniform float uAmp;
  uniform float uDrift;
  uniform float uFall;
  uniform float uPull;
  uniform float uCluster;
  uniform float uCell;
  uniform float uSwirl;
  uniform float uShear;
  uniform float uGrain;
  uniform float uGain;

  uniform vec3 uDeep;
  uniform vec3 uMid;
  uniform vec3 uHot;

  attribute vec3  aSeed;
  attribute vec3  aRand;
  attribute float aTone;
  attribute float aScale;

  varying vec3  vColor;
  varying float vAlpha;

  ${SIMPLEX}
  ${RAMP}

  vec3 hash3(vec3 c) {
    vec3 p = vec3(
      dot(c, vec3(127.1, 311.7,  74.7)),
      dot(c, vec3(269.5, 183.3, 246.1)),
      dot(c, vec3(113.5, 271.9, 124.6))
    );
    return fract(sin(p) * 43758.5453123);
  }

  vec2 rot(vec2 p, float a) {
    float c = cos(a), s = sin(a);
    return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  }

  /** The band particles recycle through when uFall is non-zero. */
  const float BAND = 8.0;

  void main() {
    vec3 p = aSeed;

    /* --- 1. Fall, with wraparound ---------------------------------- *
       mod() over the band is an identity when uFall is zero, so this
       costs nothing in the sections that do not use it and needs no
       branch. */
    p.y = mod(p.y - uTime * uFall + BAND, BAND * 2.0) - BAND;

    p *= uSpread;

    /* --- 2. Colonies ----------------------------------------------- *
       Contract each lattice cell's contents toward a jittered centre.
       This is what turns one continuous cloud into a scatter of
       discrete bodies without needing a second set of buffers. */
    if (uCluster > 0.001) {
      vec3 cellIdx = floor(p / uCell);
      vec3 centre = (cellIdx + 0.5) * uCell + (hash3(cellIdx) - 0.5) * uCell * 0.62;
      p = mix(p, centre + (p - centre) * 0.26, uCluster);
    }

    /* --- 3. Collapse toward a filled sphere ------------------------ *
       Radius from a squared random so the body is dense in the middle
       and thins at the surface, rather than being a hollow shell. */
    if (uPull > 0.001) {
      vec3 dir = normalize(p + vec3(0.0001));
      float r = 0.45 + pow(aRand.x, 1.9) * 3.05;
      p = mix(p, dir * r, uPull);
    }

    /* --- 4. Curl warp ---------------------------------------------- *
       Two octaves of direct simplex displacement, not true curl noise.
       Curl needs six noise triplets per vertex; at this particle count
       that is the whole frame budget, and for a cloud this diffuse the
       divergence-free property is not visible. The streamline layer,
       built once on the CPU, does use real curl — that is where it
       actually reads. */
    vec3 q = p * uFreq + vec3(0.0, 0.0, uTime * uDrift);
    vec3 warp = vec3(snoise(q), snoise(q + 19.7), snoise(q + 43.3));
    vec3 q2 = q * 2.35 + 7.3;
    warp += vec3(snoise(q2), snoise(q2 + 19.7), snoise(q2 + 43.3)) * 0.42;
    p += warp * uAmp;

    /* --- 5. Differential swirl ------------------------------------- *
       Divided by radius, so the middle turns faster than the rim. A
       rigid rotation reads as a turntable. */
    if (abs(uSwirl) > 0.001) {
      float rr = length(p.xy);
      p.xy = rot(p.xy, uSwirl * uTime / (0.55 + rr * 0.4));
    }

    /* --- 6. Travelling shear --------------------------------------- */
    if (abs(uShear) > 0.001) {
      p.x += sin(p.y * 0.52 + uTime * 0.34) * uShear * 1.7;
      p.z += cos(p.y * 0.41 - uTime * 0.22) * uShear * 0.6;
    }

    /* --- 7. Cursor -------------------------------------------------- */
    vec2 toMouse = p.xy - uMouse.xy;
    float md = length(toMouse);
    float influence = smoothstep(3.0, 0.0, md);
    p.xy += normalize(toMouse + vec2(0.0001)) * influence * uMouseForce * 1.3;

    /* --- 8. Intro --------------------------------------------------- */
    p *= 1.0 + (1.0 - uIntro) * 1.8;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    /* Warp magnitude pushes a particle up its own ramp, so the parts of
       the field that are moving hardest are also the brightest. That
       coupling is what makes the colour read as *caused by* the motion
       rather than painted on top of it. */
    float energy = clamp(length(warp) * 0.42, 0.0, 1.0);
    float tone = clamp(aTone * 0.72 + energy * 0.5, 0.0, 1.0);
    vColor = ramp(uDeep, uMid, uHot, tone) * uGain;

    float sizePx = uSize * uGrain * aScale * uPixelRatio * (44.0 / max(0.001, -mv.z));
    gl_PointSize = max(sizePx, uPixelRatio * 0.9);
    // Anything inflated to reach the floor gives the difference back in
    // alpha, or the far field flattens into a uniform sheet.
    float shrink = clamp(sizePx / (uPixelRatio * 0.9), 0.35, 1.0);

    float flicker = 0.68 + 0.32 * sin(uTime * (0.9 + aRand.y * 2.2) + aRand.z * 12.566);
    float depthFade = smoothstep(-30.0, -2.0, mv.z);

    vAlpha = flicker * depthFade * shrink * uIntro * (1.0 + uVelocity * 0.35);
  }
`;const fieldFragmentShader=`
  varying vec3  vColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    if (d > 0.5) discard;

    float f = 1.0 - d * 2.0;
    // Wide halo plus a tight core. One term alone gives either a blurry
    // smudge or a hard pixel; the pair reads as a glowing grain.
    float halo = pow(f, 1.8) * 0.45;
    float core = pow(f, 6.5);

    gl_FragColor = vec4(vColor * (halo + core * 1.85), (halo + core) * vAlpha);
  }
`;const streamVertexShader=`
  uniform float uTime;
  uniform float uOpacity;
  uniform float uIntro;
  uniform vec3  uDeep;
  uniform vec3  uMid;
  uniform vec3  uHot;
  uniform vec2  uParallax;

  attribute float aAlong;
  attribute float aSeed;
  attribute float aTone;

  varying vec3  vColor;
  varying float vAlpha;

  ${RAMP}

  void main() {
    vec3 p = position;
    p.xy += uParallax * (0.4 + aSeed * 0.6);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    /* A gaussian crest travelling the line. Each line runs at its own
       rate and phase, so the crests never form a marching band. */
    float speed = 0.055 + aSeed * 0.05;
    float head = fract(uTime * speed + aSeed);
    float d = abs(aAlong - head);
    d = min(d, 1.0 - d);                     // wrap at the ends
    float crest = exp(-pow(d * 11.0, 2.0));

    // Fade both ends so lines terminate in the dark rather than being
    // cut off, which is what would give the field a visible boundary.
    float ends = smoothstep(0.0, 0.12, aAlong) * smoothstep(1.0, 0.88, aAlong);

    float tone = clamp(aTone * 0.4 + crest * 0.85, 0.0, 1.0);
    vColor = ramp(uDeep, uMid, uHot, tone);

    float depthFade = smoothstep(-26.0, -2.0, mv.z);
    vAlpha = (0.05 + crest * 0.95) * ends * depthFade * uOpacity * uIntro;
  }
`;const streamFragmentShader=`
  varying vec3  vColor;
  varying float vAlpha;

  void main() {
    gl_FragColor = vec4(vColor * (0.35 + vAlpha * 1.5), vAlpha);
  }
`;function buildStreamlines(lines,steps,opts={}){const freq=opts.freq??.115;const h=opts.step??.115;const box=opts.box??[15,6.5,2.2];const zScale=opts.zScale??.16;const rnd=mulberry32(0x243f6a88);const noise=createNoise3D(mulberry32(0xb7e15162));const curl=(x,y,z,out)=>{const n1y1=noise(x,y+.09,z);const n1y0=noise(x,y-.09,z);const n1z1=noise(x,y,z+.09);const n1z0=noise(x,y,z-.09);const n2x1=noise(x+.09+41.7,y+41.7,z+41.7);const n2x0=noise(x-.09+41.7,y+41.7,z+41.7);const n2z1=noise(x+41.7,y+41.7,z+.09+41.7);const n2z0=noise(x+41.7,y+41.7,z-.09+41.7);const n3x1=noise(x+.09+93.1,y+93.1,z+93.1);const n3x0=noise(x-.09+93.1,y+93.1,z+93.1);const n3y1=noise(x+93.1,y+.09+93.1,z+93.1);const n3y0=noise(x+93.1,y-.09+93.1,z+93.1);const inv=1/(2*.09);let cx=(n3y1-n3y0)*inv-(n2z1-n2z0)*inv;let cy=(n1z1-n1z0)*inv-(n3x1-n3x0)*inv;let cz=(n2x1-n2x0)*inv-(n1y1-n1y0)*inv;const l=Math.hypot(cx,cy,cz)||1;cx/=l;cy/=l;cz/=l;out[0]=cx;out[1]=cy;out[2]=cz;};const segsPerLine=steps-1;const vertexCount=lines*segsPerLine*2;const positions=new Float32Array(vertexCount*3);const along=new Float32Array(vertexCount);const seed=new Float32Array(vertexCount);const tone=new Float32Array(vertexCount);const v=[0,0,0];const path=new Float32Array(steps*3);let w=0;for(let li=0;li<lines;li++){let x=(rnd()-.5)*box[0];let y=(rnd()-.5)*box[1];let z=(rnd()-.5)*box[2];for(let s=0;s<steps;s++){path[s*3]=x;path[s*3+1]=y;path[s*3+2]=z;curl(x*freq,y*freq,z*freq,v);const mx=x+v[0]*h*.5;const my=y+v[1]*h*.5;const mz=z+v[2]*h*.5*zScale;curl(mx*freq,my*freq,mz*freq,v);x+=v[0]*h;y+=v[1]*h;z+=v[2]*h*zScale;}const lineSeed=rnd();const lineTone=rnd();for(let s=0;s<segsPerLine;s++){const a=s*3;const b=(s+1)*3;const t0=s/segsPerLine;const t1=(s+1)/segsPerLine;positions[w*3]=path[a];positions[w*3+1]=path[a+1];positions[w*3+2]=path[a+2];along[w]=t0;seed[w]=lineSeed;tone[w]=lineTone;w++;positions[w*3]=path[b];positions[w*3+1]=path[b+1];positions[w*3+2]=path[b+2];along[w]=t1;seed[w]=lineSeed;tone[w]=lineTone;w++;}}return{positions,along,seed,tone,vertexCount};}const field={presets:PRESETS,sceneSpan:1.85,blendStart:.34,blendEnd:1,fadeStart:.46,fadeEnd:.72,closeSpan:.85,keys:BLENDED_KEYS,seed:0x428a2f98,box:[11,8,5],cameraFov:45,cameraNear:.1,cameraFar:200,bloomLevels:8,pointSize:{reference:900,minimum:.66,maximum:1.5}};function pickCounts(width,reduced=false){if(reduced)return{points:3e4,lines:320,steps:60};if(width<700)return{points:34e3,lines:380,steps:64};if(width<1100)return{points:66e3,lines:620,steps:72};if(width<1700)return{points:112e3,lines:900,steps:80};return{points:138e3,lines:1150,steps:88};}function pickPixelRatio(deviceRatio){return Math.max(1,Math.min(deviceRatio,deviceRatio>2?1.35:1.75));}function buildPoints(count){const random=mulberry32(field.seed);const seeds=new Float32Array(count*3),rand=new Float32Array(count*3);const tone=new Float32Array(count),scale=new Float32Array(count);for(let i=0;i<count;i++){for(let axis=0;axis<3;axis++)seeds[i*3+axis]=(random()-.5)*2*field.box[axis];for(let axis=0;axis<3;axis++)rand[i*3+axis]=random();tone[i]=random();scale[i]=.42+Math.pow(random(),3.1)*2.2+Math.abs(gaussian(random))*.1;}return{count,seeds,rand,tone,scale};}const quality=pickCounts;const mod={fieldVertexShader:fieldVertexShader,fieldFragmentShader:fieldFragmentShader,streamVertexShader:streamVertexShader,streamFragmentShader:streamFragmentShader,buildStreamlines:buildStreamlines,field:field,pickCounts:pickCounts,pickPixelRatio:pickPixelRatio,buildPoints:buildPoints,quality:quality};import{mountFieldSequence}from"https://causality.in/assets/field-sequence.js";function mount({element}){const style=getComputedStyle(element);const roles=["bloom-intensity","bloom-threshold","bloom-smoothing","bloom-radius","exposure","vignette-offset","vignette-darkness","noise-opacity"];const lighting=Object.fromEntries(roles.map(role=>[role.replace(/-([a-z])/g,(_,c)=>c.toUpperCase()),parseFloat(style.getPropertyValue("--material-field-"+role))]));return mountFieldSequence({element,field:mod.field,pixelRatio:mod.pickPixelRatio,lighting,createRenderer:options=>{const swatch=document.createElement("canvas");swatch.width=swatch.height=1;const context=swatch.getContext("2d",{willReadFrequently:true});if(!context)throw new Error("Field material sampling unavailable");context.fillStyle=style.getPropertyValue("--material-field-ground").trim();context.fillRect(0,0,1,1);const ground=Array.from(context.getImageData(0,0,1,1).data).slice(0,3).map(value=>value/255);return createRelationRenderer(mod,{...options,ground});}});}export{mount as mount};