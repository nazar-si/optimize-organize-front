import { NextPage } from "next";
import { useRouter } from "next/navigation";

export default function Page({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    return <div>
        Object: {params.id}
    </div>;
  }
