import Link from "next/link";

const AuthLinks = () => {
    const authentcated = false;

    return (
        <>
            {authentcated ? (
                <>
                    <Link href={'/write'} className="text-3xl md:text-base">Write</Link>
                    <button
                        type="button"
                        className="text-3xl md:text-base"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <Link href={'/login'} className="text-3xl md:text-base">Login</Link>
            )}
        </>
    )
}

export default AuthLinks