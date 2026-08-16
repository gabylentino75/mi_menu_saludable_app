-- Esquema de Base de Datos PostgreSQL / Supabase para PWA "Comer Saludable"

-- 1. Tabla de Usuarios / Perfiles
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    nombre TEXT NOT NULL,
    preferencias JSONB DEFAULT '{"personas_cocina": 2, "objetivo": "Ahorrar tiempo y comer balanceado"}'::jsonb,
    restricciones TEXT[] DEFAULT '{}',
    ingredientes_despensa TEXT[] DEFAULT '{}',
    favoritos TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabla de Recetas (Catálogo Base)
CREATE TABLE IF NOT EXISTS public.recipes (
    id TEXT PRIMARY KEY, -- ej: BM01, BM02, AC01, VI01
    nombre TEXT NOT NULL,
    categoria TEXT NOT NULL, -- Desayuno/Merienda, Almuerzo/Cena, Viandas
    subcategoria TEXT,
    descripcion TEXT,
    porciones INTEGER DEFAULT 2,
    prep_min INTEGER NOT NULL,
    total_min INTEGER NOT NULL,
    dificultad TEXT NOT NULL DEFAULT 'Fácil', -- Fácil, Media, Avanzada
    frutas TEXT[] DEFAULT '{}',
    verduras TEXT[] DEFAULT '{}',
    etiquetas TEXT[] DEFAULT '{}', -- Sin cocción, Con frutas, Rápida, Poco tiempo, Vegetariana, Sin Gluten
    preparacion_anticipada BOOLEAN DEFAULT false,
    para_llevar BOOLEAN DEFAULT true,
    congelable BOOLEAN DEFAULT false,
    conservacion TEXT,
    ingredientes JSONB NOT NULL, -- Lista estructurada: [{ "id": "1", "nombre": "Avena", "cantidad": 100, "unidad": "g", "categoria": "Almacén" }]
    sustituciones JSONB DEFAULT '[]'::jsonb, -- [{ "original": "Leche", "reemplazo": "Bebida vegetal de almendras", "nota": "Misma proporción" }]
    recetas_relacionadas TEXT[] DEFAULT '{}',
    imagen_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabla de Lista de Compras
CREATE TABLE IF NOT EXISTS public.shopping_lists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    items JSONB NOT NULL DEFAULT '[]'::jsonb, -- [{ "id": "item1", "nombre": "Tomate", "cantidad": 5, "unidad": "unid", "categoria": "Verduras", "comprado": false }]
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Tabla de Menú / Planes Semanales
CREATE TABLE IF NOT EXISTS public.weekly_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    semana_inicio DATE NOT NULL,
    menu JSONB NOT NULL DEFAULT '{}'::jsonb, -- { "lunes": { "almuerzo": "AC01", "cena": "AC02" }, ... }
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shopping_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weekly_plans ENABLE ROW LEVEL SECURITY;

-- Políticas públicas de lectura para recetas
CREATE POLICY "Permitir lectura pública de recetas" ON public.recipes FOR SELECT USING (true);
