import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

export default async function logout() {
    try {
        await signOut(auth);
    } catch (e) {
        console.error(e);
    }
}