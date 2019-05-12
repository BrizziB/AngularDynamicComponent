// view e type devono essere sufficienti per generare il componente  ' pagina': {

// se il fact è già instanziato ed avvalorato si vede da 'fact' in cui è riportato valore e id de fact


export const JSONPage = {
'personaProva': {
  'box': {
  'view': {
   'type': 'box',
   'id': 'null',
   'label': 'personaProva'
  },
   'grid': {
  'view': {
   'type': 'container',
   'id': 'c9c1b3ce-4ae6-45b4-bf05-c3bebdccb7e5'
  },
   'grid': {
  'view': {
   'type': 'container',
   'id': '96072abf-6956-49e6-acbb-ad460741a957'
  },
   'Nome' : {
   'view': {
       'type': 'input-text'
       },
   'type': {
       'fact-type': 'class it.unifi.ing.stlab.reflection.impl.model.facts.TextualFactImpl',

       'suffix' : 'anno/i'

          },

          'fact': {
            'id' : 'null',
            'value': 'nqqgxuldhffxr'
          }
   },
   },
   'grid1': {
  'view': {
   'type': 'container',
   'id': 'fd21f253-63f3-43e5-8d1b-893ed59eecdf'
  },
   'Cognome' : {  				 'view': {

            'type': 'input-text'

          },

          'type': {

            'fact-type': 'class it.unifi.ing.stlab.reflection.impl.model.facts.TextualFactImpl',

            'suffix' : 'anno/i'

          },

          'fact': {

            'id' : 'null',

            'value': 'bhnsjdqxt'

          }
   },
   },
   'grid2': {
  'view': {
   'type': 'container',
   'id': '701d1ce8-96a2-48f0-9432-897badbc66bd'
  },
   'Sesso' : {                  'view': {

            'type': 'combo-input'

            },

            'type': {

            'values': [

              'prova1',
   'prova2',
   'prova3'                    ],

            'sorting': 'as-is'

            },

            'fact': {

            'id': 'null',

            'value': 'it.unifi.ing.stlab.reflection.model.types.Phenomenon@328671a8'

            }


   },
   },
   'grid3': {
  'view': {
   'type': 'container',
   'id': '5069b8ca-5e31-4084-a7c1-af8f7c444468'
  },
   'grid': {
  'view': {
   'type': 'container',
   'id': '63bd5290-54d4-4360-bebd-217e0b598a7a'
  },
   'Peso_0' : {  				 'view': {

            'type': 'input-text'

          },

          'type': {

            'fact-type': 'class it.unifi.ing.stlab.reflection.impl.model.facts.QuantitativeFactImpl',

            'suffix' : 'anno/i'

          },

          'fact': {

            'id' : 'null',

            'value': 'it.unifi.ing.stlab.reflection.model.facts.Quantity@cbd96303'

          }
   },
   'Peso_1' : {                  'view': {

            'type': 'combo-input'

            },

            'type': {

            'values': [

              'prova1',
   'prova2',
   'prova3'                    ],

            'sorting': 'as-is'

            },

            'fact': {

            'id': 'null',

            'value': 'it.unifi.ing.stlab.reflection.model.facts.Quantity@cbd96303'

            }


   },
   },
   },
   'box': {
  'view': {
   'type': 'box',
   'id': 'null',
   'label': 'Indirizzo'
  },
   'grid': {
  'view': {
   'type': 'container',
   'id': '3da4c4b2-8b13-4e85-b7cc-dada331d5753'
  },
   'grid': {
  'view': {
   'type': 'container',
   'id': '7823c31e-1e1c-49cd-8584-3413c60fa558'
  },
   'Via' : {  				 'view': {

            'type': 'input-text'

          },

          'type': {

            'fact-type': 'class it.unifi.ing.stlab.reflection.impl.model.facts.TextualFactImpl',

            'suffix' : 'anno/i'

          },

          'fact': {

            'id' : 'null',

            'value': 'jwxjudriqtcnc'

          }
   },
   },
   'grid1': {
  'view': {
   'type': 'container',
   'id': 'be3a4241-1042-422e-b201-357ef610924e'
  },
   'Civico' : {  				 'view': {

            'type': 'input-text'

          },

          'type': {

            'fact-type': 'class it.unifi.ing.stlab.reflection.impl.model.facts.TextualFactImpl',

            'suffix' : 'anno/i'

          },

          'fact': {

            'id' : 'null',

            'value': 'fenqjvqqmxamvnfcfoxc'

          }
   },
   },
   },
   },
   },
   },
  }
};


/*
{
  'pagina': {
    'view':  {
      'type': 'container'
    },
    'id': '0',

    'riassunto-visita': { // corrispondere al composite type iniziale
      'view': {
        'type': 'tabbed-panel'
      },
      'prova': [
          {

          },

      ],
      'content': {
          'view' : {
            'type': 'tabs',
            'id': 'viewID'
          },

          'Anagrafica': {
            'view': {
              'type': 'container',
              'id': '0'
            },

            'id': '0',
            'numero-cartella': {
              'view': {
                'type': 'std-input',
                'id': ''
              },
              'type': {
                'fact-type': 'quantitative'
              },
              'fact': {
                'id': '01', // questo è l'id con cui il fact è persistito sul DB credo
                'value': '1'
                }
            },
            'stato-civile': {
              'view': {
                'type': 'box'
              },
              'stato-civile': {
                'view': {
                  'type': 'container'
                },
                'stato civile': {
                  'view': {
                    'type': 'combo-input'
                  },
                  'type': {
                    'values': [
                      'Celibe/Nubile',
                      'Coniugato/a',
                      'Divorziato/a',
                      'Separato/a',
                      'Vedovo/a'
                    ],
                    'sorting': 'as-is' // se lessicografico o com'è passato
                  },
                  'fact': {
                    'id': '011',
                    'value': 'Celibe/Nubile'
                  }
                },
                'tempo': {
                  'view': {
                    //'id'
                    'type': 'conditional-input',
                    'link': 'stato civile', // l'idea è che deve rimandare ad un sibling già parsato
                    'values': ['Divorziato/a', 'Separato/a'] // valori per cui l'input è mostrato
                  },
                  'type': {
                    'fact-type': 'quantitative',
                    'suffix' : 'anno/i'
                  },
                  'fact': {
                    'id' : '012',
                    'value': ''
                  }
                }
              }
            },
            'scolarità': {
              'view': {
                'type': 'container'
              },
              'scolarità': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Elementare',
                    'Media inf.',
                    'Media sup.',
                    'Laurea',
                    'Barriera linguistica'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id' : '02',
                  'value': 'Laurea'
                }
              },
            },
            'figli': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '03',
                'value': '2'
              }
            },
            'professione': {
              'view': {
                'type': 'container'
              },
              'professione': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Dipendente',
                    'Autonomo',
                    'Disoccupato',
                    'Nuovo lavoro',
                    'Altro'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id' : '041',
                  'value': 'Altro'
                }
              },
              'tempo': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': '10'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'conditional-input', // dovrebbe essere conditional e textual, per ora è solo input conditional
                  'link': 'professione', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Altro', 'altro'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : ''
                },
                'fact': {
                  'id' : '043',
                  'value': 'agente segreto'
                }
              }
            },
            'inviato da': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Consulenza',
                  'Medico curante',
                  'Specialista',
                  'Decisione del paziente',
                  'DEA'
                ],
                'sorting': 'lex' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '05',
                'value': 'Specialista'
              }
            },
            'medico curante': {
              'view': {
                'type': 'text-input'
              },
              'type': {
                'fact-type': 'textual'
              },
              'fact': {
                'id': '06', // questo è l'id con cui il fact è persistito sul DB credo
                'value': 'Topo Gigio'
                }
            }
          },
          'Anamnesi': {
            'view': {
              'type': 'table'
            },
            'id': '1',
            'PROVA _ anamnesi': {
              'view': {
                'type': 'std-input'
              },
              'type': {
                'fact-type': 'quantitative'
              },
              'fact': {
                'id': '01', // questo è l'id con cui il fact è persistito sul DB credo
                'value': '1'
                }
            },
            'stato-civile': {
              'view': {
                'type': 'container'
              },

              'stato civile': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Celibe/Nubile',
                    'Coniugato/a',
                    'Divorziato/a',
                    'Separato/a',
                    'Vedovo/a'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id': '011',
                  'value': 'Celibe/Nubile'
                }
              },
              'tempo': {
                'view': {
                  'type': 'conditional-input',
                  'link': 'stato civile', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Divorziato/a', 'Separato/a'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'quantitative',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '012',
                  'value': ''
                }
              }
            },
            'scolarità': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Elementare',
                  'Media inf.',
                  'Media sup.',
                  'Laurea',
                  'Barriera linguistica'
                ],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '02',
                'value': 'Laurea'
              }
            },
            'figli': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '03',
                'value': '2'
              }
            },
            'professione': {
              'view': {
                'type': 'container'
              },
              'professione': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Dipendente',
                    'Autonomo',
                    'Disoccupato',
                    'Nuovo lavoro',
                    'Altro'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id' : '041',
                  'value': 'Altro'
                }
              },
              'tempo': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': '10'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'conditional-input', // dovrebbe essere conditional e textual, per ora è solo input conditional
                  'link': 'professione', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Altro', 'altro'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : ''
                },
                'fact': {
                  'id' : '043',
                  'value': 'agente segreto'
                }
              }
            },
            'inviato da': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Consulenza',
                  'Medico curante',
                  'Specialista',
                  'Decisione del paziente',
                  'DEA'
                ],
                'sorting': 'lex' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '05',
                'value': 'Specialista'
              }
            },
            'medico curante': {
              'view': {
                'type': 'text-input'
              },
              'type': {
                'fact-type': 'textual'
              },
              'fact': {
                'id': '06', // questo è l'id con cui il fact è persistito sul DB credo
                'value': 'Topo Gigio'
                }
            }
          },
          'Caratterizzazione cefalea': {
            'view': {
              'type': 'table'
            },
            'id': '2',
            'PROVA _ CEFALEA': {
              'view': {
                'type': 'std-input'
              },
              'type': {
                'fact-type': 'quantitative'
              },
              'fact': {
                'id': '01', // questo è l'id con cui il fact è persistito sul DB credo
                'value': '1'
                }
            },
            'stato-civile': {
              'view': {
                'type': 'container'
              },

              'stato civile': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Celibe/Nubile',
                    'Coniugato/a',
                    'Divorziato/a',
                    'Separato/a',
                    'Vedovo/a'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id': '011',
                  'value': 'Celibe/Nubile'
                }
              },
              'tempo': {
                'view': {
                  'type': 'conditional-input',
                  'link': 'stato civile', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Divorziato/a', 'Separato/a'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'quantitative',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '012',
                  'value': ''
                }
              }
            },
            'scolarità': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Elementare',
                  'Media inf.',
                  'Media sup.',
                  'Laurea',
                  'Barriera linguistica'
                ],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '02',
                'value': 'Laurea'
              }
            },
            'figli': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '03',
                'value': '2'
              }
            },
            'professione': {
              'view': {
                'type': 'container'
              },
              'professione': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Dipendente',
                    'Autonomo',
                    'Disoccupato',
                    'Nuovo lavoro',
                    'Altro'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id' : '041',
                  'value': 'Altro'
                }
              },
              'tempo': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': '10'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'conditional-input', // dovrebbe essere conditional e textual, per ora è solo input conditional
                  'link': 'professione', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Altro', 'altro'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : ''
                },
                'fact': {
                  'id' : '043',
                  'value': 'agente segreto'
                }
              }
            },
            'inviato da': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Consulenza',
                  'Medico curante',
                  'Specialista',
                  'Decisione del paziente',
                  'DEA'
                ],
                'sorting': 'lex' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '05',
                'value': 'Specialista'
              }
            },
            'medico curante': {
              'view': {
                'type': 'text-input'
              },
              'type': {
                'fact-type': 'textual'
              },
              'fact': {
                'id': '06', // questo è l'id con cui il fact è persistito sul DB credo
                'value': 'Topo Gigio'
                }
            }
          },
          'Esame obiettivo': {
            'view': {
              'type': 'table'
            },
            'id': '3',
            'PROVA _ Esame obiettivo': {
              'view': {
                'type': 'std-input'
              },
              'type': {
                'fact-type': 'quantitative'
              },
              'fact': {
                'id': '01', // questo è l'id con cui il fact è persistito sul DB credo
                'value': '1'
                }
            },
            'stato-civile': {
              'view': {
                'type': 'container'
              },

              'stato civile': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Celibe/Nubile',
                    'Coniugato/a',
                    'Divorziato/a',
                    'Separato/a',
                    'Vedovo/a'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id': '011',
                  'value': 'Celibe/Nubile'
                }
              },
              'tempo': {
                'view': {
                  'type': 'conditional-input',
                  'link': 'stato civile', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Divorziato/a', 'Separato/a'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'quantitative',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '012',
                  'value': ''
                }
              }
            },
            'scolarità': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Elementare',
                  'Media inf.',
                  'Media sup.',
                  'Laurea',
                  'Barriera linguistica'
                ],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '02',
                'value': 'Laurea'
              }
            },
            'figli': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '03',
                'value': '2'
              }
            },
            'professione': {
              'view': {
                'type': 'container'
              },
              'professione': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Dipendente',
                    'Autonomo',
                    'Disoccupato',
                    'Nuovo lavoro',
                    'Altro'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id' : '041',
                  'value': 'Altro'
                }
              },
              'tempo': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': '10'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'conditional-input', // dovrebbe essere conditional e textual, per ora è solo input conditional
                  'link': 'professione', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Altro', 'altro'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : ''
                },
                'fact': {
                  'id' : '043',
                  'value': 'agente segreto'
                }
              }
            },
            'inviato da': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Consulenza',
                  'Medico curante',
                  'Specialista',
                  'Decisione del paziente',
                  'DEA'
                ],
                'sorting': 'lex' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '05',
                'value': 'Specialista'
              }
            },
            'medico curante': {
              'view': {
                'type': 'text-input'
              },
              'type': {
                'fact-type': 'textual'
              },
              'fact': {
                'id': '06', // questo è l'id con cui il fact è persistito sul DB credo
                'value': 'Topo Gigio'
                }
            }
          },
          'Esami effettuati': {
            'view': {
              'type': 'table'
            },
            'id': '4',
            'PROVA _ Esami effettuati': {
              'view': {
                'type': 'std-input'
              },
              'type': {
                'fact-type': 'quantitative'
              },
              'fact': {
                'id': '01', // questo è l'id con cui il fact è persistito sul DB credo
                'value': '1'
                }
            },
            'stato-civile': {
              'view': {
                'type': 'container'
              },

              'stato civile': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Celibe/Nubile',
                    'Coniugato/a',
                    'Divorziato/a',
                    'Separato/a',
                    'Vedovo/a'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id': '011',
                  'value': 'Celibe/Nubile'
                }
              },
              'tempo': {
                'view': {
                  'type': 'conditional-input',
                  'link': 'stato civile', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Divorziato/a', 'Separato/a'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'quantitative',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '012',
                  'value': ''
                }
              }
            },
            'scolarità': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Elementare',
                  'Media inf.',
                  'Media sup.',
                  'Laurea',
                  'Barriera linguistica'
                ],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '02',
                'value': 'Laurea'
              }
            },
            'figli': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '03',
                'value': '2'
              }
            },
            'professione': {
              'view': {
                'type': 'container'
              },
              'professione': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Dipendente',
                    'Autonomo',
                    'Disoccupato',
                    'Nuovo lavoro',
                    'Altro'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id' : '041',
                  'value': 'Altro'
                }
              },
              'tempo': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': '10'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'conditional-input', // dovrebbe essere conditional e textual, per ora è solo input conditional
                  'link': 'professione', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Altro', 'altro'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : ''
                },
                'fact': {
                  'id' : '043',
                  'value': 'agente segreto'
                }
              }
            },
            'inviato da': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Consulenza',
                  'Medico curante',
                  'Specialista',
                  'Decisione del paziente',
                  'DEA'
                ],
                'sorting': 'lex' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '05',
                'value': 'Specialista'
              }
            },
            'medico curante': {
              'view': {
                'type': 'text-input'
              },
              'type': {
                'fact-type': 'textual'
              },
              'fact': {
                'id': '06', // questo è l'id con cui il fact è persistito sul DB credo
                'value': 'Topo Gigio'
                }
            }
          },
          'Terapia effettuata': {
            'view': {
              'type': 'table'
            },
            'id': '5',
            'PROVA _ terapiaEffettuata': {
              'view': {
                'type': 'std-input'
              },
              'type': {
                'fact-type': 'quantitative'
              },
              'fact': {
                'id': '01', // questo è l'id con cui il fact è persistito sul DB credo
                'value': '1'
                }
            },
            'stato-civile': {
              'view': {
                'type': 'container'
              },

              'stato civile': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Celibe/Nubile',
                    'Coniugato/a',
                    'Divorziato/a',
                    'Separato/a',
                    'Vedovo/a'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id': '011',
                  'value': 'Celibe/Nubile'
                }
              },
              'tempo': {
                'view': {
                  'type': 'conditional-input',
                  'link': 'stato civile', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Divorziato/a', 'Separato/a'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'quantitative',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '012',
                  'value': ''
                }
              }
            },
            'scolarità': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Elementare',
                  'Media inf.',
                  'Media sup.',
                  'Laurea',
                  'Barriera linguistica'
                ],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '02',
                'value': 'Laurea'
              }
            },
            'figli': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '03',
                'value': '2'
              }
            },
            'professione': {
              'view': {
                'type': 'container'
              },
              'professione': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Dipendente',
                    'Autonomo',
                    'Disoccupato',
                    'Nuovo lavoro',
                    'Altro'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id' : '041',
                  'value': 'Altro'
                }
              },
              'tempo': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': '10'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'conditional-input', // dovrebbe essere conditional e textual, per ora è solo input conditional
                  'link': 'professione', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Altro', 'altro'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : ''
                },
                'fact': {
                  'id' : '043',
                  'value': 'agente segreto'
                }
              }
            },
            'inviato da': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Consulenza',
                  'Medico curante',
                  'Specialista',
                  'Decisione del paziente',
                  'DEA'
                ],
                'sorting': 'lex' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '05',
                'value': 'Specialista'
              }
            },
            'medico curante': {
              'view': {
                'type': 'text-input'
              },
              'type': {
                'fact-type': 'textual'
              },
              'fact': {
                'id': '06', // questo è l'id con cui il fact è persistito sul DB credo
                'value': 'Topo Gigio'
                }
            }
          },
          'Diagnosi': {
            'view': {
              'type': 'table'
            },
            'id': '6',
            'PROVA _ diagnosi': {
              'view': {
                'type': 'std-input'
              },
              'type': {
                'fact-type': 'quantitative'
              },
              'fact': {
                'id': '01', // questo è l'id con cui il fact è persistito sul DB credo
                'value': '1'
                }
            },
            'stato-civile': {
              'view': {
                'type': 'container'
              },

              'stato civile': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Celibe/Nubile',
                    'Coniugato/a',
                    'Divorziato/a',
                    'Separato/a',
                    'Vedovo/a'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id': '011',
                  'value': 'Celibe/Nubile'
                }
              },
              'tempo': {
                'view': {
                  'type': 'conditional-input',
                  'link': 'stato civile', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Divorziato/a', 'Separato/a'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'quantitative',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '012',
                  'value': ''
                }
              }
            },
            'scolarità': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Elementare',
                  'Media inf.',
                  'Media sup.',
                  'Laurea',
                  'Barriera linguistica'
                ],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '02',
                'value': 'Laurea'
              }
            },
            'figli': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '03',
                'value': '2'
              }
            },
            'professione': {
              'view': {
                'type': 'container'
              },
              'professione': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Dipendente',
                    'Autonomo',
                    'Disoccupato',
                    'Nuovo lavoro',
                    'Altro'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id' : '041',
                  'value': 'Altro'
                }
              },
              'tempo': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': '10'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'conditional-input', // dovrebbe essere conditional e textual, per ora è solo input conditional
                  'link': 'professione', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Altro', 'altro'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : ''
                },
                'fact': {
                  'id' : '043',
                  'value': 'agente segreto'
                }
              }
            },
            'inviato da': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Consulenza',
                  'Medico curante',
                  'Specialista',
                  'Decisione del paziente',
                  'DEA'
                ],
                'sorting': 'lex' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '05',
                'value': 'Specialista'
              }
            },
            'medico curante': {
              'view': {
                'type': 'text-input'
              },
              'type': {
                'fact-type': 'textual'
              },
              'fact': {
                'id': '06', // questo è l'id con cui il fact è persistito sul DB credo
                'value': 'Topo Gigio'
                }
            }
          },
          'Terapia consigliata': {
            'view': {
              'type': 'table'
            },
            'id': '7',
            'PROVA _ TerapiaConsigliata': {
              'view': {
                'type': 'std-input'
              },
              'type': {
                'fact-type': 'quantitative'
              },
              'fact': {
                'id': '01', // questo è l'id con cui il fact è persistito sul DB credo
                'value': '1'
                }
            },
            'stato-civile': {
              'view': {
                'type': 'container'
              },

              'stato civile': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Celibe/Nubile',
                    'Coniugato/a',
                    'Divorziato/a',
                    'Separato/a',
                    'Vedovo/a'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id': '011',
                  'value': 'Celibe/Nubile'
                }
              },
              'tempo': {
                'view': {
                  'type': 'conditional-input',
                  'link': 'stato civile', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Divorziato/a', 'Separato/a'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'quantitative',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '012',
                  'value': ''
                }
              }
            },
            'scolarità': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Elementare',
                  'Media inf.',
                  'Media sup.',
                  'Laurea',
                  'Barriera linguistica'
                ],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '02',
                'value': 'Laurea'
              }
            },
            'figli': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '03',
                'value': '2'
              }
            },
            'professione': {
              'view': {
                'type': 'container'
              },
              'professione': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Dipendente',
                    'Autonomo',
                    'Disoccupato',
                    'Nuovo lavoro',
                    'Altro'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id' : '041',
                  'value': 'Altro'
                }
              },
              'tempo': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': '10'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'conditional-input', // dovrebbe essere conditional e textual, per ora è solo input conditional
                  'link': 'professione', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Altro', 'altro'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : ''
                },
                'fact': {
                  'id' : '043',
                  'value': 'agente segreto'
                }
              }
            },
            'inviato da': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Consulenza',
                  'Medico curante',
                  'Specialista',
                  'Decisione del paziente',
                  'DEA'
                ],
                'sorting': 'lex' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '05',
                'value': 'Specialista'
              }
            },
            'medico curante': {
              'view': {
                'type': 'text-input'
              },
              'type': {
                'fact-type': 'textual'
              },
              'fact': {
                'id': '06', // questo è l'id con cui il fact è persistito sul DB credo
                'value': 'Topo Gigio'
                }
            }
          },
          'Indagini consigliate': {
            'view': {
              'type': 'table'
            },
            'id': '8',
            'PROVA _ IndaginiConsigliate': {
              'view': {
                'type': 'std-input'
              },
              'type': {
                'fact-type': 'quantitative'
              },
              'fact': {
                'id': '01', // questo è l'id con cui il fact è persistito sul DB credo
                'value': '1'
                }
            },
            'stato-civile': {
              'view': {
                'type': 'container'
              },

              'stato civile': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Celibe/Nubile',
                    'Coniugato/a',
                    'Divorziato/a',
                    'Separato/a',
                    'Vedovo/a'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id': '011',
                  'value': 'Celibe/Nubile'
                }
              },
              'tempo': {
                'view': {
                  'type': 'conditional-input',
                  'link': 'stato civile', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Divorziato/a', 'Separato/a'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'quantitative',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '012',
                  'value': ''
                }
              }
            },
            'scolarità': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Elementare',
                  'Media inf.',
                  'Media sup.',
                  'Laurea',
                  'Barriera linguistica'
                ],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '02',
                'value': 'Laurea'
              }
            },
            'figli': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '03',
                'value': '2'
              }
            },
            'professione': {
              'view': {
                'type': 'container'
              },
              'professione': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Dipendente',
                    'Autonomo',
                    'Disoccupato',
                    'Nuovo lavoro',
                    'Altro'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id' : '041',
                  'value': 'Altro'
                }
              },
              'tempo': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': '10'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'conditional-input', // dovrebbe essere conditional e textual, per ora è solo input conditional
                  'link': 'professione', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Altro', 'altro'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : ''
                },
                'fact': {
                  'id' : '043',
                  'value': 'agente segreto'
                }
              }
            },
            'inviato da': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Consulenza',
                  'Medico curante',
                  'Specialista',
                  'Decisione del paziente',
                  'DEA'
                ],
                'sorting': 'lex' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '05',
                'value': 'Specialista'
              }
            },
            'medico curante': {
              'view': {
                'type': 'text-input'
              },
              'type': {
                'fact-type': 'textual'
              },
              'fact': {
                'id': '06', // questo è l'id con cui il fact è persistito sul DB credo
                'value': 'Topo Gigio'
                }
            }
          },
          'Lettera finale': {
            'view': {
              'type': 'table'
            },
            'id': '9',
            'PROVA _ LetteraFinale': {
              'view': {
                'type': 'std-input'
              },
              'type': {
                'fact-type': 'quantitative'
              },
              'fact': {
                'id': '01', // questo è l'id con cui il fact è persistito sul DB credo
                'value': '1'
                }
            },
            'stato-civile': {
              'view': {
                'type': 'container'
              },

              'stato civile': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Celibe/Nubile',
                    'Coniugato/a',
                    'Divorziato/a',
                    'Separato/a',
                    'Vedovo/a'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id': '011',
                  'value': 'Celibe/Nubile'
                }
              },
              'tempo': {
                'view': {
                  'type': 'conditional-input',
                  'link': 'stato civile', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Divorziato/a', 'Separato/a'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'quantitative',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '012',
                  'value': ''
                }
              }
            },
            'scolarità': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Elementare',
                  'Media inf.',
                  'Media sup.',
                  'Laurea',
                  'Barriera linguistica'
                ],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '02',
                'value': 'Laurea'
              }
            },
            'figli': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                'sorting': 'as-is' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '03',
                'value': '2'
              }
            },
            'professione': {
              'view': {
                'type': 'container'
              },
              'professione': {
                'view': {
                  'type': 'combo-input'
                },
                'type': {
                  'values': [
                    'Dipendente',
                    'Autonomo',
                    'Disoccupato',
                    'Nuovo lavoro',
                    'Altro'
                  ],
                  'sorting': 'as-is' // se lessicografico o com'è passato
                },
                'fact': {
                  'id' : '041',
                  'value': 'Altro'
                }
              },
              'tempo': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': '10'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'conditional-input', // dovrebbe essere conditional e textual, per ora è solo input conditional
                  'link': 'professione', // l'idea è che deve rimandare ad un sibling già parsato
                  'values': ['Altro', 'altro'] // valori per cui l'input è mostrato
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : ''
                },
                'fact': {
                  'id' : '043',
                  'value': 'agente segreto'
                }
              }
            },
            'inviato da': {
              'view': {
                'type': 'combo-input'
              },
              'type': {
                'values': [
                  'Consulenza',
                  'Medico curante',
                  'Specialista',
                  'Decisione del paziente',
                  'DEA'
                ],
                'sorting': 'lex' // se lessicografico o com'è passato
              },
              'fact': {
                'id' : '05',
                'value': 'Specialista'
              }
            },
            'medico curante': {
              'view': {
                'type': 'text-input'
              },
              'type': {
                'fact-type': 'textual'
              },
              'fact': {
                'id': '06', // questo è l'id con cui il fact è persistito sul DB credo
                'value': 'Topo Gigio'
                }
            }
          }
      }
    }
  }
}; */

