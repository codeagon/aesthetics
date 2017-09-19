module.exports = function Aesthetics(dispatch) {

const Command = require('command'),
	command = Command(dispatch)
var aero = [0,8,102,103,104,50002,97501,97502,97505,97511,97512,97515,766002,781001,781002,905901,905903,9160006,141630011,164350011,475900100]
var aura = [0,1440,2105,2561,2680,2725,4611,4866,15070,15080,46759,60006,60020,70406,70408,100801,101900,200200,401300,401400,468008,476617,477026,500100,600500,701700,780103,780203,905425,905803,905906,905947,950038,950050,950326,950327,950328,950329,5010000,7692000,7692002,8000737,9810012,10151032,10151070,10154030,47500400,47651003,47661900,47681800,47702500,80900005,81010202,81110401,81112001,999001024,999009720,999009730,999009810]
var shield = [0,15090,60005,70462,781009,801000,5692001,10152110,10153091,81121000,88825253,99006800,999009790,999009820]
var hand = [0,921,4767,60001,300300,400100,601100,700300,700600,757053,3000020,98000101,99006300]
var ground = [0,2099,15030,88614,460015,460032,808106,905605,980104,47680600,99070007,99070008,99070027]
var etc = [46750,46751,88605,429015,457002,460004,476611,476612,476613,476614,781018,905698,905953,950095,981129,4510004,4510005,4510006,4510007,4510008,4510009,4510010,4510011,4510012,4510013,4510014,7101013,7101018,7103018,7103024,7103025,7103026,7103027,7103028,7103028,7103029,7103030,7103031,10151072,44300024,44300025,44300026,44300027]

	let cid,
		name,
		x,
		y,
		z,
		zone,
		serv,
		player,
		pc,
		pcapp,
		target,
		ucid = 33333333333333, //These are like this to prevent conflicts and camera issues
		objcid = 33333333333333,
		npccid = 33333333333333,
		colcid = 33333333333333,
		petcid = 33333333333333,
		shutid = 33333333333333,
		fireid = 33333333333333,
		pserver,
		pid,
		fab = [],
		w
//HOOKS	
	dispatch.hook('S_LOGIN', 1, (event) => {
    name = event.name;
  });
  dispatch.hook('S_SPAWN_NPC', 1, {filter: {fake: null}}, event =>{
		snpcw = event.w
		snpcx = event.x
		snpcy = event.y
		snpcz = event.z
		});
  dispatch.hook('S_ABNORMALITY_BEGIN', 1, {filter: {fake: null}}, event =>{
		if (event.source == 69696969){
		fab.push(event.id)}
  })
  dispatch.hook('S_LOGIN', 2, (event) => {
	  pcid = event.cid
	  pserver = event.serverId
	  pid = event.playerId
	  })
	dispatch.hook('C_PLAYER_LOCATION', 1, event =>{
		location = event
		w = event.w
		x = event.x1
		y = event.y1
		z = event.z1	
	});
	dispatch.hook('S_LOAD_TOPO', 1, event =>{
		zz = event.zone
	});
	dispatch.hook('S_SPAWN_USER', 5, event =>{
		//console.log('User Found '+event.name, event.appface, event.apphair)
		pc = event
	})
//COMMANDS
	command.add('aes', (type, effect, arg3) => {
	if (type == 'sky') {
			if (effect < 20){
				dispatch.toClient('S_START_ACTION_SCRIPT', 1, {
				cid: pcid,
				unk1: aero[effect],
				unk2: 0
				})
			}
	}
	if (type == 'clear') {
		dispatch.toClient('S_START_ACTION_SCRIPT', 1, {
		cid: pcid,
		unk1: 105,
		unk2: 0
		})
		clearaura()
		for(var i = fab.length -1; i >= 0 ; i--){
		fab.splice(i, 1);
			}
			}
	
	if (type == 'aura') {
		dispatch.toClient('S_ABNORMALITY_BEGIN', 2, {
	target: pcid,
	source: 69696969,
	id: aura[effect],
	duration: 0,
	unk: 0,
	stacks: 1,
	unk2: 0
		})
		if (arg3 == 'rm') {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: pcid,
			id: aura[effect]
		})
		}
		}
	if (type == 'shield') {
		dispatch.toClient('S_ABNORMALITY_BEGIN', 2, {
	target: pcid,
	source: 69696969,
	id: shield[effect],
	duration: 0,
	unk: 0,
	stacks: 1,
	unk2: 0
		})
		if (arg3 == 'rm') {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: pcid,
			id: shield[effect]
		})
		}
		}
	if (type == 'hand') {
		dispatch.toClient('S_ABNORMALITY_BEGIN', 2, {
	target: pcid,
	source: 69696969,
	id: hand[effect],
	duration: 0,
	unk: 0,
	stacks: 1,
	unk2: 0
		})
		if (arg3 == 'rm') {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: pcid,
			id: hand[effect]
		})
		}
		}
	if (type == 'ground') {
		dispatch.toClient('S_ABNORMALITY_BEGIN', 2, {
	target: pcid,
	source: 69696969,
	id: ground[effect],
	duration: 0,
	unk: 0,
	stacks: 1,
	unk2: 0
		})
		if (arg3 == 'rm') {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: pcid,
			id: ground[effect]
		})
		}
		}
	if (type == 'etc') {
		dispatch.toClient('S_ABNORMALITY_BEGIN', 2, {
	target: pcid,
	source: 69696969,
	id: etc[effect],
	duration: 0,
	unk: 0,
	stacks: 1,
	unk2: 0
		})
		if (arg3 == 'rm') {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: pcid,
			id: ground[effect]
		})
		}
		}
	}) // end of command
//FUNCTIONS
	function clearaura(){
		for (let abn of fab) {
	dispatch.toClient('S_ABNORMALITY_END', 1, {
	target: pcid,
	id: abn
	})
	}	
	}
	
}