const WHATSAPP_LINK =
  "https://wa.me/5542988674149?text=Ol%C3%A1%20Guilherme%2C%20vi%20sua%20p%C3%A1gina%20sobre%20Presen%C3%A7a%20Local%20no%20Google%20e%20quero%20entender%20como%20minha%20empresa%20pode%20aparecer%20melhor%20nas%20buscas%20da%20regi%C3%A3o.";


;



const businessTypes = [
  "Restaurantes",
  "Cafeterias",
  "Clínicas",
  "Consultórios",
  "Lojas de roupas",
  "Perfumarias",
  "Salões de beleza",
  "Barbearias",
  "Oficinas",
  "Assistências técnicas",
  "Pet shops",
  "Academias",
  "Escolas",
  "Mercados",
  "Bicicletarias",
  "Estéticas",
  "Odontologias",
  "Negócios de bairro",
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Button({
  children,
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={
        variant === "primary"
          ? "rounded-full bg-gradient-to-r from-[#144CFF] via-[#6B18FF] to-[#B83CFF] px-7 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(20,76,255,0.45)] transition hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(184,60,255,0.55)]"
          : "rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
      }
    >
      {children}
    </button>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex rounded-full border border-[#00D9FF]/25 bg-[#00D9FF]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#00D9FF]">
      {children}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_80px_rgba(0,0,16,0.35)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#000010]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <button
  onClick={() => scrollToSection("hero")}
  className="flex items-center gap-3 text-left"
  aria-label="Voltar para o início"
>
  <img
    src="/logo-vis.png"
    alt="Vis Agência"
    className="h-9 w-auto"
  />

  <div>
    <div className="text-sm font-black uppercase tracking-[0.18em] text-white">
      VIS
    </div>
    <div className="text-[11px] text-[#AAB4D4]">
      Agência
    </div>
  </div>
</button>
        
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Chamar Guilherme no WhatsApp"
          className="rounded-full bg-white px-5 py-3 text-xs font-bold text-[#000010] transition hover:bg-[#00D9FF]"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -left-10 top-12 h-28 w-28 rounded-full bg-[#00D9FF]/25 blur-3xl" />
      <div className="absolute -right-10 bottom-12 h-32 w-32 rounded-full bg-[#B83CFF]/25 blur-3xl" />

      <Card className="relative overflow-hidden p-5">
        <div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#02051A] px-4 py-3">
          <span className="text-[#00D9FF]">🔎</span>
          <span className="text-sm text-white/80">loja perto de mim</span>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-[#00D9FF]/30 bg-[#00D9FF]/10 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-bold text-white">Sua empresa</span>
              <span className="rounded-full bg-[#00D9FF]/15 px-3 py-1 text-xs text-[#00D9FF]">
                Aberto agora
              </span>
            </div>
            <div className="mb-3 text-xs text-[#AAB4D4]">Florianópolis · 4,8 ★★★★★</div>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-xl bg-white/10 py-2 text-center text-xs text-white">Rotas</div>
              <div className="rounded-xl bg-white/10 py-2 text-center text-xs text-white">Ligar</div>
              <div className="rounded-xl bg-[#144CFF] py-2 text-center text-xs font-bold text-white">
                WhatsApp
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 opacity-70">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-bold text-white">Concorrente local</span>
              <span className="text-xs text-[#AAB4D4]">1,2 km</span>
            </div>
            <div className="text-xs text-[#AAB4D4]">Fotos, avaliações e informações completas</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 opacity-50">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-bold text-white">Outro resultado</span>
              <span className="text-xs text-[#AAB4D4]">2,4 km</span>
            </div>
            <div className="text-xs text-[#AAB4D4]">Perfil ativo no Google</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
function ImageMockup({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative mx-auto max-w-xs">
      <div className="absolute -left-10 top-12 h-28 w-28 rounded-full bg-[#00D9FF]/25 blur-3xl" />
      <div className="absolute -right-10 bottom-12 h-32 w-32 rounded-full bg-[#B83CFF]/25 blur-3xl" />

      <Card className="relative overflow-hidden p-3">
        <img
          src={src}
          alt={alt}
          className="h-auto w-full rounded-2xl object-cover"
        />
      </Card>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_75%_20%,rgba(107,24,255,0.45),transparent_32%),radial-gradient(circle_at_20%_35%,rgba(0,217,255,0.22),transparent_30%),linear-gradient(135deg,#000010_0%,#02051A_48%,#06145C_100%)] px-5 pb-20 pt-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-6xl text-center">
          <SectionTag>Apareça de graça no Google</SectionTag>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
            Quantos dos seus vizinhos ainda não conhecem a sua empresa?
          </h1>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[#AAB4D4] md:text-xl">
                            Se sua empresa não aparece no{" "}
              <strong className="font-bold text-white">
                Modo IA ou nos primeiros resultados
              </strong>
              , você pode estar invisível até para quem está a poucos minutos do seu endereço.
            </p>

            <div className="mb-7 rounded-3xl border border-[#00D9FF]/25 bg-[#00D9FF]/10 p-5">
              <p className="text-lg font-bold text-white">
                Qual foi a última vez que você se afastou 1 km da localização da sua empresa e pesquisou pelo seu produto ou serviço no Google?
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <Button>Quero aparecer no Google</Button>
              </a>

              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <Button variant="secondary">Chamar no WhatsApp</Button>
              </a>
            </div>

            <p className="mt-5 max-w-2xl text-sm text-[#AAB4D4]">
              Sem site. Sem tráfego pago. Sem mensalidade obrigatória. Uma otimização local pensada para fazer sua empresa ser encontrada por quem já está procurando.
            </p>
          </div>

          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function Storytelling() {
  return (
    <section className="bg-[#000010] px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <SectionTag>Apareça para os seus Clientes</SectionTag>

          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            O cliente não procura mais empresas como antes.
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-[#AAB4D4]">
            <p>
              Antes uma pessoa passava na frente da sua loja, recebia uma indicação ou lembrava de um nome conhecido.
              Hoje, mesmo estando perto, ela pega o celular e pesquisa no Google.
            </p>

            <p>
              Com o Modo IA do Google, uma empresa que possui apenas palavras-chave no perfil pode acabar ficando para trás,
              enquanto um concorrente local com um perfil mais completo e otimizado tem mais chances de aparecer e ser escolhido
              antes sequer da sua empresa aparecer na lista.
            </p>
          </div>

          <div className="mx-auto flex justify-center">
            <ImageMockup
              src="/modoia.png"
              alt="Exemplo de busca local no modo IA do Google"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="problema" className="bg-[#02051A] px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <SectionTag>O problema</SectionTag>
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            O problema não é sua empresa, é o quanto o Google conhece e entende dela
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#AAB4D4]">
  <p>
    Muitas empresas acham que apenas colocar informações básicas ou palavras chave
    no perfil do Google são suficientes para aparecer nas pesquisas.
     </p>

  <p>
    <strong className="font-bold text-white">
      Mas o seu cliente não pesquisa pelo nome da sua empresa, ele pesquisa pelo que você vende. 
    </strong>{" "} < br/> </p>
    <p>
    E o Google precisa entender que a sua empresa é uma boa opção para aquela pesquisa,
    para mostrar ela nos resultados locais, no Modo IA e nas novas experiências de busca.
  </p>
</div>
        </div>
     </div>
    </section>
  );
}

function Promise() {
  return (
    <section className="bg-[linear-gradient(135deg,#000010_0%,#06145C_55%,#6B18FF_100%)] px-5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <SectionTag>Como aparecer no Google gratuitamente?

        </SectionTag>

        <Card>
          <h2 className="text-2xl font-black leading-tight text-white md:text-3xl">
            Está na hora de fazer o Google trabalhar a favor da sua empresa!
          </h2>
        </Card>

        <div>
         
          <div className="space-y-5 text-lg leading-relaxed text-[#F5F8FF]/80">
            
            <p>
              Você não precisa e nem deve começar investindo em tráfego pago ou em um site completo para ser encontrado, 
              antes disso, existe um básico que muitos negócios locais ignoram: <strong className="font-bold text-white">estar bem posicionado no principal lugar onde as pessoas pesquisam.</strong>
            </p>
            <p className="font-bold text-white">
              Enquanto um anúncio ou site desaparece quando você deixa de pagar, um perfil local bem otimizado continua aparecendo, gerando confiança e trazendo oportunidades.
            </p>
          </div>

          <div className="mt-8">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button>Quero entender como funciona</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



function Payment() {
  return (
    <section className="bg-[#02051A] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <SectionTag>Pagamento único</SectionTag>

          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
            Um pagamento único para uma base que continua trabalhando pela sua empresa.
          </h2>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-5 text-lg leading-relaxed text-[#AAB4D4]">
            <p>
              Você faz um pagamento único pela estruturação e otimização inicial.
              Depois, sua empresa continua podendo ser encontrada por pessoas que pesquisam na região.
            </p>
          </div>

          <div className="mt-8">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button>Quero atrair clientes pelo Google</Button>
            </a>
          </div>
        </div>

        <Card className="mx-auto mt-12 w-full max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Sem mensalidade obrigatória",
              "Sem necessidade de tráfego pago",
              "Sem depender de site",
              "Sem contrato longo",
              "Sem agência cobrando milhares para entregar o básico",
              "Uma estrutura orgânica que permanece ativa",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-left">
                <span className="text-[#00D9FF]">✓</span>
                <p className="text-white/90">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 text-center text-sm leading-relaxed text-[#AAB4D4]">
            Resultado no Google depende de fatores como concorrência local, localização,
            qualidade do perfil, avaliações, relevância e comportamento dos usuários.
            O trabalho é feito para melhorar sua presença local e aumentar suas chances de ser encontrado.
          </p>
        </Card>
      </div>
    </section>
  );
}
function ForWho() {
  const yes = [
    "Você possui uma empresa que atende localmente na Grande Florianópolis",
    "Você quer atrair clientes próximos sem depender apenas de indicação",
    "Você quer aparecer nas pesquisas do Google",
    "Você tem um perfil no Google, mas ele está incompleto ou não está otimizado",
    "Você quer gerar mais ligações, rotas, mensagens e visitas",
    "Você quer fazer o básico bem feito antes de investir em anúncios",
  ];

  const no = [
    "Você quer depender exclusivamente de tráfego pago",
    "Você não quer melhorar informações, fotos ou avaliações",
    "Você não atende localmente",
    "Você quer resultado sem nenhuma organização",
    "Você procura uma solução milagrosa sem ajustes",
  ];

  return (
    <section id="para-quem" className="bg-[#000010] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <SectionTag>Para quem é</SectionTag>

          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
            Essa solução é para você se…
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="mb-6 text-center text-2xl font-black text-[#00D9FF]">
              É para você se
            </h3>

            <div className="space-y-4">
              {yes.map((item) => (
                <div key={item} className="flex items-start gap-3 text-left">
                  <span className="text-[#00D9FF]">✓</span>
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="mb-6 text-center text-2xl font-black text-[#B83CFF]">
              Não é para você se
            </h3>

            <div className="space-y-4">
              {no.map((item) => (
                <div key={item} className="flex items-start gap-3 text-left">
                  <span className="text-[#B83CFF]">×</span>
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function BusinessExamples() {
  return (
    <section className="bg-[#02051A] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <SectionTag>Negócios físicos</SectionTag>

          <h2 className="mb-6 text-3xl font-black leading-tight text-white md:text-5xl">
            Se o seu cliente pesquisa antes de comprar, sua empresa precisa estar bem apresentada no Google.
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-[#AAB4D4]">
            Se alguém pode pesquisar pelo seu produto ou serviço no Google, seu perfil precisa estar pronto para transformar essa pesquisa em visita, ligação ou mensagem.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {businessTypes.map((type) => (
            <div
              key={type}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-sm font-bold text-white/90"
            >
              {type}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function FinalCTA() {
  return (
    <section className="bg-[radial-gradient(circle_at_50%_0%,rgba(184,60,255,0.45),transparent_35%),linear-gradient(135deg,#000010,#06145C)] px-5 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTag>Aparecer para o seu cliente é o primeiro passo</SectionTag>
        <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">
          Sua empresa pode estar perdendo clientes que estão a poucos minutos de você.
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-[#AAB4D4]">
Se você está cansado de perder clientes por não aparecer em pesquisas básicas, me envie uma mensagem e solicite uma análise e orçamento para a otimização do perfil da sua empresa no Google. Vamos conversar sobre como melhorar sua presença local e atrair mais clientes próximos.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button>Quero aparecer melhor no Google</Button>
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button variant="secondary">Chamar Guilherme no WhatsApp</Button>
          </a>
        </div>

       
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#000010] px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 text-center">
        <div>
          <p className="font-black text-white">
            Guilherme Moreira | Vis Agência
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#AAB4D4]">
            © 2026 Guilherme Moreira — Vis Agência. Todos os direitos reservados.
          </p>
        </div>

        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
          <Button variant="secondary">Falar no WhatsApp</Button>
        </a>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar Guilherme Moreira no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_35px_rgba(37,211,102,0.55)] transition hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.01 3.2c-7.06 0-12.8 5.63-12.8 12.56 0 2.22.6 4.39 1.74 6.29L3.2 28.8l6.93-1.75a12.96 12.96 0 0 0 5.88 1.43c7.06 0 12.8-5.63 12.8-12.56S23.07 3.2 16.01 3.2Zm0 22.99c-1.88 0-3.72-.5-5.33-1.45l-.38-.22-4.11 1.04 1.09-3.93-.25-.4a10.13 10.13 0 0 1-1.55-5.47c0-5.67 4.72-10.28 10.53-10.28 5.8 0 10.52 4.61 10.52 10.28s-4.72 10.43-10.52 10.43Zm5.78-7.68c-.32-.16-1.88-.91-2.17-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.23-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.83-1.59-1.86-1.78-2.17-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.68-.97-2.3-.26-.6-.52-.52-.71-.53h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.05-1.1 2.56s1.13 2.97 1.29 3.18c.16.21 2.23 3.34 5.4 4.68.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.88-.75 2.15-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[#000010] text-white text-center">
      <Header />
      <Hero />
      <Storytelling />
      <Problems />
      <Promise />
      <Payment />
      <ForWho />
      <BusinessExamples />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default App;