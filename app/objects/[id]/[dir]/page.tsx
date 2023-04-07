
const Page = ({
    params,
    searchParams,
  }: {
    params: { id: string, dir: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) => {
    return (
        <div>
            Object: {params.id} at {params.dir}
        </div>
    );
}
export default Page