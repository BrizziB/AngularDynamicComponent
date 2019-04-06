export const JSONPage = { // qui c'è da rivedere un po' come strutturare questo json
  'pagina': {
    'type': 'page',
    'id': '0',
    'riassunto-visita': { // corrispondere al composite type iniziale
      'type': 'tabbed-panel',
      'id': '00',
      'views': {
          'type' : 'views',
          'anagrafica': {
            'id': '01',
            'numero-cartella': {
              'type': 'output-text',
              'numero cartella': '1'
            },
            'stato-civile': {
              'type': 'output-text',
              'stato civile': 'celibe'
            },
            'gelato-preferito': {
              'type': 'output-text',
              'gelato preferito': 'pistacchio'
            },
          },

          'anamnesi': {
            'id': '02',
            'descriz-anamnesi': 'prova2',
            'altre-info': 'altra-prova2'
          },

          'diagnosi': {
            'id': '03',
            'diagnosi corrente': 'prova3',
            'altre-info': 'altra-prova3'
          },

          'terapia': {
            'id': '04',
            'descriz-terapia': 'prova4',
            'altre-info': 'altra-prova4'
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



