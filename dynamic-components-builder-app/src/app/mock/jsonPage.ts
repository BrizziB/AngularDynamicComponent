export const JSONPage = { // qui c'è da rivedere un po' come strutturare questo json
  'pagina': {
    'type': 'container',
    'id': '0',
    'riassunto-visita': { // corrispondere al composite type iniziale
      'type': 'tabbed-panel',
      'id': '00',
      'pagine': {
          'type' : 'views',

          'Anagrafica': {
            'type': 'table',
            'id': '0',

            'numero-cartella': {
              'type': 'std-input',
              'value': '1',
              'fact': {
                'id': '',
                'value': ''
                }
            },
            'stato-civile': {
              'type': 'container',
              'stato civile': {
                'type': 'combo-input',
                'values': [
                  'Celibe/Nubile',
                  'Coniugato/a',
                  'Divorziato/a',
                  'Separato/a',
                  'Vedovo/a'
                ],
                'fact': {
                  'id': '',
                  'value': ''
                }
              },
              'tempo': {
                'type': 'std-input',
                'value': '2 anni'
              }
            },
            'scolarità': {
              'type': 'combo-input',
                'values': [
                  'Elementare',
                  'Media inf.',
                  'Media sup.',
                  'Laurea',
                  'Barriera linguistica'
                ]
            },
            'figli': {
              'type': 'combo-input',
                'values': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
            },
            'professione': {
              'type': 'container',
              'professione': {
                'type': 'combo-input',
                  'values': [
                    'Dipendente',
                    'Autonomo',
                    'Disoccupato',
                    'Nuovo lavoro',
                    'Altro'
                  ]
              },
              'professione (altro)': {
                'type': 'std-input',
                'value': 'NO'
              },
              'tempo': {
                'type': 'std-input',
                'value': '8 anni'
              }
            },
            'inviato da': {
              'type': 'combo-input',
                'values': [
                  'Consulenza',
                  'Medico curante',
                  'Specialista',
                  'Decisione del paziente',
                  'DEA'
                ]
            },
            'medico curante': {
              'type': 'std-input',
              'value': 'mamma Ebe'
            }
          },
          'Anamnesi': {
            'type': 'table',
            'id': '1',
            'numero-ANAMNESI': {
              'type': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Caratterizzazione cefalea': {
            'type': 'table',
            'id': '2',
            'numero-DIAGNOSI': {
              'type': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Esame obiettivo': {
            'type': 'table',
            'id': '3',
            'numero-TERAPIA': {
              'type': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Esami effettuati': {
            'type': 'table',
            'id': '4',
            'numero-TERAPIA': {
              'type': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Terapia effettuata': {
            'type': 'table',
            'id': '5',
            'numero-TERAPIA': {
              'type': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Diagnosi': {
            'type': 'table',
            'id': '6',
            'numero-TERAPIA': {
              'type': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Terapia consigliata': {
            'type': 'table',
            'id': '7',
            'numero-TERAPIA': {
              'type': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Indagini consigliate': {
            'type': 'table',
            'id': '8',
            'numero-TERAPIA': {
              'type': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'std-input',
              'value': 'pistacchio'
            },
          },
          'Lettera finale': {
            'type': 'table',
            'id': '9',
            'numero-TERAPIA': {
              'type': 'std-input',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'std-input',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'std-input',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'std-input',
              'value': 'pistacchio'
            },
          }
      }
    }
  }
};































/* export const JSONPage = { // qui c'è da rivedere un po' come strutturare questo json
  'div': {
    'type': 'plain',
    'div': {
      'type': 'nav',
       'contained-divs': [
        {
          'type': 'plain',
          'leaf': {
            'type' : 'text',
            'value': 'scheda1'
          }
        },
        {
          'type': 'plain',
          'leaf': {
            'type' : 'text',
            'value': 'scheda2'
          }
        },
        {
          'type': 'plain',
          'leaf': {
            'type' : 'text',
            'value': 'scheda3'
          }
        }
      ]
    }
  },
  'leaf': {
    'type': 'text',
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



