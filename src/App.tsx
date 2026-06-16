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
        <button onClick={() => scrollToSection("hero")} className="text-left">
          <div className="text-sm font-black uppercase tracking-[0.28em] text-white">VIS</div>
          <div className="text-[11px] text-[#AAB4D4]">Agência</div>
        </button>

        <nav className="hidden items-center gap-7 text-sm text-[#AAB4D4] md:flex">
          <button onClick={() => scrollToSection("problema")} className="hover:text-white">
            Problema
          </button>
          <button onClick={() => scrollToSection("oferta")} className="hover:text-white">
            Oferta
          </button>
          <button onClick={() => scrollToSection("para-quem")} className="hover:text-white">
            Para quem é
          </button>
          <button onClick={() => scrollToSection("guilherme")} className="hover:text-white">
            Sobre
          </button>
        </nav>

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

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionTag>Presença Local no Google</SectionTag>

          <h1 className="mb-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
            Quantos dos seus vizinhos ainda não conhecem a sua empresa?
          </h1>

          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[#AAB4D4] md:text-xl">
            Hoje, antes de entrar em uma loja, clínica, restaurante ou comércio local, as pessoas pesquisam no Google. <br />
            Se sua empresa não aparece no <strong> Modo IA ou nos primeiros resultados</strong>, você pode estar invisível até para quem está a poucos minutos do seu endereço.
          </p>

          <div className="mb-7 rounded-3xl border border-[#00D9FF]/25 bg-[#00D9FF]/10 p-5">
            <p className="text-lg font-bold text-white">
              Qual foi a última vez que você se afastou 1 km da localização da sua empresa e pesquisou pelo seu produto ou serviço no Google?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#AAB4D4]">
              O Google Indicou a sua empresa no modo IA? < br /> Voce apareceu nas primeiras opções de empresas perto de você? <br />
              Se a resposta for <strong> NÃO</strong>, é provável que muitos dos seus clientes em potencial também não estejam encontrando a sua empresa quando pesquisam.  
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
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
    </section>
  );
}

function Storytelling() {
 
  return (
    <section className="bg-[#000010] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <SectionTag>Comportamento local</SectionTag>
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            O cliente não procura mais comércio como antes.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#AAB4D4]">
            <p>
              Antes, uma pessoa passava na frente da sua loja, recebia uma indicação ou lembrava de um nome conhecido.
              Hoje, mesmo estando perto, ela pega o celular e pesquisa no Google.
            </p>
            <p>
              Mas você deve ter notado que hoje quando pesquisamos no Google por um produto ou serviço, o comportamento é diferente. Não é mais uma lista de links, em 19 de Maio o Google Anúnciou o Modo IA como futuro das buscas, a maior mudança na forma de utilizar o Google de toda a história. 
            </p>
            <p>
              Isso Significa que apenas colocar palavras chaves no seu perfil como "Restaurante em Florianópolis" não é mais suficiente. O Google está cada vez melhor em entender o que o cliente quer e mostrar os resultados mais completos, relevantes e confiáveis. </p>
          </div>
          <ImageMockup
  src="/modoia.png"
  alt="Exemplo de busca local no modo IA do Google"
/>
        </div>

        

        <div className="mt-10 rounded-3xl border border-[#B83CFF]/25 bg-[#B83CFF]/10 p-6 text-center">
          <p className="text-xl font-bold text-white">
            Se ele não entende como sua empresa pode atender a essa necessidade, ele pode acabar mostrando o concorrente que tem um perfil mais completo e otimizado para a busca local.
          </p>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="problema" className="bg-[#02051A] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <SectionTag>O problema</SectionTag>
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            O problema não é só aparecer no Google, é aparecer do jeito certo.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#AAB4D4]">
  <p>
    Muitas empresas acham que apenas colocar as informações básicas no perfil do Google é suficiente para aparecer bem.
    Mas o Google tem critérios cada vez mais rigorosos para mostrar os resultados mais relevantes e confiáveis para os clientes.
  </p>

  <p>
    <strong className="font-bold text-white">
      O seu cliente não pesquisa pelo nome da sua empresa,ele pesquisa pelo que você vende.
    </strong>{" "}
    E o Google precisa entender que a sua empresa é uma boa opção para aquela pesquisa,
    para mostrar ela nos resultados locais e nas novas experiências de busca.
  </p>
</div>
        </div>

        

        <p className="mx-auto mt-10 max-w-4xl text-center text-xl font-bold text-white">
          Às vezes, o problema não é falta de demanda. < br/> O problema é que sua empresa não está aparecendo na hora em que o cliente procura.
        </p>
      </div>
    </section>
  );
}

function Promise() {
  return (
    <section className="bg-[linear-gradient(135deg,#000010_0%,#06145C_55%,#6B18FF_100%)] px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#00D9FF]">
            Qual a função do Google para sua empresa?
          </p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Atrair clientes de graça mostrando que você existe.
          </h2>
        </Card>

        <div>
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            Está na hora de fazer o Google trabalhar a favor da sua empresa.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#F5F8FF]/80">
            <p>
              Com o Presença Local no Google, eu organizo e otimizo o perfil da sua empresa para aumentar suas chances de aparecer
              para pessoas que pesquisam pelo que você vende em Florianópolis, São José, Palhoça e Biguaçu.
            </p>
            <p>
              Você não precisa começar investindo em tráfego pago. Também não precisa ter um site completo para ser encontrado.
              Antes disso, existe um básico que muitos negócios locais ignoram: estar bem apresentado no principal lugar onde as pessoas pesquisam.
            </p>
            <p className="font-bold text-white">
              Enquanto um anúncio para quando você deixa de pagar, um perfil local bem otimizado continua aparecendo, gerando confiança e trazendo oportunidades.
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

function Offer() {
  return (
    <section id="oferta" className="bg-[#000010] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <SectionTag>A oferta</SectionTag>
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            O que é o Presença Local no Google?
          </h2>
          <p className="text-lg leading-relaxed text-[#AAB4D4]">
            É uma otimização completa do Perfil da Empresa no Google para negócios físicos que querem ser encontrados por clientes da própria região.
            Meu trabalho é ajustar os pontos que fazem diferença na busca local.
          </p>
        </div>

        
        

        <div className="mt-10 rounded-3xl border border-[#00D9FF]/25 bg-[#00D9FF]/10 p-7 text-center">
          <p className="text-xl font-bold text-white">
            O objetivo é deixar seu perfil mais completo, mais confiável e mais preparado para aparecer nas buscas locais.
          </p>
        </div>
      </div>
    </section>
  );
}

function Payment() {
  return (
    <section className="bg-[#02051A] px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div>
          <SectionTag>Pagamento único</SectionTag>
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            Um pagamento único para uma base que continua trabalhando pela sua empresa.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#AAB4D4]">
            <p>
              Diferente de um anúncio, que para de aparecer quando você deixa de investir, a otimização do seu Perfil da Empresa no Google
              cria uma base orgânica para sua presença local.
            </p>
            <p>
              Você faz um pagamento único pela estruturação e otimização inicial. Depois, sua empresa continua podendo ser encontrada por pessoas que pesquisam na região.
            </p>
          </div>

          <div className="mt-8">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button>Quero atrair clientes pelo Google</Button>
            </a>
          </div>
        </div>

        <Card>
          <div className="space-y-4">
            {[
              "Sem mensalidade obrigatória",
              "Sem necessidade de tráfego pago",
              "Sem depender de site",
              "Sem contrato longo",
              "Sem agência cobrando milhares para entregar o básico",
              "Uma estrutura orgânica que permanece ativa",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-[#00D9FF]">✓</span>
                <p className="text-white/90">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-[#AAB4D4]">
            Resultado no Google depende de fatores como concorrência local, localização, qualidade do perfil, avaliações, relevância e comportamento dos usuários.
            O trabalho é feito para melhorar sua presença local e aumentar suas chances de ser encontrado, sem prometer posições garantidas.
          </p>
        </Card>
      </div>
    </section>
  );
}

function ForWho() {
  const yes = [
    "Você possui comércio físico na Grande Florianópolis",
    "Sua empresa atende em Florianópolis, São José, Palhoça ou Biguaçu",
    "Você quer atrair clientes próximos sem depender apenas de indicação",
    "Você quer melhorar sua presença no Google",
    "Você tem um perfil no Google, mas ele está incompleto",
    "Você quer gerar mais ligações, rotas, mensagens e visitas",
    "Você quer fazer o básico bem feito antes de investir em anúncios",
  ];

  const no = [
    "Você espera promessa de primeiro lugar garantido",
    "Você não quer melhorar informações, fotos ou avaliações",
    "Você não tem uma empresa local ou ponto físico",
    "Você quer resultado sem nenhuma organização",
    "Você procura uma solução milagrosa sem ajustes",
  ];

  return (
    <section id="para-quem" className="bg-[#000010] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <SectionTag>Filtro de cliente</SectionTag>
          <h2 className="text-3xl font-black text-white md:text-5xl">Essa solução é para você se…</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="mb-6 text-2xl font-black text-[#00D9FF]">É para você se</h3>
            <div className="space-y-4">
              {yes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#00D9FF]">✓</span>
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="mb-6 text-2xl font-black text-[#B83CFF]">Não é para você se</h3>
            <div className="space-y-4">
              {no.map((item) => (
                <div key={item} className="flex items-start gap-3">
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
        <div className="mb-12 max-w-4xl">
          <SectionTag>Negócios físicos</SectionTag>
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            Se o seu cliente pesquisa antes de comprar, sua empresa precisa estar bem apresentada no Google.
          </h2>
          <p className="text-lg text-[#AAB4D4]">
            Se alguém pode pesquisar pelo seu produto ou serviço no Google, seu perfil precisa estar pronto para transformar essa pesquisa em visita, ligação ou mensagem.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {businessTypes.map((type) => (
            <div key={type} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-sm font-bold text-white/90">
              {type}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guilherme() {
  return (
    <section id="guilherme" className="bg-[#000010] px-5 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="min-h-[520px] overflow-hidden bg-[radial-gradient(circle_at_50%_35%,rgba(0,217,255,0.22),transparent_35%),linear-gradient(135deg,#06145C,#000010)]">
          <div className="flex h-full min-h-[480px] flex-col justify-end">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#00D9FF]">
                Guilherme Moreira
              </div>
              <p className="text-3xl font-black text-white">Vis Agência</p>
              <p className="mt-3 text-[#AAB4D4]">
                Estratégia, marketing, presença local e processos comerciais para empresas que querem crescer com mais clareza.
              </p>
            </div>
          </div>
        </Card>

        <div>
          <SectionTag>Quem conduz</SectionTag>
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            Meu trabalho não é apenas fazer marketing. É construir crescimento real.
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-[#AAB4D4]">
            <p>Meu nome é Guilherme Moreira.</p>
            <p>
              Há mais de 6 anos eu atuo ajudando empresas a transformar marketing, vendas e processos comerciais em crescimento real.
            </p>
            <p>
              Nesse período, já acompanhei mais de 1.000 empresas em diferentes nichos, incluindo alimentação, educação, varejo, serviços, saúde,
              estética, psicologia, odontologia, dermatologia, e-commerce e outros mercados.
            </p>
            <p>
              No caso dos negócios locais, isso começa por uma pergunta simples: quando alguém pesquisa pelo que sua empresa vende,
              ela aparece do jeito que deveria?
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["+6 anos de experiência", "+1.000 empresas acompanhadas", "Atuação no Brasil e exterior", "Foco em crescimento real"].map((item) => (
              <div key={item} className="rounded-2xl border border-[#00D9FF]/20 bg-[#00D9FF]/10 p-4 text-sm font-bold text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[radial-gradient(circle_at_50%_0%,rgba(184,60,255,0.45),transparent_35%),linear-gradient(135deg,#000010,#06145C)] px-5 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTag>Próximo passo</SectionTag>
        <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">
          Sua empresa pode estar perdendo clientes que estão a poucos minutos de você.
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-[#AAB4D4]">
          Se alguém pesquisar hoje pelo seu produto ou serviço na sua região, sua empresa aparece bem?
          O perfil transmite confiança? Tem fotos, informações, serviços, WhatsApp, rota e descrição clara?
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button>Quero aparecer melhor no Google</Button>
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button variant="secondary">Chamar Guilherme no WhatsApp</Button>
          </a>
        </div>

        <p className="mt-5 text-sm text-[#AAB4D4]">
          Me envie uma mensagem e eu te explico como funciona a otimização do Perfil da Empresa no Google.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#000010] px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-black text-white">Guilherme Moreira | Vis Agência</p>
          <p className="mt-2 max-w-2xl text-sm text-[#AAB4D4]">
            Estratégia, marketing, presença local e processos comerciais para empresas que querem ser encontradas, gerar demanda e crescer com mais clareza.
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
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_0_35px_rgba(37,211,102,0.55)] transition hover:scale-105"
    >
      ✆
    </a>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[#000010] text-white">
      <Header />
      <Hero />
      <Storytelling />
      <Problems />
      <Promise />
      <Offer />
      <Payment />
      <ForWho />
      <BusinessExamples />
      <Guilherme />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default App;