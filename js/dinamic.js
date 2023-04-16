// script llenado dinamico
// script accordion
function showDetails(lugar) {
    var lugarNombre, lugarDescripcion, lugarDisponibilidad;
    switch (lugar) {
      case 'hunters':
        lugarNombre = 'salon recreacional hunters';
        lugarDescripcion = 'Descripción de la Universidad';
        lugarDisponibilidad = 'Disponible';
        break;
      case 'cafeteria':
        lugarNombre = 'cafeteria';
        lugarDescripcion = 'Descripción de los baños';
        lugarDisponibilidad = 'Disponible';
        break;
      case '8avo':
        lugarNombre = 'cafeteria 8avo piso';
        lugarDescripcion = 'lugar para que los campers usen los microondas';
        lugarDisponibilidad = 'disponible en descansos';
        break;
      case 'baños':
        lugarNombre = 'baños';
        lugarDescripcion = 'lugares para hacer uso de sus necesidades';
        lugarDisponibilidad = 'Disponible';
        break;
    }
    
    var html = '<table>' +
             '<tr><td>Nombre:</td><td>' + lugarNombre + '</td></tr>' +
             '<tr><td>Descripción:</td><td>' + lugarDescripcion + '</td></tr>' +
             '<tr><td>Disponibilidad:</td><td>' + lugarDisponibilidad + '</td></tr>' +
             '</table>';

  swal({
    title: lugarNombre,
    html: html,
    confirmButtonText: 'Cerrar',
    allowOutsideClick: true,
    showCloseButton: true,
    padding: '1.5rem',
    background: '#f7f7f7',
    customClass: {
      container: 'my-swal',
      title: 'my-swal-title',
      htmlContainer: 'my-swal-html',
      confirmButton: 'my-swal-btn',
      closeButton: 'my-swal-btn'
    }
  });
}