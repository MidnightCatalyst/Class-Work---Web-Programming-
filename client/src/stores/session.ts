import {reactive} from "vue";
const session = reactive({
    user: null as User|null,
});
export function login(firstname: string, lastname: string) {
    session.user = {firstname, lastname};
}

export function logout() {
    session.user = null;
}
export class User{
    public firstname?: string;
    public lastname?: string;
}
export default session;