import Link from "next/link";
import { useRouter } from "next/router";

export default function PayPage() {

    const {query} = useRouter();

    return (
        <div>
            <header>
                <h1>Bill</h1>
            </header>
            <p>
                You selected {query.quantity} tickets for the Movie: {query.name}
            </p>
            <Link href="movies">
                <a>Go Back to Movies Selection</a>
            </Link>
        </div>
    
    );
}