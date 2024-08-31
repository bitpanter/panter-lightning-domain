import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { WalletIcon, ZapIcon, LockIcon, GlobeIcon } from 'lucide-react';
import Link from 'next/link';

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-orange-500">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-orange-500/20">
        <Link className="flex items-center justify-center" href="#">
          <WalletIcon className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">Panter</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-orange-400" href="#">
            Productos
          </Link>
          <Link className="text-sm font-medium hover:text-orange-400" href="#">
            Características
          </Link>
          <Link className="text-sm font-medium hover:text-orange-400" href="#">
            Acerca de
          </Link>
          <Link className="text-sm font-medium hover:text-orange-400" href="#">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-orange-500">
                    Panter: Tu Puerta al Futuro Financiero
                  </h1>
                  <p className="max-w-[600px] text-orange-300 md:text-xl">
                    Descubre nuestra wallet de Bitcoin Lightning. Rápida, segura y diseñada para la era digital.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-500 text-black hover:bg-orange-600">Obtén tu Wallet</Button>
                  <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-500/20">
                    Más Información
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl sm:w-full lg:order-last">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                  <source
                    src="https://video.nostr.build/7555b73dc886c3ec0cd6068f6e243bfdd0867ff27f6eefda607d96fd3d731be3.mp4"
                    type="video/mp4"
                  />
                  Tu navegador no soporta el tag de video.
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-500/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12 text-center text-orange-500">
              Características
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg">
                <ZapIcon className="h-12 w-12 mb-2 text-orange-500" />
                <h3 className="text-xl font-bold text-orange-500">Pagos Lightning</h3>
                <p className="text-orange-300 text-center">
                  Transacciones instantáneas y de bajo costo en la red Lightning.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg">
                <LockIcon className="h-12 w-12 mb-2 text-orange-500" />
                <h3 className="text-xl font-bold text-orange-500">Seguridad Avanzada</h3>
                <p className="text-orange-300 text-center">Protección de última generación para tus bitcoins.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg">
                <GlobeIcon className="h-12 w-12 mb-2 text-orange-500" />
                <h3 className="text-xl font-bold text-orange-500">Acceso Global</h3>
                <p className="text-orange-300 text-center">
                  Usa tu wallet en cualquier parte del mundo, sin restricciones.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-500">
                  Únete a la Revolución Panter
                </h2>
                <p className="max-w-[900px] text-orange-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sé parte del futuro financiero. Recibe las últimas actualizaciones y ofertas exclusivas.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-orange-500/10 text-orange-500 placeholder-orange-300"
                    placeholder="Ingresa tu email"
                    type="email"
                  />
                  <Button type="submit" className="bg-orange-500 text-black hover:bg-orange-600">
                    Suscribirse
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-orange-500/20">
        <p className="text-xs text-orange-300">© 2024 Panter. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-orange-300 hover:text-orange-400" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs text-orange-300 hover:text-orange-400" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
