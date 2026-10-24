import './VisitanteLayout.css';

function VisitanteLayout({ children }) {
  return (
    <div className="visitante">
      <main className="visitante__main">{children}</main>

      <footer className="visitante__footer">
        <span>StationBike</span>
        <span>Tunja</span>
      </footer>
    </div>
  );
}

export default VisitanteLayout;