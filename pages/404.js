import Layout from '../components/Layout'
import Link from 'next/link'

const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>Pagina no encontrada, porfavor vuelva al <Link href="/" >
              <a >inicio</a>  
            </Link>
            </p>
        </div>
    </Layout>
)
 
export default custom404; 

