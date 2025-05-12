import { Auth } from "./auth.js";
import { HomePage } from "./home.js";
async function main() {
    let token = localStorage.getItem("token");
    if (!token) {
        await Auth();    
    } else {
        HomePage();
    }
}

main()

