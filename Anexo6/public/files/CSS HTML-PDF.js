//Importar libreria para generar pdfs a treves de plantillas
const pdf = require('html-pdf');
const generarPDF = () => {
    //Se va a guadar el html
    const contenido = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <style>
    
      * {
        font-family: Arial, sans-serif;
      }

      .container {
        display: flex;
        width: 100%;
      }



      .column {
        height: auto;
        flex: 1;
      }
      
      .column-1 {
        background-color: #3B3838;
        color: white;
        border-top: 1px solid black;
        border-bottom: 0px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        padding-top: 10px;
        padding-left: 15px;
        padding-bottom: 10px;
        padding-right: 10px;
        font-weight: 600;
        font-size: 12px;
      }
      
      .column-2 {
        background-color: #D9D9D9;
        text-align: center;
        font-size: 9px; 
        padding-left: 20px;
        padding-right: 20px;
        border: 1px solid black;
        font-weight: 400;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .tituloysub{
        font-size: 10px; 
        text-align: center; 
        line-height: 0px;
      }

      .segundatablablanca{
        border-color: #A6A6A6; 
        font-size: 8px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #FFFFFF; 
      }

      .segundatablablanca2{
        border-color: #A6A6A6; 
        font-size: 8px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
      }
       
      .seccionIyII {
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }



      .fondbordseccI{
        background-color: #FFFFFF; 
        border-color: #A6A6A6;
      }

      .trestitulosSeccionII{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .titulosseccionII{
        width: 10%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

        .tresopciones{
          width: 10%; 
          background-color: #ffffff; 
          border-color: #A6A6A6; 
          padding-left: 0px; 
          padding-right: 0px; 
          padding-top: 0px;
        }
        

        .contenedortresopciones{
          height: 100%; 
          display: flex; 
          justify-content: 
          space-between; 
          align-items: center;
        }



      .primeraopcion{
          width: 100%; 
          background-color: white; 
          height: 33.33%; 
          border-bottom: 1px solid #A6A6A6; 
          padding-bottom: 0px;
      }

      .segundaopcion{
        width: 100%; 
        background-color: white; 
        height: 33.33%; 
        border-bottom: 1px solid #A6A6A6; 
        padding-top: 0px; 
        padding-bottom: 4px;
      }

     

      .terceraopcion{
        width: 100%; 
        background-color: white; 
        height: 33.33%; 
        padding-top: 0px; 
        padding-bottom: 0px; 
        margin-bottom: 0px; 
      }

      .margendospx{
        margin-left: 2px;
      }

      .margendospxsize{
        margin-left: 2px;
        font-size: 6px;
      }

      .paddingtrecepx{
        padding-left: 13px;
      }

      .paddingcincopx{
        padding-left: 5px;
      }

      .diseñocolumnahojados{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .bodytablahojauno{
        width: 100%; 
        background-color: #ffffff; 
        border-color: #A6A6A6;
      }

      .espaciotabladearriba{
        margin-top: 12px;
      }

      .primerparrafo{
        font-size: 5.5px; 
        font-weight: 600; 
        text-align: center; 
        line-height: 8px; 
        padding-top: 35px;
      }

  

      .tituloseccionII{
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }

      .seccionIIsubtitulos3{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .temasseccionII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .filaseccionII{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .casillaenblancoseccionIII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px;
      }

      .contenedortresopcionesseccionIII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        padding-top: 0px;
      }

      .tresopcionesseccionIII{
        height: 100%; 
        display: flex; 
        justify-content: space-between; 
        align-items: center;
      }

      .casillascirculos{
        width: 10%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .tituloseccionIV{
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }

      .opcionesseccionIV{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .filasseccionIV{
        font-size: 8px; 
        text-align: center; 
        line-height: 4px;
      }

      .casillascirculostexto{
        width: 70%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: start; 
        line-height: 8px; 
        padding-left: 5px;
      }

      .firmasynombre{
        width: 50%; 
        height: 45px; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .filafirmasynombre{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .parrafodos{
        font-size: 8px; 
        font-weight: 400; 
        text-align: justify; 
        line-height: 10px;
      }

      .interlineadodiezpx{
        line-height: 10px;
      }

      .interlineadoochopx{
        line-height: 8px;
      }

      .container2 {
        width: 100%;
        overflow: auto;
      }

      .seccion1{
        float: left;
        width: 49%; 
      }
      .seccion2{
        float: right;
        width: 49%;
        
        text-align: center;
      }
      
      table {
        border-collapse: collapse;
        width: 100%;
      }
  
      th {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
      }

      td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
        height: 0px;
      }
  
      th {
        background-color: #ddd;
      }
  
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      
      .container3 {
        position: absolute;
        display: flex;
        height: 80px; /* altura del 100% del viewport */
        width: 100%; /* ancho del 100% del viewport */

      }
      
      .tablacompleta {
        page-break-inside: avoid;
      }

      .seccion1columnllenas{
        text-align: center; 
        line-height: 7px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6;  
        font-size: 7px; 
        padding-left: 0; 
        padding-right: 0; 
        padding-top: 4;
      }

      .seccion2columntitulos{
        text-align: center; 
        line-height:8px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 7px; 
        padding: 2px 2px 0 2px;
      }

      .seccion3columnlleno{
        text-align: center; 
        line-height: 7px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 7px;  
        padding: 2px 0 2px 0;
      }

      .seccion4divisiones{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .seccion4titulos{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center;
        line-height: 8px;
      }

      .seccion4columnvacias{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px;
      }

      .seccion4columnopciones{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        padding-top: 0px;
      }

      .seccion6columntitulos{
        text-align: center; 
        line-height: 7px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 7px; 
        padding: 2px 0 2px 0;
      }

      </style>
    


      <title>Document</title>
    </head>

    


  <body >

  

    <div> <!----------------------------------Hoja 1 ----------------------->

    <div class="container">
        <div class="column column-1">gob<span style="color: red;">.</span>mx </div>
        <div class="column column-2"> Agencia Nacional de Seguridad Industrial y de Protección al Medio Ambiente del Sector Hidrocarburos
        Unidad de Gestión Industrial</div>
    </div>
 
    <div class="container">
        <h2 class="tituloysub" style=" padding-top: 5px; font-weight: 400; " >Anexo VI</h2>
    
        <p class="tituloysub" style="  padding-top: 0px; padding-bottom: 3px; line-height: 11px;" >Formato reporte anual de cumplimiento del PPCIEM para instalaciones nuevas</p>
        </div>
    
    <div class="container2 ">
       <div class="seccion1"> 
       <table class="tablacompleta">
       <tr>
         <td class="segundatablablanca2">Homoclave del formato</td>
       </tr>
       <tr>
         <td class="segundatablablanca">FF-ASEA-034</td>
       </tr>
       <tr>
         <td class="segundatablablanca2" >Lugar de elaboración</td>
       </tr>
       <tr>
         <td class="segundatablablanca"> Hola </td>
       </tr>
     </table>
       </div>

       <div class="seccion2"> 
       <table class="tablacompleta">
       <tr>
         <td class="segundatablablanca2" >Fecha de publicación del formato en el DOF</th>
       </tr>
       <tr>
         <td class="segundatablablanca"> 06 11 2018</td>
       </tr>
       <tr>
         <td class="segundatablablanca2" >Fecha de elaboración</td>
       </tr>
       <tr ">
         <td class="segundatablablanca">DD MM AAAA</td>
       </tr>
     </table>
    </div>



    <div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="4" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección I. Datos generales</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 20%;" class="seccion1columnllenas" >Nombre de la instalación</td>
                <td style="width: 30%;" class="seccion1columnllenas" ></td>
                <td style="width: 20%;" class="seccion1columnllenas" >Ubicación de la instalación</td>
                <td style="width: 30%;" class="seccion1columnllenas" ></td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 20%;" class="seccion1columnllenas" >CURR</td>
                <td style="width: 30%;" class="seccion1columnllenas" ></td>
                <td style="width: 20%;" class="seccion1columnllenas" >Año del reporte</td>
                <td style="width: 30%;" class="seccion1columnllenas" ></td>
            </tr>
            
        </table>
    </div>
</div>
    

<div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="10" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección II. Mejora continua</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 13%;" class="seccion2columntitulos" >Cuantificación de emisiones de metano del Año base</td>
                <td style="width: 13%;" class="seccion2columntitulos"></td>
                <td style="width: 13%;" class="seccion2columntitulos">Variación de las emisiones de metano con respectoal Año base (g/kg)</td>
                <td style="width: 13%;" class="seccion2columntitulos"></td>
                <td style="width: 13%;" class="seccion2columntitulos">En su caso, justificación técnica del incremento de las emisiones de metano</td>
                <td style="width: 35%;" class="seccion2columntitulos"></td>
            </tr>

        </table>
    </div>
</div>

    
  <div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="12" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección III. Detalle de informe trimestral</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 8%;"  class="seccion3columnlleno" >Id del equipo o Componente</td>
                <td style="width: 8%; " class="seccion3columnlleno">Tipo de equipo o Componente</td>
                <td style="width: 7%; " class="seccion3columnlleno">Emisiones de metano del Año base (g/k g/t)</td>
                <td style="width: 8%; " class="seccion3columnlleno">Variación de las emisiones de metano con respecto al Año base (g/k g/t)</td>
                <td style="width: 8%; " class="seccion3columnlleno">Acciones programadas para el año calendario del reporte</td>
                <td style="width: 8%; " class="seccion3columnlleno">Reducción de emisiones de metano estimadas por la acción(g/k g/t)</td>
                <td style="width: 11%;" class="seccion3columnlleno">¿Se realizó la accion programada?</td>
                <td style="width: 8%; " class="seccion3columnlleno">Reducción de emisiones de metano por la accion(g/k g/t)</td>
                <td style="width: 8%; " class="seccion3columnlleno">En su caso, justificación tecnica de no realización de la acción</td>
                <td style="width: 8%; " class="seccion3columnlleno">En su caso, fecha en la que se implementará la acción programada no realizada</td>
                <td style="width: 9%; " class="seccion3columnlleno">Acciones programadas para el siguiente año de reporte</td>
                <td style="width: 9%; " class="seccion3columnlleno">Fecha en la que se implementarán las acciones programadas para el siguiente año de reporte</td>
            </tr >

            <tr style="width: 100%; ">
                <td style="width: 8%; " class="seccion3columnlleno" ></td>
                <td style="width: 8%; " class="seccion3columnlleno" ></td>
                <td style="width: 7%; " class="seccion3columnlleno" ></td>
                <td style="width: 8%; " class="seccion3columnlleno" ></td>
                <td style="width: 8%; " class="seccion3columnlleno" ></td>
                <td style="width: 8%; " class="seccion3columnlleno" ></td>
                <td style="width: 11%;" class="seccion3columnlleno" >
                <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
                  <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
                    <label class=""><input type="radio" style=" margin-right: 2px;" name="estado">Si</label>
                  </div>
                  <div style="width: 50%; padding-top: 6px;">
                    <label class=""><input type="radio" style=" margin-right: 2px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="width: 8%;" class="seccion3columnlleno" ></td>
                <td style="width: 8%;" class="seccion3columnlleno" ></td>
                <td style="width: 8%;" class="seccion3columnlleno" ></td>
                <td style="width: 9%;" class="seccion3columnlleno" ></td>
                <td style="width: 9%;" class="seccion3columnlleno" ></td>
            </tr>

            <tr style="width: 100%; ">
            <td style="width: 8%; " class="seccion3columnlleno" ></td>
            <td style="width: 8%; " class="seccion3columnlleno" ></td>
            <td style="width: 7%; " class="seccion3columnlleno" ></td>
            <td style="width: 8%; " class="seccion3columnlleno" ></td>
            <td style="width: 8%; " class="seccion3columnlleno" ></td>
            <td style="width: 8%; " class="seccion3columnlleno" ></td>
            <td style="width: 11%;" class="seccion3columnlleno" >
            <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
              <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
                <label class=""><input type="radio" style=" margin-right: 2px;" name="estado">Si</label>
              </div>
              <div style="width: 50%; padding-top: 6px;">
                <label class=""><input type="radio" style=" margin-right: 2px;" name="estado">No</label>
              </div>
            </div>
            </td>
            <td style="width: 8%;" class="seccion3columnlleno" ></td>
            <td style="width: 8%;" class="seccion3columnlleno" ></td>
            <td style="width: 8%;" class="seccion3columnlleno" ></td>
            <td style="width: 9%;" class="seccion3columnlleno" ></td>
            <td style="width: 9%;" class="seccion3columnlleno" ></td>
        </tr>

        <tr style="width: 100%; ">
        <td style="width: 8%; " class="seccion3columnlleno" ></td>
        <td style="width: 8%; " class="seccion3columnlleno" ></td>
        <td style="width: 7%; " class="seccion3columnlleno" ></td>
        <td style="width: 8%; " class="seccion3columnlleno" ></td>
        <td style="width: 8%; " class="seccion3columnlleno" ></td>
        <td style="width: 8%; " class="seccion3columnlleno" ></td>
        <td style="width: 11%;" class="seccion3columnlleno" >
        <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
          <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
            <label class=""><input type="radio" style=" margin-right: 2px;" name="estado">Si</label>
          </div>
          <div style="width: 50%; padding-top: 6px;">
            <label class=""><input type="radio" style=" margin-right: 2px;" name="estado">No</label>
          </div>
        </div>
        </td>
        <td style="width: 8%;" class="seccion3columnlleno" ></td>
        <td style="width: 8%;" class="seccion3columnlleno" ></td>
        <td style="width: 8%;" class="seccion3columnlleno" ></td>
        <td style="width: 9%;" class="seccion3columnlleno" ></td>
        <td style="width: 9%;" class="seccion3columnlleno" ></td>
    </tr>
        </table>
    </div>
</div>

<div class="container">
  <p class="primerparrafo" >De conformidad con el artículo 4 de la Ley Federal de Procedimiento Administrativo, los formatos para solicitar trámites y servicios deberán publicarse en el Diario Oficial de la
  Federación (DOF).</p>
</div>

   
   
  
  </div> <!----------------------------------Hoja 1 Fin ----------------------->

  <div> <!----------------------------------Hoja 2  -------------------------->


  <table style="margin-top: 12px; page-break-inside: avoid; ">
    <thead >
      <tr>
        <td colspan="9" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6; ">Sección IV. Operaciones en pozos fuera del Año base</td>
        
      </tr>
      <tr style="font-size: 8px; text-align: center; line-height: 4px;">
        <td colspan="7" class="seccion4divisiones">Identificación</td>
        <td             class="seccion4divisiones">Clasificación</td>
        <td             class="seccion4divisiones">Cuantificación</td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
      <tr style="font-size: 7px; text-align: center; line-height: 6px;  ">
        <td style="width: 10%;" class="seccion4titulos">Id del pozo</td>
        <td style="width: 10%;" class="seccion4titulos">Tipo de pozo</td>
        <td style="width: 10%;" class="seccion4titulos">Operaciones</td>
        <td style="width: 10%;" class="seccion4titulos">Fecha de inicio de la operación</td>
        <td style="width: 10%;" class="seccion4titulos">Estado del pozo</td>
        <td style="width: 10%;" class="seccion4titulos">Condiciones operativas del pozo</td>
        <td style="width: 10%;" class="seccion4titulos">Elementos utilizados en la identificación</td>
        <td style="width: 10%;" class="seccion4titulos">Tipo de emisión de metano</td>
        <td style="width: 10%;" class="seccion4titulos">Emisiones de metano (g/kg/t)</td>
      </tr>

      
      <tr style="font-size: 7px; text-align: center; line-height: 6px;  ">    <!-- Fila2 -->
        <td style="width: 10%;" class="seccion4columnvacias"> </td>
        <td style="width: 10%;" class="seccion4columnvacias"> </td>
        <td style="width: 10%;" class="seccion4columnvacias"> </td>
        <td style="width: 10%;" class="seccion4columnvacias"> </td>

        <td style="width: 10%;" class="seccion4columnopciones">
        <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
          <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
            <label style="margin-left: 2px;  "><input type="radio"  name="estado">En <span style="padding-left: 13px;"> operación </span></label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Fuera de <span style="padding-left: 13px;"> Operación </span></label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Por <span style="padding-left: 13px;"> incorporar</span></label>
          </div>
        </div>
      </td>

        <td style="width: 10%;" class="seccion4columnvacias" > </td>

        <td style="width: 10%;" class="seccion4columnopciones">
        <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
          <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
            <label style="margin-left: 2px;  "><input type="radio"  name="estado">Planos</label>
          </div>
          
          <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
          <label style="margin-left: 2px;"><input type="radio" name="estado">Revisión<span style="padding-left: 13px;"> en sitio </span></label>
        </div>

          <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Otros <span style="padding-left: 13px;"> especificar</span></label>
          </div>
        </div>
      </td>

        
      <td style="width: 10%;" class="seccion4columnopciones">
        <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
          <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
            <label style="margin-left: 2px; font-size: 6px; "><input type="radio"  name="estado">Destrucción</label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px; ">
            <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span style=" padding-left: 13px; "> por Fuga</span></label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; font-size: 6px; ">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Venteo de<span style="padding-left: 13px;"> Hidrocarburos</span></label>
          </div>
        </div>
      </td>


        <td style="width: 10%;" class="seccion4columnvacias"> </td>
      </tr>
      

      <tr style="font-size: 7px; text-align: center; line-height: 6px;  ">    <!-- Fila3 -->
        <td style="width: 10%;" class="seccion4columnvacias"> </td>
        <td style="width: 10%;" class="seccion4columnvacias"> </td>
        <td style="width: 10%;" class="seccion4columnvacias"> </td>
        <td style="width: 10%;" class="seccion4columnvacias"> </td>

        <td style="width: 10%;" class="seccion4columnopciones">
        <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
          <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
            <label style="margin-left: 2px;  "><input type="radio"  name="estado">En <span style="padding-left: 13px;"> operación </span></label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Fuera de <span style="padding-left: 13px;"> Operación </span></label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Por <span style="padding-left: 13px;"> incorporar</span></label>
          </div>
        </div>
      </td>

        <td style="width: 10%;" class="seccion4columnvacias" > </td>

        <td style="width: 10%;" class="seccion4columnopciones">
        <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
          <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
            <label style="margin-left: 2px;  "><input type="radio"  name="estado">Planos</label>
          </div>
          
          <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
          <label style="margin-left: 2px;"><input type="radio" name="estado">Revisión<span style="padding-left: 13px;"> en sitio </span></label>
        </div>

          <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Otros <span style="padding-left: 13px;"> especificar</span></label>
          </div>
        </div>
      </td>

        
      <td style="width: 10%;" class="seccion4columnopciones">
        <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
          <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
            <label style="margin-left: 2px; font-size: 6px; "><input type="radio"  name="estado">Destrucción</label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px; ">
            <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span style=" padding-left: 13px; "> por Fuga</span></label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; font-size: 6px; ">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Venteo de<span style="padding-left: 13px;"> Hidrocarburos</span></label>
          </div>
        </div>
      </td>


        <td style="width: 10%;" class="seccion4columnvacias"> </td>
      </tr>


      <tr style="font-size: 7px; text-align: center; line-height: 6px;  ">    <!-- Fila4 -->
        <td style="width: 10%;" class="seccion4columnvacias"> </td>
        <td style="width: 10%;" class="seccion4columnvacias"> </td>
        <td style="width: 10%;" class="seccion4columnvacias"> </td>
        <td style="width: 10%;" class="seccion4columnvacias"> </td>

        <td style="width: 10%;" class="seccion4columnopciones">
        <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
          <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
            <label style="margin-left: 2px;  "><input type="radio"  name="estado">En <span style="padding-left: 13px;"> operación </span></label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Fuera de <span style="padding-left: 13px;"> Operación </span></label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Por <span style="padding-left: 13px;"> incorporar</span></label>
          </div>
        </div>
      </td>

        <td style="width: 10%;" class="seccion4columnvacias" > </td>

        <td style="width: 10%;" class="seccion4columnopciones">
        <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
          <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
            <label style="margin-left: 2px;  "><input type="radio"  name="estado">Planos</label>
          </div>
          
          <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
          <label style="margin-left: 2px;"><input type="radio" name="estado">Revisión<span style="padding-left: 13px;"> en sitio </span></label>
        </div>

          <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Otros <span style="padding-left: 13px;"> especificar</span></label>
          </div>
        </div>
      </td>

        
      <td style="width: 10%;" class="seccion4columnopciones">
        <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
          <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
            <label style="margin-left: 2px; font-size: 6px; "><input type="radio"  name="estado">Destrucción</label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px; ">
            <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span style=" padding-left: 13px; "> por Fuga</span></label>
          </div>
          <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; font-size: 6px; ">
            <label style="margin-left: 2px;"><input type="radio" name="estado">Venteo de<span style="padding-left: 13px;"> Hidrocarburos</span></label>
          </div>
        </div>
      </td>


        <td style="width: 10%;" class="seccion4columnvacias"> </td>
      </tr>


      

      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>



  

  
  <table style="margin-top: 12px; page-break-inside: avoid; ">
  <thead >
    <tr>
      <td colspan="10" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6; ">Sección V. Diagnóstico de los equipos y/o Componentes fuera del PPCIEM</td>
      
    </tr>
    <tr style="font-size: 8px; text-align: center; line-height: 4px;">
      <td colspan="8" class="seccion4divisiones" >Identificación</td>
      <td             class="seccion4divisiones" >Clasificación</td>
      <td             class="seccion4divisiones" >Cuantificación</td>
    </tr>
  </thead>
  <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
    <tr style="font-size: 7px; text-align: center; line-height: 6px;  ">
      <td style="width: 10%;" class="seccion4titulos">Id del pozo, equipo o Componente</td>
      <td style="width: 10%;" class="seccion4titulos">Tipo del pozo, equipo o Componente</td>
      <td style="width: 10%;" class="seccion4titulos">Operaciones del pozo</td>
      <td style="width: 10%;" class="seccion4titulos">Operaciones asociadas al equipo o Componente</td>
      <td style="width: 10%;" class="seccion4titulos">Fecha de identificación (dd/mm/aaaa)</td>
      <td style="width: 10%;" class="seccion4titulos">Estado del pozo, equipo o Componente</td>
      <td style="width: 10%;" class="seccion4titulos">Condiciones operativas del pozo, equipo o COmponente</td>
      <td style="width: 10%;" class="seccion4titulos">Elementos utilizados en la identificación</td>
      <td style="width: 10%;" class="seccion4titulos">Tipo de emisión de metano</td>
      <td style="width: 10%;" class="seccion4titulos">Emisiones de metano (g/kg/t)</td>
    </tr>

    
    <tr style="font-size: 7px; text-align: center; line-height: 6px;  ">    <!-- Fila2 -->
      <td style="width: 10%;" class="seccion4columnvacias"> </td>  
      <td style="width: 10%;" class="seccion4columnvacias"> </td>
      <td style="width: 10%;" class="seccion4columnvacias"> </td>
      <td style="width: 10%;" class="seccion4columnvacias"> </td>
      <td style="width: 10%;" class="seccion4columnvacias"> </td>

      <td style="width: 10%;" class="seccion4columnopciones">
      <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
        <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
          <label style="margin-left: 2px;  "><input type="radio"  name="estado">En <span style="padding-left: 13px;"> operación </span></label>
        </div>
        <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
          <label style="margin-left: 2px;"><input type="radio" name="estado">Fuera de <span style="padding-left: 13px;"> Operación </span></label>
        </div>
        <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
          <label style="margin-left: 2px;"><input type="radio" name="estado">Por <span style="padding-left: 13px;"> incorporar</span></label>
        </div>
      </div>
    </td>

      <td style="width: 10%;" class="seccion4columnvacias"> </td>

      <td style="width: 10%;" class="seccion4columnopciones">
      <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
        <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
          <label style="margin-left: 2px;  "><input type="radio"  name="estado">Planos</label>
        </div>
        
        <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
        <label style="margin-left: 2px;"><input type="radio" name="estado">Revisión<span style="padding-left: 13px;"> en sitio </span></label>
      </div>

        <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
          <label style="margin-left: 2px;"><input type="radio" name="estado">Otros <span style="padding-left: 13px;"> especidicar</span></label>
        </div>
      </div>
    </td>

      
    <td style="width: 10%;" class="seccion4columnopciones">
      <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
        <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
          <label style="margin-left: 2px; font-size: 6px; "><input type="radio"  name="estado">Destrucción</label>
        </div>
        <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px; ">
          <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span style=" padding-left: 13px; "> por Fuga</span></label>
        </div>
        <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; font-size: 6px; ">
          <label style="margin-left: 2px;"><input type="radio" name="estado">Venteo de<span style="padding-left: 13px;"> Hidrocarburos</span></label>
        </div>
      </div>
    </td>


      <td style="width: 10%;" class="seccion4columnvacias"> </td>
    </tr>
    


    <tr style="font-size: 7px; text-align: center; line-height: 6px;  ">    <!-- Fila3 -->
    <td style="width: 10%;" class="seccion4columnvacias"> </td>  
    <td style="width: 10%;" class="seccion4columnvacias"> </td>
    <td style="width: 10%;" class="seccion4columnvacias"> </td>
    <td style="width: 10%;" class="seccion4columnvacias"> </td>
    <td style="width: 10%;" class="seccion4columnvacias"> </td>

    <td style="width: 10%;" class="seccion4columnopciones">
    <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
      <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
        <label style="margin-left: 2px;  "><input type="radio"  name="estado">En <span style="padding-left: 13px;"> operación </span></label>
      </div>
      <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
        <label style="margin-left: 2px;"><input type="radio" name="estado">Fuera de <span style="padding-left: 13px;"> Operación </span></label>
      </div>
      <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
        <label style="margin-left: 2px;"><input type="radio" name="estado">Por <span style="padding-left: 13px;"> incorporar</span></label>
      </div>
    </div>
  </td>

    <td style="width: 10%;" class="seccion4columnvacias"> </td>

    <td style="width: 10%;" class="seccion4columnopciones">
    <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
      <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
        <label style="margin-left: 2px;  "><input type="radio"  name="estado">Planos</label>
      </div>
      
      <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
      <label style="margin-left: 2px;"><input type="radio" name="estado">Revisión<span style="padding-left: 13px;"> en sitio </span></label>
    </div>

      <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
        <label style="margin-left: 2px;"><input type="radio" name="estado">Otros <span style="padding-left: 13px;"> especidicar</span></label>
      </div>
    </div>
  </td>

    
  <td style="width: 10%;" class="seccion4columnopciones">
    <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
      <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
        <label style="margin-left: 2px; font-size: 6px; "><input type="radio"  name="estado">Destrucción</label>
      </div>
      <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px; ">
        <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span style=" padding-left: 13px; "> por Fuga</span></label>
      </div>
      <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; font-size: 6px; ">
        <label style="margin-left: 2px;"><input type="radio" name="estado">Venteo de<span style="padding-left: 13px;"> Hidrocarburos</span></label>
      </div>
    </div>
  </td>


    <td style="width: 10%;" class="seccion4columnvacias"> </td>
  </tr>


  <tr style="font-size: 7px; text-align: center; line-height: 6px;  ">    <!-- Fila4 -->
  <td style="width: 10%;" class="seccion4columnvacias"> </td>  
  <td style="width: 10%;" class="seccion4columnvacias"> </td>
  <td style="width: 10%;" class="seccion4columnvacias"> </td>
  <td style="width: 10%;" class="seccion4columnvacias"> </td>
  <td style="width: 10%;" class="seccion4columnvacias"> </td>

  <td style="width: 10%;" class="seccion4columnopciones">
  <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
    <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
      <label style="margin-left: 2px;  "><input type="radio"  name="estado">En <span style="padding-left: 13px;"> operación </span></label>
    </div>
    <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
      <label style="margin-left: 2px;"><input type="radio" name="estado">Fuera de <span style="padding-left: 13px;"> Operación </span></label>
    </div>
    <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
      <label style="margin-left: 2px;"><input type="radio" name="estado">Por <span style="padding-left: 13px;"> incorporar</span></label>
    </div>
  </div>
</td>

  <td style="width: 10%;" class="seccion4columnvacias"> </td>

  <td style="width: 10%;" class="seccion4columnopciones">
  <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
    <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
      <label style="margin-left: 2px;  "><input type="radio"  name="estado">Planos</label>
    </div>
    
    <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px;">
    <label style="margin-left: 2px;"><input type="radio" name="estado">Revisión<span style="padding-left: 13px;"> en sitio </span></label>
  </div>

    <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
      <label style="margin-left: 2px;"><input type="radio" name="estado">Otros <span style="padding-left: 13px;"> especidicar</span></label>
    </div>
  </div>
</td>

  
<td style="width: 10%;" class="seccion4columnopciones">
  <div style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
    <div style="width: 100%; background-color:  white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-bottom: 0px; ">
      <label style="margin-left: 2px; font-size: 6px; "><input type="radio"  name="estado">Destrucción</label>
    </div>
    <div style="width: 100%; background-color: white; height: 33.33%; border-bottom: 1px solid #A6A6A6; padding-top: 0px; padding-bottom: 4px; ">
      <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span style=" padding-left: 13px; "> por Fuga</span></label>
    </div>
    <div style="width: 100%; background-color: white; height: 33.33%; padding-top: 0px; padding-bottom: 0px; margin-bottom: 0px; font-size: 6px; ">
      <label style="margin-left: 2px;"><input type="radio" name="estado">Venteo de<span style="padding-left: 13px;"> Hidrocarburos</span></label>
    </div>
  </div>
</td>


  <td style="width: 10%;" class="seccion4columnvacias"> </td>
</tr>

    

    
    <!-- Agrega más filas aquí -->
  </tbody>
</table>




<div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="12" style="font-size: 9px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección VI. Acciones de los equipos y/o componentes fuera del PPCIEM</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 8%; " class="seccion6columntitulos" >Id del equipo o Componente</td>
                <td style="width: 8%; " class="seccion6columntitulos" >Tipo de equipo o Componente</td>
                <td style="width: 8%; " class="seccion6columntitulos" >Emiiones de metano del Año base (g/k g/t)</td>
                <td style="width: 7%; " class="seccion6columntitulos" >Variación de las emisiones de metano con respecto al Año base (g/k g/t)</td>
                <td style="width: 8%; " class="seccion6columntitulos" >Acciones programadas para el año calendario del reporte</td>
                <td style="width: 8%; " class="seccion6columntitulos" >Reducción de emisiones de metano estimadas por la acción(g/k g/t)</td>
                <td style="width: 11%;" class="seccion6columntitulos" >¿Se realizó la accion programada?</td>
                <td style="width: 8%; " class="seccion6columntitulos" >Reducción de emisiones de metano por la accion(g/k g/t)</td>
                <td style="width: 9%; " class="seccion6columntitulos" >En su caso, justificación tecnica de no realización de la acción</td>
                <td style="width: 9%; " class="seccion6columntitulos" >En su caso, fecha en la que se implementará la acción programada no realizada</td>
                <td style="width: 8%; " class="seccion6columntitulos" >Acciones programadas para el siguiente año de reporte</td>
                <td style="width: 8%; " class="seccion6columntitulos" >Fecha en la que se implementarán las acciones programadas para el siguiente año de reporte</td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 7%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 11%;" class="seccion6columntitulos">
                <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
                  <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
                    <label class="">Si<input type="radio" style=" margin-right: 0px; " name="estado"></label>
                  </div>
                  <div style="width: 50%; padding-top: 6px;">
                    <label class="">No<input type="radio" style=" margin-right: 3px;" name="estado"></label>
                  </div>
                </div>
                </td>
                <td style="width: 8%;" class="seccion6columntitulos"></td>
                <td style="width: 9%;" class="seccion6columntitulos"></td>
                <td style="width: 9%;" class="seccion6columntitulos"></td>
                <td style="width: 8%;" class="seccion6columntitulos"></td>
                <td style="width: 8%;" class="seccion6columntitulos"></td>
            </tr>
            
            <tr style="width: 100%; ">
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 7%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 11%;" class="seccion6columntitulos">
                <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
                  <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
                    <label class="">Si<input type="radio" style=" margin-right: 0px; " name="estado"></label>
                  </div>
                  <div style="width: 50%; padding-top: 6px;">
                    <label class="">No<input type="radio" style=" margin-right: 3px;" name="estado"></label>
                  </div>
                </div>
                </td>
                <td style="width: 8%;" class="seccion6columntitulos"></td>
                <td style="width: 9%;" class="seccion6columntitulos"></td>
                <td style="width: 9%;" class="seccion6columntitulos"></td>
                <td style="width: 8%;" class="seccion6columntitulos"></td>
                <td style="width: 8%;" class="seccion6columntitulos"></td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 7%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 8%; " class="seccion6columntitulos"></td>
                <td style="width: 11%;" class="seccion6columntitulos">
                <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
                  <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
                    <label class="">Si<input type="radio" style=" margin-right: 0px; " name="estado"></label>
                  </div>
                  <div style="width: 50%; padding-top: 6px;">
                    <label class="">No<input type="radio" style=" margin-right: 3px;" name="estado"></label>
                  </div>
                </div>
                </td>
                <td style="width: 8%;" class="seccion6columntitulos"></td>
                <td style="width: 9%;" class="seccion6columntitulos"></td>
                <td style="width: 9%;" class="seccion6columntitulos"></td>
                <td style="width: 8%;" class="seccion6columntitulos"></td>
                <td style="width: 8%;" class="seccion6columntitulos"></td>
            </tr>
        </table>
    </div>
</div>



<table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td colspan="4" class="tituloseccionIV" >Sección VII. Documentos anexos al formato</td>
      </tr>
      <tr class="filasseccionIV">
        <td class="opcionesseccionIV" >Si</td>
        <td class="opcionesseccionIV" >No</td>
        <td class="opcionesseccionIV" >No aplica</td>
        <td style="background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; text-align: start; line-height: 4px; padding-left: 5px;">Documento</td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
      <tr class="filasseccionIV" >
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculostexto" >Indicar las características del SRV y el número de pozos, equipos y/o Componentes conectados al mismo.</td>
      </tr>
      <tr class="filasseccionIV" >
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculostexto" >Reportes trimestrales del programa de Detección y Reparación de Fugas del año calendario correspondiente.</td>
      </tr>
      <tr class="filasseccionIV" >
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculostexto" >Justificación técnica pormenorizada de las acciones equivalentes o superiores.</td>
      </tr>
     
            

      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>


  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td  class="seccionIyII" >Nombre del responsable que implementó el programa</td>
        <td  class="seccionIyII" >Firma del responsable que implementó el programa</td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
      <tr class="filafirmasynombre" >
        <td class="firmasynombre"> <label class="margendospx"> </td>
        <td class="firmasynombre"> <label class="margendospx"> </td>
      </tr>
      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>

  <div>
    <p class="parrafodos"> Los datos personales recabados para la atención de su trámite serán protegidos, incorporados y tratados, con fundamento en el artículo  15 de la 
    LFPA, Lo anterior en cumplimiento del décimo séptimo de los lineamientos de protección de datos personales publicados en el Diario Oficial de la 
    Federación el 30 de septiembre de 2005.
     </p>
  <div>

  


  </div> <!----------------------------------Hoja 2 Fin ----------------------->

  <div> <!----------------------------------Hoja 3 --------------------------->


  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td class="seccionIyII" >Instructivo para el llenado del formato Anexo VI </td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; font-size: 9px; background-color: #ffffff; border-color: #A6A6A6;  ">
      <tr style="filasseccionIV" >
        <td style="width: 100%; height: 45px; background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; line-height: 7px;">  
        
        <p class="text-align: start;  padding: 0px; margin: 0px; line-height: 0px; left: 2%;"> <strong><span style=" color: transparent;">---</span>Indicaciones generales</strong><p>
          <ol type="a" >
            <li class="interlineadodiezpx" >Esta solicitud deberá ser llenada en computadora.</li>
            <li class="interlineadodiezpx" >Esta solicitud deberá presentarse a la Agencia en medios físicos, magnéticos o electrónicos.</li>
          </ol>

        <div style=" position: relative; width: 100%;">
        <p class="text-align: start; left: 2%;"> <strong><span style=" color: transparent;">---</span>Información requerida en el formato</strong><p>
        <div>
        <ol type="I" start="1" >
          <li>Sección I: Datos generales</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px;  ">
                <li class="interlineadodiezpx" >Escribir el nombre de la instalación</li>
                <li class="interlineadodiezpx" >Escribir la ubicación de la instalación. Domicilio y coordenadas geográficas en UTM (shape file)</li>
                <li class="interlineadodiezpx" >Escribir la Clave Única de Registro del Regulado</li>
                <li class="interlineadodiezpx" >Escribir el año calendario del reporte</li>
              
            </ol>
          <li>Sección II: Mejora continua</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px; ">
                <li class="interlineadodiezpx" >Escribir el volumen de emisiones de metano del Año base de acuerdo con lo establecido en el artículo  19 y lo reportado en el PPCIEM Dictaminnado entregado a la Agencia, en gramos(g), kilogramos (kg) o toneladas(t).  </li>
                <li class="interlineadodiezpx" >Escribir la variación de las emisiones de metano con respecto al Año base en gramos(g), kilogramos(kg) o toneladas (t). Para ello, deberán utilizar la siguiente formula.</li>
                <p>𝑉𝑎𝑟𝑖𝑎𝑐𝑖ó𝑛 = 𝐸𝑚𝑖𝑠𝑖𝑜𝑛𝑒𝑠 𝑑𝑒 𝑚𝑒𝑡𝑎𝑛𝑜 𝑑𝑒𝑙 𝑎ñ𝑜 𝑐𝑎𝑙𝑒𝑛𝑑𝑎𝑟𝑖𝑜 𝑑𝑒𝑙 𝑟𝑒𝑝𝑜𝑟𝑡𝑒 − 𝐸𝑚𝑖𝑠𝑖𝑜𝑛𝑒𝑠 𝑑𝑒 𝑚𝑒𝑡𝑎𝑛𝑜 𝑑𝑒𝑙 𝐴ñ𝑜 𝑏𝑎𝑠𝑒</p>
                <li class="interlineadodiezpx" >En su caso, justificación técnica del incremento de las emisiones de metano.  </li>
                </ol>
          <li>Sección III: Acciones programadas y/o implementadas
            <ol type="a" style=" padding-top: 5px; padding-bottom: 0px; ">
                <li class="interlineadodiezpx" >Se debera llenar un fila por cada equipo o Componente. En caso de tener más de una acción programada por equipo se deberá llenar una fila por cada una.</li>
                <li class="interlineadodiezpx" >Anotar el Id del equipo o Componente.</li>
                <li class="interlineadodiezpx" >Indicar el tipo de equipo o Componente.</li>
                <li class="interlineadodiezpx" >Indicar las emisiones de metano del Año base del equipo o Componente en gramos (g), kilogramos (kg) o toneladas (t), reportadas en el PPCIEM</li>
                <li class="interlineadodiezpx" >Escribir la variación de las emisiones de metano con respecto al Año base, en gramos (g), kilogramos (kg) o toneladas (t), por equipo o Componente. Para ello, deberan utilizar la siguiente formula:</li>
                <p>𝑉𝑎𝑟𝑖𝑎𝑐𝑖ó𝑛 = 𝐸𝑚𝑖𝑠𝑖𝑜𝑛𝑒𝑠 𝑑𝑒 𝑚𝑒𝑡𝑎𝑛𝑜 𝑑𝑒𝑙 𝑎ñ𝑜 𝑐𝑎𝑙𝑒𝑛𝑑𝑎𝑟𝑖𝑜 𝑑𝑒𝑙 𝑟𝑒𝑝𝑜𝑟𝑡𝑒 − 𝐸𝑚𝑖𝑠𝑖𝑜𝑛𝑒𝑠 𝑑𝑒 𝑚𝑒𝑡𝑎𝑛𝑜 𝑑𝑒𝑙 𝐴ñ𝑜 𝑏𝑎𝑠𝑒</p> 
                <li class="interlineadodiezpx" >Anotar las acciones de prevención y control integral de las emisiones de metano programadas para el año calendario del reporte.</li>
                <li class="interlineadodiezpx" >Escribir la reducción de emisiones de metano estimadas debido a la implementación de la acción en gramos (g), kilogramos(kg) o toneladas (t).</li>
                <li class="interlineadodiezpx" >Marcar con una X si se realizó o no la acción programada en el año calendario del reporte.</li>
                <li class="interlineadodiezpx" >Escribir la reducción de emisiones de metano resultante de la acción implementada en gramos(g), kilogramos (kg) o toneladas (t)</li>
                <li class="interlineadodiezpx" >En caso de no realizar la acción programada escribir la justificación técnica.</li>
                <li class="interlineadodiezpx" >En su caso, fecha en la que se implementara la acción programada no realizada.</li>
                <li class="interlineadodiezpx" >Escribir las acciones programadas para el siguiente año del reporte</li>
                <li class="interlineadodiezpx" >Escribir la fecha en la que se implementarán las acciones programadas para el siguiente año del reporte.</li>
            </ol>
          </li>
          <li style=" padding-top: 5px; ">Sección IV: Operaciones en pozos fuera de Año base
            <ol type="a" style=" padding-top: 5px; padding-bottom: 0px; ">
                <li class="interlineadodiezpx" >Se  deberá llenar una fila por cada pozo.</li>
                <li class="interlineadodiezpx" >En caso de identificar más de un tipo de emisión por pozo, se deberá llenar una fila por cada tipo de emisión</li>
                <li class="interlineadodiezpx" >Anotar el Id del pozo.</li>
                <li class="interlineadodiezpx" >Indicar el tipo de pozo</li>
                <li class="interlineadodiezpx" >Especificar el tipo de operación del pozo de acuerdo con lo establecido enn el articulo 13, fracción II, incisos a), c), e), f) y h) de las presentes Disposiciones. En caso de realizar más de una operación en el mismo pozo se deberán indicar en filas diferentes. </li>
                <li class="interlineadodiezpx" >Indicar la fecha en la que la operación se realizó.</li>
                <li class="interlineadodiezpx" >Marcar con una X el estado del pozo, equipo o Componente como: en operación, fuera de operación o por incorporar, según corresponda.</li>
                <li class="interlineadodiezpx" >Indicar las condicionnes operativas (temperatura y presión entre otras) del pozo.</li>
                <li class="interlineadodiezpx" >Marcar con una X los elementos que se utilizaron en la identificación de la emisión de metano, en caso de utilizarse elementos distintos a los planos y la revisión en sitio, especificar dichos elementos.</li>
                <li class="interlineadodiezpx" >Marcar con una X el tipo de clasificación de la emisión de metano de conformidad con el articulo 14 de las presentes disposiciones.</li>
                <li class="interlineadodiezpx" >Anotar las emisiones de metano emitidas anualmente por pozo, equipo o Componente en  gramos (g), kilogramo(kg) o toneladas (t).</li>
            </ol>
          </li>
        </ol>        
        </td>
      </tr>
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>






  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td class="seccionIyII" >Instructivo para el llenado del formato Anexo VI </td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; font-size: 9px; background-color: #ffffff; border-color: #A6A6A6;  ">
      <tr style="filasseccionIV" >
        <td style="width: 100%; height: 45px; background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; line-height: 7px;">  
        

        <ol type="I" start="5" >
          <li>Sección V: Diagnóstico de los equipos y/o Componentes fuera del PPCIEM</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px;  ">
                <li class="interlineadodiezpx" >Se deberá llenar una fila por cada pozo, equipo o Componente.</li>
                <li class="interlineadodiezpx" >En caso de identificar más de un tipo de emisión por pozo, equipo o Componente se deberá llenar una fila por cada tipo de emisión de metano.</li>
                <li class="interlineadodiezpx" >Anotar el Id del pozo, equipo o Componente.</li>
                <li class="interlineadodiezpx" >indicar el tipo de pozo, equipo o Componente.</li>
                <li class="interlineadodiezpx" >Tratándose de pozos, especificar el tipo de operación del pozo de acuerdo con lo establecido en el artículo 13, fracción II, incisos b),
                d) y g) de las presentes Disposiciones. En caso de realizar más de una operación en un mismo pozo se deberán indicar en filas diferentes.</li>
                <li class="interlineadodiezpx" >Tratándose de equipos o Componentes, indicar las actividades y operaciones asociadas a los mismos.</li>
                <li class="interlineadodiezpx" >Indicar la fecha en la que la emisión se identificó.</li>
                <li class="interlineadodiezpx" >Marcar con una X el estado del pozo, equipo o Componente como: en operación, fuera de operación o por incorporar, según corresponda.</li>
                <li class="interlineadodiezpx" >Indicar las condiciones operativas (temperatura y presión, entre otras) del pozo, equipo o Componente.</li>
                <li class="interlineadodiezpx" >Marcar con una X los elementos que se utilizaron en la identificación de la emisión de metano, en caso de utilizarse elementos distintos a los planos y a la revisión en sitio, especificar dichos elementos.</li>
                <li class="interlineadodiezpx" >Marcar con una X el tipo de emisión de metano de conformidad con el artículo 14 de las presentes Disposiciones.</li>
                <li class="interlineadodiezpx" >Anotar las emisiones de metano emitidas anualmente por cada pozo, equipo o Componente en gramos (g), kilogramos (kg) o toneladas (t).</li>
            </ol>
          <li>Sección VI: Acciones de los equipos y/o Componentes fuera del PPCIEM</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px; ">
                <li class="interlineadodiezpx" >Se deberá llenar una fila por cada equipo o Componente. En caso de tener más de una acción programada por equipo se deberá llenar una fila por cada una.</li>
                <li class="interlineadodiezpx" >Anotar el Id del equipo o Componente.</li>
                <li class="interlineadodiezpx" >Indicar el tipo de equipo o Componente.</li>
                <li class="interlineadodiezpx" >ndicar las emisiones de metano del Año base del equipo o Componente en gramos (g), kilogramos (kg) o toneladas (t), reportadas en el PPCIEM.</li>
                <li class="interlineadodiezpx" >Escribir la variación de las emisiones de metano con respecto al Año base, en gramos (g), kilogramos (kg) o toneladas (t), por equipo o Componente. Para ello, deberán utilizar la siguiente fórmula: </li>
                <p>𝑉𝑎𝑟𝑖𝑎𝑐𝑖ó𝑛 = 𝐸𝑚𝑖𝑠𝑖𝑜𝑛𝑒𝑠 𝑑𝑒 𝑚𝑒𝑡𝑎𝑛𝑜 𝑑𝑒𝑙 𝑎ñ𝑜 𝑐𝑎𝑙𝑒𝑛𝑑𝑎𝑟𝑖𝑜 𝑑𝑒𝑙 𝑟𝑒𝑝𝑜𝑟𝑡𝑒 − 𝐸𝑚𝑖𝑠𝑖𝑜𝑛𝑒𝑠 𝑑𝑒 𝑚𝑒𝑡𝑎𝑛𝑜 𝑑𝑒𝑙 𝐴ñ𝑜 𝑏𝑎𝑠𝑒</p>
                <li class="interlineadodiezpx" >Anotar las acciones de prevención y control integral de las emisiones de metano programadas para el año calendario del reporte.</li>
                <li class="interlineadodiezpx" >Escribir la reducción de emisiones de metano estimadas debido a la implementación de la acción en gramos (g), kilogramos (kg) o toneladas (t).</li>
                <li class="interlineadodiezpx" >Marcar con una X si se realizó o no la acción programada en el año calendario del reporte.</li>
                <li class="interlineadodiezpx" >Escribir la reducción de emisiones de metano resultante de la acción implementada en gramos (g), kilogramos (kg) o toneladas (t).</li>
                <li class="interlineadodiezpx" >En caso de no realizar la acción programada escribir la justificación técnica.</li>
                <li class="interlineadodiezpx" >En su caso, fecha en la que se implementará la acción programada no realizada.</li>
                <li class="interlineadodiezpx" >Escribir las acciones programadas para el siguiente año del reporte.</li>
                <li class="interlineadodiezpx" >Escribir la fecha en la que se implementarán las acciones programadas para el siguiente año del reporte.</li>
                </ol>
          <li>Sección VII: Documentos anexos al formato
            <ol type="a" style=" padding-top: 5px; padding-bottom: 0px; ">
                <li class="interlineadodiezpx" >Adjuntar la documentación sobre las características del SRV y los equipos conectados al mismo.</li>
                <li class="interlineadodiezpx" >Adjuntar los informes trimestrales del programa de Detección y Reparación de Fugas que se llevaron a cabo en el año calendario del reporte (Anexo IV).</li>
                <li class="interlineadodiezpx" >Adjuntar la justificación técnica pormenorizada de las acciones equivalentes o superiores de conformidad con el artículo 86.</li>
            </ol>
          </li>
        </ol>        
        </td>
      </tr>
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>
 
  
  </div> <!----------------------------------Hoja 3 Fin ----------------------->

   
  <!--Footer 1--> 
  <div style=" width:100%; height: auto; bottom: 0; background-color: #D9D9D9; border-top: 1px solid #767171; margin-top: 12px;" >
  <div style="width:22%; height: auto; display:inline-block; left:0; vertical-align: middle;  "> <img src="https://i.imgur.com/09HeOR0.png" width="100px" height="auto" style="padding-left: 18px; padding-bottom: 15px;" > </div>
  <div style="width:11%; height: auto; display:inline-block; left:20%; vertical-align: middle; "> <img src="https://i.imgur.com/Kz7xzj7.png" width="60px" height="auto"  style="padding-bottom: 11px;"> </div>
  <div style="width:11%; height: auto; display:inline-block; left:40%; vertical-align: middle; "> <img src="https://i.imgur.com/mp2K5fP.png" width="60px" height="auto"  style="padding-bottom: 15px;"> </div>
  <div style="width:12%; height: auto; display:inline-block; left:60%; vertical-align: middle;  "> <img src="https://i.imgur.com/Ws1Ngrd.png" width="60px" height="auto" style="padding-bottom: 15px;" > </div>
  <div style="width:39%; height: auto; display:inline-block; left:80%;"> 
      <p style=" line-height: 0px; padding: 0px; padding-top: 10px; margin: 0px; font-size: 8px; font-weight: 600; ">Contacto: </p>  
      <p style=" line-height: 9px; font-size: 7px; padding-right: 50px; "> Boulevard Adolfo Ruiz Cortines No. 4209,
      Colonia Jardines en la Montaña, C.P. 14210,
      Delegación Tlalpan, Ciudad de México,
      Teléfono (+52.55) 9126-0100</p>
  </div>


  </body>
  
  </html>
    `;

    const opciones = {
        "format": "A4", //A3, A4, A5, Legal, Letter 
        "orientation": "portrait",
        "border": {
            "top": ".8cm",
            "right": ".6cm",
            "bottom": ".6cm",
            "left": ".6cm",
        },
        childProcessOptions : {
          env : {
            OPENSSL_CONF : '/dev/null' ,
          } ,
        }
    }

    const directorio = "./public/files/constancia.pdf";

    pdf.create(contenido, opciones).toFile(directorio, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log('archivo creado');
        }
    });
}

generarPDF();
