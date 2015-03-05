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