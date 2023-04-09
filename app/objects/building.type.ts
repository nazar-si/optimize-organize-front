export type Building = {
    ID: number,
    CreatedAt: string,
    UpdatedAt: string,
    DeletedAt: string,
    groups: any[],
    attributes: Array<{
        ID: number,
        CreatedAt: string,
        UpdatedAt: string | null,
        DeletedAt: string | null,
        attribute_id: number,
        attribute: {
            ID: number,
            CreatedAt: string,
            UpdatedAt: string | null,
            DeletedAt: string | null,
            attr_name: string,
            attr_description: string,
            attr_type: number,
            modify_permission: number
        },
        building_id: number,
        data: string
    }>,
}