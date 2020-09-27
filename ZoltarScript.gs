function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('ZoltarScript')
      .addItem('Preparar hoja', 'Setup')
      .addSeparator()
      .addItem('Generar sesiones', 'Generar_Sesiones')
      .addSeparator()
      .addItem('Sincronizar calendario', 'Sincronizar_Calendario')
      .addToUi();
}

function Setup(){
  
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  
  if(hoja.getLastRow()>0){
    hoja.getRange(1, 1, hoja.getLastRow(), hoja.getLastColumn()).clear();
  }
  
  var cabeceras = ["Calendario", "Fecha inicio", "Fecha fin", "Asignatura/Módulo", "Día", "Hora", "Días festivos", "", "Nº sesión", "Día", "Fecha", "Hora", "Desarrollo", "Comentarios"];
  
  hoja.getRange(1, 1, 1, 14).setValues([cabeceras]).setFontWeight("bold");

}

function Generar_Sesiones() {
  
  var sesion = 0;
  
  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  
  var diasFestivos = hoja.getRange(2, 7, hoja.getRange(2, 7, hoja.getLastRow()).getValues().filter(String).length).getValues();
  
  var fechaActual, fechaFinal;
  
  var diasFestivosArray = [];
  
  var dias = hoja.getRange(2, 5, hoja.getRange(2, 5, hoja.getLastRow()).getValues().filter(String).length).getValues();
  
  var diasArray = [];
  
  for(var i = 0; i < dias.length; i++){
    diasArray[i] = dias[i][0];
  }
  
  var diasArrayFiltrado = [];
  
  var horas = hoja.getRange(2, 6, hoja.getRange(2, 6, hoja.getLastRow()).getValues().filter(String).length).getValues();
  
  var horasArray = [];
  
  for(var i = 0; i < horas.length; i++){
    horasArray[i] = horas[i][0];
  }
  
  for(var i = 0; i < diasFestivos.length; i++){
    diasFestivosArray[i] = diasFestivos[i][0].getTime();
  }

  fechaActual = hoja.getRange(2,2).getValue();
  
  fechaFinal = hoja.getRange(2,3).getValue();
  
  var sesionesFechadas = [];

  while(fechaActual.getTime() <= fechaFinal.getTime()){
    
    if(diasFestivosArray.indexOf(fechaActual.getTime()) == -1){
      //Si es lunes
      if(fechaActual.getDay() == 1){
        diasArrayFiltrado = [...diasArray];
        while(diasArrayFiltrado.indexOf("Lunes") != -1){
          sesion++;
          sesionesFechadas.push([sesion, "Lunes", fechaActual, horasArray[diasArrayFiltrado.indexOf("Lunes")]]);
          diasArrayFiltrado[diasArrayFiltrado.indexOf("Lunes")] = "[]";
        }
      }
      //Si es martes
      else if(fechaActual.getDay() == 2){
        diasArrayFiltrado = [...diasArray];
        while(diasArrayFiltrado.indexOf("Martes") != -1){
          sesion++;
          sesionesFechadas.push([sesion, "Martes", fechaActual, horasArray[diasArrayFiltrado.indexOf("Martes")]]);
          diasArrayFiltrado[diasArrayFiltrado.indexOf("Martes")] = "[]";
        }
      }
      //Si es miércoles
      else if(fechaActual.getDay() == 3){
        diasArrayFiltrado = [...diasArray];
        while(diasArrayFiltrado.indexOf("Miércoles") != -1){
          sesion++;
          sesionesFechadas.push([sesion, "Miércoles", fechaActual, horasArray[diasArrayFiltrado.indexOf("Miércoles")]]);
          diasArrayFiltrado[diasArrayFiltrado.indexOf("Miércoles")] = "[]";
        }
      }
      //Si es jueves
      else if(fechaActual.getDay() == 4){
        diasArrayFiltrado = [...diasArray];
        while(diasArrayFiltrado.indexOf("Jueves") != -1){
          sesion++;
          sesionesFechadas.push([sesion, "Jueves", fechaActual, horasArray[diasArrayFiltrado.indexOf("Jueves")]]);
          diasArrayFiltrado[diasArrayFiltrado.indexOf("Jueves")] = "[]";
        }
      }
      //Si es viernes
      else if(fechaActual.getDay() == 5){
        diasArrayFiltrado = [...diasArray];
        while(diasArrayFiltrado.indexOf("Viernes") != -1){
          sesion++;
          sesionesFechadas.push([sesion, "Viernes", fechaActual, horasArray[diasArrayFiltrado.indexOf("Viernes")]]);
          diasArrayFiltrado[diasArrayFiltrado.indexOf("Viernes")] = "[]";
        }
      }
      //Si es sábado
      else if(fechaActual.getDay() == 6){
        diasArrayFiltrado = [...diasArray];
        while(diasArrayFiltrado.indexOf("Sábado") != -1){
          sesion++;
          sesionesFechadas.push([sesion, "Sábado", fechaActual, horasArray[diasArrayFiltrado.indexOf("Sábado")]]);
          diasArrayFiltrado[diasArrayFiltrado.indexOf("Sábado")] = "[]";
        }
      }
      //Si es domingo
      else if(fechaActual.getDay() == 0){
        diasArrayFiltrado = [...diasArray];
        while(diasArrayFiltrado.indexOf("Domingo") != -1){
          sesion++;
          sesionesFechadas.push([sesion, "Domingo", fechaActual, horasArray[diasArrayFiltrado.indexOf("Domingo")]]);
          diasArrayFiltrado[diasArrayFiltrado.indexOf("Domingo")] = "[]";
        }
      }
    }
    fechaActual = addDays(fechaActual,1);
  }
  hoja.getRange(2, 9, sesionesFechadas.length, 4).setValues(sesionesFechadas);
  hoja.getRange(2, 12, hoja.getLastRow()).setNumberFormat("hh:mm");
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function Sincronizar_Calendario(){

  var hoja = SpreadsheetApp.getActive().getActiveSheet();
  
  var nombreCalendario = hoja.getRange(2, 1).getValue();
  
  var asignatura = hoja.getRange(2, 4).getValue();
  
  var calendario = CalendarApp.getCalendarsByName(nombreCalendario);
  
  if(calendario.length == 0){
    CalendarApp.createCalendar(nombreCalendario);
  }
  
  var calendario = CalendarApp.getCalendarsByName(nombreCalendario)[0];
  
  var sesiones = hoja.getRange(2, 11, hoja.getLastRow()-1, 3).getValues();
  
  for(var i = 0; i<sesiones.length; i++){
    var fecha = sesiones[i][0];
    var hora = sesiones[i][1];
    var descripcion = sesiones[i][2];
    
    var fecha = new Date(fecha);
    var hora = new Date(hora);
    
    var fechaInicio = fecha.setHours(hora.getHours(),hora.getMinutes()-24);
    
    var fechaFinal = fecha.setHours(hora.getHours()+1,hora.getMinutes()-24);
    
    var eventos = calendario.getEvents(new Date(fechaInicio), new Date(fechaFinal));
    
    //Si ya existe el evento, solamente actualizamos la descripción
    if(eventos.length == 1 && eventos[0].getTitle() == asignatura){ 
      eventos[0].setDescription(descripcion);
    } else {
      calendario.createEvent(asignatura,new Date(fechaInicio),new Date(fechaFinal), {description: descripcion});
    }
  
  }

}
