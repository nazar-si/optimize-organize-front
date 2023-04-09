import { GeneralAttribute, ID } from "@/components/attributes/types";
import { createSlice } from "@reduxjs/toolkit";
import type {Action} from "@reduxjs/toolkit"
import { prototype } from "events";

export type stateType = {
    attributes: Map<ID, GeneralAttribute>; 
}

const initialState:stateType = {
    attributes: new Map<ID, GeneralAttribute>()
};

type reducersType = {
    // Подгрузить начальные атрибуты, чтобы отобразить 
    load: (state: stateType, action: {type: string, payload: Array<GeneralAttribute>}) => void
    // Удалить значение атрибута (attribute_value)
    remove: (state: stateType, action: {type: string, payload: ID}) => void 
    // Создать значение атрибута
    add: (state: stateType, action: {type: string, payload: {
        prototype: GeneralAttribute,
        // ... Параметры, которые нужны бэкенду
    }}) => void,
    // Обновить значение атрибута 
    update: (state: stateType, action: {type: string, payload: {
        id: ID,
        params: Partial<GeneralAttribute>, // часть параметров из основного атрибута
        // ... Параметры, которые нужны бэкенду
    }}) => void
}


export const attributesSlice = createSlice<stateType, reducersType>({
    name: "attributesSlice",
    initialState,
    reducers: {
        load: (state, action) => {
            action.payload.forEach(a => {
                state.attributes.set(a.ID, a);
            })
        },
        remove: (state, action) => {
            state.attributes.delete(action.payload);
            
            // И код, чтобы удалить из БД: 
            // ... 
        },
        add: (state, action) => {
            // Здесь код на создание значения атрибута на бэке 
            // ... 
            
            // ID нового атрибута: 
            const id = Math.floor(Math.random() * 1e10) 

            // Прототип атрибута - шаблон с базовыми данными
            // Можно использовать, чтобы загрузить начальные данные на бэк
            let newAttribute : GeneralAttribute = action.payload.prototype; // создали объект по прототипу
            newAttribute.ID = id // присвоили id из "бэка"
            state.attributes.set(id, newAttribute) 
        },
        update: (state, action) => {
            const id = action.payload.id; 
            let entry = state.attributes.get(id);
            if (entry === undefined)
                return

            // Новый объект 
            let obj : GeneralAttribute = {...entry, ...action.payload.params }
            state.attributes.set(id, obj); 

            // И код, чтобы обновить на БД: 
            // ... 
        }
    },
});

export const actions = attributesSlice.actions;
export default attributesSlice.reducer;
