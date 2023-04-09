import { prototype } from 'events';
export type ID = number 
export type FileID = number 
export type Extra = "parent" | "permanent" | "single" | "edit" // лишние для бэка ключи 
export type Mutated = "data" | "type" | "permanent" | "parent" // значения, которые модифицируются отдельными видами атрибутов 

export interface GeneralAttribute {
    ID: ID,
    CreatedAt: string,
    DeletedAt?: string,
    UpdatedAt: string,
    name: string,
    type?: number, 
    data : any,
    edit: boolean,          // редактируется ли сейчас аттрибут 
    permanent: boolean,    // неудаляемый
    parent: "task" 
            | "building" 
            | "any"     // может быть присоединен только к чему-то одному или ко всему (undefined)
    single?: boolean        // является ли единственным в данном контексте
}

export interface BuildingName extends GeneralAttribute {
    data: string,
    type: -1,
    permanent: true,
    parent: "building"
}
export interface Description extends GeneralAttribute {
    data: string,
    type: -2,
    permanent: true,
    parent: "building"
}
export interface Owner extends GeneralAttribute {
    data: string,
    type: -3,
    permanent: true, 
    parent: "building"
}
export interface Address extends GeneralAttribute {
    data: string,
    type: -4,
    permanent: true,
    parent: "building"
}
// Округ
export interface District extends GeneralAttribute {
    data: string,
    type: -5,
    permanent: true,
    parent: "building"
}
// Координаты. Например отобразить дом на карте
export interface Location extends GeneralAttribute {
    data: Array<number>,
    type: -6,
    permanent: true,
    parent: "any" 
}

export interface Quality extends GeneralAttribute {
    data: number,
    type: -7,
    permanent: true,
    parent: "building"
}
export interface TaskName extends GeneralAttribute {
    data: string,
    type: -8,
    permanent: true,
    parent: "task"
}

// Комментарии к задаче (мини-чат)
export interface Comments extends GeneralAttribute {
    data: Array<{person: ID, text: string}>,
    type: -9,
    permanent: true,
    parent: "task"
}
export interface Image extends GeneralAttribute {
    data: FileID,
    permanent: false,
    type: 1
    parent: "any" 
}
export interface File extends GeneralAttribute {
    data: FileID,
    permanent: false,
    type: 2,
    parent: "any" 
}
export interface Video extends GeneralAttribute {
    data: FileID,
    permanent: false,
    type: 3,
    parent: "any"
}
export interface Map extends GeneralAttribute {
    data: Array<number>,
    type: 7,
    permanent: false,
    parent: "any"
}
// Планируемые типы: 
// Person - ссылка на человека 


export type prototypesTypes = {
    generalAttribute: Pick<GeneralAttribute, Mutated>
    buildingName: Pick<BuildingName, Mutated>
    description: Pick<Description, Mutated>
    owner: Pick<Owner, Mutated>
    address: Pick<Address, Mutated>
    district: Pick<District, Mutated>
    location: Pick<Location, Mutated>
    quality: Pick<Quality, Mutated>
    image: Pick<Image, Mutated>
    file: Pick<File, Mutated>
    video: Pick<Video, Mutated>
    taskName: Pick<TaskName, Mutated>
    comments: Pick<Comments, Mutated>
    map: Pick<Map, Mutated>
}
const proto : prototypesTypes = {
    generalAttribute: {
        data: null,
        type: 0,
        permanent: false,
        parent: "any"
    },
    buildingName: {
        data: "Название дома",
        type: -1,
        permanent: true,
        parent: "building"
    },
    description: {
        data: "Описание",
        type: -2,
        permanent: true,
        parent: "building"
    },
    owner: {
        data: "Обладатель",
        type: -3,
        permanent: true,
        parent: "building"
    },
    address: {
        data: "Адрес",
        type: -4,
        permanent: true,
        parent: "building"
    },
    district: {
        data: "Район",
        type: -5,
        permanent: true,
        parent: "building"
    },
    location: {
        data: [55.75, 37.61], // Координаты Москвы
        type: -6,
        permanent: true,
        parent: "any"
    },
    quality: {
        data: 100,
        type: -7,
        permanent: true,
        parent: "building"
    },
    taskName: {
        data: "Название задачи",
        type: -8,
        permanent: true,
        parent: "task"
    },
    image: {
        data: 0,
        type: 1,
        permanent: false,
        parent: "any"
    },
    file: {
        data: 0,
        type: 2,
        permanent: false,
        parent: "any"
    },
    video: {
        data: 0,
        type: 3,
        permanent: false,
        parent: "any"
    },
    comments: {
        data: [],
        type: -9,
        permanent: true,
        parent: "task"
    },
    map: {
        data: [55.75, 37.61], // Координаты Москвы
        type: 7,
        permanent: false,
        parent: "any"
    }
}

const base : (name: string, proto: Pick<GeneralAttribute, Mutated>)=>GeneralAttribute = (name, proto) => ({
    ID: 0,
    CreatedAt: new Date().toString(),
    DeletedAt: undefined,
    UpdatedAt: new Date().toString(),
    name: name,
    edit: false,
    ...proto
})

export default proto;