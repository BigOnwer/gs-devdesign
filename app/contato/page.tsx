"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, Instagram, MapPin, Send, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Criar mensagem para WhatsApp
    const message = `Olá Gustavo! Meu nome é ${formData.nome}.

📧 Email: ${formData.email}
📱 Telefone: ${formData.telefone}
🎯 Serviço: ${formData.servico}

💬 Mensagem:
${formData.mensagem}

Gostaria de conversar sobre um projeto!`

    const whatsappUrl = `https://wa.me/5531990641303?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Portfólio
          </Link>
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gustavo Leal
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Vamos Conversar!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário de Contato */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e eu entrarei em contato o mais rápido possível
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input
                      id="nome"
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={(e) => handleChange("nome", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      placeholder="(31) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => handleChange("telefone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="servico">Tipo de Serviço</Label>
                    <Select onValueChange={(value) => handleChange("servico", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="desenvolvimento-web">Desenvolvimento Web</SelectItem>
                        <SelectItem value="design-grafico">Design Gráfico</SelectItem>
                        <SelectItem value="design-web">Design Web</SelectItem>
                        <SelectItem value="manutencao">Manutenção de Site</SelectItem>
                        <SelectItem value="posts-instagram">Posts Instagram</SelectItem>
                        <SelectItem value="banners">Banners</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Conte-me mais sobre seu projeto..."
                    rows={5}
                    value={formData.mensagem}
                    onChange={(e) => handleChange("mensagem", e.target.value)}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Informações de Contato</CardTitle>
                <CardDescription>
                  Entre em contato através dos canais abaixo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">lealgustavo0099@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-600">+55 31 99064-1303</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <p className="text-gray-600">@gs.devdesign</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Localização</h3>
                    <p className="text-gray-600">Minas Gerais, Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">Resposta Rápida</h3>
                </div>
                <p className="mb-4 opacity-90">
                  Geralmente respondo em até 2 horas durante o horário comercial. 
                  Para urgências, prefira o WhatsApp!
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  asChild
                >
                  <a href="https://wa.me/5531990641303" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
