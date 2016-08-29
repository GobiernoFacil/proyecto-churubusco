(function(win, doc, htmlClassCollection){
  var characters, data, app, branchTemplate,
  programTemplate, Template, currentSection, 
  DIVS = {}, AppName = "GFGameSHCPV2";

  /*
  ,{
  divIntro          : "gf-game-section-intro",
  divIntroB         : "gf-game-section-intro-b",
  divBranchSelector : "gf-game-section-branch-selector",
  divBranchMoney    : "gf-game-section-branch-money",
  divProgramMoney   : "gf-game-section-program-money",
  aCloseBtn         : "gf-game-next"
})
  */
  app = {
    //
    // Initialize function
    //
    //
    initialize : function(){
      currentSection = 0;
      this.setDIVS();
    },

    //
    // N A V I G A T I O N   F U N C T I O N S
    // --------------------------------------------------------
    //

    //
    // cache the html sections
    //
    //
    setDIVS : function(){
      DIVS.intro     = doc.getElementsByClassName(htmlClassCollection.divIntro)[0];
      DIVS.introb    = doc.getElementsByClassName(htmlClassCollection.divIntroB)[0];
      DIVS.branches  = doc.getElementsByClassName(htmlClassCollection.divBranchSelector)[0];
      DIVS.setBMoney = doc.getElementsByClassName(htmlClassCollection.divBranchMoney)[0];
      DIVS.setPMoney = doc.getElementsByClassName(htmlClassCollection.divProgramMoney)[0];
    },

    setNavButtons : function(){

    },

    renderIntro : function(){
      DIVS.introb.style.display    = "none";
      DIVS.branches.style.display  = "none";
      DIVS.setBMoney.style.display = "none";
      DIVS.setPMoney.style.display = "none";
      DIVS.intro.style.display     = "block";
    },

    renderIntroB : function(){

    },

    renderBranchSelector : function(){

    },

    renderBranchMoney : function(branch){

    },

    renderProgramMoney : function(branch, program){

    },
  };

  window[AppName] = app;

  //
  // H E L P E R   F U N C T I O N S
  // --------------------------------------------------------
  //

  // Template
  // Merge the template string and the data, and returns HTML
  // source: http://stackoverflow.com/questions/17056064/javascript-regex-match-all-and-replace
  Template = function(str, data){
    var t = str.replace(/\{\{(.*?)\}\}/g, function(i, match){
      return data[match];
    });
    return t;
  };

  //
  // T E M P L A T E S   S E T U P
  // --------------------------------------------------------
  //
  branchTemplate = "<p>{{ramo}}:{{actual}}</p>" +
                   "<p><input disabled></p>" +
                   "<p>{{pef}}</p>" +
                   "<p><a class='gf-minus-btn' href='#'>[ - ]</a>" +
                   " <a class='gf-pef-btn' href='#'>[ pef ]</a>" +
                   " <a class='gf-plus-btn' href='#'>[ + ]</a></p>" +
                   "<p><a href=</p>";

  //
  // D A T A   S E T U P
  // --------------------------------------------------------
  //

  //
  // define the characters
  //
  //
  characters = [{
      personaje : "administrador",
      clave : 1,
      texto : "Trabajas en Hacienda",
      ramos : ["6", "32"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "ambientalista",
      clave : 2,
      texto : "vives en un árbol",
      ramos : ["31", "8", "16"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "educador",
      clave : 3,
      texto : "la letra con sangre entra",
      ramos : ["11", "42"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "emprendedor",
      clave : 4,
      texto : "Hipster",
      ramos : ["10", "5", "21", "14", "41"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "humanista",
      clave : 5,
      texto : "chairo",
      ramos : ["20", "15", "35", "47"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "Institucionalista",
      clave : 6,
      texto : "Se ve que sí pasaste por la universidad",
      ramos : ["22", "1", "40", "2", "27", "44", "37"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "inversionista",
      clave : 7,
      texto : "Estás cabrón",
      ramos : ["52", "53", "9", "18", "45", "46"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "justiciero / héroe",
      clave : 8,
      texto : "abuelita de batman",
      ramos : ["7", "4", "3", "13", "17"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "saludable",
      clave : 9,
      texto : "just do it",
      ramos : ["50", "51", "12"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "tecnológico",
      clave : 10,
      texto : "nerd",
      ramos : ["38", "42"],
      modificable : 1,
      limites : [0, 4000000000000]
    },
    {
      personaje : "HAcker",
      clave : 13,
      texto : "Eres la mera avena",
      ramos : ["28", "24", "52", "34", "30", "53", "33", "19", "23", "25"],
      modificable : 0,
      limites : [null, null]
    }];

    data =[
  {
    "items": "1",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "-8660.45134",
    "porcentaje": "-0.2036",
    "programa": "Operaciones ajenas",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "34",
    "nombre": "Erogaciones para los Programas de Apoyo a Ahorradores y Deudores de la Banca",
    "total": "0.0001",
    "porcentaje": "0.0000",
    "programa": "INDUSTRIA Descuento en pago Banca de Desarrollo",
    " \"pp\"": "8"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "0.45",
    "porcentaje": "0.0000",
    "programa": "Apoyo Econўmico a Viudas de Veteranos de la Revoluciўn Mexicana",
    " \"pp\"": "14"
  },
  {
    "items": "3",
    "ramo": "24",
    "nombre": "Deuda PЈblica",
    "total": "0.000456",
    "porcentaje": "0.0000",
    "programa": "Banca comercial",
    " \"pp\"": "6"
  },
  {
    "items": "1",
    "ramo": "34",
    "nombre": "Erogaciones para los Programas de Apoyo a Ahorradores y Deudores de la Banca",
    "total": "0.0001",
    "porcentaje": "0.0000",
    "programa": "AGROINDUSTRIA Descuento en pago Banca de Desarrollo",
    " \"pp\"": "9"
  },
  {
    "items": "1",
    "ramo": "34",
    "nombre": "Erogaciones para los Programas de Apoyo a Ahorradores y Deudores de la Banca",
    "total": "0.0001",
    "porcentaje": "0.0000",
    "programa": "INDUSTRIA Descuento en pago",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "34",
    "nombre": "Erogaciones para los Programas de Apoyo a Ahorradores y Deudores de la Banca",
    "total": "0.0001",
    "porcentaje": "0.0000",
    "programa": "INDUSTRIA Reestructuraciўn en UDIs",
    " \"pp\"": "4"
  },
  {
    "items": "1",
    "ramo": "34",
    "nombre": "Erogaciones para los Programas de Apoyo a Ahorradores y Deudores de la Banca",
    "total": "0.0001",
    "porcentaje": "0.0000",
    "programa": "HIPOTECARIO-VIVIENDA",
    " \"pp\"": "2"
  },
  {
    "items": "1",
    "ramo": "34",
    "nombre": "Erogaciones para los Programas de Apoyo a Ahorradores y Deudores de la Banca",
    "total": "0.0001",
    "porcentaje": "0.0000",
    "programa": "HIPOTECARIO-VIVIENDA Reestructuraciўn en UDIs",
    " \"pp\"": "5"
  },
  {
    "items": "1",
    "ramo": "34",
    "nombre": "Erogaciones para los Programas de Apoyo a Ahorradores y Deudores de la Banca",
    "total": "0.0001",
    "porcentaje": "0.0000",
    "programa": "AGROINDUSTRIA Descuento en pago",
    " \"pp\"": "3"
  },
  {
    "items": "1",
    "ramo": "1",
    "nombre": "Poder Legislativo",
    "total": "0.45",
    "porcentaje": "0.0000",
    "programa": "Otros Proyectos",
    " \"pp\"": "26"
  },
  {
    "items": "1",
    "ramo": "34",
    "nombre": "Erogaciones para los Programas de Apoyo a Ahorradores y Deudores de la Banca",
    "total": "0.0001",
    "porcentaje": "0.0000",
    "programa": "AGROINDUSTRIA Reestructuraciўn en UDIs",
    " \"pp\"": "6"
  },
  {
    "items": "1",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "1.6124",
    "porcentaje": "0.0000",
    "programa": "Mantenimiento de infraestructura",
    " \"pp\"": "27"
  },
  {
    "items": "17",
    "ramo": "31",
    "nombre": "Tribunales Agrarios",
    "total": "1.654307",
    "porcentaje": "0.0000",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "6",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "1.681368",
    "porcentaje": "0.0000",
    "programa": "Programa de Emergencias Radiolўgicas Externo (P.E.R.E.)",
    " \"pp\"": "10"
  },
  {
    "items": "1",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "3.056",
    "porcentaje": "0.0001",
    "programa": "Estudios de preinversiўn",
    " \"pp\"": "28"
  },
  {
    "items": "18",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "3.232976",
    "porcentaje": "0.0001",
    "programa": "Elaborar pronunciamientos tendentes a garantizar el respeto de los derechos humanos tanto en el sistema penitenciario nacional, como en los casos de pena de muerte de connacionales en el extranjero",
    " \"pp\"": "31"
  },
  {
    "items": "32",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "3.390249",
    "porcentaje": "0.0001",
    "programa": "Programa de Devoluciўn de Derechos",
    " \"pp\"": "1"
  },
  {
    "items": "17",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "3.64861",
    "porcentaje": "0.0001",
    "programa": "Sistema Nacional de Alerta de violaciўn a los Derechos Humanos",
    " \"pp\"": "25"
  },
  {
    "items": "1",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "4.265796",
    "porcentaje": "0.0001",
    "programa": "Estudios de preinversiўn",
    " \"pp\"": "28"
  },
  {
    "items": "4",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "6.207273",
    "porcentaje": "0.0001",
    "programa": "Programas de Calidad del Aire y Verificaciўn Vehicular",
    " \"pp\"": "26"
  },
  {
    "items": "14",
    "ramo": "37",
    "nombre": "ConsejerЎa JurЎdica del Ejecutivo Federal",
    "total": "5.595389",
    "porcentaje": "0.0001",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "3",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "5.831136",
    "porcentaje": "0.0001",
    "programa": "Mantenimiento de infraestructura",
    " \"pp\"": "27"
  },
  {
    "items": "18",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "6.708983",
    "porcentaje": "0.0002",
    "programa": "Atender asuntos relacionados con Sexualidad, Salud y VIH я",
    " \"pp\"": "12"
  },
  {
    "items": "16",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "7.00661",
    "porcentaje": "0.0002",
    "programa": "Protecciўn de los Derechos Humanos de IndЎgenas en Reclusiўn",
    " \"pp\"": "10"
  },
  {
    "items": "1",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "6.9608",
    "porcentaje": "0.0002",
    "programa": "Fomento de la GanaderЎa y Normalizaciўn de la Calidad de los Productos Pecuarios",
    " \"pp\"": "9"
  },
  {
    "items": "18",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "8.424033",
    "porcentaje": "0.0002",
    "programa": "Realizar visitas de supervisiўn para cumplir con la elaboraciўn del diagnўstico anual del Sistema Penitenciario.",
    " \"pp\"": "23"
  },
  {
    "items": "1",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "7.5",
    "porcentaje": "0.0002",
    "programa": "Proyectos de inmuebles (oficinas administrativas)",
    " \"pp\"": "25"
  },
  {
    "items": "18",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "8.638924",
    "porcentaje": "0.0002",
    "programa": "Atender asuntos de la ni¤ez,я la familia, adolescentes y personas adultas mayores",
    " \"pp\"": "11"
  },
  {
    "items": "19",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "9.806955",
    "porcentaje": "0.0002",
    "programa": "Atender asuntos relativos a la aplicaciўn del Mecanismo Nacional de Promociўn, Protecciўn y Supervisiўn de la Convenciўn sobre los derechos de las Personas con Discapacidad.",
    " \"pp\"": "24"
  },
  {
    "items": "1",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "11.010756",
    "porcentaje": "0.0003",
    "programa": "Programa de subsidios al transporte ferroviario de pasajeros",
    " \"pp\"": "1"
  },
  {
    "items": "22",
    "ramo": "45",
    "nombre": "Comisiўn Reguladora de EnergЎa",
    "total": "10.576865",
    "porcentaje": "0.0003",
    "programa": "Actividades de apoyo a la funciўn pЈblica ybuen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "22",
    "ramo": "41",
    "nombre": "Comisiўn Federal de Competencia Econўmica",
    "total": "12.446659",
    "porcentaje": "0.0003",
    "programa": "Actividades de Apoyo a la Funciўn PЈblica y Buen Gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "16",
    "ramo": "46",
    "nombre": "Comisiўn Nacional de Hidrocarburos",
    "total": "12.477085",
    "porcentaje": "0.0003",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "4",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "11.613426",
    "porcentaje": "0.0003",
    "programa": "Estudios de preinversiўn",
    " \"pp\"": "28"
  },
  {
    "items": "17",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "12.207705",
    "porcentaje": "0.0003",
    "programa": "Promover los Derechos Humanos de los pueblos y las comunidades indЎgenas",
    " \"pp\"": "22"
  },
  {
    "items": "9",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "12.534996",
    "porcentaje": "0.0003",
    "programa": "Atenciўn de asuntos jurЎdicos en materia agraria, territorial, urbana y vivienda",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "12.726181",
    "porcentaje": "0.0003",
    "programa": "Mantenimiento de infraestructura",
    " \"pp\"": "27"
  },
  {
    "items": "12",
    "ramo": "2",
    "nombre": "Oficina de la Presidencia de la RepЈblica",
    "total": "13.929169",
    "porcentaje": "0.0003",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "3",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "14.549833",
    "porcentaje": "0.0004",
    "programa": "PolЎticas de igualdad de g‚nero en el sector educativo",
    " \"pp\"": "32"
  },
  {
    "items": "1",
    "ramo": "12",
    "nombre": "Salud",
    "total": "14.728658",
    "porcentaje": "0.0004",
    "programa": "Estudios de Preinversiўn",
    " \"pp\"": "28"
  },
  {
    "items": "8",
    "ramo": "44",
    "nombre": "Instituto Nacional de Transparencia, Acceso a la Informaciўn y Protecciўn de Datos Personales",
    "total": "16.939036",
    "porcentaje": "0.0004",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "19",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "18.309782",
    "porcentaje": "0.0004",
    "programa": "Planear las actividades y analizar los resultados institucionales",
    " \"pp\"": "19"
  },
  {
    "items": "1",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "18",
    "porcentaje": "0.0004",
    "programa": "Fideicomiso de apoyo a deudos de militares fallecidos o a militares que hayan adquirido una incapacidad en 1/a. categorЎa enяactos del servicio considerados de alto riesgo",
    " \"pp\"": "18"
  },
  {
    "items": "10",
    "ramo": "5",
    "nombre": "Relaciones Exteriores",
    "total": "19.075082",
    "porcentaje": "0.0004",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "12",
    "ramo": "2",
    "nombre": "Oficina de la Presidencia de la RepЈblica",
    "total": "18.984412",
    "porcentaje": "0.0004",
    "programa": "Coordinaciўn y apoyo de las acciones a cargo del Consejo de Seguridad Nacional",
    " \"pp\"": "1"
  },
  {
    "items": "11",
    "ramo": "5",
    "nombre": "Relaciones Exteriores",
    "total": "18.764189",
    "porcentaje": "0.0004",
    "programa": "Fortalecimiento de las capacidades del Servicio Exterior Mexicano y de la CancillerЎa.",
    " \"pp\"": "6"
  },
  {
    "items": "17",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "19.121516",
    "porcentaje": "0.0004",
    "programa": "Impulso a la competitividad del sector turismo",
    " \"pp\"": "2"
  },
  {
    "items": "13",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "20.352362",
    "porcentaje": "0.0005",
    "programa": "Protecciўn de los derechos tutelados por la Ley Federal del Derecho de Autor",
    " \"pp\"": "41"
  },
  {
    "items": "20",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "20.176453",
    "porcentaje": "0.0005",
    "programa": "Operaciўn de infraestructura marЎtimo-portuaria",
    " \"pp\"": "8"
  },
  {
    "items": "14",
    "ramo": "37",
    "nombre": "ConsejerЎa JurЎdica del Ejecutivo Federal",
    "total": "20.433428",
    "porcentaje": "0.0005",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "22",
    "ramo": "45",
    "nombre": "Comisiўn Reguladora de EnergЎa",
    "total": "19.900111",
    "porcentaje": "0.0005",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "19",
    "ramo": "14",
    "nombre": "Trabajo y Previsiўn Social",
    "total": "21.227851",
    "porcentaje": "0.0005",
    "programa": "Registro de agrupaciones sindicales",
    " \"pp\"": "11"
  },
  {
    "items": "20",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "20.659261",
    "porcentaje": "0.0005",
    "programa": "Promover el respeto de los Derechos Humanos de vЎctimas y posibles vЎctimas de la trata de personas; asЎ como periodistas y personas defensores de Derechos Humanos",
    " \"pp\"": "14"
  },
  {
    "items": "18",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "22.101299",
    "porcentaje": "0.0005",
    "programa": "Operar el Mecanismo Nacional de Prevenciўn de la Tortura",
    " \"pp\"": "8"
  },
  {
    "items": "17",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "21.706832",
    "porcentaje": "0.0005",
    "programa": "Establecer y dirigir la estrategia institucional para proteger y promover los Derechos Humanos y presentar sus resultados",
    " \"pp\"": "1"
  },
  {
    "items": "2",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "23.4",
    "porcentaje": "0.0005",
    "programa": "Inversiўn en Infraestructura Social y Protecciўn Ambiental",
    " \"pp\"": "138"
  },
  {
    "items": "17",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "22.529254",
    "porcentaje": "0.0005",
    "programa": "Atenciўn a refugiados en el paЎs",
    " \"pp\"": "6"
  },
  {
    "items": "17",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "22.563232",
    "porcentaje": "0.0005",
    "programa": "Atender asuntos relacionados con los Derechos Humanos Econўmicos, Sociales, Culturales y Ambientales.",
    " \"pp\"": "26"
  },
  {
    "items": "23",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "23.798162",
    "porcentaje": "0.0006",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "17",
    "ramo": "14",
    "nombre": "Trabajo y Previsiўn Social",
    "total": "25.137087",
    "porcentaje": "0.0006",
    "programa": "Conciliaciўnяentre empleadores y sindicatos",
    " \"pp\"": "8"
  },
  {
    "items": "2",
    "ramo": "27",
    "nombre": "Funciўn PЈblica",
    "total": "25.271319",
    "porcentaje": "0.0006",
    "programa": "Otros proyectos de infraestructura gubernamental",
    " \"pp\"": "24"
  },
  {
    "items": "16",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "24.508205",
    "porcentaje": "0.0006",
    "programa": "Conducciўn de la polЎtica del Gobierno Federal en materia religiosa",
    " \"pp\"": "18"
  },
  {
    "items": "19",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "25.416911",
    "porcentaje": "0.0006",
    "programa": "Atender asuntos relacionados con vЎctimas del delito",
    " \"pp\"": "6"
  },
  {
    "items": "20",
    "ramo": "14",
    "nombre": "Trabajo y Previsiўn Social",
    "total": "26.054743",
    "porcentaje": "0.0006",
    "programa": "Evaluaciўn del Salario MЎnimo",
    " \"pp\"": "2"
  },
  {
    "items": "48",
    "ramo": "46",
    "nombre": "Comisiўn Nacional de Hidrocarburos",
    "total": "25.69309",
    "porcentaje": "0.0006",
    "programa": "Estudios de Evaluaciўn y Verificaciўn de Hidrocarburos",
    " \"pp\"": "1"
  },
  {
    "items": "17",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "26.157412",
    "porcentaje": "0.0006",
    "programa": "Atender asuntos relacionados con personas reportadas como desaparecidas, extraviadas, ausentes, fallecidas no identificadas y vЎctimas de secuestro",
    " \"pp\"": "7"
  },
  {
    "items": "18",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "27.218933",
    "porcentaje": "0.0006",
    "programa": "Promover, divulgar, dar seguimiento, evaluar y monitorear la polЎtica nacional en materia de Igualdad entre mujeres y hombres, y atender Asuntos de la mujer",
    " \"pp\"": "13"
  },
  {
    "items": "32",
    "ramo": "14",
    "nombre": "Trabajo y Previsiўn Social",
    "total": "28.854404",
    "porcentaje": "0.0007",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "4",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "28.768096",
    "porcentaje": "0.0007",
    "programa": "Programa hacia la igualdad y la sustentabilidad ambiental",
    " \"pp\"": "22"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "29.9",
    "porcentaje": "0.0007",
    "programa": "Fiscalizaciўn",
    " \"pp\"": "11"
  },
  {
    "items": "12",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "30.026029",
    "porcentaje": "0.0007",
    "programa": "Registro Nacional de Profesionistas y sus Asociaciones",
    " \"pp\"": "39"
  },
  {
    "items": "10",
    "ramo": "42",
    "nombre": "Instituto Nacional para la Evaluaciўn de la Educaciўn",
    "total": "31.368479",
    "porcentaje": "0.0007",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "11",
    "ramo": "42",
    "nombre": "Instituto Nacional para la Evaluaciўn de la Educaciўn",
    "total": "32.134457",
    "porcentaje": "0.0008",
    "programa": "Coordinaciўn de la PolЎtica Nacional de Evaluaciўn Educativa",
    " \"pp\"": "1"
  },
  {
    "items": "31",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "33.344416",
    "porcentaje": "0.0008",
    "programa": "Programa de desarrollo organizacional de los Consejos de Cuenca",
    " \"pp\"": "15"
  },
  {
    "items": "2",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "35.238754",
    "porcentaje": "0.0008",
    "programa": "Proyectos de infraestructuraяde ciencia y tecnologЎa",
    " \"pp\"": "10"
  },
  {
    "items": "18",
    "ramo": "25",
    "nombre": "Previsiones y Aportaciones para los Sistemas de Educaciўn B sica, Normal, Tecnolўgica y de Adultos",
    "total": "36.617605",
    "porcentaje": "0.0009",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "38.51",
    "porcentaje": "0.0009",
    "programa": "Fortalecimiento del Sector de Ahorro y Cr‚dito Popular y Cooperativo",
    " \"pp\"": "10"
  },
  {
    "items": "21",
    "ramo": "43",
    "nombre": "Instituto Federal de Telecomunicaciones",
    "total": "39.124763",
    "porcentaje": "0.0009",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "20",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "40.154973",
    "porcentaje": "0.0009",
    "programa": "Apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "3",
    "ramo": "12",
    "nombre": "Salud",
    "total": "41.759342",
    "porcentaje": "0.0010",
    "programa": "Programa de Atenciўn a Personas con Discapacidad",
    " \"pp\"": "39"
  },
  {
    "items": "1",
    "ramo": "32",
    "nombre": "Tribunal Federal de Justicia Fiscal y Administrativa",
    "total": "42.541387",
    "porcentaje": "0.0010",
    "programa": "Proyectos de inmuebles (oficinas administrativas)",
    " \"pp\"": "25"
  },
  {
    "items": "2",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "44.397912",
    "porcentaje": "0.0010",
    "programa": "Programa de Manejo de µreas Naturales Protegidas",
    " \"pp\"": "35"
  },
  {
    "items": "82",
    "ramo": "46",
    "nombre": "Comisiўn Nacional de Hidrocarburos",
    "total": "45.144184",
    "porcentaje": "0.0011",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "34",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "45.060939",
    "porcentaje": "0.0011",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "16",
    "ramo": "42",
    "nombre": "Instituto Nacional para la Evaluaciўn de la Educaciўn",
    "total": "46.298478",
    "porcentaje": "0.0011",
    "programa": "Planeaciўn, Coordinaciўn Institucional y Comunicaciўn Social",
    " \"pp\"": "2"
  },
  {
    "items": "1",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "48.47364",
    "porcentaje": "0.0011",
    "programa": "Sistema Nacional de Investigaciўn AgrЎcola",
    " \"pp\"": "4"
  },
  {
    "items": "64",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "48.167907",
    "porcentaje": "0.0011",
    "programa": "Regulaciўn y certificaciўnяde est ndares de calidad turЎstica я я я",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "44",
    "nombre": "Instituto Nacional de Transparencia, Acceso a la Informaciўn y Protecciўn de Datos Personales",
    "total": "48",
    "porcentaje": "0.0011",
    "programa": "Proyectos de inmuebles (oficinas administrativas)",
    " \"pp\"": "25"
  },
  {
    "items": "10",
    "ramo": "2",
    "nombre": "Oficina de la Presidencia de la RepЈblica",
    "total": "49.707939",
    "porcentaje": "0.0012",
    "programa": "Atenciўn y seguimiento a las solicitudes y demandas de la ciudadanЎa.",
    " \"pp\"": "3"
  },
  {
    "items": "39",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "50.140799",
    "porcentaje": "0.0012",
    "programa": "Realizar servicios de apoyoя a la funciўn sustantiva",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "50",
    "porcentaje": "0.0012",
    "programa": "Mantenimiento de infraestructura",
    " \"pp\"": "27"
  },
  {
    "items": "23",
    "ramo": "41",
    "nombre": "Comisiўn Federal de Competencia Econўmica",
    "total": "52.18291",
    "porcentaje": "0.0012",
    "programa": "Actividades de Apoyo Administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "4",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "51.855592",
    "porcentaje": "0.0012",
    "programa": "Estudios t‚cnicos para la construcciўn, conservaciўn y operaciўn de infraestructura de comunicaciones y transportes",
    " \"pp\"": "4"
  },
  {
    "items": "11",
    "ramo": "27",
    "nombre": "Funciўn PЈblica",
    "total": "51.777476",
    "porcentaje": "0.0012",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "42",
    "ramo": "18",
    "nombre": "EnergЎa",
    "total": "54.305389",
    "porcentaje": "0.0013",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "41",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "56.296167",
    "porcentaje": "0.0013",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "24",
    "nombre": "Deuda PЈblica",
    "total": "56.079734",
    "porcentaje": "0.0013",
    "programa": "Pensiўn ISSSTE",
    " \"pp\"": "3"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "55.86516",
    "porcentaje": "0.0013",
    "programa": "Provisiўn para la Armonizaciўn Contable",
    " \"pp\"": "116"
  },
  {
    "items": "17",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "56.39769",
    "porcentaje": "0.0013",
    "programa": "Desarrollo integral de las personas con discapacidad",
    " \"pp\"": "4"
  },
  {
    "items": "20",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "57.429975",
    "porcentaje": "0.0013",
    "programa": "Mantener relaciones de colaboraciўn internacional con organismos afines nacionales e internacionales, realizar estudios y administrar el archivo institucional",
    " \"pp\"": "16"
  },
  {
    "items": "62",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "57.121696",
    "porcentaje": "0.0013",
    "programa": "Capacitaciўn Ambiental y Desarrollo Sustentable",
    " \"pp\"": "5"
  },
  {
    "items": "21",
    "ramo": "22",
    "nombre": "Instituto Nacional Electoral",
    "total": "57.754585",
    "porcentaje": "0.0014",
    "programa": "Planeaciўn, innovaciўn, seguimiento y evaluaciўn",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "57.628117",
    "porcentaje": "0.0014",
    "programa": "Estudios de preinversiўn",
    " \"pp\"": "28"
  },
  {
    "items": "5",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "60.13122",
    "porcentaje": "0.0014",
    "programa": "Formaciўnяdel personal de la marina mercante",
    " \"pp\"": "7"
  },
  {
    "items": "18",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "61.388944",
    "porcentaje": "0.0014",
    "programa": "Producciўn de programas informativos de radio y televisiўn del Ejecutivo Federal",
    " \"pp\"": "4"
  },
  {
    "items": "10",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "62.910672",
    "porcentaje": "0.0015",
    "programa": "Derechos humanos",
    " \"pp\"": "17"
  },
  {
    "items": "129",
    "ramo": "46",
    "nombre": "Comisiўn Nacional de Hidrocarburos",
    "total": "64.185846",
    "porcentaje": "0.0015",
    "programa": "Administraciўn T‚cnica de Asignaciones y Contratos",
    " \"pp\"": "2"
  },
  {
    "items": "174",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "63.539017",
    "porcentaje": "0.0015",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "33",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "64.704448",
    "porcentaje": "0.0015",
    "programa": "Operaciўn y Conservaciўn de infraestructura ferroviaria",
    " \"pp\"": "22"
  },
  {
    "items": "23",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "65.513933",
    "porcentaje": "0.0016",
    "programa": "Ejecutar el programa de comunicaciўn social",
    " \"pp\"": "17"
  },
  {
    "items": "18",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "67.022707",
    "porcentaje": "0.0016",
    "programa": "Planeaciўn demogr fica del paЎs",
    " \"pp\"": "6"
  },
  {
    "items": "11",
    "ramo": "2",
    "nombre": "Oficina de la Presidencia de la RepЈblica",
    "total": "67.875924",
    "porcentaje": "0.0016",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "19",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "68.593834",
    "porcentaje": "0.0016",
    "programa": "Fortalecimiento de la competitividad y transparencia del marco regulatorio que aplica a los particulares",
    " \"pp\"": "10"
  },
  {
    "items": "1",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "69.933302",
    "porcentaje": "0.0016",
    "programa": "Vinculaciўn Productiva",
    " \"pp\"": "13"
  },
  {
    "items": "23",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "69.890585",
    "porcentaje": "0.0016",
    "programa": "Conducciўn e instrumentaciўn de la polЎtica nacional de vivienda",
    " \"pp\"": "4"
  },
  {
    "items": "1",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "70.132229",
    "porcentaje": "0.0016",
    "programa": "Subsidios a programas para jўvenes",
    " \"pp\"": "8"
  },
  {
    "items": "12",
    "ramo": "12",
    "nombre": "Salud",
    "total": "70.885273",
    "porcentaje": "0.0017",
    "programa": "Regulaciўn y vigilancia de establecimientos y servicios de atenciўn m‚dica",
    " \"pp\"": "5"
  },
  {
    "items": "16",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "70.516285",
    "porcentaje": "0.0017",
    "programa": "Regulaciўn de los servicios de seguridad privada para coadyuvar a la prevenciўn del delito",
    " \"pp\"": "905"
  },
  {
    "items": "17",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "71.29502",
    "porcentaje": "0.0017",
    "programa": "Preservaciўn y difusiўn del acervo documental de la Naciўn",
    " \"pp\"": "2"
  },
  {
    "items": "22",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "73.206343",
    "porcentaje": "0.0017",
    "programa": "Coordinar las publicaciones, realizar investigaciones, promover la formaciўn acad‚mica y ofrecer servicios bibliohemerogr ficos en materia de Derechos Humanos",
    " \"pp\"": "18"
  },
  {
    "items": "14",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "74.307485",
    "porcentaje": "0.0017",
    "programa": "Estudios de preinversiўn",
    " \"pp\"": "28"
  },
  {
    "items": "58",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "74.75873",
    "porcentaje": "0.0018",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "75",
    "porcentaje": "0.0018",
    "programa": "Capacitaciўn para Productores e Intermediarios Financieros Rurales",
    " \"pp\"": "2"
  },
  {
    "items": "26",
    "ramo": "40",
    "nombre": "Informaciўn Nacional EstadЎstica y Geogr fica",
    "total": "76.375876",
    "porcentaje": "0.0018",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen Gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "14",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "75.578365",
    "porcentaje": "0.0018",
    "programa": "Implementaciўn de la Reforma al Sistema de Justicia Penal",
    " \"pp\"": "10"
  },
  {
    "items": "5",
    "ramo": "12",
    "nombre": "Salud",
    "total": "78.770436",
    "porcentaje": "0.0019",
    "programa": "Proyectos de inmuebles (oficinas administrativas)",
    " \"pp\"": "25"
  },
  {
    "items": "74",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "79.145587",
    "porcentaje": "0.0019",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "314",
    "ramo": "31",
    "nombre": "Tribunales Agrarios",
    "total": "80.014403",
    "porcentaje": "0.0019",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "14",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "80.405134",
    "porcentaje": "0.0019",
    "programa": "Investigaciўn acad‚mica en el marco de las ciencias penales",
    " \"pp\"": "10"
  },
  {
    "items": "19",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "81.976247",
    "porcentaje": "0.0019",
    "programa": "Normalizaciўn y certificaciўn en competencias laborales",
    " \"pp\"": "28"
  },
  {
    "items": "281",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "83.365991",
    "porcentaje": "0.0020",
    "programa": "Conducciўn de las polЎticas hЎdricas",
    " \"pp\"": "1"
  },
  {
    "items": "17",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "84.222666",
    "porcentaje": "0.0020",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "28",
    "ramo": "32",
    "nombre": "Tribunal Federal de Justicia Fiscal y Administrativa",
    "total": "85.314605",
    "porcentaje": "0.0020",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "85.290284",
    "porcentaje": "0.0020",
    "programa": "Comisiones y pago a CECOBAN",
    " \"pp\"": "7"
  },
  {
    "items": "40",
    "ramo": "14",
    "nombre": "Trabajo y Previsiўn Social",
    "total": "84.522075",
    "porcentaje": "0.0020",
    "programa": "Capacitaciўn para Incrementar la Productividad",
    " \"pp\"": "4"
  },
  {
    "items": "1",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "87.059229",
    "porcentaje": "0.0020",
    "programa": "Salud y producciўn animal",
    " \"pp\"": "23"
  },
  {
    "items": "20",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "88.431154",
    "porcentaje": "0.0021",
    "programa": "Impartir capacitaciўn en Derechos Humanos y establecer vЎnculos de colaboraciўn interinstitucional",
    " \"pp\"": "15"
  },
  {
    "items": "17",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "87.858353",
    "porcentaje": "0.0021",
    "programa": "Investigaciўn, estudios y proyectos en materia espacial",
    " \"pp\"": "29"
  },
  {
    "items": "20",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "87.839378",
    "porcentaje": "0.0021",
    "programa": "Educaciўn y cultura indЎgena",
    " \"pp\"": "3"
  },
  {
    "items": "14",
    "ramo": "43",
    "nombre": "Instituto Federal de Telecomunicaciones",
    "total": "88.151925",
    "porcentaje": "0.0021",
    "programa": "Regulaciўn para el uso eficiente del espectro radioel‚ctrico",
    " \"pp\"": "7"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "89.294625",
    "porcentaje": "0.0021",
    "programa": "Pagas de Defunciўn y Ayuda para Gastos de Sepelio",
    " \"pp\"": "10"
  },
  {
    "items": "78",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "89.55562",
    "porcentaje": "0.0021",
    "programa": "Desarrollo y promociўn de proyectos turЎsticos sustentables",
    " \"pp\"": "5"
  },
  {
    "items": "72",
    "ramo": "37",
    "nombre": "ConsejerЎa JurЎdica del Ejecutivo Federal",
    "total": "91.430493",
    "porcentaje": "0.0021",
    "programa": "Asesoramiento en materia jurЎdica al Presidente de la Republica y al Gobierno Federal.",
    " \"pp\"": "1"
  },
  {
    "items": "41",
    "ramo": "27",
    "nombre": "Funciўn PЈblica",
    "total": "91.494859",
    "porcentaje": "0.0021",
    "programa": "Promociўn de la cultura de la legalidad y el aprecio por la rendiciўn de cuentas",
    " \"pp\"": "8"
  },
  {
    "items": "26",
    "ramo": "42",
    "nombre": "Instituto Nacional para la Evaluaciўn de la Educaciўn",
    "total": "90.860656",
    "porcentaje": "0.0021",
    "programa": "Informaciўn y Fomento de la Cultura de la Evaluaciўn",
    " \"pp\"": "3"
  },
  {
    "items": "1",
    "ramo": "24",
    "nombre": "Deuda PЈblica",
    "total": "91.86",
    "porcentaje": "0.0022",
    "programa": "Coberturas",
    " \"pp\"": "7"
  },
  {
    "items": "23",
    "ramo": "44",
    "nombre": "Instituto Nacional de Transparencia, Acceso a la Informaciўn y Protecciўn de Datos Personales",
    "total": "95.548251",
    "porcentaje": "0.0023",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "69",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "95.795204",
    "porcentaje": "0.0023",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "98.146829",
    "porcentaje": "0.0023",
    "programa": "Mantenimiento de infraestructura",
    " \"pp\"": "27"
  },
  {
    "items": "88",
    "ramo": "18",
    "nombre": "EnergЎa",
    "total": "98.444986",
    "porcentaje": "0.0023",
    "programa": "Gestiўn, promociўn, supervisiўn y evaluaciўn del aprovechamiento sustentable de la energЎa",
    " \"pp\"": "8"
  },
  {
    "items": "1",
    "ramo": "1",
    "nombre": "Poder Legislativo",
    "total": "99.305",
    "porcentaje": "0.0023",
    "programa": "Mantenimiento de Infraestructura",
    " \"pp\"": "27"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "100",
    "porcentaje": "0.0024",
    "programa": "Programa para el Rescate del Acapulco Tradicional",
    " \"pp\"": "84"
  },
  {
    "items": "1",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "100",
    "porcentaje": "0.0024",
    "programa": "Investigaciўn y desarrollo militar en coordinaciўn con universidades pЈblicas, instituciones pЈblicas de educaciўn superior y/o dem s centros pЈblicos de investigaciўn superior.я",
    " \"pp\"": "22"
  },
  {
    "items": "3",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "100",
    "porcentaje": "0.0024",
    "programa": "R‚gimen de Incorporaciўn",
    " \"pp\"": "2"
  },
  {
    "items": "5",
    "ramo": "5",
    "nombre": "Relaciones Exteriores",
    "total": "100.000002",
    "porcentaje": "0.0024",
    "programa": "Proyectos de inmuebles (oficinas administrativas)",
    " \"pp\"": "25"
  },
  {
    "items": "12",
    "ramo": "44",
    "nombre": "Instituto Nacional de Transparencia, Acceso a la Informaciўn y Protecciўn de Datos Personales",
    "total": "101.628314",
    "porcentaje": "0.0024",
    "programa": "Desempe¤o organizacional y modelo institucional orientado a resultados con enfoque de derechos humanos y perspectiva de g‚nero",
    " \"pp\"": "4"
  },
  {
    "items": "55",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "104.422748",
    "porcentaje": "0.0024",
    "programa": "Normativa Ambiental e Instrumentos para el Desarrollo Sustentable",
    " \"pp\"": "30"
  },
  {
    "items": "41",
    "ramo": "12",
    "nombre": "Salud",
    "total": "104.800257",
    "porcentaje": "0.0025",
    "programa": "Calidad en la Atenciўn M‚dica",
    " \"pp\"": "202"
  },
  {
    "items": "8",
    "ramo": "40",
    "nombre": "Informaciўn Nacional EstadЎstica y Geogr fica",
    "total": "105.247248",
    "porcentaje": "0.0025",
    "programa": "Censo de Poblaciўn y Vivienda",
    " \"pp\"": "4"
  },
  {
    "items": "50",
    "ramo": "27",
    "nombre": "Funciўn PЈblica",
    "total": "105.70739",
    "porcentaje": "0.0025",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "73",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "107.198723",
    "porcentaje": "0.0025",
    "programa": "Fortalecimiento de las instituciones democr ticas a fin de lograr las reformas legislativas que transformen el orden jurЎdico nacional",
    " \"pp\"": "16"
  },
  {
    "items": "14",
    "ramo": "27",
    "nombre": "Funciўn PЈblica",
    "total": "106.85062",
    "porcentaje": "0.0025",
    "programa": "Integraciўn de las estructuras profesionales del gobierno",
    " \"pp\"": "3"
  },
  {
    "items": "1",
    "ramo": "25",
    "nombre": "Previsiones y Aportaciones para los Sistemas de Educaciўn B sica, Normal, Tecnolўgica y de Adultos",
    "total": "108.177973",
    "porcentaje": "0.0025",
    "programa": "Previsiones salariales y econўmicas del Fondo de Aportaciones para la Educaciўn Tecnolўgica y de Adultos",
    " \"pp\"": "3"
  },
  {
    "items": "7",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "108",
    "porcentaje": "0.0025",
    "programa": "Programa de igualdad entre mujeres y hombres SDN",
    " \"pp\"": "900"
  },
  {
    "items": "6",
    "ramo": "27",
    "nombre": "Funciўn PЈblica",
    "total": "114.307446",
    "porcentaje": "0.0027",
    "programa": "Optimizaciўnяde los inmuebles federales y valuaciўn de los bienes nacionales",
    " \"pp\"": "7"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "118.847596",
    "porcentaje": "0.0028",
    "programa": "Apoyo a jubilados del IMSS e ISSSTE",
    " \"pp\"": "15"
  },
  {
    "items": "18",
    "ramo": "12",
    "nombre": "Salud",
    "total": "120.4",
    "porcentaje": "0.0028",
    "programa": "Protecciўn y restituciўn de los derechos de las ni¤as, ni¤os y adolescentes",
    " \"pp\"": "41"
  },
  {
    "items": "41",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "121.432789",
    "porcentaje": "0.0028",
    "programa": "Administraciўn, restauraciўn y difusiўn del acervo patrimonial y documental de la SHCP",
    " \"pp\"": "8"
  },
  {
    "items": "23",
    "ramo": "22",
    "nombre": "Instituto Nacional Electoral",
    "total": "120.629521",
    "porcentaje": "0.0028",
    "programa": "Organizaciўn del servicio profesional electoral",
    " \"pp\"": "2"
  },
  {
    "items": "5",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "125.709424",
    "porcentaje": "0.0030",
    "programa": "Programa de Prevenciўn de Riesgos",
    " \"pp\"": "254"
  },
  {
    "items": "2",
    "ramo": "12",
    "nombre": "Salud",
    "total": "126.150811",
    "porcentaje": "0.0030",
    "programa": "Programa de Desarrollo Comunitario \\",
    " \"pp\"": "omunidad DIFerente\\\"\""
  },
  {
    "items": "21",
    "ramo": "18",
    "nombre": "EnergЎa",
    "total": "127.166209",
    "porcentaje": "0.0030",
    "programa": "Regulaciўn y supervisiўn de actividades nucleares y radiolўgicas",
    " \"pp\"": "3"
  },
  {
    "items": "1",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "129.036004",
    "porcentaje": "0.0030",
    "programa": "Mantenimiento de infraestructura",
    " \"pp\"": "27"
  },
  {
    "items": "56",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "130.420574",
    "porcentaje": "0.0031",
    "programa": "Dise¤o eяinstrumentaciўn de acciones en materia de competitividad, competencia y polЎtica regulatoria",
    " \"pp\"": "7"
  },
  {
    "items": "19",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "129.756932",
    "porcentaje": "0.0031",
    "programa": "Investigaciўn, estudios, proyectos y capacitaciўn en materia de transporte",
    " \"pp\"": "15"
  },
  {
    "items": "1",
    "ramo": "25",
    "nombre": "Previsiones y Aportaciones para los Sistemas de Educaciўn B sica, Normal, Tecnolўgica y de Adultos",
    "total": "133.707873",
    "porcentaje": "0.0031",
    "programa": "Becas para la poblaciўn atendida por el sector educativo",
    " \"pp\"": "1"
  },
  {
    "items": "77",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "135.51676",
    "porcentaje": "0.0032",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "9",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "137.247445",
    "porcentaje": "0.0032",
    "programa": "Recopilaciўn y producciўn de material informativo (Notimex)",
    " \"pp\"": "5"
  },
  {
    "items": "21",
    "ramo": "22",
    "nombre": "Instituto Nacional Electoral",
    "total": "138.336607",
    "porcentaje": "0.0032",
    "programa": "Apoyo a la funciўn pЈblica y al mejoramiento de la gestiўn",
    " \"pp\"": "1"
  },
  {
    "items": "67",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "137.674669",
    "porcentaje": "0.0032",
    "programa": "Defensa jurЎdica de la SecretarЎa de Gobernaciўn y compilaciўn jurЎdica nacional y testamentaria ciudadana",
    " \"pp\"": "9"
  },
  {
    "items": "5",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "140.821405",
    "porcentaje": "0.0033",
    "programa": "Fideicomisos Ambientales",
    " \"pp\"": "15"
  },
  {
    "items": "290",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "141.439614",
    "porcentaje": "0.0033",
    "programa": "Proporcionar serviciosяde atenciўn al pЈblico enяgeneral, en oficinas for neas, asЎ como, atender asuntos relacionados con las personas migrantes",
    " \"pp\"": "3"
  },
  {
    "items": "15",
    "ramo": "44",
    "nombre": "Instituto Nacional de Transparencia, Acceso a la Informaciўn y Protecciўn de Datos Personales",
    "total": "142.627362",
    "porcentaje": "0.0034",
    "programa": "Coordinar el Sistema Nacional de Transparencia, Acceso a la Informaciўn y de Protecciўn de Datos Personales",
    " \"pp\"": "3"
  },
  {
    "items": "19",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "143.815588",
    "porcentaje": "0.0034",
    "programa": "Promover la Protecciўn de los Derechos Humanos y Prevenir la Discriminaciўn",
    " \"pp\"": "24"
  },
  {
    "items": "1",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "148.0817",
    "porcentaje": "0.0035",
    "programa": "Obligaciones jurЎdicas Ineludibles",
    " \"pp\"": "1"
  },
  {
    "items": "17",
    "ramo": "18",
    "nombre": "EnergЎa",
    "total": "150.141496",
    "porcentaje": "0.0035",
    "programa": "Distribuciўn de petrўleo, gas, petrolЎferos y petroquЎmicos",
    " \"pp\"": "10"
  },
  {
    "items": "2",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "151.080591",
    "porcentaje": "0.0035",
    "programa": "Proyectos de inmuebles (oficinas administrativas)",
    " \"pp\"": "25"
  },
  {
    "items": "1",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "152.036869",
    "porcentaje": "0.0036",
    "programa": "Sistema de Informaciўn y Gestiўn Educativa",
    " \"pp\"": "67"
  },
  {
    "items": "260",
    "ramo": "45",
    "nombre": "Comisiўn Reguladora de EnergЎa",
    "total": "152.389397",
    "porcentaje": "0.0036",
    "programa": "Regulaciўn y permisos de electricidad",
    " \"pp\"": "1"
  },
  {
    "items": "2",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "153.242012",
    "porcentaje": "0.0036",
    "programa": "Inversiўn del Servicio Meteorolўgico Nacional",
    " \"pp\"": "140"
  },
  {
    "items": "21",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "159.815881",
    "porcentaje": "0.0038",
    "programa": "Producciўn y Difusiўn de Materiales Audiovisuales",
    " \"pp\"": "36"
  },
  {
    "items": "65",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "162.876383",
    "porcentaje": "0.0038",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "15",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "170.833271",
    "porcentaje": "0.0040",
    "programa": "Investigar, perseguir y prevenir delitos del orden electoral",
    " \"pp\"": "11"
  },
  {
    "items": "209",
    "ramo": "46",
    "nombre": "Comisiўn Nacional de Hidrocarburos",
    "total": "172.49978",
    "porcentaje": "0.0040",
    "programa": "Promociўn y regulaciўn de Hidrocarburos",
    " \"pp\"": "1"
  },
  {
    "items": "3",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "178.321833",
    "porcentaje": "0.0042",
    "programa": "Consolidaciўn de Reservas Urbanas",
    " \"pp\"": "255"
  },
  {
    "items": "9",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "181.095774",
    "porcentaje": "0.0043",
    "programa": "Regulaciўn yяsupervisiўn delяSistema de Ahorro para el Retiro",
    " \"pp\"": "3"
  },
  {
    "items": "68",
    "ramo": "22",
    "nombre": "Instituto Nacional Electoral",
    "total": "182.372776",
    "porcentaje": "0.0043",
    "programa": "Vinculaciўn con la sociedad",
    " \"pp\"": "10"
  },
  {
    "items": "15",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "181.668473",
    "porcentaje": "0.0043",
    "programa": "Desarrollo de Infraestructura Aeroportuaria",
    " \"pp\"": "30"
  },
  {
    "items": "7",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "184.59239",
    "porcentaje": "0.0043",
    "programa": "Modernizaciўn del Catastro Rural Nacional",
    " \"pp\"": "3"
  },
  {
    "items": "2",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "185.22391",
    "porcentaje": "0.0043",
    "programa": "Sistema Nacional de Informaciўn para el Desarrollo Rural Sustentable",
    " \"pp\"": "17"
  },
  {
    "items": "60",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "185.792687",
    "porcentaje": "0.0044",
    "programa": "Regulaciўn, modernizaciўn y promociўn de la actividad minera",
    " \"pp\"": "7"
  },
  {
    "items": "58",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "186.559868",
    "porcentaje": "0.0044",
    "programa": "Conservaciўn y mantenimiento a los CIP's",
    " \"pp\"": "7"
  },
  {
    "items": "281",
    "ramo": "45",
    "nombre": "Comisiўn Reguladora de EnergЎa",
    "total": "187.133616",
    "porcentaje": "0.0044",
    "programa": "Regulaciўn y permisos de Hidrocarburos",
    " \"pp\"": "2"
  },
  {
    "items": "307",
    "ramo": "51",
    "nombre": "Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado",
    "total": "188.096969",
    "porcentaje": "0.0044",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "2",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "188.570937",
    "porcentaje": "0.0044",
    "programa": "Conservaciўn y Aprovechamiento Sustentable de la Vida Silvestre",
    " \"pp\"": "20"
  },
  {
    "items": "22",
    "ramo": "14",
    "nombre": "Trabajo y Previsiўn Social",
    "total": "190.234596",
    "porcentaje": "0.0045",
    "programa": "Procuraciўn de justicia laboral",
    " \"pp\"": "2"
  },
  {
    "items": "5",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "192.103697",
    "porcentaje": "0.0045",
    "programa": "Producciўn de informaciўn geolўgica del territorio nacional",
    " \"pp\"": "7"
  },
  {
    "items": "51",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "192.40629",
    "porcentaje": "0.0045",
    "programa": "Regulaciўn del sector financiero",
    " \"pp\"": "1"
  },
  {
    "items": "3",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "193.153206",
    "porcentaje": "0.0045",
    "programa": "Programa para regularizar asentamientos humanos irregulares",
    " \"pp\"": "213"
  },
  {
    "items": "153",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "193.425305",
    "porcentaje": "0.0045",
    "programa": "Sistema Nacional de µreas Naturales Protegidas",
    " \"pp\"": "13"
  },
  {
    "items": "30",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "197.197472",
    "porcentaje": "0.0046",
    "programa": "Investigaciўn en Cambio Clim tico, Sustentabilidad y Crecimiento Verde",
    " \"pp\"": "15"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "200",
    "porcentaje": "0.0047",
    "programa": "Proyectos para el Desarrollo Regional de la Zona Henequenera del Sureste (Yucat n)",
    " \"pp\"": "52"
  },
  {
    "items": "34",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "201.870594",
    "porcentaje": "0.0047",
    "programa": "Programa de infraestructura fЎsica educativa",
    " \"pp\"": "47"
  },
  {
    "items": "20",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "202.938135",
    "porcentaje": "0.0048",
    "programa": "Detecciўn y prevenciўn de ilЎcitos financieros",
    " \"pp\"": "2"
  },
  {
    "items": "11",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "204.37029",
    "porcentaje": "0.0048",
    "programa": "Promover la atenciўn y prevenciўn de la violencia contra las mujeres",
    " \"pp\"": "15"
  },
  {
    "items": "22",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "205.682014",
    "porcentaje": "0.0048",
    "programa": "Programa de Calidad y Atenciўn Integral al Turismo",
    " \"pp\"": "5"
  },
  {
    "items": "108",
    "ramo": "18",
    "nombre": "EnergЎa",
    "total": "205.984263",
    "porcentaje": "0.0048",
    "programa": "Coordinaciўn de laяpolЎtica energ‚tica enяelectricidad",
    " \"pp\"": "2"
  },
  {
    "items": "79",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "206.661965",
    "porcentaje": "0.0049",
    "programa": "Coordinaciўn del Sistema Nacional de Protecciўn Civil",
    " \"pp\"": "1"
  },
  {
    "items": "86",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "209.557958",
    "porcentaje": "0.0049",
    "programa": "Regulaciўn y supervisiўn del sector asegurador y afianzador",
    " \"pp\"": "4"
  },
  {
    "items": "1",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "210",
    "porcentaje": "0.0049",
    "programa": "Inversiўn de Capital de Riesgo",
    " \"pp\"": "10"
  },
  {
    "items": "74",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "210.412182",
    "porcentaje": "0.0049",
    "programa": "Fomento de la cultura de la participaciўn ciudadana en la prevenciўn del delito",
    " \"pp\"": "23"
  },
  {
    "items": "14",
    "ramo": "44",
    "nombre": "Instituto Nacional de Transparencia, Acceso a la Informaciўn y Protecciўn de Datos Personales",
    "total": "213.087358",
    "porcentaje": "0.0050",
    "programa": "Promover el pleno ejercicio de los derechos de acceso a la informaciўn pЈblica y de protecciўn de datos personales",
    " \"pp\"": "2"
  },
  {
    "items": "22",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "216.42681",
    "porcentaje": "0.0051",
    "programa": "Investigaciўn cientЎfica y tecnolўgica",
    " \"pp\"": "9"
  },
  {
    "items": "8",
    "ramo": "12",
    "nombre": "Salud",
    "total": "224.22613",
    "porcentaje": "0.0053",
    "programa": "Programa de estancias infantiles para apoyar a madres trabajadoras",
    " \"pp\"": "174"
  },
  {
    "items": "22",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "225.45108",
    "porcentaje": "0.0053",
    "programa": "Producciўn y distribuciўn de libros y materiales culturales",
    " \"pp\"": "16"
  },
  {
    "items": "323",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "225.320916",
    "porcentaje": "0.0053",
    "programa": "Apoyo a la Funciўn PЈblica y Buen Gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "28",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "226.055325",
    "porcentaje": "0.0053",
    "programa": "Programas del Fondo Nacional de Fomento a las ArtesanЎas (FONART)",
    " \"pp\"": "57"
  },
  {
    "items": "7",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "226.460484",
    "porcentaje": "0.0053",
    "programa": "Programa de Formaciўn de Recursos Humanos basada en Competencias",
    " \"pp\"": "9"
  },
  {
    "items": "21",
    "ramo": "5",
    "nombre": "Relaciones Exteriores",
    "total": "226.62972",
    "porcentaje": "0.0053",
    "programa": "Coordinaciўn, promociўn y ejecuciўn de la Cooperaciўn internacional para el desarrollo",
    " \"pp\"": "1"
  },
  {
    "items": "22",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "227.413823",
    "porcentaje": "0.0053",
    "programa": "Producciўn de impresos valorados, no valorados, numerados y de seguridad",
    " \"pp\"": "1"
  },
  {
    "items": "59",
    "ramo": "27",
    "nombre": "Funciўn PЈblica",
    "total": "227.920883",
    "porcentaje": "0.0054",
    "programa": "Inhibiciўn y sanciўn de las pr cticas de corrupciўn",
    " \"pp\"": "6"
  },
  {
    "items": "82",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "232.047989",
    "porcentaje": "0.0055",
    "programa": "Planeaciўn, elaboraciўn y seguimiento de las polЎticas y programas de la dependencia",
    " \"pp\"": "6"
  },
  {
    "items": "67",
    "ramo": "40",
    "nombre": "Informaciўn Nacional EstadЎstica y Geogr fica",
    "total": "236.373043",
    "porcentaje": "0.0055",
    "programa": "Planeaciўn, Coordinaciўn, Seguimiento y Evaluaciўn del Sistema Nacional de Informaciўn EstadЎstica y Geogr fica",
    " \"pp\"": "1"
  },
  {
    "items": "25",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "238.787927",
    "porcentaje": "0.0056",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "2",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "240.501782",
    "porcentaje": "0.0057",
    "programa": "Programa de Conservaciўn para el Desarrollo Sostenible",
    " \"pp\"": "46"
  },
  {
    "items": "61",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "241.488129",
    "porcentaje": "0.0057",
    "programa": "Supervisar y vigilar la aplicaciўn del marco legal en la investigaciўn y persecuciўn del delito del orden federal",
    " \"pp\"": "12"
  },
  {
    "items": "13",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "242.38481",
    "porcentaje": "0.0057",
    "programa": "Desarrollo tecnolўgico y prestaciўn de servicios metrolўgicos para la competitividadя",
    " \"pp\"": "6"
  },
  {
    "items": "20",
    "ramo": "31",
    "nombre": "Tribunales Agrarios",
    "total": "245.423378",
    "porcentaje": "0.0058",
    "programa": "Resoluciўn de juicios agrarios dotatorios de tierras y los recursos de revisiўn",
    " \"pp\"": "2"
  },
  {
    "items": "2",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "246.2",
    "porcentaje": "0.0058",
    "programa": "Reducciўn de Costos de Acceso al Cr‚dito",
    " \"pp\"": "30"
  },
  {
    "items": "2",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "246.639577",
    "porcentaje": "0.0058",
    "programa": "Programa nacional de financiamiento al microempresario y a la mujer rural",
    " \"pp\"": "21"
  },
  {
    "items": "51",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "248.01567",
    "porcentaje": "0.0058",
    "programa": "Promociўn del respeto a los derechos humanos y atenciўn a vЎctimas del delito",
    " \"pp\"": "9"
  },
  {
    "items": "18",
    "ramo": "42",
    "nombre": "Instituto Nacional para la Evaluaciўn de la Educaciўn",
    "total": "249.424873",
    "porcentaje": "0.0059",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "31",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "249.724647",
    "porcentaje": "0.0059",
    "programa": "Instrumentaciўn de polЎticas de fomento para los emprendedores y las micro, peque¤as y medianas empresas",
    " \"pp\"": "8"
  },
  {
    "items": "3",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "251.990254",
    "porcentaje": "0.0059",
    "programa": "Programa de Coinversiўn Social",
    " \"pp\"": "70"
  },
  {
    "items": "50",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "252.536646",
    "porcentaje": "0.0059",
    "programa": "Ordenamiento y regulaciўn de la propiedad rural",
    " \"pp\"": "3"
  },
  {
    "items": "217",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "252.720788",
    "porcentaje": "0.0059",
    "programa": "Planeaciўn y conducciўn de la polЎtica de turismo",
    " \"pp\"": "1"
  },
  {
    "items": "25",
    "ramo": "43",
    "nombre": "Instituto Federal de Telecomunicaciones",
    "total": "253.027715",
    "porcentaje": "0.0059",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "2",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "253.546346",
    "porcentaje": "0.0060",
    "programa": "Programa de modernizaciўn de los registros pЈblicos de la propiedad y catastros",
    " \"pp\"": "3"
  },
  {
    "items": "124",
    "ramo": "18",
    "nombre": "EnergЎa",
    "total": "254.846208",
    "porcentaje": "0.0060",
    "programa": "Coordinaciўn deяla polЎtica energ‚tica enяhidrocarburos",
    " \"pp\"": "3"
  },
  {
    "items": "91",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "254.9497",
    "porcentaje": "0.0060",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "21",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "256.070013",
    "porcentaje": "0.0060",
    "programa": "Articulaciўn de polЎticas pЈblicas integrales de juventud",
    " \"pp\"": "16"
  },
  {
    "items": "77",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "258.865389",
    "porcentaje": "0.0061",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "262.63125",
    "porcentaje": "0.0062",
    "programa": "Compensaciones de Car cter Militar con Pago Јnico",
    " \"pp\"": "13"
  },
  {
    "items": "79",
    "ramo": "27",
    "nombre": "Funciўn PЈblica",
    "total": "268.111785",
    "porcentaje": "0.0063",
    "programa": "Regulaciўn de los procesos, tr mites y servicios de la Administraciўn PЈblica Federal",
    " \"pp\"": "5"
  },
  {
    "items": "110",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "279.162265",
    "porcentaje": "0.0066",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "7",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "279.999997",
    "porcentaje": "0.0066",
    "programa": "Proyectos de infraestructura gubernamental de gobernaciўn",
    " \"pp\"": "15"
  },
  {
    "items": "19",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "282.623419",
    "porcentaje": "0.0067",
    "programa": "Evaluaciones de la calidad de la educaciўn",
    " \"pp\"": "3"
  },
  {
    "items": "311",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "290.193947",
    "porcentaje": "0.0068",
    "programa": "Vigilancia del cumplimiento de la normatividad y fortalecimiento de la certeza jurЎdica entre proveedores y consumidores",
    " \"pp\"": "3"
  },
  {
    "items": "5",
    "ramo": "12",
    "nombre": "Salud",
    "total": "289.682464",
    "porcentaje": "0.0068",
    "programa": "Apoyos para la protecciўn de las personas en estado de necesidad",
    " \"pp\"": "272"
  },
  {
    "items": "250",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "290.57532",
    "porcentaje": "0.0068",
    "programa": "Programa de Derechos IndЎgenas",
    " \"pp\"": "11"
  },
  {
    "items": "2",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "291.869689",
    "porcentaje": "0.0069",
    "programa": "Proyectos de infraestructura gubernamental de seguridad nacional",
    " \"pp\"": "19"
  },
  {
    "items": "115",
    "ramo": "14",
    "nombre": "Trabajo y Previsiўn Social",
    "total": "292.792523",
    "porcentaje": "0.0069",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "300",
    "porcentaje": "0.0071",
    "programa": "Fondo de Apoyo a Migrantes",
    " \"pp\"": "33"
  },
  {
    "items": "369",
    "ramo": "42",
    "nombre": "Instituto Nacional para la Evaluaciўn de la Educaciўn",
    "total": "301.875226",
    "porcentaje": "0.0071",
    "programa": "Normatividad y PolЎtica Educativa",
    " \"pp\"": "3"
  },
  {
    "items": "12",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "304.558897",
    "porcentaje": "0.0072",
    "programa": "Regulaciўn, Gestiўn y Supervisiўn del Sector Hidrocarburos",
    " \"pp\"": "31"
  },
  {
    "items": "32",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "305.590619",
    "porcentaje": "0.0072",
    "programa": "Estudios y proyectos de construcciўn de caminos rurales y carreteras alimentadoras",
    " \"pp\"": "39"
  },
  {
    "items": "70",
    "ramo": "27",
    "nombre": "Funciўn PЈblica",
    "total": "305.543022",
    "porcentaje": "0.0072",
    "programa": "Fiscalizaciўn a la gestiўn pЈblica",
    " \"pp\"": "2"
  },
  {
    "items": "37",
    "ramo": "42",
    "nombre": "Instituto Nacional para la Evaluaciўn de la Educaciўn",
    "total": "308.037831",
    "porcentaje": "0.0072",
    "programa": "Evaluaciўn del Sistema Educativo Nacional",
    " \"pp\"": "2"
  },
  {
    "items": "3",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "307.852122",
    "porcentaje": "0.0072",
    "programa": "Programa para la productividad y competitividad industrial",
    " \"pp\"": "220"
  },
  {
    "items": "4",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "315.023475",
    "porcentaje": "0.0074",
    "programa": "Programa de Apoyo a las Instancias de Mujeres en las Entidades Federativas (PAIMEF)",
    " \"pp\"": "155"
  },
  {
    "items": "22",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "315.017785",
    "porcentaje": "0.0074",
    "programa": "Regularizaciўn y Registro de Actos JurЎdicos Agrarios",
    " \"pp\"": "1"
  },
  {
    "items": "414",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "314.812791",
    "porcentaje": "0.0074",
    "programa": "Inspecciўn y Vigilancia del Medio Ambiente y Recursos Naturales",
    " \"pp\"": "5"
  },
  {
    "items": "144",
    "ramo": "18",
    "nombre": "EnergЎa",
    "total": "316.121871",
    "porcentaje": "0.0074",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "12",
    "ramo": "44",
    "nombre": "Instituto Nacional de Transparencia, Acceso a la Informaciўn y Protecciўn de Datos Personales",
    "total": "320.030544",
    "porcentaje": "0.0075",
    "programa": "Garantizar el ўptimo cumplimiento de los derechos de acceso a la informaciўn pЈblica y la protecciўn de datos personales",
    " \"pp\"": "1"
  },
  {
    "items": "22",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "321.701088",
    "porcentaje": "0.0076",
    "programa": "Servicios a grupos con necesidades especiales",
    " \"pp\"": "3"
  },
  {
    "items": "19",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "323.269408",
    "porcentaje": "0.0076",
    "programa": "Proyectos de infraestructura social de ciencia y tecnologЎa",
    " \"pp\"": "10"
  },
  {
    "items": "33",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "323.855022",
    "porcentaje": "0.0076",
    "programa": "Fortalecimiento a la Transversalidad de la Perspectiva de G‚nero",
    " \"pp\"": "10"
  },
  {
    "items": "30",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "332.945043",
    "porcentaje": "0.0078",
    "programa": "Programa de Atenciўn a Jornaleros AgrЎcolas",
    " \"pp\"": "65"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "335",
    "porcentaje": "0.0079",
    "programa": "Programa para la fiscalizaciўn del gasto federalizado",
    " \"pp\"": "37"
  },
  {
    "items": "1",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "336",
    "porcentaje": "0.0079",
    "programa": "Apoyo a Unidades de Promociўn de Cr‚dito",
    " \"pp\"": "29"
  },
  {
    "items": "311",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "336.169606",
    "porcentaje": "0.0079",
    "programa": "Protecciўn de los derechos de los consumidores yяSistema Nacional de Protecciўn al Consumidor",
    " \"pp\"": "5"
  },
  {
    "items": "310",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "339.536679",
    "porcentaje": "0.0080",
    "programa": "Promociўn de una cultura de consumo responsable e inteligente",
    " \"pp\"": "2"
  },
  {
    "items": "256",
    "ramo": "12",
    "nombre": "Salud",
    "total": "341.590455",
    "porcentaje": "0.0080",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "58",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "341.635249",
    "porcentaje": "0.0080",
    "programa": "Aplicaciўn y modernizaciўn del marco regulatorio y operativo en materia mercantil, de normalizaciўn e inversiўn extranjera",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "350",
    "porcentaje": "0.0082",
    "programa": "Fondo de Reserva para el Retiro IMSS",
    " \"pp\"": "17"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "350",
    "porcentaje": "0.0082",
    "programa": "Seguridad Social Ca¤eros",
    " \"pp\"": "1"
  },
  {
    "items": "2",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "350",
    "porcentaje": "0.0082",
    "programa": "Programa Nacional de Convivencia Escolar",
    " \"pp\"": "271"
  },
  {
    "items": "110",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "353.700738",
    "porcentaje": "0.0083",
    "programa": "AsesorЎa jurЎdica y representaciўn judicial y administrativa de la SHCP",
    " \"pp\"": "4"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "358.718014",
    "porcentaje": "0.0084",
    "programa": "Fondo de Prevenciўn de Desastres Naturales (FOPREDEN)",
    " \"pp\"": "2"
  },
  {
    "items": "255",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "362.447802",
    "porcentaje": "0.0085",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "5",
    "ramo": "13",
    "nombre": "Marina",
    "total": "362.46",
    "porcentaje": "0.0085",
    "programa": "Proyectos de infraestructura gubernamental de seguridad nacional",
    " \"pp\"": "19"
  },
  {
    "items": "240",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "362.91689",
    "porcentaje": "0.0085",
    "programa": "Derecho de VЎa",
    " \"pp\"": "8"
  },
  {
    "items": "16",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "364.279881",
    "porcentaje": "0.0086",
    "programa": "Imparticiўn de justicia laboral para los trabajadores al servicio del Estado",
    " \"pp\"": "10"
  },
  {
    "items": "6",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "366.000162",
    "porcentaje": "0.0086",
    "programa": "Otros proyectos de infraestructura gubernamental",
    " \"pp\"": "24"
  },
  {
    "items": "861",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "374.967682",
    "porcentaje": "0.0088",
    "programa": "Atenciўn de tr mites y promociўn de los programas de la SecretarЎa en las entidades federativas",
    " \"pp\"": "9"
  },
  {
    "items": "14",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "386.604249",
    "porcentaje": "0.0091",
    "programa": "Coordinaciўn con las instancias que integran el Sistema Nacional de Seguridad PЈblica",
    " \"pp\"": "14"
  },
  {
    "items": "262",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "388.972705",
    "porcentaje": "0.0091",
    "programa": "Actividades de apoyo a la funciўn pЈblica y buen gobierno",
    " \"pp\"": "1"
  },
  {
    "items": "63",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "396.346706",
    "porcentaje": "0.0093",
    "programa": "Programa de Derechos Humanos",
    " \"pp\"": "22"
  },
  {
    "items": "1",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "400",
    "porcentaje": "0.0094",
    "programa": "Programa de Atenciўn de Conflictos Agrarios",
    " \"pp\"": "2"
  },
  {
    "items": "1",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "412.123172",
    "porcentaje": "0.0097",
    "programa": "Carrera Docente en UPES",
    " \"pp\"": "40"
  },
  {
    "items": "89",
    "ramo": "41",
    "nombre": "Comisiўn Federal de Competencia Econўmica",
    "total": "413.427895",
    "porcentaje": "0.0097",
    "programa": "Prevenciўn y eliminaciўn de pr cticas y concentraciones monopўlicas y dem s restricciones a la competencia y libre concurrencia",
    " \"pp\"": "6"
  },
  {
    "items": "21",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "412.910345",
    "porcentaje": "0.0097",
    "programa": "Desarrollo y Vinculaciўn de la Investigaciўn CientЎfica y Tecnolўgica con el Sector",
    " \"pp\"": "3"
  },
  {
    "items": "46",
    "ramo": "12",
    "nombre": "Salud",
    "total": "429.991942",
    "porcentaje": "0.0101",
    "programa": "Prevenciўn y atenciўn de VIH/SIDA y otras ITS",
    " \"pp\"": "16"
  },
  {
    "items": "1",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "431.224209",
    "porcentaje": "0.0101",
    "programa": "Proyectos para la atracciўn de inversiўn extranjera estrat‚gica",
    " \"pp\"": "4"
  },
  {
    "items": "1",
    "ramo": "18",
    "nombre": "EnergЎa",
    "total": "441.573",
    "porcentaje": "0.0104",
    "programa": "Fondos de Diversificaciўn Energ‚tica",
    " \"pp\"": "2"
  },
  {
    "items": "28",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "443",
    "porcentaje": "0.0104",
    "programa": "Rehabilitaciўn y Modernizaciўn de Presas y Estructuras de Cabeza",
    " \"pp\"": "111"
  },
  {
    "items": "377",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "447.207887",
    "porcentaje": "0.0105",
    "programa": "Sistemas Meteorolўgicos e Hidrolўgicos",
    " \"pp\"": "6"
  },
  {
    "items": "95",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "456.932906",
    "porcentaje": "0.0107",
    "programa": "Investigar y perseguir los delitos federales de car cter especial",
    " \"pp\"": "6"
  },
  {
    "items": "22",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "466.797451",
    "porcentaje": "0.0110",
    "programa": "Fortalecimiento de la Igualdad Sustantiva entre Mujeres y Hombres",
    " \"pp\"": "10"
  },
  {
    "items": "37",
    "ramo": "5",
    "nombre": "Relaciones Exteriores",
    "total": "468.97663",
    "porcentaje": "0.0110",
    "programa": "Atenciўn, protecciўn, servicios y asistencia consulares",
    " \"pp\"": "2"
  },
  {
    "items": "179",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "474.028811",
    "porcentaje": "0.0111",
    "programa": "Implementar las polЎticas, programas y acciones tendientes a garantizar la seguridad pЈblica de la Naciўn y sus habitantes",
    " \"pp\"": "21"
  },
  {
    "items": "131",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "478.115646",
    "porcentaje": "0.0112",
    "programa": "Normar los servicios educativos",
    " \"pp\"": "1"
  },
  {
    "items": "3",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "479.464061",
    "porcentaje": "0.0113",
    "programa": "Programa de Becas para los hijos del Personal de las Fuerza Armadas en activo",
    " \"pp\"": "16"
  },
  {
    "items": "38",
    "ramo": "40",
    "nombre": "Informaciўn Nacional EstadЎstica y Geogr fica",
    "total": "479.243719",
    "porcentaje": "0.0113",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "221",
    "ramo": "18",
    "nombre": "EnergЎa",
    "total": "480.22967",
    "porcentaje": "0.0113",
    "programa": "Conducciўn de la polЎtica energ‚tica",
    " \"pp\"": "1"
  },
  {
    "items": "153",
    "ramo": "22",
    "nombre": "Instituto Nacional Electoral",
    "total": "480.772737",
    "porcentaje": "0.0113",
    "programa": "TecnologЎas de informaciўn y comunicaciones",
    " \"pp\"": "11"
  },
  {
    "items": "71",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "482.169121",
    "porcentaje": "0.0113",
    "programa": "Servicios Cinematogr ficos",
    " \"pp\"": "22"
  },
  {
    "items": "135",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "489.81086",
    "porcentaje": "0.0115",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "4",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "492.04",
    "porcentaje": "0.0116",
    "programa": "Estudios de preinversiўn",
    " \"pp\"": "28"
  },
  {
    "items": "223",
    "ramo": "14",
    "nombre": "Trabajo y Previsiўn Social",
    "total": "493.806315",
    "porcentaje": "0.0116",
    "programa": "Instrumentaciўn de la polЎtica laboral",
    " \"pp\"": "1"
  },
  {
    "items": "94",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "493.945812",
    "porcentaje": "0.0116",
    "programa": "Conducciўn de la polЎtica de comunicaciўn social de la Administraciўn PЈblica Federal y la relaciўn con los medios de comunicaciўn",
    " \"pp\"": "5"
  },
  {
    "items": "141",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "499.45144",
    "porcentaje": "0.0117",
    "programa": "Negociaciones internacionales para la integraciўn y competitividad de M‚xico en las cadenas globales de valor",
    " \"pp\"": "2"
  },
  {
    "items": "1",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "500",
    "porcentaje": "0.0118",
    "programa": "Fortalecimiento a la educaciўn temprana y el desarrollo infantil",
    " \"pp\"": "31"
  },
  {
    "items": "2",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "500",
    "porcentaje": "0.0118",
    "programa": "Apoyos a los Sectores Pesquero y Rural",
    " \"pp\"": "17"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "500",
    "porcentaje": "0.0118",
    "programa": "Fondo Sur-Sureste",
    " \"pp\"": "90"
  },
  {
    "items": "52",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "507.931168",
    "porcentaje": "0.0119",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "496",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "508.8757",
    "porcentaje": "0.0120",
    "programa": "Regulaciўn y supervisiўn del programa de protecciўn y medicina preventiva en transporte multimodal",
    " \"pp\"": "1"
  },
  {
    "items": "3",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "520.716541",
    "porcentaje": "0.0122",
    "programa": "Programa de Recuperaciўn y Repoblaciўn de Especies en Riesgo",
    " \"pp\"": "25"
  },
  {
    "items": "78",
    "ramo": "5",
    "nombre": "Relaciones Exteriores",
    "total": "522.302667",
    "porcentaje": "0.0123",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "2",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "525",
    "porcentaje": "0.0123",
    "programa": "GarantЎas LЎquidas",
    " \"pp\"": "1"
  },
  {
    "items": "83",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "535.701765",
    "porcentaje": "0.0126",
    "programa": "Representaciўn jurЎdica de la Federaciўn en el  mbito nacional e internacional",
    " \"pp\"": "8"
  },
  {
    "items": "21",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "545.41748",
    "porcentaje": "0.0128",
    "programa": "Protecciўn y Defensa de los Usuarios de Servicios Financieros",
    " \"pp\"": "11"
  },
  {
    "items": "161",
    "ramo": "35",
    "nombre": "Comisiўn Nacional de los Derechos Humanos",
    "total": "548.021759",
    "porcentaje": "0.0129",
    "programa": "Atender al pЈblico en general en oficinas centrales; asЎ como, solucionar expedientes de presuntas violaciones a los Derechos Humanos.",
    " \"pp\"": "2"
  },
  {
    "items": "21",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "553.403568",
    "porcentaje": "0.0130",
    "programa": "Evaluaciўn de los programas sociales",
    " \"pp\"": "3"
  },
  {
    "items": "583",
    "ramo": "31",
    "nombre": "Tribunales Agrarios",
    "total": "553.972975",
    "porcentaje": "0.0130",
    "programa": "Resoluciўn de asuntos relativos a conflictos y controversias por la posesiўn y usufructo de la tierra",
    " \"pp\"": "1"
  },
  {
    "items": "120",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "575.618037",
    "porcentaje": "0.0135",
    "programa": "Dise¤o de la polЎtica de ingresos",
    " \"pp\"": "1"
  },
  {
    "items": "83",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "578.559196",
    "porcentaje": "0.0136",
    "programa": "Fomento y promociўn de la inversiўn en el sector turЎstico",
    " \"pp\"": "2"
  },
  {
    "items": "620",
    "ramo": "14",
    "nombre": "Trabajo y Previsiўn Social",
    "total": "578.537194",
    "porcentaje": "0.0136",
    "programa": "Ejecuciўnяde los programas y acciones de la PolЎtica Laboral",
    " \"pp\"": "3"
  },
  {
    "items": "33",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "579.921025",
    "porcentaje": "0.0136",
    "programa": "Registro e Identificaciўn de Poblaciўn",
    " \"pp\"": "12"
  },
  {
    "items": "171",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "582.505659",
    "porcentaje": "0.0137",
    "programa": "Administraciўn de los fondos y valores federales",
    " \"pp\"": "3"
  },
  {
    "items": "53",
    "ramo": "12",
    "nombre": "Salud",
    "total": "589.129248",
    "porcentaje": "0.0138",
    "programa": "Prevenciўn y Control de Sobrepeso, Obesidad y Diabetes",
    " \"pp\"": "8"
  },
  {
    "items": "172",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "594.555623",
    "porcentaje": "0.0140",
    "programa": "Investigaciўn y desarrollo tecnolўgico en salud",
    " \"pp\"": "4"
  },
  {
    "items": "4",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "597",
    "porcentaje": "0.0140",
    "programa": "Mantenimiento de infraestructura",
    " \"pp\"": "27"
  },
  {
    "items": "123",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "598.207289",
    "porcentaje": "0.0141",
    "programa": "Promociўn del desarrollo, competitividad eяinnovaciўn de los sectores industrial, comercial y de servicios",
    " \"pp\"": "9"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "600",
    "porcentaje": "0.0141",
    "programa": "Fondo para la Accesibilidad de las Personas con discapacidad",
    " \"pp\"": "75"
  },
  {
    "items": "7",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "615.010652",
    "porcentaje": "0.0145",
    "programa": "Programa para la Inclusiўn y la Equidad Educativa",
    " \"pp\"": "244"
  },
  {
    "items": "2",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "647.226968",
    "porcentaje": "0.0152",
    "programa": "Programa de Empleo Temporal (PET)",
    " \"pp\"": "71"
  },
  {
    "items": "15",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "674.296267",
    "porcentaje": "0.0158",
    "programa": "Servicios de telecomunicaciones, satelitales, telegr ficos y de transferencia de fondos",
    " \"pp\"": "13"
  },
  {
    "items": "277",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "679.387628",
    "porcentaje": "0.0160",
    "programa": "Planeaciўn, Direcciўn yяEvaluaciўn Ambiental",
    " \"pp\"": "2"
  },
  {
    "items": "7",
    "ramo": "18",
    "nombre": "EnergЎa",
    "total": "679.166045",
    "porcentaje": "0.0160",
    "programa": "Investigaciўn, desarrollo tecnolўgico y prestaciўn de servicios en materia nuclear y el‚ctrica",
    " \"pp\"": "16"
  },
  {
    "items": "22",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "682.632939",
    "porcentaje": "0.0161",
    "programa": "Proyectos de infraestructura social del sector educativo",
    " \"pp\"": "9"
  },
  {
    "items": "32",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "685.845296",
    "porcentaje": "0.0161",
    "programa": "Programa 3 x 1 para Migrantes",
    " \"pp\"": "61"
  },
  {
    "items": "23",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "691.570755",
    "porcentaje": "0.0163",
    "programa": "Protecciўn y Defensa de los Contribuyentes",
    " \"pp\"": "28"
  },
  {
    "items": "21",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "708.420464",
    "porcentaje": "0.0166",
    "programa": "Procuraciўn de justicia agraria",
    " \"pp\"": "1"
  },
  {
    "items": "866",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "709.590923",
    "porcentaje": "0.0167",
    "programa": "Definiciўn, conducciўn y supervisiўn de la polЎtica de comunicaciones y transportes",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "713.145294",
    "porcentaje": "0.0168",
    "programa": "Otorgamiento de subsidios para la implementaciўn de la reforma al sistema de justicia penal",
    " \"pp\"": "4"
  },
  {
    "items": "172",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "713.975787",
    "porcentaje": "0.0168",
    "programa": "Conducciўn de la polЎtica interior",
    " \"pp\"": "1"
  },
  {
    "items": "170",
    "ramo": "12",
    "nombre": "Salud",
    "total": "716.344335",
    "porcentaje": "0.0168",
    "programa": "Asistencia social y protecciўn del paciente",
    " \"pp\"": "13"
  },
  {
    "items": "30",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "727.335854",
    "porcentaje": "0.0171",
    "programa": "Programa de justicia militar",
    " \"pp\"": "20"
  },
  {
    "items": "797",
    "ramo": "22",
    "nombre": "Instituto Nacional Electoral",
    "total": "728.505608",
    "porcentaje": "0.0171",
    "programa": "Organizaciўn electoral federal",
    " \"pp\"": "2"
  },
  {
    "items": "140",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "729.677723",
    "porcentaje": "0.0172",
    "programa": "Dise¤oяy conducciўn de la polЎtica de gasto pЈblico",
    " \"pp\"": "2"
  },
  {
    "items": "2",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "730.787969",
    "porcentaje": "0.0172",
    "programa": "Prevenciўn y gestiўn integral de residuos",
    " \"pp\"": "12"
  },
  {
    "items": "18",
    "ramo": "25",
    "nombre": "Previsiones y Aportaciones para los Sistemas de Educaciўn B sica, Normal, Tecnolўgica y de Adultos",
    "total": "733.687675",
    "porcentaje": "0.0173",
    "programa": "Servicios de educaciўn normal en el D.F.",
    " \"pp\"": "4"
  },
  {
    "items": "103",
    "ramo": "12",
    "nombre": "Salud",
    "total": "735.212873",
    "porcentaje": "0.0173",
    "programa": "Vigilancia epidemiolўgica",
    " \"pp\"": "9"
  },
  {
    "items": "32",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "757.805763",
    "porcentaje": "0.0178",
    "programa": "Atenciўn al deporte",
    " \"pp\"": "17"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "781.2",
    "porcentaje": "0.0184",
    "programa": "CNH-CRE",
    " \"pp\"": "79"
  },
  {
    "items": "2",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "789.0241",
    "porcentaje": "0.0185",
    "programa": "Programa Nacional de Ingl‚s",
    " \"pp\"": "270"
  },
  {
    "items": "1",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "792.662688",
    "porcentaje": "0.0186",
    "programa": "Fortalecimiento sectorial de las capacidades cientЎficas, tecnolўgicas y de innovaciўn",
    " \"pp\"": "192"
  },
  {
    "items": "299",
    "ramo": "51",
    "nombre": "Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado",
    "total": "800.315421",
    "porcentaje": "0.0188",
    "programa": "Prevenciўn y Control de Enfermedades",
    " \"pp\"": "43"
  },
  {
    "items": "15",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "799.537363",
    "porcentaje": "0.0188",
    "programa": "Atenciўn a VЎctimas",
    " \"pp\"": "33"
  },
  {
    "items": "16",
    "ramo": "12",
    "nombre": "Salud",
    "total": "801.071189",
    "porcentaje": "0.0188",
    "programa": "Proyectos de infraestructura social de salud",
    " \"pp\"": "11"
  },
  {
    "items": "10",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "802.117235",
    "porcentaje": "0.0189",
    "programa": "Proyectos de infraestructura gubernamental de seguridad pЈblica",
    " \"pp\"": "23"
  },
  {
    "items": "22",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "821.892893",
    "porcentaje": "0.0193",
    "programa": "Administraciўn y enajenaciўn de activos",
    " \"pp\"": "32"
  },
  {
    "items": "250",
    "ramo": "12",
    "nombre": "Salud",
    "total": "824.717955",
    "porcentaje": "0.0194",
    "programa": "Servicios de asistencia social integral",
    " \"pp\"": "40"
  },
  {
    "items": "275",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "844.388883",
    "porcentaje": "0.0198",
    "programa": "Seguro de Riesgos de Trabajo",
    " \"pp\"": "3"
  },
  {
    "items": "14",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "846.071707",
    "porcentaje": "0.0199",
    "programa": "Programa de Inclusiўn Financiera",
    " \"pp\"": "35"
  },
  {
    "items": "23",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "856.064723",
    "porcentaje": "0.0201",
    "programa": "Promociўn del comercio exterior y atracciўn de inversiўn extranjera directa",
    " \"pp\"": "3"
  },
  {
    "items": "43",
    "ramo": "12",
    "nombre": "Salud",
    "total": "857.834345",
    "porcentaje": "0.0202",
    "programa": "Fortalecimiento a la atenciўn m‚dica",
    " \"pp\"": "200"
  },
  {
    "items": "38",
    "ramo": "2",
    "nombre": "Oficina de la Presidencia de la RepЈblica",
    "total": "858.880914",
    "porcentaje": "0.0202",
    "programa": "Apoyo a las actividades de seguridad y logЎstica para garantizar la integridad del Ejecutivo Federal",
    " \"pp\"": "4"
  },
  {
    "items": "88",
    "ramo": "12",
    "nombre": "Salud",
    "total": "860.280772",
    "porcentaje": "0.0202",
    "programa": "Protecciўn Contra Riesgos Sanitarios",
    " \"pp\"": "4"
  },
  {
    "items": "3",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "865.365352",
    "porcentaje": "0.0203",
    "programa": "Programa para el desarrollo de la industria de software (PROSOFT) y la innovaciўn",
    " \"pp\"": "151"
  },
  {
    "items": "23",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "867.278997",
    "porcentaje": "0.0204",
    "programa": "Promociўn de M‚xico como Destino TurЎstico",
    " \"pp\"": "1"
  },
  {
    "items": "80",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "888.153945",
    "porcentaje": "0.0209",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "167",
    "ramo": "13",
    "nombre": "Marina",
    "total": "889.624822",
    "porcentaje": "0.0209",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "608",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "897.924832",
    "porcentaje": "0.0211",
    "programa": "PolЎtica de Desarrollo Urbano y Ordenamiento del Territorio",
    " \"pp\"": "5"
  },
  {
    "items": "233",
    "ramo": "14",
    "nombre": "Trabajo y Previsiўn Social",
    "total": "907.112893",
    "porcentaje": "0.0213",
    "programa": "Imparticiўn de justicia laboral",
    " \"pp\"": "1"
  },
  {
    "items": "147",
    "ramo": "2",
    "nombre": "Oficina de la Presidencia de la RepЈblica",
    "total": "913.274506",
    "porcentaje": "0.0215",
    "programa": "AsesorЎa, coordinaciўn, difusiўn y apoyo t‚cnico de las actividades del Presidente de la RepЈblica",
    " \"pp\"": "2"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "929.922392",
    "porcentaje": "0.0219",
    "programa": "Seguro de Salud para la Familia",
    " \"pp\"": "3"
  },
  {
    "items": "164",
    "ramo": "12",
    "nombre": "Salud",
    "total": "940.64885",
    "porcentaje": "0.0221",
    "programa": "Prevenciўn y control de enfermedades",
    " \"pp\"": "18"
  },
  {
    "items": "209",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "947.742438",
    "porcentaje": "0.0223",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "4",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "961.919416",
    "porcentaje": "0.0226",
    "programa": "Apoyos a centros y organizaciones de educaciўn",
    " \"pp\"": "80"
  },
  {
    "items": "374",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "991.409892",
    "porcentaje": "0.0233",
    "programa": "Planeaciўn y Articulaciўn de la Acciўn PЈblica hacia los Pueblos IndЎgenas",
    " \"pp\"": "13"
  },
  {
    "items": "391",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "993.140009",
    "porcentaje": "0.0233",
    "programa": "Regulaciўn Ambiental",
    " \"pp\"": "3"
  },
  {
    "items": "4",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "1000.7",
    "porcentaje": "0.0235",
    "programa": "Proyectos de infraestructura de turismo",
    " \"pp\"": "21"
  },
  {
    "items": "21",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "1005.904162",
    "porcentaje": "0.0236",
    "programa": "Servicios educativos culturales",
    " \"pp\"": "42"
  },
  {
    "items": "4",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "1013.800232",
    "porcentaje": "0.0238",
    "programa": "Sistema Satelital",
    " \"pp\"": "45"
  },
  {
    "items": "124",
    "ramo": "13",
    "nombre": "Marina",
    "total": "1021.889988",
    "porcentaje": "0.0240",
    "programa": "Sistema Educativo naval y programa de becas",
    " \"pp\"": "6"
  },
  {
    "items": "270",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "1032.245349",
    "porcentaje": "0.0243",
    "programa": "Atenciўn de emergencias y desastres naturales",
    " \"pp\"": "1"
  },
  {
    "items": "16",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "1054.551194",
    "porcentaje": "0.0248",
    "programa": "Investigaciўn, desarrollo y producciўn de vestuario y equipo militar y mantenimiento de infraestructura",
    " \"pp\"": "18"
  },
  {
    "items": "17",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "1065.78953",
    "porcentaje": "0.0251",
    "programa": "Servicios de correo",
    " \"pp\"": "12"
  },
  {
    "items": "3",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "1082.208696",
    "porcentaje": "0.0254",
    "programa": "Seguro de vida para jefas de familia",
    " \"pp\"": "241"
  },
  {
    "items": "48",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "1102.81062",
    "porcentaje": "0.0259",
    "programa": "Plataforma M‚xico",
    " \"pp\"": "903"
  },
  {
    "items": "90",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "1116.858659",
    "porcentaje": "0.0263",
    "programa": "Producciўn y transmisiўn de materiales educativos",
    " \"pp\"": "13"
  },
  {
    "items": "12",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "1126.71518",
    "porcentaje": "0.0265",
    "programa": "Regulaciўn y supervisiўn de las entidades del sistema financiero mexicano",
    " \"pp\"": "5"
  },
  {
    "items": "23",
    "ramo": "40",
    "nombre": "Informaciўn Nacional EstadЎstica y Geogr fica",
    "total": "1147.852837",
    "porcentaje": "0.0270",
    "programa": "Censo Agropecuario",
    " \"pp\"": "3"
  },
  {
    "items": "1",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "1161.29994",
    "porcentaje": "0.0273",
    "programa": "Fortalecimiento de la Infraestructura CientЎfica y Tecnolўgica",
    " \"pp\"": "236"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "1169.76497",
    "porcentaje": "0.0275",
    "programa": "Seguridad y LogЎstica",
    " \"pp\"": "3"
  },
  {
    "items": "32",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "1202.538266",
    "porcentaje": "0.0283",
    "programa": "Programa de Abasto Social de Leche a cargo de Liconsa, S.A. de C.V.",
    " \"pp\"": "52"
  },
  {
    "items": "115",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "1207.422174",
    "porcentaje": "0.0284",
    "programa": "Dise¤o y aplicaciўn de la polЎtica econўmica",
    " \"pp\"": "3"
  },
  {
    "items": "3",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "1233.039675",
    "porcentaje": "0.0290",
    "programa": "Programaяde Apoyo a la Educaciўn IndЎgena",
    " \"pp\"": "178"
  },
  {
    "items": "3",
    "ramo": "24",
    "nombre": "Deuda PЈblica",
    "total": "1244.451763",
    "porcentaje": "0.0292",
    "programa": "Bilaterales",
    " \"pp\"": "8"
  },
  {
    "items": "170",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "1256.857514",
    "porcentaje": "0.0295",
    "programa": "Dise¤o y evaluaciўn de polЎticas en ciencia, tecnologЎa e innovaciўn",
    " \"pp\"": "1"
  },
  {
    "items": "2",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "1300",
    "porcentaje": "0.0306",
    "programa": "Servicios relacionados para la liberaciўn del derecho de vЎa",
    " \"pp\"": "48"
  },
  {
    "items": "216",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "1306.117248",
    "porcentaje": "0.0307",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "808",
    "ramo": "22",
    "nombre": "Instituto Nacional Electoral",
    "total": "1308.859555",
    "porcentaje": "0.0308",
    "programa": "Capacitaciўn y educaciўn para el ejercicio democr tico de la ciudadanЎa",
    " \"pp\"": "3"
  },
  {
    "items": "245",
    "ramo": "12",
    "nombre": "Salud",
    "total": "1316.3651",
    "porcentaje": "0.0309",
    "programa": "RectorЎa en Salud",
    " \"pp\"": "12"
  },
  {
    "items": "464",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "1337.974135",
    "porcentaje": "0.0315",
    "programa": "Prestaciones sociales",
    " \"pp\"": "12"
  },
  {
    "items": "19",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "1350.472156",
    "porcentaje": "0.0317",
    "programa": "Investigaciўn y desarrollo tecnolўgico, producciўn y mantenimiento de armamento, municiones, explosivos, vehЎculos y equipos militares y sus accesorios",
    " \"pp\"": "1"
  },
  {
    "items": "166",
    "ramo": "12",
    "nombre": "Salud",
    "total": "1405.026988",
    "porcentaje": "0.0330",
    "programa": "Prevenciўn y atenciўn contra las adicciones",
    " \"pp\"": "25"
  },
  {
    "items": "35",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "1429.478799",
    "porcentaje": "0.0336",
    "programa": "Programa de Empleo Temporal (PET)",
    " \"pp\"": "71"
  },
  {
    "items": "999",
    "ramo": "22",
    "nombre": "Instituto Nacional Electoral",
    "total": "1462.644248",
    "porcentaje": "0.0344",
    "programa": "Direcciўn, soporte jurЎdico electoral y apoyo logЎstico",
    " \"pp\"": "8"
  },
  {
    "items": "76",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "1464.776214",
    "porcentaje": "0.0344",
    "programa": "Generaciўn de Proyectos de Investigaciўn",
    " \"pp\"": "6"
  },
  {
    "items": "5",
    "ramo": "51",
    "nombre": "Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado",
    "total": "1467.914194",
    "porcentaje": "0.0345",
    "programa": "Proyectos de infraestructura social.",
    " \"pp\"": "11"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "1481.010478",
    "porcentaje": "0.0348",
    "programa": "Fortalecimiento Financiero",
    " \"pp\"": "130"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "1500",
    "porcentaje": "0.0353",
    "programa": "Operaciўn y Mantenimiento del Programa de Seguridad y Monitoreo en el Estado de M‚xico",
    " \"pp\"": "131"
  },
  {
    "items": "266",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "1502.376461",
    "porcentaje": "0.0353",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "2",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "1535.359859",
    "porcentaje": "0.0361",
    "programa": "Sistema de Transporte Colectivo",
    " \"pp\"": "41"
  },
  {
    "items": "4",
    "ramo": "21",
    "nombre": "Turismo",
    "total": "1571.714067",
    "porcentaje": "0.0370",
    "programa": "Programa de Desarrollo Regional TurЎstico Sustentable y Pueblos M gicos",
    " \"pp\"": "248"
  },
  {
    "items": "4",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "1571.857852",
    "porcentaje": "0.0370",
    "programa": "Programa para el Mejoramiento de la Producciўn y la Productividad IndЎgena",
    " \"pp\"": "249"
  },
  {
    "items": "15",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "1584.041895",
    "porcentaje": "0.0372",
    "programa": "Servicios de protecciўn, custodia, vigilancia y seguridad de personas, bienes e instalaciones",
    " \"pp\"": "901"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "1600",
    "porcentaje": "0.0376",
    "programa": "Fondo para Fronteras",
    " \"pp\"": "85"
  },
  {
    "items": "266",
    "ramo": "43",
    "nombre": "Instituto Federal de Telecomunicaciones",
    "total": "1619.695597",
    "porcentaje": "0.0381",
    "programa": "Regulaciўn y Supervisiўn de losяsectores Telecomunicaciones y Radiodifusiўn",
    " \"pp\"": "4"
  },
  {
    "items": "1151",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "1623.616736",
    "porcentaje": "0.0382",
    "programa": "Promociўn y evaluaciўn de la polЎtica de desarrollo social y comunitario, la participaciўn y la cohesiўn social",
    " \"pp\"": "2"
  },
  {
    "items": "43",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "1637.371932",
    "porcentaje": "0.0385",
    "programa": "Proyectos de infraestructura social de asistencia y seguridad social",
    " \"pp\"": "12"
  },
  {
    "items": "32",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "1641.736615",
    "porcentaje": "0.0386",
    "programa": "Adquisiciўn de leche nacional",
    " \"pp\"": "4"
  },
  {
    "items": "2",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "1641.965792",
    "porcentaje": "0.0386",
    "programa": "Programa de Inclusiўn Digital",
    " \"pp\"": "77"
  },
  {
    "items": "13",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "1650",
    "porcentaje": "0.0388",
    "programa": "Estudios y Proyectos para la construcciўn, ampliaciўn, modernizaciўn, conservaciўn y operaciўn de infraestructura de comunicaciones y transportes",
    " \"pp\"": "33"
  },
  {
    "items": "1",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "1649.582564",
    "porcentaje": "0.0388",
    "programa": "Fomento Regional de las Capacidades CientЎficas, Tecnolўgicas y de Innovaciўn",
    " \"pp\"": "278"
  },
  {
    "items": "35",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "1661.821015",
    "porcentaje": "0.0391",
    "programa": "Protecciўn y conservaciўn del Patrimonio Cultural",
    " \"pp\"": "12"
  },
  {
    "items": "57",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "1668.920001",
    "porcentaje": "0.0392",
    "programa": "Programa de aseguramiento agropecuario",
    " \"pp\"": "265"
  },
  {
    "items": "33",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "1697.706014",
    "porcentaje": "0.0399",
    "programa": "Sistema educativo militar",
    " \"pp\"": "21"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "1716.324215",
    "porcentaje": "0.0403",
    "programa": "Programas Regionales",
    " \"pp\"": "22"
  },
  {
    "items": "29",
    "ramo": "14",
    "nombre": "Trabajo y Previsiўn Social",
    "total": "1726.6029",
    "porcentaje": "0.0406",
    "programa": "Programa de Apoyo al Empleo (PAE)",
    " \"pp\"": "43"
  },
  {
    "items": "148",
    "ramo": "13",
    "nombre": "Marina",
    "total": "1729.819999",
    "porcentaje": "0.0407",
    "programa": "Administraciўn y fomento de los servicios de salud",
    " \"pp\"": "7"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "1773.586125",
    "porcentaje": "0.0417",
    "programa": "Cuota Social Seguro de Retiro ISSSTE",
    " \"pp\"": "22"
  },
  {
    "items": "208",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "1810.167813",
    "porcentaje": "0.0425",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "341",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "1815.669454",
    "porcentaje": "0.0427",
    "programa": "Programa M‚xico conectado",
    " \"pp\"": "9"
  },
  {
    "items": "34",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "1866.523608",
    "porcentaje": "0.0439",
    "programa": "Regulaciўn, supervisiўn y aplicaciўn de las polЎticas pЈblicas en materia agropecuaria, acuЎcola y pesquera",
    " \"pp\"": "1"
  },
  {
    "items": "1767",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "1918.416493",
    "porcentaje": "0.0451",
    "programa": "Supervisiўn, inspecciўn y verificaciўn del transporte terrestre, marЎtimo y a‚reo",
    " \"pp\"": "2"
  },
  {
    "items": "96",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "1918.359995",
    "porcentaje": "0.0451",
    "programa": "Programa de Empleo Temporal (PET)",
    " \"pp\"": "71"
  },
  {
    "items": "14",
    "ramo": "12",
    "nombre": "Salud",
    "total": "1919.935331",
    "porcentaje": "0.0451",
    "programa": "Programa de vacunaciўn",
    " \"pp\"": "36"
  },
  {
    "items": "68",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "1925.465233",
    "porcentaje": "0.0453",
    "programa": "PolЎtica y servicios migratorios",
    " \"pp\"": "8"
  },
  {
    "items": "1",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "1927.9",
    "porcentaje": "0.0453",
    "programa": "Administraciўn del Fondo de Pensiones",
    " \"pp\"": "21"
  },
  {
    "items": "11",
    "ramo": "13",
    "nombre": "Marina",
    "total": "1957.471554",
    "porcentaje": "0.0460",
    "programa": "Proyectos de infraestructura social de asistencia y seguridad social",
    " \"pp\"": "12"
  },
  {
    "items": "995",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "1963.060853",
    "porcentaje": "0.0461",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "41",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "1978.150977",
    "porcentaje": "0.0465",
    "programa": "Programa de Apoyos a la Cultura",
    " \"pp\"": "268"
  },
  {
    "items": "155",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "1980.527326",
    "porcentaje": "0.0466",
    "programa": "Investigar y perseguir los delitos relativos a la Delincuencia Organizada",
    " \"pp\"": "3"
  },
  {
    "items": "2",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "1989.397243",
    "porcentaje": "0.0468",
    "programa": "Programa de Acciones Complementarias para Mejorar las Sanidades",
    " \"pp\"": "2"
  },
  {
    "items": "147",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "1993.207229",
    "porcentaje": "0.0469",
    "programa": "Promociўn del Desarrollo Humano y Planeaciўn Institucional",
    " \"pp\"": "13"
  },
  {
    "items": "1",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "2015.311756",
    "porcentaje": "0.0474",
    "programa": "Programa Nacional de Prevenciўn del Delito",
    " \"pp\"": "6"
  },
  {
    "items": "524",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "2038.264404",
    "porcentaje": "0.0479",
    "programa": "Protecciўn Forestal",
    " \"pp\"": "14"
  },
  {
    "items": "58",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "2054.788249",
    "porcentaje": "0.0483",
    "programa": "Programas de Cultura en las Entidades Federativas",
    " \"pp\"": "70"
  },
  {
    "items": "32",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "2056.879999",
    "porcentaje": "0.0484",
    "programa": "Programa de Abasto Rural a cargo de Diconsa, S.A. de C.V. (DICONSA)",
    " \"pp\"": "53"
  },
  {
    "items": "265",
    "ramo": "12",
    "nombre": "Salud",
    "total": "2057.098315",
    "porcentaje": "0.0484",
    "programa": "Investigaciўn y desarrollo tecnolўgico en salud",
    " \"pp\"": "22"
  },
  {
    "items": "34",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "2067.845923",
    "porcentaje": "0.0486",
    "programa": "Programa de Cultura FЎsica y Deporte",
    " \"pp\"": "269"
  },
  {
    "items": "31",
    "ramo": "1",
    "nombre": "Poder Legislativo",
    "total": "2120.194279",
    "porcentaje": "0.0498",
    "programa": "Entregar a la C mara de Diputados del H. Congreso de la Uniўn, el informe sobre la revisiўn de la Cuenta de la Hacienda PЈblica Federal",
    " \"pp\"": "2"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "2135.247741",
    "porcentaje": "0.0502",
    "programa": "Programa de Separaciўn Laboralя",
    " \"pp\"": "66"
  },
  {
    "items": "20",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "2181.444284",
    "porcentaje": "0.0513",
    "programa": "Servicios de ayudas a la navegaciўn a‚rea",
    " \"pp\"": "10"
  },
  {
    "items": "556",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "2200.314393",
    "porcentaje": "0.0517",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "16",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "2271.159097",
    "porcentaje": "0.0534",
    "programa": "Mantenimiento y conservaciўn de laяinfraestructura militar y maquinaria pesada y administraciўn inmobiliaria",
    " \"pp\"": "19"
  },
  {
    "items": "32",
    "ramo": "28",
    "nombre": "Participaciones a Entidades Federativas y Municipios",
    "total": "2282.89602",
    "porcentaje": "0.0537",
    "programa": "Fondo de Compensaciўn del Impuesto sobre Automўviles Nuevos",
    " \"pp\"": "4"
  },
  {
    "items": "30",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "2319.694777",
    "porcentaje": "0.0545",
    "programa": "FAETA Educaciўn de Adultos",
    " \"pp\"": "10"
  },
  {
    "items": "691",
    "ramo": "32",
    "nombre": "Tribunal Federal de Justicia Fiscal y Administrativa",
    "total": "2319.62712",
    "porcentaje": "0.0545",
    "programa": "Imparticiўn de Justicia Fiscal y Administrativa",
    " \"pp\"": "1"
  },
  {
    "items": "6",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "2335.50724",
    "porcentaje": "0.0549",
    "programa": "Programa de Fomento a la Productividad Pesquera y AcuЎcola",
    " \"pp\"": "261"
  },
  {
    "items": "107",
    "ramo": "12",
    "nombre": "Salud",
    "total": "2345.066072",
    "porcentaje": "0.0551",
    "programa": "Salud materna, sexual y reproductiva",
    " \"pp\"": "20"
  },
  {
    "items": "24",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "2349.915573",
    "porcentaje": "0.0552",
    "programa": "Producciўn y distribuciўn de libros y materiales educativos",
    " \"pp\"": "3"
  },
  {
    "items": "13",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "2378.893909",
    "porcentaje": "0.0559",
    "programa": "Proyectos de construcciўn de puertos",
    " \"pp\"": "4"
  },
  {
    "items": "827",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "2381.084669",
    "porcentaje": "0.0560",
    "programa": "Dise¤o de la PolЎtica Educativa",
    " \"pp\"": "1"
  },
  {
    "items": "64",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "2462.748956",
    "porcentaje": "0.0579",
    "programa": "Tratamiento de Aguas Residuales",
    " \"pp\"": "218"
  },
  {
    "items": "75",
    "ramo": "5",
    "nombre": "Relaciones Exteriores",
    "total": "2486.727634",
    "porcentaje": "0.0585",
    "programa": "Promociўn y defensa de los intereses de M‚xico en el  mbito multilateral",
    " \"pp\"": "5"
  },
  {
    "items": "1",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "2500",
    "porcentaje": "0.0588",
    "programa": "Programa Estrat‚gico de Telecomunicaciones",
    " \"pp\"": "24"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "2506.874173",
    "porcentaje": "0.0589",
    "programa": "Seguro de Invalidez y Vida",
    " \"pp\"": "2"
  },
  {
    "items": "35",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "2562.385818",
    "porcentaje": "0.0602",
    "programa": "Programa de Apoyo a la Vivienda",
    " \"pp\"": "274"
  },
  {
    "items": "61",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "2568.108134",
    "porcentaje": "0.0604",
    "programa": "Operaciўn y mantenimiento de infraestructura hЎdrica",
    " \"pp\"": "1"
  },
  {
    "items": "161",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "2581.29244",
    "porcentaje": "0.0607",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "8",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "2645.823964",
    "porcentaje": "0.0622",
    "programa": "Programa para el Desarrollo Profesional Docente",
    " \"pp\"": "247"
  },
  {
    "items": "4",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "2678.629406",
    "porcentaje": "0.0630",
    "programa": "Programa de Sanidad e Inocuidad Agroalimentaria",
    " \"pp\"": "263"
  },
  {
    "items": "3",
    "ramo": "12",
    "nombre": "Salud",
    "total": "2685.844078",
    "porcentaje": "0.0631",
    "programa": "Seguro M‚dico Siglo XXI",
    " \"pp\"": "201"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "2687.644271",
    "porcentaje": "0.0632",
    "programa": "Pensiўn MЎnima Garantizada IMSS",
    " \"pp\"": "21"
  },
  {
    "items": "1",
    "ramo": "24",
    "nombre": "Deuda PЈblica",
    "total": "2697.829033",
    "porcentaje": "0.0634",
    "programa": "Fondo de ahorro SAR",
    " \"pp\"": "2"
  },
  {
    "items": "2",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "2713.057364",
    "porcentaje": "0.0638",
    "programa": "Apoyos para la atenciўn a problemas estructurales de las UPES",
    " \"pp\"": "81"
  },
  {
    "items": "17",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "2718.07102",
    "porcentaje": "0.0639",
    "programa": "Formaciўn y certificaciўn para el trabajo",
    " \"pp\"": "5"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "2820",
    "porcentaje": "0.0663",
    "programa": "Adeudos con el IMSS e ISSSTE",
    " \"pp\"": "23"
  },
  {
    "items": "18",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "2832.709275",
    "porcentaje": "0.0666",
    "programa": "Programa de Seguridad PЈblica de la SecretarЎa de la Defensa Nacional",
    " \"pp\"": "4"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "2900.055588",
    "porcentaje": "0.0682",
    "programa": "Previsiones para el Pago de las Pensiones de los Jubilados de Ferrocarriles Nacionales de M‚xico",
    " \"pp\"": "26"
  },
  {
    "items": "5",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "2966.553018",
    "porcentaje": "0.0697",
    "programa": "Programa de Fomento a la EconomЎa Social",
    " \"pp\"": "17"
  },
  {
    "items": "16",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "2974.269066",
    "porcentaje": "0.0699",
    "programa": "Control de la operaciўn aduanera",
    " \"pp\"": "25"
  },
  {
    "items": "65",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "2974.101143",
    "porcentaje": "0.0699",
    "programa": "Programa de Apoyo a la Infraestructura HidroagrЎcola",
    " \"pp\"": "217"
  },
  {
    "items": "233",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "2977.834949",
    "porcentaje": "0.0700",
    "programa": "Prevenciўn y control de enfermedades",
    " \"pp\"": "1"
  },
  {
    "items": "1286",
    "ramo": "22",
    "nombre": "Instituto Nacional Electoral",
    "total": "3016.179933",
    "porcentaje": "0.0709",
    "programa": "Gestiўn Administrativa",
    " \"pp\"": "1"
  },
  {
    "items": "2",
    "ramo": "24",
    "nombre": "Deuda PЈblica",
    "total": "3053.074497",
    "porcentaje": "0.0718",
    "programa": "Otros financiamientos",
    " \"pp\"": "4"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "3110.7",
    "porcentaje": "0.0731",
    "programa": "FEIEF",
    " \"pp\"": "80"
  },
  {
    "items": "21",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "3144.67833",
    "porcentaje": "0.0739",
    "programa": "Educaciўn para Adultos (INEA)",
    " \"pp\"": "64"
  },
  {
    "items": "2",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "3150.2205",
    "porcentaje": "0.0740",
    "programa": "Comedores Comunitarios",
    " \"pp\"": "9"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "3159.3",
    "porcentaje": "0.0743",
    "programa": "CONACYT",
    " \"pp\"": "10"
  },
  {
    "items": "224",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "3206.853122",
    "porcentaje": "0.0754",
    "programa": "Programas de adquisiciones",
    " \"pp\"": "29"
  },
  {
    "items": "8",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "3271.781888",
    "porcentaje": "0.0769",
    "programa": "Programa de Concurrencia con las Entidades Federativas я",
    " \"pp\"": "240"
  },
  {
    "items": "24",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "3273.204769",
    "porcentaje": "0.0769",
    "programa": "Servicios de inteligencia para la Seguridad Nacional",
    " \"pp\"": "1"
  },
  {
    "items": "107",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "3281.664904",
    "porcentaje": "0.0772",
    "programa": "Desarrollo y aplicaciўn de programas educativos en materia agropecuaria",
    " \"pp\"": "1"
  },
  {
    "items": "21",
    "ramo": "25",
    "nombre": "Previsiones y Aportaciones para los Sistemas de Educaciўn B sica, Normal, Tecnolўgica y de Adultos",
    "total": "3291.199696",
    "porcentaje": "0.0774",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "1136",
    "ramo": "22",
    "nombre": "Instituto Nacional Electoral",
    "total": "3352.593851",
    "porcentaje": "0.0788",
    "programa": "Actualizaciўn del padrўn electoral y expediciўn deяla credencial para votar",
    " \"pp\"": "5"
  },
  {
    "items": "749",
    "ramo": "12",
    "nombre": "Salud",
    "total": "3404.953515",
    "porcentaje": "0.0800",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "68",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "3430.922832",
    "porcentaje": "0.0807",
    "programa": "Infraestructura para la modernizaciўn y rehabilitaciўn de riego y temporal tecnificado",
    " \"pp\"": "141"
  },
  {
    "items": "32",
    "ramo": "12",
    "nombre": "Salud",
    "total": "3499.999998",
    "porcentaje": "0.0823",
    "programa": "Fortalecimiento de los Servicios Estatales de Salud",
    " \"pp\"": "12"
  },
  {
    "items": "1015",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "3557.346883",
    "porcentaje": "0.0836",
    "programa": "Dise¤o y Aplicaciўn de la PolЎtica Agropecuaria",
    " \"pp\"": "1"
  },
  {
    "items": "540",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "3634.958897",
    "porcentaje": "0.0854",
    "programa": "Supervisiўn, regulaciўn, inspecciўn,яverificaciўn y servicios administrativosяde construcciўn y conservaciўn de carreteras",
    " \"pp\"": "3"
  },
  {
    "items": "267",
    "ramo": "13",
    "nombre": "Marina",
    "total": "3655.460819",
    "porcentaje": "0.0859",
    "programa": "Adquisiciўn, construcciўn, reparaciўn y mantenimiento de unidades navales",
    " \"pp\"": "4"
  },
  {
    "items": "295",
    "ramo": "12",
    "nombre": "Salud",
    "total": "3783.602381",
    "porcentaje": "0.0890",
    "programa": "Formaciўn y capacitaciўn de recursos humanos para la salud",
    " \"pp\"": "10"
  },
  {
    "items": "2",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "3842.466522",
    "porcentaje": "0.0903",
    "programa": "FAM Infraestructura Educativa Media Superior y Superior",
    " \"pp\"": "8"
  },
  {
    "items": "35",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "3925.587176",
    "porcentaje": "0.0923",
    "programa": "Programa de estancias infantiles para apoyar a madres trabajadoras",
    " \"pp\"": "174"
  },
  {
    "items": "248",
    "ramo": "5",
    "nombre": "Relaciones Exteriores",
    "total": "3999.028921",
    "porcentaje": "0.0940",
    "programa": "Dise¤o, conducciўn y ejecuciўn de la polЎtica exterior",
    " \"pp\"": "2"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "4000",
    "porcentaje": "0.0940",
    "programa": "Fondo de Capitalidad",
    " \"pp\"": "87"
  },
  {
    "items": "30",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "4054.173342",
    "porcentaje": "0.0953",
    "programa": "FAETA Educaciўn Tecnolўgica",
    " \"pp\"": "9"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "4067.1",
    "porcentaje": "0.0956",
    "programa": "Fondo para entidades federativas y municipios productores de hidrocarburos",
    " \"pp\"": "93"
  },
  {
    "items": "32",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "4084.625583",
    "porcentaje": "0.0960",
    "programa": "Sistema Nacional de Investigadores",
    " \"pp\"": "191"
  },
  {
    "items": "5",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "4111.013819",
    "porcentaje": "0.0966",
    "programa": "Apoyos para actividades cientЎficas, tecnolўgicas y de innovaciўn",
    " \"pp\"": "2"
  },
  {
    "items": "22",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "4516.101997",
    "porcentaje": "0.1062",
    "programa": "Infraestructura para la Protecciўn de Centros de Poblaciўn y µreas Productivas",
    " \"pp\"": "129"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "4549.861529",
    "porcentaje": "0.1070",
    "programa": "Cuota correspondiente de los Haberes, Haberes de Retiro y Pensiones",
    " \"pp\"": "5"
  },
  {
    "items": "554",
    "ramo": "22",
    "nombre": "Instituto Nacional Electoral",
    "total": "4625.185045",
    "porcentaje": "0.1087",
    "programa": "Otorgamiento de prerrogativas a partidos polЎticos, fiscalizaciўn de sus recursos y administraciўn de los tiempos del estado en radio y televisiўn",
    " \"pp\"": "9"
  },
  {
    "items": "23",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "4636.408517",
    "porcentaje": "0.1090",
    "programa": "Educaciўn Inicial y B sica Comunitaria",
    " \"pp\"": "66"
  },
  {
    "items": "7",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "4726.908554",
    "porcentaje": "0.1111",
    "programa": "Fortalecimiento de la Calidad Educativa",
    " \"pp\"": "267"
  },
  {
    "items": "2",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "4802.4",
    "porcentaje": "0.1129",
    "programa": "Innovaciўn tecnolўgica para incrementar la productividad de las empresas",
    " \"pp\"": "3"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "4901.107035",
    "porcentaje": "0.1152",
    "programa": "Aportaciones Estatutarias al Seguro de Retiro, CesantЎa en Edad Avanzada y Vejez",
    " \"pp\"": "11"
  },
  {
    "items": "16",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "4908.495357",
    "porcentaje": "0.1154",
    "programa": "Programa de Productividad y Competitividad Agroalimentaria",
    " \"pp\"": "257"
  },
  {
    "items": "11",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "5178.03749",
    "porcentaje": "0.1217",
    "programa": "Apoyos para el Desarrollo Forestal Sustentable",
    " \"pp\"": "219"
  },
  {
    "items": "4",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "5556.152527",
    "porcentaje": "0.1306",
    "programa": "Programa de Fomento Ganadero",
    " \"pp\"": "260"
  },
  {
    "items": "1",
    "ramo": "34",
    "nombre": "Erogaciones para los Programas de Apoyo a Ahorradores y Deudores de la Banca",
    "total": "5653.8",
    "porcentaje": "0.1329",
    "programa": "ESTADOS Y MUNICIPIOS Reestructuraciўn en UDIs",
    " \"pp\"": "7"
  },
  {
    "items": "606",
    "ramo": "40",
    "nombre": "Informaciўn Nacional EstadЎstica y Geogr fica",
    "total": "5678.426959",
    "porcentaje": "0.1335",
    "programa": "Producciўn y difusiўn de informaciўn estadЎstica y geogr fica",
    " \"pp\"": "2"
  },
  {
    "items": "2",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "5689.34978",
    "porcentaje": "0.1337",
    "programa": "Proyectos de construcciўn de aeropuertos",
    " \"pp\"": "5"
  },
  {
    "items": "568",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "5702.405643",
    "porcentaje": "0.1340",
    "programa": "Investigaciўn cientЎfica, desarrollo e innovaciўn",
    " \"pp\"": "3"
  },
  {
    "items": "720",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "5736.909034",
    "porcentaje": "0.1349",
    "programa": "Gestiўn integral y sustentable del agua",
    " \"pp\"": "10"
  },
  {
    "items": "445",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "5816.479586",
    "porcentaje": "0.1367",
    "programa": "Recaudaciўn de ingresos obrero patronales",
    " \"pp\"": "6"
  },
  {
    "items": "1",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "5952.697849",
    "porcentaje": "0.1399",
    "programa": "Subsidios en materia de seguridad pЈblica",
    " \"pp\"": "7"
  },
  {
    "items": "21",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "6080.673962",
    "porcentaje": "0.1429",
    "programa": "Programa de sanidad militar",
    " \"pp\"": "9"
  },
  {
    "items": "13",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "6160.820477",
    "porcentaje": "0.1448",
    "programa": "Programa de Apoyos a Peque¤os Productores",
    " \"pp\"": "266"
  },
  {
    "items": "37",
    "ramo": "12",
    "nombre": "Salud",
    "total": "6209.909161",
    "porcentaje": "0.1460",
    "programa": "PROSPERA Programa de Inclusiўn Social",
    " \"pp\"": "72"
  },
  {
    "items": "8",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "6373.398072",
    "porcentaje": "0.1498",
    "programa": "Expansiўn de la Educaciўn Media Superior y Superior",
    " \"pp\"": "79"
  },
  {
    "items": "18",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "6547.966766",
    "porcentaje": "0.1539",
    "programa": "Infraestructura de agua potable, alcantarillado y saneamiento",
    " \"pp\"": "7"
  },
  {
    "items": "1",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "6831.051596",
    "porcentaje": "0.1606",
    "programa": "FAM Infraestructura Educativa B sica",
    " \"pp\"": "7"
  },
  {
    "items": "229",
    "ramo": "51",
    "nombre": "Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado",
    "total": "6969.305207",
    "porcentaje": "0.1638",
    "programa": "Gastos Administrativos por Operaciўn de Fondos y Seguros",
    " \"pp\"": "2"
  },
  {
    "items": "3",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "7000",
    "porcentaje": "0.1646",
    "programa": "FASP",
    " \"pp\"": "11"
  },
  {
    "items": "10",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "7192.666338",
    "porcentaje": "0.1691",
    "programa": "Fondo Regional",
    " \"pp\"": "19"
  },
  {
    "items": "41",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "7255.532882",
    "porcentaje": "0.1706",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "3",
    "ramo": "10",
    "nombre": "EconomЎa",
    "total": "7261.051156",
    "porcentaje": "0.1707",
    "programa": "Fondo Nacional Emprendedor",
    " \"pp\"": "20"
  },
  {
    "items": "702",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "7303.892907",
    "porcentaje": "0.1717",
    "programa": "Conservaciўn de infraestructura de caminos rurales y carreteras alimentadoras",
    " \"pp\"": "37"
  },
  {
    "items": "32",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "7444.946435",
    "porcentaje": "0.1750",
    "programa": "FAIS Entidades",
    " \"pp\"": "3"
  },
  {
    "items": "3",
    "ramo": "47",
    "nombre": "Entidades no Sectorizadas",
    "total": "7590.673968",
    "porcentaje": "0.1784",
    "programa": "Programa de InfraestructuraяIndЎgena",
    " \"pp\"": "179"
  },
  {
    "items": "4",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "7607.774802",
    "porcentaje": "0.1788",
    "programa": "Programa de la Reforma Educativa",
    " \"pp\"": "82"
  },
  {
    "items": "2",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "8035.987256",
    "porcentaje": "0.1889",
    "programa": "Fondo de Desastres Naturales (FONDEN)",
    " \"pp\"": "1"
  },
  {
    "items": "458",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "8593.733178",
    "porcentaje": "0.2020",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "8843.57602",
    "porcentaje": "0.2079",
    "programa": "Provisiones Salariales y Econўmicas",
    " \"pp\"": "125"
  },
  {
    "items": "7",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "8945.914574",
    "porcentaje": "0.2103",
    "programa": "FONE Fondo de Compensaciўn",
    " \"pp\"": "16"
  },
  {
    "items": "131",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "9015.937561",
    "porcentaje": "0.2119",
    "programa": "Desarrollo Cultural",
    " \"pp\"": "11"
  },
  {
    "items": "5561",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "9034.85",
    "porcentaje": "0.2124",
    "programa": "Proyectos de construcciўn de carreteras alimentadoras y caminos rurales",
    " \"pp\"": "31"
  },
  {
    "items": "32",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "9092.256174",
    "porcentaje": "0.2137",
    "programa": "FAM Asistencia Social ",
    " \"pp\"": "6"
  },
  {
    "items": "34",
    "ramo": "38",
    "nombre": "Consejo Nacional de Ciencia y TecnologЎa",
    "total": "9114.861807",
    "porcentaje": "0.2143",
    "programa": "Becas de posgrado y apoyos a la calidad",
    " \"pp\"": "190"
  },
  {
    "items": "20",
    "ramo": "6",
    "nombre": "Hacienda y Cr‚dito PЈblico",
    "total": "9223.942838",
    "porcentaje": "0.2168",
    "programa": "Recaudaciўn de las contribuciones federales",
    " \"pp\"": "26"
  },
  {
    "items": "8",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "9362.58267",
    "porcentaje": "0.2201",
    "programa": "Programa de Infraestructura",
    " \"pp\"": "273"
  },
  {
    "items": "2",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "9492.218325",
    "porcentaje": "0.2231",
    "programa": "Situaciones laborales supervenientes",
    " \"pp\"": "1"
  },
  {
    "items": "3",
    "ramo": "15",
    "nombre": "Desarrollo Agrario, Territorial y Urbano",
    "total": "9624.522649",
    "porcentaje": "0.2263",
    "programa": "Programa de acceso al financiamiento para soluciones habitacionales",
    " \"pp\"": "177"
  },
  {
    "items": "792",
    "ramo": "17",
    "nombre": "ProcuradurЎa General de la RepЈblica",
    "total": "9787.46651",
    "porcentaje": "0.2301",
    "programa": "Investigar y perseguir los delitos del orden federal",
    " \"pp\"": "2"
  },
  {
    "items": "3",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "9948.655991",
    "porcentaje": "0.2339",
    "programa": "Fondo para el Fortalecimiento de la Infreastructura Estatal y Municipal",
    " \"pp\"": "132"
  },
  {
    "items": "158",
    "ramo": "16",
    "nombre": "Medio Ambiente y Recursos Naturales",
    "total": "9990.880759",
    "porcentaje": "0.2349",
    "programa": "Programa de Agua potable, Alcantarillado y Saneamiento",
    " \"pp\"": "74"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "10201.3",
    "porcentaje": "0.2398",
    "programa": "Programa IMSS-PROSPERA",
    " \"pp\"": "38"
  },
  {
    "items": "433",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "10251.062203",
    "porcentaje": "0.2410",
    "programa": "Servicios de guarderЎa",
    " \"pp\"": "7"
  },
  {
    "items": "29",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "10400.284715",
    "porcentaje": "0.2445",
    "programa": "Fondo Metropolitano",
    " \"pp\"": "57"
  },
  {
    "items": "16",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "10603.347592",
    "porcentaje": "0.2492",
    "programa": "Programa de Productividad Rural",
    " \"pp\"": "258"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "10693",
    "porcentaje": "0.2514",
    "programa": "FEIP",
    " \"pp\"": "81"
  },
  {
    "items": "23",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "10749.607402",
    "porcentaje": "0.2527",
    "programa": "FONE Otros de Gasto Corriente",
    " \"pp\"": "14"
  },
  {
    "items": "3",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "11061.36539",
    "porcentaje": "0.2600",
    "programa": "Escuelas de Tiempo Completo",
    " \"pp\"": "221"
  },
  {
    "items": "1",
    "ramo": "25",
    "nombre": "Previsiones y Aportaciones para los Sistemas de Educaciўn B sica, Normal, Tecnolўgica y de Adultos",
    "total": "11586.136692",
    "porcentaje": "0.2724",
    "programa": "Previsiones salariales y econўmicas del Fondo de Aportaciones para la Nўmina Educativa y Gasto Operativo (FONE)",
    " \"pp\"": "2"
  },
  {
    "items": "61",
    "ramo": "1",
    "nombre": "Poder Legislativo",
    "total": "11881.649772",
    "porcentaje": "0.2793",
    "programa": "Actividades derivadas del trabajo legislativo",
    " \"pp\"": "1"
  },
  {
    "items": "4",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "12071.81054",
    "porcentaje": "0.2838",
    "programa": "Programa de Comercializaciўn y Desarrollo de Mercados",
    " \"pp\"": "262"
  },
  {
    "items": "32",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "12093.52778",
    "porcentaje": "0.2843",
    "programa": "Operaciўn y desarrollo de la Fuerza A‚rea Mexicana",
    " \"pp\"": "3"
  },
  {
    "items": "2",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "12319.34886",
    "porcentaje": "0.2896",
    "programa": "Apoyo para cubrir el gasto de operaciўn del ISSSTE",
    " \"pp\"": "18"
  },
  {
    "items": "31",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "12433.398539",
    "porcentaje": "0.2923",
    "programa": "FONE Gasto de Operaciўn",
    " \"pp\"": "15"
  },
  {
    "items": "27",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "12651.849521",
    "porcentaje": "0.2974",
    "programa": "Programa Nacional de Becas",
    " \"pp\"": "243"
  },
  {
    "items": "256",
    "ramo": "51",
    "nombre": "Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado",
    "total": "14254.093616",
    "porcentaje": "0.3351",
    "programa": "Suministro de Claves de Medicamentos",
    " \"pp\"": "18"
  },
  {
    "items": "32",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "14500.364836",
    "porcentaje": "0.3409",
    "programa": "Pago de subsidios a los asegurados",
    " \"pp\"": "4"
  },
  {
    "items": "233",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "14558.379563",
    "porcentaje": "0.3422",
    "programa": "Investigaciўn CientЎfica y Desarrollo Tecnolўgico",
    " \"pp\"": "21"
  },
  {
    "items": "1",
    "ramo": "34",
    "nombre": "Erogaciones para los Programas de Apoyo a Ahorradores y Deudores de la Banca",
    "total": "14912.7",
    "porcentaje": "0.3506",
    "programa": "I P A B",
    " \"pp\"": "11"
  },
  {
    "items": "569",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "15056.531363",
    "porcentaje": "0.3540",
    "programa": "Reconstrucciўn y Conservaciўn deяCarreteras",
    " \"pp\"": "32"
  },
  {
    "items": "63",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "15449.746236",
    "porcentaje": "0.3632",
    "programa": "Rentas vitalicias Ley 1997",
    " \"pp\"": "2"
  },
  {
    "items": "27",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "15747.378786",
    "porcentaje": "0.3702",
    "programa": "Proyectos de Infraestructura Ferroviaria",
    " \"pp\"": "40"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "15749.5",
    "porcentaje": "0.3702",
    "programa": "Cuota Social Seguro de Salud ISSSTE",
    " \"pp\"": "6"
  },
  {
    "items": "1",
    "ramo": "30",
    "nombre": "Adeudos de Ejercicios Fiscales Anteriores",
    "total": "16048.6",
    "porcentaje": "0.3773",
    "programa": "Adeudos de Ejercicios Fiscales Anteriores (ADEFAS)",
    " \"pp\"": "1"
  },
  {
    "items": "3",
    "ramo": "24",
    "nombre": "Deuda PЈblica",
    "total": "17674.698121",
    "porcentaje": "0.4155",
    "programa": "Organismos financieros internacionales",
    " \"pp\"": "9"
  },
  {
    "items": "425",
    "ramo": "13",
    "nombre": "Marina",
    "total": "17784.429692",
    "porcentaje": "0.4181",
    "programa": "Emplear el Poder Naval de la Federaciўn para salvaguardar la soberanЎa y seguridad nacionales",
    " \"pp\"": "1"
  },
  {
    "items": "21",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "17972.744078",
    "porcentaje": "0.4225",
    "programa": "Administraciўn del Sistema Federal Penitenciario",
    " \"pp\"": "904"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "18573.2",
    "porcentaje": "0.4366",
    "programa": "Pensiones Civiles Militares y de Gracia",
    " \"pp\"": "9"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "19373.797808",
    "porcentaje": "0.4554",
    "programa": "Previsiones para las pensiones en curso de pago de los extrabajadores de Luz y Fuerza del Centro",
    " \"pp\"": "25"
  },
  {
    "items": "3",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "19771.446636",
    "porcentaje": "0.4648",
    "programa": "Proyectos de Desarrollo Regional",
    " \"pp\"": "128"
  },
  {
    "items": "351",
    "ramo": "12",
    "nombre": "Salud",
    "total": "19983.656106",
    "porcentaje": "0.4698",
    "programa": "Atenciўn a la Salud",
    " \"pp\"": "23"
  },
  {
    "items": "12",
    "ramo": "8",
    "nombre": "Agricultura, GanaderЎa, Desarrollo Rural, Pesca y Alimentaciўn",
    "total": "22259.559445",
    "porcentaje": "0.5233",
    "programa": "Programa de Fomento a la Agricultura",
    " \"pp\"": "259"
  },
  {
    "items": "1517",
    "ramo": "9",
    "nombre": "Comunicaciones y Transportes",
    "total": "23685.121235",
    "porcentaje": "0.5568",
    "programa": "Proyectos de construcciўn de carreteras",
    " \"pp\"": "3"
  },
  {
    "items": "32",
    "ramo": "28",
    "nombre": "Participaciones a Entidades Federativas y Municipios",
    "total": "24282.277728",
    "porcentaje": "0.5708",
    "programa": "Fondo de Fomento Municipal",
    " \"pp\"": "2"
  },
  {
    "items": "25",
    "ramo": "4",
    "nombre": "Gobernaciўn",
    "total": "25065.882426",
    "porcentaje": "0.5892",
    "programa": "Operativos para la prevenciўn y disuasiўn del delito",
    " \"pp\"": "903"
  },
  {
    "items": "1125",
    "ramo": "51",
    "nombre": "Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado",
    "total": "25279.503811",
    "porcentaje": "0.5943",
    "programa": "Atenciўn a laяSalud",
    " \"pp\"": "44"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "29036.008552",
    "porcentaje": "0.6826",
    "programa": "Cuota Social al Seguro de Retiro, CesantЎa en Edad Avanzada y Vejez",
    " \"pp\"": "12"
  },
  {
    "items": "2",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "29152.424805",
    "porcentaje": "0.6853",
    "programa": "PROSPERA Programa de Inclusiўn Social",
    " \"pp\"": "72"
  },
  {
    "items": "1",
    "ramo": "23",
    "nombre": "Provisiones Salariales y Econўmicas",
    "total": "30000",
    "porcentaje": "0.7052",
    "programa": "Subsidios a las Tarifas El‚ctricas",
    " \"pp\"": "129"
  },
  {
    "items": "32",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "33995.1892",
    "porcentaje": "0.7991",
    "programa": "FAFEF",
    " \"pp\"": "12"
  },
  {
    "items": "22",
    "ramo": "25",
    "nombre": "Previsiones y Aportaciones para los Sistemas de Educaciўn B sica, Normal, Tecnolўgica y de Adultos",
    "total": "34284.285256",
    "porcentaje": "0.8059",
    "programa": "Servicios de educaciўn b sica en el D.F.",
    " \"pp\"": "3"
  },
  {
    "items": "234",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "35394.501141",
    "porcentaje": "0.8320",
    "programa": "Servicios de Educaciўn Media Superior",
    " \"pp\"": "7"
  },
  {
    "items": "259",
    "ramo": "7",
    "nombre": "Defensa Nacional",
    "total": "35738.066293",
    "porcentaje": "0.8401",
    "programa": "Defensa de la Integridad, la Independencia, la SoberanЎa del Territorio Nacional",
    " \"pp\"": "2"
  },
  {
    "items": "35",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "39486.540525",
    "porcentaje": "0.9282",
    "programa": "Pensiўn para Adultos Mayores",
    " \"pp\"": "176"
  },
  {
    "items": "302",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "45798.679071",
    "porcentaje": "1.0766",
    "programa": "Servicios de Educaciўn Superior y Posgrado",
    " \"pp\"": "10"
  },
  {
    "items": "3",
    "ramo": "20",
    "nombre": "Desarrollo Social",
    "total": "46327.572255",
    "porcentaje": "1.0890",
    "programa": "PROSPERA Programa de Inclusiўn Social",
    " \"pp\"": "72"
  },
  {
    "items": "3",
    "ramo": "24",
    "nombre": "Deuda PЈblica",
    "total": "48185.449866",
    "porcentaje": "1.1327",
    "programa": "Bonos",
    " \"pp\"": "5"
  },
  {
    "items": "1304",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "49109.914347",
    "porcentaje": "1.1544",
    "programa": "Actividades de apoyo administrativo",
    " \"pp\"": "1"
  },
  {
    "items": "32",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "53974.647538",
    "porcentaje": "1.2688",
    "programa": "FAIS Municipal y de las Demarcaciones Territoriales del Distrito Federal",
    " \"pp\"": "4"
  },
  {
    "items": "64",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "62218.480919",
    "porcentaje": "1.4626",
    "programa": "FORTAMUN",
    " \"pp\"": "5"
  },
  {
    "items": "1156",
    "ramo": "3",
    "nombre": "Poder Judicial",
    "total": "63616.316565",
    "porcentaje": "1.4954",
    "programa": "Otras Actividades",
    " \"pp\"": "1"
  },
  {
    "items": "32",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "68054.498821",
    "porcentaje": "1.5998",
    "programa": "R‚gimen de Pensiones y Jubilaciones IMSS",
    " \"pp\"": "3"
  },
  {
    "items": "4",
    "ramo": "12",
    "nombre": "Salud",
    "total": "75437.199414",
    "porcentaje": "1.7733",
    "programa": "Seguro Popular",
    " \"pp\"": "5"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "75655.678768",
    "porcentaje": "1.7785",
    "programa": "Seguro de Enfermedad y Maternidad",
    " \"pp\"": "1"
  },
  {
    "items": "181",
    "ramo": "11",
    "nombre": "Educaciўn PЈblica",
    "total": "77597.27",
    "porcentaje": "1.8241",
    "programa": "Subsidios para organismos descentralizados estatales",
    " \"pp\"": "6"
  },
  {
    "items": "160",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "82445.977652",
    "porcentaje": "1.9381",
    "programa": "FASSA",
    " \"pp\"": "2"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "159044.586296",
    "porcentaje": "3.7387",
    "programa": "Apoyo para cubrir el d‚ficit de la nўmina de pensiones del ISSSTE",
    " \"pp\"": "6"
  },
  {
    "items": "33",
    "ramo": "28",
    "nombre": "Participaciones a Entidades Federativas y Municipios",
    "total": "162332.558758",
    "porcentaje": "3.8160",
    "programa": "Otros conceptos participables e incentivos econўmicos",
    " \"pp\"": "3"
  },
  {
    "items": "632",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "189289.168009",
    "porcentaje": "4.4497",
    "programa": "Atenciўn a la Salud",
    " \"pp\"": "11"
  },
  {
    "items": "32",
    "ramo": "50",
    "nombre": "Instituto Mexicano del Seguro Social",
    "total": "189393.0507",
    "porcentaje": "4.4521",
    "programa": "Pensiones en curso de pago Ley 1973",
    " \"pp\"": "1"
  },
  {
    "items": "1",
    "ramo": "19",
    "nombre": "Aportaciones a Seguridad Social",
    "total": "189393.0507",
    "porcentaje": "4.4521",
    "programa": "Pensiones y Jubilaciones en curso de Pago",
    " \"pp\"": "8"
  },
  {
    "items": "3",
    "ramo": "24",
    "nombre": "Deuda PЈblica",
    "total": "284358.816736",
    "porcentaje": "6.6845",
    "programa": "Valores gubernamentales",
    " \"pp\"": "1"
  },
  {
    "items": "31",
    "ramo": "33",
    "nombre": "Aportaciones Federales para Entidades Federativas y Municipios",
    "total": "310938.920856",
    "porcentaje": "7.3094",
    "programa": "FONE Servicios Personales",
    " \"pp\"": "13"
  },
  {
    "items": "32",
    "ramo": "28",
    "nombre": "Participaciones a Entidades Federativas y Municipios",
    "total": "489849.571873",
    "porcentaje": "11.5151",
    "programa": "Fondo General de Participaciones",
    " \"pp\"": "1"
  }
  ];
})(window, document,{
  divIntro          : "gf-game-section-intro",
  divIntroB         : "gf-game-section-intro-b",
  divBranchSelector : "gf-game-section-branch-selector",
  divBranchMoney    : "gf-game-section-branch-money",
  divProgramMoney   : "gf-game-section-program-money",
  aCloseBtn         : "gf-game-next"
});