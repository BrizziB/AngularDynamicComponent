// view e type devono essere sufficienti per generare il componente
// se il fact è già instanziato ed avvalorato si vede da 'fact' in cui è riportato valore e id de fact


export const JSONPage = { // qui c'è da rivedere un po' come strutturare questo json
  'pagina': {
    'view': {
      'type': 'container'
    },
    'id': '0',

    'riassunto-visita': { // corrispondere al composite type iniziale
      'view': {
        'type': 'tabbed-panel'
      },
      'content': {
          'view' : {
            'type': 'tabs'
          },

          'Anagrafica': {
            'view': {
              'type': 'table'
            },
            'id': '0',
            'numero-cartella': {
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
                  'value': 'Coniugato/a'
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
                  'value': '2'
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
                  'value': 'Dipendente'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': ''
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
                  'id' : '043',
                  'value': '8'
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
            'numero Anamnesi': {
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
                  'value': 'Coniugato/a'
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
                  'value': '2'
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
                  'value': 'Dipendente'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': ''
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
                  'id' : '043',
                  'value': '8'
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
            'Caratterizzazione Cefalea': {
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
                  'value': 'Coniugato/a'
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
                  'value': '2'
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
                  'value': 'Dipendente'
                }
              },
              'professione(altro)': {
                'view': {
                  'type': 'std-input'
                },
                'type': {
                  'fact-type': 'textual',
                  'suffix' : 'anno/i'
                },
                'fact': {
                  'id' : '042',
                  'value': ''
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
                  'id' : '043',
                  'value': '8'
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
          /* ,
          'Esame obiettivo': {
            'view': 'table',
            'id': '3',
            'numero-TERAPIA': {
              'view': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'view': 'container',

              'stato civile': {
                'view': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'view': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'view': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Esami effettuati': {
            'view': 'table',
            'id': '4',
            'numero-TERAPIA': {
              'view': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'view': 'container',

              'stato civile': {
                'view': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'view': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'view': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Terapia effettuata': {
            'view': 'table',
            'id': '5',
            'numero-TERAPIA': {
              'view': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'view': 'container',

              'stato civile': {
                'view': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'view': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'view': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Diagnosi': {
            'view': 'table',
            'id': '6',
            'numero-TERAPIA': {
              'view': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'view': 'container',

              'stato civile': {
                'view': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'view': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'view': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Terapia consigliata': {
            'view': 'table',
            'id': '7',
            'numero-TERAPIA': {
              'view': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'view': 'container',

              'stato civile': {
                'view': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'view': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'view': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Indagini consigliate': {
            'view': 'table',
            'id': '8',
            'numero-TERAPIA': {
              'view': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'view': 'container',

              'stato civile': {
                'view': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'view': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'view': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Lettera finale': {
            'view': 'table',
            'id': '9',
            'numero-TERAPIA': {
              'view': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'view': 'container',

              'stato civile': {
                'view': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'view': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'view': 'std-input',
              'value': 'pistacchio'
            },
          } */
      }
    }
  }
};































/* export const JSONPage = { // qui c'è da rivedere un po' come strutturare questo json
  'div': {
    'view': 'plain',
    'div': {
      'view': 'nav',
       'contained-divs': [
        {
          'view': 'plain',
          'leaf': {
            'view' : 'text',
            'value': 'scheda1'
          }
        },
        {
          'view': 'plain',
          'leaf': {
            'view' : 'text',
            'value': 'scheda2'
          }
        },
        {
          'view': 'plain',
          'leaf': {
            'view' : 'text',
            'value': 'scheda3'
          }
        }
      ]
    }
  },
  'leaf': {
    'view': 'text',
    'value': 'prova'
  }
}; */


/* export const JSONPage = {
  'p': 'TITOLO',
  'divx': {
    'p1': 'subtitle',
    'p2': 'text',
    'div': {
      'p': 'text',
      'div': {},
      'p1': 'subtitle',
      'p2': 'text',
    },
    'p': 'WATA'
  },
  'div': {
    'div': {
    'p1': 'subtitle',
    'p2': 'text',
    'div': {
      'p': 'text'
    },
    'p': 'WATA'
  }
  }
}; */



