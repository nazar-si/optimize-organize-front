export type IData = {
    imageUrl: string,   // URL главной картинки для использования 
    name: string,       // название 
    type: string,       // тип 
    description: string,// описание 
    id: number,         // ID
    rating: number,     // рейтинг / состояние 
    taskCount: number,  // количество задач
    location: string,   // адерс - улица + город 
    region: string      // округ + район  
    owner: string       // владелец
}