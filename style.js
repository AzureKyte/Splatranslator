var names = {
		"ヒラメが丘団地" : "Flounder Heights",
		"アロワナモール" : "Arowana Mall",
		"Ｂバスパーク" : "Blackbelly Skate Park",
		"ネギトロ炭鉱" : "Bluefin Depot",
		"モンガラキャンプ場" : "Camp Triggerfish",
		"モズク農園" : "Kelp Dome",
		"タチウオパーキング" : "Moray Towers",
		"ホッケふ頭" : "Port Mackerel",
		"シオノメ油田" :"Saltspray Rig",
		"デカライン高架下" : "Urchin Underpass",
		"ハコフグ倉庫" : "Walleye Warehouse",
		"マサバ海峡大橋" : "Hammerhead Bridge",
		
		"ガチエリア" : "Splat Zones",
		"ガチヤグラ" : "Tower Control",
		"ガチホコ": "Rainmaker",
		
		"ツイートに失敗しました。" : "Tweet sent successfully! (In Japanese, I can't change that!!)",
		"スコア 1 以上でツイートできます。" : "You need a score of 1 or more to post a Tweet.",
		"毎週金曜日と土曜日に、ツイートできます。" : "You can only Tweet on Fridays and Saturdays!"

};

function UpdatePage() {
	var friendlist = document.getElementsByClassName("typography-friendlist");
	var friendH = document.getElementsByClassName("typography-headline-friendlist");
	var ranking = document.getElementsByClassName("typography-ranking");
	var rankingH = document.getElementsByClassName("typography-headline-ranking");
	var equipment = document.getElementsByClassName("typography-equipment");
	var equipH = document.getElementsByClassName("typography-headline-equipment");
	var stages = document.getElementsByClassName("typography-stage");
	var stageH = document.getElementsByClassName("typography-headline-stage");
	var icon = document.getElementsByClassName("icon-header-logo");
	var Twiter = document.getElementsByClassName("");
	var errMsg = document.getElementsByClassName("action-status is-failed");
	
	document.title = "Squid Ring - Splatoon's Friend Terminal Service.";
	
	
	if (errMsg.length > 0){
		for (index = 0; index < errMsg.length; ++index){
			if (names[errMsg[index].innerHTML])
				errMsg[index].innerHTML = names[errMsg[index].innerHTML];
		}
	}
		
	//Main Menu Localisation, just checks if Menu is visible by checking if Friends menu item is available.
	if (friendlist.length > 0) {
		var twitLink = document.getElementsByClassName("typography-twitter-link");
		if (twitLink.length > 0){
				twitLink[0].style.backgroundImage="url("+chrome.extension.getURL("Style/twit_link.svg")+")";
		}
		var twitUnlink = document.getElementsByClassName("typography-twitter-unlink");
		if (twitUnlink.length > 0){
				twitUnlink[0].style.backgroundImage="url("+chrome.extension.getURL("Style/twit_unlink.svg")+")";
		}
		var logout = document.getElementsByClassName("typography-logout");
		if (logout.length > 0){
				logout[0].style.backgroundImage="url("+chrome.extension.getURL("Style/logout.svg")+")";
		}
		var microsite = document.getElementsByClassName("typography-microsite");
		microsite[0].style.backgroundImage="url("+chrome.extension.getURL("Style/of_page.svg")+")";
		
		friendlist[0].style.backgroundImage="url("+chrome.extension.getURL("Style/f.png")+")";
		ranking[0].style.backgroundImage="url("+chrome.extension.getURL("Style/r.png")+")";
		equipment[0].style.backgroundImage="url("+chrome.extension.getURL("Style/g.png")+")";
		stages[0].style.backgroundImage="url("+chrome.extension.getURL("Style/s.png")+")";
		
		
		
		var loading =  document.getElementsByClassName("loading-text typography-loading");
		if (loading.length > 0)
			loading[0].style.backgroundImage="url("+chrome.extension.getURL("Style/loading.svg")+")";
	}
	
	icon[0].style.backgroundImage="url("+chrome.extension.getURL("Style/ui.png")+")";
	
	//Rankings Page
	if (rankingH.length > 0) {
		rankingH[0].style.backgroundImage="url("+chrome.extension.getURL("Style/r.png")+")";
		var rankingHeadline = document.getElementsByClassName("headline-description");
		rankingHeadline[0].innerHTML = "For every win you make, rise in the rankings! Points are reset at midnight every Sunday (GMT+9). <p>Ranking points are calculated by the number of wins x winning percentage x 10</p>";
		
		var noTWText = document.getElementsByClassName("info-message");
		if (noTWText.length > 0){
			noTWText[0].innerHTML="Friends that play Splatoon online will appear in the rankings here!";
		}
		
		var loading =  document.getElementsByClassName("loading-text typography-loading");
		if (loading.length > 0)
			loading[0].style.backgroundImage="url("+chrome.extension.getURL("Style/loading.svg")+")";
		
		var rankingTW = document.getElementsByClassName("tab-match tab-regular is-selected");
		if (rankingTW.length > 0) {
			rankingTW[0].style.backgroundImage="url("+chrome.extension.getURL("Style/btn_tab_selected.svg")+")";
			var rankingRNK2 = document.getElementsByClassName("tab-match tab-gachi");
			rankingRNK2[0].style.backgroundImage="url("+chrome.extension.getURL("Style/btn_tab_gachi_regular.svg")+")";
			
		}
		
		var rankingRNK = document.getElementsByClassName("tab-match tab-gachi is-selected");
		if (rankingRNK.length > 0) {
			var rankingTW2 = document.getElementsByClassName("tab-match tab-regular");
			rankingTW2[0].style.backgroundImage="url("+chrome.extension.getURL("Style/btn_tab_regular.svg")+")";
			rankingRNK[0].style.backgroundImage="url("+chrome.extension.getURL("Style/btn_tab_gachi_selected.svg")+")";
		}
		
	}
	
	//Friends List Page
	if (friendH.length > 0) {
		var urlparsed = document.getElementsByClassName("flist-cipher");
		var parent = document.getElementById("intention");
		
		var planTitle = document.getElementsByClassName("action-heading typography-plan");
		var planTime = document.getElementsByClassName("plan-date typography-plan-date");
		var planMode = document.getElementsByClassName("plan-feel typography-plan-feel");
		
		var matches = document.getElementById("user_intention_game_mode");
		matches.innerHTML=" <option></option> <option data-image-path="+chrome.extension.getURL('Style/regmatch2.svg')+" value='0'>I just wanna play a Regular Match! </option> <option data-image-path="+chrome.extension.getURL('Style/rankedmatch.svg')+" value='1'>I just wanna play a Ranked Match! </option> <option data-image-path="+chrome.extension.getURL('Style/privatematch.svg')+" value='2'>I just wanna play a Private Match! </option> <option data-image-path="+chrome.extension.getURL('Style/messing.svg')+" value='3'>I just wanna squid around! </option>";
		
		var matchBox = 	document.getElementsByClassName("typography-feel");
		if (matchBox.length > 0){
			if (matchBox[1].style.backgroundImage.indexOf("/assets/img/svg/text/scene/todayplan/gamemode") > -1 ){
				matchBox[1].style.backgroundImage = "url("+chrome.extension.getURL("Style/privatematch.svg")+")";
				matchBox[0].style.backgroundImage = "url("+chrome.extension.getURL("Style/privatematch.svg")+")";
			}
		}
		
		if (planTime.length > 0){
			planTime[0].style.backgroundImage="url("+chrome.extension.getURL("Style/start_time.svg")+")";
			planTime[0].style.height = "48px";
			planTime[0].style.width = "150px";
		}
		if (planMode.length > 0){
			planMode[0].style.backgroundImage="url("+chrome.extension.getURL("Style/Match_Type.svg")+")";
			planMode[0].style.height = "48px";
			planMode[0].style.width = "150px";
		}
		if (planTitle.length > 0){
			planTitle[0].style.backgroundImage="url("+chrome.extension.getURL("Style/planconfig.svg")+")";
			planTitle[0].style.height = "45px";
			planTitle[0].style.width = "200px";
		}
		
		var tweetText = document.getElementsByClassName("checkbox-text");
		if (tweetText.length > 0){
			var tweetText2 = document.getElementsByClassName("modal-check-description");
			tweetText[0].innerHTML="Auto-Tweet plan? (In Japanese)";
			tweetText2[0].innerHTML="You can tweet your plan to all your Twitter followers, letting them know when you want to set up a game! These tweets are in Japanese.";
		}
		
		if (urlparsed.length == 0){
			Element = document.createElement("div");
			Element.className = "flist-cipher";
			Element.innerHTML = "<p style='font-size:12px; margin-right:auto; margin-left:auto; width:700px'><strong>For posted plans, I have created a small reference that is <a href='http://azurespace.net/Splatranslator' target='_blank'><u>available here</u></a>, as they are trickier to change than they are to translate.</strong></p>";
			parent.parentNode.insertBefore(Element, parent.nextSibling);
		}
		
		friendH[0].style.backgroundImage="url("+chrome.extension.getURL("Style/f.png")+")";
		var friendHeadline = document.getElementsByClassName("headline-description");
		friendHeadline[0].innerHTML = "Check the status of your friends and post match recruitment requests!";//
		var friendmsgBox = document.getElementsByClassName("info-message");
		friendmsgBox[0].innerHTML = "In Splatoon, you can join games that your friends are currently competing in. Friends currently online will appear in this list, so play Splatoon with your friends!";
		
		var close = document.getElementsByClassName("icon-close");
		var rec = document.getElementsByClassName("typography-recruiting");
		var editrec = document.getElementsByClassName("typography-participation-edit");
		var timediv = document.getElementsByClassName("last-update");
		var time = timediv[0].innerHTML;
		time = time.substr(7, 3);
		
		var onlines = document.getElementsByClassName("typography-friend-status-online");
		if (onlines.length > 0){
			var ind = 0;
			for (ind = 0; ind < onlines.length; ++ind){
				onlines[ind].style.backgroundImage="url("+chrome.extension.getURL("Style/online.svg")+")";
			}
		}
		
	
		
		var playingNow = document.getElementsByClassName("typography-friend-status-playing");
		if (playingNow.length > 0){
			var ind = 0;
			for (ind = 0; ind < playingNow.length; ++ind){
				playingNow[ind].style.backgroundImage="url("+chrome.extension.getURL("Style/playing.svg")+")";
			}
		}
		

		if (time.indexOf("前") > -1){
			var mins;
			if (time.indexOf("前") == 2)
				time = time.substr(0,1);
			if (time.indexOf("前") > 2)
				time = time.substr(0,2);
			
			if (time == "1")
				mins = "minute";
			else
				mins = "minutes";
			timediv[0].innerHTML = "Last Update: " + time + " " + mins + " ago";
		}
		
		if (time.indexOf("ち") > -1) {
			timediv[0].innerHTML = "Last Update: Less than a minute ago";
		}
		
		if (editrec.length > 0)
			editrec[0].style.backgroundImage="url("+chrome.extension.getURL("Style/planchange.png")+")";
		if (rec.length > 0)
			rec[0].style.backgroundImage="url("+chrome.extension.getURL("Style/planchange.png")+")";
		if (close.length > 0)
			close[0].style.backgroundImage="url(https://splatoon.nintendo.net/assets/img/svg/ui/ico_dlg_close-b49c94450a5558bebb38abc8d70a8c573617485daf0a4a4108184b9f509b37fd.svg)";
	}
	
	//Equipment/Gear Page
	if (equipH.length > 0) {
		var Level = document.getElementsByClassName("typography-equip-rank");
		Level[0].style.backgroundImage="url("+chrome.extension.getURL("Style/level.svg")+")";
		var Uda = document.getElementsByClassName("typography-equip-udemae");
		Uda[0].style.backgroundImage="url("+chrome.extension.getURL("Style/rank.svg")+")";
		var Painted = document.getElementsByClassName("equip-painted-heading typography-equip-painted-area");
		Painted[0].style.backgroundImage="url("+chrome.extension.getURL("Style/AreaPainted.svg")+")";
		Painted[0].style.height="98px";
		Painted[0].style.width="500px";
		
		
		var equipHeadline = document.getElementsByClassName("headline-description");
		equipHeadline[0].innerHTML = "Here you can view your current equipment, as well as Inked Turf points for each used weapon!";
		equipH[0].style.backgroundImage="url("+chrome.extension.getURL("Style/g.png")+")";
	}
	
	
	//Stages Page
	if (stageH.length > 0) {
		stageH[0].style.backgroundImage="url("+chrome.extension.getURL("Style/s.png")+")";
		var stageHeadline = document.getElementsByClassName("headline-description");
		stageHeadline[0].innerHTML = "Here you can view current and upcoming stages, as well as their gametype for Ranked Matches! <br>Times are converted to your timezone (as specified by your OS).";
		var stages = document.getElementsByClassName("map-name");
		var rankedType = document.getElementsByClassName("rule-description");
		var rankmatches = document.getElementsByClassName("typography-earnest-match");
		var regmatches = document.getElementsByClassName("typography-regular-match");
		var rules = document.getElementsByClassName("typography-rule");
		var dates = document.getElementsByClassName("stage-schedule");
		
		
		var index;
		
			
		for (index = 0; index < dates.length; ++index){
			if (stages[0].innerHTML == "ヒラメが丘団地" ||
			stages[0].innerHTML == "アロワナモール" ||
			stages[0].innerHTML == "Ｂバスパーク" ||
			stages[0].innerHTML == "ネギトロ炭鉱" ||
			stages[0].innerHTML == "モンガラキャンプ場" ||
			stages[0].innerHTML == "モズク農園" ||
			stages[0].innerHTML == "タチウオパーキング" ||
			stages[0].innerHTML == "ホッケふ頭" ||
			stages[0].innerHTML == "シオノメ油田" ||
			stages[0].innerHTML == "デカライン高架下" ||
			stages[0].innerHTML == "ハコフグ倉庫")
			dates[index].innerHTML = normalizeDate(dates[index].innerHTML);
		}
		
		for (index = 0; index < rankedType.length; ++index){
			if (names[rankedType[index].innerHTML])
				rankedType[index].innerHTML = names[rankedType[index].innerHTML];
		}
		
		for (index = 0; index < rankmatches.length; ++index){
			rules[index].style.backgroundImage = "url("+chrome.extension.getURL("Style/rule.svg")+")";
			rankmatches[index].style.backgroundImage = "url("+chrome.extension.getURL("Style/rankmatch.svg")+")";
		}
		
		for (index = 0; index < regmatches.length; ++index){
			regmatches[index].style.backgroundImage = "url("+chrome.extension.getURL("Style/regmatch.svg")+")";
		}
		
		for (index = 0; index < stages.length; ++index){
			if (names[stages[index].innerHTML])
				stages[index].innerHTML = names[stages[index].innerHTML];
		}
	}
	
	//A little suboptimal.
	setTimeout(UpdatePage, 100);
}

//Read both dates in the string, convert them from UTC+9 to User's Local Time
function normalizeDate(text){
	var dates = text.split("~");
	dates[0] += " UTC+09:00";
	dates[1] += " UTC+09:00";
	var date1 = new Date(dates[0]);
	var date2 = new Date(dates[1]);
	var mins = ('0'+date1.getMinutes()).slice(-2);
	var text1 = (date1.getMonth() + 1) + "/" + date1.getDate() + " " + date1.getHours() + ":" + mins;
	mins = ('0'+date2.getMinutes()).slice(-2);
	var text2 = (date2.getMonth() + 1) + "/" + date2.getDate() + " " + date2.getHours() + ":" + mins;
	var dates = text1 + " ~ " + text2;
	return dates;
}

UpdatePage();
