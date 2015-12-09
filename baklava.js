var B_OZEL = 1;
var B_CINS = 2;

var B_BAGLAC = 10;
var B_KESME = 11;
var B_SORU = 12;
var B_KAYNASTIRMA_EKI_N = 13;


var harfler = 'abcçdefgğhıijklmnoöprsştuüvyz';
var sesli = 'aeıioöuü';
var incesesli = 'eiöü';
var kalinsesli = 'aıou';
var sessiz = 'bcçdfgğhjklmnprsştvyz';
var sertsessiz = 'pçtkfhsş';
var yumusaksessiz = 'bcdgğjlmnrvyz';


function baklava(){
	return new launch();
}

function launch(){
	
	var kelime = '';
	var turu = 2;
	
	this.set = function(kel,tur){
		kelime = kel;
		turu = tur;
		
		if(turu == B_OZEL)
			kelime = ilkHarfBuyuk(kelime);
		
		
		return this;
	};
	
	this.get = function(){
		return kelime;
	};
	
	this.ler = function(kesme){
		var a = '';
		if(kesme == B_KESME) a = '\'';
		
		sonSesliHarfInceKalin(kelime) ? kelime += a + 'ler' : kelime += a + 'lar';
		return this;
	};
	
	this.e = function(kaynastirma_eki){ // e, a
		var ince = sonSesliHarfInceKalin(kelime);
		var sonHarfSesli = sonHarfSesliSessiz(kelime);
		
		if(turu == B_OZEL && kelime.indexOf('\'') == -1){
			kelime += '\'';
		}
		
		if(sonHarfSesli){
			if(kaynastirma_eki == B_KAYNASTIRMA_EKI_N) kelime += 'n';
			else kelime += 'y';
		}
		else {
			kelime = unluYumusamasi(kelime, turu);
		}
		ince ? kelime += 'e' : kelime += 'a';
		return this;
	};
	
	this.i = function(kaynastirma_eki){ // i, u
		var char1 = '';
		var sonSesli = sonSesliHarf(kelime);
		var sonHarfSesli = sonHarfSesliSessiz(kelime);
		
		if(turu == B_OZEL && kelime.indexOf('\'') == -1){
			kelime += '\'';
		}
		
		if(sonHarfSesli){
			if(kaynastirma_eki == B_KAYNASTIRMA_EKI_N) kelime += 'n';
			else kelime += 'y';
		}
		else {
			kelime = unluYumusamasi(kelime, turu);
		}
		
		char1 = ekBaslangici(sonSesli);
		
		kelime += char1;
		
		return this;
	};
	
	this.de = function(tur){ // da, -de, -ta, -te
		var char1 = '';
		var char2 = '';
		
		if(tur == null)
		char1 =  sertsessiz.indexOf(sonHarf(kelime)) != -1 ? 't' : 'd';
		
		if(tur == B_BAGLAC)
			char1 =  ' d';
		char2 = sonSesliHarfInceKalin(kelime) ? 'e' : 'a';
		
		if(turu == B_OZEL && tur == null && kelime.indexOf('\'') == -1){
			kelime += '\'';
		}
		
		kelime += char1 + '' + char2;
		
		return this;
	};
	
	this.den = function(){
		var char1 = '';
		var char2 = '';
		
		if(turu == B_OZEL && kelime.indexOf('\'') == -1){
			kelime += '\'';
		}
		
		char1 =  sertsessiz.indexOf(sonHarf(kelime)) != -1 ? 't' : 'd';
		char2 = sonSesliHarfInceKalin(kelime) ? 'e' : 'a';
		
		kelime += char1 + '' + char2 + 'n';
		
		return this;
	};
	
	this.ce = function(){
		var char1 = '';
		var char2 = '';
		
		char1 =  sertsessiz.indexOf(sonHarf(kelime)) != -1 ? 'ç' : 'c';
		char2 = sonSesliHarfInceKalin(kelime) ? 'e' : 'a';
		
		kelime += char1 + '' + char2;
		return this;
	};
	
	this.mi = function(tur){
		
		var sonSesli = sonSesliHarf(kelime);
		var char2 = '';
		
		char2 = ekBaslangici(sonSesli);
		
		kelime += ' m' + char2 + (tur == B_SORU ? '?' : '');
		return this;
	};
	
	this.nin = function(){
		var char2 = '';
		var sonHarfSesli = sonHarfSesliSessiz(kelime);
		
		if(turu == B_OZEL && kelime.indexOf('\'') == -1){
			kelime += '\'';
		}
		
		if(sonHarfSesli) kelime += 'n';
		else {
			kelime = unluYumusamasi(kelime, turu);
		}
		
		char2 = ekBaslangici(sonSesliHarf(kelime));
		
		kelime += char2 + 'n';
		return this;
	};
	
	this.lik = function(){
		var char2 = '';
		var sonSesli = sonSesliHarf(kelime);
		char2 = ekBaslangici(sonSesli);
		
		kelime += 'l' + char2 + 'k';
		
		return this;
	};
	
	this.li = function(){
		var char2 = '';
		var sonSesli = sonSesliHarf(kelime);
		char2 = ekBaslangici(sonSesli);
		
		kelime += 'l' + char2;
		
		return this;
	};
	
	this.siz = function(){
		var char2 = '';
		var sonSesli = sonSesliHarf(kelime);
		char2 = ekBaslangici(sonSesli);
		
		kelime += 's' + char2 + 'z';
		
		return this;
	};
	
	this.cil = function(){
		var char2 = '';
		var sonSesli = sonSesliHarf(kelime);
		
		char2 = ekBaslangici(sonSesli);
		
		kelime += (sertsessiz.indexOf(sonHarf(kelime)) != -1 ? 'ç' : 'c') + char2 + 'l';
		
		return this;
	};
	
	this.cik = function(){
		var char2 = '';
		var sonSesli = sonSesliHarf(kelime);
		
		char2 = ekBaslangici(sonSesli);
		
		kelime += (sertsessiz.indexOf(sonHarf(kelime)) != -1 ? 'ç' : 'c') + char2 + 'k';
		
		return this;
	};
	
	this.das = function(){
		var char2 = '';
		var sonSesli = sonSesliHarf(kelime);
		
		char2 = ekBaslangici(sonSesli);
		
		kelime += (sertsessiz.indexOf(sonHarf(kelime)) != -1 ? 't' : 'd') + 'aş';
		
		return this;
	};
	
	this.inci = function(){
		var char2 = '';
		var sonSesli = sonSesliHarf(kelime);
		
		var son = sonHarf(kelime);
		
		if(son == 't') 
			kelime = kelime.substring(0,kelime.length - 1) + 'd';
		
		char2 = ekBaslangici(sonSesli);
		
		kelime += (sonHarfSesliSessiz(kelime) ? '' : char2) + 'nc' + char2;
		
		return this;
	};
	
	this.msi = function(){
		
		var sonSesli = sonSesliHarf(kelime);
		var char2 = ekBaslangici(sonSesli);
		
		kelime += (sonHarfSesliSessiz(kelime) ? '' : char2) + 'ms' + char2;
		
		return this;
	};
	
	this.sel = function() {
		ince = sonSesliHarfInceKalin(kelime);
		
		kelime += 's' + (ince ? 'e' : 'a') + 'l';
		
		return this;
	};
	
	this.le = function(){
		ince = sonSesliHarfInceKalin(kelime);
		
		kelime += 'l' + (ince ? 'e' : 'a');
		
		return this;
	};
	
	this.el = function(){
		ince = sonSesliHarfInceKalin(kelime);
		
		kelime +=  (ince ? 'e' : 'a') + 'l';
		
		return this;
	};
	
	this.se = function(){
		ince = sonSesliHarfInceKalin(kelime);
		
		kelime +=  's' + (ince ? 'e' : 'a') ;
		
		return this;
	};
	
	this.im = function(){
		var sonSesli = sonSesliHarf(kelime);
		char2 = ekBaslangici(sonSesli);
		
		kelime +=  char2 + 'm';
		
		return this;
	};
	
	this.gen = function(){
		var sonSessiz = sonSessizHarf(kelime);
		var sonSesli = sonSesliHarf(kelime);
		
		var char1 = 'g';
		var char2 = sonSesliHarfInceKalin(kelime) ? 'e' : 'a';
		
		if(sertsessiz.indexOf(sonSessiz) != -1) char1 = 'k';
		
		kelime +=  char1 + char2  + 'n';
		
		return this;
	};
	
	this.tcKimlikNoGecerliMi = function(tcKimlikNo){
		tcKimlikNo = tcKimlikNo.toString();
		  var onbirHane = /^[0-9]{11}$/.test(tcKimlikNo);
		  
		  if(onbirHane == true){
			  var x = 0;
			  for (var i = 0; i < 10; i++) x += Number(tcKimlikNo.substr(i, 1));
			  var t1 = x % 10 == tcKimlikNo.substr(10,1);
			  var y1 = 0;
			  var y2 = 0;
			  for (var i = 0; i < 10; i+=2) y1 += Number(tcKimlikNo.substr(i, 1));
		
			  for (var i = 1; i < 10; i+=2) y2 += Number(tcKimlikNo.substr(i, 1));

			  return t1 && (((y1 * 7) - y2) % 10 == tcKimlikNo.substr(9,0));
		  }

		  return false;
	};
	
	this.telefonNumarasi = function(telefonNo) {
		telefonNo = telefonNo.replace(/\s/g, '');
		var onbirHane = /^[0-9]{11}$/.test(telefonNo);
		var onucHane = /^\+[0-9]{12}$/.test(telefonNo);
		var result = '';

		if(onbirHane == true){
			for(var i=0; i<telefonNo.length; i++){
				var ch = telefonNo.charAt(i);
				
				if(i == 0) result += '(' + ch;
				else if(i == 1) result += ' ' + ch;
				else if(i == 3) result += ch + ') ';
				else if(i == 6 || i == 8) result += ch + ' ';
				else result += ch;
				
			}
		}
		else if(onucHane == true){
			for(var i=0; i<telefonNo.length; i++){
				var ch = telefonNo.charAt(i);
				
				if(i == 3) result += ' (' + ch;
				else if(i == 5) result += ch + ') ' ;
				else if(i==8 || i == 10 || i == 12) result += ch + ' ';
				else result += ch;
				
			}
		}
		
		return result;
	};
	
	this.haftaninHangiGunu = function(gun,ay,yil){
		var gsDayNames = new Array(
			  'Pazar',
			  'Pazartesi',
			  'Salı',
			  'Çarşamba',
			  'Perşembe',
			  'Cuma',
			  'Cumartesi'
			);
		
			var gunStr = ''+gun;
			var ayStr = ''+ay;
			var yilStr = ''+yil;
			
			if(gunStr.length == 1) gunStr = '0' + gunStr;
			if(ayStr.length == 1) ayStr = '0' + ayStr;

			var d = new Date(yilStr + '-' + ayStr + '-' + gunStr);
			
			var dayName = gsDayNames[d.getDay()];
			
		return dayName;
	};
	
	this.gecenSure = function(gun, ay, yil, saat, dakika, saniye){
		var d1 = new Date(yil, ay-1, gun, saat, dakika, saniye, 0);
		var milliseconds1 = d1.getTime();
		var once = true;
		
		var dcurr = new Date();
		var milliseconds2 = dcurr.getTime();
		
		var diff = milliseconds2 - milliseconds1;
		
		if(diff > 0) {
			var saniye = diff / 1000;
			var dakika = diff / (60 * 1000);
			var saat = diff / (60 * 60 * 1000);
			var gun = diff / (24 * 60 * 60 * 1000);
			var ay = diff / (30 * 24 * 60 * 60 * 1000);
			var yil = diff / (12 * 30 * 24 * 60 * 60 * 1000);
			
			if(saniye < 60){
				return (Math.floor(saniye) + ' saniye önce');
			}
			else if(dakika < 60){
				return (Math.floor(dakika) + ' dakika önce');
			}
			else if(saat < 24){
				return (Math.floor(saat) + ' saat önce');
			}
			else if(gun < 30){
				return (Math.floor(gun) + ' gün önce');
			}
			else if(ay < 12){
				return (Math.floor(ay) + ' ay önce');
			}
			else if(yil < 1000){
				return (Math.floor(yil) + ' yıldan fazla');
			}
		}
		
		
		
		return '';
		
	};
	
	
}

function sonSesliHarf(kelime){
	for(var i = kelime.length - 1; i >= 0 ; i--){
		var ch = kelime.charAt(i).toLowerCase();
		
		if(sesli.indexOf(ch) != -1) return ch;
	}
	
	return null;
}

function sonSessizHarf(kelime){
	for(var i = kelime.length - 1; i >= 0 ; i--){
		var ch = kelime.charAt(i);
		
		if(sessiz.indexOf(ch) != -1) return ch;
	}
	
	return null;
}

function ekBaslangici(sonSesli){
	if(sonSesli == 'u' || sonSesli == 'o' ) return 'u';
	else if(sonSesli == 'ü' || sonSesli == 'ö' ) return 'ü';
	else if(sonSesli == 'i' || sonSesli == 'e' ) return 'i';
	else if(sonSesli == 'ı' || sonSesli == 'a' ) return 'ı';
}

function sonSesliHarfInceKalin(kelime){
	for(var i = kelime.length - 1; i >= 0 ; i--){
		var ch = kelime.charAt(i);
		
		if(incesesli.indexOf(ch) != -1) return true; // ince sesli
		else if(kalinsesli.indexOf(ch) != -1) return false; // kalin sesli
	}
}

function sonHarfSesliSessiz(kelime){
	var ch = kelime.charAt(kelime.length - 1);
	
	return sesli.indexOf(ch) != -1 ? true : false;
}

function sonHarf(kelime){
	return kelime.charAt(kelime.length - 1);
}

function ilkHarfBuyuk(kelime) {
	result='';
	
	kelime = kelime.toLowerCase();
	
	for(var i=0;i < kelime.length; i++){
		var ch = kelime.charAt(i);
		
		if(kelime.charAt(i - 1) == ' ' || i===0)
			result += ch.toUpperCase();
		else result += ch;
	}
	
	return result;
}


function unluYumusamasi(kelime, turu) {
	var son = sonHarf(kelime);
	
	if(turu == B_CINS && heceSayisi(kelime) > 1){
		if(son == 'k') kelime = kelime.substring(0,kelime.length - 1) + 'ğ';
		if(son == 'ç') kelime = kelime.substring(0,kelime.length - 1) + 'c';
		if(son == 'p') kelime = kelime.substring(0,kelime.length - 1) + 'b';
		if(son == 't') kelime = kelime.substring(0,kelime.length - 1) + 'd';
	}
	
	return kelime;
	
}

function heceSayisi(kelime){
	var count = 0;
	for(var i=0;i < kelime.length; i++){
		var ch = kelime.charAt(i);
		
		if(sesli.indexOf(ch) != -1) count++;
	}
	
	return count;
}