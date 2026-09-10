import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactSection from "../ContactSection";

vi.mock("@/data/contact", () => ({
  contactData: {
    title: "Contact",
    subtitle: "Get in touch",
    info: [
      { icon: "Mail", title: "Email", content: "test@test.com" },
      { icon: "Phone", title: "Phone", content: "+1234567890" },
    ],
  },
}));

vi.mock("@/components/atoms/SectionTitle", () => ({
  default: ({ title }: { title: string }) => <h2 data-testid="section-title">{title}</h2>,
}));

vi.mock("@/components/molecules/ContactInfoItem", () => ({
  default: ({ item }: { item: { title: string; content: string } }) => (
    <div data-testid="contact-info">{item.title}: {item.content}</div>
  ),
}));

vi.mock("@/components/atoms/Icon", () => ({
  default: () => <span data-testid="icon" />,
}));

describe("ContactSection", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renderiza todos los campos del formulario", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText("Name *")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone (optional)")).toBeInTheDocument();
    expect(screen.getByLabelText("Email *")).toBeInTheDocument();
    expect(screen.getByLabelText("Message *")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("muestra errores de validación en campos requeridos al enviar vacío", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText("Name is required.")).toBeInTheDocument();
    expect(screen.getByText("Email is required.")).toBeInTheDocument();
    expect(screen.getByText("Message is required.")).toBeInTheDocument();
  });

  it("muestra error de email inválido", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    const emailInput = screen.getByLabelText("Email *");
    await user.type(emailInput, "noemail");
    await user.tab();

    expect(await screen.findByText("Please enter a valid email address.")).toBeInTheDocument();
  });

  it("muestra error de mensaje con longitud insuficiente", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    const messageInput = screen.getByLabelText("Message *");
    await user.type(messageInput, "short");
    await user.tab();

    expect(
      await screen.findByText("Message must be at least 10 characters long.")
    ).toBeInTheDocument();
  });

  it("campo honeypot oculto está presente", () => {
    render(<ContactSection />);
    const honeypot = document.querySelector('input[name="website"]') as HTMLInputElement;
    expect(honeypot).toBeInTheDocument();
    expect(honeypot).toHaveAttribute("tabindex", "-1");
    expect(honeypot).toHaveAttribute("aria-hidden", "true");
  });

  it("submit exitoso muestra mensaje de éxito", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify({ ok: true }), { status: 200 })
    );

    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText("Name *"), "Fabian");
    await user.type(screen.getByLabelText("Email *"), "fabian@test.com");
    await user.type(
      screen.getByLabelText("Message *"),
      "Este es un mensaje de prueba con suficientes caracteres"
    );
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      await screen.findByText("Your message has been sent. Thank you!")
    ).toBeInTheDocument();
  });

  it("submit fallido muestra error", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify({ error: "Error al enviar mensaje" }), {
        status: 500,
      })
    );

    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText("Name *"), "Fabian");
    await user.type(screen.getByLabelText("Email *"), "fabian@test.com");
    await user.type(
      screen.getByLabelText("Message *"),
      "Este es un mensaje de prueba con suficientes caracteres"
    );
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText("Error al enviar mensaje")).toBeInTheDocument();
  });

  it("campos tienen maxLength correcto", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText("Name *")).toHaveAttribute("maxlength", "100");
    expect(screen.getByLabelText("Phone (optional)")).toHaveAttribute("maxlength", "20");
    expect(screen.getByLabelText("Email *")).toHaveAttribute("maxlength", "254");
    expect(screen.getByLabelText("Message *")).toHaveAttribute("maxlength", "2000");
  });

  it("envía website y formLoadedAt en el body del POST", async () => {
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify({ ok: true }), { status: 200 })
    );

    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText("Name *"), "Fabian");
    await user.type(screen.getByLabelText("Email *"), "fabian@test.com");
    await user.type(
      screen.getByLabelText("Message *"),
      "Este es un mensaje de prueba con suficientes caracteres"
    );
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalled();
    });

    const callArgs = fetchSpy.mock.calls[0];
    const init = callArgs[1] as RequestInit;
    const body = JSON.parse(init.body as string);
    expect(body).toHaveProperty("website");
    expect(body).toHaveProperty("formLoadedAt");
    expect(typeof body.formLoadedAt).toBe("number");
  });
});
