"use strict";angular.module("buentratoApp",["ngAnimate","ngResource","ngRoute","ngTouch","ngFacebook"]).config(["$routeProvider","$facebookProvider",function(a,b){b.setAppId("1552541561701563"),b.setVersion("v2.2"),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/menu",{templateUrl:"views/menu.html",controller:"MenuCtrl"}).when("/passport",{templateUrl:"views/passport.html",controller:"PassportCtrl"}).when("/trivia",{templateUrl:"views/trivia.html",controller:"TriviaCtrl"}).when("/trivia/:id/:slug",{templateUrl:"views/trivia-item.html",controller:"TriviaItemCtrl"}).when("/trivia/:id/:slug/end-level",{templateUrl:"views/trivia-end.html",controller:"TriviaEndCtrl"}).when("/speak-up",{templateUrl:"views/speak-up.html",controller:"SpeakUpCtrl"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location",function(a,b){!function(a,b,c){var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src="//connect.facebook.net/en_US/sdk.js",e.parentNode.insertBefore(d,e))}(document,"script","facebook-jssdk"),a.transition=function(b){a.isGoingBack="back"===b?!0:!1},a.$on("$routeChangeStart",function(c,d){a.loggedUser||"views/main.html"===d.templateUrl||b.path("/"),a.loggedUser&&"views/main.html"===d.templateUrl&&b.path("/menu")})}]),angular.module("buentratoApp").controller("MainCtrl",["$rootScope","$scope","$location","$facebook","Data",function(a,b,c,d,e){b.pageClass="page-main",b.$parent.showNav=!1,b.connectionChecked=!1,b.login=function(){d.login().then(function(){b.getUser()})},b.getUser=function(){var b="/me?fields=id,name,picture.redirect(false).width(100).height(100).type(square)";d.api(b).then(function(b){var d={id:b.id,name:b.name,picture:b.picture.data.url};e.setUser(d),a.loggedUser=!0,c.path("/menu")})},b.checkConnection=function(){d.getLoginStatus().then(function(a){"connected"===a.status?b.getUser():b.connectionChecked=!0})},b.checkConnection()}]),angular.module("buentratoApp").controller("MenuCtrl",["$rootScope","$scope","Data",function(a,b,c){b.pageClass="page-menu",b.$parent.showNav=!0,b.$parent.hasBackBtn=!1,b.$parent.pageTitle="¡Bienvenido!",b.user=c.getUser()}]),angular.module("buentratoApp").controller("PassportCtrl",["$scope",function(a){a.pageClass="page-passport",a.$parent.showNav=!0,a.$parent.hasBackBtn=!0,a.$parent.pageTitle="Crea tu pasaporte",a.$parent.backPage="menu"}]),angular.module("buentratoApp").controller("TriviaCtrl",["$scope","Data",function(a,b){a.pageClass="page-trivia",a.$parent.showNav=!0,a.$parent.hasBackBtn=!0,a.$parent.pageTitle="Trivia",a.$parent.backPage="menu",a.triviaList=b.getTrivia()}]),angular.module("buentratoApp").controller("SpeakUpCtrl",["$scope","Data",function(a,b){a.pageClass="page-speak-up",a.$parent.showNav=!0,a.$parent.hasBackBtn=!0,a.$parent.pageTitle="¡Denuncia el maltrato!",a.$parent.backPage="menu",a.contacts=b.getContacts()}]),angular.module("buentratoApp").controller("TriviaItemCtrl",["$scope","Data","$routeParams","$timeout","$location",function(a,b,c,d,e){var f=c.id,g=c.slug;a.pageClass="page-trivia-item",a.$parent.showNav=!0,a.$parent.hasBackBtn=!0,a.$parent.pageTitle="Nivel "+f,a.$parent.backPage="trivia",a.trivia=b.getTrivia(f),a.index=0,a.answerStatus=null,a.$questionContainer=$(".question-container"),a.$watch("index",function(b){"number"==typeof b&&(a.question=a.trivia.questions[b])}),a.next=function(){a.index<a.trivia.questions.length-1?a.$questionContainer.animate({opacity:0,left:-100},function(){a.index+=1,a.answerStatus=null,a.$apply(),a.$questionContainer.css({left:100}).animate({opacity:1,left:0})}):e.path("/trivia/"+f+"/"+g+"/end-level")},a.verifyAnswer=function(){},a.selectAnswer=function(b,c){a.question.selectedAnswer=c,a.question.correctAnswer===c?(a.answerStatus=1,d(function(){a.next()},300)):a.answerStatus=0}}]),angular.module("buentratoApp").factory("Data",function(){function a(){return f}function b(){return e}function c(a){e=a}function d(a){if(!a)return g;var b=a-1;return g[b]}var e,f=[{countryCode:"uy",countryName:"Uruguay",organizationName:"Línea Azul",phoneCode:"598",organizationNumber:"0800 5050"},{countryCode:"ar",countryName:"Argentina",organizationName:"Gobierno Línea de Urgencia",phoneCode:"54",organizationNumber:"102"},{countryCode:"bo",countryName:"Bolivia",organizationName:"Defensoría de la Niñez y Adolescencia",phoneCode:"591",organizationNumber:"156"},{countryCode:"br",countryName:"Brasil",organizationName:"Gobierno Línea de Urgencia",phoneCode:"55",organizationNumber:"100"},{countryCode:"cl",countryName:"Chile",organizationName:"Chile Atiende",phoneCode:"56",organizationNumber:"800 730 800"},{countryCode:"co",countryName:"Colombia",organizationName:"ICBF - Linea prevención Abuso Sexual",phoneCode:"57",organizationNumber:"1 3159049"},{countryCode:"cr",countryName:"Costa Rica",organizationName:"DNI Mano Amiga",phoneCode:"506",organizationNumber:"2297 2880"},{countryCode:"ec",countryName:"Ecuador",organizationName:"DINAPEN",phoneCode:"593",organizationNumber:"22950214"},{countryCode:"sv",countryName:"El Salvador",organizationName:"Protección al menor",phoneCode:"503",organizationNumber:"2255 1089"},{countryCode:"us",countryName:"Estados Unidos",organizationName:"Child Help",phoneCode:"1",organizationNumber:"800 730 800"},{countryCode:"es",countryName:"España",organizationName:"ANAR",phoneCode:"34",organizationNumber:"900 20 20 10"},{countryCode:"gt",countryName:"Guatemala",organizationName:"Procuraduría de la Niñez y Adolecencia",phoneCode:"502",organizationNumber:"2414 8787"},{countryCode:"hn",countryName:"Honduras",organizationName:"IHNFA",phoneCode:"504",organizationNumber:"111"},{countryCode:"ni",countryName:"Nicaragua",organizationName:"Ministerio de la Familia",phoneCode:"505",organizationNumber:"133"},{countryCode:"pa",countryName:"Panamá",organizationName:"Tú Linea",phoneCode:"507",organizationNumber:"147"},{countryCode:"py",countryName:"Paraguay",organizationName:"Fono Ayuda",phoneCode:"595",organizationNumber:"147"},{countryCode:"pe",countryName:"Perú",organizationName:"MIMP Linea 100",phoneCode:"51",organizationNumber:"100"},{countryCode:"us",countryName:"Puerto Rico",organizationName:"Policía de Puerto Rico",phoneCode:"1787",organizationNumber:"793 1234"},{countryCode:"do",countryName:"República Dominicana",organizationName:"Linea 700",phoneCode:"1809",organizationNumber:"700"}],g=[{level:1,title:"Derechos del niño/a y adolescente",slug:"derechos-del-nino-y-adolescente",questions:[{index:1,question:"Marca cuál de las siguientes opciones no es un derecho del niño:",answers:[{text:"A la educación de calidad"},{text:"A la salud "},{text:"Al descanso, esparcimiento, juego y cultura"},{text:"A la participación"},{text:"A participar en una guerra"}],correctAnswer:4},{index:2,question:"¿Cuantos derechos hay en la Convención sobre los Derechos del Niño?",answers:[{text:"20"},{text:"30"},{text:"40"},{text:"54"},{text:"60"}],correctAnswer:3},{index:3,question:"¿En que año fue aprobada la Convención sobre los Derechos del Niño?",answers:[{text:"1983"},{text:"1989"},{text:"1959"},{text:"1995"},{text:"2001"}],correctAnswer:1},{index:4,question:"¿Que país no aprobó la convención de los derechos del niño?",answers:[{text:"Cuba"},{text:"EEUU"},{text:"Afganistán"},{text:"Japón"},{text:"Alemania"}],correctAnswer:1},{index:5,question:"Según la Convención sobre los Derechos del Niño, un niño es:",answers:[{text:"Toda persona menor de 18 años de edad"},{text:"Toda persona menor de 13 años de edad"},{text:"Toda persona menor de 12 años de edad"},{text:"Toda persona menor de 21 años de edad"}],correctAnswer:0}]},{level:2,title:"De la violencia al buentrato",slug:"de-la-violencia-al-buentrato",questions:[{index:1,question:"El buentrato es...",answers:[{text:"Obedecer siempre"},{text:"Pensar solo en mi mismo"},{text:"No compartir"},{text:"Escuchar con atención"},{text:"Aceptar todo lo que el otro quiera"}],correctAnswer:3},{index:2,question:"Violencia hacia los niños y niñas es",answers:[{text:"Denunciar situaciones de maltrato."},{text:"No escucharlos con atención."},{text:"Creerles cuando hablan de asuntos que los afectan."},{text:"Protegerlos cuando su derecho al buentrato no es respetado."},{text:"Incluir sin discriminar."}],correctAnswer:1},{index:3,question:"Resiliencia es...",answers:[{text:"Capacidad de no enojarse"},{text:"Capacidad de resistir y reconstruir"},{text:"Capacidad de dormir bien"},{text:"Capacidad de maltratarse"},{text:"Capacidad de hacer lo correcto"}],correctAnswer:1},{index:4,question:"¿Cual es el tipo de violencia más frecuente hacia los niños y niñas?",answers:[{text:"Castigo físico"},{text:"Violencia psicológica"},{text:"Abuso sexual."},{text:"Trabajo infantil"},{text:"Explotación sexual"}],correctAnswer:1}]},{level:3,title:"Activismo y participación",slug:"activismo-y-participación",questions:[{index:1,question:"La participación adolescente y juvenil es...",answers:[{text:"Un privilegio para algunos"},{text:"Una perdida de tiempo"},{text:"Un derecho para todos y todas"},{text:"Algo que no afecta la realidad"},{text:"Actividad siempre dirigida por adultos"}],correctAnswer:2},{index:2,question:"¿Que joven recibio un reconocimiento por su lucha por el derecho a la educación de su pais?",answers:[{text:"Violeta"},{text:"Malala Yousafzai"},{text:"Justin Bieber"},{text:"Neimar Junior"},{text:"Emma Watson"}],correctAnswer:1},{index:3,question:'¿En que año comenzó la campaña "Un trato por el buentrato"?',answers:[{text:"2000"},{text:"2003"},{text:"2006"},{text:"2009"},{text:"2011"}],correctAnswer:4},{index:4,question:"¿Cual es la línea telefónica para realizar denuncias de maltrato en Brasil?",answers:[{text:"911"},{text:"150"},{text:"100"},{text:"111"},{text:"123"}],correctAnswer:2},{index:5,question:"¿Qué organización internacional trabaja con refugiados?",answers:[{text:"FIFA"},{text:"UNICEF"},{text:"ACNUR"},{text:"Gran Refugio"},{text:"UYAMAS"}],correctAnswer:2}]},{level:4,title:"¿Quien lo dijo?",slug:"quien-lo-dijo",questions:[{index:1,question:'"No hay camino para la paz, la paz es el camino"',answers:[{text:"Ricky Martin"},{text:"Luis Suarez"},{text:"Mahatma Gandhi"},{text:"Juan Pablo II"},{text:"Eduardo Galeano"}],correctAnswer:2},{index:2,question:'"Traten a los demás como quisieran ustedes ser tratados"',answers:[{text:"Mario Benedetti"},{text:"Bob Marley"},{text:"Jesús"},{text:"Ronaldinho"},{text:"Jean Paul Sartre"}],correctAnswer:2},{index:3,question:'"Hay quienes miran la realidad y se preguntan ¿Por qué?. Y hay quienes la imaginan como jamás ha sido, y se preguntan ¿Por qué no?"',answers:[{text:"Rabindranath Tagore"},{text:"Diego Forlán"},{text:"Isaac Asimov"},{text:"George Bernard Shaw"},{text:"John Lennon"}],correctAnswer:3},{index:4,question:'"No me preocupa tanto la maldad de los malos, sino la pasividad de los supuestamente buenos"',answers:[{text:"Martin Luter King"},{text:"Mahtma Ghandi"},{text:"Bono"},{text:"Madre Teresa"},{text:"Barak Obama"}],correctAnswer:0},{index:5,question:'"Para promover la paz mundial, vete a casa y ama a tu familia"',answers:[{text:"Rigoberta Menchu"},{text:"Mercedes Sosa"},{text:"León Gieco"},{text:"Madre Teresa"},{text:"Adolfo Perez Esquivel"}],correctAnswer:3}]},{level:5,title:"Mix",slug:"mix",questions:[{index:1,question:"¿A partir de que edad se tiene derecho a la participación?",answers:[{text:"Desde el nacimiento"},{text:"5 años"},{text:"13 años"},{text:"15 años"},{text:"18 años"}],correctAnswer:0},{index:2,question:"Cuando queres ayudar una persona ciega debes evitar...",answers:[{text:"Preguntarle si precisa ayuda"},{text:"Acercarle el brazo"},{text:"Tomarlo del brazo"},{text:"Presentarte "},{text:"Actuar naturalidad y respeto"}],correctAnswer:2},{index:3,question:"La equidad de género es...",answers:[{text:"Que los hombres y las mujeres sean iguales"},{text:"Solo beneficia a las mujeres"},{text:"La dominación de las mujeres sobre los hombres"},{text:"Buscar contrarrestar las desigualdades entre varones y mujeres"},{text:"Algo que no les interesa a los hombres"}],correctAnswer:3},{index:4,question:"La explotación sexual infantil no es:",answers:[{text:"Un delito grave sancionado por diversas leyes"},{text:"Una violación grave de los derechos de los niños, niñas y adolescentes"},{text:"Responsabilidad de los niños, niñas y adolescentes"},{text:"la utilización de menores en actos sexuales para la satisfacción de los intereses y deseos de una persona, a cambio de un pago, promesa de pago o cualquier otro tipo de beneficios."}],correctAnswer:3},{index:5,question:"Señala la clave que no ayuda a comunicarse con buentrato:",answers:[{text:"Tener paciencia"},{text:"Demostrar que queremos escuchar"},{text:"Entender"},{text:"No dejar hablar"},{text:"Controlarse"}],correctAnswer:3}]}];return{getContacts:a,getUser:b,setUser:c,getTrivia:d}});