'use client';
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { Lock, At } from "tabler-icons-react";
import AuthCode from 'react-auth-code-input';
import { useState } from "react";
import style from "./style.module.css"

const Page = () => {
    const [code, setCode] = useState("");
    const handleCodeChange = (res:string) =>{
        setCode(res);
    }
    const [type, setType] = useState(-1); // 0 - компания, 1 - сотрудник 
    return (
        <div className="h-[100vh] w-[100%] flex items-center justify-center ">
            <Card >
                <form className="w-96 flex flex-col items-stretch gap-2" method="POST" action="/api/registration/">
                    <h2 className="w-[100%] text-center font-semibold text-xl">Регистрация</h2>
                    {type == 1 && <>
                        <div className={style.code}>
                            <AuthCode
                                onChange={handleCodeChange}
                                allowedCharacters="numeric"
                                placeholder="0"
                            />
                        </div>
                    </>}
                    {type == 0 && <>
                        <Input placeholder="Почта" label="Почта"><At size={18} /></Input>
                        <Input placeholder="Пароль" label="Пароль" type="password" className="mb-4"><Lock size={16}/></Input>
                    </>}
                    {type >= 0 && <Button>Войти</Button>}
                    {type == -1 && <>
                        <Button onClick={()=>setType(1)}>Регистрация сотрудника</Button>
                        <Button onClick={()=>setType(0)}>Регистрация компании</Button>
                    </>}
                    <div className="text-sm w-[100%] text-center text-gray-500 hover:underline hover:text-blue-500 transition-all">
                        <Link href="/login">
                            Перейти ко входу
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default Page