
const path = location.pathname;
const tool = document.body.dataset.tool;
const topicInput = document.querySelector("#topic");
const result = document.querySelector("#result");
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");

function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}

function generate(topic){
  topic = (topic || "").trim() || "Minecraft";
  if(tool==="video-ideas") return `🔥 VIDEO IDEA\n\n${topic} — But Every 5 Minutes The Rules Change\n\nHook: Start with a simple goal, then reveal that the rules will randomly change throughout the video.\n\nMain beats:\n1. Establish the goal in the first 15 seconds.\n2. Introduce the first rule change.\n3. Escalate the challenge with stronger twists.\n4. Finish with one final high-stakes rule.\n\nThumbnail moment: Show your Minecraft character reacting to a huge unexpected event.`;
  if(tool==="titles") return `${pick([`I Tried ${topic}… It Got WAY Harder`,`Minecraft ${topic} But Everything Went Wrong`,`I Survived ${topic} With ONE Rule`,`The Most CHAOTIC ${topic} Challenge`,`Minecraft ${topic} — Nobody Expected This`])}`;
  if(tool==="thumbnails") return `🖼️ THUMBNAIL CONCEPT\n\n• Main subject: Your Minecraft skin, large in the foreground\n• Action: ${topic}\n• Background: dramatic Minecraft environment with depth blur\n• Secondary element: one surprising threat/object behind you\n• Expression/pose: strong reaction, facing the main action\n• Text: 2–4 words maximum\n• Composition: character on one side, action on the other\n\nKeep the thumbnail readable at phone size.`;
  if(tool==="smp-story") return `📖 SMP STORY SEED\n\nScene: The players discover ${topic}.\n\nHook: A strange message appears, but nobody admits placing it there.\n\nAct 1 — Discovery\nA normal session is interrupted by one impossible clue.\n\nAct 2 — Escalation\nFollowing the clue reveals a hidden location and a choice that divides the group.\n\nAct 3 — Reveal\nThe final clue suggests the event was planned long before the players arrived.\n\nCliffhanger: End immediately after a mysterious entity/message appears.`;
  if(tool==="commands") return `⌨️ COMMAND STARTER\n\nFor: ${topic}\n\nA useful starting point is:\n/function <your_function>\n\nIf you are doing this with vanilla commands, describe the exact Minecraft version and the exact result you want. Then the command can be tailored safely to that version.\n\nTip: Always test commands in a copy/test world first.`;
  if(tool==="challenges") return `🎯 CHALLENGE\n\n${topic} — RANDOM RULES CHALLENGE\n\nGoal: Complete a normal Minecraft objective while adapting to changing rules.\n\nRules:\n• Every 5 minutes, add one new restriction.\n• You cannot remove a restriction once it is active.\n• Bonus point for completing the objective before the final rule.\n\nWin condition: Complete the objective with at least 3 active restrictions.\n\nTwist: Let a friend choose the final rule.`;
  return "Start creating!";
}

generateBtn?.addEventListener("click",()=>{result.classList.remove("empty");result.textContent=generate(topicInput?.value);});
copyBtn?.addEventListener("click",async()=>{if(!result.classList.contains("empty")){await navigator.clipboard.writeText(result.textContent);copyBtn.textContent="✓ Copied";setTimeout(()=>copyBtn.textContent="Copy Result",1200)}})
