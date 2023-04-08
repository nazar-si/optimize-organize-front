import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { Lock, At } from "tabler-icons-react";

const Page = () => {
    return (
        <div className="h-[100vh] w-[100%] flex items-center justify-center ">
            <Card >
                <form className="w-96 flex flex-col items-stretch gap-2" method="POST" action="/api/login/">
                    <h2 className="w-[100%] text-center font-semibold text-xl">Вход</h2>
                    <Input placeholder="Почта" label="Почта" name="email"><At size={18} /></Input>
                    <Input placeholder="Пароль" label="Пароль" type="password" className="mb-4" name="password"><Lock size={16}/></Input>
                    <Button type="submit">Войти</Button>
                    <div className="text-sm w-[100%] text-center text-gray-500 hover:underline hover:text-blue-500 transition-all">
                        <Link href="/signup">
                            Перейти к регистрации
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default Page