function Sidebar() {
  return (
    <aside style={{
      width: '200px',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      fontSize: '1.1rem'
    }}>
      <nav>
       <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
         <li style={{ marginBottom: '12px' }}>
           <a href="#" style={{ textDecoration: 'none', color: '#007BFF' }}>Головна</a>
         </li>
         <li style={{ marginBottom: '12px' }}>
           <a href="#" style={{ textDecoration: 'none', color: '#007BFF' }}>Про додаток</a>
         </li>
         <li>
           <a href="#" style={{ textDecoration: 'none', color: '#007BFF' }}>Контакти</a>
         </li>
       </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
