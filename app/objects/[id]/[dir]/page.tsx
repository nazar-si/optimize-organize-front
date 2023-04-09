import Layout from "../layout";
import Topbar from "@/components/attributes/topbar/Topbar";

async function getData(id: string, dir: string){
  // id - id объекта 
  // dir - id таска 
  // здесь код на получение имени задачи 
  return {
    taskName: `Task Id: ${dir}`
  }
}


const Page = async ({
    params,
    searchParams,
  }: {
    params: { id: string, dir: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) => {
    // имя задачи из бд
    const data = await getData(params.id, params.dir);
    
    return (
        <div>
            <Topbar passName={data.taskName} changeable objectId={parseInt(params.id)} taskId={parseInt(params.dir)}/>
        </div>
    );
}
export default Page