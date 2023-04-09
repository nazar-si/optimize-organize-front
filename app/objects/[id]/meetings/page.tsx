
const Page = ({
    params,
    searchParams,
  }: {
    params: { id: string, dir: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) => {
    return (
        <div>
            Совещания
        </div>
    );
}
export default Page