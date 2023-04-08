export type ID = number 
export type FileID = number 

export interface GeneralAttribute {
    ID: ID,
    CreatedAt: string,
    DeletedAt: string,
    UpdatedAt: string,
    name: string,
    type?: number, 
    data : any
}

export interface FileAttribute extends GeneralAttribute {
    data: FileID,
    type: -1
}

export interface Description extends GeneralAttribute {
    data: string,
    type: -2
}
export interface BuildingName extends GeneralAttribute {
    data: string,
    type: -3
}
export interface TaskName extends GeneralAttribute {
    data: string,
    type: -4
}
export interface Owner extends GeneralAttribute {
    data: string,
    type: -5
}
export interface Address extends GeneralAttribute {
    data: string,
    type: -6
}
export interface District extends GeneralAttribute {
    data: string,
    type: -7
}
export interface Quality extends GeneralAttribute {
    data: number,
    type: -8
}
export interface TaskCount extends GeneralAttribute {
    data: number,
    type: -9
}
export interface Image extends GeneralAttribute {
    data: FileID,
    type: -10
}
export interface Video extends GeneralAttribute {
    data: FileID,
    type: -11
}
