import Layout from "../layout";
import Topbar from "@/components/attributes/topbar/Topbar";

const Page = ({
    params,
    searchParams,
  }: {
    params: { id: string, dir: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) => {
    return (
        <div>
            <Topbar passName="Параметры"/>
        </div>
    );
}
export default Page