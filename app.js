(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const canvas = $("poster");
  const ctx = canvas.getContext("2d");

  const folders = [
    ["birthday","🎂","वाढदिवस पोस्टर","Birthday Posters","वाढदिवसाच्या हार्दिक शुभेच्छा!","तुझं आयुष्य आनंद, यश आणि प्रेमाने भरलेलं असो.","rose","🎂"],
    ["diwali","🪔","दिवाळी पोस्टर","Diwali Posters","दिवाळीच्या हार्दिक शुभेच्छा!","तुमच्या आयुष्यात सुख, समृद्धी आणि प्रकाश येवो.","gold","🪔"],
    ["holi","🎨","होळी पोस्टर","Holi Posters","रंगपंचमीच्या शुभेच्छा!","तुमचं आयुष्य आनंदाच्या रंगांनी भरून जावो.","sunset","🌈"],
    ["independence","🇮🇳","स्वातंत्र्यदिन","Independence Day","स्वातंत्र्यदिनाच्या शुभेच्छा!","एकता, शांती आणि प्रगतीचा संदेश.","ocean","🇮🇳"],
    ["republic","🇮🇳","प्रजासत्ताक दिन","Republic Day","प्रजासत्ताक दिनाच्या शुभेच्छा!","आपल्या संविधानाचा अभिमान बाळगूया.","ocean","⭐"],
    ["ganesh","🙏","गणेशोत्सव","Ganesh Festival","गणपती बाप्पा मोरया!","सर्वांच्या मनोकामना पूर्ण होवोत.","festival","🌺"],
    ["navratri","🌺","नवरात्री","Navratri Posters","नवरात्रीच्या शुभेच्छा!","आई दुर्गेचा आशीर्वाद सदैव राहो.","rose","🌺"],
    ["shivjayanti","🚩","शिवजयंती","Shiv Jayanti","शिवजयंतीच्या हार्दिक शुभेच्छा!","स्वराज्य, शौर्य आणि स्वाभिमान.","festival","🚩"],
    ["sambhaji","⚔️","संभाजी महाराज जयंती","Sambhaji Maharaj Jayanti","शंभूराजे जयंतीच्या शुभेच्छा!","शौर्य आणि स्वाभिमानाचा प्रेरणादायी वारसा.","festival","⚔️"],
    ["gudipadwa","🌿","गुढीपाडवा","Gudi Padwa","गुढीपाडव्याच्या शुभेच्छा!","नव्या वर्षात सुख, शांती आणि समृद्धी लाभो.","nature","🌿"],
    ["nagpanchami","🐍","नागपंचमी","Nag Panchami","नागपंचमीच्या शुभेच्छा!","सणाचा आनंद सर्वांच्या घरी नांदो.","nature","🌿"],
    ["sankranti","🪁","मकरसंक्रांत","Makar Sankranti","मकरसंक्रांतीच्या शुभेच्छा!","तिळगूळ घ्या, गोड गोड बोला.","sunset","🪁"],
    ["rakhi","🧵","रक्षाबंधन","Raksha Bandhan","रक्षाबंधनाच्या शुभेच्छा!","नात्यात प्रेम आणि विश्वास कायम राहो.","rose","💛"],
    ["dussehra","🏹","दसरा","Dussehra Posters","दसऱ्याच्या हार्दिक शुभेच्छा!","तुमच्या आयुष्यात यश आणि आनंद लाभो.","gold","🌼"],
    ["ramnavami","🪷","रामनवमी","Ram Navami","रामनवमीच्या शुभेच्छा!","प्रभू श्रीरामांचा आशीर्वाद राहो.","gold","🪷"],
    ["dhanteras","🪙","धनत्रयोदशी","Dhanteras","धनत्रयोदशीच्या शुभेच्छा!","सुख, आरोग्य आणि समृद्धी लाभो.","gold","🪙"],
    ["christmas","🎄","ख्रिसमस","Christmas Posters","मेरी ख्रिसमस!","तुमच्या आयुष्यात प्रेम आणि आनंद नांदो.","nature","🎄"],
    ["eid","🌙","ईद शुभेच्छा","Eid Posters","ईद मुबारक!","तुमच्या कुटुंबाला सुख, शांती आणि आनंद लाभो.","ocean","🌙"],
    ["farmer","🌾","शेतकरी पोस्टर","Farmer Posters","शेतकरी हा देशाचा आधार!","श्रमाला मान, शेतकऱ्याला सन्मान.","nature","🌾"],
    ["wedding","💐","लग्न / वर्षगाठ","Wedding & Anniversary","शुभविवाह!","नव्या प्रवासासाठी प्रेम आणि आनंदाच्या शुभेच्छा.","rose","💐"],
    ["business","🏪","व्यवसाय जाहिरात","Business Promotion","आमच्या सेवांचा लाभ घ्या","उत्तम गुणवत्ता • योग्य किंमत • विश्वास","midnight","🏪"],
    ["offers","🛍️","ऑफर्स आणि सेल","Offers & Discounts","MEGA OFFER","आकर्षक ऑफर्स — मर्यादित कालावधीसाठी!","sunset","🔥"],
    ["social","🗳️","सामाजिक पोस्टर","Social Posters","आपला कार्यक्रम","आपली उपस्थिती प्रार्थनीय आहे.","ocean","🎊"],
    ["motivation","💪","प्रेरणादायी पोस्टर","Motivational Posters","स्वप्न पाहा, मेहनत करा!","प्रत्येक दिवस नवी संधी घेऊन येतो.","royal","⭐"],
    ["status","📱","स्टेटस पोस्टर","Status Posters","शुभ सकाळ!","आजचा दिवस आनंदाचा जावो.","ocean","☀️"],
    ["namephoto","🖼️","नाव आणि फोटो","Name & Photo Posters","तुमचं स्वतःचं पोस्टर","तुमची ओळख, तुमची स्टाइल.","royal","✨"],
    ["opening","🎊","दुकान उद्घाटन","Shop Opening","भव्य शुभारंभ","आपल्या उपस्थितीने कार्यक्रमाची शोभा वाढवा.","gold","🎊"],
    ["congrats","🏆","अभिनंदन","Congratulations","मनःपूर्वक अभिनंदन!","तुमच्या यशाचा आम्हाला अभिमान आहे.","nature","🏆"],
    ["tribute","🕯️","श्रद्धांजली","Tribute & Memorial","भावपूर्ण श्रद्धांजली","तुमच्या स्मृती सदैव आमच्या हृदयात राहतील.","midnight","🕯️"],
    ["wallpaper","🌌","वॉलपेपर स्टुडिओ","Wallpaper Studio","आजचा सुंदर विचार","नवीन दिवस, नवीन सुरुवात.","midnight","🌌"]
  ];

  const palettes = {
    festival:["#7c2d12","#ea580c","#fed7aa","#fff7ed"],
    royal:["#2e1065","#7c3aed","#ddd6fe","#faf5ff"],
    sunset:["#881337","#f43f5e","#fdba74","#fff1f2"],
    nature:["#14532d","#16a34a","#bbf7d0","#f0fdf4"],
    rose:["#831843","#ec4899","#fbcfe8","#fdf2f8"],
    ocean:["#0c4a6e","#0284c7","#bae6fd","#f0f9ff"],
    midnight:["#111827","#374151","#d1d5db","#f9fafb"],
    gold:["#713f12","#ca8a04","#fde68a","#fffbeb"]
  };

  let category = "birthday";
  let designNumber = 1;
  let language = "mr";
  let uploadedPhoto = null;
  let uploadedBackground = null;
  let stickers = [];
  let favorites = [];
  let variation = 0;
  let toastTimer;

  try { favorites = JSON.parse(localStorage.getItem("vmpm-favorites") || "[]"); }
  catch { favorites = []; }

  const currentFolder = () => folders.find(f => f[0] === category) || folders[0];
  const randomItem = array => array[Math.floor(Math.random() * array.length)];
  const currentPalette = () => palettes[$("palette").value] || palettes.festival;

  function toast(message) {
    const el = $("toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2300);
  }

  function renderCategories() {
    const query = $("search").value.trim().toLowerCase();
    const list = $("categories");
    list.innerHTML = "";
    folders.filter(f => [f[2],f[3],f[0]].join(" ").toLowerCase().includes(query))
      .forEach(f => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "category" + (f[0] === category ? " active" : "");
        button.textContent = ${f[1]} ${language === "en" ? f[3] : f[2]};
        button.addEventListener("click", () => chooseCategory(f[0]));
        list.appendChild(button);
      });
  }

  function chooseCategory(id) {
    category = id;
    const f = currentFolder();
    $("categoryName").textContent = ${f[1]} ${language === "en" ? f[3] : f[2]};
    $("title").value = language === "en" ? f[3] : f[4];
    $("name").value = language === "en" ? "Your Name" : "तुमचं नाव";
    $("message").value = language === "en"
      ? "Wishing you happiness, success and good fortune."
      : f[5];
    $("footer").value = "";
    $("palette").value = f[6];
    $("pattern").value = "glow";
    $("frame").value = "double";
    stickers = [];
    variation++;
    designNumber++;
    drawPoster();
    renderCategories();
  }

  function drawStar(x, y, radius, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + i * Math.PI / 5;
      const r = i % 2 ? radius * .45 : radius;
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function coverImage(image, x, y, width, height) {
    const scale = Math.max(width / image.width, height / image.height);
    const sw = width / scale, sh = height / scale;
    ctx.drawImage(image, (image.width - sw) / 2, (image.height - sh) / 2,
      sw, sh, x, y, width, height);
  }

  function drawBackground(w, h, colors) {
    const [c1,c2,c3,c4] = colors;
    const gradient = ctx.createLinearGradient(0,0,w,h);
    gradient.addColorStop(0,c1);
    gradient.addColorStop(.52,c2);
    gradient.addColorStop(1,c4);
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,w,h);

    if (uploadedBackground) {
      ctx.save();
      ctx.globalAlpha = .25;
      coverImage(uploadedBackground,0,0,w,h);
      ctx.restore();
    }

    const pattern = $("pattern").value;
    if (pattern === "glow") {
      for (let i=0; i<10; i++) {
        const x=(i*139+60+variation*23)%w;
        const y=(i*181+80+variation*31)%h;
        const radius=50+(i%3)*28;
        const glow=ctx.createRadialGradient(x,y,0,x,y,radius);
        glow.addColorStop(0,c3+"88");
        glow.addColorStop(1,c3+"00");
        ctx.fillStyle=glow;
        ctx.fillRect(x-radius,y-radius,radius*2,radius*2);
      }
    } else if (pattern === "confetti") {
      for(let i=0;i<140;i++){
        ctx.save();
        ctx.translate((i*91+variation*17)%w,(i*157+20)%h);
        ctx.rotate((i%7)*.35);
        ctx.fillStyle=[c3,"#ffffff88","#fbbf24aa"][i%3];
        ctx.globalAlpha=.65;
        ctx.fillRect(0,0,5+(i%5),12+(i%7));
        ctx.restore();
      }
    } else if (pattern === "stars") {
      for(let i=0;i<75;i++)
        drawStar((i*131+23)%w,(i*173+variation*19)%h,3+(i%4)*2,c3+"cc");
    } else if (pattern === "waves") {
      for(let k=0;k<8;k++){
        ctx.beginPath();
        for(let x=0;x<=w;x+=10){
          const y=h*(.12+k*.11)+Math.sin(x*.012+k+variation)*20;
          if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
        }
        ctx.strokeStyle=c3+"66";ctx.lineWidth=3;ctx.stroke();
      }
    } else if (pattern === "mandala") {
      for(let r=50;r<Math.max(w,h);r+=65){
        ctx.beginPath();ctx.arc(w/2,h*.42,r,0,Math.PI*2);
        ctx.strokeStyle=c3+"55";ctx.lineWidth=2;ctx.stroke();
      }
    }
  }

  function drawFrame(w,h,colors) {
    const frame=$("frame").value;
    if(frame==="none")return;
    ctx.save();
    ctx.strokeStyle=colors[2];
    ctx.lineWidth=frame==="bold"?13:5;
    if(frame==="dashed")ctx.setLineDash([16,10]);
    const pad=frame==="bold"?25:32;
    ctx.beginPath();
    ctx.roundRect(pad,pad,w-pad*2,h-pad*2,frame==="floral"?32:15);
    ctx.stroke();
    ctx.setLineDash([]);
    if(frame==="double"){
      ctx.lineWidth=2;
      ctx.beginPath();
      ctx.roundRect(pad+13,pad+13,w-(pad+13)*2,h-(pad+13)*2,10);
      ctx.stroke();
    }
    if(frame==="floral"){
      ctx.font="40px serif";ctx.textAlign="center";
      [[pad+12,pad+35],[w-pad-12,pad+35],[pad+12,h-pad-10],[w-pad-12,h-pad-10]]
        .forEach(([x,y])=>ctx.fillText("✿",x,y));
    }
    ctx.restore();
  }

  function wrapText(text,maxWidth,size,font) {
    ctx.font=700 ${size}px ${font};
    const lines=[];
    let line="";
    (text || "").split(/\s+/).forEach(word=>{
      const next=line?line+" "+word:word;
      if(ctx.measureText(next).width>maxWidth && line){
        lines.push(line);line=word;
      } else line=next;
    });
    if(line)lines.push(line);
    return lines;
  }

  function drawPhoto(w,h) {
    if(!uploadedPhoto)return;
    const size=Number($("photoSize").value);
    const centerY=h*Number($("photoY").value)/100;
    const x=w/2-size/2, y=centerY-size/2;
    const shape=$("photoShape").value;

    ctx.save();
    ctx.shadowColor="#0006";ctx.shadowBlur=20;ctx.shadowOffsetY=7;
    ctx.beginPath();
    if(shape==="circle")ctx.arc(w/2,centerY,size/2,0,Math.PI*2);
    else if(shape==="rounded")ctx.roundRect(x,y,size,size,25);
    else ctx.rect(x,y,size,size);
    ctx.clip();
    coverImage(uploadedPhoto,x,y,size,size);
    ctx.restore();

    ctx.save();ctx.strokeStyle=currentPalette()[2];ctx.lineWidth=8;
    ctx.beginPath();
    if(shape==="circle")ctx.arc(w/2,centerY,size/2+2,0,Math.PI*2);
    else if(shape==="rounded")ctx.roundRect(x-3,y-3,size+6,size+6,28);
    else ctx.rect(x-3,y-3,size+6,size+6);
    ctx.stroke();ctx.restore();
  }

  function drawPoster() {
    const formats={
      portrait:[800,1000],story:[720,1280],
      square:[1000,1000],wallpaper:[720,1440]
    };
    const [w,h]=formats[$("format").value]||formats.portrait;
    if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}

    const colors=currentPalette();
    drawBackground(w,h,colors);
    drawFrame(w,h,colors);

    const f=currentFolder();
    const font=$("font").value;
    const scale=Number($("textSize").value);
    const center=w/2;
    const title=$("title").value.trim()||"तुमचं पोस्टर";
    const name=$("name").value.trim();
    const message=$("message").value.trim();
    const footer=$("footer").value.trim();

    ctx.textAlign="center";
    ctx.textBaseline="middle";
    ctx.fillStyle=colors[2];
    ctx.font=700 ${Math.round(w*.026)}px ${font};
    ctx.fillText(language==="en"?"SPECIAL COLLECTION":"विशेष डिझाइन",center,h*.075);

    ctx.font=${Math.round(w*.09)}px serif;
    ctx.fillText(f[7],w*.18,h*.14);
    ctx.fillText(f[1],w*.82,h*.14);

    const titleSize=Math.round(w*.058*scale);
    const titleLines=wrapText(title,w*.76,titleSize,font).slice(0,3);
    ctx.font=800 ${titleSize}px ${font};
    ctx.fillStyle="#0005";
    titleLines.forEach((line,i)=>ctx.fillText(line,center+2,h*.245+i*titleSize*1.22+3));
    ctx.fillStyle="#fff";
    titleLines.forEach((line,i)=>ctx.fillText(line,center,h*.245+i*titleSize*1.22));

    drawPhoto(w,h);
    const photoSize=uploadedPhoto?Number($("photoSize").value):0;
    const photoTop=uploadedPhoto?h*Number($("photoY").value)/100-photoSize/2:h*.35;
    const nameY=uploadedPhoto?Math.min(h*.76,photoTop+photoSize+h*.065):h*.43;

    ctx.fillStyle=colors[2];
    const nameSize=Math.round(w*.063*scale);
    ctx.font=800 ${nameSize}px ${font};
    wrapText(name,w*.78,nameSize,font).slice(0,2)
      .forEach((line,i)=>ctx.fillText(line,center,nameY+i*nameSize*1.2));

    const msgY=Math.max(h*.68,nameY+nameSize*1.2+h*.045);
    const msgSize=Math.round(w*.031*scale);
    ctx.font=500 ${msgSize}px ${font};
    ctx.fillStyle="#fff";
    wrapText(message,w*.74,msgSize,font).slice(0,4)
      .forEach((line,i)=>ctx.fillText(line,center,msgY+i*msgSize*1.55));

    if(footer){
      ctx.fillStyle=colors[2];
      ctx.font=700 ${Math.round(w*.026)}px ${font};
      ctx.fillText(footer,center,h*.91);
    }

    ctx.strokeStyle=colors[2];ctx.lineWidth=2;
    ctx.beginPath();ctx.moveTo(w*.29,h*.94);ctx.lineTo(w*.71,h*.94);ctx.stroke();

    stickers.forEach((s,i)=>{
      ctx.font=${s.size}px serif;
      ctx.fillText(s.emoji,w*(.14+(i%4).24),h(.35+Math.floor(i/4)*.12));
    });

    $("designNo").textContent=(language==="en"?"Design #":"डिझाइन #")+designNumber;
  }

  function randomDesign() {
    variation++;
    designNumber++;
    $("palette").value=randomItem(Object.keys(palettes));
    $("pattern").value=randomItem(["glow","confetti","stars","waves","mandala","minimal"]);
    $("frame").value=randomItem(["double","floral","bold","dashed","none"]);
    $("textSize").value=(.9+Math.random()*.25).toFixed(2);
    if(Math.random()>.5) {
      stickers=[];
      const choices=["✨","🌸","⭐","💛","🌿","🎉","🪔","🎈","🌺","🌈"];
      const count=Math.floor(Math.random()*5);
      for(let i=0;i<count;i++)
        stickers.push({emoji:randomItem(choices),size:25+Math.floor(Math.random()*45)});
    }
    drawPoster();
    toast(language==="en"?"Fresh design combination created!":"नवं डिझाइन कॉम्बिनेशन तयार!");
  }

  function saveFavorites() {
    try {
      localStorage.setItem("vmpm-favorites",JSON.stringify(favorites.slice(0,30)));
    } catch {
      toast("ब्राउझर स्टोरेज उपलब्ध नाही.");
    }
  }

  function renderFavorites() {
    const grid=$("savedGrid");
    grid.innerHTML="";
    if(!favorites.length) {
      grid.innerHTML='<p class="muted">अजून डिझाइन सेव्ह केलेलं नाही.</p>';
      return;
    }
    favorites.forEach((item,index)=>{
      const card=document.createElement("div");
      card.className="saved-card";
      const img=document.createElement("img");
      img.src=item.data;img.alt=item.title;
      const p=document.createElement("p");
      p.textContent=item.title;
      const load=document.createElement("button");
      load.className="btn";load.textContent="प्रिव्ह्यू";
      load.addEventListener("click",()=>{
        const image=new Image();
        image.onload=()=>{
          canvas.width=image.width;canvas.height=image.height;
          ctx.drawImage(image,0,0);
          toast("सेव्ह केलेलं पोस्टर प्रिव्ह्यूमध्ये उघडलं.");
        };
        image.src=item.data;
      });
      const remove=document.createElement("button");
      remove.className="btn";remove.textContent="हटवा";
      remove.addEventListener("click",()=>{
        favorites.splice(index,1);saveFavorites();renderFavorites();
      });
      card.append(img,p,load,remove);
      grid.appendChild(card);
    });
  }

  function downloadPoster() {
    const link=document.createElement("a");
    link.download=viral-marathi-${category}-${Date.now()}.png;
    link.href=canvas.toDataURL("image/png");
    link.click();
    toast("PNG पोस्टर डाउनलोड झालं!");
  }

  function sharePoster() {
    canvas.toBlob(async blob=>{
      if(!blob)return;
      const file=new File([blob],"marathi-poster.png",{type:"image/png"});
      try {
        if(navigator.canShare && navigator.canShare({files:[file]})) {
          await navigator.share({files:[file],title:"Viral Marathi Poster"});
        } else {
          downloadPoster();
          toast("शेअरिंग उपलब्ध नाही; पोस्टर डाउनलोड केलं.");
        }
      } catch(error) {
        if(error.name!=="AbortError")toast("शेअर करताना अडचण आली.");
      }
    });
  }

  function readImage(file,callback) {
    if(!file || !file.type.startsWith("image/")) {
      toast("कृपया इमेज फाइल निवडा.");return;
    }
    const reader=new FileReader();
    reader.onload=()=>{
      const image=new Image();
      image.onload=()=>callback(image);
      image.onerror=()=>toast("ही इमेज उघडता आली नाही.");
      image.src=reader.result;
    };
    reader.readAsDataURL(file);
  }

  $("search").addEventListener("input",renderCategories);
  $("randomBtn").addEventListener("click",randomDesign);
  $("moreBtn").addEventListener("click",randomDesign);

  ["title","name","message","footer","font","textSize","photoShape","photoSize",
   "photoY","palette","pattern","frame","format"].forEach(id=>{
    $(id).addEventListener("input",drawPoster);
  });

  $("photoInput").addEventListener("change",e=>{
    readImage(e.target.files[0],image=>{
      uploadedPhoto=image;drawPoster();toast("फोटो जोडला!");
    });
  });

  $("backgroundInput").addEventListener("change",e=>{
    readImage(e.target.files[0],image=>{
      uploadedBackground=image;drawPoster();toast("पार्श्वभूमी जोडली!");
    });
  });

  $("removePhoto").addEventListener("click",()=>{
    uploadedPhoto=null;$("photoInput").value="";drawPoster();
    toast("फोटो काढला.");
  });

  document.querySelectorAll("[data-sticker]").forEach(button=>{
    button.addEventListener("click",()=>{
      stickers.push({emoji:button.dataset.sticker,size:Number($("stickerSize").value)});
      if(stickers.length>16)stickers.shift();
      drawPoster();toast("स्टिकर जोडला!");
    });
  });

  $("stickerSize").addEventListener("input",()=>{
    if(stickers.length)stickers[stickers.length-1].size=Number($("stickerSize").value);
    drawPoster();
  });

  $("clearStickers").addEventListener("click",()=>{
    stickers=[];drawPoster();toast("सर्व स्टिकर्स काढले.");
  });

  $("downloadBtn").addEventListener("click",downloadPoster);
  $("shareBtn").addEventListener("click",sharePoster);

  $("saveBtn").addEventListener("click",()=>{
    if(favorites.length>=30)favorites.pop();
    favorites.unshift({
      title:$("name").value.trim()||currentFolder()[2],
      category,data:canvas.toDataURL("image/png"),date:Date.now()
    });
    saveFavorites();renderFavorites();toast("डिझाइन सेव्ह झालं!");
  });

  $("clearSaved").addEventListener("click",()=>{
    if(confirm("सर्व सेव्ह केलेली डिझाइन्स हटवायची?")) {
      favorites=[];saveFavorites();renderFavorites();
    }
  });

  $("resetBtn").addEventListener("click",()=>{
    uploadedPhoto=null;uploadedBackground=null;stickers=[];
    $("photoInput").value="";$("backgroundInput").value="";
    $("palette").value=currentFolder()[6];
    $("pattern").value="glow";$("frame").value="double";
    $("textSize").value="1";$("photoSize").value="260";$("photoY").value="43";
    drawPoster();toast("सेटिंग्स रीसेट झाल्या.");
  });

  document.querySelectorAll(".tab").forEach(tab=>{
    tab.addEventListener("click",()=>{
      document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",