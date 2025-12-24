import { ref } from 'vue'

export const animales = [
  {
    id: 1,
    route_name: 'Mercado Central',
    start: 'Puerta principal del Mercado central',
    finish: 'Jardín de la Lonja',
    time: 90,
    quiz: {
      question:
        'El pueblo del mar está preocupado: la espada nada sin funda. Este animal has visto en la ruta: ',
      options: [
        { key: 'a', text: '🐟 Pez espada' },
        { key: 'b', text: '🦈 Tiburón martillo' },
        { key: 'c', text: '🪸 Caballito de mar' },
        { key: 'd', text: '🐡 Pez globo' },
      ],
      answer: 'a',
    },
    stops: [
      {
        id: 1,
        name: 'Mercado Central',
        address: 'Placa de la Ciutat de Burges, s/n',
        description:
          "La 'cotorra metálica' es una veleta que corona la cúpula del Mercado Central de Valencia, apodada así por los chismes, a diferencia del 'pardal' de la cercana Iglesia de los Santos Juanes. Además de esta veleta, tenemos otra con un pez espada que corona la parte de mercado con pescadería.",
        links: [],
        location: { lat: 39.47362189872084, lon: -0.3790193628368707 },
        image: '',
      },
      {
        id: 2,
        name: 'La Llotgeta ',
        address: 'Edificio de la Regidoria de Comerç i Abastiments Plaça del Mercat, s/n',
        description:
          'La Llotgeta fue construida entre 1914 y 1928, en un estilo ecléctico con rasgos neomedievales y decoraciones modernistas. En la fachada de La Llotgeta, junto al Mercado Central de València, aparecen varios animales tallados en piedra que tienen significados especiales. Sobre la puerta hay dos leones, que representan fuerza y protección. En las ventanas se ven perros, símbolo de lealtad y confianza. También aparecen pavos reales, que recuerdan la belleza y la sabiduría. En lo alto del edificio hay una veleta con un dragón, un ser fantástico que simboliza energía e imaginación.',
        links: [],
        location: { lat: 39.47406340851044, lon: -0.3787632142442375 },
        image: '',
      },
      {
        id: 3,
        name: 'Iglesia de los Santos Juanes del Mercado',
        address: 'Plaça del Mercat, s/n',
        description:
          'El águila de la veleta — llamada el Pardal de Sant Joan — trae chismes y bromas: la gente cuenta que el águila fue mensajera del evangelista y que recoge la pluma y el tintero para ayudarle a escribir. Además dice la leyenda que hacia allí arriba hacían mirar a sus hijos los padres que vivían en la pobreza, y aprovechaban la maniobra para abandonarlos, con la esperanza de que encontrarían acomodo en algunos de los talleres que acogían los semisótanos a pie de templo. El cordero representa a San Juan Bautista y al Cordero Místico: su leyenda habla del sacrificio y de la protección en la Pascua.',
        links: [
          'https://www.valenciabonita.es/2015/09/23/las-3-veletas-del-mercado-central/',
          'https://www.visitvalencia.com/que-hacer-valencia/cultura-valenciana/monumentos-en-valencia/iglesia-santos-juanes',
        ],
        location: { lat: 39.47423554586549, lon: -0.37933039915009376 },
        image: '',
      },
      {
        id: 4,
        name: 'La Lonja de los Mercaderes de la Seda',
        address: 'Carrer de la Llotja, 2',
        description:
          'La Lonja de los Mercaderes de la Seda es un edificio muy antiguo y lleno de esculturas de animales tallados en piedra. En aquella época, cada animal tenía un significado especial, como si contara una historia. En la puerta principal aparecen perros, que podían representar la fidelidad, pero también la envidia o la lujuria. Cerca está el león, símbolo de fuerza, y el cerdo, que simbolizaba el pecado. Si miras bien, encontrarás más animales: la serpiente (el mal o la muerte), el águila (fuerza y poder), el caracol (pereza), y la tortuga, que simboliza la paciencia. Dentro del edificio aparecen figuras sorprendentes: una mujer cuidando a una arpía, dos lechuzas que representan sabiduría, una rana que toca la flauta, y un lagarto escondido entre las hojas. ¡Os invitamos a completar este animalario gótico buscando más animales!',
        links: [
          'https://viajes.nationalgeographic.com.es/a/curiosidades-secretos-lonja-seda-monumento-valencia-que-esconde-palmeral-piedra_19761',
          'https://es.wikipedia.org/wiki/Lonja_de_la_Seda',
          'https://arteguias.com/palacio/lonjavalencia.htm',
        ],
        location: { lat: 39.474401518745246, lon: -0.37832982985444175 },
        image: '',
      },
    ],
  },
  {
    id: 2,
    route_name: 'Plaza de Ayuntamiento y su entorno',
    start: 'Estación de Renfe',
    finish: 'Plaza de San Vicente',
    time: 60,
    quiz: {
      question:
        '¿Cuál animal es un símbolo de Valencia porque, según cuentan, ayudó hace muchos años a avisar a los soldados al caer la noche de un ataque sorpresa?',
      options: [
        { key: 'a', text: '🦁 León' },
        { key: 'b', text: '🦅 Águila' },
        { key: 'c', text: '🦇 Murciélago' },
        { key: 'd', text: '🐢 Tortuga' },
      ],
      answer: 'c',
    },
    stops: [
      {
        id: 1,
        name: 'Estación del Norte',
        address: 'Carrer de Xàtiva, s/n',
        description:
          'La Estación del Norte en Valencia es un edificio muy antiguo y especial: cuando entras, parece casi un palacio. Fue construida hace más de 100 años, y desde lejos su fachada ya te sorprende. Sobre el reloj grande de la fachada hay una bola de bronce (que representa el mundo), y encima de esa bola hay un águila con las alas abiertas. Ese águila significa la velocidad — perfecta para un edificio de trenes, donde los trenes llegan y se marchan rápido. Además, toda la estación está decorada con cerámicas de colores, mosaicos, dibujos de flores, naranjas, hojas, escudos… todas cosas de Valencia. Eso convierte al edificio en un lugar muy bonito y lleno de arte.',
        links: [
          'https://www.adif.es/w/valencia-nord',
          'https://www.visitvalencia.com/que-hacer-valencia/cultura-valenciana/monumentos-en-valencia/estacion-norte',
        ],
        location: { lat: 39.46606212998297, lon: -0.3776154538122791 },
        image: '',
      },
      {
        id: 2,
        name: 'Edificio de La Unión y el Fénix Español',
        address: 'Carrer de Xàtiva, 13',
        description:
          'El edificio tiene en lo alto una escultura muy llamativa: un joven sentado sobre un águila de alas abiertas. Muchos creían que era un fénix, pero en realidad muestra a Ganímedes, un personaje de la mitología griega que simboliza la juventud eterna. La obra es una réplica hecha por el escultor francés Saint-Marceau y aparece también en otros edificios de España.',
        links: [
          'https://es.wikipedia.org/wiki/Edificio_La_Uni%C3%B3n_y_el_F%C3%A9nix_(Valencia)',
          'https://arquitectosdevalencia.es/arquitectura/edificio-de-la-union-y-el-fenix/',
          'https://valenciaactua.es/edifico-union-y-fenix/',
        ],
        location: { lat: 39.46774160515087, lon: -0.37673764259238557 },
        image: '',
      },
      {
        id: 3,
        name: 'El Edificio de Generali Seguros',
        address: "Plaça de l'Ajuntament",
        description:
          "El Edificio de Generali Seguros está en la Plaça de l'Ajuntament y se ubica entre varias calles importantes. En la parte superior hay un gran león de bronce, símbolo de la compañía de seguros. Aunque el león de Generali normalmente tiene alas, el de Valencia no las tiene. La escultura fue hecha en 1930 por el artista Salvador Arnau y se ve desde lejos por todos los visitantes.",
        links: [],
        location: { lat: 39.46955857391018, lon: -0.3771255865087187 },
        image: '',
      },
      {
        id: 4,
        name: 'Edificio de Correos',
        address: 'Palacio de Correos y Telégrafos de Valencia. Carrer de Correus, 1',
        description:
          'En Valencia hay un edificio muy grande llamado Palacio de Correos y Telégrafos de Valencia, que empezó a construirse en 1915 y se inauguró en 1922. En la calle que toca el edificio hay dos buzones muy especiales: son cabezas de leones de bronce con la boca abierta, preparados para recibir cartas. Estos leones servían para enviar correspondencia dentro de España o al extranjero, y hoy siguen siendo un símbolo del edificio. Además, ese edificio es muy bonito por dentro: tiene una vidriera de colores con escudos de muchas provincias y una gran cúpula de cristal.',
        links: [
          'https://www.visitvalencia.com/que-hacer-valencia/cultura-valenciana/monumentos-en-valencia/edificio-correos',
          'https://www.valencia-cityguide.com/tourist-attractions/monuments/edificio-de-correos.html',
        ],
        location: { lat: 39.4698012170016, lon: -0.375422437362146 },
        image: '',
      },
      {
        id: 5,
        name: 'Ajuntament de València',
        address: "Plaça de l'Ajuntament",
        description:
          'Aquí tienes el texto adaptado para niños de unos 10 años, con información extra sobre el murciélago: en València, en la plaza del Ayuntamiento, hay un escudo muy especial en la fachada. Ese escudo lo hizo el escultor Mariano Benlliure con bronce y mármol. Arriba del escudo hay un murciélago —un “rat-penat”— que representa a la ciudad. Dicen que ese murciélago ayudó hace muchos años a avisar a los soldados al caer la noche de un ataque sorpresa. Gracias a eso, la ciudad se ganó el derecho a usarlo como símbolo de protección.',
        links: [
          'https://www.levante-emv.com/comunitat-valenciana/2024/10/09/muercielago-escudo-jaime-i-valencia-109055714.html',
          'https://www.visitvalencia.com/que-hacer-valencia/cultura-valenciana/escudo-valencia',
        ],
        location: { lat: 39.469803061264635, lon: -0.37709085803094133 },
        image: '',
      },
      {
        id: 6,
        name: 'Fuente de las Tres Gracias',
        address: 'Plaça de Rodrigo Botet',
        description:
          'En València hay una fuente bonita en la Plaça de Rodrigo Botet llamada Fuente de las Tres Gracias. Está hecha de piedra y hierro, y tiene tres estatuas —las Tres Gracias— junto a tres cisnes que nadan en ella. Los cisnes son los protagonistas centrales de la fuente. Esta fuente inspiró un cuento de Vicente Muñoz Puelles titulado Los animales de la ciudad, donde los animales de la ciudad cobran vida en historias mágicas.',
        links: [
          'https://esculturayarte.com/047577/Fuente-de-las-tres-gracias-en-Valencia.html',
          'https://valenciaactua.es/fuente-de-los-patos/',
        ],
        location: { lat: 39.47145905993583, lon: -0.37536901485163876 },
        image: '',
      },
      {
        id: 7,
        name: 'Palacio del Marqués de Dos Aguas (Museo de Cerámica y Artes Suntuarias)',
        address: 'Carrer del Poeta Querol, 2',
        description:
          'En València hay un palacio muy elegante llamado Palacio del Marqués de Dos Aguas — hoy museo — que fue construido en el siglo XVIII. Su puerta principal tiene una fachada de alabastro preciosa, decorada con muchas figuras y animales: hay cabezas de cocodrilos, una serpiente enroscada a hiedra, un león que parece descansar y también leones y águilas en lo alto del tejado. Todos estos animales sirven para adornar el palacio y dar una imagen majestuosa. Además, estos animales aparecen en el cuento Los animales de la ciudad, de Vicente Muñoz Puelles',
        links: ['https://es.wikipedia.org/wiki/Palacio_del_Marqu%C3%A9s_de_Dos_Aguas'],
        location: { lat: 39.47260056029711, lon: -0.3746331643925668 },
        image: '',
      },
      {
        id: 8,
        name: 'Fuente de la Sociedad Económica de Amigos del País',
        address: 'Plaça de Sant Vicent Ferrer',
        description:
          'En València hay una fuente antigua que se llama Fuente de la Sociedad Económica de Amigos del País, en la Plaça de Sant Vicent Ferrer, frente a la iglesia de Santo Tomás y San Felipe Neri. En la base de la fuente hay cuatro cisnes con cuellos largos que echan agua en una taza redonda de piedra. A los lados también hay caras de leones de las que también cae agua.',
        links: [
          'https://cultural.valencia.es/es/escultura/fuente-de-la-sociedad-economica-de-amigos-del-pais/',
          'https://es.wikipedia.org/wiki/Sociedades_econ%C3%B3micas_de_amigos_del_pa%C3%ADs',
        ],
        location: { lat: 39.47384511912638, lon: -0.37250517634316965 },
        image: '',
      },
      {
        id: 9,
        name: 'Calle de las Comedias, 3',
        address: '',
        description:
          'En València, en la dirección Calle de las Comedias 3, hay un edificio de principios del siglo XX con una fachada muy especial. En ella hay dos leones tallados en piedra. Pero lo más sorprendente es un arco decorado con relieves de piedra verde que muestra muchos animales —camellos, elefantes, jabalíes, rinocerontes, ciervos y leones— como si fuera un desfile de animales exóticos alrededor de las puertas. Esa decoración convierte el edificio en algo muy llamativo y diferente, mezclando arte, naturaleza y un poco de fantasía en una calle de la ciudad.',
        links: [],
        location: { lat: 39.47353437905618, lon: -0.3721971389621591 },
        image: '',
      },
    ],
  },
  {
    id: 3,
    route_name: 'La Seu-Sant Martí',
    start: 'Palacio de Benicarló, Cortes Valencianas',
    finish: 'Calle de San Vicente',
    time: 60,
    quiz: {
      question: '¿Qué animal representa al Espíritu Santo?',
      options: [
        { key: 'a', text: '🐍 Serpiente' },
        { key: 'b', text: '🐘 Elefante' },
        { key: 'c', text: '🦁 León' },
        { key: 'd', text: '🕊️ Paloma' },
      ],
      answer: 'd',
    },
    stops: [
      {
        id: 1,
        name: 'Palacio de Benicarló',
        address: 'Sede de las Cortes Valencianas Plaça de Sant Llorenç, 4',
        description:
          'Es un edificio de estilo gótico que en su origen fue comprado por un papa valenciano, Alejandro VI, como residencia para su familia. En la cubierta del palacio hay unos pavos reales de metal, con las alas desplegadas, que actúan como desagües. Cuando el sol poniente los ilumina, su silueta parece brillar en la fachada.',
        links: ['https://es.wikipedia.org/wiki/Palacio_de_Benicarl%C3%B3'],
        location: { lat: 39.47801362694645, lon: -0.3746989242380302 },
        image: '',
      },
      {
        id: 2,
        name: 'Cornucopia',
        address: 'Plaza de la Mare de Déu',
        description:
          'En la Plaza de la Mare de Déu hay una cornucopia dibujada en el suelo. La cornucopia era un símbolo romano de València y significa “cuerno de la abundancia”. Cuenta la leyenda que Zeus rompió sin querer el cuerno de la cabra Amaltea y lo llenó de frutas para agradecerle su ayuda. Por eso simboliza suerte y riqueza. También aparece en la estatua del río Turia.',
        links: [
          'https://es.wikipedia.org/wiki/Cornucopia',
          'https://arqueologiaenmijardin.blogspot.com/2016/07/una-curiosidad-en-la-plaza-de-la-virgen.html',
        ],
        location: { lat: 39.476334712728026, lon: -0.3752748491088977 },
        image: 'https://es.wikipedia.org/wiki/Archivo:Sello_plaza_de_la_virgen_valencia.jpg',
      },
      {
        id: 3,
        name: 'Basílica de la Virgen de los Desamparados',
        address: 'Puerta de Bronze. Plaça de la Mare de Déu, s/n',
        description:
          'En la Basílica de la Virgen de los Desamparados hay una puerta de bronce con relieves modernos hechos por el escultor Octavio Vicent. En uno de ellos aparece una mula. Esta escena recuerda que, hace siglos, la Cofradía de la Virgen acompañaba y consolaba a las personas que iban a ser castigadas. Iban en una mula y la cofradía les daba apoyo espiritual en momentos muy difíciles.',
        links: ['https://es.wikipedia.org/wiki/Bas%C3%ADlica_de_la_Virgen_de_los_Desamparados'],
        location: { lat: 39.47629217670076, lon: -0.374843128617741 },
        image: '',
      },
      {
        id: 4,
        name: 'Catedral de València',
        address: "Plaza de l'Almoina, s/n",
        description:
          'La Catedral de València se construyó en varias etapas y tiene puertas de estilos distintos. En la puerta románica hay columnas con animales esculpidos: una paloma que representa al Espíritu Santo, una serpiente en el Árbol del Paraíso, un camello que lleva a Abraham y un cordero del sacrificio de Isaac. En la puerta barroca hay dos leones que sostienen la reja y decoran la entrada.',
        links: ['https://es.wikipedia.org/wiki/Catedral_de_Santa_Mar%C3%ADa_(Valencia)'],
        location: { lat: 39.47538171165605, lon: -0.3753564094402492 },
        image: '',
      },
      {
        id: 5,
        name: 'Palacio de Berbedel, sede del Museo de la Ciudad',
        address: 'Plaça de l´Arquebisbe, 3',
        description:
          'El Palacio de Berbedel fue la casa de los condes de Berbedel y hoy es el Museo de la Ciudad. En las puertas hay escudos de las familias que vivieron allí: uno tiene un toro, símbolo de los Prat-Bucelli, y otro un carnero y cinco conchas, de los Dasí-Puigmoltó. Estas familias se unieron y formaron la Casa Condado de Berbedel, dejando su huella en el palacio.',
        links: ['https://www.valencia.es/-/valencia-memoria.-palacio-marqu%C3%A9s-de-campo'],
        location: { lat: 39.47598150744177, lon: -0.37380232576982814 },
        image: 'https://www.valencia.es/documents/20142/569185/201806-MuseoCiudad-200px.jpg',
      },
      {
        id: 6,
        name: 'Escultura de la Paz y Concordia',
        address: 'Plaça de la Reina',
        description:
          'En la Plaça de la Reina hay una estatua llamada Escultura de la Paz y Concordia, hecha en 1998 por José Puche. Muestra a una mujer desnuda que levanta un lienzo del que salen palomas, recordando a las víctimas del terrorismo.',
        links: ['https://www.arovite.com/es/monumento/la-paz-y-la-concordia-valencia/'],
        location: { lat: 39.47464632434212, lon: -0.3756045082145598 },
        image:
          'https://www.arovite.com/wp-content/uploads/2022/02/La-Paz-y-la-Concordia-Valencia-esculturayarte.com_.jpg',
      },
      {
        id: 7,
        name: 'Iglesia de San Martín',
        address: 'Carrer de Sant Vicent Màrtir, 11',
        description:
          'En la Iglesia de San Martín hay una escultura muy antigua de San Martín a caballo repartiendo su capa a un pobre. Es del siglo XV y una de las esculturas ecuestres más importantes de España.',
        links: ['https://es.wikipedia.org/wiki/Iglesia_de_San_Mart%C3%ADn_y_San_Antonio'],
        location: { lat: 39.473261830601814, lon: -0.37579835097842496 },
        image:
          'https://sanmartinvalencia.es/wp-content/uploads/2018/06/puerta-principal-recortada-1024x306-1024x306.jpg',
      },
    ],
  },
  {
    id: 4,
    route_name: 'Los jardines emblemáticos de Valencia',
    start: 'Puerta de entrada de los Jardines del Real',
    finish: 'Jardines de Monforte',
    time: 90,
    quiz: {
      question: '¿Qué animal representa Europa en Jardines de Monforte?',
      options: [
        { key: 'a', text: '🐊 Caimán' },
        { key: 'b', text: '🐫 Camello' },
        { key: 'c', text: '🦁 León' },
        { key: 'd', text: '🐎 Caballo' },
      ],
      answer: 'd',
    },
    stops: [
      {
        id: 1,
        name: 'Jardines del Real (Viveros)',
        address: 'Carrer del General Elio, s/n',
        description:
          'En Jaedines hay una estatua del poeta Quevedo, hecha por José Arnal en 1932, con un busto de bronce y un bajorrelieve de una ninfa con paloma. Cerca, en una puerta, hay dos leones guardianes. En un lago con patos y cisnes hay una cigüeña que parece comer una culebra. También hay una estatua del Pato Donald. Las fuentes de la ciudad tienen niños con caballos y delfines, y el escudo de València con un murciélago.',
        links: ['https://es.wikipedia.org/wiki/Jardines_del_Real'],
        location: { lat: 39.4806511290526, lon: -0.36762120730367664 },
        image: '',
      },
      {
        id: 2,
        name: 'Jardines de Monforte',
        address: 'Carrer de Monforte, s/n',
        description:
          'Los Jardines de Monforte eran antes el huerto del barón de Llaurí y se transformaron en un jardín al estilo italiano. Junto a la fuente central hay cuatro figuras que representan a los continentes con animales: América con un caimán, Asia con un camello, Europa con un caballo y África con un león. También hay amorcillos de mármol que juegan con peces, caracolas, perros, cabras o cisnes. En la entrada destacan dos leones de mármol.',
        links: ['https://es.wikipedia.org/wiki/Jard%C3%ADn_de_Monforte'],
        location: { lat: 39.477353028968395, lon: -0.36539733413547154 },
        image: '',
      },
    ],
  },
  {
    id: 5,
    route_name: 'Anillo ciclista',
    start: 'Puerta del Mar',
    finish: 'Jardines del Parterre',
    time: 90,
    quiz: {
      question:
        'Solo vive en los cuentos, no hay por qué temer; es un ser de fantasía que no puede aparecer.',
      options: [
        { key: 'a', text: '🐉 Dragon' },
        { key: 'b', text: '🦇 Murciélago' },
        { key: 'c', text: '🪸 Caballito de mar' },
        { key: 'd', text: '🐡 Pez globo' },
      ],
      answer: 'a',
    },
    stops: [
      {
        id: 1,
        name: 'Puerta del Mar',
        address: 'Carrer de Colón, cantó del carrer del Justícia i de Navarro Reverter',
        description:
          'La Puerta del Mar, construida en los años 40, imita una antigua puerta de València que ya no existe. Parece un arco del triunfo y encima tiene un murciélago, símbolo de la ciudad, además de caballos y águilas decorativas. Los murciélagos son muy útiles porque comen muchos mosquitos. Una leyenda cuenta que, en tiempos del rey Jaime I, avisaron con sus ruidos de un ataque sorpresa y así ayudaron a salvar la ciudad.',
        links: ['https://es.wikipedia.org/wiki/Plaza_de_la_Puerta_del_Mar_(Valencia)'],
        location: { lat: 39.47220629688232, lon: -0.36843787916239107 },
        image:
          'https://es.wikipedia.org/wiki/Plaza_de_la_Puerta_del_Mar_(Valencia)#/media/Archivo:Puerta_del_Mar_de_Javier_Goerlich_Lle%C3%B3_(1944-1946)_en_Valencia.jpg',
      },
      {
        id: 2,
        name: 'Casa de los Dragones (Casa Cortina)',
        address: 'Carrer de Sorní, cantó amb el carrer de Jorge Juan',
        description:
          'Este edificio fue construido en 1901 por el arquitecto Cortina para su padre y era uno de los más modernos del barrio del Ensanche. Su fachada modernista está llena de símbolos y está protegida como Bien de Relevancia Local. En ella pueden verse lagartos, salamandras y dragones decorativos, colocados como apoyo de las ménsulas o en la parte superior del chaflán, lo que hizo que el edificio fuera conocido como “el de los dragones”.',
        links: [
          'https://www.elespanol.com/valencia/20240413/significado-detras-casa-dragones-edificios-peculiares-valencia/846915711_0.html',
          'https://es.wikipedia.org/wiki/Casa_de_los_Dragones_(Valencia)',
        ],
        location: { lat: 39.47020220376315, lon: -0.3698852367891265 },
        image:
          'https://es.wikipedia.org/wiki/Casa_de_los_Dragones_(Valencia)#/media/Archivo:Drac_alat_al_carrer_Sorn%C3%AD_de_Val%C3%A8ncia.jpg',
      },
      {
        id: 3,
        name: 'Callejeros',
        address: 'Plaça dels Pinazo',
        description:
          'En la Plaça dels Pinazo hay una escultura de bronce hecha por Elena Nogueroles en 2018. Representa a un perro llamado Tristán y a una gata llamada Soledad. La obra denuncia el abandono de animales y homenajea a quienes los cuidan. La artista la regaló a la ciudad y en el pedestal hay un poema en valenciano y en castellano sobre el respeto a los animales.',
        links: ['https://fallers.es/escultura-callejeros-de-elena-nogueroles/'],
        location: { lat: 39.46999416009158, lon: -0.3710197624322295 },
        image: '',
      },
      {
        id: 4,
        name: 'Estación del Norte',
        address: 'Carrer de Xàtiva, s/n',
        description:
          'La Estación del Norte en Valencia es un edificio muy antiguo y especial: cuando entras, parece casi un palacio. Fue construida hace más de 100 años, y desde lejos su fachada ya te sorprende. Sobre el reloj grande de la fachada hay una bola de bronce (que representa el mundo), y encima de esa bola hay un águila con las alas abiertas. Ese águila significa la velocidad — perfecta para un edificio de trenes, donde los trenes llegan y se marchan rápido. Además, toda la estación está decorada con cerámicas de colores, mosaicos, dibujos de flores, naranjas, hojas, escudos… todas cosas de Valencia. Eso convierte al edificio en un lugar muy bonito y lleno de arte.',
        links: [
          'https://www.adif.es/w/valencia-nord',
          'https://www.visitvalencia.com/que-hacer-valencia/cultura-valenciana/monumentos-en-valencia/estacion-norte',
        ],
        location: { lat: 39.46606212998297, lon: -0.3776154538122791 },
        image: '',
      },
      {
        id: 5,
        name: 'Edificio de La Unión y el Fénix Español',
        address: 'Carrer de Xàtiva, 13',
        description:
          'El edificio tiene en lo alto una escultura muy llamativa: un joven sentado sobre un águila de alas abiertas. Muchos creían que era un fénix, pero en realidad muestra a Ganímedes, un personaje de la mitología griega que simboliza la juventud eterna. La obra es una réplica hecha por el escultor francés Saint-Marceau y aparece también en otros edificios de España.',
        links: [
          'https://es.wikipedia.org/wiki/Edificio_La_Uni%C3%B3n_y_el_F%C3%A9nix_(Valencia)',
          'https://arquitectosdevalencia.es/arquitectura/edificio-de-la-union-y-el-fenix/',
          'https://valenciaactua.es/edifico-union-y-fenix/',
        ],
        location: { lat: 39.46774160515087, lon: -0.37673764259238557 },
        image: '',
      },
      {
        id: 6,
        name: 'Antigua Fábrica de Cervezas y Gaseosas',
        address: 'Carrer de Guillem de Castro, 31',
        description:
          'Fue una antigua fábrica de cervezas y gaseosas de Francisco y Roberto Pujol. Es un edificio de principios del siglo XX y en su fachada muestra cuatro medallones con perros apoyados en barriles.',
        links: [],
        location: { lat: 39.46892670015358, lon: -0.3817891998052709 },
        image: '',
      },
      {
        id: 7,
        name: 'Guerrero de Moixent. Jardines del Hospital',
        address: 'Carrer de Guillem de Castro, s/n',
        description:
          'En los Jardines del Hospital hay una réplica del Guerrero de Moixent, colocada en 1982. El original, muy pequeño (solo 7,5 cm), está en el Museo de Prehistoria y se encontró en un poblado ibérico de Moixent. Es del siglo V a. C. y muestra a un guerrero ibérico con espada, escudo y casco montado en un caballo, uno de los animales más antiguos representados en el arte europeo.',
        links: ['https://esculturayarte.com/047555/El-Guerrero-de-Moixent-en-Valencia.html'],
        location: { lat: 39.470518608893556, lon: -0.3832766354353993 },
        image: 'https://esculturayarte.com/fotos/1461060247000a.jpg',
      },
      {
        id: 8,
        name: 'Fuente de los somormujos',
        address: 'Plaça de Vicente Iborra',
        description:
          'La Fuente de los Somormujos está en la plaza de Vicente Iborra. Es francesa y la ciudad la compró en 1851. Antes estuvo en otras plazas hasta llegar aquí en 1967. En la fuente aparecen dos somormujos, aves acuáticas rodeadas de plantas, ranas, tortugas y peces. Los somormujos, también llamados zampullines, viven en La Albufera. Nadan muy bien y en verano llevan unas plumas como “moños” para el cortejo.',
        links: ['https://www.curiosidadesvlc.com/blog/fuente-de-los-somormujos'],
        location: { lat: 39.4770170430999, lon: -0.38152482183513103 },
        image: '',
      },
      {
        id: 9,
        name: 'Asilo de San Juan Bautista',
        address: 'Carrer de Guillem de Castro, 175',
        description:
          'El Asilo de San Juan Bautista está en la calle Guillem de Castro. Lo construyeron a principios del siglo XX gracias a Juan Bautista Romero, un comerciante que lo creó para ayudar y enseñar a niños pobres. En la parte de arriba del edificio hay una figura de Jesús Maestro. En un lado también se ve una palmera y un perro que parece estar ladrando hacia el cielo.',
        links: [],
        location: { lat: 39.47907204858262, lon: -0.384850742290609 },
        image: '',
      },
      {
        id: 10,
        name: 'Torres de Serranos',
        address: 'Plaça dels Furs, s/n',
        description:
          'Las Torres de Serranos son una antigua puerta de la muralla de València, construida en el siglo XIV. Se llaman así porque por allí entraban los viajeros de la serranía. Sirvieron para defender la ciudad, fueron cárcel y hasta guardaron cuadros del Museo del Prado durante la Guerra Civil. Una de sus gárgolas muestra un león con un niño. También hay dragones y otros animales fantásticos decorando la escalera.',
        links: ['https://es.wikipedia.org/wiki/Torres_de_Serranos'],
        location: { lat: 39.47966037407793, lon: -0.3755145936852662 },
        image: '',
      },
      {
        id: 11,
        name: 'Palacio del Temple',
        address: 'Sede de la delegación de Gobierno. Plaça de Tetuan, 1',
        description:
          'El edificio fue mandado construir por Carlos III entre 1761 y 1770 para albergar la sede de Orden de Montesa, después de que un terremoto destruyera su castillo. Tiene un estilo neoclásico inspirado en Italia, con formas limpias y elegantes. En la fachada de la iglesia aparece el escudo real de Carlos III, rodeado por el collar del Toisón de Oro —una condecoración de reyes. En ese collar hay un carnero colgando, que recuerda a la leyenda del vellocino de oro de Jasón.',
        links: ['https://www.valenciabonita.es/2020/10/16/palacio-del-temple-valencia/'],
        location: { lat: 39.47674589927992, lon: -0.37112060676378555 },
        image: '',
      },
      {
        id: 12,
        name: 'Iglesia castrense de Santo Domingo',
        address: 'Plaça de Tetuan, 22',
        description:
          'Al antiguo convento gótico de Santo Domingo le añadieron, al final del siglo XVI, una portada renacentista. Encima de ella hay un gran diseño circular con el escudo de la orden de los dominicos. Sosteniéndolo hay dos perros dogos, animales que representan a la orden. Dentro del escudo hay letras “D” y “F”, que significan “Dominicanus Fratres” —frailes dominicos.',
        links: [
          'https://www.abc.es/espana/comunidad-valenciana/fachada-iglesia-santo-domingo-valencia-luce-nueva-20240327153440-nt.html',
        ],
        location: { lat: 39.474282709021715, lon: -0.3694891863151722 },
        image: '',
      },
      {
        id: 13,
        name: 'Fuente del Tritón',
        address: 'Jardins de la Glorieta',
        description:
          'En los Jardins de la Glorieta está la Fuente del Tritón. Tritón, según la mitología, era un dios del mar, hijo de Neptuno y Anfitrite, que tocaba una caracola como trompeta para mover las olas. La caracola que usa, llamada Charonia lampas, vivía en el Mediterráneo y se encontraba en las playas de València desde la época romana, aunque hoy es muy rara y está en peligro.',
        links: ['https://cultural.valencia.es/es/escultura/fuente-del-triton/'],
        location: { lat: 39.47314981248378, lon: -0.36962139689361784 },
        image: '',
      },
      {
        id: 14,
        name: 'Estatua ecuestre de Jaime I',
        address: "Plaça d'Alfons el Magnànim",
        description:
          'En los jardines del Parterre hay un monumento a Jaime I, del siglo XIX. Es una estatua grande de bronce donde el rey está montado en un caballo. Se hizo con cañones del castillo de Peñíscola. Las estatuas de personas a caballo eran muy importantes en la época romana para mostrar héroes o emperadores. Hay un mito que dice que la posición de las patas del caballo indica cómo murió la persona, pero no es cierto.',
        links: ['https://es.wikipedia.org/wiki/Jaime_I_de_Arag%C3%B3n'],
        location: { lat: 39.47192173148979, lon: -0.37056367706809 },
        image: '',
      },
      {
        id: 15,
        name: 'Fuente de Neptuno',
        address: "Plaça d'Alfons el Magnànim. Parterre, cantó amb el carrer del Poeta Quintana",
        description:
          "La Fuente de Neptuno está en la Plaça d'Alfons el Magnànim, en el Parterre. Fue hecha para el huerto de un rico canónigo en el siglo XVII. La escultura muestra a Neptuno, dios del mar, con su tridente, y a sus pies un gran pez que representa un delfín. La fuente estuvo en la Glorieta en el siglo XIX y se trasladó a su lugar actual en 1960.",
        links: [],
        location: { lat: 39.47151341075092, lon: -0.3704911843038299 },
        image: '',
      },
    ],
  },
  {
    id: 6,
    route_name: 'Otros animales dispersos en los monumentos de la ciudad',
    start: "Passeig de l'Albereda, 16",
    finish: 'Passeig marítim de la Malva-rosa',
    time: 120,
    quiz: {
      question:
        'Cuando preguntamos, nos dicen así: que él trae a los bebés, lo saben aquí. ¡Qué ave tan hermosa, sin comparación, en cualquier maternidad haría gran función!',
      options: [
        { key: 'a', text: '🦩 Flamingo' },
        { key: 'b', text: '🦤 Сigüeña' },
        { key: 'c', text: '🕊️ Paloma' },
        { key: 'd', text: '🦅 Águila' },
      ],
      answer: 'b',
    },
    stops: [
      {
        id: 1,
        name: 'Edificio de la Cigüeña (Sede de la Conselleria de Transparència, Responsabilitat Social, Participació i Cooperació)',
        address: "Passeig de l'Albereda, 16",
        description:
          'El antiguo Hospital de la Cigüeña está en el paseo de la Alameda. Antes era una clínica donde nacían muchos bebés, hasta los años 80. Ahora es un edificio del gobierno. En un lado del edificio hay una escultura de hierro de una cigüeña que lleva a un bebé, porque la cigüeña es un símbolo de la maternidad y recuerda la historia del lugar.',
        links: ['https://www.lavalenciainsolita.com/la-ciguena-un-edificio-encantado-de-valencia/'],
        location: { lat: 39.473828588741696, lon: -0.36377146474184663 },
        image: '',
      },
      {
        id: 2,
        name: 'Fuente de los Cuatro Elementos',
        address: "Pont d'Aragó - Passeig de l' Albereda",
        description:
          'La Fuente de los Cuatro Elementos es muy antigua. Se puso primero en la plaza del Mercado en 1672 y luego se llevó a la Alameda. Fue la primera fuente pública de València. Más tarde le añadieron cinco figuras de niños. Está hecha de hierro y en ella se pueden ver varios animales: una tortuga, un cordero, una lagartija, un león y una gran concha.',
        links: ['https://valenciaactua.es/fuente-cuatro-elementos/'],
        location: { lat: 39.46969313377418, lon: -0.36121977538563493 },
        image: '',
      },
      {
        id: 3,
        name: 'La antorcha olímpica',
        address: 'Avinguda de Blasco Ibáñez, 35',
        description:
          'Representa a un hombre a caballo y a otro que recoge una antorcha, todas figuras de bronce hechas por la artista Anna Huntington. Fue donada a la ciudad en 1955 por la familia Huntington. A esta obra también se la conoce como “El relevo”.',
        links: ['https://valenciaactua.es/monumento-al-relevo-generacional/'],
        location: { lat: 39.47635009471255, lon: -0.3556806399087886 },
        image: '',
      },
      {
        id: 4,
        name: 'EI Parotet',
        address: "Avinguda de França, Glorieta d'Europa",
        description:
          'Es una escultura creada en 2003 por Miguel Navarro. Su forma recuerda a una libélula, llamada parotet en valenciano. Las libélulas son insectos que vuelan muy rápido y viven cerca del agua. El monumento brilla con el sol y se ha convertido en un símbolo moderno de la ciudad.',
        links: ['https://cultural.valencia.es/es/escultura/el-parotet/'],
        location: { lat: 39.460195677740856, lon: -0.35344916969907053 },
        image: 'https://cultural.valencia.es/wp-content/uploads/2018/11/Parotet.jpg',
      },
      {
        id: 5,
        name: 'El rapto de Europa',
        address: 'Plaza del Pedagog Pestalozzi',
        description:
          'Conjunto realizado en bronce en 1978 sobre un original en escayola. La escultura es obra de Francisco Marco Diaz Pintado (Valencia 1887-Javea 1980). En esta obra del arte vemos a Europa, una princesa de la mitología griega, y a Zeus convertido en un toro blanco. Según el mito, Zeus se transformó en toro para acercarse a ella. Cuando Europa lo acarició, el toro la llevó sobre su lomo hasta la isla de Creta. Allí descubrió que era un dios y se convirtió en reina. Esta historia dio nombre al continente europeo.',
        links: [
          'https://fallers.es/el-rapto-de-europa-pl-pedagogo-pestalozzi/',
          'https://es.wikipedia.org/wiki/Europa_(mitolog%C3%ADa)#El_rapto_de_Europa',
        ],
        location: { lat: 39.457063985194296, lon: -0.36536232328215 },
        image:
          'https://fallers.es/wp-content/uploads/valenciaesculturapublicaraptodeeuropa01-320x320.jpg',
      },
      {
        id: 6,
        name: 'Tinglados del Puerto',
        address: 'Carrer de la Marina de València',
        description:
          'En la Calle de la Marina de València están los antiguos Tinglados del Puerto. Estos edificios, hechos a principios del siglo XX, tienen una fachada muy decorada al estilo modernista. En ella hay dos serpientes enroscadas alrededor de una vara —esas serpientes con la vara simbolizan al dios romano del comercio, Mercurio — y también aparecen peces fantásticos que adornan la base de los muros.',
        links: ['https://es.wikipedia.org/wiki/Tinglados_del_Puerto_de_Valencia'],
        location: { lat: 39.46082350906965, lon: -0.33149974624676837 },
        image: '',
      },
      {
        id: 7,
        name: "Grupo escultórico 'Delfines'",
        address: 'Passeig marítim de la Malva-rosa',
        description:
          'En 1998, el artista Antonio Marí Sart creó en la Malvarrosa dos delfines de hierro que saltan sobre un mar hecho con mosaicos azules y blancos. Estos mosaicos siguen la tradición valenciana del trencadís, una técnica muy usada en la ciudad para decorar fuentes, bancos y fachadas con trocitos de cerámica de colores. Los delfines simbolizan la alegría del mar y son animales muy inteligentes que pueden verse cerca de la costa valenciana.',
        links: [
          'https://valenciacuriosa.blogspot.com/2020/01/la-escultura-de-los-delfines-en-el.html',
        ],
        location: { lat: 39.47463048831089, lon: -0.3242967861027341 },
        image: '',
      },
    ],
  },
]

//variable to save all barrios
let allBarrios = ref([])
//------------function to get list of Areas in Valencia from public API - saved in /public/data
//------------save all data in a variable allBarrios
// https://valencia.opendatasoft.com/api/explore/v2.1/catalog/datasets/barris-barrios/records?limit=20 ----------------------------------------------------------------------------------------
let getBarrios = () => {
  fetch('/data/barris-barrios.json')
    .then((res) => res.json())
    .then((geojson) => {
      //allBarrios.value = geojson
      geojson.forEach((barrio) => {
        animales.forEach((route) => {
          let isInBarrio = route.stops.find((stop) => {
            let stopPoint = turf.point([stop.location.lon, stop.location.lat])
            return turf.booleanPointInPolygon(stopPoint, barrio.geo_shape)
          })
          if (isInBarrio) {
            allBarrios.value.push(barrio)
          }
        })
      })

      //console.log(allBarrios.value);
      //console.log(geojson);
    })
}

//save data in pinia
