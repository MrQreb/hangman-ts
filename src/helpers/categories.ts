
export function setCategories( category: string ): string[] {
    
    switch ( category ) {
        case 'animals':
            return animals;
        case 'fruits':
            return fruits;
        case 'jobs':
            return jobs;
        default:
            return [];
    }
}

export let animals: string[] = [
    'perro',
    'gato',
    'pájaro',
    'pez',
    'elefante',
    'león',
    'tigre',
    'jirafa',
    'mono',
    'oso',
    'conejo',
    'ratón',
    'serpiente',
    'caballo',
    'vaca',
    'oveja',
    'cerdo',
    'pollo',
    'pato',
    'pingüino',
    'tortuga',
    'cocodrilo',
    'rinoceronte',
    'hipopótamo',
    'camello'
];

export let fruits: string[] = [
    'manzana',
    'plátano',
    'naranja',
    'uva',
    'fresa',
    'mango',
    'piña',
    'sandía',
    'melón',
    'limón',
    'cereza',
    'kiwi',
    'pera',
    'melocotón',
    'albaricoque',
    'ciruela',
    'mora',
    'frambuesa',
    'arándano',
    'mandarina',
    'pomelo',
    'lima',
    'granada',
    'higo',
    'guayaba'
];

export let jobs: string[] = [
    'médico',
    'profesor',
    'ingeniero',
    'piloto',
    'abogado',
    'arquitecto',
    'programador',
    'diseñador',
    'enfermero',
    'veterinario',
    'chef',
    'mecánico',
    'electricista',
    'plomero',
    'contador',
    'farmacéutico',
    'periodista',
    'actor',
    'cantante',
    'bombero',
    'policía',
    'astronauta',
    'fotografo',
    'psicólogo',
    'economista'
];