import { NextPage } from "next";

const Page : NextPage = () => {
    return (
        <form method="POST" action="/api/registrationAPI">
            login
            <input type="text" />
            password
            <input type="password" />
            <input type="submit" value="submit" />
        </form>
    );
}
export default Page