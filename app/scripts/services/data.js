'use strict';

angular.module('buentratoApp')
    .factory('Data', function() {

        var User;

        var Contacts = [
            {
                countryCode : 'uy',
                countryName : 'Uruguay',
                organizationName : 'Línea Azul',
                phoneCode : '598',
                organizationNumber : '0800 5050'
            },
            {
                countryCode : 'ar',
                countryName : 'Argentina',
                organizationName : 'Gobierno Línea de Urgencia',
                phoneCode : '54',
                organizationNumber : '102'
            },
            {
                countryCode : 'bo',
                countryName : 'Bolivia',
                organizationName : 'Defensoría de la Niñez y Adolescencia',
                phoneCode : '591',
                organizationNumber : '156'
            },
            {
                countryCode : 'br',
                countryName : 'Brasil',
                organizationName : 'Gobierno Línea de Urgencia',
                phoneCode : '55',
                organizationNumber : '100'
            },
            {
                countryCode : 'cl',
                countryName : 'Chile',
                organizationName : 'Chile Atiende',
                phoneCode : '56',
                organizationNumber : '800 730 800'
            },
            {
                countryCode : 'co',
                countryName : 'Colombia',
                organizationName : 'ICBF - Linea prevención Abuso Sexual',
                phoneCode : '57',
                organizationNumber : '1 3159049'
            },
            {
                countryCode : 'cr',
                countryName : 'Costa Rica',
                organizationName : 'DNI Mano Amiga',
                phoneCode : '506',
                organizationNumber : '2297 2880'
            },
            {
                countryCode : 'ec',
                countryName : 'Ecuador',
                organizationName : 'DINAPEN',
                phoneCode : '593',
                organizationNumber : '22950214'
            },
            {
                countryCode : 'sv',
                countryName : 'El Salvador',
                organizationName : 'Protección al menor',
                phoneCode : '503',
                organizationNumber : '2255 1089'
            },
            {
                countryCode : 'us',
                countryName : 'Estados Unidos',
                organizationName : 'Child Help',
                phoneCode : '1',
                organizationNumber : '800 730 800'
            },
            {
                countryCode : 'es',
                countryName : 'España',
                organizationName : 'ANAR',
                phoneCode : '34',
                organizationNumber : '900 20 20 10'
            },
            {
                countryCode : 'gt',
                countryName : 'Guatemala',
                organizationName : 'Procuraduría de la Niñez y Adolecencia',
                phoneCode : '502',
                organizationNumber : '2414 8787'
            },
            {
                countryCode : 'hn',
                countryName : 'Honduras',
                organizationName : 'IHNFA',
                phoneCode : '504',
                organizationNumber : '111'
            },
            {
                countryCode : 'ni',
                countryName : 'Nicaragua',
                organizationName : 'Ministerio de la Familia',
                phoneCode : '505',
                organizationNumber : '133'
            },
            {
                countryCode : 'pa',
                countryName : 'Panamá',
                organizationName : 'Tú Linea',
                phoneCode : '507',
                organizationNumber : '147'
            },
            {
                countryCode : 'py',
                countryName : 'Paraguay',
                organizationName : 'Fono Ayuda',
                phoneCode : '595',
                organizationNumber : '147'
            },
            {
                countryCode : 'pe',
                countryName : 'Perú',
                organizationName : 'MIMP Linea 100',
                phoneCode : '51',
                organizationNumber : '100'
            },
            {
                countryCode : 'us',
                countryName : 'Puerto Rico',
                organizationName : 'Policía de Puerto Rico',
                phoneCode : '1787',
                organizationNumber : '793 1234'
            },
            {
                countryCode : 'do',
                countryName : 'República Dominicana',
                organizationName : 'Linea 700',
                phoneCode : '1809',
                organizationNumber : '700'
            }
        ];

        var Trivia = [
            {
                level: 1,
                title: 'Derechos del niño/a y adolescente',
                slug: 'derechos-del-nino-y-adolescente',
                questions : [
                    {
                        index: 1,
                        question: 'Marca cuál de las siguientes opciones no es un derecho del niño:',
                        answers: [
                            {text: 'A la educación de calidad'},
                            {text: 'A la salud '},
                            {text: 'Al descanso, esparcimiento, juego y cultura'},
                            {text: 'A la participación'},
                            {text: 'A participar en una guerra'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 2,
                        question: '¿Cuantos derechos hay en la convención?',
                        answers: [
                            {text: '20'},
                            {text: '30'},
                            {text: '40'},
                            {text: '50'},
                            {text: '60'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 3,
                        question: '¿En que año fue creada la convención?',
                        answers: [
                            {text: '1983'},
                            {text: '1989'},
                            {text: '1959'},
                            {text: '1995'},
                            {text: '2001'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 4,
                        question: '¿Que países no aprobaron la convención de los derechos del niño?',
                        answers: [
                            {text: 'Cuba'},
                            {text: 'EEUU'},
                            {text: 'Afganistán'},
                            {text: 'Japón'},
                            {text: 'Alemania'}
                        ],
                        correctAnswer: 1
                    }
                ]
            },
            {
                level: 2,
                title: 'De la violencia al maltrato',
                slug: 'de-la-violencia-al-maltrato',
                questions : [
                    {
                        index: 1,
                        question: 'El buentrato es...',
                        answers: [
                            {text: 'Obedecer siempre'},
                            {text: 'Pensar solo en mi mismo'},
                            {text: 'No compartir'},
                            {text: 'Escuchar con atención'},
                            {text: 'Aceptar todo lo que el otro quiera'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 2,
                        question: 'Violencia hacia los niños y niñas es',
                        answers: [
                            {text: 'Denunciar situaciones de maltrato.'},
                            {text: 'No escucharlos con atención.'},
                            {text: 'Creerles cuando hablan de asuntos que los afectan.'},
                            {text: 'Protegerlos cuando su derecho al buentrato no es respetado.'},
                            {text: 'Incluir sin discriminar.'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 3,
                        question: 'Resiliencia es...',
                        answers: [
                            {text: 'Capacidad de no enojarse'},
                            {text: 'Capacidad de resistir y reconstruir'},
                            {text: 'Capacidad de dormir bien'},
                            {text: 'Capacidad de tratar bien'},
                            {text: 'Capacidad de hacer lo correcto'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 4,
                        question: '¿Cual es el tipo de violencia más frecuente hacia los niños y niñas?',
                        answers: [
                            {text: 'Castigo físico'},
                            {text: 'Psicológica'},
                            {text: 'Abuso sexual.'},
                            {text: 'Patrimonial'},
                            {text: 'Explotación sexual'}
                        ],
                        correctAnswer: 1
                    }
                ]
            },
            {
                level: 3,
                title: 'Activismo y participación',
                slug: 'activismo-y-participación',
                questions : [
                    {
                        index: 1,
                        question: 'La participación adolescente y juvenil es...',
                        answers: [
                            {text: 'Un privilegio para algunos'},
                            {text: 'Una perdida de tiempo'},
                            {text: 'Un derecho para todos y todas'},
                            {text: 'Algo que no afecta la realidad'},
                            {text: 'Siempre dirigida por adultos'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 2,
                        question: '¿Que joven recibio un reconocimiento por su lucha por el derecho a la educación de su pais?',
                        answers: [
                            {text: 'Violeta'},
                            {text: 'Malala Yousafzai'},
                            {text: 'Justin Bieber'},
                            {text: 'Neimar Junior'},
                            {text: 'Emma Watson'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 3,
                        question: '¿En que año comenzó la campaña "Un trato por el buentrato"?',
                        answers: [
                            {text: '2000'},
                            {text: '2003'},
                            {text: '2006'},
                            {text: '2009'},
                            {text: '2011'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 4,
                        question: '¿Cual es la línea telefónica para realizar denuncias de maltrato en Brasil?',
                        answers: [
                            {text: '911'},
                            {text: '150'},
                            {text: '100'},
                            {text: '111'},
                            {text: '123'}
                        ],
                        correctAnswer: 1
                    }
                ]
            },
            {
                level: 4,
                title: '¿Quien lo dijo?',
                slug: 'quien-lo-dijo',
                questions : [
                    {
                        index: 1,
                        question: '"No hay camino para la paz, la paz es el camino"',
                        answers: [
                            {text: 'Ricky Martin'},
                            {text: 'Luis Suarez'},
                            {text: 'Mahatma Gandhi'},
                            {text: 'Juan Pablo II'},
                            {text: 'Eduardo Galeano'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 2,
                        question: '"No me preocupa tanto la maldad de los malos, sino la pasividad de los supuestamente buenos"',
                        answers: [
                            {text: 'Martin Luter King'},
                            {text: 'Mahtma Ghandi'},
                            {text: 'Bono'},
                            {text: 'Madre Teresa'},
                            {text: 'Barak Obama'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 3,
                        question: '"Para promover la paz mundial, vete a casa y ama a tu familia"',
                        answers: [
                            {text: 'Rigoberta Menchu'},
                            {text: 'Mercedes Sosa'},
                            {text: 'León Gieco'},
                            {text: 'Madre Teresa'},
                            {text: 'Adolfo Perez Esquivel'}
                        ],
                        correctAnswer: 1
                    }
                ]
            },
            {
                level: 5,
                title: 'Mix',
                slug: 'mix',
                questions : [
                    {
                        index: 1,
                        question: '¿A partir de que edad se tiene derecho a la participación?',
                        answers: [
                            {text: 'Desde el nacimiento'},
                            {text: '5 años'},
                            {text: '13 años'},
                            {text: '15 años'},
                            {text: '18 años'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 2,
                        question: 'Cuando queres ayudar una persona ciega debes evitar...',
                        answers: [
                            {text: 'Preguntarle si precisa ayuda'},
                            {text: 'Acercarle el brazo'},
                            {text: 'Tomarlo del brazo'},
                            {text: 'Presentarte '},
                            {text: 'Actuar naturalidad y respeto'}
                        ],
                        correctAnswer: 1
                    },
                    {
                        index: 3,
                        question: 'La equidad de género es...',
                        answers: [
                            {text: 'Que los hombres y las mujeres sean iguales'},
                            {text: 'Solo beneficia a las mujeres'},
                            {text: 'La dominación de las mujeres sobre los hombres'},
                            {text: 'Busca contra restar las desigualdades entre varones y mujeres'},
                            {text: 'No le interesa a los hombres'}
                        ],
                        correctAnswer: 1
                    }
                ]
            }
        ];

        function getContacts() {
            return Contacts;
        }
        function getUser() {
            return User;
        }    
        function setUser(user) {
            User = user;
        }
        function getTrivia (index) {
            if ( !index ) {
                return Trivia;
            }
            var level = index - 1;
            return Trivia[level];
        }    

        return {
            getContacts : getContacts,
            getUser     : getUser,
            setUser     : setUser,
            getTrivia   : getTrivia
        };
    });