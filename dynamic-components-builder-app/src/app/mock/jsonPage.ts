// view e type devono essere sufficienti per generare il componente  ' pagina': {

// se il fact è già instanziato ed avvalorato si vede da 'fact' in cui è riportato valore e id de fact

export const JSONPage = {
  personaProva: {
    'box_2c8d22b5-1942-44b9-a09a-549a0515f7bf': {
      view: {
        type: 'box',
        id: 'null',
        label: 'personaProva'
      },
      'grid_3ece7b82-114e-4d8d-a16d-9120f895bfde': {
        view: {
          type: 'container',
          id: '3ece7b82-114e-4d8d-a16d-9120f895bfde',
          label: ''
        },
        'grid_8bf1eb5f-724e-4d6d-9c03-1457a1dd9e48': {
          view: {
            type: 'container',
            id: '8bf1eb5f-724e-4d6d-9c03-1457a1dd9e48',
            label: ''
          },
          Nome: {
            view: {
              type: 'input-text'
            },
            type: {
              'fact-type': 'TextualFactImpl',
              required: 'false'
            },
            fact: {
              id: 'null',
              value: 'hzlgbijamopehkvfpnz'
            }
          }
        },
        'grid_3f397518-a443-4863-86a0-e7e3377d0b2e': {
          view: {
            type: 'container',
            id: '3f397518-a443-4863-86a0-e7e3377d0b2e',
            label: ''
          },
          Cognome: {
            view: {
              type: 'input-text'
            },
            type: {
              'fact-type': 'TextualFactImpl',
              required: 'false'
            },
            fact: {
              id: 'null',
              value: 'bunn'
            }
          }
        },
        'grid_a56eb687-bee1-434e-a783-4e1c266d170a': {
          view: {
            type: 'container',
            id: 'a56eb687-bee1-434e-a783-4e1c266d170a',
            label: ''
          },
          Sesso: {
            view: {
              type: 'combo-input'
            },
            type: {
              'fact-type': 'QualitativeFactImpl',
              required: 'false',
              values: ['F', 'M'],
              sorting: 'as-is'
            },
            fact: {
              id: 'null',
              value: 'F'
            }
          }
        },
        'grid_d16dde0a-433b-4531-aff6-7a9debf6b957': {
          view: {
            type: 'container',
            id: 'd16dde0a-433b-4531-aff6-7a9debf6b957',
            label: ''
          },
          'grid_a9746324-875d-4db1-805d-c5ec40e7f5af': {
            view: {
              type: 'composite-container',
              id: 'a9746324-875d-4db1-805d-c5ec40e7f5af',
              label: 'Peso'
            },
            Peso_0: {
              view: {
                type: 'std-input'
              },
              type: {
                'fact-type': 'QuantitativeFactImpl',
                required: 'false'
              },
              fact: {
                id: 'null',
                value: '38.0'
              }
            },
            Peso_1: {
              view: {
                type: 'combo-input'
              },
              type: {
                'fact-type': 'QuantitativeFactImpl',
                required: 'false',
                values: ['kg'],
                sorting: 'as-is'
              },
              fact: {
                id: 'null',
                value: 'kg'
              }
            }
          }
        },
        'box_1c1d323f-4229-4d50-983f-48de46969ab5': {
          view: {
            type: 'box',
            id: 'null',
            label: 'Indirizzo'
          },
          'grid_2129e3df-17c1-46bd-8cd6-a4f771bcadc3': {
            view: {
              type: 'container',
              id: '2129e3df-17c1-46bd-8cd6-a4f771bcadc3',
              label: 'Indirizzo'
            },
            'grid_12a7c772-58f2-4b84-8d03-304a6f34f917': {
              view: {
                type: 'container',
                id: '12a7c772-58f2-4b84-8d03-304a6f34f917',
                label: ''
              },
              Via: {
                view: {
                  type: 'input-text'
                },
                type: {
                  'fact-type': 'TextualFactImpl',
                  required: 'false'
                },
                fact: {
                  id: 'null',
                  value: 'mva'
                }
              }
            },
            'grid_38691aab-2d85-4fc8-97cc-d6d1a0e78ab0': {
              view: {
                type: 'container',
                id: '38691aab-2d85-4fc8-97cc-d6d1a0e78ab0',
                label: ''
              },
              Civico: {
                view: {
                  type: 'input-text'
                },
                type: {
                  'fact-type': 'TextualFactImpl',
                  required: 'false'
                },
                fact: {
                  id: 'null',
                  value: 'wtpsufo'
                }
              }
            }
          }
        }
      }
    }
  }
};

/* export const JSONPage = {'Cartella Elettronica Cefalee v1.9': {

  'box_da6f83cf-714b-409b-b30f-8f83fee23131' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Cartella Elettronica Cefalee v1.9'
 },
  'grid_39c7b454-fc53-4af3-943d-225305ec77c4' : {
 'view': {
  'type': 'container',
  'id': '39c7b454-fc53-4af3-943d-225305ec77c4',
 'label': ''
 },
  'box_a97c0476-c86f-46bb-98c8-0ab1f1f1eb41' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Anagrafica'
 },
  'grid_af3ecc63-fba9-4446-af6c-453b65e1814a' : {
 'view': {
  'type': 'container',
  'id': 'af3ecc63-fba9-4446-af6c-453b65e1814a',
 'label': 'Anagrafica'
 },
  'grid_6812d9cd-9da7-476f-acb6-b2eb6582ea80' : {
 'view': {
  'type': 'container',
  'id': '6812d9cd-9da7-476f-acb6-b2eb6582ea80',
 'label': ''
 },
  'grid_fe4f7377-0a0d-4620-9857-2a205f46acb5' : {
 'view': {
  'type': 'composite-container',
  'id': 'fe4f7377-0a0d-4620-9857-2a205f46acb5',
 'label': 'Numero cartella'
 },
  'Numero cartella_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '31.0'
                 }
  },
  'Numero cartella_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': ''
                   }

  },
  },
  },
  'box_1cef9204-883c-4c97-b7d1-669a36069d4d' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Stato civile'
 },
  'grid_e086dcc5-d466-42c4-9417-e3c695f1c58d' : {
 'view': {
  'type': 'container',
  'id': 'e086dcc5-d466-42c4-9417-e3c695f1c58d',
 'label': 'Stato civile'
 },
  'grid_d7f225aa-0890-46ef-88e2-ef0cab657480' : {
 'view': {
  'type': 'container',
  'id': 'd7f225aa-0890-46ef-88e2-ef0cab657480',
 'label': ''
 },
  'Stato civile' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Celibe/Nubile',
 'Coniugato/a',
 'Divorziato/a',
 'Separato/a',
 'Vedovo/a',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Coniugato/a'
                   }

  },
  },
  'grid_34d9b5cb-e9d1-483d-bdeb-461576af112b' : {
 'view': {
  'type': 'container',
  'id': '34d9b5cb-e9d1-483d-bdeb-461576af112b',
 'label': ''
 },
  'Da quanto tempo?' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'TemporalFactImpl',
                   'required' : 'false',
                   'suffix' : 'anno/i'
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'Wed May 15 23:33:40 CEST 2019'
                 }
  },
  },
  },
  },
  'grid_28da2ac6-4052-4f61-835b-2f8123d4779b' : {
 'view': {
  'type': 'container',
  'id': '28da2ac6-4052-4f61-835b-2f8123d4779b',
 'label': ''
 },
  'Scolarità' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Elementare',
 'Media inf.',
 'Media sup.',
 'Laurea',
 'Barriera linguistica',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Barriera linguistica'
                   }

  },
  },
  'grid_02eec510-78a4-4803-964b-c4b169b60088' : {
 'view': {
  'type': 'container',
  'id': '02eec510-78a4-4803-964b-c4b169b60088',
 'label': ''
 },
  'Figli' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '0',
 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7',
 '8',
 '9',
 '10',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '5'
                   }

  },
  },
  'box_6f710c3c-1a7c-417c-84c5-7a689c0ab96c' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Professione'
 },
  'grid_c5048053-fe82-458f-ae01-b8d1bce6e1cc' : {
 'view': {
  'type': 'container',
  'id': 'c5048053-fe82-458f-ae01-b8d1bce6e1cc',
 'label': 'Professione'
 },
  'grid_91e5ab8b-4f21-462e-afc2-505c65c876a4' : {
 'view': {
  'type': 'container',
  'id': '91e5ab8b-4f21-462e-afc2-505c65c876a4',
 'label': ''
 },
  'Professione' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Dipendente',
 'Autonomo',
 'Disoccupato',
 'Nuovo lavoro',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Altro'
                   }

  },
  },
  'grid_02ce52cd-8329-4146-9e59-c2ec5047dc15' : {
 'view': {
  'type': 'container',
  'id': '02ce52cd-8329-4146-9e59-c2ec5047dc15',
 'label': ''
 },
  'Professione (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'hqgyoqvaqjzaw'
                 }
  },
  },
  'grid_fa7b677c-bf2f-4a7b-84b0-f776cb707869' : {
 'view': {
  'type': 'container',
  'id': 'fa7b677c-bf2f-4a7b-84b0-f776cb707869',
 'label': ''
 },
  'Da quanto tempo?' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'TemporalFactImpl',
                   'required' : 'false',
                   'suffix' : 'anno/i'
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'Wed May 15 23:33:40 CEST 2019'
                 }
  },
  },
  },
  },
  'grid_1bcda6f7-fd2c-40d3-9222-8ceb8cbef46e' : {
 'view': {
  'type': 'container',
  'id': '1bcda6f7-fd2c-40d3-9222-8ceb8cbef46e',
 'label': ''
 },
  'Inviato da' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Consulenza',
 'DEA',
 'Decisione del paziente',
 'Medico curante',
 'Specialista',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Specialista'
                   }

  },
  },
  'grid_b1efe33e-60c3-4146-9e61-0c21adec9ea3' : {
 'view': {
  'type': 'container',
  'id': 'b1efe33e-60c3-4146-9e61-0c21adec9ea3',
 'label': ''
 },
  'Medico curante' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'ldjprleuzhlzluwqvplw'
                 }
  },
  },
  },
  },
  'box_fbac29cc-0ab3-4584-9e14-eb343d121cc5' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Anamnesi'
 },
  'grid_07221b9c-5bbd-4703-8805-4e6b9a25d138' : {
 'view': {
  'type': 'container',
  'id': '07221b9c-5bbd-4703-8805-4e6b9a25d138',
 'label': 'Anamnesi'
 },
  'box_4609c627-7601-4c85-a0dc-a6eac971b44a' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Anamnesi fisiologica'
 },
  'grid_2480630c-3b59-4d4a-9b41-f93e794aed68' : {
 'view': {
  'type': 'container',
  'id': '2480630c-3b59-4d4a-9b41-f93e794aed68',
 'label': 'Anamnesi fisiologica'
 },
  'grid_aa12c0b8-8cf7-4858-b993-2578650f7593' : {
 'view': {
  'type': 'container',
  'id': 'aa12c0b8-8cf7-4858-b993-2578650f7593',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'qxafolxuhm'
                 }
  },
  },
  'box_758520c5-033e-4902-b9a5-f4accd94edd7' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Menarca'
 },
  'grid_6a39b767-7405-42fa-b541-5bf99fb20216' : {
 'view': {
  'type': 'container',
  'id': '6a39b767-7405-42fa-b541-5bf99fb20216',
 'label': 'Menarca'
 },
  'grid_9fe74071-0ad7-4ca1-8f71-8314940f1b8a' : {
 'view': {
  'type': 'container',
  'id': '9fe74071-0ad7-4ca1-8f71-8314940f1b8a',
 'label': ''
 },
  'Menarca' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'No'
                   }

  },
  },
  'grid_1ebfeb2e-f1fe-4960-8cb8-ee9f9388147a' : {
 'view': {
  'type': 'container',
  'id': '1ebfeb2e-f1fe-4960-8cb8-ee9f9388147a',
 'label': ''
 },
  'grid_0d51397d-4d3d-4286-844d-3c5735acca37' : {
 'view': {
  'type': 'composite-container',
  'id': '0d51397d-4d3d-4286-844d-3c5735acca37',
 'label': 'Età?'
 },
  'Età?_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '26.0'
                 }
  },
  'Età?_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'anni',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'anni'
                   }

  },
  },
  },
  },
  },
  'box_53f90c99-3a43-44ec-a827-5be58e93b155' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Menopausa'
 },
  'grid_2989806a-bc57-41c7-9d70-af11cab5938a' : {
 'view': {
  'type': 'container',
  'id': '2989806a-bc57-41c7-9d70-af11cab5938a',
 'label': 'Menopausa'
 },
  'grid_cf1d99fc-bff2-4065-9d00-6eeb7370ac1a' : {
 'view': {
  'type': 'container',
  'id': 'cf1d99fc-bff2-4065-9d00-6eeb7370ac1a',
 'label': ''
 },
  'Menopausa' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'No'
                   }

  },
  },
  'grid_96629a87-d250-4e30-876f-68e4c11f707a' : {
 'view': {
  'type': 'container',
  'id': '96629a87-d250-4e30-876f-68e4c11f707a',
 'label': ''
 },
  'grid_192f543e-b088-4c7b-942c-50ac24136048' : {
 'view': {
  'type': 'composite-container',
  'id': '192f543e-b088-4c7b-942c-50ac24136048',
 'label': 'Età?'
 },
  'Età?_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '61.0'
                 }
  },
  'Età?_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'anni',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'anni'
                   }

  },
  },
  },
  },
  },
  'box_7d0ad99e-9dc3-4c20-83a8-d12423ca6d64' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Gravidanze'
 },
  'grid_dc3a4d36-6889-4d68-9386-927644f065ad' : {
 'view': {
  'type': 'container',
  'id': 'dc3a4d36-6889-4d68-9386-927644f065ad',
 'label': 'Gravidanze'
 },
  'grid_bfab938d-5c07-47f1-9005-fc4574d8859f' : {
 'view': {
  'type': 'container',
  'id': 'bfab938d-5c07-47f1-9005-fc4574d8859f',
 'label': ''
 },
  'Gravidanze' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_25a18054-17d7-408b-a769-fc02b0fd3ad0' : {
 'view': {
  'type': 'container',
  'id': '25a18054-17d7-408b-a769-fc02b0fd3ad0',
 'label': ''
 },
  'Quante?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '1',
 '2',
 '3',
 '4',
 '5',
 '>5',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '4'
                   }

  },
  },
  },
  },
  'box_b682a01c-a693-4f2f-ae17-f757c5142a4f' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Aborti'
 },
  'grid_925bbace-09e7-41eb-a2e0-30cd076e35a6' : {
 'view': {
  'type': 'container',
  'id': '925bbace-09e7-41eb-a2e0-30cd076e35a6',
 'label': 'Aborti'
 },
  'grid_1366bbbf-ce2d-410a-a811-f3885c20ce78' : {
 'view': {
  'type': 'container',
  'id': '1366bbbf-ce2d-410a-a811-f3885c20ce78',
 'label': ''
 },
  'Aborti' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'No'
                   }

  },
  },
  'grid_c2cf5682-da92-43f0-8590-47f507c0f832' : {
 'view': {
  'type': 'container',
  'id': 'c2cf5682-da92-43f0-8590-47f507c0f832',
 'label': ''
 },
  'Quanti?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '1',
 '2',
 '3',
 '4',
 '5',
 '>5',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '>5'
                   }

  },
  },
  },
  },
  'box_0a1f67da-8866-4682-9e53-499110a2bbaf' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Terapia ormonale sostitutiva'
 },
  'grid_febc5e34-ea06-4064-a10a-fc7e06977209' : {
 'view': {
  'type': 'container',
  'id': 'febc5e34-ea06-4064-a10a-fc7e06977209',
 'label': 'Terapia ormonale sostitutiva'
 },
  'grid_19db0d19-87d1-4543-b631-ef724b45b499' : {
 'view': {
  'type': 'container',
  'id': '19db0d19-87d1-4543-b631-ef724b45b499',
 'label': ''
 },
  'Terapia ormonale sostitutiva' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_0c9bbb0d-0aae-4238-9043-9e4e3f408c92' : {
 'view': {
  'type': 'container',
  'id': '0c9bbb0d-0aae-4238-9043-9e4e3f408c92',
 'label': ''
 },
  },
  'grid_733cf358-9c23-4774-afc5-226bdf736f80' : {
 'view': {
  'type': 'container',
  'id': '733cf358-9c23-4774-afc5-226bdf736f80',
 'label': ''
 },
  'Pregressa' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Cefalea peggiorata',
 'Cefalea invariata',
 'Cefalea migliorata',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Cefalea peggiorata'
                   }

  },
  },
  'grid_41ea3553-e989-4fe7-83e7-b82f526481b2' : {
 'view': {
  'type': 'container',
  'id': '41ea3553-e989-4fe7-83e7-b82f526481b2',
 'label': ''
 },
  'Attuale' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Cefalea peggiorata',
 'Cefalea invariata',
 'Cefalea migliorata',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Cefalea peggiorata'
                   }

  },
  },
  },
  },
  'box_ffd97f75-0e3b-4143-b723-4221b8501dd4' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Pillola contraccettiva'
 },
  'grid_9fa3c0cc-09dd-4ff9-88dd-02ae12876a40' : {
 'view': {
  'type': 'container',
  'id': '9fa3c0cc-09dd-4ff9-88dd-02ae12876a40',
 'label': 'Pillola contraccettiva'
 },
  'grid_867cc330-7609-4e6c-88b2-dd2d80bdea50' : {
 'view': {
  'type': 'container',
  'id': '867cc330-7609-4e6c-88b2-dd2d80bdea50',
 'label': ''
 },
  'Pillola contraccettiva' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_e7845238-95e5-48cf-9815-7c9db48afb9d' : {
 'view': {
  'type': 'container',
  'id': 'e7845238-95e5-48cf-9815-7c9db48afb9d',
 'label': ''
 },
  },
  'grid_73966133-9c0b-4316-a1f1-f13a6ac9a5fd' : {
 'view': {
  'type': 'container',
  'id': '73966133-9c0b-4316-a1f1-f13a6ac9a5fd',
 'label': ''
 },
  'Pregressa' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Cefalea peggiorata',
 'Cefalea invariata',
 'Cefalea migliorata',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Cefalea migliorata'
                   }

  },
  },
  'grid_4ec49c59-2756-40a4-920a-37815db35344' : {
 'view': {
  'type': 'container',
  'id': '4ec49c59-2756-40a4-920a-37815db35344',
 'label': ''
 },
  'Attuale' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Cefalea peggiorata',
 'Cefalea invariata',
 'Cefalea migliorata',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Cefalea migliorata'
                   }

  },
  },
  },
  },
  },
  },
  'box_a52970d8-c062-4416-8507-7727ce009a0c' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Anamnesi familiare'
 },
  'grid_9a06fc67-2a15-4ab7-9eec-19bfc7b230ed' : {
 'view': {
  'type': 'container',
  'id': '9a06fc67-2a15-4ab7-9eec-19bfc7b230ed',
 'label': 'Anamnesi familiare'
 },
  'box_bfbee670-b675-482b-8227-42161337973f' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Familiarità per cefalee'
 },
  'grid_36fea5e3-06a2-4eca-bcab-a387e9103252' : {
 'view': {
  'type': 'container',
  'id': '36fea5e3-06a2-4eca-bcab-a387e9103252',
 'label': 'Familiarità per cefalee'
 },
  'grid_91e48123-0b28-4a2b-99b3-de3c86de3a66' : {
 'view': {
  'type': 'container',
  'id': '91e48123-0b28-4a2b-99b3-de3c86de3a66',
 'label': ''
 },
  'Familiarità per cefalee' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'box_c9b51aab-df3d-43c6-8275-045eec12d54f' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Grado di parentela'
 },
  'grid_b3794bde-4008-4481-8fdc-5233cb51625b' : {
 'view': {
  'type': 'container',
  'id': 'b3794bde-4008-4481-8fdc-5233cb51625b',
 'label': 'Grado di parentela'
 },
  'grid_ed0f2774-c407-4314-ab0b-4f8eb8567153' : {
 'view': {
  'type': 'container',
  'id': 'ed0f2774-c407-4314-ab0b-4f8eb8567153',
 'label': ''
 },
  'Grado di parentela' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Padre',
 'Madre',
 'Sorella/Fratello',
 'Nonno/a paterno/a',
 'Nonno/a materno/a',
 'Zio/a paterno/a',
 'Zio/a materno/a',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Padre'
                   }

  },
  },
  'grid_cefbfc14-e9e9-4b01-8177-4a6987730d11' : {
 'view': {
  'type': 'container',
  'id': 'cefbfc14-e9e9-4b01-8177-4a6987730d11',
 'label': ''
 },
  'Grado di parentela (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'faxszdjxrveokrn'
                 }
  },
  },
  },
  },
  },
  },
  'box_07c99c57-60f0-40d2-bf47-4b4d3fc688f9' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Malattie cerebrovascolari'
 },
  'grid_e4531925-12d5-43b2-9f61-9e3b463e651f' : {
 'view': {
  'type': 'container',
  'id': 'e4531925-12d5-43b2-9f61-9e3b463e651f',
 'label': 'Malattie cerebrovascolari'
 },
  'grid_56cbf24d-d372-4688-92e2-8ef1fa14025e' : {
 'view': {
  'type': 'container',
  'id': '56cbf24d-d372-4688-92e2-8ef1fa14025e',
 'label': ''
 },
  'Malattie cerebrovascolari' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_083872ea-03d2-4da4-b8cc-5ba902131029' : {
 'view': {
  'type': 'container',
  'id': '083872ea-03d2-4da4-b8cc-5ba902131029',
 'label': ''
 },
  'Quali?' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'dxmv'
                 }
  },
  },
  },
  },
  'box_203c740d-9164-4ef9-99db-ec968acd2810' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Patologie neurologiche'
 },
  'grid_f48b9528-bff9-4321-a015-486dec60d6dd' : {
 'view': {
  'type': 'container',
  'id': 'f48b9528-bff9-4321-a015-486dec60d6dd',
 'label': 'Patologie neurologiche'
 },
  'grid_5c99666f-dab6-4b3d-b288-22005e6404a4' : {
 'view': {
  'type': 'container',
  'id': '5c99666f-dab6-4b3d-b288-22005e6404a4',
 'label': ''
 },
  'Patologie neurologiche' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'No'
                   }

  },
  },
  'grid_d2113a2c-398a-4f88-8adf-e8dd126af4f2' : {
 'view': {
  'type': 'container',
  'id': 'd2113a2c-398a-4f88-8adf-e8dd126af4f2',
 'label': ''
 },
  'Quali?' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'bxrlrr'
                 }
  },
  },
  },
  },
  'box_94adc144-dfd5-41a9-8f37-b9153969d337' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Patologie psichiatriche'
 },
  'grid_9dfa48e8-8e3a-4005-8746-0440e5c5bef7' : {
 'view': {
  'type': 'container',
  'id': '9dfa48e8-8e3a-4005-8746-0440e5c5bef7',
 'label': 'Patologie psichiatriche'
 },
  'grid_48c0bacb-9cb8-4faa-886f-46b03bed8d33' : {
 'view': {
  'type': 'container',
  'id': '48c0bacb-9cb8-4faa-886f-46b03bed8d33',
 'label': ''
 },
  'Patologie psichiatriche' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'No'
                   }

  },
  },
  'grid_ef83520c-6d1d-4d5c-be89-560fa8f6d341' : {
 'view': {
  'type': 'container',
  'id': 'ef83520c-6d1d-4d5c-be89-560fa8f6d341',
 'label': ''
 },
  'Quali?' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'mncchqvy'
                 }
  },
  },
  },
  },
  'box_b7ace07b-1af1-4ac1-9908-be89d069c363' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Patologie cardiologiche'
 },
  'grid_48f1704b-8293-45a5-b53f-cc017755ef88' : {
 'view': {
  'type': 'container',
  'id': '48f1704b-8293-45a5-b53f-cc017755ef88',
 'label': 'Patologie cardiologiche'
 },
  'grid_603e215b-7024-4f99-b2c5-a3e7877a03dd' : {
 'view': {
  'type': 'container',
  'id': '603e215b-7024-4f99-b2c5-a3e7877a03dd',
 'label': ''
 },
  'Patologie cardiologiche' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_a4bc20b0-9935-4542-8815-82575a58034e' : {
 'view': {
  'type': 'container',
  'id': 'a4bc20b0-9935-4542-8815-82575a58034e',
 'label': ''
 },
  'Quali?' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'gsjr'
                 }
  },
  },
  },
  },
  'box_b1340f90-54ac-4080-9d21-48de976aa268' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Malattie metaboliche'
 },
  'grid_95c61e9b-1058-4a8a-98cd-519a6e2bf35e' : {
 'view': {
  'type': 'container',
  'id': '95c61e9b-1058-4a8a-98cd-519a6e2bf35e',
 'label': 'Malattie metaboliche'
 },
  'grid_9dd4a092-9ae2-4bff-ad23-f33361508056' : {
 'view': {
  'type': 'container',
  'id': '9dd4a092-9ae2-4bff-ad23-f33361508056',
 'label': ''
 },
  'Malattie metaboliche' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_5a18ee4a-46b9-4c24-8407-0b151873031f' : {
 'view': {
  'type': 'container',
  'id': '5a18ee4a-46b9-4c24-8407-0b151873031f',
 'label': ''
 },
  'Quali?' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'zcmjmcsjyxdt'
                 }
  },
  },
  },
  },
  'grid_83f54e60-9a02-4a68-8a50-fef544b55c39' : {
 'view': {
  'type': 'container',
  'id': '83f54e60-9a02-4a68-8a50-fef544b55c39',
 'label': ''
 },
  'Altre patologie' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'g'
                 }
  },
  },
  },
  },
  'box_5369c59f-b322-42e6-ac11-3c9dd0682277' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Anamnesi patologica'
 },
  'grid_09c54de7-cf7d-43dc-8b65-89a01b9bcf55' : {
 'view': {
  'type': 'container',
  'id': '09c54de7-cf7d-43dc-8b65-89a01b9bcf55',
 'label': 'Anamnesi patologica'
 },
  'box_a1898f43-05cc-4e42-8043-9ed90f5d6df1' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Patologie'
 },
  'grid_c6b92eda-8f9c-4bc6-9550-96741d21228b' : {
 'view': {
  'type': 'container',
  'id': 'c6b92eda-8f9c-4bc6-9550-96741d21228b',
 'label': 'Patologie'
 },
  'grid_f612f564-3d16-429c-b452-60846f17353a' : {
 'view': {
  'type': 'container',
  'id': 'f612f564-3d16-429c-b452-60846f17353a',
 'label': ''
 },
  'Patologia' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Allergia',
 'Ansia',
 'Asma',
 'BAV',
 'Calcolosi renale',
 'Depressione maggiore',
 'Diabete mellito',
 'Glaucoma',
 'Insonnia',
 'Ipertensione arteriosa',
 'Sovrappeso/Obesità',
 'Trauma cranico',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Diabete mellito'
                   }

  },
  },
  'grid_73a91d5d-0959-42e0-aa28-d9deff5f8073' : {
 'view': {
  'type': 'container',
  'id': '73a91d5d-0959-42e0-aa28-d9deff5f8073',
 'label': ''
 },
  'Patologia (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'fcbmcm'
                 }
  },
  },
  },
  },
  'box_84e35507-58de-42b8-95c3-0a5614c8e025' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Fumo'
 },
  'grid_1ec8eba6-9c84-436a-be49-ce6cf3305019' : {
 'view': {
  'type': 'container',
  'id': '1ec8eba6-9c84-436a-be49-ce6cf3305019',
 'label': 'Fumo'
 },
  'grid_407d9ae8-cbb4-4d85-9ac8-f75cb4ad8001' : {
 'view': {
  'type': 'container',
  'id': '407d9ae8-cbb4-4d85-9ac8-f75cb4ad8001',
 'label': ''
 },
  'Fumo' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_aa945a4f-d4bc-4301-8e07-3ed5705e9529' : {
 'view': {
  'type': 'container',
  'id': 'aa945a4f-d4bc-4301-8e07-3ed5705e9529',
 'label': ''
 },
  'Quantità/giorno' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<5',
 '<20',
 '>20',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '<20'
                   }

  },
  },
  'grid_5e2a6fca-0923-4291-bfce-0ce7bedf638e' : {
 'view': {
  'type': 'container',
  'id': '5e2a6fca-0923-4291-bfce-0ce7bedf638e',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'nybjwejxpxaulxh'
                 }
  },
  },
  },
  },
  'box_d3d28f24-89b3-4b43-a67a-02b15c31f7b5' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Alcol'
 },
  'grid_64ec1c6f-ca9a-4388-941f-e36d7fb7db03' : {
 'view': {
  'type': 'container',
  'id': '64ec1c6f-ca9a-4388-941f-e36d7fb7db03',
 'label': 'Alcol'
 },
  'grid_b5257f2c-3722-4263-975a-3e58fffd3897' : {
 'view': {
  'type': 'container',
  'id': 'b5257f2c-3722-4263-975a-3e58fffd3897',
 'label': ''
 },
  'Alcol' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_80f8a98e-0ba4-4fde-92ae-c368e5896de6' : {
 'view': {
  'type': 'container',
  'id': '80f8a98e-0ba4-4fde-92ae-c368e5896de6',
 'label': ''
 },
  'Quantità/giorno (bicchieri di vino o equivalenti)' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '1',
 '1-3',
 '>3',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '>3'
                   }

  },
  },
  'grid_228e9b45-c53d-459d-a0be-ab244da23df0' : {
 'view': {
  'type': 'container',
  'id': '228e9b45-c53d-459d-a0be-ab244da23df0',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'qjllvpiwfbzqcmf'
                 }
  },
  },
  },
  },
  'box_10e47c12-c957-43cf-b7ee-17db1bfaa5b1' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Caffè'
 },
  'grid_f265d720-a590-4f04-94fa-e1f243f4a185' : {
 'view': {
  'type': 'container',
  'id': 'f265d720-a590-4f04-94fa-e1f243f4a185',
 'label': 'Caffè'
 },
  'grid_d26f1e5a-b540-45d6-b6e3-587d43a6fc37' : {
 'view': {
  'type': 'container',
  'id': 'd26f1e5a-b540-45d6-b6e3-587d43a6fc37',
 'label': ''
 },
  'Caffè' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_b2c80b9a-0ef2-42e0-bb48-9d96d2fd1047' : {
 'view': {
  'type': 'container',
  'id': 'b2c80b9a-0ef2-42e0-bb48-9d96d2fd1047',
 'label': ''
 },
  'Quantità/giorno' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<3',
 '>3',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '<3'
                   }

  },
  },
  'grid_3b90d0bf-ac8a-4722-8bc6-75d6a438149b' : {
 'view': {
  'type': 'container',
  'id': '3b90d0bf-ac8a-4722-8bc6-75d6a438149b',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'grguvimh'
                 }
  },
  },
  },
  },
  'box_b8651fce-f1a3-4296-880d-d237635dc258' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Altre sostanze'
 },
  'grid_3ce6b6a6-506e-4be0-b8fd-00264b729fd1' : {
 'view': {
  'type': 'container',
  'id': '3ce6b6a6-506e-4be0-b8fd-00264b729fd1',
 'label': 'Altre sostanze'
 },
  'grid_aef114c1-7d77-4364-bb08-fa78138b2e08' : {
 'view': {
  'type': 'container',
  'id': 'aef114c1-7d77-4364-bb08-fa78138b2e08',
 'label': ''
 },
  'Altre sostanze' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_948e0550-5e3a-4898-babb-c09ea4fb8531' : {
 'view': {
  'type': 'container',
  'id': '948e0550-5e3a-4898-babb-c09ea4fb8531',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'ubslqbjpldwdguon'
                 }
  },
  },
  },
  },
  'grid_51a589dc-3734-4d94-b281-68e6a7fe2da6' : {
 'view': {
  'type': 'container',
  'id': '51a589dc-3734-4d94-b281-68e6a7fe2da6',
 'label': ''
 },
  'Sonno' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Regolare',
 'Non regolare',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Regolare'
                   }

  },
  },
  },
  },
  },
  },
  'box_e83d3eea-8da6-4beb-a80a-198b09af1e40' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Caratterizzazione cefalea'
 },
  'grid_bb9959b7-0006-4beb-b949-e1275f39c9a1' : {
 'view': {
  'type': 'container',
  'id': 'bb9959b7-0006-4beb-b949-e1275f39c9a1',
 'label': 'Caratterizzazione cefalea'
 },
  'grid_c0d5bf3d-5f15-44fe-9a17-ee10fb1b3f02' : {
 'view': {
  'type': 'container',
  'id': 'c0d5bf3d-5f15-44fe-9a17-ee10fb1b3f02',
 'label': ''
 },
  'Durata attacco' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '4-72 h',
 '15-180 min',
 '2-30 min',
 '1-600 sec',
 '0.5 h - 7 gg',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '4-72 h'
                   }

  },
  },
  'box_f4f733fd-283c-4539-bbc7-65342562ccd0' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Attacco (4-72 h)'
 },
  'grid_91c69ba4-e107-4359-ba26-6d76a5ff6519' : {
 'view': {
  'type': 'container',
  'id': '91c69ba4-e107-4359-ba26-6d76a5ff6519',
 'label': 'Attacco (4-72 h)'
 },
  'box_40496c5b-745a-46ff-93b7-046392e57aa1' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Cefalea'
 },
  'grid_a2446e6b-3943-4ee1-9abb-7e9e119c7da1' : {
 'view': {
  'type': 'container',
  'id': 'a2446e6b-3943-4ee1-9abb-7e9e119c7da1',
 'label': 'Cefalea'
 },
  'grid_ac7fba07-9e27-4121-bc02-4b67dcce85a2' : {
 'view': {
  'type': 'container',
  'id': 'ac7fba07-9e27-4121-bc02-4b67dcce85a2',
 'label': ''
 },
  'Cefalea' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Aggravata dalla attività fisica',
 'Moderata/Severa',
 'Pulsante',
 'Unilaterale',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Aggravata dalla attività fisica'
                   }

  },
  },
  'grid_4a5c8159-6748-489c-89ce-5436ca420330' : {
 'view': {
  'type': 'container',
  'id': '4a5c8159-6748-489c-89ce-5436ca420330',
 'label': ''
 },
  'Cefalea (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'fwmqnjv'
                 }
  },
  },
  },
  },
  'box_644c061a-6c83-489d-a6a7-221a3774e2be' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Sintomi'
 },
  'grid_902a87d4-c0ec-4b8c-b25c-2ec6ec1276ea' : {
 'view': {
  'type': 'container',
  'id': '902a87d4-c0ec-4b8c-b25c-2ec6ec1276ea',
 'label': 'Sintomi'
 },
  'grid_3c73c418-d045-4437-bc9b-12509427bd73' : {
 'view': {
  'type': 'container',
  'id': '3c73c418-d045-4437-bc9b-12509427bd73',
 'label': ''
 },
  'Sintomi' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Allodinia',
 'Fotofobia/Fonofobia',
 'Nausea/Vomito',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Allodinia'
                   }

  },
  },
  'grid_0ba42e16-edc6-49f3-9155-2371dc03dcec' : {
 'view': {
  'type': 'container',
  'id': '0ba42e16-edc6-49f3-9155-2371dc03dcec',
 'label': ''
 },
  'Sintomi (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'v'
                 }
  },
  },
  },
  },
  'box_1b135d9e-ef49-4319-93bb-c2de18d28f5d' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Aura'
 },
  'grid_40081e55-0246-4f67-b8dd-c5ebb5440c0d' : {
 'view': {
  'type': 'container',
  'id': '40081e55-0246-4f67-b8dd-c5ebb5440c0d',
 'label': 'Aura'
 },
  'grid_0215df38-2864-435f-a6f9-3458227e383e' : {
 'view': {
  'type': 'container',
  'id': '0215df38-2864-435f-a6f9-3458227e383e',
 'label': ''
 },
  'Aura' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'No'
                   }

  },
  },
  'grid_31b81aaf-c893-42b0-9a0f-38e6241f0e87' : {
 'view': {
  'type': 'container',
  'id': '31b81aaf-c893-42b0-9a0f-38e6241f0e87',
 'label': ''
 },
  'Sintomi' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Visivi',
 'Sensitivi',
 'Della parola e/o del linguaggio',
 'Motori',
 'Del tronco cerebrale',
 'Retinici',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Del tronco cerebrale'
                   }

  },
  },
  },
  },
  'box_fcad6613-126d-4df6-8194-324b508387e0' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Localizzazione'
 },
  'grid_6d748cca-d253-4469-aa67-cf3e4d4aa34e' : {
 'view': {
  'type': 'container',
  'id': '6d748cca-d253-4469-aa67-cf3e4d4aa34e',
 'label': 'Localizzazione'
 },
  'grid_fa795959-d353-41b5-bec5-f95f176a49fe' : {
 'view': {
  'type': 'container',
  'id': 'fa795959-d353-41b5-bec5-f95f176a49fe',
 'label': ''
 },
  'Localizzazione iniziale' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Temporale',
 'Frontale',
 'Occipitale',
 'Parietale',
 'Oculare',
 'Auricolare',
 'Zigomatica',
 'Nasale',
 'Orale',
 'Olocranica',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Auricolare'
                   }

  },
  },
  'grid_54f4366a-df4f-4ff4-bced-15d6525e87e5' : {
 'view': {
  'type': 'container',
  'id': '54f4366a-df4f-4ff4-bced-15d6525e87e5',
 'label': ''
 },
  'Diffusione' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Temporale',
 'Frontale',
 'Occipitale',
 'Parietale',
 'Oculare',
 'Auricolare',
 'Zigomatica',
 'Nasale',
 'Orale',
 'Olocranica',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Parietale'
                   }

  },
  },
  },
  },
  'box_387e0364-b0a5-423a-b63a-b21467d19d9c' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Frequenza attacchi'
 },
  'grid_ae01a274-31ca-47a4-a66d-856bc1c5198b' : {
 'view': {
  'type': 'container',
  'id': 'ae01a274-31ca-47a4-a66d-856bc1c5198b',
 'label': 'Frequenza attacchi'
 },
  'grid_5ca397b3-bf66-471a-b5fb-e8e516fc8a64' : {
 'view': {
  'type': 'container',
  'id': '5ca397b3-bf66-471a-b5fb-e8e516fc8a64',
 'label': ''
 },
  'Attacchi di Cefalea/mese' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7',
 '8',
 '9',
 '10',
 '11',
 '12',
 '13',
 '14',
 '15',
 '16',
 '17',
 '18',
 '19',
 '20',
 '21',
 '22',
 '23',
 '24',
 '25',
 '26',
 '27',
 '28',
 '29',
 '30',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '22'
                   }

  },
  },
  'grid_de67c9b5-2804-4bf4-8e4a-7cce906e7992' : {
 'view': {
  'type': 'container',
  'id': 'de67c9b5-2804-4bf4-8e4a-7cce906e7992',
 'label': ''
 },
  'Attacchi di Emicrania/mese' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7',
 '8',
 '9',
 '10',
 '11',
 '12',
 '13',
 '14',
 '15',
 '16',
 '17',
 '18',
 '19',
 '20',
 '21',
 '22',
 '23',
 '24',
 '25',
 '26',
 '27',
 '28',
 '29',
 '30',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '11'
                   }

  },
  },
  'grid_783b8c6d-1157-4856-89b7-37b6fd385475' : {
 'view': {
  'type': 'container',
  'id': '783b8c6d-1157-4856-89b7-37b6fd385475',
 'label': ''
 },
  'Da quanto tempo?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<3 mesi',
 '>3<12 mesi',
 '>1<5 anni',
 '>5 anni',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '>3<12 mesi'
                   }

  },
  },
  },
  },
  'box_f55262d4-6d67-4f74-8821-50f8210f7807' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Età di esordio'
 },
  'grid_415a4169-aa7d-4e23-af07-b16ab7fef79e' : {
 'view': {
  'type': 'container',
  'id': '415a4169-aa7d-4e23-af07-b16ab7fef79e',
 'label': 'Età di esordio'
 },
  'grid_d51c2e5a-c784-4d75-b91c-61d364b92434' : {
 'view': {
  'type': 'container',
  'id': 'd51c2e5a-c784-4d75-b91c-61d364b92434',
 'label': ''
 },
  'grid_c12f3d03-8cc3-456e-8c54-a55d0dede2dd' : {
 'view': {
  'type': 'composite-container',
  'id': 'c12f3d03-8cc3-456e-8c54-a55d0dede2dd',
 'label': 'Età di esordio'
 },
  'Età di esordio_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '9.0'
                 }
  },
  'Età di esordio_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'anni',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'anni'
                   }

  },
  },
  },
  'grid_78100c98-df09-4aff-9f79-fe83eff23337' : {
 'view': {
  'type': 'container',
  'id': '78100c98-df09-4aff-9f79-fe83eff23337',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'mloatrgv'
                 }
  },
  },
  },
  },
  'box_229be8e1-cc73-4e4c-a0bf-85f8e0b0d368' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Uso di sintomatici'
 },
  'grid_4ea6e0df-7fe6-4e3c-89a2-572184e61d15' : {
 'view': {
  'type': 'container',
  'id': '4ea6e0df-7fe6-4e3c-89a2-572184e61d15',
 'label': 'Uso di sintomatici'
 },
  'grid_abc77177-a5e4-4f66-9da8-6c1312fe2c7d' : {
 'view': {
  'type': 'container',
  'id': 'abc77177-a5e4-4f66-9da8-6c1312fe2c7d',
 'label': ''
 },
  'Uso eccessivo' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'No'
                   }

  },
  },
  'box_28cbcd29-84b2-43d5-8503-a0bd50ba6b9f' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Farmaco'
 },
  'grid_cbbcbd83-f137-4e6b-8722-17ee680063d7' : {
 'view': {
  'type': 'container',
  'id': 'cbbcbd83-f137-4e6b-8722-17ee680063d7',
 'label': 'Farmaco'
 },
  'grid_5e3f2140-96d5-46a6-8477-b0267e9d029e' : {
 'view': {
  'type': 'container',
  'id': '5e3f2140-96d5-46a6-8477-b0267e9d029e',
 'label': ''
 },
  },
  'grid_72a5d49c-1c6d-421d-86be-03df4856d736' : {
 'view': {
  'type': 'container',
  'id': '72a5d49c-1c6d-421d-86be-03df4856d736',
 'label': ''
 },
  'grid_fdc6ae85-ab30-403f-a467-c52c10ce63b5' : {
 'view': {
  'type': 'composite-container',
  'id': 'fdc6ae85-ab30-403f-a467-c52c10ce63b5',
 'label': 'Numero di assunzioni al mese'
 },
  'Numero di assunzioni al mese_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '5.0'
                 }
  },
  'Numero di assunzioni al mese_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': ''
                   }

  },
  },
  },
  'grid_94cec30b-231e-4064-b319-1912b2ce860f' : {
 'view': {
  'type': 'container',
  'id': '94cec30b-231e-4064-b319-1912b2ce860f',
 'label': ''
 },
  'Per quanti mesi' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<3 mesi',
 '>3 mesi',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '<3 mesi'
                   }

  },
  },
  },
  },
  'grid_d969f1ee-120b-4233-be54-99a51a26ceb9' : {
 'view': {
  'type': 'container',
  'id': 'd969f1ee-120b-4233-be54-99a51a26ceb9',
 'label': ''
 },
  'Numero di ricoveri/day hospital per disassuefazione' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'da 1 a 10',
 '>10',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '>10'
                   }

  },
  },
  },
  },
  },
  },
  'box_05fcd776-cd53-44bc-9a1b-77060cf9bf80' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Attacco (15-180 min)'
 },
  'grid_8437df23-a5c9-457b-8bce-a10771371b1b' : {
 'view': {
  'type': 'container',
  'id': '8437df23-a5c9-457b-8bce-a10771371b1b',
 'label': 'Attacco (15-180 min)'
 },
  'box_24a596a5-a63e-4e20-baec-75f63785de86' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Cefalea'
 },
  'grid_c61b7a22-0945-4a63-ad17-ef0a00c30111' : {
 'view': {
  'type': 'container',
  'id': 'c61b7a22-0945-4a63-ad17-ef0a00c30111',
 'label': 'Cefalea'
 },
  'grid_9d57eaf8-ca00-41f5-a218-e2f70c4f221d' : {
 'view': {
  'type': 'container',
  'id': '9d57eaf8-ca00-41f5-a218-e2f70c4f221d',
 'label': ''
 },
  'Cefalea' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Severa',
 'Unilaterale (perioculare/temporale)',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Unilaterale (perioculare/temporale)'
                   }

  },
  },
  'grid_b2ec10c6-66a3-4323-86ba-eb02001e9eee' : {
 'view': {
  'type': 'container',
  'id': 'b2ec10c6-66a3-4323-86ba-eb02001e9eee',
 'label': ''
 },
  'Cefalea (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'uttjamutzbwjx'
                 }
  },
  },
  },
  },
  'box_8b9bfc9d-b6d6-4088-b52f-36be6964d794' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Sintomi'
 },
  'grid_4c0322d3-7106-4733-aea4-5f79be45c3d4' : {
 'view': {
  'type': 'container',
  'id': '4c0322d3-7106-4733-aea4-5f79be45c3d4',
 'label': 'Sintomi'
 },
  'grid_206662ed-11ad-4bfa-82ac-78aabdd194c0' : {
 'view': {
  'type': 'container',
  'id': '206662ed-11ad-4bfa-82ac-78aabdd194c0',
 'label': ''
 },
  'Sintomi' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Agitazione motoria',
 'Allodinia',
 'Arrossamento congiuntivale',
 'Congestione nasale/rinorrea',
 'Edema palpebrale',
 'Lacrimazione',
 'Miopsi/Ptosi',
 'Sensazione di orecchio edematoso',
 'Sudorazione/Arrossamento della faccia',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Arrossamento congiuntivale'
                   }

  },
  },
  'grid_dcccc1ca-3dfc-4d90-95d5-d0fb341ecb50' : {
 'view': {
  'type': 'container',
  'id': 'dcccc1ca-3dfc-4d90-95d5-d0fb341ecb50',
 'label': ''
 },
  'Sintomi (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'guubavvpbdbqb'
                 }
  },
  },
  },
  },
  'box_3d8a0d8c-b575-433c-8d29-d54a705999cb' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Localizzazione'
 },
  'grid_75cbe274-e575-4d6a-a902-772c93882cd6' : {
 'view': {
  'type': 'container',
  'id': '75cbe274-e575-4d6a-a902-772c93882cd6',
 'label': 'Localizzazione'
 },
  'grid_aabba382-ab98-45a7-a1e6-d3c0ebaf0c53' : {
 'view': {
  'type': 'container',
  'id': 'aabba382-ab98-45a7-a1e6-d3c0ebaf0c53',
 'label': ''
 },
  'Localizzazione iniziale' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Temporale',
 'Frontale',
 'Occipitale',
 'Parietale',
 'Oculare',
 'Auricolare',
 'Zigomatica',
 'Nasale',
 'Orale',
 'Olocranica',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Oculare'
                   }

  },
  },
  'grid_7ae7e46d-74dc-4ef8-b89a-0765fa1fd78e' : {
 'view': {
  'type': 'container',
  'id': '7ae7e46d-74dc-4ef8-b89a-0765fa1fd78e',
 'label': ''
 },
  'Diffusione' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Temporale',
 'Frontale',
 'Occipitale',
 'Parietale',
 'Oculare',
 'Auricolare',
 'Zigomatica',
 'Nasale',
 'Orale',
 'Olocranica',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Orale'
                   }

  },
  },
  },
  },
  'box_78c74da1-3871-42de-89c2-4924b41a7461' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Frequenza attacchi'
 },
  'grid_8489216b-65a0-4b15-a469-95cdb138a996' : {
 'view': {
  'type': 'container',
  'id': '8489216b-65a0-4b15-a469-95cdb138a996',
 'label': 'Frequenza attacchi'
 },
  'grid_d085a0fa-7be1-4809-a50c-f05f1def2549' : {
 'view': {
  'type': 'container',
  'id': 'd085a0fa-7be1-4809-a50c-f05f1def2549',
 'label': ''
 },
  'Attacchi di Cefalea/giorno' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7',
 '8',
 '9',
 '10',
 '11',
 '12',
 '13',
 '14',
 '15',
 '16',
 '17',
 '18',
 '19',
 '20',
 '21',
 '22',
 '23',
 '24',
 '25',
 '26',
 '27',
 '28',
 '29',
 '30',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '10'
                   }

  },
  },
  'grid_9dbda88f-90c3-4b3a-aa35-193df4eae93e' : {
 'view': {
  'type': 'container',
  'id': '9dbda88f-90c3-4b3a-aa35-193df4eae93e',
 'label': ''
 },
  'Da quanto tempo?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<1 mese',
 '>1<3 mesi',
 '>3 mesi<1 anno',
 '>1 anno con remissioni <3 mesi',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '>1 anno con remissioni <3 mesi'
                   }

  },
  },
  'grid_91f4c6a8-200c-44cc-95f5-55be86c776a2' : {
 'view': {
  'type': 'container',
  'id': '91f4c6a8-200c-44cc-95f5-55be86c776a2',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'bf'
                 }
  },
  },
  },
  },
  'box_16b7400c-1065-4423-8d47-e84ba8972b03' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Età di esordio'
 },
  'grid_c5388203-16d0-44b9-b2e8-b9f1a20dad0e' : {
 'view': {
  'type': 'container',
  'id': 'c5388203-16d0-44b9-b2e8-b9f1a20dad0e',
 'label': 'Età di esordio'
 },
  'grid_59a8f278-bdef-45b1-bf3a-c3cc0bef07fd' : {
 'view': {
  'type': 'container',
  'id': '59a8f278-bdef-45b1-bf3a-c3cc0bef07fd',
 'label': ''
 },
  'grid_0c9dc3c0-71db-41a5-a276-34d0d7b688c1' : {
 'view': {
  'type': 'composite-container',
  'id': '0c9dc3c0-71db-41a5-a276-34d0d7b688c1',
 'label': 'Età di esordio'
 },
  'Età di esordio_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '22.0'
                 }
  },
  'Età di esordio_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'anni',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'anni'
                   }

  },
  },
  },
  'grid_22492ab5-4d1d-4eb3-87d8-f638c0dd0fbf' : {
 'view': {
  'type': 'container',
  'id': '22492ab5-4d1d-4eb3-87d8-f638c0dd0fbf',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'jefnqlqpylprgdiy'
                 }
  },
  },
  },
  },
  'box_2742e482-338b-4857-a628-1e9c936af813' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Uso di sintomatici'
 },
  'grid_9a9a909a-3579-4315-a35a-a930a56d507a' : {
 'view': {
  'type': 'container',
  'id': '9a9a909a-3579-4315-a35a-a930a56d507a',
 'label': 'Uso di sintomatici'
 },
  'grid_f57f5e27-eac9-4aa4-bb88-ef59076194bd' : {
 'view': {
  'type': 'container',
  'id': 'f57f5e27-eac9-4aa4-bb88-ef59076194bd',
 'label': ''
 },
  'Uso eccessivo' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'No'
                   }

  },
  },
  'box_2ce0c423-178e-4c74-a4d9-cc8ed14bd944' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Farmaco'
 },
  'grid_df8ba8b2-c878-4770-90f9-e7045c118227' : {
 'view': {
  'type': 'container',
  'id': 'df8ba8b2-c878-4770-90f9-e7045c118227',
 'label': 'Farmaco'
 },
  'grid_8204320c-6824-4c1b-aa96-2abfcd28c838' : {
 'view': {
  'type': 'container',
  'id': '8204320c-6824-4c1b-aa96-2abfcd28c838',
 'label': ''
 },
  },
  'grid_91c50666-a94e-4f2c-a728-c2d62c9f0eda' : {
 'view': {
  'type': 'container',
  'id': '91c50666-a94e-4f2c-a728-c2d62c9f0eda',
 'label': ''
 },
  'grid_7dc08f9a-dbba-408c-8b56-90a8ac6736c3' : {
 'view': {
  'type': 'composite-container',
  'id': '7dc08f9a-dbba-408c-8b56-90a8ac6736c3',
 'label': 'Numero di assunzioni al mese'
 },
  'Numero di assunzioni al mese_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '31.0'
                 }
  },
  'Numero di assunzioni al mese_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': ''
                   }

  },
  },
  },
  'grid_0526373b-16ef-4ac8-b0b5-7ce97b99d7de' : {
 'view': {
  'type': 'container',
  'id': '0526373b-16ef-4ac8-b0b5-7ce97b99d7de',
 'label': ''
 },
  'Per quanti mesi' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<3 mesi',
 '>3 mesi',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '<3 mesi'
                   }

  },
  },
  },
  },
  'grid_25c0615c-3e32-4141-8c62-dcb3cfb804f5' : {
 'view': {
  'type': 'container',
  'id': '25c0615c-3e32-4141-8c62-dcb3cfb804f5',
 'label': ''
 },
  'Numero di ricoveri/day hospital per disassuefazione' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'da 1 a 10',
 '>10',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'da 1 a 10'
                   }

  },
  },
  },
  },
  },
  },
  'box_2a1ab8f2-f013-419f-8726-c2297f755237' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Attacco (2-30 min)'
 },
  'grid_5888424d-364f-462b-b695-a3dcf35f6d41' : {
 'view': {
  'type': 'container',
  'id': '5888424d-364f-462b-b695-a3dcf35f6d41',
 'label': 'Attacco (2-30 min)'
 },
  'box_53887ac2-55cd-4b66-8326-e84cea06b861' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Cefalea'
 },
  'grid_22c570a9-ddde-4798-9306-583032f84a05' : {
 'view': {
  'type': 'container',
  'id': '22c570a9-ddde-4798-9306-583032f84a05',
 'label': 'Cefalea'
 },
  'grid_c048dd1a-d050-4597-8507-f81c4557d095' : {
 'view': {
  'type': 'container',
  'id': 'c048dd1a-d050-4597-8507-f81c4557d095',
 'label': ''
 },
  'Cefalea' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Severa',
 'Unilaterale (perioculare/temporale)',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Severa'
                   }

  },
  },
  'grid_adc5c477-b887-4d2e-891f-da92a90c6961' : {
 'view': {
  'type': 'container',
  'id': 'adc5c477-b887-4d2e-891f-da92a90c6961',
 'label': ''
 },
  'Cefalea (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'an'
                 }
  },
  },
  },
  },
  'box_486b105a-58af-4b36-9cc7-52bec9cdc1d4' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Sintomi'
 },
  'grid_d1bbb226-4dc3-46c5-8ac2-c3ed0866307c' : {
 'view': {
  'type': 'container',
  'id': 'd1bbb226-4dc3-46c5-8ac2-c3ed0866307c',
 'label': 'Sintomi'
 },
  'grid_4dde7886-b111-4553-a50b-2a254bb4a501' : {
 'view': {
  'type': 'container',
  'id': '4dde7886-b111-4553-a50b-2a254bb4a501',
 'label': ''
 },
  'Sintomi' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Agitazione motoria',
 'Allodinia',
 'Arrossamento congiuntivale',
 'Congestione nasale/rinorrea',
 'Edema palpebrale',
 'Lacrimazione',
 'Miopsi/Ptosi',
 'Sensazione di orecchio edematoso',
 'Sudorazione/Arrossamento della faccia',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Sudorazione/Arrossamento della faccia'
                   }

  },
  },
  'grid_c4403822-38c5-433a-9d38-3ca7887a6ee6' : {
 'view': {
  'type': 'container',
  'id': 'c4403822-38c5-433a-9d38-3ca7887a6ee6',
 'label': ''
 },
  'Sintomi (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'qtgjrfpmrkukukhedzu'
                 }
  },
  },
  },
  },
  'box_0c2533d4-e8a7-4eef-b42b-6a2fef66eba5' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Localizzazione'
 },
  'grid_19f110d0-0998-45f9-a1c8-2d49c2f437fe' : {
 'view': {
  'type': 'container',
  'id': '19f110d0-0998-45f9-a1c8-2d49c2f437fe',
 'label': 'Localizzazione'
 },
  'grid_19c246e6-fc04-40d6-ac39-7c935631056c' : {
 'view': {
  'type': 'container',
  'id': '19c246e6-fc04-40d6-ac39-7c935631056c',
 'label': ''
 },
  'Localizzazione iniziale' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Temporale',
 'Frontale',
 'Occipitale',
 'Parietale',
 'Oculare',
 'Auricolare',
 'Zigomatica',
 'Nasale',
 'Orale',
 'Olocranica',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Zigomatica'
                   }

  },
  },
  'grid_feb1a3e1-ebca-4656-a2ea-af0847c1b646' : {
 'view': {
  'type': 'container',
  'id': 'feb1a3e1-ebca-4656-a2ea-af0847c1b646',
 'label': ''
 },
  'Diffusione' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Temporale',
 'Frontale',
 'Occipitale',
 'Parietale',
 'Oculare',
 'Auricolare',
 'Zigomatica',
 'Nasale',
 'Orale',
 'Olocranica',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Auricolare'
                   }

  },
  },
  },
  },
  'box_747be1cf-5900-4a38-9d8b-421a69a39d21' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Frequenza attacchi'
 },
  'grid_833230c3-a1f6-4672-9b10-c83b2c01968c' : {
 'view': {
  'type': 'container',
  'id': '833230c3-a1f6-4672-9b10-c83b2c01968c',
 'label': 'Frequenza attacchi'
 },
  'grid_aa80f6aa-77c6-42f7-a9a2-b9225960a9e2' : {
 'view': {
  'type': 'container',
  'id': 'aa80f6aa-77c6-42f7-a9a2-b9225960a9e2',
 'label': ''
 },
  'Attacchi di Cefalea/giorno' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7',
 '8',
 '9',
 '10',
 '11',
 '12',
 '13',
 '14',
 '15',
 '16',
 '17',
 '18',
 '19',
 '20',
 '21',
 '22',
 '23',
 '24',
 '25',
 '26',
 '27',
 '28',
 '29',
 '30',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '17'
                   }

  },
  },
  'grid_69ce8d47-1b96-4647-9801-7420e77576ec' : {
 'view': {
  'type': 'container',
  'id': '69ce8d47-1b96-4647-9801-7420e77576ec',
 'label': ''
 },
  'Da quanto tempo?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<1 mese',
 '>1<3 mesi',
 '>3 mesi<1 anno',
 '>1 anno con remissioni <1 mese',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '>1<3 mesi'
                   }

  },
  },
  'grid_05e02553-85d7-4e45-9e23-6e9833ee2e2d' : {
 'view': {
  'type': 'container',
  'id': '05e02553-85d7-4e45-9e23-6e9833ee2e2d',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'hjyxfzlsbiqu'
                 }
  },
  },
  },
  },
  'box_6e8f356f-d055-4de2-9cc1-aad5324fb1a7' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Età di esordio'
 },
  'grid_22eed007-b3e4-443f-870c-eb5166e96b0e' : {
 'view': {
  'type': 'container',
  'id': '22eed007-b3e4-443f-870c-eb5166e96b0e',
 'label': 'Età di esordio'
 },
  'grid_c91e7dcf-c192-4210-8a5b-67dee8928a03' : {
 'view': {
  'type': 'container',
  'id': 'c91e7dcf-c192-4210-8a5b-67dee8928a03',
 'label': ''
 },
  'grid_95d13312-c983-4a19-a8d6-fca02b56b792' : {
 'view': {
  'type': 'composite-container',
  'id': '95d13312-c983-4a19-a8d6-fca02b56b792',
 'label': 'Età di esordio'
 },
  'Età di esordio_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '16.0'
                 }
  },
  'Età di esordio_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'anni',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'anni'
                   }

  },
  },
  },
  'grid_7b29b525-100e-41a2-86de-adcaf784265d' : {
 'view': {
  'type': 'container',
  'id': '7b29b525-100e-41a2-86de-adcaf784265d',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'ggemhfejjh'
                 }
  },
  },
  },
  },
  'box_86576f73-c357-4362-8d13-9abb122d1811' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Uso di sintomatici'
 },
  'grid_2b5c20ca-8b3a-4877-84bb-00e6b72e3ee1' : {
 'view': {
  'type': 'container',
  'id': '2b5c20ca-8b3a-4877-84bb-00e6b72e3ee1',
 'label': 'Uso di sintomatici'
 },
  'grid_4b37a439-8a42-4483-ae5b-b132955306ef' : {
 'view': {
  'type': 'container',
  'id': '4b37a439-8a42-4483-ae5b-b132955306ef',
 'label': ''
 },
  'Uso eccessivo' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'No'
                   }

  },
  },
  'box_d2c7d37f-bd8d-4d76-a774-97a6ac1a397c' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Farmaco'
 },
  'grid_8b320e7f-e182-4847-99a7-2c4f1263a445' : {
 'view': {
  'type': 'container',
  'id': '8b320e7f-e182-4847-99a7-2c4f1263a445',
 'label': 'Farmaco'
 },
  'grid_37e52df0-114d-4455-bb3c-acee9fd76943' : {
 'view': {
  'type': 'container',
  'id': '37e52df0-114d-4455-bb3c-acee9fd76943',
 'label': ''
 },
  },
  'grid_66d545f6-1a6a-4473-98e2-5d5db87e7c5a' : {
 'view': {
  'type': 'container',
  'id': '66d545f6-1a6a-4473-98e2-5d5db87e7c5a',
 'label': ''
 },
  'grid_03d7666a-433f-4e6a-b1e0-4a550948b3ee' : {
 'view': {
  'type': 'composite-container',
  'id': '03d7666a-433f-4e6a-b1e0-4a550948b3ee',
 'label': 'Numero di assunzioni al mese'
 },
  'Numero di assunzioni al mese_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '85.0'
                 }
  },
  'Numero di assunzioni al mese_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': ''
                   }

  },
  },
  },
  'grid_742ee3a8-f01b-4a2c-9bf4-0608d97519a5' : {
 'view': {
  'type': 'container',
  'id': '742ee3a8-f01b-4a2c-9bf4-0608d97519a5',
 'label': ''
 },
  'Per quanti mesi' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<3 mesi',
 '>3 mesi',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '>3 mesi'
                   }

  },
  },
  },
  },
  'grid_1063da91-a09d-451c-84ac-938d7030f64e' : {
 'view': {
  'type': 'container',
  'id': '1063da91-a09d-451c-84ac-938d7030f64e',
 'label': ''
 },
  'Numero di ricoveri/day hospital per disassuefazione' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'da 1 a 10',
 '>10',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '>10'
                   }

  },
  },
  },
  },
  },
  },
  'box_6b0dd385-0635-44df-b21d-dea06a3835e5' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Attacco (1-600 sec)'
 },
  'grid_faeab166-d159-46fc-889f-957e5618002c' : {
 'view': {
  'type': 'container',
  'id': 'faeab166-d159-46fc-889f-957e5618002c',
 'label': 'Attacco (1-600 sec)'
 },
  'box_b29f59b1-1b17-4252-85de-a98cad60f19c' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Cefalea'
 },
  'grid_059a96a7-9241-4c45-b16d-9f321ec8ed54' : {
 'view': {
  'type': 'container',
  'id': '059a96a7-9241-4c45-b16d-9f321ec8ed54',
 'label': 'Cefalea'
 },
  'grid_2da8b9ba-ebd5-44d4-bf67-4be3f7f5e01a' : {
 'view': {
  'type': 'container',
  'id': '2da8b9ba-ebd5-44d4-bf67-4be3f7f5e01a',
 'label': ''
 },
  'Cefalea' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Severa',
 'Unilaterale (perioculare/temporale)',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Altro'
                   }

  },
  },
  'grid_bdeb9eec-aada-4ac9-be9e-9f3b01a70390' : {
 'view': {
  'type': 'container',
  'id': 'bdeb9eec-aada-4ac9-be9e-9f3b01a70390',
 'label': ''
 },
  'Cefalea (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'n'
                 }
  },
  },
  },
  },
  'box_edae8818-d8e9-42b2-8ba5-1d03d16839d3' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Sintomi'
 },
  'grid_dca9306f-c784-46b4-a735-2bb3e8f566bb' : {
 'view': {
  'type': 'container',
  'id': 'dca9306f-c784-46b4-a735-2bb3e8f566bb',
 'label': 'Sintomi'
 },
  'grid_190f173d-5624-4fcb-9bfa-dfd09041071b' : {
 'view': {
  'type': 'container',
  'id': '190f173d-5624-4fcb-9bfa-dfd09041071b',
 'label': ''
 },
  'Sintomi' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Agitazione motoria',
 'Allodinia',
 'Arrossamento congiuntivale',
 'Congestione nasale/rinorrea',
 'Edema palpebrale',
 'Lacrimazione',
 'Miopsi/Ptosi',
 'Sensazione di orecchio edematoso',
 'Sudorazione/Arrossamento della faccia',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Agitazione motoria'
                   }

  },
  },
  'grid_495afdf7-2dd5-4ce9-be45-8a2754e164e2' : {
 'view': {
  'type': 'container',
  'id': '495afdf7-2dd5-4ce9-be45-8a2754e164e2',
 'label': ''
 },
  'Sintomi (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'clevcdeboccynenjihca'
                 }
  },
  },
  },
  },
  'box_1d4b677d-9d83-4b4d-b65a-22b501250e20' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Localizzazione'
 },
  'grid_9986279f-6140-4571-9f9d-87059a61462e' : {
 'view': {
  'type': 'container',
  'id': '9986279f-6140-4571-9f9d-87059a61462e',
 'label': 'Localizzazione'
 },
  'grid_8014c5e3-f693-452f-92b3-7f4fa92cbc1c' : {
 'view': {
  'type': 'container',
  'id': '8014c5e3-f693-452f-92b3-7f4fa92cbc1c',
 'label': ''
 },
  'Localizzazione iniziale' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Temporale',
 'Frontale',
 'Occipitale',
 'Parietale',
 'Oculare',
 'Auricolare',
 'Zigomatica',
 'Nasale',
 'Orale',
 'Olocranica',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Frontale'
                   }

  },
  },
  'grid_e7264c15-b561-4142-8ac8-6a96b29339b1' : {
 'view': {
  'type': 'container',
  'id': 'e7264c15-b561-4142-8ac8-6a96b29339b1',
 'label': ''
 },
  'Diffusione' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Temporale',
 'Frontale',
 'Occipitale',
 'Parietale',
 'Oculare',
 'Auricolare',
 'Zigomatica',
 'Nasale',
 'Orale',
 'Olocranica',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Olocranica'
                   }

  },
  },
  },
  },
  'box_208e42c8-019b-40c5-83a6-406a748b2e7a' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Frequenza attacchi'
 },
  'grid_30b4d95a-57a3-4a71-98f0-49bc9be15e99' : {
 'view': {
  'type': 'container',
  'id': '30b4d95a-57a3-4a71-98f0-49bc9be15e99',
 'label': 'Frequenza attacchi'
 },
  'grid_bd0a7334-3217-479e-af37-1e6d5b453b20' : {
 'view': {
  'type': 'container',
  'id': 'bd0a7334-3217-479e-af37-1e6d5b453b20',
 'label': ''
 },
  'Attacchi di Cefalea/giorno' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7',
 '8',
 '9',
 '10',
 '11',
 '12',
 '13',
 '14',
 '15',
 '16',
 '17',
 '18',
 '19',
 '20',
 '21',
 '22',
 '23',
 '24',
 '25',
 '26',
 '27',
 '28',
 '29',
 '30',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '10'
                   }

  },
  },
  'grid_f0217a85-1615-4712-99c3-b05703188e19' : {
 'view': {
  'type': 'container',
  'id': 'f0217a85-1615-4712-99c3-b05703188e19',
 'label': ''
 },
  'Da quanto tempo?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<1 mese',
 '>1<3 mesi',
 '>3 mesi<1 anno',
 '>1 anno con remissioni <1 mese',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '>1 anno con remissioni <1 mese'
                   }

  },
  },
  'grid_010c65d5-5027-4ebb-91a0-9fe3df079cea' : {
 'view': {
  'type': 'container',
  'id': '010c65d5-5027-4ebb-91a0-9fe3df079cea',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'qhlznofhvhgtbtldg'
                 }
  },
  },
  },
  },
  'box_d2686492-a30c-4a6b-948f-d2195cc6ea39' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Età di esordio'
 },
  'grid_53db427e-0641-4332-949f-d57d33be067f' : {
 'view': {
  'type': 'container',
  'id': '53db427e-0641-4332-949f-d57d33be067f',
 'label': 'Età di esordio'
 },
  'grid_f4a2e21b-e65f-4938-a273-8ea266667860' : {
 'view': {
  'type': 'container',
  'id': 'f4a2e21b-e65f-4938-a273-8ea266667860',
 'label': ''
 },
  'grid_14f9eb15-b77e-4890-8374-6ad730e18294' : {
 'view': {
  'type': 'composite-container',
  'id': '14f9eb15-b77e-4890-8374-6ad730e18294',
 'label': 'Età di esordio'
 },
  'Età di esordio_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '43.0'
                 }
  },
  'Età di esordio_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'anni',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'anni'
                   }

  },
  },
  },
  'grid_f4d28904-e4c2-4b10-9aa9-9bf8537bb4a9' : {
 'view': {
  'type': 'container',
  'id': 'f4d28904-e4c2-4b10-9aa9-9bf8537bb4a9',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'hodip'
                 }
  },
  },
  },
  },
  'box_666fc3f1-6d6b-45e2-917c-49d8205af411' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Uso di sintomatici'
 },
  'grid_fee84ec0-d36a-4eea-bec2-e4c53cf57362' : {
 'view': {
  'type': 'container',
  'id': 'fee84ec0-d36a-4eea-bec2-e4c53cf57362',
 'label': 'Uso di sintomatici'
 },
  'grid_da73b2b1-5fee-43f4-a7d2-51c113453dc0' : {
 'view': {
  'type': 'container',
  'id': 'da73b2b1-5fee-43f4-a7d2-51c113453dc0',
 'label': ''
 },
  'Uso eccessivo' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'box_13c2eee4-da5f-494d-a8d5-ad8298c1f4d7' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Farmaco'
 },
  'grid_a0821ca8-0d68-4422-a418-609f042800eb' : {
 'view': {
  'type': 'container',
  'id': 'a0821ca8-0d68-4422-a418-609f042800eb',
 'label': 'Farmaco'
 },
  'grid_559ee6d8-d56b-4569-8eb2-16d9d21dbf51' : {
 'view': {
  'type': 'container',
  'id': '559ee6d8-d56b-4569-8eb2-16d9d21dbf51',
 'label': ''
 },
  },
  'grid_89316751-e765-4931-b0d8-e6d99d67efef' : {
 'view': {
  'type': 'container',
  'id': '89316751-e765-4931-b0d8-e6d99d67efef',
 'label': ''
 },
  'grid_1a8abb9e-9e71-4f1e-a352-a9f840dccbf7' : {
 'view': {
  'type': 'composite-container',
  'id': '1a8abb9e-9e71-4f1e-a352-a9f840dccbf7',
 'label': 'Numero di assunzioni al mese'
 },
  'Numero di assunzioni al mese_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '61.0'
                 }
  },
  'Numero di assunzioni al mese_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': ''
                   }

  },
  },
  },
  'grid_976ac82b-632a-4a54-b82b-ff9453fd61e3' : {
 'view': {
  'type': 'container',
  'id': '976ac82b-632a-4a54-b82b-ff9453fd61e3',
 'label': ''
 },
  'Per quanti mesi' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<3 mesi',
 '>3 mesi',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '<3 mesi'
                   }

  },
  },
  },
  },
  'grid_76487092-f1e1-43a7-acda-f774356f6c0d' : {
 'view': {
  'type': 'container',
  'id': '76487092-f1e1-43a7-acda-f774356f6c0d',
 'label': ''
 },
  'Numero di ricoveri/day hospital per disassuefazione' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'da 1 a 10',
 '>10',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'da 1 a 10'
                   }

  },
  },
  },
  },
  },
  },
  'box_64011d6b-fba7-4eb7-9337-a0d3b846523e' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Attacco (0.5 h - 7 gg)'
 },
  'grid_d1f690fd-30bc-4f3c-984d-24c8829fde9d' : {
 'view': {
  'type': 'container',
  'id': 'd1f690fd-30bc-4f3c-984d-24c8829fde9d',
 'label': 'Attacco (0.5 h - 7 gg)'
 },
  'box_ee52a799-6d66-400a-accd-9f7a40b7873f' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Cefalea'
 },
  'grid_583fe310-47d3-4740-bf81-1eead06d3542' : {
 'view': {
  'type': 'container',
  'id': '583fe310-47d3-4740-bf81-1eead06d3542',
 'label': 'Cefalea'
 },
  'grid_d46a0189-7f76-4501-adfb-7f7c849a326c' : {
 'view': {
  'type': 'container',
  'id': 'd46a0189-7f76-4501-adfb-7f7c849a326c',
 'label': ''
 },
  'Cefalea' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Bilaterale',
 'Lieve/Moderata',
 'Non aggravata dalla attività fisica',
 'Oppressiva/Gravativa',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Non aggravata dalla attività fisica'
                   }

  },
  },
  'grid_6d3c07e2-f8b2-44c6-90cd-f93709d9d883' : {
 'view': {
  'type': 'container',
  'id': '6d3c07e2-f8b2-44c6-90cd-f93709d9d883',
 'label': ''
 },
  'Cefalea (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'jgszjzibkdbpgfm'
                 }
  },
  },
  },
  },
  'box_1ccd320d-1767-40ff-81b1-70ec8e91c5fb' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Sintomi'
 },
  'grid_8e3f500c-18ad-4dde-892f-60d4e84eb140' : {
 'view': {
  'type': 'container',
  'id': '8e3f500c-18ad-4dde-892f-60d4e84eb140',
 'label': 'Sintomi'
 },
  'grid_1ef0d77f-0b53-4676-b567-f7dd7257ccda' : {
 'view': {
  'type': 'container',
  'id': '1ef0d77f-0b53-4676-b567-f7dd7257ccda',
 'label': ''
 },
  'Sintomi' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Allodinia',
 'Fotofobia/Fonofobia',
 'Nausea/Vomito',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Nausea/Vomito'
                   }

  },
  },
  'grid_e8627b8e-4364-42ec-a74f-f64007d64a42' : {
 'view': {
  'type': 'container',
  'id': 'e8627b8e-4364-42ec-a74f-f64007d64a42',
 'label': ''
 },
  'Sintomi (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'inxamorzinwfcpzqvwt'
                 }
  },
  },
  },
  },
  'box_60e8c797-525f-4a53-bba9-9b7004c44406' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Localizzazione'
 },
  'grid_38bb8893-f693-409e-b48d-a563e8f33f42' : {
 'view': {
  'type': 'container',
  'id': '38bb8893-f693-409e-b48d-a563e8f33f42',
 'label': 'Localizzazione'
 },
  'grid_379e1c0e-b57f-47e0-9af6-301f11e705fe' : {
 'view': {
  'type': 'container',
  'id': '379e1c0e-b57f-47e0-9af6-301f11e705fe',
 'label': ''
 },
  'Localizzazione iniziale' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Temporale',
 'Frontale',
 'Occipitale',
 'Parietale',
 'Oculare',
 'Auricolare',
 'Zigomatica',
 'Nasale',
 'Orale',
 'Olocranica',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Nasale'
                   }

  },
  },
  'grid_44dcc202-1969-4eb6-b570-11d4fca92a7b' : {
 'view': {
  'type': 'container',
  'id': '44dcc202-1969-4eb6-b570-11d4fca92a7b',
 'label': ''
 },
  'Diffusione' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Temporale',
 'Frontale',
 'Occipitale',
 'Parietale',
 'Oculare',
 'Auricolare',
 'Zigomatica',
 'Nasale',
 'Orale',
 'Olocranica',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Orale'
                   }

  },
  },
  },
  },
  'box_4b833365-b758-49d3-9c16-6dc2e88fd1f5' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Frequenza attacchi'
 },
  'grid_6828bc54-c7b3-48df-a6d5-2ab95501d110' : {
 'view': {
  'type': 'container',
  'id': '6828bc54-c7b3-48df-a6d5-2ab95501d110',
 'label': 'Frequenza attacchi'
 },
  'grid_fd923329-ca41-4113-86a8-0d987bc76301' : {
 'view': {
  'type': 'container',
  'id': 'fd923329-ca41-4113-86a8-0d987bc76301',
 'label': ''
 },
  'Attacchi di Cefalea/mese' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7',
 '8',
 '9',
 '10',
 '11',
 '12',
 '13',
 '14',
 '15',
 '16',
 '17',
 '18',
 '19',
 '20',
 '21',
 '22',
 '23',
 '24',
 '25',
 '26',
 '27',
 '28',
 '29',
 '30',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '5'
                   }

  },
  },
  'grid_8aa1552b-905a-49ea-af0a-99c54c743428' : {
 'view': {
  'type': 'container',
  'id': '8aa1552b-905a-49ea-af0a-99c54c743428',
 'label': ''
 },
  'Da quanto tempo?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<3 mesi',
 '>3<12 mesi',
 '>1<5 anni',
 '>5 anni',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '>5 anni'
                   }

  },
  },
  'grid_a552c859-ea7e-47f4-a2c5-841254b274c0' : {
 'view': {
  'type': 'container',
  'id': 'a552c859-ea7e-47f4-a2c5-841254b274c0',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'rj'
                 }
  },
  },
  },
  },
  'box_65dff437-c54b-4076-a31c-80db8c339b12' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Età di esordio'
 },
  'grid_9a091b27-ac45-4f41-a77c-859ad611f4a2' : {
 'view': {
  'type': 'container',
  'id': '9a091b27-ac45-4f41-a77c-859ad611f4a2',
 'label': 'Età di esordio'
 },
  'grid_24c18c0e-fa0d-4f34-974c-4c774b10afb0' : {
 'view': {
  'type': 'container',
  'id': '24c18c0e-fa0d-4f34-974c-4c774b10afb0',
 'label': ''
 },
  'grid_fcd3b207-d883-4f4c-9652-48afa9f49991' : {
 'view': {
  'type': 'composite-container',
  'id': 'fcd3b207-d883-4f4c-9652-48afa9f49991',
 'label': 'Età di esordio'
 },
  'Età di esordio_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '88.0'
                 }
  },
  'Età di esordio_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'anni',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'anni'
                   }

  },
  },
  },
  'grid_257aa62b-a201-448d-a4ce-8adf38953336' : {
 'view': {
  'type': 'container',
  'id': '257aa62b-a201-448d-a4ce-8adf38953336',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'nlesnurdgynamk'
                 }
  },
  },
  },
  },
  'box_832c4d61-ecd7-4078-aa51-525684feba7b' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Uso di sintomatici'
 },
  'grid_3d7bd42f-7ed7-454b-a38e-b99f52bd415d' : {
 'view': {
  'type': 'container',
  'id': '3d7bd42f-7ed7-454b-a38e-b99f52bd415d',
 'label': 'Uso di sintomatici'
 },
  'grid_a324cf5e-1f23-45ee-865f-29646844153d' : {
 'view': {
  'type': 'container',
  'id': 'a324cf5e-1f23-45ee-865f-29646844153d',
 'label': ''
 },
  'Uso eccessivo' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'box_18891bd7-3426-4a4c-ad6e-1a7f10ad41c9' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Farmaco'
 },
  'grid_3888a88c-a4b3-43e2-b0f8-d0c7b9341416' : {
 'view': {
  'type': 'container',
  'id': '3888a88c-a4b3-43e2-b0f8-d0c7b9341416',
 'label': 'Farmaco'
 },
  'grid_1e2696a8-dcff-49bf-b1ba-ad53ca47ec6f' : {
 'view': {
  'type': 'container',
  'id': '1e2696a8-dcff-49bf-b1ba-ad53ca47ec6f',
 'label': ''
 },
  },
  'grid_b522aeb4-9614-48ef-9b78-6f8d303ad142' : {
 'view': {
  'type': 'container',
  'id': 'b522aeb4-9614-48ef-9b78-6f8d303ad142',
 'label': ''
 },
  'grid_ac2f657b-6533-4620-b01a-47bcf12d9f4e' : {
 'view': {
  'type': 'composite-container',
  'id': 'ac2f657b-6533-4620-b01a-47bcf12d9f4e',
 'label': 'Numero di assunzioni al mese'
 },
  'Numero di assunzioni al mese_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '28.0'
                 }
  },
  'Numero di assunzioni al mese_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': ''
                   }

  },
  },
  },
  'grid_ad4d3a91-b7d0-4b20-a717-9c6d3b7784f9' : {
 'view': {
  'type': 'container',
  'id': 'ad4d3a91-b7d0-4b20-a717-9c6d3b7784f9',
 'label': ''
 },
  'Per quanti mesi' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<3 mesi',
 '>3 mesi',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '<3 mesi'
                   }

  },
  },
  },
  },
  'grid_ef71f99d-9e52-42bf-9f5b-a8c01d3db2d2' : {
 'view': {
  'type': 'container',
  'id': 'ef71f99d-9e52-42bf-9f5b-a8c01d3db2d2',
 'label': ''
 },
  'Numero di ricoveri/day hospital per disassuefazione' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'da 1 a 10',
 '>10',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'da 1 a 10'
                   }

  },
  },
  },
  },
  },
  },
  'box_78bf9f81-cf48-4898-b26b-c283260a7cc6' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Attacco (Altro)'
 },
  'grid_8510a107-a15a-415a-86a6-db4a7f83c0f5' : {
 'view': {
  'type': 'container',
  'id': '8510a107-a15a-415a-86a6-db4a7f83c0f5',
 'label': 'Attacco (Altro)'
 },
  'grid_e19d7b65-2a81-4f8b-988d-5a23e8dcb6b1' : {
 'view': {
  'type': 'container',
  'id': 'e19d7b65-2a81-4f8b-988d-5a23e8dcb6b1',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'lzm'
                 }
  },
  },
  },
  },
  },
  },
  'box_02b24569-56be-4abe-a1eb-d8b5a3ee4a99' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Esame obiettivo'
 },
  'grid_9bff3180-686d-4c96-948f-f7a0b48b13f2' : {
 'view': {
  'type': 'container',
  'id': '9bff3180-686d-4c96-948f-f7a0b48b13f2',
 'label': 'Esame obiettivo'
 },
  'box_6877c98b-cc3b-426e-963d-028a08a690e0' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Altezza/Peso/BMI'
 },
  'grid_beec5d86-0140-4e31-8bb9-85136b38a882' : {
 'view': {
  'type': 'container',
  'id': 'beec5d86-0140-4e31-8bb9-85136b38a882',
 'label': 'Altezza/Peso/BMI'
 },
  'grid_26e2b7fc-5ed9-4bbd-b9eb-bebca20b0437' : {
 'view': {
  'type': 'container',
  'id': '26e2b7fc-5ed9-4bbd-b9eb-bebca20b0437',
 'label': ''
 },
  'grid_3586ac03-7c09-4e69-b61e-2e680d4501c4' : {
 'view': {
  'type': 'composite-container',
  'id': '3586ac03-7c09-4e69-b61e-2e680d4501c4',
 'label': 'Altezza'
 },
  'Altezza_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '4.0'
                 }
  },
  'Altezza_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'cm',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'cm'
                   }

  },
  },
  },
  'grid_e0fc6aef-f662-47cd-86a6-40e22602606b' : {
 'view': {
  'type': 'container',
  'id': 'e0fc6aef-f662-47cd-86a6-40e22602606b',
 'label': ''
 },
  'grid_8b15c6e2-d61c-4ede-9f06-77e06befbe43' : {
 'view': {
  'type': 'composite-container',
  'id': '8b15c6e2-d61c-4ede-9f06-77e06befbe43',
 'label': 'Peso'
 },
  'Peso_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '74.0'
                 }
  },
  'Peso_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'kg',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'kg'
                   }

  },
  },
  },
  'grid_2bb1b2b1-9af1-47ba-a6a0-fc0af41d7c6d' : {
 'view': {
  'type': 'container',
  'id': '2bb1b2b1-9af1-47ba-a6a0-fc0af41d7c6d',
 'label': ''
 },
  'grid_db11f534-fc50-4a98-8e35-06e24a382cb0' : {
 'view': {
  'type': 'composite-container',
  'id': 'db11f534-fc50-4a98-8e35-06e24a382cb0',
 'label': 'BMI'
 },
  'BMI_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '14.0'
                 }
  },
  'BMI_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'kg/m<sup>2</sup>',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'kg/m<sup>2</sup>'
                   }

  },
  },
  },
  },
  },
  'box_0c6c128f-f515-4676-b6c9-24a4bd7c2c9c' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'PA'
 },
  'grid_ddbcebe3-3769-4794-be77-7b7fad646d5e' : {
 'view': {
  'type': 'container',
  'id': 'ddbcebe3-3769-4794-be77-7b7fad646d5e',
 'label': 'PA'
 },
  'grid_3f84355c-1478-457d-9420-b1b7778f5917' : {
 'view': {
  'type': 'container',
  'id': '3f84355c-1478-457d-9420-b1b7778f5917',
 'label': ''
 },
  'grid_a1c0b7ac-509d-4b79-8d8b-465634b5aa46' : {
 'view': {
  'type': 'composite-container',
  'id': 'a1c0b7ac-509d-4b79-8d8b-465634b5aa46',
 'label': 'PA sistolica'
 },
  'PA sistolica_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '17.0'
                 }
  },
  'PA sistolica_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'mmHg',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'mmHg'
                   }

  },
  },
  },
  'grid_76e00565-2886-457e-b683-10775f8c4cf0' : {
 'view': {
  'type': 'container',
  'id': '76e00565-2886-457e-b683-10775f8c4cf0',
 'label': ''
 },
  'grid_16980cf5-1857-49bf-811b-203aea4c3ca5' : {
 'view': {
  'type': 'composite-container',
  'id': '16980cf5-1857-49bf-811b-203aea4c3ca5',
 'label': 'PA diastolica'
 },
  'PA diastolica_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '94.0'
                 }
  },
  'PA diastolica_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'mmHg',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'mmHg'
                   }

  },
  },
  },
  },
  },
  'grid_c947bd7e-269f-4343-88c0-4f1bf2872827' : {
 'view': {
  'type': 'container',
  'id': 'c947bd7e-269f-4343-88c0-4f1bf2872827',
 'label': ''
 },
  'grid_a110a8ed-1879-4e63-86a1-211729c27c1c' : {
 'view': {
  'type': 'composite-container',
  'id': 'a110a8ed-1879-4e63-86a1-211729c27c1c',
 'label': 'FC'
 },
  'FC_0' : {  				 'view': {
                   'type': 'std-input'
                 },
                 'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': '35.0'
                 }
  },
  'FC_1' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QuantitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'bpm',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'bpm'
                   }

  },
  },
  },
  'box_a2016a07-1ceb-4457-aca0-d0cd7dd61b31' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Esame obiettivo generale'
 },
  'grid_915f0d50-9b3c-4605-bf44-3e120ea46012' : {
 'view': {
  'type': 'container',
  'id': '915f0d50-9b3c-4605-bf44-3e120ea46012',
 'label': 'Esame obiettivo generale'
 },
  'grid_88c61fa4-9638-4380-9fd6-eccbcf4dbcc0' : {
 'view': {
  'type': 'container',
  'id': '88c61fa4-9638-4380-9fd6-eccbcf4dbcc0',
 'label': ''
 },
  'Esame obiettivo generale' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Normale',
 'Alterato',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Alterato'
                   }

  },
  },
  'grid_764c162a-93ff-4cbb-8b5a-2c54501fe15f' : {
 'view': {
  'type': 'container',
  'id': '764c162a-93ff-4cbb-8b5a-2c54501fe15f',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'izcpvcnlrbaagjnqzsqn'
                 }
  },
  },
  },
  },
  'box_8d712f58-9d4a-4e0c-9f6e-fb4b4de9a3ce' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Esame obiettivo neurologico'
 },
  'grid_a2b658de-bf7c-4d7f-a36e-3a01e2a78e6f' : {
 'view': {
  'type': 'container',
  'id': 'a2b658de-bf7c-4d7f-a36e-3a01e2a78e6f',
 'label': 'Esame obiettivo neurologico'
 },
  'grid_da451476-5582-4128-af25-cb3d29076321' : {
 'view': {
  'type': 'container',
  'id': 'da451476-5582-4128-af25-cb3d29076321',
 'label': ''
 },
  'Esame obiettivo neurologico' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Normale',
 'Alterato',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Normale'
                   }

  },
  },
  'grid_d1543b96-51f4-4284-a439-7aac38c937de' : {
 'view': {
  'type': 'container',
  'id': 'd1543b96-51f4-4284-a439-7aac38c937de',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'kwapmsvjaonurkoytq'
                 }
  },
  },
  },
  },
  },
  },
  'box_74680338-c7d7-4c53-a66e-d23e3013a60e' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Esami effettuati'
 },
  'grid_30f186c6-9738-4424-864a-363abf8c3ace' : {
 'view': {
  'type': 'container',
  'id': '30f186c6-9738-4424-864a-363abf8c3ace',
 'label': 'Esami effettuati'
 },
  'box_e78dfd4b-a5c9-4d5b-ad60-ea31d96c3c46' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Esame'
 },
  'grid_fb30c138-f2dc-4c36-9ee6-3326b79ed18d' : {
 'view': {
  'type': 'container',
  'id': 'fb30c138-f2dc-4c36-9ee6-3326b79ed18d',
 'label': 'Esame'
 },
  'box_8f02c93e-8eff-470e-acd3-63533309bcf8' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Tipo di esame'
 },
  'grid_605c8ce0-6a58-48d2-9aaf-d9e0cb30eef3' : {
 'view': {
  'type': 'container',
  'id': '605c8ce0-6a58-48d2-9aaf-d9e0cb30eef3',
 'label': 'Tipo di esame'
 },
  'grid_25eab387-0538-47f7-8991-65587df5fc83' : {
 'view': {
  'type': 'container',
  'id': '25eab387-0538-47f7-8991-65587df5fc83',
 'label': ''
 },
  'Tipo di esame' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'ECG',
 'Ecocardio',
 'Esami di laboratorio',
 'RMN encefalo',
 'TAC cranio',
 'Visita oculistica',
 'Visita otorino',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'ECG'
                   }

  },
  },
  'grid_2850aaad-192c-44e5-9ad0-5a4fd1f2edbd' : {
 'view': {
  'type': 'container',
  'id': '2850aaad-192c-44e5-9ad0-5a4fd1f2edbd',
 'label': ''
 },
  'Tipo di esame (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'gbqcxhtmmrtyyq'
                 }
  },
  },
  },
  },
  'grid_56d42913-54e0-4f6d-be14-69d87fdbdbb1' : {
 'view': {
  'type': 'container',
  'id': '56d42913-54e0-4f6d-be14-69d87fdbdbb1',
 'label': ''
 },
  'Data' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'nbisuwsfs'
                 }
  },
  },
  'grid_6270daf9-a557-4136-9552-0fb1f01629fd' : {
 'view': {
  'type': 'container',
  'id': '6270daf9-a557-4136-9552-0fb1f01629fd',
 'label': ''
 },
  'Riferisce con data' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'ffwkkbvag'
                 }
  },
  },
  'box_f93e4511-30d5-4202-b39b-2506df498102' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Esito'
 },
  'grid_f9fa8b1c-7195-4cec-8905-66f43f4d4e08' : {
 'view': {
  'type': 'container',
  'id': 'f9fa8b1c-7195-4cec-8905-66f43f4d4e08',
 'label': 'Esito'
 },
  'grid_629dcb49-9d10-427b-8740-f2818fff55af' : {
 'view': {
  'type': 'container',
  'id': '629dcb49-9d10-427b-8740-f2818fff55af',
 'label': ''
 },
  'Esito' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Non normale',
 'Normale',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Normale'
                   }

  },
  },
  'grid_1e97378a-0d7a-49e6-aa3c-e09ddf3a9667' : {
 'view': {
  'type': 'container',
  'id': '1e97378a-0d7a-49e6-aa3c-e09ddf3a9667',
 'label': ''
 },
  'Referto' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'qgcvfjpzzxnuejdkr'
                 }
  },
  },
  },
  },
  },
  },
  },
  },
  'box_3f14f7ae-2254-487e-a420-7d49173a33a6' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Terapia effettuata'
 },
  'grid_c71269ee-84d1-407c-aec2-703fb51fd674' : {
 'view': {
  'type': 'container',
  'id': 'c71269ee-84d1-407c-aec2-703fb51fd674',
 'label': 'Terapia effettuata'
 },
  'box_bd9ee4fa-34f3-4383-ad75-d089920db594' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Terapia in corso per altre patologie'
 },
  'grid_eb7a8b5f-1ef9-49b3-b7ac-874c899ef840' : {
 'view': {
  'type': 'container',
  'id': 'eb7a8b5f-1ef9-49b3-b7ac-874c899ef840',
 'label': 'Terapia in corso per altre patologie'
 },
  'grid_ba87e73a-d0cd-4328-8291-c748c588de50' : {
 'view': {
  'type': 'container',
  'id': 'ba87e73a-d0cd-4328-8291-c748c588de50',
 'label': ''
 },
  },
  'grid_f5dfc579-5bbb-4f50-97b6-6b2549ef7e9b' : {
 'view': {
  'type': 'container',
  'id': 'f5dfc579-5bbb-4f50-97b6-6b2549ef7e9b',
 'label': ''
 },
  'Per quanti mesi?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<1',
 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7',
 '8',
 '9',
 '10',
 '11',
 '12',
 '>12',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '9'
                   }

  },
  },
  'grid_694ff22a-69c2-4831-971d-140210b154d6' : {
 'view': {
  'type': 'container',
  'id': '694ff22a-69c2-4831-971d-140210b154d6',
 'label': ''
 },
  'Dose' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'by'
                 }
  },
  },
  'grid_8a725939-7cb1-46f7-95c8-6f4f0a24ab06' : {
 'view': {
  'type': 'container',
  'id': '8a725939-7cb1-46f7-95c8-6f4f0a24ab06',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'bdthhpml'
                 }
  },
  },
  },
  },
  'box_a5396137-32e3-4468-8111-e9e5cfc22929' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Terapia profilattica'
 },
  'grid_5b7879a2-0043-409f-9ef4-d02bc46785b8' : {
 'view': {
  'type': 'container',
  'id': '5b7879a2-0043-409f-9ef4-d02bc46785b8',
 'label': 'Terapia profilattica'
 },
  'grid_a02eeb3d-e197-4f27-bec5-93f7be469183' : {
 'view': {
  'type': 'container',
  'id': 'a02eeb3d-e197-4f27-bec5-93f7be469183',
 'label': ''
 },
  },
  'grid_75fe59a8-8aed-4830-b9f6-7fdf6968c594' : {
 'view': {
  'type': 'container',
  'id': '75fe59a8-8aed-4830-b9f6-7fdf6968c594',
 'label': ''
 },
  'Per quanti mesi?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<1',
 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7',
 '8',
 '9',
 '10',
 '11',
 '12',
 '>12',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '6'
                   }

  },
  },
  'grid_4040874d-a797-47c2-8880-996352873d32' : {
 'view': {
  'type': 'container',
  'id': '4040874d-a797-47c2-8880-996352873d32',
 'label': ''
 },
  'Dose' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'txqercjpfczpcdjb'
                 }
  },
  },
  'grid_c8a1dfc4-63e8-4f32-8c96-fe95b8d0b179' : {
 'view': {
  'type': 'container',
  'id': 'c8a1dfc4-63e8-4f32-8c96-fe95b8d0b179',
 'label': ''
 },
  'In corso?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_3d59032f-1d53-4be8-9a84-60e3c5f92676' : {
 'view': {
  'type': 'container',
  'id': '3d59032f-1d53-4be8-9a84-60e3c5f92676',
 'label': ''
 },
  'Efficacia' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Si',
 'No',
 'Temporanea',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'box_16746723-9623-4a99-b475-ba9bad375e38' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Effetti collaterali'
 },
  'grid_a98d00e1-b619-46fc-ad4e-98aeed2cc82e' : {
 'view': {
  'type': 'container',
  'id': 'a98d00e1-b619-46fc-ad4e-98aeed2cc82e',
 'label': 'Effetti collaterali'
 },
  'grid_2d2d6b22-4f79-446b-a165-ae84c8ceead8' : {
 'view': {
  'type': 'container',
  'id': '2d2d6b22-4f79-446b-a165-ae84c8ceead8',
 'label': ''
 },
  'Effetti collaterali' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_e1464107-57bb-4c38-bd8a-63d51494e2cf' : {
 'view': {
  'type': 'container',
  'id': 'e1464107-57bb-4c38-bd8a-63d51494e2cf',
 'label': ''
 },
  'Quali?' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'exyynhbordqbydfs'
                 }
  },
  },
  },
  },
  'grid_3da97e37-e8ed-4518-9343-56f742bac2bf' : {
 'view': {
  'type': 'container',
  'id': '3da97e37-e8ed-4518-9343-56f742bac2bf',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'cwyvmxvivymcuinnb'
                 }
  },
  },
  },
  },
  'box_741f5939-ec8a-42b4-933c-505a3ff227b2' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Terapia sintomatica'
 },
  'grid_b4585db0-2625-4e3e-b3b7-6a52488b1e53' : {
 'view': {
  'type': 'container',
  'id': 'b4585db0-2625-4e3e-b3b7-6a52488b1e53',
 'label': 'Terapia sintomatica'
 },
  'grid_3f5a8806-bb22-4f89-a911-ca6746e5a747' : {
 'view': {
  'type': 'container',
  'id': '3f5a8806-bb22-4f89-a911-ca6746e5a747',
 'label': ''
 },
  },
  'grid_706c68fb-7e5a-4682-a59b-89c0fd1ce0d2' : {
 'view': {
  'type': 'container',
  'id': '706c68fb-7e5a-4682-a59b-89c0fd1ce0d2',
 'label': ''
 },
  'Per quanti mesi?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 '<1',
 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7',
 '8',
 '9',
 '10',
 '11',
 '12',
 '>12',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': '5'
                   }

  },
  },
  'grid_02d61405-12f9-4ffa-a699-f4829ad4fec4' : {
 'view': {
  'type': 'container',
  'id': '02d61405-12f9-4ffa-a699-f4829ad4fec4',
 'label': ''
 },
  'Dose' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'lbytyxqatdbfm'
                 }
  },
  },
  'grid_0ad09ce6-8ec2-426b-891b-1c198c5d14ef' : {
 'view': {
  'type': 'container',
  'id': '0ad09ce6-8ec2-426b-891b-1c198c5d14ef',
 'label': ''
 },
  'In corso?' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'No'
                   }

  },
  },
  'grid_2b3e8df0-24b9-4ba9-9f0f-eb7068c51f39' : {
 'view': {
  'type': 'container',
  'id': '2b3e8df0-24b9-4ba9-9f0f-eb7068c51f39',
 'label': ''
 },
  'Efficacia' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Si',
 'No',
 'Temporanea',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'box_f27a5726-e9aa-4060-9a2a-28ec57097987' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Effetti collaterali'
 },
  'grid_f9e219b3-0a92-4bfe-9443-1f95ad2f4162' : {
 'view': {
  'type': 'container',
  'id': 'f9e219b3-0a92-4bfe-9443-1f95ad2f4162',
 'label': 'Effetti collaterali'
 },
  'grid_0e93a456-1ea0-4495-a3ed-0f1f4a9f7fd8' : {
 'view': {
  'type': 'container',
  'id': '0e93a456-1ea0-4495-a3ed-0f1f4a9f7fd8',
 'label': ''
 },
  'Effetti collaterali' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'No',
 'Si',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Si'
                   }

  },
  },
  'grid_315aeb39-eeba-4afd-a3a1-6478a8c62a11' : {
 'view': {
  'type': 'container',
  'id': '315aeb39-eeba-4afd-a3a1-6478a8c62a11',
 'label': ''
 },
  'Quali?' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'qlrdbpohmajwdbfvap'
                 }
  },
  },
  },
  },
  'grid_8e288b21-d3df-49fa-8263-01ff77e6d456' : {
 'view': {
  'type': 'container',
  'id': '8e288b21-d3df-49fa-8263-01ff77e6d456',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'gvzctf'
                 }
  },
  },
  },
  },
  },
  },
  'box_c1aa6088-0930-4ddb-bf1b-4064b51d2741' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Diagnosi'
 },
  'grid_395b545c-c1aa-4702-9b62-cb1994db8675' : {
 'view': {
  'type': 'container',
  'id': '395b545c-c1aa-4702-9b62-cb1994db8675',
 'label': 'Diagnosi'
 },
  'box_d2b9294b-8752-4cfe-ae55-e626128384ab' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Diagnosi'
 },
  'grid_4f06e1c4-68fd-45b8-bfa0-aab88c13c783' : {
 'view': {
  'type': 'container',
  'id': '4f06e1c4-68fd-45b8-bfa0-aab88c13c783',
 'label': 'Diagnosi'
 },
  'grid_ae0fa160-c369-441f-81e5-681746835d17' : {
 'view': {
  'type': 'container',
  'id': 'ae0fa160-c369-441f-81e5-681746835d17',
 'label': ''
 },
  },
  'grid_c744d464-69ce-46d7-9c0a-7ac2616765c3' : {
 'view': {
  'type': 'container',
  'id': 'c744d464-69ce-46d7-9c0a-7ac2616765c3',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'splfuumr'
                 }
  },
  },
  },
  },
  },
  },
  'box_bf7599b3-b495-426a-ab3d-8e97fe0e15e8' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Terapia consigliata'
 },
  'grid_539aa489-9622-439f-a8fe-2c4e72f19173' : {
 'view': {
  'type': 'container',
  'id': '539aa489-9622-439f-a8fe-2c4e72f19173',
 'label': 'Terapia consigliata'
 },
  'box_e7584962-e765-406e-9b39-089f4d65d957' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Terapia profilattica'
 },
  'grid_613dc472-bbb0-4d38-a2ba-5bd5b2b2a58c' : {
 'view': {
  'type': 'container',
  'id': '613dc472-bbb0-4d38-a2ba-5bd5b2b2a58c',
 'label': 'Terapia profilattica'
 },
  'grid_433f2ada-64e0-4fa3-8a5b-49451231d026' : {
 'view': {
  'type': 'container',
  'id': '433f2ada-64e0-4fa3-8a5b-49451231d026',
 'label': ''
 },
  },
  'grid_7e098acd-b529-4c1c-8bb7-92c5dd8347e8' : {
 'view': {
  'type': 'container',
  'id': '7e098acd-b529-4c1c-8bb7-92c5dd8347e8',
 'label': ''
 },
  'Schema posologico' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'stcfr'
                 }
  },
  },
  },
  },
  'box_5c4e6ced-fa9c-4097-a22d-315f95d7a895' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Terapia sintomatica'
 },
  'grid_367cf13e-e0a5-434e-b9e4-b8eeef19a3ab' : {
 'view': {
  'type': 'container',
  'id': '367cf13e-e0a5-434e-b9e4-b8eeef19a3ab',
 'label': 'Terapia sintomatica'
 },
  'grid_64aa4452-5fa0-479d-a2ff-f7423c35ad13' : {
 'view': {
  'type': 'container',
  'id': '64aa4452-5fa0-479d-a2ff-f7423c35ad13',
 'label': ''
 },
  },
  'grid_698ad527-8414-4b1b-ba61-41805968c5ba' : {
 'view': {
  'type': 'container',
  'id': '698ad527-8414-4b1b-ba61-41805968c5ba',
 'label': ''
 },
  'Schema posologico' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'mpkkvmbutblqkrfaw'
                 }
  },
  },
  },
  },
  },
  },
  'box_35596fa2-d63d-4231-8775-9724b75a05ef' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Indagini consigliate'
 },
  'grid_de6232a8-abb0-49c6-bc59-47f2d0df5974' : {
 'view': {
  'type': 'container',
  'id': 'de6232a8-abb0-49c6-bc59-47f2d0df5974',
 'label': 'Indagini consigliate'
 },
  'box_346b1e51-670c-4765-8d2a-fc048f9779f7' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Indagini'
 },
  'grid_1e67b178-2646-464a-b149-e69ccf769c37' : {
 'view': {
  'type': 'container',
  'id': '1e67b178-2646-464a-b149-e69ccf769c37',
 'label': 'Indagini'
 },
  'grid_dc8eb901-9c51-4eda-b9fb-d17ddf484c8f' : {
 'view': {
  'type': 'container',
  'id': 'dc8eb901-9c51-4eda-b9fb-d17ddf484c8f',
 'label': ''
 },
  'Indagini' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'RMN encefalo senza Mdc',
 'RMN encefalo con Mdc',
 'Angio-RMN encefalo senza Mdc',
 'Angio-RMN encefalo con Mdc',
 'TC encefalo',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Altro'
                   }

  },
  },
  'grid_4c2d5c70-5fe1-4521-a1af-c50e36f4888a' : {
 'view': {
  'type': 'container',
  'id': '4c2d5c70-5fe1-4521-a1af-c50e36f4888a',
 'label': ''
 },
  'Indagini (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'akisj'
                 }
  },
  },
  'grid_6b4e3360-0c95-4792-ad2d-d24e9d81e194' : {
 'view': {
  'type': 'container',
  'id': '6b4e3360-0c95-4792-ad2d-d24e9d81e194',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'eegcbtyknmmhgn'
                 }
  },
  },
  },
  },
  'box_d93ac2c3-c271-41ff-9364-94d6a0b9d0c8' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Esami di laboratorio'
 },
  'grid_6f0a3919-4bf4-47e0-af8c-0a9f3decc9bf' : {
 'view': {
  'type': 'container',
  'id': '6f0a3919-4bf4-47e0-af8c-0a9f3decc9bf',
 'label': 'Esami di laboratorio'
 },
  'grid_2293ece1-8616-498e-879a-a33e42f06832' : {
 'view': {
  'type': 'container',
  'id': '2293ece1-8616-498e-879a-a33e42f06832',
 'label': ''
 },
  'Esami di laboratorio' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Esami del sangue di routine',
 'Esami delle urine di routine',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Altro'
                   }

  },
  },
  'grid_2f40c25c-50d7-4ec2-895d-e3722109fce0' : {
 'view': {
  'type': 'container',
  'id': '2f40c25c-50d7-4ec2-895d-e3722109fce0',
 'label': ''
 },
  'Esami di laboratorio (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'mhfllargrfmcxyyvmvq'
                 }
  },
  },
  'grid_62e62715-4c8c-4b25-a213-98168e0237c1' : {
 'view': {
  'type': 'container',
  'id': '62e62715-4c8c-4b25-a213-98168e0237c1',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'hz'
                 }
  },
  },
  },
  },
  'box_9308cd41-c08d-480d-b2f9-62c88b97268f' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Visite'
 },
  'grid_7508c217-5ed9-4a95-9310-5e3c7415e86f' : {
 'view': {
  'type': 'container',
  'id': '7508c217-5ed9-4a95-9310-5e3c7415e86f',
 'label': 'Visite'
 },
  'grid_119f2efc-6d7b-4426-bb6d-cbb2a945295b' : {
 'view': {
  'type': 'container',
  'id': '119f2efc-6d7b-4426-bb6d-cbb2a945295b',
 'label': ''
 },
  'Visite' : {                  'view': {
                     'type': 'combo-input'
                   },
                   'type': {
                   'fact-type': 'QualitativeFactImpl',
                   'required' : 'false',
                     'values': [

 'Cardiologica',
 'Oculistica',
 'ORL',
 'Psichiatrica',
 'Altro',                    ],
                     'sorting': 'as-is'
                   },
                   'fact': {
                     'id': 'null',
                     'value': 'Psichiatrica'
                   }

  },
  },
  'grid_0d7204b7-a168-42ed-a54f-d9cfae78a7e7' : {
 'view': {
  'type': 'container',
  'id': '0d7204b7-a168-42ed-a54f-d9cfae78a7e7',
 'label': ''
 },
  'Visite (Altro)' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'qdbkfvvpd'
                 }
  },
  },
  'grid_573735c8-d633-4d6a-bce0-f7c808542f06' : {
 'view': {
  'type': 'container',
  'id': '573735c8-d633-4d6a-bce0-f7c808542f06',
 'label': ''
 },
  'Note' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'gnhnruzfmj'
                 }
  },
  },
  },
  },
  },
  },
  'box_86e302d4-b354-4818-810b-1bc9fcd9c580' : {
 'view': {
  'type': 'box',
  'id': 'null',
  'label': 'Lettera finale'
 },
  'grid_7216c3e1-cd41-419e-b03b-67bf5e352643' : {
 'view': {
  'type': 'container',
  'id': '7216c3e1-cd41-419e-b03b-67bf5e352643',
 'label': 'Lettera finale'
 },
  'grid_4c971db7-58ed-4c0c-8e04-d4aff22c70c2' : {
 'view': {
  'type': 'container',
  'id': '4c971db7-58ed-4c0c-8e04-d4aff22c70c2',
 'label': ''
 },
  'Lettera finale' : {  				 'view': {
                   'type': 'input-text'
                 },
                 'type': {
                   'fact-type': 'TextualFactImpl',
                   'required' : 'false',
                 },
                 'fact': {
                   'id' : 'null',
                   'value': 'fsb'
                 }
  },
  },
  },
  },
  },
  },
  }
 }; */

/* export const oldJSONPage = {
  'pagina': {
    'view':  {
      'type': 'container'
    },
    'id': '0',

    'riassunto-visita': { // corrispondere al composite type iniziale
      'view': {
        'type': 'tabbed-panel'
      },
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
