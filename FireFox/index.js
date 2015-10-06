var self = require('sdk/self');
var pageMod = require("sdk/page-mod");

var twitunlink = self.data.url("./Style/twit_unlink.svg");
var twitlink = self.data.url("./Style/twit_link.svg");
var logout = self.data.url("./Style/logout.svg");
var areapainted = self.data.url("./Style/AreaPainted.svg");
var btn_gachi_reg = self.data.url("./Style/btn_tab_gachi_regular.svg");
var btn_gachi_sel = self.data.url("./Style/btn_tab_gachi_selected.svg");
var btn_reg = self.data.url("./Style/btn_tab_regular.svg");
var btn_sel = self.data.url("./Style/btn_tab_selected.svg");
var cross = self.data.url("./Style/cross.svg");
var f = self.data.url("./Style/f.png");
var g = self.data.url("./Style/g.png");
var level = self.data.url("./Style/level.svg");
var loading = self.data.url("./Style/loading.svg");
var matchType = self.data.url("./Style/Match_Type.svg");
var messing = self.data.url("./Style/messing.svg");
var of_page = self.data.url("./Style/of_page.svg");
var online = self.data.url("./Style/online.svg");
var planChange = self.data.url("./Style/planchange.png");
var planConf = self.data.url("./Style/planconfig.svg");
var playing = self.data.url("./Style/playing.svg");
var privateMatch = self.data.url("./Style/privatematch.svg");
var r = self.data.url("./Style/r.png");
var rank = self.data.url("./Style/rank.svg");
var rankedmatch = self.data.url("./Style/rankedmatch.svg");
var rankMatch = self.data.url("./Style/rankmatch.svg");
var regMatch = self.data.url("./Style/regmatch.svg");
var regMatch2 = self.data.url("./Style/regmatch2.svg");
var rule = self.data.url("./Style/rule.svg");
var s = self.data.url("./Style/s.png");
var startTime = self.data.url("./Style/start_time.svg");
var ui = self.data.url("./Style/ui.png");

pageMod.PageMod({
	
	include: "https://splatoon.nintendo.net/*",
	contentScriptFile: self.data.url("style.js"),
	contentScriptOptions: { 	
		"twit_unlink" : twitunlink,
		"twit_link" : twitlink,
		"logout" : logout,
		"areapainted" : areapainted,
		"btn_gachi_reg" : btn_gachi_reg,
		"btn_gachi_sel" : btn_gachi_sel,
		"btn_reg" : btn_reg,
		"btn_sel" : btn_sel,
		"cross" : cross,
		"f" : f,
		"g" : g,
		"level" : level,
		"loading" : loading,
		"matchType" : matchType,
		"messing" : messing,
		"of_page" : of_page,
		"online" : online,
		"planChange" : planChange,
		"planConf" : planConf,
		"playing" : playing,
		"privateMatch" : privateMatch,
		"r" : r,
		"rank" : rank,
		"rankedmatch" : rankedmatch,
		"rankMatch" : rankMatch,
		"regMatch" : regMatch,
		"regMatch2" : regMatch2,
		"rule" : rule,
		"s" : s,
		"startTime" : startTime,
		"ui" : ui
	}
});
