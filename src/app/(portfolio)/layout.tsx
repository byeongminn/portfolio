export default function PortfolioLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section>
      {children}
      {modal}
      <div id="modal-root"></div>
    </section>
  );
}
