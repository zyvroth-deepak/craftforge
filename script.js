const tools={
  idea:{title:"Video Idea Generator",hint:"Enter a topic, mode or style. Example: Minecraft manhunt",placeholder:"e.g. Minecraft Manhunt, hardcore, funny"},
  title:{title:"YouTube Title Generator",hint:"Describe your video and get title starters.",placeholder:"e.g. I survived 100 days in hardcore"},
  thumb:{title:"Thumbnail Idea Generator",hint:"Describe the video. Get a composition and hook.",placeholder:"e.g. Manhunt escape with lava"},
  desc:{title:"Description Generator",hint:"Enter a short summary of your video.",placeholder:"e.g. We played a crazy Minecraft manhunt..."},
  smp:{title:"SMP Story Generator",hint:"Give a theme and we'll create a story starter.",placeholder:"e.g. mysterious entity enters our SMP"},
  challenge:{title:"Challenge Generator",hint:"Pick a mode or leave it blank for a random challenge.",placeholder:"e.g. survival, multiplayer"},
  command:{title:"Minecraft Command Helper",hint:"Describe what you want the command to do. This starter gives a concept; verify commands for your version.",placeholder:"e.g. teleport all players to me"}
};
let active="idea";
function openTool(key){
  active=key; const t=tools[key];
  document.getElementById("toolTitle").textContent=t.title;
  document.getElementById("toolHint").textContent=t.hint;
  document.getElementById("toolInput").placeholder=t.placeholder;
  document.getElementById("toolInput").value="";
  document.getElementById("result").textContent="Your result will appear here.";
  document.getElementById("toolModal").classList.add("show");
  document.getElementById("toolModal").setAttribute("aria-hidden","false");
}
function closeTool(){document.getElementById("toolModal").classList.remove("show");document.getElementById("toolModal").setAttribute("aria-hidden","true")}
function generate(){
  const input=document.getElementById("toolInput").value.trim()||"Minecraft";
  const r=document.getElementById("result");
  let out="";
  if(active==="idea") out=`🔥 Idea: ${input} — But Every 5 Minutes The Rules Change\n🎬 Hook: “We thought this would be easy… until the world changed.”\n📌 Twist: Add a random rule or power every stage.`;
  if(active==="title") out=`1. Minecraft ${input} — But Everything Changed\n2. I Tried ${input} And It Got INSANE\n3. This Minecraft Challenge Was a Terrible Idea\n4. We Survived ${input}... Somehow`;
  if(active==="thumb") out=`THUMBNAIL CONCEPT\n• Main character: large, foreground, surprised/action pose\n• Threat: huge visual danger behind the character\n• Background: simple Minecraft environment with depth\n• Hook text: 2–4 words maximum\n• Composition: character left, danger right, strong focal contrast`;
  if(active==="desc") out=`Welcome to a brand-new Minecraft adventure!\n\nIn this video: ${input}\n\nIf you enjoyed it, consider subscribing for more Minecraft challenges, SMP stories and creator experiments.\n\n#Minecraft #Gaming #MinecraftHindi`;
  if(active==="smp") out=`EPISODE CONCEPT: The Signal\n\nA strange signal appears near the SMP base. At first it seems harmless, but every player who follows it finds a different clue. The final clue points toward a location nobody remembers building.\n\nTWIST: Someone on the server already knows what the signal means.`;
  if(active==="challenge") out=`⚔️ CHALLENGE: ${input}\n\nRule 1: You cannot use your usual main strategy.\nRule 2: Every 10 minutes, add a random restriction.\nRule 3: If you complete the objective, increase the difficulty for the final stage.\n\nBONUS: Let a friend choose one secret rule.`;
  if(active==="command") out=`COMMAND CONCEPT\n\nFor “${input}”, first decide your Minecraft Java/Bedrock edition and exact version. Commands differ between versions. Use the official/current command syntax for your version before running anything in a real world.\n\nThis tool is a planning helper, not a live command executor.`;
  r.textContent=out;
}
function copyResult(){
  navigator.clipboard?.writeText(document.getElementById("result").textContent);
}
document.getElementById("toolModal").addEventListener("click",e=>{if(e.target.id==="toolModal")closeTool()});
