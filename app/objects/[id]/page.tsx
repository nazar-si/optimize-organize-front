import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Editor from "@/components/attributes/editor/Editor";
import Topbar from "@/components/attributes/topbar/Topbar";

export default function Page({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    return <div>
        <Topbar></Topbar>
        <Editor></Editor>
    </div>;
  }
