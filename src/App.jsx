import logo from "./assets/logo.png"

function App() {
  return (
    <div style={{ fontFamily: "Georgia, serif", backgroundColor: "#1a0a00", minHeight: "100vh", color: "white" }}>

      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 3rem", borderBottom: "2px solid #FF6B00" }}>
        <img src={logo} alt="logo" style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
        <nav style={{ display: "flex", gap: "2rem" }}>
          <a href="#inicio" style={{ color: "#FF6B00", textDecoration: "none", fontWeight: "bold" }}>Inicio</a>
          <a href="#menu" style={{ color: "white", textDecoration: "none" }}>Menu</a>
          <a href="#contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</a>
        </nav>
      </header>

      <section id="inicio" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "5rem 2rem", textAlign: "center" }}>
        <img src={logo} alt="logo" style={{ width: "250px", height: "250px", borderRadius: "50%", marginBottom: "2rem" }} />
        <h1 style={{ fontSize: "3.5rem", color: "#FF6B00", margin: "0" }}>BARRIL AND GRILL</h1>
        <p style={{ fontSize: "1.3rem", color: "#ccc", margin: "1rem 0" }}>Sabor Real - Fuego Lento - Marinados - Ahumados - Calidad</p>
        <p style={{ fontSize: "1rem", color: "#aaa", maxWidth: "600px", lineHeight: "1.8" }}>
          Especialistas en asados al barril y tacos de birria. Llevamos el sabor autentico a tu evento o domicilio en El Retiro y alrededores.
        </p>
        <a href="https://wa.me/573245872010" target="_blank" style={{ marginTop: "2rem", padding: "1rem 2rem", backgroundColor: "#25D366", color: "white", textDecoration: "none", borderRadius: "8px", fontWeight: "bold", fontSize: "1.1rem" }}>
          Pedir por WhatsApp
        </a>
      </section>

      <section id="menu" style={{ padding: "4rem 3rem", backgroundColor: "#111" }}>
        <h2 style={{ color: "#FF6B00", textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>Nuestros Servicios</h2>
        <div style={{ backgroundColor: "#1a0a00", border: "1px solid #FF6B00", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
          </div>
          <div style={{ backgroundColor: "#1a0a00", border: "1px solid #FF6B00", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔥</div>
            <h3 style={{ color: "#FF6B00" }}>Asado al Barril</h3>
            <p style={{ color: "#ccc", lineHeight: "1.7" }}>100g de bondiola, chicharron y costillas, con acompañantes incluidos, Cocinados lentamente para lograr el sabor perfecto.</p>
            <p style={{ color: "#FF6B00", fontSize: "1.8rem", fontWeight: "bold", marginTop: "1rem" }}>$45.000</p>
            <p style={{ color: "#888", fontSize: "0.9rem" }}>por persona</p>
          </div>
          <div style={{ backgroundColor: "#1a0a00", border: "1px solid #FF6B00", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌮</div>
            <h3 style={{ color: "#FF6B00" }}>Tacos de Birria</h3>
            <p style={{ color: "#ccc", lineHeight: "1.7" }}>Tacos tradicionales de birria con carne marinada de res, guacamole, pico de gallo y piña.</p>
            <p style={{ color: "#FF6B00", fontSize: "1.8rem", fontWeight: "bold", marginTop: "1rem" }}>$35.000</p>
            <p style={{ color: "#888", fontSize: "0.9rem" }}>por persona</p>
          </div>
          <div style={{ backgroundColor: "#1a0a00", border: "1px solid #FF6B00", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
            <h3 style={{ color: "#FF6B00" }}>Eventos y Domicilios</h3>
            <p style={{ color: "#ccc", lineHeight: "1.7" }}>Llevamos el asado a tu casa, empresa o evento. Cotiza sin compromiso para El Retiro y alrededores.</p>
            <p style={{ color: "#888", fontSize: "0.9rem" }}>por evento</p>
          </div>
          <div style={{ backgroundColor: "#1a0a00", border: "1px solid #FF6B00", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
           <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>Chicharron</div>
            <h3 style={{ color: "#FF6B00" }}>Chicharron Ahumado</h3>
            <p style={{ color: "#ccc", lineHeight: "1.7" }}>300g de chicharron con acompañantes incluidos. Cocinado lentamente para lograr el sabor perfecto.</p>
            <p style={{ color: "#FF6B00", fontSize: "1.8rem", fontWeight: "bold", marginTop: "1rem" }}>$25.000</p>
            <p style={{ color: "#888", fontSize: "0.9rem" }}>por persona</p>
        </div>
            <div style={{ backgroundColor: "#1a0a00", border: "1px solid #FF6B00", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>Chorizo</div>
            <h3 style={{ color: "#FF6B00" }}>Chorizo Artesanal</h3>
            <p style={{ color: "#ccc", lineHeight: "1.7" }}>Chorizo artesanal con acompañantes incluidos. Cocinado lentamente para lograr el sabor perfecto.</p>
            <p style={{ color: "#FF6B00", fontSize: "1.8rem", fontWeight: "bold", marginTop: "1rem" }}>$15.000</p>
            <p style={{ color: "#888", fontSize: "0.9rem" }}>por persona</p>
        </div> 
           <div style={{ backgroundColor: "#1a0a00", border: "1px solid #FF6B00", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
           <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>Picada</div>
           <h3 style={{ color: "#FF6B00" }}>Picada para Dos</h3>
           <p style={{ color: "#ccc", lineHeight: "1.7" }}>200g de chicharron, bondiola y 3 costillas, con acompañantes incluidos. Cocinados lentamente para lograr el sabor perfecto.</p>
           <p style={{ color: "#FF6B00", fontSize: "1.8rem", fontWeight: "bold", marginTop: "1rem" }}>$70.000</p>
           <p style={{ color: "#888", fontSize: "0.9rem" }}>para 2 personas</p>
        </div>
      </section>

      <section id="contacto" style={{ padding: "4rem 3rem", textAlign: "center" }}>
        <h2 style={{ color: "#FF6B00", fontSize: "2rem", marginBottom: "1rem" }}>Contactanos</h2>
        <p style={{ color: "#ccc", marginBottom: "2rem" }}>Estamos listos para hacer tu evento inolvidable</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <a href="https://wa.me/573245872010" target="_blank" style={{ padding: "1rem 2rem", backgroundColor: "#25D366", color: "white", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>
            WhatsApp
          </a>
          <a href="mailto:jdavidquinteroh@gmail.com" style={{ padding: "1rem 2rem", backgroundColor: "#FF6B00", color: "white", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>
            Correo
          </a>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #FF6B00", padding: "1.5rem", textAlign: "center", color: "#666" }}>
        <p>2026 Barril And Grill - El Retiro, Antioquia - Marinados - Ahumados - Calidad</p>
      </footer>

    </div>
  )
}

export default App