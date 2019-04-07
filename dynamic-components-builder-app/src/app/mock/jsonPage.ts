export const JSONPage = { // qui c'è da rivedere un po' come strutturare questo json
  'pagina': {
    'type': 'container',
    'id': '0',
    'riassunto-visita': { // corrispondere al composite type iniziale
      'type': 'tabbed-panel',
      'id': '00',
      'pagine': {
          'type' : 'views',

          'anagrafica': {
            'type': 'table',
            'id': '01',
            'numero-cartella': {
              'type': 'output-text',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'output-text',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'output-text',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'output-text',
              'value': 'pistacchio'
            },
          },
          'anamnesi': {
            'type': 'table',
            'id': '02',
            'numero-ANAMNESI': {
              'type': 'output-text',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'output-text',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'output-text',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'output-text',
              'value': 'pistacchio'
            },
          },
          'diagnosi': {
            'type': 'table',
            'id': '03',
            'numero-DIAGNOSI': {
              'type': 'output-text',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'output-text',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'output-text',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'output-text',
              'value': 'pistacchio'
            },
          },
          'terapia': {
            'type': 'table',
            'id': '04',
            'numero-TERAPIA': {
              'type': 'output-text',
              'value': '1'
            },
            'stato-civile': {
              'type': 'container',

              'stato civile': {
                'type': 'output-text',
                'value': 'coniugato'
              },
              'tempo': {
                'type': 'output-text',
                'value': '2 anni'
              }
            },
            'gelato-preferito': {
              'type': 'output-text',
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



