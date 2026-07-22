import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-[var(--space-section)]">
      <Container className="text-center">
        <span className="font-display text-8xl font-extrabold text-accent/20 sm:text-9xl">
          404
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-text">
          Página não encontrada
        </h1>
        <p className="mt-3 text-text-muted">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-8">
          <Button href="/">Voltar para o início</Button>
        </div>
      </Container>
    </section>
  );
}
