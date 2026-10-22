import './AdminLayout.css';

const MENU = [
  'Panel de control',
  'Estaciones',
  'Bicicletas',
  'Planes y tarifas',
  'Incidencias',
];

function AdminLayout({ itemActivo, children }) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <p className="admin-sidebar__titulo">Panel Admin</p>

        <nav className="admin-sidebar__menu">
          {MENU.map((item) => {
            const activo = item === itemActivo;
            return (
              <button
                key={item}
                type="button"
                className={
                  activo
                    ? 'admin-sidebar__item admin-sidebar__item--activo'
                    : 'admin-sidebar__item'
                }
                aria-current={activo ? 'page' : undefined}
              >
                {item}
              </button>
            );
          })}
        </nav>

        <div className="admin-sidebar__pie">
          <button type="button" className="admin-sidebar__salir">
            Cerrar sesión
          </button>
        </div>
      </aside>

      <main className="admin-contenido">{children}</main>
    </div>
  );
}

export default AdminLayout;