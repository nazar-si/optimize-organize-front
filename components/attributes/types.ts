export type ID = number 
export type FileID = number 

export interface GeneralAttribute {
    ID: ID,
    CreatedAt: string,
    DeletedAt: string,
    UpdatedAt: string,
    name: string,
    type?: number, 
    data : any,
    permanent?: boolean, // неудаляемый
    parent?: "task" | "building" | undefined // может быть присоединен только к чему-то одному или ко всему (undefined)
}

export interface FileAttribute extends GeneralAttribute {
    data: FileID,
    type: -1
}

export interface Description extends GeneralAttribute {
    data: string,
    type: -2,
    permanent: true,
    parent: "building"
}
export interface BuildingName extends GeneralAttribute {
    data: string,
    type: -3,
    permanent: true,
    parent: "building"
}
export interface TaskName extends GeneralAttribute {
    data: string,
    type: -4,
    permanent: true,
    parent: "task"
}

export interface Owner extends GeneralAttribute {
    data: string,
    type: -5,
    permanent: true, 
    parent: "building"
}
export interface Address extends GeneralAttribute {
    data: string,
    type: -6,
    permanent: true,
    parent: "building"
}


// Округ
export interface District extends GeneralAttribute {
    data: string,
    type: -7,
    permanent: true,
    parent: "building"
}

export interface Quality extends GeneralAttribute {
    data: number,
    type: -8,
    permanent: true,
    parent: "building"
}
export interface TaskCount extends GeneralAttribute {
    data: number,
    type: -9,
    permanent: true,
    parent: "building"
}
export interface Image extends GeneralAttribute {
    data: FileID,
    type: -10
}
export interface Video extends GeneralAttribute {
    data: FileID,
    type: -11
}

// Координаты. Например отобразить дом на карте
export interface Location extends GeneralAttribute {
    data: Array<number>,
    type: -12,
    permanent: true,
}

// Комментарии к задаче (мини-чат)
export interface Comments extends GeneralAttribute {
    data: Array<{person: ID, text: string}>,
    type: -13,
    permanent: true,
    parent: "task"
}