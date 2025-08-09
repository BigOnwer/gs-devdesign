import Link from "next/link"
import { ArrowRight, Code, Palette, Globe, Instagram, Mail, Phone, Star, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const technologies = [
    "JavaScript", "Node.js", "Next.js", "React", "TypeScript", 
    "Tailwind CSS", "Figma", "Adobe Photoshop"
  ]

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Desenvolvimento Web",
      description: "Sites profissionais e responsivos",
      price: "R$ 150,00",
      details: [
        "Valor mínimo de produção: R$ 150,00",
        "Manutenção mensal: R$ 70,00",
        "Até 2 modificações mensais incluídas",
        "Modificações extras: R$ 15,00 cada"
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Gráfico",
      description: "Logos, banners e posts para redes sociais",
      price: "A partir de R$ 30,00",
      details: [
        "Posts Instagram: R$ 30,00",
        "Banners de lojas/produtos: R$ 70,00",
        "Design web: R$ 85,00+",
        "Cores personalizadas para sua marca"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gustavo Leal
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-600 hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#projetos" className="text-gray-600 hover:text-blue-600 transition-colors">Projetos</a>
            <a href="#tecnologias" className="text-gray-600 hover:text-blue-600 transition-colors">Tecnologias</a>
            <Link href="/contato" className="text-gray-600 hover:text-blue-600 transition-colors">Contato</Link>
          </nav>
          <Link href="/contato">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Fale Comigo
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-1" />
              Desenvolvedor Full Stack & Designer
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Gustavo Leal
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Desenvolvedor Full Stack Web e Designer Gráfico de 14 anos, criando soluções digitais modernas e impactantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Iniciar Projeto
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sou um jovem desenvolvedor apaixonado por tecnologia e design, com foco em criar experiências digitais únicas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Minha Jornada</h3>
              <p className="text-gray-600 mb-6">
                Aos 14 anos, já domino as principais tecnologias do mercado web e design gráfico. 
                Minha paixão é transformar ideias em realidade digital, criando sites funcionais e designs impactantes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Desenvolvimento Full Stack</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Design Gráfico e Web</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Foco em Experiência do Usuário</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Full Stack</h4>
                  <p className="text-sm text-gray-600">Desenvolvimento completo</p>
                </div>
                <div>
                  <Palette className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Design</h4>
                  <p className="text-sm text-gray-600">Criação visual</p>
                </div>
                <div>
                  <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Web</h4>
                  <p className="text-sm text-gray-600">Sites responsivos</p>
                </div>
                <div>
                  <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Qualidade</h4>
                  <p className="text-sm text-gray-600">Resultados excepcionais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meus Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofereço soluções completas em desenvolvimento web e design gráfico com preços acessíveis
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias Section */}
      <section id="tecnologias" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tecnologias</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Domino as principais tecnologias do mercado para entregar soluções modernas e eficientes
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meus Projetos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Alguns dos trabalhos que desenvolvi, mostrando minhas habilidades em desenvolvimento web e design
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 1 - E-commerce */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src="/dashboardExemple.png"
                  alt="E-commerce ModaStyle"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={'https://alias-services.vercel.app'} className="text-sm font-medium">Ver Projeto</Link>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">Alias Services</h3>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Concluído
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Administrador financeiro e de vendas para empresas
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">Next.js</Badge>
                  <Badge variant="outline" className="text-xs">TypeScript</Badge>
                  <Badge variant="outline" className="text-xs">Tailwind</Badge>
                  <Badge variant="outline" className="text-xs">Node.js</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Desenvolvimento Web</span>
                  <span>2024</span>
                </div>
              </CardContent>
            </Card>

            {/* Projeto 2 - Site Institucional */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src="/nails.png"
                  alt="Site Clínica Saúde+"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={'https://vanass-nails.vercel.app'} className="text-sm font-medium">Ver Projeto</Link>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">Vanass Nails</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Ativo
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Site de agendamento de manicure
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">Next</Badge>
                  <Badge variant="outline" className="text-xs">Typescript</Badge>
                  <Badge variant="outline" className="text-xs">Tailwind</Badge>
                  <Badge variant="outline" className="text-xs">Figma</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Web + Design</span>
                  <span>2025</span>
                </div>
              </CardContent>
            </Card>

            {/* Projeto 3 - Identidade Visual */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src="/house-burguer.png"
                  alt="Identidade Visual Restaurante Sabor"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={'https://burguer-house-six.vercel.app'} className="text-sm font-medium">Ver Projeto</Link>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">Burguer House</h3>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Design
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Identidade visual completa para restaurante, incluindo logo e
                  cardápio digital.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">Photoshop</Badge>
                  <Badge variant="outline" className="text-xs">Figma</Badge>
                  <Badge variant="outline" className="text-xs">Design Gráfico</Badge>
                  <Badge variant="outline" className="text-xs">Branding</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Design Gráfico</span>
                  <span>2024</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Gostou dos meus trabalhos? Vamos criar algo incrível para você também!
            </p>
            <Link href="/contato">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para começar seu projeto?</h2>
          <p className="text-xl mb-8 opacity-90">
            Vamos criar algo incrível juntos! Entre em contato e vamos conversar sobre suas ideias.
          </p>
          <Link href="/contato">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Fale Comigo Agora
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Gustavo Leal
              </h3>
              <p className="text-gray-400">
                Desenvolvedor Full Stack & Designer Gráfico
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <Link href={'mailto:lealgustavo0099@gmail.com'}>lealgustavo0099@gmail.com</Link>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <Link href={'https://wa.me/5531990641303?text=Olá'}>+55 31 99064-1303</Link>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2" />
                  <Link href={'https://www.instagram.com/gs.devdesign'}>@gs.devdesign</Link>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Desenvolvimento Web</li>
                <li>Design Gráfico</li>
                <li>Design Web</li>
                <li>Manutenção de Sites</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gustavo Leal. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
