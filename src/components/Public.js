// import { Link } from 'react-router-dom'

// const Public = () => {
//     const content = (
//         <section className="public">
//             <header>
//                 <h1>Welcome to <span className="nowrap"> NKNnnnn... Repairs!</span></h1>
//             </header>
//             <main className="public__main">
//                 <p>Located in Beautiful Downtown Foo City, NKNnnnn... Repairs  provides a trained staff ready to meet your tech repair needs.</p>
//                 <address className="public__addr">
//                     Dan D. Repairs<br />
//                     555 Foo Drive<br />
//                     Foo City, CA 12345<br />
//                     <a href="tel:+15555555555">(555) 555-5555</a>
//                 </address>
//                 <br />
//                 <p>Owner: Nguyễn Khánh Nguyên</p>
//             </main>
//             <footer>
//                 <Link to="/login">Employee Login</Link>
//             </footer>
//         </section>

//     )
//     return content
// }
// export default Public
import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap"> NKN.... Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Foo City, Nguyễn Khánh Nguyên Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    NKN.... Repairs<br />
                    555 Foo Drive<br />
                    Biên Hòa City<br />
                    <a href="tel:+15555555555">(555)09712307**</a>
                </address>
                <br />
                <p>Owner: Nguyễn Khánh Nguyên </p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public
