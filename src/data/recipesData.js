// Catálogo de Recetas de Mi Menú Saludable
// Generado a partir de catalogo_recetas.xlsx

export const EXTENDED_RECIPES = [
  // ==========================================
  // DESAYUNOS Y MERIENDAS
  // ==========================================
  {
    id: "BM01",
    nombre: "Tostadas de pan integral con palta, huevo pochado y semillas",
    categoria: "Desayuno/Merienda",
    subcategoria: "Salado",
    descripcion: "Clásico desayuno cargado de fibra, grasas saludables y proteína.",
    porciones: 2,
    prep_min: 5,
    total_min: 12,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["palta"],
    etiquetas: ["Rápida", "Poco tiempo", "Vegetariana", "Salado", "Alto en fibra", "Proteico"],
    preparacion_anticipada: false,
    para_llevar: false,
    congelable: false,
    conservacion: "Consumir inmediatamente.",
    ingredientes: [
      {
        id: "i1",
        nombre: "pan integral",
        cantidad: 4,
        unidad: "rebanadas",
        categoria: "Panadería"
      },
      {
        id: "i2",
        nombre: "palta",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Verduras"
      },
      {
        id: "i3",
        nombre: "huevos",
        cantidad: 2,
        unidad: "unidades",
        categoria: "Refrigerados"
      },
      {
        id: "i4",
        nombre: "jugo de limón",
        cantidad: 1,
        unidad: "cda",
        categoria: "Frutas"
      },
      {
        id: "i5",
        nombre: "semillas de sésamo",
        cantidad: 1,
        unidad: "cda",
        categoria: "Almacén"
      }
    ],
    pasos: ["Tostar pan.", "Pisar palta con limón, sal y pimienta.", "Pochar huevos en agua hirviendo con vinagre 3-4 min.", "Untar palta y colocar huevo encina."],
    sustituciones: [
      {
        original: "Palta",
        reemplazo: "queso crema magro",
        nota: ""
      },
      {
        original: "Semillas",
        reemplazo: "frutos secos",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM02"],
    emoji: "🍞"
  },
  {
    id: "BM02",
    nombre: "Pancakes integrales de avena y banana",
    categoria: "Desayuno/Merienda",
    subcategoria: "Dulce",
    descripcion: "Panqueques esponjosos dulces naturalmente sin azúcar agregada.",
    porciones: 2,
    prep_min: 10,
    total_min: 20,
    dificultad: "Fácil",
    frutas: ["banana", "frutillas"],
    verduras: [],
    etiquetas: ["Con frutas", "Rápida", "Poco tiempo", "Vegetariana", "Sin Gluten", "Dulce", "Apta para niños"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Guardar en heladera 3 días o congelar.",
    ingredientes: [
      {
        id: "i6",
        nombre: "banana madura",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Frutas"
      },
      {
        id: "i7",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Refrigerados"
      },
      {
        id: "i8",
        nombre: "avena",
        cantidad: 1,
        unidad: "taza",
        categoria: "Almacén"
      },
      {
        id: "i9",
        nombre: "leche",
        cantidad: 0.5,
        unidad: "taza",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i10",
        nombre: "polvo de hornear",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Almacén"
      },
      {
        id: "i11",
        nombre: "vainilla",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Especias"
      }
    ],
    pasos: ["Licuar ingredientes.", "Cocinar porciones en sartén antiadherente 2 min por lado.", "Servir con frutillas."],
    sustituciones: [
      {
        original: "Banana",
        reemplazo: "puré de manzana",
        nota: ""
      },
      {
        original: "Leche",
        reemplazo: "bebida vegetal",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01"],
    emoji: "🥞"
  },
  {
    id: "BM03",
    nombre: "Muffins integrales de arándanos y manzana sin azúcar",
    categoria: "Desayuno/Merienda",
    subcategoria: "Dulce",
    descripcion: "Muffins super esponjosos endulzados con miel o estevia.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: ["manzana", "arándanos"],
    verduras: [],
    etiquetas: ["Con frutas", "Vegetariana", "Dulce", "Apta para niños", "Horneados"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar en tupper por 4 días.",
    ingredientes: [
      {
        id: "i12",
        nombre: "harina integral",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i13",
        nombre: "manzana rallada",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Frutas"
      },
      {
        id: "i14",
        nombre: "arándanos",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Frutas"
      },
      {
        id: "i15",
        nombre: "huevos",
        cantidad: 2,
        unidad: "unidades",
        categoria: "Refrigerados"
      },
      {
        id: "i16",
        nombre: "miel",
        cantidad: 3,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i17",
        nombre: "aceite",
        cantidad: 4,
        unidad: "cdas",
        categoria: "Almacén"
      }
    ],
    pasos: ["Batir huevos, miel y aceite.", "Sumar manzana rallada, harina, polvo de hornear y canela.", "Integrar arándanos y hornear a 180°C por 20 min."],
    sustituciones: [
      {
        original: "Arándanos",
        reemplazo: "pasas de uva",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🧁"
  },
  {
    id: "BM04",
    nombre: "Yogur natural con granola casera y frutas de estación",
    categoria: "Desayuno/Merienda",
    subcategoria: "Dulce",
    descripcion: "Bowl fresco, crocante y nutritivo.",
    porciones: 1,
    prep_min: 5,
    total_min: 5,
    dificultad: "Muy fácil",
    frutas: ["kiwi", "durazno", "banana"],
    verduras: [],
    etiquetas: ["Sin cocción", "Con frutas", "Rápida", "Poco tiempo", "Vegetariana", "Sin Gluten", "Dulce"],
    preparacion_anticipada: false,
    para_llevar: true,
    congelable: false,
    conservacion: "Armar en el momento.",
    ingredientes: [
      {
        id: "i18",
        nombre: "yogur natural",
        cantidad: 1,
        unidad: "taza",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i19",
        nombre: "granola casera",
        cantidad: 3,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i20",
        nombre: "kiwi",
        cantidad: 0.5,
        unidad: "unidades",
        categoria: "Frutas"
      },
      {
        id: "i21",
        nombre: "durazno",
        cantidad: 0.5,
        unidad: "unidades",
        categoria: "Frutas"
      },
      {
        id: "i22",
        nombre: "chía",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Almacén"
      }
    ],
    pasos: ["Servir yogur en un bowl.", "Agregar frutas en cubos, granola y chía."],
    sustituciones: [
      {
        original: "Yogur",
        reemplazo: "yogur vegetal",
        nota: ""
      },
      {
        original: "Kiwi",
        reemplazo: "frutillas",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🥣"
  },
  {
    id: "BM05",
    nombre: "Tostadas de masa madre con hummus y tomates cherry",
    categoria: "Desayuno/Merienda",
    subcategoria: "Salado",
    descripcion: "Opción salada vegetal muy nutritiva y rica en proteínas.",
    porciones: 2,
    prep_min: 10,
    total_min: 10,
    dificultad: "Muy fácil",
    frutas: [],
    verduras: ["tomate cherry"],
    etiquetas: ["Rápida", "Poco tiempo", "Vegetariana", "Vegano", "Salado", "Proteico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: false,
    conservacion: "Heladera 5 días.",
    ingredientes: [
      {
        id: "i23",
        nombre: "garbanzos cocidos",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i24",
        nombre: "tahini",
        cantidad: 1,
        unidad: "cda",
        categoria: "Almacén"
      },
      {
        id: "i25",
        nombre: "limón",
        cantidad: 2,
        unidad: "cdas",
        categoria: "Frutas"
      },
      {
        id: "i26",
        nombre: "ajo",
        cantidad: 0.5,
        unidad: "dientes",
        categoria: "Verduras"
      },
      {
        id: "i27",
        nombre: "oliva",
        cantidad: 2,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i28",
        nombre: "pan masa madre",
        cantidad: 4,
        unidad: "rebanadas",
        categoria: "Panadería"
      },
      {
        id: "i29",
        nombre: "cherrys",
        cantidad: 8,
        unidad: "unidades",
        categoria: "Almacén"
      }
    ],
    pasos: ["Procesar garbanzos, tahini, limón, ajo y oliva.", "Untar sobre tostadas y decorar con cherrys."],
    sustituciones: [
      {
        original: "Garbanzos",
        reemplazo: "porotos blancos",
        nota: ""
      },
      {
        original: "Tahini",
        reemplazo: "mantequilla de maní",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🍞"
  },
  {
    id: "BM06",
    nombre: "Budín saludable de naranja, amapola y aceite de oliva",
    categoria: "Desayuno/Merienda",
    subcategoria: "Dulce",
    descripcion: "Budín cítrico perfumado elaborado con ingredientes integrales.",
    porciones: 8,
    prep_min: 15,
    total_min: 45,
    dificultad: "Fácil",
    frutas: ["naranja"],
    verduras: [],
    etiquetas: ["Con frutas", "Vegetariana", "Dulce", "Casero", "Cítrico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Budinera tapada por 4 días.",
    ingredientes: [
      {
        id: "i30",
        nombre: "harina leudante integral",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i31",
        nombre: "jugo de naranja",
        cantidad: 1,
        unidad: "taza",
        categoria: "Frutas"
      },
      {
        id: "i32",
        nombre: "ralladura",
        cantidad: 1,
        unidad: "cda",
        categoria: "Almacén"
      },
      {
        id: "i33",
        nombre: "huevos",
        cantidad: 2,
        unidad: "unidades",
        categoria: "Refrigerados"
      },
      {
        id: "i34",
        nombre: "azúcar mascabo",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i35",
        nombre: "oliva",
        cantidad: 0.3,
        unidad: "tazas",
        categoria: "Almacén"
      }
    ],
    pasos: ["Batir huevos, azúcar y oliva.", "Sumar jugo, ralladura, harina y amapola.", "Hornear a 180°C por 35 min."],
    sustituciones: [
      {
        original: "Jugo de naranja",
        reemplazo: "jugo de mandarina",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🍰"
  },
  {
    id: "BM07",
    nombre: "Avena nocturna (Overnight Oats) con manzana y canela",
    categoria: "Desayuno/Merienda",
    subcategoria: "Dulce",
    descripcion: "Desayuno exprés que se prepara la noche anterior.",
    porciones: 1,
    prep_min: 5,
    total_min: 5,
    dificultad: "Muy fácil",
    frutas: ["manzana"],
    verduras: [],
    etiquetas: ["Sin cocción", "Con frutas", "Rápida", "Poco tiempo", "Vegetariana", "Sin Gluten", "Dulce", "Preparación anticipada"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: false,
    conservacion: "Heladera toda la noche.",
    ingredientes: [
      {
        id: "i36",
        nombre: "avena",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i37",
        nombre: "leche",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i38",
        nombre: "yogur",
        cantidad: 2,
        unidad: "cdas",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i39",
        nombre: "manzana verde",
        cantidad: 0.5,
        unidad: "unidades",
        categoria: "Frutas"
      },
      {
        id: "i40",
        nombre: "canela",
        cantidad: 0.5,
        unidad: "cdta",
        categoria: "Especias"
      },
      {
        id: "i41",
        nombre: "nueces",
        cantidad: 1,
        unidad: "cda",
        categoria: "Almacén"
      }
    ],
    pasos: ["Mezclar avena, leche, yogur y canela en un frasco.", "Sumar manzana picada, tapar y refrigerar toda la noche."],
    sustituciones: [
      {
        original: "Manzana",
        reemplazo: "pera",
        nota: ""
      },
      {
        original: "Nueces",
        reemplazo: "almendras",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🍽️"
  },
  {
    id: "BM08",
    nombre: "Omelette suave de queso por salut, espinaca y orégano",
    categoria: "Desayuno/Merienda",
    subcategoria: "Salado",
    descripcion: "Desayuno/merienda salada rica en proteínas y hierro.",
    porciones: 1,
    prep_min: 5,
    total_min: 10,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["espinaca"],
    etiquetas: ["Rápida", "Poco tiempo", "Vegetariana", "Sin Gluten", "Salado", "Proteico"],
    preparacion_anticipada: false,
    para_llevar: false,
    congelable: false,
    conservacion: "Consumir recién hecho.",
    ingredientes: [
      {
        id: "i42",
        nombre: "huevos",
        cantidad: 2,
        unidad: "unidades",
        categoria: "Refrigerados"
      },
      {
        id: "i43",
        nombre: "espinaca picada",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Verduras"
      },
      {
        id: "i44",
        nombre: "queso por salut",
        cantidad: 30,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i45",
        nombre: "orégano",
        cantidad: 0.5,
        unidad: "cdta",
        categoria: "Especias"
      },
      {
        id: "i46",
        nombre: "oliva",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Almacén"
      }
    ],
    pasos: ["Batir huevos con condimentos.", "Cocinar en sartén con oliva, agregar espinaca y queso.", "Doblar a la mitad y dorar."],
    sustituciones: [
      {
        original: "Espinaca",
        reemplazo: "cebolla de verdeo",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🍳"
  },
  {
    id: "BM09",
    nombre: "Pudding de chía con leche de coco y frutas frescas",
    categoria: "Desayuno/Merienda",
    subcategoria: "Dulce",
    descripcion: "Súper cremoso, repleto de Omega 3 y fibra.",
    porciones: 2,
    prep_min: 5,
    total_min: 5,
    dificultad: "Muy fácil",
    frutas: ["frutillas", "arándanos", "banana"],
    verduras: [],
    etiquetas: ["Con frutas", "Rápida", "Poco tiempo", "Vegetariana", "Sin Gluten", "Dulce"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: false,
    conservacion: "Refrigerar 3-4 días.",
    ingredientes: [
      {
        id: "i47",
        nombre: "semillas de chía",
        cantidad: 4,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i48",
        nombre: "leche de coco",
        cantidad: 1,
        unidad: "taza",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i49",
        nombre: "vainilla",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Especias"
      },
      {
        id: "i50",
        nombre: "miel",
        cantidad: 1,
        unidad: "cda",
        categoria: "Almacén"
      },
      {
        id: "i51",
        nombre: "frutas",
        cantidad: 1,
        unidad: "taza",
        categoria: "Frutas"
      }
    ],
    pasos: ["Mezclar chía, leche, vainilla y miel.", "Reposar en heladera mínimo 2 horas.", "Servir con fruta fresca."],
    sustituciones: [
      {
        original: "Leche de coco",
        reemplazo: "leche descremada",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🍮"
  },
  {
    id: "BM10",
    nombre: "Tostadas francesas integrales a la canela",
    categoria: "Desayuno/Merienda",
    subcategoria: "Dulce",
    descripcion: "Versión saludable del clásico desayuno, dorado a la sartén.",
    porciones: 2,
    prep_min: 5,
    total_min: 15,
    dificultad: "Fácil",
    frutas: ["banana"],
    verduras: [],
    etiquetas: ["Con frutas", "Rápida", "Poco tiempo", "Vegetariana", "Dulce", "Apta para niños"],
    preparacion_anticipada: false,
    para_llevar: false,
    congelable: false,
    conservacion: "Consumir recién hechas.",
    ingredientes: [
      {
        id: "i52",
        nombre: "pan integral",
        cantidad: 4,
        unidad: "rebanadas",
        categoria: "Panadería"
      },
      {
        id: "i53",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Refrigerados"
      },
      {
        id: "i54",
        nombre: "leche",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i55",
        nombre: "canela",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Especias"
      },
      {
        id: "i56",
        nombre: "miel",
        cantidad: 1,
        unidad: "cda",
        categoria: "Almacén"
      },
      {
        id: "i57",
        nombre: "banana",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Frutas"
      }
    ],
    pasos: ["Batir huevo, leche y canela.", "Remojar pan y dorar en sartén 2-3 min por lado.", "Servir con banana y miel."],
    sustituciones: [
      {
        original: "Pan integral",
        reemplazo: "pan brioche",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🍞"
  },
  {
    id: "BM11",
    nombre: "Waffles saludables de manzana y canela",
    categoria: "Desayuno/Merienda",
    subcategoria: "Dulce",
    descripcion: "Waffles crujientes por fuera y suaves por dentro.",
    porciones: 2,
    prep_min: 10,
    total_min: 20,
    dificultad: "Fácil",
    frutas: ["manzana"],
    verduras: [],
    etiquetas: ["Con frutas", "Rápida", "Poco tiempo", "Vegetariana", "Sin Gluten", "Dulce", "Crujiente", "Apta para niños"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Heladera 3 días o congelar.",
    ingredientes: [
      {
        id: "i58",
        nombre: "manzana rallada",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Frutas"
      },
      {
        id: "i59",
        nombre: "avena molida",
        cantidad: 1,
        unidad: "taza",
        categoria: "Almacén"
      },
      {
        id: "i60",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Refrigerados"
      },
      {
        id: "i61",
        nombre: "leche",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i62",
        nombre: "polvo de hornear",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Almacén"
      },
      {
        id: "i63",
        nombre: "canela",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Especias"
      }
    ],
    pasos: ["Mezclar ingredientes.", "Cocinar en wafflera 5-7 min hasta dorar."],
    sustituciones: [
      {
        original: "Manzana",
        reemplazo: "pera rallada",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🧇"
  },
  {
    id: "BM12",
    nombre: "Dip de ricota magra, miel y frutos secos con tostadas",
    categoria: "Desayuno/Merienda",
    subcategoria: "Dulce",
    descripcion: "Untable cremoso rico en calcio y proteínas.",
    porciones: 2,
    prep_min: 5,
    total_min: 8,
    dificultad: "Muy fácil",
    frutas: [],
    verduras: [],
    etiquetas: ["Sin cocción", "Rápida", "Poco tiempo", "Vegetariana", "Dulce", "Rico en calcio"],
    preparacion_anticipada: true,
    para_llevar: false,
    congelable: false,
    conservacion: "Heladera 4 días.",
    ingredientes: [
      {
        id: "i64",
        nombre: "ricota magra",
        cantidad: 200,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i65",
        nombre: "miel",
        cantidad: 2,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i66",
        nombre: "ralladura de limón",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Frutas"
      },
      {
        id: "i67",
        nombre: "frutos secos",
        cantidad: 2,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i68",
        nombre: "pan integral",
        cantidad: 4,
        unidad: "rebanadas",
        categoria: "Panadería"
      }
    ],
    pasos: ["Batir ricota con miel y ralladura.", "Untar sobre tostadas y espolvorear frutos secos."],
    sustituciones: [
      {
        original: "Ricota",
        reemplazo: "queso blanco descremado",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🍞"
  },
  {
    id: "BM13",
    nombre: "Licuado nutricional de banana, mantequilla de maní y leche",
    categoria: "Desayuno/Merienda",
    subcategoria: "Dulce",
    descripcion: "Bebida super energizante y saciante.",
    porciones: 1,
    prep_min: 5,
    total_min: 5,
    dificultad: "Muy fácil",
    frutas: ["banana"],
    verduras: [],
    etiquetas: ["Con frutas", "Rápida", "Poco tiempo", "Vegetariana", "Sin Gluten", "Dulce", "Licuado", "Exprés"],
    preparacion_anticipada: false,
    para_llevar: true,
    congelable: false,
    conservacion: "Consumir al instante.",
    ingredientes: [
      {
        id: "i69",
        nombre: "banana",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Frutas"
      },
      {
        id: "i70",
        nombre: "mantequilla de maní",
        cantidad: 1,
        unidad: "cda",
        categoria: "Almacén"
      },
      {
        id: "i71",
        nombre: "leche",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i72",
        nombre: "avena",
        cantidad: 2,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i73",
        nombre: "hielo",
        cantidad: 3,
        unidad: "cubos",
        categoria: "Almacén"
      }
    ],
    pasos: ["Licuar todos los ingredientes a máxima potencia 1-2 min."],
    sustituciones: [
      {
        original: "Mantequilla de maní",
        reemplazo: "pasta de almendras",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🥤"
  },
  {
    id: "BM14",
    nombre: "Sándwich tostado integral de queso crema,jamon y tomate",
    categoria: "Desayuno/Merienda",
    subcategoria: "Salado",
    descripcion: "Opción salada tradicional pero muy liviana.",
    porciones: 1,
    prep_min: 5,
    total_min: 8,
    dificultad: "Muy fácil",
    frutas: [],
    verduras: ["tomate"],
    etiquetas: ["Rápida", "Poco tiempo", "Salado", "Clásico"],
    preparacion_anticipada: false,
    para_llevar: true,
    congelable: false,
    conservacion: "Envolver en servilleta.",
    ingredientes: [
      {
        id: "i74",
        nombre: "pan integral",
        cantidad: 2,
        unidad: "rebanadas",
        categoria: "Panadería"
      },
      {
        id: "i75",
        nombre: "queso crema magro",
        cantidad: 1,
        unidad: "cda",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i76",
        nombre: "jamon",
        cantidad: 2,
        unidad: "fetas",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i77",
        nombre: "tomate",
        cantidad: 0.5,
        unidad: "unidades",
        categoria: "Verduras"
      }
    ],
    pasos: ["Untar queso crema en el pan.", "Colocar jamon y tomate.", "Tostar hasta dorar."],
    sustituciones: [
      {
        original: "jamon",
        reemplazo: "queso por salut",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🥪"
  },
  {
    id: "BM15",
    nombre: "Galletitas caseras integrales de banana, avena y coco",
    categoria: "Desayuno/Merienda",
    subcategoria: "Dulce",
    descripcion: "Galletitas facilísimas de solo 3 ingredientes base.",
    porciones: 4,
    prep_min: 10,
    total_min: 25,
    dificultad: "Muy fácil",
    frutas: ["banana"],
    verduras: [],
    etiquetas: ["Con frutas", "Vegetariana", "Vegano", "Sin Gluten", "Dulce", "Apta para niños", "Pocos ingredientes"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Frasco hermético 5 días.",
    ingredientes: [
      {
        id: "i78",
        nombre: "bananas",
        cantidad: 2,
        unidad: "unidades",
        categoria: "Almacén"
      },
      {
        id: "i79",
        nombre: "avena",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i80",
        nombre: "coco rallado",
        cantidad: 3,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i81",
        nombre: "chips de chocolate",
        cantidad: 2,
        unidad: "cdas",
        categoria: "Almacén"
      }
    ],
    pasos: ["Pisar bananas.", "Mezclar con avena, coco y chips.", "Formar discos y hornear a 180°C por 15 min."],
    sustituciones: [
      {
        original: "Chips de chocolate",
        reemplazo: "pasas de uva",
        nota: ""
      }
    ],
    recetas_relacionadas: ["BM01", "BM02"],
    emoji: "🍪"
  },
  // ==========================================
  // ALMUERZOS Y CENAS
  // ==========================================
  {
    id: "AC01",
    nombre: "Pastel de papas y calabaza liviano con carne magra",
    categoria: "Almuerzo/Cena",
    subcategoria: "Plato Principal",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i82",
        nombre: "carne magra",
        cantidad: 600,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i83",
        nombre: "papas",
        cantidad: 3,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i84",
        nombre: "calabaza",
        cantidad: 0.5,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i85",
        nombre: "cebolla",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i86",
        nombre: "morrón",
        cantidad: 0.5,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i87",
        nombre: "huevos",
        cantidad: 2,
        unidad: "unid",
        categoria: "Refrigerados"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC03"],
    emoji: "🥩"
  },
  {
    id: "AC02",
    nombre: "Tarta integral de zapallitos, cebolla y queso port salut",
    categoria: "Almuerzo/Cena",
    subcategoria: "Tarta",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i88",
        nombre: "tapa tarta integral",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i89",
        nombre: "zapallitos",
        cantidad: 4,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i90",
        nombre: "cebollas",
        cantidad: 2,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i91",
        nombre: "huevos",
        cantidad: 3,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i92",
        nombre: "queso port salut",
        cantidad: 150,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🥧"
  },
  {
    id: "AC03",
    nombre: "Milanesas de pollo al horno al orégano con puré de calabaza",
    categoria: "Almuerzo/Cena",
    subcategoria: "Plato Principal",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i93",
        nombre: "supremas de pollo",
        cantidad: 600,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i94",
        nombre: "huevos",
        cantidad: 2,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i95",
        nombre: "pan rallado integral",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Panadería"
      },
      {
        id: "i96",
        nombre: "calabaza",
        cantidad: 1,
        unidad: "kg",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01"],
    emoji: "🍗"
  },
  {
    id: "AC04",
    nombre: "Guiso de lentejas casero y nutritivo sin embutidos",
    categoria: "Almuerzo/Cena",
    subcategoria: "Guiso",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i97",
        nombre: "lentejas",
        cantidad: 400,
        unidad: "g",
        categoria: "Almacén"
      },
      {
        id: "i98",
        nombre: "cebolla",
        cantidad: 2,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i99",
        nombre: "morrón",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i100",
        nombre: "zanahoria",
        cantidad: 2,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i101",
        nombre: "zapallo",
        cantidad: 300,
        unidad: "g",
        categoria: "Verduras"
      },
      {
        id: "i102",
        nombre: "carne magra",
        cantidad: 300,
        unidad: "g",
        categoria: "Carnes y Pescados"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍲"
  },
  {
    id: "AC05",
    nombre: "Rollitos de merluza al horno rellenos de espinaca y queso",
    categoria: "Almuerzo/Cena",
    subcategoria: "Pescado",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i103",
        nombre: "merluza",
        cantidad: 8,
        unidad: "filetes",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i104",
        nombre: "espinaca",
        cantidad: 1,
        unidad: "atado",
        categoria: "Verduras"
      },
      {
        id: "i105",
        nombre: "cebolla",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i106",
        nombre: "queso crema",
        cantidad: 3,
        unidad: "cdas",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i107",
        nombre: "mozzarella",
        cantidad: 100,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🐟"
  },
  {
    id: "AC06",
    nombre: "Berenjenas rellenas de carne magra y verduras gratinadas",
    categoria: "Almuerzo/Cena",
    subcategoria: "Verduras Rellenas",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i108",
        nombre: "berenjenas",
        cantidad: 2,
        unidad: "unid",
        categoria: "Almacén"
      },
      {
        id: "i109",
        nombre: "carne picada magra",
        cantidad: 300,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i110",
        nombre: "cebolla",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i111",
        nombre: "tomate",
        cantidad: 2,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i112",
        nombre: "queso cremoso",
        cantidad: 100,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🥩"
  },
  {
    id: "AC07",
    nombre: "Wok de pollo, vegetales crujientes y arroz integral",
    categoria: "Almuerzo/Cena",
    subcategoria: "Salteado",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i113",
        nombre: "pollo",
        cantidad: 500,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i114",
        nombre: "zucchini",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i115",
        nombre: "zanahoria",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i116",
        nombre: "brócoli",
        cantidad: 1,
        unidad: "taza",
        categoria: "Verduras"
      },
      {
        id: "i117",
        nombre: "arroz integral",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Almacén"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍚"
  },
  {
    id: "AC08",
    nombre: "Tortilla de papas, espinaca y cebolla al horno",
    categoria: "Almuerzo/Cena",
    subcategoria: "Tortilla",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i118",
        nombre: "papas",
        cantidad: 3,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i119",
        nombre: "espinaca",
        cantidad: 1,
        unidad: "atado",
        categoria: "Verduras"
      },
      {
        id: "i120",
        nombre: "cebolla",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i121",
        nombre: "huevos",
        cantidad: 5,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i122",
        nombre: "oliva",
        cantidad: 1,
        unidad: "cda",
        categoria: "Almacén"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍳"
  },
  {
    id: "AC09",
    nombre: "Canelones integrales de choclo, calabaza y ricota",
    categoria: "Almuerzo/Cena",
    subcategoria: "Pastas",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i123",
        nombre: "panqueques integrales",
        cantidad: 8,
        unidad: "unid",
        categoria: "Almacén"
      },
      {
        id: "i124",
        nombre: "puré calabaza",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Verduras"
      },
      {
        id: "i125",
        nombre: "choclo",
        cantidad: 1,
        unidad: "lata",
        categoria: "Verduras"
      },
      {
        id: "i126",
        nombre: "ricota",
        cantidad: 200,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍽️"
  },
  {
    id: "AC10",
    nombre: "Pizzetas con base de zanahoria, queso y tomate",
    categoria: "Almuerzo/Cena",
    subcategoria: "Pizza Saludable",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i127",
        nombre: "zanahoria rallada",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Verduras"
      },
      {
        id: "i128",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i129",
        nombre: "avena",
        cantidad: 3,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i130",
        nombre: "mozzarella",
        cantidad: 150,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍕"
  },
  {
    id: "AC11",
    nombre: "Pollo al limón con hierbas y vegetales asados al horno",
    categoria: "Almuerzo/Cena",
    subcategoria: "Plato Principal",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i131",
        nombre: "pata muslo",
        cantidad: 4,
        unidad: "unid",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i132",
        nombre: "limón",
        cantidad: 2,
        unidad: "unid",
        categoria: "Frutas"
      },
      {
        id: "i133",
        nombre: "papas",
        cantidad: 2,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i134",
        nombre: "camotes",
        cantidad: 2,
        unidad: "unid",
        categoria: "Almacén"
      },
      {
        id: "i135",
        nombre: "cebolla roja",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍗"
  },
  {
    id: "AC12",
    nombre: "Cazuela de cerdo magro con batatas y manzanas",
    categoria: "Almuerzo/Cena",
    subcategoria: "Guiso",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i136",
        nombre: "solomillo de cerdo",
        cantidad: 500,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i137",
        nombre: "batatas",
        cantidad: 2,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i138",
        nombre: "manzana",
        cantidad: 1,
        unidad: "unid",
        categoria: "Frutas"
      },
      {
        id: "i139",
        nombre: "cebolla",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i140",
        nombre: "caldo",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Almacén"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍲"
  },
  {
    id: "AC13",
    nombre: "Milanesas de berenjena a la napolitana al horno",
    categoria: "Almuerzo/Cena",
    subcategoria: "Vegetariano",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i141",
        nombre: "berenjenas",
        cantidad: 2,
        unidad: "unid",
        categoria: "Almacén"
      },
      {
        id: "i142",
        nombre: "huevos",
        cantidad: 2,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i143",
        nombre: "pan rallado integral",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Panadería"
      },
      {
        id: "i144",
        nombre: "mozzarella",
        cantidad: 150,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍗"
  },
  {
    id: "AC14",
    nombre: "Hamburguesas caseras de lentejas y arroz yamaní",
    categoria: "Almuerzo/Cena",
    subcategoria: "Hamburguesas Veggie",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Vegano", "Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i145",
        nombre: "lentejas cocidas",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i146",
        nombre: "arroz yamaní",
        cantidad: 1,
        unidad: "taza",
        categoria: "Almacén"
      },
      {
        id: "i147",
        nombre: "cebolla",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i148",
        nombre: "zanahoria",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍚"
  },
  {
    id: "AC15",
    nombre: "Alfajores de calabaza rellenos de espinaca y queso",
    categoria: "Almuerzo/Cena",
    subcategoria: "Vegetariano",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i149",
        nombre: "puré calabaza",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Verduras"
      },
      {
        id: "i150",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i151",
        nombre: "avena",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i152",
        nombre: "espinaca",
        cantidad: 1,
        unidad: "taza",
        categoria: "Verduras"
      },
      {
        id: "i153",
        nombre: "queso",
        cantidad: 100,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍽️"
  },
  {
    id: "AC16",
    nombre: "Pescado a la provenzal con papas al vapor y ensalada",
    categoria: "Almuerzo/Cena",
    subcategoria: "Pescado",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i154",
        nombre: "filete de merluza",
        cantidad: 600,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i155",
        nombre: "ajo y perejil",
        cantidad: 2,
        unidad: "cdas",
        categoria: "Verduras"
      },
      {
        id: "i156",
        nombre: "papas",
        cantidad: 3,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i157",
        nombre: "tomate y lechuga",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🥗"
  },
  {
    id: "AC17",
    nombre: "Sopa crema casera de zapallo, zanahoria y jengibre",
    categoria: "Almuerzo/Cena",
    subcategoria: "Sopa",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i158",
        nombre: "zapallo anco",
        cantidad: 1,
        unidad: "kg",
        categoria: "Verduras"
      },
      {
        id: "i159",
        nombre: "zanahorias",
        cantidad: 3,
        unidad: "unid",
        categoria: "Almacén"
      },
      {
        id: "i160",
        nombre: "jengibre",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Almacén"
      },
      {
        id: "i161",
        nombre: "cebolla",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i162",
        nombre: "queso crema",
        cantidad: 2,
        unidad: "cdas",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍲"
  },
  {
    id: "AC18",
    nombre: "Tarta integral de choclo, cebolla y queso cremoso",
    categoria: "Almuerzo/Cena",
    subcategoria: "Tarta",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i163",
        nombre: "tapa tarta integral",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i164",
        nombre: "choclo desgranado",
        cantidad: 2,
        unidad: "latas",
        categoria: "Verduras"
      },
      {
        id: "i165",
        nombre: "cebolla",
        cantidad: 2,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i166",
        nombre: "huevos",
        cantidad: 3,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i167",
        nombre: "queso",
        cantidad: 150,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🥧"
  },
  {
    id: "AC19",
    nombre: "Bifes de cuadril a la plancha con salteado de vegetales",
    categoria: "Almuerzo/Cena",
    subcategoria: "Plato Principal",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i168",
        nombre: "bifes de cuadril",
        cantidad: 600,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i169",
        nombre: "zuchinnis",
        cantidad: 2,
        unidad: "unid",
        categoria: "Almacén"
      },
      {
        id: "i170",
        nombre: "morrones",
        cantidad: 2,
        unidad: "unid",
        categoria: "Almacén"
      },
      {
        id: "i171",
        nombre: "cebolla",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i172",
        nombre: "oliva",
        cantidad: 1,
        unidad: "cda",
        categoria: "Almacén"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍽️"
  },
  {
    id: "AC20",
    nombre: "Pechugas de pollo rellenas de queso y pimientos con ensalada",
    categoria: "Almuerzo/Cena",
    subcategoria: "Plato Principal",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i173",
        nombre: "pechugas de pollo",
        cantidad: 4,
        unidad: "unid",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i174",
        nombre: "queso por salut",
        cantidad: 100,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i175",
        nombre: "morrón asado",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i176",
        nombre: "ensalada verde",
        cantidad: 1,
        unidad: "a gusto",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🥗"
  },
  {
    id: "AC21",
    nombre: "Zapallitos rellenos de arroz integral y pollo desmenuzado",
    categoria: "Almuerzo/Cena",
    subcategoria: "Verduras Rellenas",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i177",
        nombre: "zapallitos",
        cantidad: 4,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i178",
        nombre: "arroz integral",
        cantidad: 1,
        unidad: "taza",
        categoria: "Almacén"
      },
      {
        id: "i179",
        nombre: "pollo cocido",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i180",
        nombre: "queso",
        cantidad: 100,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍚"
  },
  {
    id: "AC22",
    nombre: "Ensalada tibia de quínoa, vegetales asados y pollo",
    categoria: "Almuerzo/Cena",
    subcategoria: "Ensalada Completa",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i181",
        nombre: "quínoa cocida",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i182",
        nombre: "pollo en tiras",
        cantidad: 300,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i183",
        nombre: "calabaza asada",
        cantidad: 1,
        unidad: "taza",
        categoria: "Verduras"
      },
      {
        id: "i184",
        nombre: "espinaca",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🥗"
  },
  {
    id: "AC23",
    nombre: "Ñoquis caseros de calabaza y espelta con salsa fileto",
    categoria: "Almuerzo/Cena",
    subcategoria: "Pastas",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i185",
        nombre: "puré de calabaza",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Verduras"
      },
      {
        id: "i186",
        nombre: "harina de espelta",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i187",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i188",
        nombre: "salsa tomate",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍝"
  },
  {
    id: "AC24",
    nombre: "Guiso de porotos negros y vegetales a la criolla",
    categoria: "Almuerzo/Cena",
    subcategoria: "Guiso",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Vegano", "Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i189",
        nombre: "porotos negros",
        cantidad: 300,
        unidad: "g",
        categoria: "Almacén"
      },
      {
        id: "i190",
        nombre: "cebolla",
        cantidad: 2,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i191",
        nombre: "pimiento",
        cantidad: 1,
        unidad: "unid",
        categoria: "Almacén"
      },
      {
        id: "i192",
        nombre: "zanahoria",
        cantidad: 2,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i193",
        nombre: "tomate",
        cantidad: 2,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i194",
        nombre: "zapallo",
        cantidad: 200,
        unidad: "g",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍲"
  },
  {
    id: "AC25",
    nombre: "Albóndigas magras de res al tuco con puré mixto",
    categoria: "Almuerzo/Cena",
    subcategoria: "Plato Principal",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i195",
        nombre: "carne picada magra",
        cantidad: 500,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i196",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i197",
        nombre: "avena",
        cantidad: 3,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i198",
        nombre: "salsa tomate",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Verduras"
      },
      {
        id: "i199",
        nombre: "papas y calabaza",
        cantidad: 800,
        unidad: "g",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍝"
  },
  {
    id: "AC27",
    nombre: "Risotto integral de hongos y cebolla de verdeo",
    categoria: "Almuerzo/Cena",
    subcategoria: "Arroces",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i200",
        nombre: "arroz integral",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i201",
        nombre: "hongos portobello",
        cantidad: 200,
        unidad: "g",
        categoria: "Verduras"
      },
      {
        id: "i202",
        nombre: "verdeo",
        cantidad: 2,
        unidad: "ramas",
        categoria: "Almacén"
      },
      {
        id: "i203",
        nombre: "caldo",
        cantidad: 4,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i204",
        nombre: "queso",
        cantidad: 50,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍚"
  },
  {
    id: "AC28",
    nombre: "Pastel de choclo y carne magra al horno",
    categoria: "Almuerzo/Cena",
    subcategoria: "Plato Principal",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i205",
        nombre: "choclo licuado",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Verduras"
      },
      {
        id: "i206",
        nombre: "carne picada magra",
        cantidad: 400,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i207",
        nombre: "cebolla",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i208",
        nombre: "huevo duro",
        cantidad: 2,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i209",
        nombre: "aceitunas",
        cantidad: 6,
        unidad: "unid",
        categoria: "Almacén"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🥩"
  },
  {
    id: "AC29",
    nombre: "Revuelto gramajo saludable (huevo, arvejas y papas al horno)",
    categoria: "Almuerzo/Cena",
    subcategoria: "Plato Principal",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i210",
        nombre: "papas al horno en bastones",
        cantidad: 3,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i211",
        nombre: "huevos",
        cantidad: 4,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i212",
        nombre: "arvejas",
        cantidad: 1,
        unidad: "taza",
        categoria: "Almacén"
      },
      {
        id: "i213",
        nombre: "pavo o jamón magro",
        cantidad: 100,
        unidad: "g",
        categoria: "Carnes y Pescados"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🍳"
  },
  {
    id: "AC30",
    nombre: "Crepes integrales de acelga, ricota y salsa blanca liviana",
    categoria: "Almuerzo/Cena",
    subcategoria: "Pastas",
    descripcion: "Plato familiar, saludable, delicioso y fácil de preparar con ingredientes accesibles.",
    porciones: 4,
    prep_min: 15,
    total_min: 35,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Familiar", "Nutritivo", "Fácil"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 3-4 días.",
    ingredientes: [
      {
        id: "i214",
        nombre: "crepes integrales",
        cantidad: 8,
        unidad: "unid",
        categoria: "Almacén"
      },
      {
        id: "i215",
        nombre: "acelga",
        cantidad: 1.5,
        unidad: "atados",
        categoria: "Verduras"
      },
      {
        id: "i216",
        nombre: "ricota",
        cantidad: 200,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i217",
        nombre: "salsa blanca liviana",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Almacén"
      }
    ],
    pasos: ["Preparar y cortar los ingredientes vegetales y proteínas.", "Cocinar a la plancha, horno o cacerola según el plato hasta lograr el punto justo.", "Servir acompañado de guarnición fresca o al vapor."],
    sustituciones: [
      {
        original: "Ingrediente principal",
        reemplazo: "opción vegetal o magra equivalente",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC01", "AC03"],
    emoji: "🥞"
  },
  // ==========================================
  // VIANDAS ESCOLARES
  // ==========================================
  {
    id: "VE01",
    nombre: "Wrap integral de pollo, queso, choclo y zanahoria",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Wrap práctico, frío y crujiente que les encanta a los chicos.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i218",
        nombre: "pollo cocido",
        cantidad: 1,
        unidad: "taza",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i219",
        nombre: "tortilla integral",
        cantidad: 2,
        unidad: "unidades",
        categoria: "Panadería"
      },
      {
        id: "i220",
        nombre: "queso",
        cantidad: 50,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i221",
        nombre: "choclo",
        cantidad: 3,
        unidad: "cdas",
        categoria: "Verduras"
      },
      {
        id: "i222",
        nombre: "zanahoria",
        cantidad: 0.5,
        unidad: "unid",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE04"],
    emoji: "🍗"
  },
  {
    id: "VE02",
    nombre: "Tartitas individuales de choclo, queso y calabaza",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Porciones individuales ideales para llevar sin que se desarmen.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i223",
        nombre: "tapas de empanada integrales",
        cantidad: 6,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i224",
        nombre: "choclo",
        cantidad: 1,
        unidad: "lata",
        categoria: "Verduras"
      },
      {
        id: "i225",
        nombre: "puré calabaza",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Verduras"
      },
      {
        id: "i226",
        nombre: "queso",
        cantidad: 100,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🍽️"
  },
  {
    id: "VE03",
    nombre: "Croquetas horneadas de arroz, espinaca y queso",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Bolitas doradas crujientes perfectas para comer con la mano.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i227",
        nombre: "arroz cocido",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i228",
        nombre: "espinaca",
        cantidad: 1,
        unidad: "taza",
        categoria: "Verduras"
      },
      {
        id: "i229",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i230",
        nombre: "queso rallado",
        cantidad: 3,
        unidad: "cdas",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i231",
        nombre: "pan rallado",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Panadería"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🍚"
  },
  {
    id: "VE04",
    nombre: "Nuggets caseros de pollo y avena al horno",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Versión saludable del clásico infantil sin conservantes ni fritura.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Sin Gluten", "Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i232",
        nombre: "pechuga de pollo procesada",
        cantidad: 400,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i233",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i234",
        nombre: "avena fina",
        cantidad: 1,
        unidad: "taza",
        categoria: "Almacén"
      },
      {
        id: "i235",
        nombre: "orégano",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Especias"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01"],
    emoji: "🍗"
  },
  {
    id: "VE05",
    nombre: "Empanadas integrales de humita y queso",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Sabor dulce y cremoso en formato súper práctico.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i236",
        nombre: "tapas empanadas integrales",
        cantidad: 8,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i237",
        nombre: "choclo",
        cantidad: 1,
        unidad: "lata",
        categoria: "Verduras"
      },
      {
        id: "i238",
        nombre: "salsa blanca liviana",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i239",
        nombre: "queso",
        cantidad: 100,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🥟"
  },
  {
    id: "VE06",
    nombre: "Muffins salados de queso, zuchinni y zanahoria",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Bizcochitos salados llenos de verdura \"invisible\" esponjosos.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i240",
        nombre: "harina leudante",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i241",
        nombre: "zuchinni",
        cantidad: 1,
        unidad: "unid",
        categoria: "Almacén"
      },
      {
        id: "i242",
        nombre: "zanahoria",
        cantidad: 1,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i243",
        nombre: "queso",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i244",
        nombre: "huevos",
        cantidad: 2,
        unidad: "unid",
        categoria: "Refrigerados"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🧁"
  },
  {
    id: "VE07",
    nombre: "Milanesitas de peceto al horno con bastones de zanahoria",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Corte magro tierno cortado pequeño para comer fácil.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i245",
        nombre: "peceto",
        cantidad: 400,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i246",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i247",
        nombre: "pan rallado integral",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Panadería"
      },
      {
        id: "i248",
        nombre: "zanahoria bastones",
        cantidad: 2,
        unidad: "unid",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🍗"
  },
  {
    id: "VE08",
    nombre: "Sandwich en pan de pita integral de jamon, queso y tomate",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Pan suave que no se rompe al transportar con relleno liviano.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i249",
        nombre: "pan pita integral",
        cantidad: 2,
        unidad: "unid",
        categoria: "Panadería"
      },
      {
        id: "i250",
        nombre: "jamon",
        cantidad: 4,
        unidad: "fetas",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i251",
        nombre: "queso por salut",
        cantidad: 4,
        unidad: "fetas",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i252",
        nombre: "tomate",
        cantidad: 0.5,
        unidad: "unid",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🥪"
  },
  {
    id: "VE09",
    nombre: "Pizzetas integrales de calabaza y muzzarella",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Masa suave de calabaza horneada que se come fría o caliente.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i253",
        nombre: "harina integral",
        cantidad: 1,
        unidad: "taza",
        categoria: "Almacén"
      },
      {
        id: "i254",
        nombre: "puré calabaza",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Verduras"
      },
      {
        id: "i255",
        nombre: "levadura",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Almacén"
      },
      {
        id: "i256",
        nombre: "mozzarella",
        cantidad: 100,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🍕"
  },
  {
    id: "VE10",
    nombre: "Milanesitas de queso mozzarella empanadas con avena",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Bocado con queso derretido por dentro y rebozado saludable.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Sin Gluten", "Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i257",
        nombre: "mozzarella en barras",
        cantidad: 200,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i258",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i259",
        nombre: "avena fina",
        cantidad: 1,
        unidad: "taza",
        categoria: "Almacén"
      },
      {
        id: "i260",
        nombre: "orégano",
        cantidad: 1,
        unidad: "cdta",
        categoria: "Especias"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🥟"
  },
  {
    id: "VE11",
    nombre: "Tortillitas individuales de fideos y verdura",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Aprovechamiento perfecto de fideos del día anterior.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i261",
        nombre: "fideos cocidos",
        cantidad: 2,
        unidad: "tazas",
        categoria: "Almacén"
      },
      {
        id: "i262",
        nombre: "zanahoria",
        cantidad: 0.5,
        unidad: "unid",
        categoria: "Verduras"
      },
      {
        id: "i263",
        nombre: "arvejas",
        cantidad: 3,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i264",
        nombre: "huevos",
        cantidad: 2,
        unidad: "unid",
        categoria: "Refrigerados"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🍝"
  },
  {
    id: "VE12",
    nombre: "Bocaditos horneados de acelga, ricota y queso",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Buñuelos saludables sin fritura fáciles de transportar.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vegetariana", "Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i265",
        nombre: "acelga picada",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Verduras"
      },
      {
        id: "i266",
        nombre: "ricota",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i267",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i268",
        nombre: "harina leudante",
        cantidad: 4,
        unidad: "cdas",
        categoria: "Almacén"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🧆"
  },
  {
    id: "VE13",
    nombre: "Empanadas integrales de pollo y vegetales",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Relleno jugoso y sabroso dentro de una masa integral.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i269",
        nombre: "tapas empanada integrales",
        cantidad: 8,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i270",
        nombre: "pollo desmenuzado",
        cantidad: 1.5,
        unidad: "tazas",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i271",
        nombre: "cebolla y morrón",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🥟"
  },
  {
    id: "VE14",
    nombre: "Rolls integrales de jamón magro, queso y espinaca",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Rollitos vistosos y coloridos que entran en cualquier tupper.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i272",
        nombre: "panqueques integrales",
        cantidad: 4,
        unidad: "unid",
        categoria: "Almacén"
      },
      {
        id: "i273",
        nombre: "jamón magro",
        cantidad: 4,
        unidad: "fetas",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i274",
        nombre: "queso por salut",
        cantidad: 100,
        unidad: "g",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i275",
        nombre: "espinaca",
        cantidad: 0.5,
        unidad: "tazas",
        categoria: "Verduras"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🌯"
  },
  {
    id: "VE15",
    nombre: "Hamburguesitas de merluza y papa al horno",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Suaves medallones para incorporar pescado de forma amigable.",
    porciones: 2,
    prep_min: 15,
    total_min: 25,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["variadas"],
    etiquetas: ["Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: true,
    conservacion: "Enviar en lonchera térmica con refrigerante. Dura 3 días en heladera.",
    ingredientes: [
      {
        id: "i276",
        nombre: "merluza procesada",
        cantidad: 300,
        unidad: "g",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i277",
        nombre: "puré de papa",
        cantidad: 1,
        unidad: "taza",
        categoria: "Verduras"
      },
      {
        id: "i278",
        nombre: "huevo",
        cantidad: 1,
        unidad: "unid",
        categoria: "Refrigerados"
      },
      {
        id: "i279",
        nombre: "pan rallado",
        cantidad: 4,
        unidad: "cdas",
        categoria: "Panadería"
      }
    ],
    pasos: ["Preparar los ingredientes y realizar la mezcla o ensamblado.", "Cocinar al horno o plancha hasta lograr la firmeza adecuada para manipular.", "Dejar enfriar por completo antes de guardar en el tupper."],
    sustituciones: [
      {
        original: "Queso",
        reemplazo: "versión sin lactosa",
        nota: ""
      },
      {
        original: "Harina integral",
        reemplazo: "harina de avena",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01", "VE04"],
    emoji: "🐟"
  },
  // ==========================================
  // ALMUERZOS Y CENAS
  // ==========================================
  {
    id: "AC31",
    nombre: "Ensalada de atún con garbanzos, huevo y vegetales",
    categoria: "Almuerzo/Cena",
    subcategoria: "Plato Principal",
    descripcion: "Ensalada completa y rica en proteínas, ideal para el mediodía sin encender el horno.",
    porciones: 2,
    prep_min: 15,
    total_min: 15,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["tomate", "pepino"],
    etiquetas: ["Rápida", "Poco tiempo", "Sin Gluten", "Proteico", "Fresca"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: false,
    conservacion: "Conservar refrigerado en recipiente hermético hasta 2 días.",
    ingredientes: [
      {
        id: "i280",
        nombre: "atún en lata al agua",
        cantidad: 2,
        unidad: "latas",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i281",
        nombre: "garbanzos cocidos",
        cantidad: 1,
        unidad: "taza",
        categoria: "Almacén"
      },
      {
        id: "i282",
        nombre: "huevo duro",
        cantidad: 2,
        unidad: "unidades",
        categoria: "Refrigerados"
      },
      {
        id: "i283",
        nombre: "tomate",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Verduras"
      },
      {
        id: "i284",
        nombre: "pepino",
        cantidad: 0.5,
        unidad: "unidad",
        categoria: "Verduras"
      },
      {
        id: "i285",
        nombre: "cebolla morada",
        cantidad: 0.25,
        unidad: "unidad",
        categoria: "Verduras"
      },
      {
        id: "i286",
        nombre: "aceite de oliva",
        cantidad: 2,
        unidad: "cdas",
        categoria: "Almacén"
      },
      {
        id: "i287",
        nombre: "jugo de limón",
        cantidad: 1,
        unidad: "cda",
        categoria: "Frutas"
      }
    ],
    pasos: ["Escurrir el atún y desmenuzarlo con un tenedor.", "Cortar el tomate, el pepino y la cebolla morada en cubos pequeños.", "Mezclar el atún, los garbanzos, los vegetales y el huevo duro en cubos.", "Aliñar con aceite de oliva, jugo de limón, sal y pimienta antes de servir."],
    sustituciones: [
      {
        original: "Garbanzos",
        reemplazo: "porotos o lentejas",
        nota: ""
      },
      {
        original: "Huevo duro",
        reemplazo: "más garbanzos",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC32"],
    emoji: "🍳"
  },
  {
    id: "AC32",
    nombre: "Wrap integral de atún, palta y tomate",
    categoria: "Almuerzo/Cena",
    subcategoria: "Plato Principal",
    descripcion: "Wrap fresco y práctico, listo en minutos y perfecto para el mediodía sin cocción.",
    porciones: 2,
    prep_min: 10,
    total_min: 10,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["tomate", "lechuga"],
    etiquetas: ["Sin cocción", "Rápida", "Poco tiempo", "Práctico"],
    preparacion_anticipada: false,
    para_llevar: true,
    congelable: false,
    conservacion: "Consumir el mismo día, preferentemente recién armado.",
    ingredientes: [
      {
        id: "i288",
        nombre: "atún en lata al agua",
        cantidad: 2,
        unidad: "latas",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i289",
        nombre: "tortilla integral",
        cantidad: 2,
        unidad: "unidades",
        categoria: "Panadería"
      },
      {
        id: "i290",
        nombre: "palta",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Verduras"
      },
      {
        id: "i291",
        nombre: "tomate",
        cantidad: 1,
        unidad: "unidad",
        categoria: "Verduras"
      },
      {
        id: "i292",
        nombre: "lechuga",
        cantidad: 4,
        unidad: "hojas",
        categoria: "Verduras"
      },
      {
        id: "i293",
        nombre: "jugo de limón",
        cantidad: 1,
        unidad: "cda",
        categoria: "Frutas"
      },
      {
        id: "i294",
        nombre: "queso crema",
        cantidad: 2,
        unidad: "cdas",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Escurrir el atún y mezclarlo con el jugo de limón.", "Pisar la palta y untarla sobre la tortilla junto con el queso crema.", "Distribuir el atún, el tomate en rodajas y la lechuga sobre la tortilla.", "Enrollar bien firme y cortar por la mitad para servir."],
    sustituciones: [
      {
        original: "Queso crema",
        reemplazo: "hummus",
        nota: ""
      },
      {
        original: "Tortilla integral",
        reemplazo: "hoja de lechuga grande",
        nota: ""
      }
    ],
    recetas_relacionadas: ["AC31"],
    emoji: "🥑"
  },
  // ==========================================
  // VIANDAS ESCOLARES
  // ==========================================
  {
    id: "VE16",
    nombre: "Sándwich de atún y queso para vianda",
    categoria: "Viandas",
    subcategoria: "Principales Vianda",
    descripcion: "Sándwich clásico y nutritivo, fácil de armar la noche anterior para la vianda escolar.",
    porciones: 2,
    prep_min: 10,
    total_min: 10,
    dificultad: "Fácil",
    frutas: [],
    verduras: ["tomate"],
    etiquetas: ["Rápida", "Poco tiempo", "Vianda", "Escolar", "Apta para niños", "Para llevar", "Práctico"],
    preparacion_anticipada: true,
    para_llevar: true,
    congelable: false,
    conservacion: "Envolver en papel film y enviar en lonchera térmica. Consumir el mismo día.",
    ingredientes: [
      {
        id: "i295",
        nombre: "atún en lata al agua",
        cantidad: 1,
        unidad: "lata",
        categoria: "Carnes y Pescados"
      },
      {
        id: "i296",
        nombre: "pan lactal integral",
        cantidad: 4,
        unidad: "rebanadas",
        categoria: "Panadería"
      },
      {
        id: "i297",
        nombre: "queso",
        cantidad: 2,
        unidad: "fetas",
        categoria: "Lácteos y Bebidas"
      },
      {
        id: "i298",
        nombre: "tomate",
        cantidad: 0.5,
        unidad: "unidad",
        categoria: "Verduras"
      },
      {
        id: "i299",
        nombre: "mayonesa",
        cantidad: 1,
        unidad: "cda",
        categoria: "Lácteos y Bebidas"
      }
    ],
    pasos: ["Escurrir el atún y mezclarlo con la mayonesa.", "Untar dos rebanadas de pan con la mezcla de atún.", "Agregar el queso y el tomate en rodajas finas.", "Cerrar el sándwich con las rebanadas restantes y cortar por la mitad."],
    sustituciones: [
      {
        original: "Mayonesa",
        reemplazo: "palta pisada",
        nota: ""
      },
      {
        original: "Queso",
        reemplazo: "queso sin lactosa",
        nota: ""
      }
    ],
    recetas_relacionadas: ["VE01"],
    emoji: "🐟"
  },
];

// Helper para obtener todas las recetas
export const getAllRecipes = () => EXTENDED_RECIPES;

// Helper para filtrar por ingrediente
export const filterRecipesByIngredients = (availableIngredients = []) => {
  if (!availableIngredients.length) return [];

  const cleanInput = availableIngredients.map(i => i.toLowerCase().trim());

  return EXTENDED_RECIPES.map(recipe => {
    const recipeIngredientsNames = recipe.ingredientes.map(ing => ing.nombre.toLowerCase());

    // Contar cuántos de los ingredientes ingresados están en la receta
    let matchCount = 0;
    cleanInput.forEach(ingInput => {
      if (recipeIngredientsNames.some(ingName => ingName.includes(ingInput) || ingInput.includes(ingName))) {
        matchCount++;
      }
    });

    const totalIngs = recipe.ingredientes.length;
    const matchPercentage = Math.round((matchCount / Math.max(cleanInput.length, 1)) * 100);
    const missingIngredients = recipe.ingredientes.filter(ing =>
      !cleanInput.some(ingInput => ing.nombre.toLowerCase().includes(ingInput))
    );

    return {
      recipe,
      matchCount,
      matchPercentage,
      missingCount: missingIngredients.length,
      missingIngredients
    };
  })
  .filter(res => res.matchCount > 0)
  .sort((a, b) => b.matchPercentage - a.matchPercentage || a.missingCount - b.missingCount);
};
