export function Section({children,title}) {
    return (
        <section>
            <h1>{title}</h1>
            {children}
        </section>
    )
}