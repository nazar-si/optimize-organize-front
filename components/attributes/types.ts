export type ID = number 
export type FileID = number 
export type Extra = "parent" | "permanent" | "single" // лишние для бэка ключи 
export interface GeneralAttribute {
    ID: ID,
    CreatedAt: string,
    DeletedAt: string,
    UpdatedAt: string,
    name: string,
    type?: number, 
    data : any,
    permanent?: boolean,    // неудаляемый
    parent?: "task" 
            | "building" 
            | undefined     // может быть присоединен только к чему-то одному или ко всему (undefined)
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
}

export interface Quality extends GeneralAttribute {
    data: number,
    type: -7,
    permanent: true,
    parent: "building"
}

export interface Image extends GeneralAttribute {
    data: FileID,
    type: 1
}
export interface File extends GeneralAttribute {
    data: FileID,
    type: 2
}
export interface Video extends GeneralAttribute {
    data: FileID,
    type: 3
}
export interface TaskName extends GeneralAttribute {
    data: string,
    type: 4,
    permanent: true,
    parent: "task"
}
export interface TaskCount extends GeneralAttribute {
    data: number,
    type: 5,
    permanent: true,
    parent: "building"
}
// Комментарии к задаче (мини-чат)
export interface Comments extends GeneralAttribute {
    data: Array<{person: ID, text: string}>,
    type: 6,
    permanent: true,
    parent: "task"
}